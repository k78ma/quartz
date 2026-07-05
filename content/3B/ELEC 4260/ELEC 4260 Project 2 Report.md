---
title: ELEC 4260 Project 2 Report
tags:
  - elec4260
date: 2025-03-24
aliases: []
---
MA Kai Aimo (21195092)
- Simulation video: https://youtu.be/BNEOgvr_kBM
- Real-world video: https://youtu.be/iM65Z2CJQ2w

---
## 1. A-Star Pathfinding
The A\* node performs obstacle inflation based on the robot's radius to ensure safe navigation and computes the shortest path from the robot's current position to a goal using the A\* algorithm \[1]. The raw path is then smoothed using cubic Bezier curves after uniform sampling to generate a more navigable trajectory. The node subscribes to map and goal topics, and publishes both the raw and smoothed paths, as well as the inflated map for visualization.

![[Pasted image 20250327001033.png|609]]


---
## 2. PID Controller
The PID controller node implements a path follower for the mobile robot using a received global path and odometry feedback. It continuously computes the distance and heading errors relative to the current path waypoint and applies PID control \[2] to generate velocity commands (`cmd_vel`) for smooth and accurate path tracking. The controller automatically stops the robot upon reaching the final goal within a specified tolerance and publishes a goal status flag. 

I found that:
- Minimal tuning was required for distance controller if the linear speed was kept low
- The angular speed and proportional term of the heading controller needed to be increased in order to allow for sharp turns.

To see PID performance, see simulation and real-world videos.


---
## 3. Exploration
The exploration node uses a frontier-based exploration strategy; upon receiving an occupancy grid map, it inflates obstacles according to the robot's radius, identifies reachable areas, and detects frontiers (regions between known and unknown space). It clusters these frontiers and selects the largest cluster's centroid as the next navigation goal, publishing it, which enables the robot to use A* to find a path and PID to follow the path.

![[ELEC 4260 Project 2 Report-3.png]]

Video of A\* pathfinding, PID and Exploration in Gazebo simulation: https://youtu.be/BNEOgvr_kBM


---
## 4. Real-World
See video here: https://youtu.be/iM65Z2CJQ2w. 

The performance of A* in the real world was similar to the simulation. The PID required some tuning (higher P term for heading and higher angular speed than simulation). Most significantly, for the performance 

---
## 5. Bonus - Improved Mapping

A significant issue with transferring from simulation to the real world was higher noise in the mapping node, which caused that exploration node to fail at times. Specifically, gaps in the maze walls would cause the mapping node to detect freespace outside of the maze, leading the robot to attempt to explore this freespace with no viable path. See the image below for an example of this.

![[ELEC 4260 Project 2 Report-5.png|609]]

Thus, in order to improve the performance of the robot in the real world, I created an improved version of the `createmap`node more suitable for the real world using filtering and validation mechanisms. This includes:
- A function filter out laser scan rays that are significantly different from their neighbors, reducing false positives in obstacle detection. 
- A function to confirm obstacles only when they are surrounded by a certain number of other obstacles, enhancing the reliability of obstacle confirmation.
- A function for adjustment of wall thickness to close small gaps.

With this, I was able to fix the issues. Another alternative solution would have been to add a heuristics or path validation steps to prevent the robot from attempting to explore areas that are disconnected from the current known map, or altering the inflation logic to be more aggressive. In general, I believe my approach of cleaning up the map is the most scalable.

---
## References
\[1] Hart, P., Nilsson, N., & Raphael, B. (1968). A Formal Basis for the Heuristic Determination of Minimum Cost Paths. _IEEE Transactions on Systems Science and Cybernetics_, _4_(2), 100–107. https://doi.org/10.1109/tssc.1968.300136.

\[2] Franklin, G. F., Powell, J. D., & Emami-Naeini, A. (2018). _Feedback Control of Dynamic Systems (8th Edition) (What&#x27;s New in Engineering)_. Pearson. Retrieved from https://www.amazon.com/Feedback-Control-Dynamic-Systems-Engineering/dp/0134685717?SubscriptionId=AKIAIOBINVZYXZQZ2U3A&amp;tag=chimbori05-20&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=0134685717