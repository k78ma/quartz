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
Shaft-specific stress equations are presented here. Bending, torsion, and axial stresses may be present in both mean and alternating components. This is for dynamic loadings, where we account for the alternating stress (amplitude) and mean stress over a loading cycle. 

The fluctuating stresses due to bending and torsion are given below. Axial loads are relatively very small at critical locations where bending and torsion dominate, so they will neglected.
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

We can then use these values to derive [[Distortion Energy Theory|von Mises stresses]] for rotating round shafts instead of static loads. Again assuming negligible axial loads, we have:
$$
\begin{align}
\sigma_{a}' & =(\sigma_{a}^{2}+3\tau_{a}^{2})^{1 / 2}=\left[ \left( \frac{32K_{f}M_{a}}{\pi d^{3}} \right)^{2}+3\left( \frac{16K_{fs}T_{a}}{\pi d^{3}} \right)^{2} \right]^{1 / 2} \\[2ex] 
\sigma_{m}' & =(\sigma_{m}^{2}+3\tau_{m}^{2})^{1 / 2}=\left[ \left( \frac{32K_{f}M_{m}}{\pi d^{3}} \right)^{2}+3\left( \frac{16K_{fs}T_{m}}{\pi d^{3}} \right)^{2} \right]^{1 / 2}
\end{align}
$$
## Shaft Fatigue Failure Criteria
The von Mises stresses above can be substituted into various failure criterion equations, which we can solve to find factor of safety $n$, or diameter $d$.

To keep the equations in simpler form, we first establish a pair of terms to be used in each of the criteria equations:
$$
\begin{align}
A & =\sqrt{ 4(K_{f}M_{a})^{2}+3(K_{fs}T_{a})^{2} } \\
B & =\sqrt{ 4(K_{f}M_{m})^{2}+3(K_{fs}T_{m})^{2} } 
\end{align}
$$
**DE-Goodman:**
$$
\begin{align}
n & =\frac{\pi d^{3}}{16}\left( \frac{A}{S_{e}}+\frac{B}{S_{ut}} \right)^{-1}\\[2ex] 
d & =\left[ \frac{16n}{\pi}\left( \frac{A}{S_{e}}+\frac{B}{S_{ut}} \right) \right]^{1 / 3}
\end{align}
$$
**DE-Morrow:**
$$
\begin{align}
n & =\frac{\pi d^{3}}{16}\left( \frac{A}{S_{e}}+\frac{B}{\tilde{\sigma}_{f}} \right)^{-1}\\[2ex] 
d & =\left[ \frac{16n}{\pi}\left( \frac{A}{S_{e}}+\frac{B}{\tilde{\sigma}_{f}} \right) \right]^{1 / 3}
\end{align}
$$
where:
- $n$ is factor of safety
- $d$: Diameter of the shaft or component.
- $K_{f}$ and ​$K_{fs}$: Fatigue stress concentration factors for normal and shear stresses.
- $M_{a}, M_{m}$: Alternating and mean moments.
- $T_{a}, T_{m}$​: Alternating and mean torques.
- $S_{e}$​: Endurance limit of the material.
- $S_{ut}$: Ultimate tensile strength of the material.
- $\tilde{\sigma}_{f}$: True fracture strength
- $\sigma_{f}'$: Fatigue strength coefficient – used for deriving $\tilde{\sigma}_{f}$
	- For steel, $\sigma_{f}'=S_{ut}+345 \text{ MPa}$

**DE-Gerber:**
$$
\begin{align}
\frac{1}{n} & =\frac{8A}{\pi d^{3}S_{e}}\left\{  1+\left[ 1+\left( \frac{2BS_{e}}{AS_{ut}} \right)^{2} \right]^{1 / 2}  \right\} \\[2ex] 
d  & = \left( \frac{8nA}{\pi S_{e}}\left\{  1+\left[ 1+\left( \frac{2BS_{e}}{AS_{ut}} \right)^{2} \right]^{1 / 2}  \right\} \right)^{ 1/3}
\end{align}
$$
**DE-SWT:**
$$
\begin{align}
n & =\frac{\pi d^{3}}{16} \frac{S_{e}}{(A^{2}+AB)^{ 1 / 2}}\\[2ex] 
d & =\left[ \frac{16n}{\pi S_{e}}(A^{2}+AB)^{1 / 2} \right]^{1/3}
\end{align}
$$

![[Shaft Design for Stresses-2.png|568]]

## Shaft Yield Check
It is always necessary to consider the possibility of static failure in the first load cycle. A von Mises maximum stress is calculated for this purpose:
$$
\begin{align}
\sigma'_{\text{max}} & =[(\sigma_{m}+\sigma_{a})^{2}+3(\tau_{m}+\tau_{a})^{2}]^{ 1 / 2}
\\[2ex] 
	 & =\left[ \left( \frac{32K_{f}(M_{m}+M_{a})}{\pi d^{3}} \right)^{2} +3\left( \frac{16K_{fs}(T_{m}+T_{a})}{\pi d^{3}} \right)^{2}\right]^{1 / 2}
\end{align}
$$
To check for yielding, we can then compare this to the yield strength as usual:
$$
n_{y}=\frac{S_{y}}{\sigma'_{\text{max}}}
$$
For a quick conservative check, we can use the estimate of $\sigma'_{\text{max}}=\sigma_{a}'+\sigma_{m}'$.