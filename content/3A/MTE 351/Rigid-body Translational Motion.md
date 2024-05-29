---
title: Rigid-body Translational Motion
tags:
  - syde351
date: 2024-05-15
aliases:
  - rigid-body translational motion
---

Newton's 2nd law states:
$$
\begin{align}
m\vec{a} & =\vec{f} \\[2ex] 
m \frac{d\vec{v}}{dt} & =f
\end{align}
$$
If the mass only moves in the $x$-direction:
$$
\begin{align}
v(t) & =\frac{dx(t)}{dt}\\[2ex] 
a(t) & =\dot{v}(t)=\ddot{x}(t)= \frac{d^{2}x(t)}{dt^{2}}
\end{align}
$$
If we assume:
- The object is rigid
- Can neglect force distribution

Then we can treat the object as a concentrated mass or point mass; the dimensions can be ignored. A lumped element is a point mass.

## Mechanical Energy
Conservation of mechanical energy is given by:
$$
\begin{align}
m\dot{v}=f(x)
\end{align}
$$
where $v=\frac{dx}{dt}$ and $dx=v\;dt$. Thus, we can write
$$
\begin{align}
m\dot{v} \; v\;dt  & = f(x)v\;dt \\[2ex]
m \frac{dv}{dt}v\;dt  & = vf(x)dt \\[2ex]
mv\;dv & =\frac{dx}{dt}f(x)\;dt \\[2ex]
mv \; dv & = f(x)\;dx \\[2ex] 
\int mv \, dv & = \int f(x) \, dx  f(x)   \\[2ex] 
\underbrace{ \frac{1}{2}mv^{2}  }_{ \text{Kinetic Energy} }& = \underbrace{ \int f(x) \, dx }_{ \text{Work} } + C 
\end{align}
$$
If the work done by $f(x)$ is independent from the path and only depends on end points, then the force is called a *conservative force* and can be derived from a function $P(x)$. 
$$
\begin{align}
f(x) & =-\frac{dP(x)}{dx} \\[2ex] 
\int f(x) \, dx  & =-\int d \, P(x) \\[2ex] 
P(x) & =-\int f(x) \, dx \\[2ex] 
\frac{1}{2}mv^{2} & =-P(x)+C \\[2ex]
\underbrace{ \frac{1}{2}mv^{2} }_{ \text{Kinetic energy} }+\underbrace{ P(x) }_{ \text{Potential Energy} } & =C
\end{align}
$$
Let's say we have a starting time $t_{0}$. Then, we have:
$$
\frac{mv_{0}^{2}}{2}+P(x_{0})=C
$$
For an arbitrary time $t$, we then have:
$$
\begin{align}
(\frac{mv^{2}}{2}-\frac{mv_{0}^{2}}{2})+(P(x)-P(x_{0})) & =0 \\
\Delta \text{KE} +\Delta \text{PE}  & =0
\end{align}
$$
### Gravity
Gravity is an conservative force:
$$
\begin{align}
f & =-mg \\[2ex] 
P(x) & = -\int f(x) \, dx  \\[2ex] 
P(x) & = -\int (-mg) \, dx  \\[2ex] 
P(x) & = mgx \\[2ex] 
\frac{mv^{2}}{2}+mgx & =C \\[2ex]
\frac{mv^{2}}{2}+\frac{mv_{0}^{2}}{2}+mg(x-x_{0}) & =0
\end{align}
$$
### Constant Force
If we have a constant force such that $f(x,t)=f_{\text{constant}}$, we have
$$
f(x,t)=u(t)
$$
Then, the potential energy is
$$
\begin{align}
P(x) & =-\int f(x) \, dx  \\[2ex] 
P(x) & =-\int f \, dx \\[2ex] 
P(x) & =-f(x) \\[2ex] 
\frac{mv^{2}}{2}-\frac{mv_{0}^{2}}{2}-f(x-x_{0}) & =0 \\[2ex]
\underbrace{ \frac{mv^{2}}{2} }_{ \text{KE} } & = \underbrace{ \frac{mv_{0}^{2}}{2} }_{ \text{Initial KE} }+\underbrace{ f(x-x_{0}) }_{ \text{Work done on the mass} }
\end{align}
$$
### Friction
The work done by friction is path-dependent, so it's a non-conservative force. We have:
$$
F=\mu N
$$
where $N$ is the normal force, $\mu$ is the coefficient of friction.
- $\mu_{s}$ is the coefficient of static friction – force required to initiate motion
- $\mu_{d}$ is the coefficient of dynamic friction – force required to maintain motion between two objects in contact

Generally, $\mu_{s}>\mu_{d}$, as it takes more force to start the motion of an object than to keep it moving.

![[Rigid-body System Modeling.png]]