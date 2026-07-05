---
title: Straight Bevel Gear Load Analysis
tags:
  - mte322
date: 2024-09-22
aliases:
  - straight bevel gear load analysis
---
When gears are used to transmit motion between intersecting shafts, some form of bevel gear is required. 
## Geometry
The pitch of bevel gears is measured at the large end of the tooth. Both the circular pitch and the pitch diameter are used calculated in the same manner as for [[Spur Gears|spur gears]]. 

The pitch angles are defined by the pitch cones meeting at the apex, as shown in the figure. They are related to the tooth numbers as follows:
$$
\tan \gamma=\frac{N_{P}}{N_{G}}, \quad \tan \Gamma =\frac{N_{G}}{N_{P}}
$$
where the subscripts refer to the pinion and gear, respectively, and where $\gamma$ and $\Gamma$ are the pitch angles of the pinion and gear.

![[Straight Bevel Gear Load Analysis.png]]

## Loads

![[Straight Bevel Gear Load Analysis-1.png]]


## Loads Analysis

![[Straight Bevel Gear Load Analysis-2.png]]

### Procedure
- Load distribution is similar to [[Helical Gear Load Analysis|helical gears]] in that it has components in all three directions ($W_{r}, W_{t}, W_{x}$) which are applied at the pitch radii ($r_{P}, r_{G}$). 
	- With $P$ for pinion and $G$ for gear, we have:
$$
W_{tP}=\frac{T_{\text{in}}}{r_{P}}=W_{tG}=\frac{T_{\text{out}}}{r_{G}}
$$
- Given $W_{t}$, other forces are computed using $\phi$ (pressure angle) and $\gamma$ (pitch cone angle for pinion):
$$
\begin{align}
W_{rP} & =W_{tP}\tan \phi \cos \gamma \\[2ex]
W_{xP} & =W_{tP}\tan \phi \sin \gamma
\end{align}
$$
- Pinion is perpendicular r to gear, so the radial direction for pinion becomes the axial direction for the gear:
$$
W_{rP}=W_{xG}, \quad W_{xP}=W_{rG} \quad (W_{tP}=W_{tG})
$$

## Example

![[MTE 322 ex 7.pdf]]