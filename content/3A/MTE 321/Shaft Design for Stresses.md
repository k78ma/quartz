---
title: Shaft Design for Stresses
tags:
  - mte321
date: 2024-06-25
aliases:
  - shaft design for stresses
---
Typical loads applied to a shaft:
- [[Axial Load|Axial loading]]
$$
\sigma=\frac{P}{A} = \frac{P}{\frac{\pi}{4}d^{2}}
$$
- [[Normal Stresses for Beams in Bending|Bending moment]]
$$
\sigma=\frac{Mr}{I}=\frac{32M}{\pi d^{3}}
$$
- [[Torsion|Shear stress due to torsion]]
$$
\tau=\frac{Tr}{J}
$$
## Critical Locations
It is not necessary to evaluate the stresses in a shaft at every point; a few potentially critical locations will suffice. 

Critical locations will usually be on the outer surface, at axial locations where:
- **Bending moment is large**
	- Use shear force and bending moment diagrams to assess
	- If forces are in two planes, we will need two sets of diagrams. Then, we can calculate the resultant moment.
	- Constant bending moment on a rotating shaft produces a completely reversed moment.
- **Torque is present**
	- Typically enters shaft at one gear and leaves at another gear.
	- Use FBD to assess.
- **Stress concentrations exist** 

Axial loads are typically negligible compared to bending moment, torque, and stress concentrations.

## Shaft Stresses
Bending, torsion, and axial stresses may be present in both mean and alternating components. If the shaft rotates, we have [[Stress-Life Method|completely reversed stress]]; we need to determine mean stress and stress amplitude. 

Bending, torsion, and axial stresses may be present in a combined loading scenario.

![[Shaft Design for Stresses.png|572]]

![[Shaft Design for Stresses-1.png|576]]

## Stress Equations
Shaft-specific stress equations are presented here. This is for dynamic loadings, where we account for the alternating stress (amplitude) and mean stress over a loading cycle.
$$
\begin{align}
\sigma_{a}=K_{f} \frac{M_{a}c}{I}, \quad \sigma_{m}=K_{f} \frac{M_{m}c}{I} \\[2ex] 
\tau_{a}=K_{fs} \frac{T_{a}r}{J}, \quad \tau_{m}=K_{fs} \frac{T_{m}r}{J}
\end{align}
$$
- $r$ – shaft radius  
- $d$ – shaft diameter  
- $T_{m}$ – mean torque  
- $I$ – second moment of area  
- $M_{m}$ – mean bending moment  
- $c$ – distance from centroidal axis  
- $J$ – polar second moment of area  
- $T_{a}$ – alternating/amplitude torque  
- $M_{a}$ – alternating/amplitude bending moment  
- $K_{f}$ and $K_{fs}$ – fatigue stress-concentration factor

Then, we can modify [[Distortion Energy Theory|von Mises stresses]] for rotating round shafts instead of static loads. Again assuming negligible axial loads, we have:
$$
\begin{align}
\sigma_{a}' & =(\sigma_{a}^{2}+3\tau_{a}^{2})^{1 / 2}=\left[ \left( \frac{32K_{f}M_{a}}{\pi d^{3}} \right)^{2}+3\left( \frac{16K_{fs}T_{a}}{\pi d^{3}} \right)^{2} \right]^{1 / 2} \\[2ex] 
\sigma_{m}' & =(\sigma_{m}^{2}+3\tau_{m}^{2})^{1 / 2}=\left[ \left( \frac{32K_{f}M_{m}}{\pi d^{3}} \right)^{2}+3\left( \frac{16K_{fs}T_{m}}{\pi d^{3}} \right)^{2} \right]^{1 / 2}
\end{align}
$$
