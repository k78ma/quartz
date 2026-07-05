---
title: Laminar Flow Fluid Element Analysis
tags:
  - mech2210
date: 2025-05-19
aliases:
  - laminar flow fluid element analysis
---
![[Laminar Flow Fluid Element Analysis-20250519173010669.png]]

To analyze a  fluid element flowing through a cylindrical pipe under fully developed laminar flow, we apply Newton's Second Law to a cylindrical volume of fluid.

In the fully developed laminar flow, The pressure difference ($p_1 - p_2$) across the length ($\ell$) of the fluid element creates a net driving force. This pressure force is balanced by shear stress $\tau$ acting on the walls of the pipe.

This force balance is written as
$$
(p_1 - p_2) \pi r^2 = \tau \cdot 2\pi r \ell
$$
where $r$ is the radius at any point within the pipe, $l$ is the length of the cylindrical element, and $\tau$ is the shear stress.

The relationship rearranges to express shear stress as a function of the radius:
$$
\frac{\Delta p}{\ell} = \frac{2\tau}{r} \quad \Longrightarrow \quad  \tau = C\cdot r
$$
which shows that shear stress linearly proportional to the radius $r$. The constant $C = \frac{2\tau_{w}}{D}$ is introduced to express shear stress independently of $r$. At the centerline, $r=0$, which gives
$$
\tau = \frac{2\tau_{w}}{D} \cdot r = 0
$$
At the pipe wall, $r=D / 2$, 
$$
\tau = \frac{2\tau_{w}}{D} \cdot  \frac{D}{2} = \tau_{w}
$$
showing that shear stress indeed reaches its maximum value of $\tau_{w}$.

We can also connect the maximum shear stress at the wall to the overall pressure drop along the pipe's length:
$$
\Delta p =\frac{4l\tau_{w}}{D}
$$
## Velocity Profile Derivation
The velocity profile for fully developed laminar flow is derived from the derivation of shear stress in terms of velocity gradient:
$$
\tau = \mu\frac{ dy}{dy} = -\mu  \frac{du}{dr}
$$
or
$$
\begin{align}
\tau = -\mu  \frac{du}{dr}  & = \frac{\Delta pr}{2l} \\[2ex] 
\frac{du}{dr} &  = - \frac{\Delta pr}{2\mu l} \\[2ex] 
\int du  & = -\frac{\Delta pr}{2\mu l} \int r \, dr \\[2ex] 
u & = - \frac{\Delta p}{4\mu l}r^{2}+ C_{1} \\[2ex] 
\end{align}
$$
This equation represents a parabolic boundary profile. We can use $\mu = 0$ and $r= D / 2$ as boundary conditions:
$$
\begin{align}
C_{1}  & = \frac{\Delta pD^{2}}{16\mu l} \\[2ex] 
    \mu  & = \frac{\Delta pD^{2}}{16\mu l}\left[  1 - \left( \frac{2r}{D} \right)^{2} \right] \\[2ex] 
V_{c}  & = \frac{\Delta pD^{2}}{16\mu l}
\end{align}
$$
where $V_{C}$ is the maximum velocity, occurring at the centerline.

The velocity profile at any point is then by:
$$
\begin{align}
\mu  & = V_{C}\left[ 1-\left( \frac{r}{R} \right)^{2} \right] \\[2ex]
     & = \frac{\tau_{w}D}{4\mu} \left[ 1-\left( \frac{r}{R} \right)^{2} \right]
\end{align}
$$ 

## Flow Rate Calculation
The volumetric flow rate $Q$ is determined by integrating the velocity profile across the pipe's cross-sectional area:
$$
\begin{align}
Q  & = \int_0^R u \cdot 2\pi r \, dr \\[2ex]
 & = \frac{\pi D^4 \Delta p}{128 \mu \ell}
\end{align}
$$
This represents the volume of fluid passing through the pipe per unit time. The average velocity is defined by the flow rate divided by the cross sectional area:
$$
\overline{V} = \frac{Q}{A} = \frac{V_{C}}{2}= \frac{\Delta pD^{2}}{32\mu l}
$$
In this way we can also write the pressure drop over a given pipe length as
$$
\Delta p= \frac{16\mu l\overline{V}}{D^{2}}
$$

## Darcy Friction Factor
For laminar flow, the Darcy Friction factor $f$ quantifies the friction resistance
$$
f=\frac{\delta p}{\frac{1}{2} \rho \overline{V}^{2}} \frac{D}{\ell}
$$
or
$$
\delta p = f \frac{l}{D} \frac{\rho \bar{V}^{2}}{2}
$$

For fully developed laminar flow in a pipe, the friction factor simplifies to:
$$
f=\frac{64}{\text{Re}}
$$
