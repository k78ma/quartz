---
title: Polymath Blog Post
tags: 
date: 2023-09-26
---
Hello, I’m Kai Ma. I interned as a Robotics Engineering Intern at Polymath Robotics this summer, focusing on machine learning. Here, I’ll share one of my projects – making Polymath’s perception system a bit more intelligent.

## The Problem
Polymath’s existing object detection systems consists of two parts. Lidar point clouds are ingested by the system, and a ground segmentation using an algorithm called [Patchwork++](https://arxiv.org/abs/2207.11919) is used to remove points that are part of the ground; then, height-based filtering is done such that points below a certain height are considered to not be obstacles. The remaining points are then considered obstacles, and are mapped so that the robot will avoid them. 

While this system is sufficient for basic autonomy, it has some flaws:
- **Lack of semantic information** – we know where obstacles are in space, but don’t know what they are. This is troublesome for complex environments like forests, where many objects like tall grass may bypass the height filter but are not actual obstacles. Alternatively, small objects like rocks that are dangerous to the robot may not be considered at all!
- **Requires human-in-the-loop** – Polymath autonomy is used for many different robots in many different environments. With the current system, a Polymath engineer needs to tune the height filtering to work for each different use case, which is not exactly ideal for Polymath’s vision of a general autonomy stack.

What are some features that would fix this? An better system would have:
- Semantic labels for point clouds objects.
- Outputs that can be integrated with ROS costmaps or contribute meaningfully to Polymath autonomy in some way.
- Low-latency to enable running at real-time.
- Re-usable/generalizable to different use cases, such as different environments, semantic classes, and sensor configurations

## The Solution(s)
With the above requirements in mind, I dove into machine learning literature to find an appropriate model. We ended up choosing these two:
### PointPillars


### BEVFusion

## Implementation and Design
