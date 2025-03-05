---
title: N2L Along Streamline
tags:
  - mech2210
date: 2025-03-05
aliases:
  - n2l along streamline
---
We use $s$-$n$ coordinates, where $s$ is the direction along the streamline and $n$ is the direction normal to the streamline. Let us consider a small particle of size $\delta s$ by $\delta n$. 

Note that we assume:
- Steady flow
- Inviscid flows
- Incompressible flows
- Along a streamline

![[Pasted image 20250305121540.png|609]]

In the $s$-direction, applying $F=ma$ gets us:
$$
[p_{s}-(p_{s}+\delta p_{s})]\delta n\delta y-\delta W\sin \theta=\rho\delta \forall a_{s}
$$
Writing $\sin \theta=\frac{\delta z}{\delta s}$ give us
$$
-\delta p_{s} \,\delta n\, \delta y-\gamma\delta \forall  \frac{\delta z}{\delta s}=\rho\delta \forall a_{s}
$$
Since we are following a streamline, by definition, there is no dependence of $p_{s}$​ on $n$ because $p_{s}$​ only changes along $s$:
$$
\begin{align}
p_{s} & =p_{s}(s,n) \\
dp_{s} & = \frac{ \partial p_{s} }{ \partial s } ds+\cancelto{ 0 }{ \frac{ \partial p_{s} }{ \partial n  }} dn
\end{align}
$$
Then, we can substitute to get:
$$
-\frac{ \partial p_{s} }{ \partial s } \underbrace{ \delta s \, \delta n \,\delta y }_{ d\forall  }-\gamma \,\delta \forall \, \frac{\delta z}{\delta s}=\rho\, \delta \,\forall  a_{s}
$$
Cancelling out all the $\delta \forall$ terms gives us
$$
-\frac{ \partial p_{s} }{ \partial s } -\gamma \frac{\delta z}{\delta s}=\rho a_{s}
$$
We can write the acceleration as
$$
a_{s}=\frac{dV}{dt}=\frac{ \partial V }{ \partial s } \frac{ds}{dt}=V\frac{ \partial V }{ \partial s }
$$
Note that we can write the derivative of $V^{2}$:
$$
\frac{d}{ds}(V^{2})=2V \frac{ \partial V }{ \partial s } 
$$
So we can write
$$
a_{s}=V\frac{ \partial V }{ \partial s } =\frac{1}{2} \frac{dV^{2}}{ds}
$$
Substituting $a_{s}$ back into our main equation gives
$$
\begin{align}
-\frac{dp}{ds}-\gamma\frac{dz}{ds} =\frac{\rho}{2} \frac{dV^{2}}{ds} \\[2ex]
dp+\gamma dz+\frac{\rho}{2}dV^{2}=0
\end{align}
$$
Since we assumed incompressibility, $\rho$ is a constant, so we have:
$$
\boxed{
p+\frac{1}{2}\rho V^{2}+\gamma z=c
}
$$
which is the [[Bernoulli Equation]].

## Example
