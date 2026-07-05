---
title: Manometry
tags:
  - mech2210
date: 2025-02-25
aliases:
  - manometry
---
Manometry is a technique for measuring pressure using liquid columns in vertical or inclined tubes.

Since manometers involve columns of fluid at rest, the fundamental equation describing their use is [[Pressure Variation in a Fluid at Rest|as derived here]]:
$$
p=\gamma h+p_{0}
$$
which gives the pressure at any elevation within a homogeneous fluid in terms of a reference pressure and the vertical distance $h$ between $p$ and $p_{0}$. In a fluid at rest, pressure will increase as we move downward and decrease as we move upward.

The fluid in the manometer is called the gage fluid. 

## Piezometer Tube
The simplest type of manometer consists of a vertical tube, open at the top, and attached to the container in which the pressure is desired.

![[Manometry.png|251]]

Application of this equation to the piezometer indicates that the pressure $p_{A}$ can be determined by the measurement of $h_{1}$ through the relationship
$$
p_{A}=\gamma_{1}h_{1}
$$
where $\gamma_{1}$ is the specific weight of the liquid in the container. Since the tube is open at the top, the pressure $p_{0}$ can be set equal to 0 (we are using gage pressure), with the height $h_{1}$ measured from the meniscus at the upper surface to the point (1). Since point (1) and point $A$ within the container are at the same elevation, $p_{A}=p_{1}$.

Disadvantages:
- Only suitable if the pressure in the container is greater than the atmospheric pressure
- Pressure to be measured must be relatively small so the required height of the column is reasonable.
- Fluid in the container being measured must be liquid rather than gas

## U-Tube Manometer
To find the pressure in terms of the various column heights, we start at one end of the system and work our way around to the other end.

In equation form this is:
$$
p_{A}+\gamma_{1}h_{1}-\gamma_{2}h_{2}=0
$$
and, therefore $p_{A}=\gamma_{2} h_{2}-\gamma_{1}h_{1}$.

![[Manometry-1.png|370]]


### Inclined U-Tube
The inclined U-tube is give:
$$
p_{A}=\gamma_{2}l\sin \theta-\gamma_{1}h_{1}
$$

![[Manometry-2.png|351]]

## Example

> [!problem] Example Problem
> Given:
> - $SG_{\text{oil}}=0.9$
> - $SG_{\text{Hg}}=13.6$- $h_{1}=91.4 \text{ cm}$
> - $h_{2}=15.2 \text{ cm}$
> - $h_{3}=22.9 \text{ cm}$
> 
> Desired: Pressure reading

Procedure:
1. Find the point, $A$, where $p$ is needed
2. Find the point, $B$, where $p$ is known (free surface)
3. Find a route from $A$ to $B$
4. Obtain the pressure

We have:
$$
p_{A}+\cancelto{ 0 }{ \gamma_{\text{air}}h_{AC} }+\gamma_{\text{oil}}h_{1}+\gamma_{\text{oil}}h_{2}-\gamma_{\text{Hg}}h_{3}=p_{B}=0
$$
where $\gamma=\rho g$, $\gamma_{\text{air}}\ll \gamma_{\text{oil}} < \gamma_{\text{Hg}}$.

Then:
$$
\begin{align}
p_{A} & =\gamma_{\text{Hg}}h_{3}-\gamma_{\text{oil}}h_{1}-\gamma_{\text{oil}}h_{2} \\[2ex]
     & = SG_{\text{Hg}} \, \gamma_{\text{H}_{2}\text{O}} \, h_{3} - SG_{ \text{oil}} \, \gamma_{ \text{H}_{2}\text{O}}(h_{1}+h_{2}) \\[2ex]
     & =21 \text{ kPa}
\end{align}
$$
