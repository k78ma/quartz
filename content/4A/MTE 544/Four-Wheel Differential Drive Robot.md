---
title: Four-Wheel Differential Drive Robot
tags:
  - mte544
date: 2025-09-28
aliases: four-wheel differential drive robot
---
Given a four-wheel differential drive robot, what are the kinematics for wheel control? What are the wheel speeds $(u_{r}, u_{\ell})$ to move the G.C with $v$ and $\omega$?

Similar to the [[Two-Wheel Mobile Robot|2-wheel differential drive]]:
$$
\begin{align}
v  & = R\omega  \\[2ex] 
R_{r}  & = R + \frac{T}{2} \\[2ex] 
\ell  & = \frac{L}{2} \\[2ex] 
\tan \lambda_{r}  & = \frac{\ell}{R_{r}}
\end{align}
$$
Then, we write $v_{r}$ as:
$$
v_{r} = \omega \sqrt{ R_{r}^{2} + \ell^{2} } = v_{r}^{w} \cos \lambda_{r}
$$
We have:
$$
\begin{align}
v_{r}^{w}  & = \frac{\omega \sqrt{ R_{r}^{2} + \ell^{2} }}{\cos \lambda_{r}} \\[2ex] 
 & = \frac{\omega \sqrt{ R_{r}^{2} + \ell^{2} }}{1 / \sqrt{ 1+\tan ^{2}\lambda_{r} }}\\[2ex] 
     & = \frac{\omega \sqrt{ R_{r}^{2} + \ell^{2} }}{1 / \sqrt{ 1+ \frac{\ell^{2}}{R_{r}^{2}} }}\\[2ex] 
     & =\omega\left( R_{r} + \frac{\ell^{2}}{R_{r}} \right)\\[2ex] 
     & = v+\frac{T\omega}{2} + \frac{\left( \frac{L\omega}{2} \right)^{2}}{v+T\omega }{ 2}\\[2ex] 
\end{align}
$$
Thus, we have
$$
u_{r} = \frac{v_{r}^{w}}{r} = \frac{1}{r} \left(v+\frac{T\omega}{2} + \frac{\left( \frac{L\omega}{2} \right)^{2}}{v+T\omega }{ 2}\right)
$$

The example below shows the derivation process to get the equation for the left wheel to drive the G.C at $v$ and $\omega$.

![[MTE 544 ex1-4.pdf]]


Note that because of friction, the actual motion becomes different from the ideal case, so we usually use approximate motion model, e.g.:
$$
\begin{align}
v \approx \frac{r}{2} (u_{r} + u_{\ell})  \\[2ex]
w \approx \frac{r}{T}(u_{r}-u_{\ell})
\end{align}
$$
