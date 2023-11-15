---
title: Runge-Kutta Methods Intro
tags:
  - mte204
date: 2023-11-08
aliases:
---
Runge-Kutta methods solve ODEs of the form:
$$
\frac{ dy }{ dx } = f(x,y)
$$
Recall that we have previously used the approximation:
$$
\begin{align}
\text{New value}  & = \text{old value} + \text{slope} \times \text{step size} \\
y_{i+1}  & = y_{i} + \phi h
\end{align}
$$
The slope estimate of $\phi$ is used to extrapolate from an old value $y_{i}$ to a new value $y_{i+1}$ over a distance $h$.

![[Runge-Kutta Methods.png|444]]

All one-step methods can be expressed in this general form, with the only difference being how the slope is estimated. The simplest approach is to use the differential equation to estimate the slope in the form of the first derivative at $x_{i}$. 

In other words, the slope at the beginning of the interval is taken as an approximation of the average slope over the whole interval. This approach, called Euler’s method, is discussed in the first part of this chapter. This is followed by other one-step methods that employ alternative slope estimates that result in more accurate predictions. All these techniques are generally called Runge-Kutta methods.

![[Runge-Kutta Methods-1.png|428]]