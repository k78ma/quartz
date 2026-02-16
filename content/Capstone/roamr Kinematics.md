---
title: roamr Kinematics
tags:
  - capstone
date: 2025-11-04
aliases: roamr kinematics
---
Wheel speeds to body twist:
$$
v = \frac{v_r+v_l}{2},\qquad \omega = \frac{v_r - v_l}{L}
$$
Integrate to get $(x,y,\theta)$:
$$
\begin{align}
x_{k+1}  & = x_k + v \Delta t \cos\theta_k \\
y_{k+1}  & = y_k + v \Delta t \sin\theta_k \\
\theta_{k+1} &  = \theta_k + \omega \Delta t
\end{align}
$$
Odometry from wheel encoders:
$$
\begin{align}
 & \Delta s_r = 2\pi r \frac{n_r}{N},\quad \Delta s_l = 2\pi r \frac{n_l}{N} \\[2ex]
 & \Delta s = \tfrac{\Delta s_r+\Delta s_l}{2},\quad \Delta \theta = \frac{\Delta s_r-\Delta s_l}{L}
\end{align}
$$