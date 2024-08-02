---
title: Food-Serving Robot Project
tags:
  - syde351
date: 2024-07-27
aliases:
  - food-serving robot project
draft: "true"
---
$$
\begin{align}
I(s) & =\frac{1}{R_{a}+L_{a}s}(v_{a}-K_{B}\,\Omega(s)) \\[2ex] 
\Omega(s) & =\frac{1}{c+Is}(K_{T}I(s)-T_{L})
\end{align}
$$

$$
\begin{align}
\Theta(s) & =\frac{V_{L}(s)+V_{R}(s)}{L} \\[2ex] 
sX(s) & =\frac{V_{L}(s)+V_{R}(s)}{2}\cos(\Theta(s)) \\[2ex]
xY(s) & =\frac{V_{L}(s)+V_{R}(s)}{2}\sin(\Theta(s))
\end{align}
$$

$$
\begin{align}
d_{L}&=\left( R-\frac{L}{2} \right)\theta \\[2ex]
d_{R}&=\left( R+\frac{L}{2} \right)\theta \\[2ex] 
d&=\frac{d_{L}+d_{R}}{2} \\[2ex]
\theta & =\frac{d_{R}-d_{L}}{L} \\[2ex]
\dot{x} & = \dot{d}\cos \dot{\theta} =\frac{V_{L}+V_{R}}{2}\cos\left( \frac{V_{R}-V_{L}}{L} \right) \\[2ex]
\dot{y} &= \dot{d}\sin \dot{\theta} \\[2ex] 
\dot{\theta} & =\frac{\dot{d}_{R}-\dot{d}_{L}}{L}
\end{align}
$$
