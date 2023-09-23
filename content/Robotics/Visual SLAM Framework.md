---
title: Visual SLAM Framework
tags:
  - robotics
date: 2023-09-23
---
Classical SLAM framework for vision-based approaches.

![[Pasted image 20230923005710.png]]

- Sensor data: Acquire and pre-process camera images or other available data
- Visual odometry: Estimate camera movement between adjacent frames and generate a rough local map
- Filtering/optimization: Receive camera poses from different timestamps from VO and results from loop closing, applies optimization to generate a fully optimized trajectory and map.
- Loop closing: Determine whether or not the robot has returned to its previous position in order to reduce accumulated drift.
- Reconstruction: Construct a task-specific map based on estimated camera trajectory