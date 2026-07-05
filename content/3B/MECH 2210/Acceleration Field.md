---
title: Acceleration Field
tags:
  - mech2210
date: 2025-03-19
aliases:
  - acceleration field
---
To apply Newton's second law, we want to be able to describe particle acceleration. This is analogous to the [[Velocity Field|velocity field]]. Note that the acceleration field applies for the [[Eulerian and Lagrangian Flow Descriptions|Eulerian flow description]]; for Lagrangian, we simply use $\mathbf{a}=\mathbf{a}(t)$ for each particle.

## Material Derivative
Consider a fluid particle moving along its pathline as shown below.

![[Acceleration Field.png|545]]

The position is given by:
$$
\mathbf{r}=x\mathbf{i}+y\mathbf{j}+z\mathbf{k}
$$
The velocity is in turn given by:
$$
\mathbf{V}=\frac{d\mathbf{r}}{dt}=\frac{dx}{dt}\mathbf{i}+\frac{dy}{dt}\mathbf{j}+\frac{dz}{dt}\mathbf{k}=u\mathbf{i}+v\mathbf{j}+w\mathbf{k}
$$
where we can say $\mathbf{V}=\mathbf{V}(\mathbf{r},t)=\mathbf{V}(x(t),y(t),z(t),t)$.

Then the acceleration is given by
$$
\begin{align}
\mathbf{a}(t) & =\frac{d\mathbf{V}}{dt}=\frac{ \partial \mathbf{V} }{ \partial t } + \frac{ \partial \mathbf{V} }{ \partial x } \frac{dx}{dt}+\frac{ \partial \mathbf{V} }{ \partial y } \frac{dy}{dt}+ \frac{ \partial \mathbf{V} }{ \partial z } \frac{dz}{dt} \\[2ex]
     & = \frac{ \partial \mathbf{V} }{ \partial t } +u \frac{ \partial \mathbf{V} }{ \partial x } +v\frac{ \partial \mathbf{V} }{ \partial y }+w\frac{ \partial \mathbf{V} }{ \partial z }
\end{align}
$$
- The first term is local derivative/acceleration
- The next 3 terms are convective derivative/acceleration

We can also write $\mathbf{a}=a_{x}\mathbf{i}+a_{y}\mathbf{j}+a_{z}\mathbf{k}$. Each scalar component can be written as:
$$
\begin{align}
a_{x} & =\frac{ \partial u }{ \partial t } +u \frac{ \partial u }{ \partial x } +v \frac{ \partial u }{ \partial y } +w \frac{ \partial u }{ \partial z } \\[2ex] 
a_{y} & =\frac{ \partial v }{ \partial t } +u \frac{ \partial v }{ \partial x } +v \frac{ \partial v }{ \partial y } +w \frac{ \partial v }{ \partial z } \\[2ex] 
a_{z} & =\frac{ \partial w }{ \partial t } +u \frac{ \partial w }{ \partial x } +v \frac{ \partial w }{ \partial y } +w \frac{ \partial w }{ \partial z }
\end{align}
$$
In shorthand notation, the above result is given as
$$
\mathbf{a}=\frac{D\mathbf{V}}{Dt}
$$
where the operator
$$
\frac{D(\;\;)}{dt}\equiv \frac{ \partial (\;\;) }{ \partial t } +u\frac{ \partial (\;\;) }{ \partial t }+v\frac{ \partial (\;\;) }{ \partial t }+w\frac{ \partial (\;\;) }{ \partial t }
$$
is called the **material derivative**.

We can make a simplification by noting that
$$
\mathbf{V}\cdot \nabla=(u\mathbf{i}+v\mathbf{j}+w\mathbf{k})\cdot \left(\frac{ \partial  }{ \partial x } \mathbf{i}+ \frac{ \partial  }{ \partial y } \mathbf{j}+\frac{ \partial  }{ \partial z } \mathbf{k}\right)
$$
which then lets us write
$$
\mathbf{a}=\frac{ \partial \mathbf{V} }{ \partial t } +(\mathbf{V}\cdot \nabla)\mathbf{V}
$$
Note that if $\frac{ \partial \mathbf{V} }{ \partial t }\neq 0$, we have [[Steady and Unsteady Flows|unsteady flow]].

## Streamline Coordinates
One of the major advantages of using the streamline coordinate system is that the velocity is always tangent to the $s$ direction:
- Cartesian – $\mathbf{V}=u\mathbf{i}+v\mathbf{j}+w\mathbf{k}$
- Streamline – $\mathbf{V}=V\mathbf{\,s}$

In streamline coordinates, the material derivative becomes:
$$
\frac{D(\;)}{Dt}=\frac{ \partial (\;) }{ \partial t } +\frac{ \partial (\;) }{ \partial s } \frac{ds}{dt}+\frac{ \partial (\;) }{ \partial n } \frac{dn}{dt}
$$

Then, for acceleration we have:
$$
\begin{align}
\mathbf{a} & =\frac{D\mathbf{V}}{Dt}  =\frac{D}{Dt}(V\mathbf{s})=\frac{DV}{Dt}\mathbf{s}+V \frac{D\mathbf{s}}{dt}\\[2ex] 
     & =\left( \frac{ \partial V }{ \partial t } +\frac{ \partial V }{ \partial s } \frac{ds}{dt} + \frac{ \partial V }{ \partial n } \frac{dn}{dt} \right)\mathbf{s}+V\left( \frac{ \partial \mathbf{s} }{ \partial t }+\frac{ \partial \mathbf{s} }{ \partial s } \frac{ds}{dt}+ \frac{ \partial \mathbf{s} }{ \partial n } \frac{dn}{dt} \right)
\end{align}
$$

For steady flows and along streamlines:
$$
\begin{align}
\mathbf{a} & =\left( \cancelto{ 0 }{ \frac{ \partial V }{ \partial t } } +\frac{ \partial V }{ \partial s } \frac{ds}{dt} + \cancelto{ 0 }{ \frac{ \partial V }{ \partial n } \frac{dn}{dt} } \right)\mathbf{s}+V\left( \cancelto{ 0 }{ \frac{ \partial \mathbf{s} }{ \partial t } }+\frac{ \partial \mathbf{s} }{ \partial s } \frac{ds}{dt}+ \cancelto{ 0 }{ \frac{ \partial \mathbf{s} }{ \partial n } \frac{dn}{dt} } \right) \\[2ex]
     & = V \frac{ \partial V }{ \partial s } \mathbf{s}+V^{2} \frac{ \partial \mathbf{s} }{ \partial s } 
\end{align}
$$
Note that
$$
\frac{ \partial \mathbf{s} }{ \partial s } =\lim_{ \Delta s, \Delta t\to 0 } \frac{\mathbf{s}(t+\Delta t)-\mathbf{s}(t)}{s(t+\Delta t)-s(t)}=\frac{| \mathbf{s} |\delta \theta \mathbf{n}}{R\delta \theta}=\frac{\mathbf{n}}{R}
$$
Then, we can write our previous expression as
$$
\mathbf{a}=V \frac{ \partial V }{ \partial s } \mathbf{s}+\frac{V^{2}}{R}\mathbf{n}
$$
or
$$
\mathbf{a}=a_{s}\mathbf{s}+a_{n}\mathbf{n}
$$
with $a_{s}=V\frac{ \partial V }{ \partial s }$, $a_{n}=\frac{V^{2}}{R}$.