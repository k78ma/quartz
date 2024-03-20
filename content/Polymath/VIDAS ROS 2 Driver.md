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

docker run -it --name vidas -p 8765:8765 --rm -v $(pwd):/vidas_ros2_ws osrf/ros:humble-desktop bash

cd vidas_ros2_ws
```

Lifecycle
```
ros2 lifecycle set /vidas_ros2_driver configure
ros2 lifecycle set /vidas_ros2_driver activate
ros2 lifecycle set /vidas_ros2_driver deactivate
ros2 lifecycle set /vidas_ros2_driver cleanup
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

TODO:
- Make faster
- Costmap2D from point cloud
- Automate putting the camera in perception mode

Criteria:
- Colorized point cloud consistency issue
- Costmap from both their cost0 frame and our costmap_2d
- Test outside