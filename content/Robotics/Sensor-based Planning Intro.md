---
title: Sensor-based Planning Intro
tags:
  - robotics
date: 2024-01-27
aliases:
---
Motion planning is an important and common problem for mobile robotics. In its simplest form, we want to move a robot from a starting location to a goal location while avoiding obstacles. Our task is to plan the robot motion from the start point to the goal point. This plan is not a pre-computed sequence of steps to be executed, but rather a policy to deal with the possible obstacles that the robot may encounter along the way.

### Problem Set-up
We are given:
- A workspace $W$ that is a subset of $\mathbb{R}^{2}$ or $\mathbb{R}^{3}$. 
- Some obstacles $O_{1}, \dots, On$
- A start point $p_{\text{start}}$ and a goal point $p_{\text{goal}}$
- A robot described by a moving point (we assume the robot has zero size for simplicity)

We define the **free workspace** as:
$$
W_{\text{free}} = W \; \textbackslash \;(O_{1} \cup O_{2}\cup \dots \cup O_{n})
$$
This denotes the set of points in $W$ that are outside all obstacles. 
### Robot Assumptions
We assume the robot:
- Knows the direction towards the goal
- Knows the straight-line distance between itself and the goal
- Does not know anything about the obstacles
- Has a contact sensor that allows it to locally detect obstacles
- Can move in either a straight line toward the goal or follow an obstacle boundary using its contact sensor
- Has limited memory in which it can store distances and angles.
### Environment Assumptions
We assume the following about the environment:
- The workspace is bounded
- There are a finite number of obstacles
- The start and goal endpoints exist in the free workspace $W_{\text{free}}$
- Any straight line drawn in the environment crosses the boundary of each obstacle only a finite number of times. 