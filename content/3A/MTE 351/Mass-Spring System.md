---
title: Mass-Spring System
tags:
  - syde351
date: 2024-06-11
aliases:
  - mass-spring system
---
A mass-spring system is shown below:

![[Mass-Spring System.png]]

Newton's 2nd law in combination with [[Spring Elements|Hooke's Law]]:
$$
\begin{align}
f=m \frac{dv}{dt} & =m \frac{d^{2}x}{dt^{2}} = m \ddot{x} \\[2ex]
-kx  & = m \ddot{x} \quad \text{or} \quad m \ddot{x}+kx=0
\end{align}
$$
The mass is at equilibrium when the spring is at its free length ($x=0$).

## Equilibrium as Coordinate Reference
If we write the equation of motion based on the equilibrium position as the coordinate reference, the equation of spring systems will be $m \ddot{x}+kx=0$.

![[Mass-Spring System-2.png]]

In the above example, we have:
$$
\begin{align}
m \ddot{x} & =-k(\delta_{\text{st}}+x) + mg\sin \phi \\
m \ddot{x} & =-kx+(mg\sin \phi-k\delta_{\text{st}})
\end{align}
$$
The term on the right side will be 0 at static equilibrium.

![[Mass-Spring System-1.png]]

In the example above, we have:
$$
\begin{align}
m \ddot{x} & =-k(\delta_{x+\text{st}}) + mg \\
	 & = -kx+(mg-k\delta_{\text{st}})
\end{align}
$$
where $mg-k\delta_{\text{st}} = 0$ if the system is static. 

## Frequency
For a mass-spring system, the frequency of oscillation can be found as:
$$
\omega_{n}^{2}=\frac{K}{m}
$$
Solving for $\omega$ gives:
$$
\omega_{n}=\sqrt{ \frac{K}{m} }
$$
Converting to frequency form:
$$
2\pi f_{n}=\sqrt{ \frac{K}{m} }
$$
or
$$
f_{n}=\frac{1}{2\pi}\sqrt{ \frac{K}{m} }
$$
