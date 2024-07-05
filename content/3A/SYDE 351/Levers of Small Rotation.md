---
title: Levers of Small Rotation
tags:
  - syde351
date: 2024-07-05
aliases:
  - levers of small rotation
---
We apply two forces to the lever, $f_{A}$ and $f_{B}$:

![[Levers of Small Rotation.png|264]]

The moment of $f_{A}$ is $f_{A}l_{A}$, and the moment of $f_{B}$ is $f_{B}l_{B}$.

## Static Case
For a static case, we want to solve for the forces needed to balance each other, so we have:
$$
\begin{align}
f_{A}l_{A}+f_{B}l_{B} & =0 \\[2ex]
f_{A}l_{A} & =-f_{B}l_{B} \\[2ex]
\frac{f_{A}}{f_{B}} & =-\frac{l_{B}}{l_{A}}
\end{align}
$$
## Deflection Case
Another type of problem we might want to solve is: If I have force $f_{A}$ at point $A$, what force $f_{B}$ at $B$ would cause the same displacement?

![[Levers of Small Rotation-1.png|436]]

This time, we have:
$$
\begin{align}
f_{A}l_{A} & =f_{B}l_{B} \\[2ex] 
\frac{f_{A}}{f_{B}} & =\frac{l_{B}}{l_{A}}
\end{align}
$$
For deflection, we have:
$$
y_{A}=l_{A}\tan \theta
$$
For small $\theta$, we have:
$$
\tan \theta=\sin \theta=\theta
$$
Then, we can write:
$$
\begin{align}
y_{A}=l_{A}\theta \\
y_{B}=l_{B}\theta
\end{align}
$$
or
$$
\frac{y_{A}}{y_{B}}=\frac{l_{A}}{l_{B}}
$$
## Examples
### Equivalent Spring
How do we move the spring from $A$ to $B$ while keeping the motion of the lever the same? What would the spring constant $k_{B}$ be compared to $k_{A}$?

![[Levers of Small Rotation-2.png|340]]

We can do this with an energy method, writing potential energy as:
$$
\text{PE}=\frac{1}{2}k_{A}y_{A}^{2}=\frac{1}{2}k_{B}y_{B}^{2}
$$
Given that $\frac{y_{A}}{y_{B}}=\frac{l_{A}}{l_{B}}$, we then have:
$$
\frac{1}{2}k_{A}y_{A}^{2}=\frac{1}{2}k_{B}\left( \frac{l_{B}}{l_{A}} \right)^{2}y_{A}^{2}
$$
Solving for $k_{B}$ gives:
$$
k_{B}=\left( \frac{l_{A}}{l_{B}} \right)^{2}k_{A}
$$
### Equivalent Mass
Use kinetic energy to calculate the equivalent mass of the lever.

First, consider a mass at point $A$ on the lever:

![[Levers of Small Rotation-3.png]]

The kinetic energy is:
$$
\text{KE}=\frac{1}{2}m_{A}\dot{y}_{A}^{2}+\frac{1}{2}I_{o}\theta^{2}
$$
Recall that $y_{A}=l_{A}\theta$ using the small angle approximation. Also, $I_{o}=\frac{1}{3}ml_{B}$, where $m$ is the mass of the lever. Then, we have:
$$
\begin{align}
\text{KE} & =\frac{1}{2}m_{A}l_{A}^{2}\dot{\theta}^{2}+\frac{1}{2}\left( \frac{1}{3}ml_{B}^{2} \right)\dot{\theta}^{2} \\[2ex]
	 & =\frac{1}{2}\left( m_{A}l_{A}^{2}+\frac{1}{3}ml_{B}^{2} \right)\dot{\theta}^{2}
\end{align}
$$
We can also find an equivalent system with just one mass at the end of the lever ($B$) with no inertia for the lever.

![[Levers of Small Rotation-4.png]]

$$
\text{KE}=\frac{1}{2}m_{B}\dot{y}_{B}=\frac{1}{2}m_{B}l_{B}^{2}\dot{\theta}^{2}
$$
Because the two systems should have the same dynamics, their kinetic energies should be equal:
$$
\begin{align}
\frac{1}{2}m_{B}l_{B}^{2}\dot{\theta}^{2} & =\frac{1}{2}\left( m_{A}l_{A}^{2}+\frac{1}{3}ml_{B}^{2} \right)\dot{\theta}^{2} \\[2ex] 
l^{2}_{B}m_{B} & =l_{A}^{2}m_{A}+\frac{1}{3}ml_{B}^{2}\\[2ex] 
m_{B} & =\frac{l_{A}^{2}}{l_{B}^{2}}m_{A}+\frac{1}{3}m
\end{align}
$$

![[Levers of Small Rotation-5.png]]