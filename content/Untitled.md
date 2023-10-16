### How to effectively record robot data for visibility and debugging



DAVID TARAZI

OCTOBER 11, 2022



](https://www.polymathrobotics.com/team/david-tarazi)

Hello, I'm David Tarazi. I interned as a Robotics Engineer at Polymath Robotics this summer and wanted to share one of my projects that could be leveraged on any robot.

A couple weeks ago we encountered what I’ll call the “doughnut” problem.

**Our robot tractor’s steering wheel got stuck turned all the way to the left, and couldn’t exit that bad state.**

The robot was in autonomy mode rocking back and forth, trying to reach a waypoint that was impossible to reach given the robot could literally only drive in doughnuts.

![](https://global-uploads.webflow.com/62c8ad6737aca14c32a09522/6345fa37624188029e31e879_nowwhat.png)

cab view of our tractor, "Farmonacci"

We had an important demo coming up within the next hour, so root-causing the problem was less important than getting the robot back into a functional state. In the rush, we restarted nodes and eventually power cycled the robot to recover.

While the robot became operational again, we don’t have the data that could reveal what caused the issue and how to prevent it from occurring again in the future.

Bugs like this carry critical data, as they’re rare events that are nearly impossible to replicate. The scary thing is that this could happen again at any time, and we have no means to understand the problem.

The brute force way to understand bugs with data might be to always record and store system data, but there are a few issues with this approach.

**To begin, no one is going to comb through hours of data trying to find the exact moment an error occurred.**

Secondly, if we saved only the sensor data at all times on our robot, we’d use around 20Gb of storage space every minute and run out of disk space within an hour of operation!

So how do we effectively capture data from events like the doughnut problem, and just as importantly, make them visible to our team?

**To both expose and capture events, we focused on two levels of granularity working together:**

1. **High level metrics** for events such as a count of “Emergency Stop Button (E-Stop) presses” to make them easily observable to our team with minimal effort
2. **Small snapshots of relevant robot data** (like the velocity input commands) **_linked_** to the high level metric for a given event so that we can analyze, debug, and address problems that occur

Before diving into how we achieved this solution, here’s what the doughnut problem could’ve looked like with this approach.

1. The person monitoring the vehicle notices the robot can only drive in circles and hits the E-Stop button
2. The “_magic”_ we have built programmatically adds a count to our “E-Stop presses” high level metric and makes it available for our team to see without needing access to the physical robot. At the same time, the _magic_ permanently stores buffered relevant data from just before the E-Stop was pressed with a name and timestamp that corresponds to that high level metric
3. Later on, myself or another engineer could find that event in our metrics, then access and replay the detailed data corresponding to that event. From there, we can analyze the failure and hopefully prevent it from happening again in the future

Without further ado, here’s how we built that _magic_.

‍

#### Prometheus for Metrics

To get this high level view of robot performance, we used Prometheus.

[Prometheus](https://prometheus.io/) is a time series database that stores metrics by periodically pulling data from targets over HTTP. These targets can be applications that exposes Prometheus metrics about itself, or intermediary pieces of software (so-called "exporters").

Exporters translate data from an existing system (like a ROS topic on our robot) into the Prometheus metrics exposition format. The Prometheus server then makes the collected data available for queries, either via its built-in web UI, using dashboarding tools such as [Grafana](https://grafana.com/), or by direct use of its HTTP API.

We wrote an exporter that translates data on the robot, such as E-Stop presses, to Prometheus metrics.

Then using Grafana to display the data, we can view these events over time in a web browser without needing access to the robot:

![Spoofed data values from our Grafana dashboard](https://global-uploads.webflow.com/62c8ad6737aca14c32a09522/6345fa7d9142ee1eeba0d9d6_fake_data.png)

Spoofed data values from our Grafana dashboard

Under the hood, our robot tractor (named "Farmonacci," as a play on the famous polymath Fibonacci) exports this data to a Prometheus database that lives on the vehicle.

Then, another Prometheus instance running on a computer in our office 2 hours away from Farmonacci scrapes data from the Farmoancci Prometheus instance and hosts the Grafana dashboard to visualize it.

Let’s say we build a new robot for managing shipping ports (I’ll call it "Porthagoras" to stay on theme).

We can run the same exporter on Porthagoras, and add Porthagoras as another target for the Prometheus instance in our office, and boom. Metrics from anywhere.

This system is scalable as we can easily get an overview of an entire fleet of robots.

While these metrics are useful for overall performance, they don’t provide nearly enough information to answer a question like “what’s causing E-Stop presses while we’re in motion?”

That’s where [rosbags](http://wiki.ros.org/rosbag) come in.

‍

#### Smart Rosbag Capturing

To understand error cases, we need much more information than a count of how many times an E-Stop was pressed.

But we also have to be careful, because too much data is distracting and space consuming as mentioned before. To work around these limits, we need to be meticulous about what data we capture and when to capture it.

Effectively we work around these limits by capturing data on a programmatic trigger. We buffer data in RAM from a configurable list of ROS topics with defined limits on memory usage and how long to store messages.

Then, when we want to permanently save data, we take the buffered messages and write them to storage space, so we only keep data related to events that we care about.

To avoid reinventing the wheel, we started by using the open source [rosbag_snapshot](http://wiki.ros.org/rosbag_snapshot) package.

The rosbag_snapshot package maintains a buffer of recent messages from specified ROS topics, and using a ROS service, can be triggered to write the buffer to a rosbag.

While this ROS service provides feedback for whether or not we successfully wrote the data to storage, it also forces the node that called the service to wait until we have received feedback before doing anything else (ROS services are blocking).

Although not initially obvious, blocking a node could be a huge problem.

Take an instance where we’re buffering some unknown amount of data on the robot and I have configured my autonomy node to programmatically trigger the rosbag_snapshot node to save data if we can’t complete a goal.

When we trigger the snapshot, we can’t determine how long it will take to write data to storage, and my autonomy node will be stuck waiting for a response — all the while, the robot could be driving with some unknown behavior.

To avoid this issue, we wrote a small wrapper around the package (that we’ll try to open source in the future). The wrapper listens to a ROS topic published by another node, and then calls the rosbag_snapshot service. This allows the autonomy node to use a ROS publisher which is not blocking to trigger the snapshot; only the wrapper node gets blocked since the wrapper calls the service in the end.

Nonetheless, the usage is simple:

1. Configure the rosbag_snapshot buffer to have limits on how much memory it can use, how long to store messages for, and what topics to listen to on launch
2. Create a configuration for which topics to write to storage from that buffer for each different trigger. I include this configuration since even if we’re buffering camera data, a navigation failure might trigger a snapshot, but we don’t need to keep the camera data for that specific event.
3. Program catches for events in existing code, and publish a message with the trigger configuration name to the wrapper which will write those topics to a rosbag on the robot

Once we’ve setup both Prometheus and rosbag_snapshot, we can listen for an event like an E-Stop press, add a count to our Prometheus metric, and trigger the rosbag_snapshot package to write selected buffered robot data to storage.

Without too much development, we now have visibility on high level robot data, and the detailed data behind it.

‍

#### The Code

**Want to check it out?** Here's the code, open-sourced:

[https://github.com/polymathrobotics/event_recording](https://github.com/polymathrobotics/event_recording)

‍

#### The Doughnut Problem Revisited

Let’s fast forward a few months into the future for this hypothetical situation:

Polymath’s next intern mentions that Farmonacci’s steering wheel got stuck in position during testing, and they pressed the E-Stop. They fixed the issue by restarting the robot and didn’t think much of it.

Sounds familiar…

**This time, I can use our data capturing tools to investigate the issue.**

Starting with the Prometheus browser interface (or using Grafana), I find the event on the “estop_presses” metric:

![view of the Prometheus browser interface looking at the “estop presses” metric](https://global-uploads.webflow.com/62c8ad6737aca14c32a09522/6345fa0b74c7e652e3fff154_estop_driving.png)

view of the Prometheus browser interface looking at the “estop presses” metric

Hovering over the event, I find the timestamp at **2022-08-08-17-56-57** and confirm the event.

Then following the file path for “estop_presses” events on the vehicle, I find the associated rosbag holding the detailed data:

![terminal view of the corresponding rosbag file saved after an estop press](https://global-uploads.webflow.com/62c8ad6737aca14c32a09522/6345fabe12a842a25c9a72f1_foundit.png)

terminal view of the corresponding rosbag file saved after an estop press

Now, I can copy the data onto my laptop, replay it, and in this hypothetical situation clearly find and fix the issue.

I talked a lot about the doughnut problem here, but this tool could be used for other situations too.

When we encounter events that aren’t as blatantly visible to the human eye, and when our robots eventually aren’t monitored at all times, passive monitoring and exposure will be key to improving our system.

‍

#### Future Improvements

**While this system works well, there are some manual processes and details that could be improved.**

To get a detailed view of the rosbags, an engineer has to manually copy the data off of the robot, which can take a while and requires the robot being on and accessible.

In the future we could upload rosbags to the cloud overnight, to make them accessible without the robot. We could then include links to the rosbag data in the cloud in our Prometheus metrics to eliminate this manual process.

**The program also isn’t managing the system’s storage.**

Over time, the storage space on the robot will slowly fill up as rosbags are saved. In the future, we’ll add a way to automatically remove old rosbag files when space is running low.

**Finally, we could configure the buffer to listen at a specific rate for each topic** — we probably don’t need 60fps camera data if we’re debugging, and we could get away with a quarter of the image framerate (and therefore a quarter of the memory and disk space when buffered or saved to storage).