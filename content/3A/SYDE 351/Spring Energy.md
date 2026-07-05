---
title: Spring Energy
tags:
  - syde351
date: 2024-06-12
aliases:
  - spring energy
---
The force exerted by a spring is a conservative force. If the spring is linear, then its resisting force is given by $f=-kx$. The potential energy of a linear spring is then:
$$
P(x)=-\int_{0}^{x} -kx \, dx =\frac{1}{2}kx^{2}
$$
where $x$ is the deflection from the free length of the spring. The kinetic energy due to movement is $\frac{1}{2}mv^{2}$, where $v=\dot{x}$.

A torsional spring exerts a moment $M$ if it is twisted, which is given by $M=k_{t}\theta$, where $\theta$ is the twist angle. The work done by this moment and stored as potential energy in the spring is:
$$
P(\theta)=\int_{0}^{\theta}k_{t}\theta  \, d\theta = \frac{1}{2}k_{t}\theta^{2} 
$$
Recall that 

The conservation of energy principles states that
$$
\Delta \text{PE}+\Delta\text{KE} = 0
$$
or 
$$
\text{PE}+\text{KE}=\text{constant}
$$
## Conservation of Energy Examples

![[Spring Energy.png]]

### Part (a)
$$
\begin{align}
\frac{1}{2}m\dot{x}^{2}+\frac{1}{2}kx^{2} & =\frac{1}{2}m\dot{x}_{0}+\frac{1}{2}k\dot{x}_{0} \\[2ex] 
\frac{1}{2}m(\dot{x}^{2}-\dot{x}_{0}^{2}) & +\frac{1}{2}k(x^{2}-x_{0}^{2})=0
\end{align}
$$
### Part (b)
$$
\underbrace{ \frac{1}{2}m\dot{y}^{2} }_{ \text{KE} }+\underbrace{ \frac{1}{2}ky^{2}-mgy }_{ \text{PE} }= \text{constant}
$$
Because $y$ is defined to be positive downward, as $y$ increases, gravitational PE decreases. 

## Obtaining Equation of Motion
We can often use the principle of conservation of energy to obtain the equation of motion and, for simple harmonic motion, to determine the frequency of vibration without obtaining the equation of motion. Typically, we use:
$$
\frac{d}{dt}(\text{PE}+\text{KE})=0
$$
For example, for a basic mass-spring system, we would have:
$$
\frac{1}{2}m\dot{x}^{2}+\frac{1}{2}kx^{2}=\text{constant}
$$
Differentiating with respect to time:
$$
\begin{align}
\frac{1}{2}(2m\dot{x}\ddot{x})+\frac{1}{2}(2k\dot{x}x) & =0 \\[2ex]
kx \dot{x}+m\dot{x}\ddot{x} & =0 \\[2ex] 
kx+m\ddot{x} & =0
\end{align}
$$
### Example
Assuming that the cylinder rolls without slipping, use conservation of energy to derive the equation of motion in terms of $x$.

![[Spring Energy-1.png|356]]

For potential energy, we have:
$$
\text{KE}=\frac{1}{2}m\dot{x}^{2}+\frac{1}{2}I\omega^{2}
$$
Since $\dot{x}=R\omega$, or $\omega=\frac{\dot{x}}{R}$, we can write:
$$
\text{KE}=\frac{1}{2}m\dot{x}^{2}+\frac{1}{2}I \frac{\dot{x}^{2}}{R^{2}}
$$
For a cylinder, $I=mR^{2} /2$, so:
$$
\begin{align}
\text{KE} & =\frac{1}{2}m\dot{x}^{2}+\frac{1}{4}mR^{2}\frac{\dot{x}^{2}}{R^{2}} \\[2ex] 
	 & =\frac{3}{4}m\dot{x}^{2}
\end{align}
$$
For kinetic energy, we have:
$$
\begin{align}
\text{PE} & =\frac{1}{2}k_{1}x^{2}+\frac{1}{2}k_{2}x^{2} \\[2ex] 
 & =\frac{1}{2}(k_{1}+k_{2})x^{2}
\end{align}
$$
Note that there's only one degree of freedom, so we don't need separate $x_{1}$ and $x_{2}$. 

Then, we take:
$$
\begin{align}
\frac{d}{dt}(\text{KE}+\text{PE}) & =0 \\[2ex] 
\frac{d}{dt} \left( \frac{3}{4}m\dot{x}^{2}+\frac{1}{2}(k_{1}+k_{2})x^{2} \right) & =0 \\[2ex] 
\frac{3}{4}(2m\dot{x}\ddot{x})+\frac{2}{2}(k_{1}+k_{2})\dot{x} x & =0 \\[2ex]
3m\dot{x}+2(k_{1}+k_{2})x & =0
\end{align}
$$
