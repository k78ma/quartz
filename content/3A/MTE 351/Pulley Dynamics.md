---
title: Pulley Dynamics
tags:
  - syde351
date: 2024-06-10
aliases:
  - pulley dynamics
---
Pulleys can be used to change the direction of an applied force or to amplify forces. Cords, ropes, chains, and cables drive the pulleys without slipping and are inextensible.

Let's say we have a pulley of inertia $I$ whose center is fixed to a support.  

![[Pulley Dynamics.png|174]]

Assume that the tension force are different on each side of the pulley. Then, applying $I\dot{\omega}=M$ gives:
$$
I\ddot{\theta}=RT_{1}-RT_{2} = R(T_{1}-T_{2})
$$
Some implications of this:
- Tension forces are approximately equal if $I \ddot{\theta}$ is negligible. This is satisfied if either the pulley rotates at a constant speed or if pulley inertia is negligible compared to other inertias the system.
- The force on the support at the pulley center is $T_{1} + T_{2} + mg$.

## Energy
For the pulley below, if pulley inertia is negligible, then obviously $m_{1}$ will lift $m_{2}$ if $m_{1}>m_{2}$. How does non-negligible inertia change this result?

![[Pulley Dynamics-1.png|452]]

- We define the coordinates as a function of time such that $x_{1}(0)=0$ and $x_{2}(0)=0$. 
- The system starts at rest, so we also have $\dot{x}_{1}(0)=0$ and $\dot{x}_{2}(0)=0$. 
- If the cables are inextensible, $x_{1}(t)=x_{2}(t)$ or $x_{1}=x_{2}$, and $\dot{x}_{1}=\dot{x}_{2}$
- No slip between the cable and the pulley means we have $x_{1}=R\theta$ and $\dot{x}_{1}=R \dot{\theta}$.

![[Pulley Dynamics-2.png|208]]

All forces involved are conservative, including gravity, so mechanical energy is conserved.
$$
\Delta \text{PE}+\Delta \text{KE}=0
$$
At $t=0$, we have $\text{PE}=0, \text{KE}=0$.

At time $t$, we have:
$$
\text{PE}=+m_{2}gx_{2}-m_{1}gx_{1}
$$
- The term for $m_{2}$ is positive since $x_{2}$ is increasing from the original $x_{2}(0)=0$
- The term for $m_{1}$ is negative since $x_{1}$ is decreasing from the original $x_{1}(0)=0$

For kinetic energy, we have:
$$
\text{KE}=\frac{1}{2}m\dot{x}_{1}^{2}+\frac{1}{2}m_{2}\dot{x}_{2}+\frac{1}{2}I\dot{\theta}^{2}
$$
We can use $x_{1}=x_{2}$ and $\dot{x}_{1}=\dot{x}_{2}$. From  $\dot{x}_{1}=R\dot{\theta}$, we can also use $\dot{\theta}^{2}=\frac{\dot{x}_{1}^{2}}{R_{2}}$

From all of this, we have:
$$
\frac{1}{2}\left( m_{1}+m_{2}+\frac{I}{R^{2}} \right)\dot{x}_{1}^{2}+(m_{2}g-m_{1}g)x_{1}=0
$$
which gives:
$$
\dot{x}_{1}=\sqrt{ \frac{2(m_{1}-m_{2})gx_{1}}{m_{1}+m_{2}+\frac{I}{R^{2}}} }
$$
Thus:
- If $m_{1}>m_{2}$, $\dot{x}_{1}>0$ then $m_{2}$ is lifted.
- If $I$ increases, $\dot{x}_{1}$ decreases.
- In limit, if $I\to \infty, \dot{x}_{1}\to 0$.