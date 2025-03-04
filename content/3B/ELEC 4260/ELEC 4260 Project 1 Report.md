---
title: ELEC 4260 Project 1
tags:
  - elec4260
date: 2025-03-03
aliases:
  - elec 4260 project 1
draft:
---
MA Kai Aimo (21195092)

## 1. Wheel Odometry
The node subscribes to joint state messages to obtain wheel rotations, computing the linear and angular displacement from the differences in wheel positions, and updating the robot’s global pose accordingly. The node then publishes both the updated path and odometry messages, including velocity estimates derived from time intervals between measurements.

Wheel odometry result:

![[Pasted image 20250303224223.png]]

---
## 2. Mapping
Laser scan measurements are transformed from the sensor's frame into the map frame, aligning them with the robot's base footprint and establishing a consistent spatial reference by initializing the map origin at the robot’s starting position. A Bresenham line algorithm is used to trace the path of each laser beam, updating cell statuses by incrementing scan counts for endpoints and applying a decay mechanism for free space. Cells are marked as confirmed once their scan count surpasses a threshold. Finally, the occupancy grid is published.

Mapping result:

![[ELEC 4260 Project 1.png]]

---
## 3. ICP Odometry
The occupancy grid map is turned into a point cloud by extracting cells that represent obstacles, and incoming laser scans are projected into the map frame. For each scan, the node transforms the laser data into a 2D point cloud using available `tf` transformations. Then, the ICP algorithm is applied to align the current scan's point cloud with the obstacle map cloud. This process computes the optimal rigid transformation by matching corresponding points and minimizing the alignment error through centroid computation, cross-covariance analysis, and singular value decomposition (SVD). The updated transformation is broadcast as a new map-to-base transform, and an odometry message reflecting the refined pose is published.

ICP odometry result:

![[ELEC 4260 Project 1-1.png]]

---
## 4. Real-World
Overall, the real-world performance of the above functionalities was comparable to the Gazebo simulation, with some discrepancies:
1. The walls were not enclosed perfectly, leading to "streaks" appearing.
2. The quality of wheel and ICP odometry was generally slightly worse.

See video here: https://youtu.be/X82yDA6dX0Y. Path produced by wheel odometry is hard to see (visible at 00:30 - 00:40), and at 0:42 I accidentally input an extra space into the` /robot_path` topic name in RViz while trying to stop the robot.

The wheel odometry path result is shown below, since it's not readily visible in the video.

![[ELEC 4260 Project 1-2.png]]

---
## 5. Bonus
### 5.1. Extended Kalman Filter

### 5.2. Temporal Eigenvector Alignment