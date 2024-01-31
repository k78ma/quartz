---
title: Baymax
tags:
  - polymath
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
docker run -it --name baymax --rm -v $(pwd):/baymax_ws osrf/ros:humble-desktop bash
```

Building/running node:
```bash
cd baymax_ws
colcon build --packages-select baymax
source install/setup.bash
ros2 launch baymax baymax_launch.py
```

Rosbag node:
```bash
docker run -it --rm -v $(pwd)/zvision_ugv_data:/zvision_ugv_data --name rosbags osrf/ros:humble-desktop bash

ros2 bag play zvision_ugv_data/zvision_ugv_data_1/zvision_ugv_data_1.db3 --loop --clock
```

View rostopics just in the same as rosbag container:
```bash
docker exec -it rosbags /bin/bash
source /opt/ros/humble/setup.bash
ros2 topic list
```

TODO:
- [x] Latency 6 million seconds fix
	- [ ] Negative latency?
- [x] YAML Format
- [x] Tolerance setting
- [x] Blank messages
- [ ] Repeated messages
- [x] Publication rate
- [x] Latency tolerances
- [x] Distributed diagnostics
- [ ] Heartbeat status aggregator
	- [ ] Standard (boolean?) format for status
- [ ] Failure logging
- [ ] Check existence of all expected topics
- [ ] Default to `BaseSensor` for unknown/unspecified sensor type
- [ ] Unit tests?

For the minimal release/first review, I want this to be in a modular enough state that new types of sensors/nodes can be added easily
