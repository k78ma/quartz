---
title: Four-Wheel Front Steer Robot
tags:
  - mte544
date: 2025-09-27
aliases: four-wheel front steer robot
---
A 4-wheel front steering robot has the following form:

![[Four-Wheel Front Steer Robot-20250928131815359.png|225]]

Often this is simplified to a bicycle model, where two wheels are lumped into a single wheel
- There are a few different forms of the bicycle model depending on the point of interest.

## Bicycle model for G.C
For example, the bicycle model for the geometric center/centroid:

![[Four-Wheel Front Steer Robot-20250928132023203.png|346]]

$$
\begin{align}
\dot{x}  & = v\cos(\theta+\beta) \\
\dot{y}  & = v\sin(\theta+\beta) \\
\omega  & = \dot{\theta} = \frac{v}{R} = \cos \beta \frac{\tan\delta}{L}v
\end{align}
$$
From the right triangles that connect the axles to the I.C.R:
$$
\begin{align}
\tan\beta &  = \frac{L / 2}{R_{r}}, \,\, \tan\delta=\frac{L}{R_{r}} \quad \Longrightarrow \quad  \tan \delta = 2\tan \beta \\[2ex] 
\cos \beta  & = \frac{1}{\sqrt{ 1+\tan ^{2} \beta }} = \frac{2}{\sqrt{ 4+\tan ^{2}\delta }}
\end{align}
$$
Thus, we have
$$
\begin{align}
\dot{x}  & = v \cos(\theta+\beta)  \\[2ex] 
\dot{y}  & = v\sin(\theta+\beta) \\[2ex] 
\dot{\theta}  & = \frac{2\tan\delta}{L\sqrt{ 4+\tan ^{2}\delta }}v
\end{align}
$$
- where we have $\beta = \tan ^{-1}\left( \frac{\tan\delta}{2} \right)$

## Kinematics for wheel control
What are the wheel speeds $(u_{r}, u_{f})$ to move the G.C with $v$ if we are doing rear-wheel drive or front-wheel drive?

### Rear Wheel Drive
Pure rolling at the real wheel (with wheel radius $r$) gives its linear speed:
$$
v_{r}^{w} = ru_{r} = R_{r}\dot{\theta}
$$
which results in
$$
\begin{align}
\dot{\theta}  = \frac{v}{R} = \frac{v_{r}^{w}}{R_{r}} \quad \Longrightarrow \quad v_{r}^{w} = \frac{R_{r}}{R}v \\[2ex] 
\cos \beta  =\frac{R_{r}}{R} = \frac{2}{\sqrt{ 4+\tan ^{2} \delta }}
\end{align}
$$
Thus, we have:
$$
v_{r}^{w} = \frac{2}{\sqrt{ 4+\tan ^{2}\delta }}v
$$
Equivalently, if the rear wheel is the actuator (rear-wheel drive):
$$
v_{r}^{w} = \frac{r \sqrt{ 4+\tan ^{2}\delta }}{2} u_{r}
$$

### Front Wheel Drive
Similarly, for front-wheel drive, we would have
$$
v= \frac{r\cos\delta\sqrt{ 4+\tan ^{2}\delta }}{2} u_{f}
$$
