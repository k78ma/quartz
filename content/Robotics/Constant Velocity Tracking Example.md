---
title: Constant Velocity Tracking Example
tags:
  - robotics
  - state-estimation
date: 2024-09-28
aliases:
  - constant velocity tracking example
---
Here we look at an example of a more complicated state estimation filter than the [[Simple Static State Estimation Example]], where we have a dynamic system that changes its state over time. Specifically, we use an $\alpha$-$\beta$ filter in one dimension.

We assume an aircraft is moving radially away from the radar or towards the radar. The angle to the radar and airplane altitude are constant.

![[Constant Velocity Tracking Example.png|604]]

$x_{n}$ represents the range to the aircraft at time $n$. The aircraft velocity can be approximated by using the range differentiation method – the change in the measured range with time.

Thus, the velocity is the derivative of the range:
$$
\hat{x}=v=\frac{dx}{dt}
$$
The radar sends a track beam in the direction of the target at a constant rate. The track-to-track interval is $\Delta t$. 

Two motion equations describe the system dynamic model for constant velocity motion:
$$
\begin{align}
x_{n+1} & =x_{n}+\Delta t\,\dot{x}_{n} \\
\dot{x}_{n+1} & =\dot{x}_{n}
\end{align}
$$
- The aircraft range at the next track cycle equals the range at the current track cycle plus the target velocity multiplied by the track-to-track interval. 
- Since we assume constant velocity in this example, the velocity at the next cycle equals the velocity at the current cycle.

The above system of equations is called a **State Extrapolation Equation** (also called the **Transition Equation** or **Prediction Equation**) and is also one of the five Kalman filter equations. This system of equations extrapolates the current state to the next state (prediction).

