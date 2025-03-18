---
title: N2L Normal to Streamline
tags:
  - mech2210
date: 2025-03-18
aliases: []
---
Let us consider the same element in $s$-$n$ elements as we did in [[N2L Along Streamline]].

![[N2L Along Streamline-1.png|452]]

In the $n$-direction, applying $F=ma$ gives us
$$
[p_{n}-(p_{n}+\delta p_{n})]\delta s\delta y-\delta W \cos \theta=\rho \delta \forall a_{n}
$$
Where we have $\delta W=\gamma\delta \forall$ and $\cos \theta=\frac{\delta z}{\delta n}$. This gives us
$$
-\delta p_{n}\delta s \delta y -  \gamma \delta \forall  \frac{\delta z}{\delta n}=\rho\delta \forall  \frac{V^{2}}{R}
$$
where $a_{n}=\frac{V^{2}}{R}$ is the centripetal acceleration.

Since we are normal to a streamline, by definition, there is no dependence of $p_{n}$​ on $s$ because $p_{n}$​ only changes along $m$:
$$
\begin{align}
p_{n} & =p_{n}(s,n) \\[2ex]
dp_{n} & = \cancelto{ 0 }{ \frac{ \partial p_{s} }{ \partial s } } ds+{ \frac{ \partial p_{s} }{ \partial n  }} dn
\end{align}
$$
This then lets us write the above equation as
$$
\begin{align}
-\frac{ \partial p_{n} }{ \partial n } \delta s \delta n \delta y - \gamma\delta \forall \frac{dz}{dn} & =\rho\delta \forall \frac{V^{2}}{R} \\[2ex]
-\frac{dp_{n}}{dn}-\gamma  \frac{dz}{dn} & =\rho  \frac{V^{2}}{R} \\[2ex]

\end{align}
$$
which gives us
$$
\begin{align}
dp + \gamma dz + \frac{\rho V^{2}}{R}dn & =0 \\[2ex] 
\text{or} \\[2ex] 
\frac{dp}{\rho}+gdz + \frac{V^{2}}{R}dn & =0
\end{align}
$$
Integrating both sides gives us:
$$
\int \frac{dp}{\rho} + \int \frac{V^{2}}{R} \, dn+gz=\text{const} \quad  \text{(across streamlines)}
$$
For incompressible with $\rho=\text{const}$, we have
$$
p+\rho \int \frac{V^{2}}{R} \, dn + \gamma z=\text{const}
$$

## Example
Find the pressure variation between points (1) and (2); (3) and (4). Assume inviscid, steady flow.

![[N2L Normal to Streamline.png|558]]

Since we are working across streamlines, we can't use Bernoulli's equation and instead use
$$
\begin{align}
p+\rho \int \frac{V^{2}}{R} \, dn+\gamma z & =\text{const}  \\
dp+\gamma dz+\frac{\rho V^{2}}{R}dn & =0
\end{align}
$$
### (1) to (2)
From (1) to (2), we are going across two parallel streamlines, so the radius of curvature $R\to \infty$. Then, we just have
$$
p+\gamma z=\text{const}
$$
So we simply have a static pressure equation (no shearing stress, no acceleration):
$$
p_{1}+\gamma z_{1}=p_{2}+\gamma z_{2}
$$
or
$$
p_{1}=\cancelto{ 0 }{ p_{2} }+\gamma h_{2-1}
$$
### (3) to (4)
From (3) to (4), we integrate to get:
$$
\begin{align}
p_{4}-p_{3}+\gamma(p_{4}-p_{3})-\rho \int_{3}^{4} \frac{V^{2}}{R} \, dz =0  \\[2ex]
p_{3} =p_{4}+\gamma(p_{4}-p_{3})-\rho \int_{3}^{4} \frac{V^{2}}{R} \, dz 
\end{align}
$$
Since the integral term is negative, we know that $p_{3}<\gamma h_{4-3}$. This means that the pressure at (3) is lower than what we would expect from a simple hydrostatic force balance, because part of the pressure is used to provide the force required for centripetal acceleration.

