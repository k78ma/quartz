---
title: LiDAR
tags:
  - mte544
  - robotics
date: 2025-11-01
aliases: lidar
---
LiDAR measures distance using laser light.
- A laser sends out a short light pulse.
- It reflects off objects in the environment.
- A photodetector measures the time of flight (how long the light takes to return).
- Light travels extremely fast, resulting in very accurate range measurements

Each laser provides a point in space $(x,y,z)$ and sometimes may also provide an intensity. A full scan produces a 3D map of the surroundings.

Mechanical spinning LiDAR:
- Rotates 360° continuously
- Sends out many beams at different vertical angles
- Creates a 2D or 3D point cloud
- Common example: Velodyne VLP-16

Solid-State LiDAR (no moving parts)
- Uses MEMS mirrors or phased light array
- Smaller, cheaper, robust, but narrower FOV
- Example: Intel RealSense L515