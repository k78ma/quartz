---
title: VIDAS ROS 2 Driver
tags:
  - polymath
date: 2024-02-07
aliases:
  - Compound Eye
  - CE VIDAS
draft: "true"
---
```shell
cd vidas_ros2_ws

docker run -it --name vidas --rm -v $(pwd):/vidas_ros2_ws osrf/ros:humble-desktop bash

cd vidas_ros2_ws
```


Launch command:
```
ros2 launch vidas_ros2 vidas_ros2_launch.py
```

Questions:
- Depth image message type and visualization
- OccupancyGrid → Costmap2D
- OccupancyGrid GPS requirement?

Requires: 12V power supply – at least 12V/5A because system requires 60W during startup