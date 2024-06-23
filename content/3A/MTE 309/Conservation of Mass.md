---
title: Conservation of Mass
tags:
  - mte309
date: 2024-06-05
aliases:
  - conservation of mass
---
Conservation of mass states that for a control volume where mass can transfer across boundaries, mass coming in and out of the system is conserved.
$$
\frac{dm_{\text{cv}}}{dt}=\sum_{\text{in}}\dot{m}_{\text{in}} - \sum_{\text{out}}\dot{m}_{\text{out}}
$$
- where $\frac{dm_{\text{cv}}}{dt}$ is the rate of system mass change
- $\sum_{\text{in}}\dot{m}_{\text{in}}$ is the rate of mass inflow
- $\sum_{\text{out}}\dot{m}_{\text{out}}$ is the rate of mass outflow

For the special case of no mass flowing across the boundary of the control volume, conservation of mass reduces to $\frac{dm_{\text{cv}}}{dt}=0$.

## Steady-State
Dt steady-state (not changing with time), we have $d(m_{\text{cv}}) / dt = 0$. Thus, we have
$$
\sum_{\text{in}}\dot{m}_{\text{in}}=\sum_{\text{out}}\dot{m}_{\text{out}}
$$
## One Inlet, One Outlet
When there is one inlet and one outlet for mass to flow through, we have:
$$
\dot{m}_{\text{in}}= \dot{m}_{\text{out}} = \dot{m}
$$

## Flow in One Dimension
For one-dimensional flow, we have
$$
\dot{m}=\rho AV=\frac{AV}{v}
$$
where $A$ is cross-sectional area and $V$ is velocity (not volume!). $\rho$ is density ($\rho=\frac{1}{v}$).