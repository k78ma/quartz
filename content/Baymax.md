---
title: Baymax
tags: 
date: 2024-01-16
aliases: 
draft: "true"
---
Output: 
- ROS logs (ROS diagnostics) - quick to understand/human readable
	- Be able to set tolerances in config file
- Heartbeat message in safety system

Sensor checker should be fairly basic – node checker will be more complex
- Specify desired inputs and outputs in config file

ROSlibpy – able to read every message without ROS dependencies
- This functionality appears to be provided by [[ROS Bridge]]

Dynamic switching between nodes to reduce overhead
- Only subscribe to topics every 0.1 seconds or something
	- Alerting failure won't be instantaneous but we know there's a 2 second reaction time
- Alternatively, always be subscribed but only do the calculations every $x$ seconds; this is because subscribing to things has a time/resource cost in itself

General things to check: Time stamp, latency, header, blank/repeated messages

[Quality of Service settings — ROS 2 Documentation: Rolling documentation](https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Quality-of-Service-Settings.html)

ROS 2 executor, callback group, quality of service settings

ROS 2 covariance injector has a cool idea for this:
- Base sensor class – specific sensor classes inherit from this base class and all return the same thing
- If there's some sensor that publishes something that doesn't exist or can't be identified, we just default it to a generic sensor checker that just checks basic header/timestamp, etc

### Notes
Docker run command for Baymax node:
```bash
docker run -it --rm -v $(pwd):/baymax_ws osrf/ros:humble-desktop bash
```

Building/running node:
```bash
cd baymax_ws
colcon build --packages-select baymax
. install/setup.bash
ros2 run baymax baymax_node
```

Rosbag node:
```bash
docker run -it --rm -v $(pwd)/zvision_ugv_data:/zvision_ugv_data --name osrf/ros:humble-desktop bash

ros2 bag play zvision_ugv_data/zvision_ugv_data_1/zvision_ugv_data_1.db3 --loop
```
