---
title: Rayleigh's Method
tags:
  - syde351
date: 2024-06-12
aliases:
  - rayleigh's method
---
We can use the principle of conservation to obtain the natural frequency of a [[Mass-Spring System|mass-spring system]] if the spring is linear. This can be useful because we don't need to find the equation of motion first.

In simple harmonic motion, the kinetic energy is maximum and the potential energy is minimum at the equilibrium position $x=0$. When the displacement is maximum, the the potential energy is maximum but the kinetic energy is zero. Thus, we have:
$$
\text{PE}_{\text{max}}+\text{KE}_{\text{min}} = \text{PE}_{\text{min}}+\text{KE}_{\text{max}}
$$


> [!NOTE] Simple harmonic motion
> $$
>\begin{align}
>x(t) & =A\sin(\omega_{n}t+\phi) \\[2ex] 
>A & =\sqrt{ x^{2}(0)+\left[ \frac{\dot{x}(0)}{\omega_{n}} \right]^{2} }\\[2ex] 
>\sin \phi & =\frac{x(0)}{A}, \cos \phi=\frac{\dot{x}(0)}{A}\\[2ex] 
>\dot{x}(t) & =A\omega_{n}\cos(\omega_{n}t+\phi)=A\omega_{n}\sin\left( \omega_{n}t+\phi+\frac{\pi}{2} \right) \\[2ex]
>\ddot{x}(t) & =A\omega_{n}^{2}\sin(\omega_{n}t+\phi)=A\omega_{n}^{2}\sin(\omega_{n}t+\phi+\pi)
>\end{align}
>$$

## Example
Using Rayleigh's method, find the natural frequency of this system. Assume no slip.

![[Rayleigh's Method.png|328]]

Recall that for a mass-spring system:
$$
\begin{align}
\omega_{n}^{2} & =\frac{k}{m} \\[2ex]
\omega_{n} & =\sqrt{ \frac{k}{m} }\\[2ex] 
2\pi f_{n} & =\sqrt{ \frac{k}{m} } \\[2ex] 
f_{n} & =\frac{1}{2\pi}\sqrt{ \frac{k}{m} }
\end{align}
$$
To solve the problem, we need to find the equivalent mass and equivalent stiffness, and take:
$$
\omega_{n}=\sqrt{ \frac{k_{\text{eq}}}{k_{\text{eq}}} }
$$
For kinetic energy, we have:
$$
\text{KE}=\frac{1}{2}m\dot{x}^{2}+\frac{1}{2}I\omega^{2}
$$
where $\omega=\frac{\dot{x}}{R}$ due to the no-slip condition. Thus, we have:
$$
\begin{align}
\text{KE} & =\frac{1}{2}m\dot{x}^{2}+\frac{1}{2}\left( \frac{mR^{2}}{2} \right)\left( \frac{\dot{x}^{2}}{R^{2}} \right)\\[2ex] 
	 & = \frac{3}{4}m\dot{x}^{2}
\end{align}
$$
For potential energy, we simply have:
$$
\text{PE}=\frac{1}{2}kx^{2}
$$
Rayleigh's method gives:
$$
\text{PE}_{\text{max}}+\text{KE}_{\text{min}} = \text{PE}_{\text{min}}+\text{KE}_{\text{max}}
$$
We have $\text{KE}_{\text{min}} = 0$ when $\dot{x}=0$. We also have $\text{PE}_{\text{min}}=0$ when there is no deflection ($x=0$).

Thus, Rayleight's method simplifies to:
$$
\begin{align}
\text{KE}_{\text{max}} & =\text{PE}_{\text{max}} \\[2ex]
\frac{3}{4}m\dot{x}_{\text{max}}^{2} & =\frac{1}{2}kx_{\text{max}}^{2}
\end{align}
$$
Let us define $x_{\text{max}}=A$. Then, we also have:
$$
\dot{x}_{\text{max}}=A\omega_{n}
$$
Following this, we have:
$$
\begin{align}
\frac{3}{4}mA^{2}\omega_{n}^{2} & =\frac{1}{2}kA^{2} \\[2ex]
\frac{3}{4}m\omega_{n}^{2} & =\frac{1}{2}k\\[2ex] 
\omega_{n}^{2} & =\frac{1 / 2}{3 / 4}\left( \frac{k}{m} \right)\\[2ex] 
\omega_{n} & =\sqrt{ \frac{2}{3} \frac{k}{m} }
\end{align}
$$
