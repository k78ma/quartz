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
Note that we can write:
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