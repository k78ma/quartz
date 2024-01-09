---
title: Transforms Intuition
tags:
  - robotics
date: 2023-09-25
---
For robotics, each link, joint, and sensor has its own coordinate system. A vector $p$ in the camera system may have coordinates $p_{c}$ ; in the world coordinate system, its coordinates may be $p_{w}$. This transformation is defined by a transformation matrix $\mathbf{T}$.

![[Pasted image 20230925201127.png|472]]

The motion between 2 coordinate systems consists of a rotation plus a translation (rigid body motion). During the transformation, the length and angle of vector $p$ will not change, which makes this transformation *[[Euclidean Transforms]]*.