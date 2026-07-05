---
title: Dampened Spring Systems
tags:
  - syde351
date: 2024-06-12
aliases:
  - dampened spring systems
---
A damping element resists relative velocity across it. In other words, it exerts a damping force:
$$
f=cv = c\dot{x}
$$
where $c$ is the damping coefficient.

In the context of a dampened mass-spring system, we then have:
$$
m \ddot{x}=f-kx-c\dot{x}
$$
or
$$
f=m\ddot{x}+c\dot{x}+kx
$$
The same concept applies to rotational springs as well.

![[Dampened Spring Systems.png|544]]

## Example
Derive the equations of motion of the two-mass system shown below.

![[2-spring-damper.png|464]]

We assume that $x_{2}>x_{1}$, and $\dot{x}_{2}>\dot{x}_{1}$. From this, we can construct a diagram of forces acting on each mass, shown in (b) above.

From the diagram of forces, we obtain:
$$
\begin{align}
m_{1}\ddot{x}_{1} & =-k_{1}x_{1}+k_{2}(x_{2}-x_{1})-c_{1}\dot{x}_{1}+c_{2}(\dot{x}_{2}-\dot{x}_{1}) \\
m_{2}\ddot{x}_{2} & =f-k_{2}(x_{2}-x_{1})-c_{2}(\dot{x}_{2}-\dot{x}_{1})
\end{align}
$$

