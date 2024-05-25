---
title: Mechanical Strain
tags:
  - mte321
date: 2024-05-24
aliases:
  - mechanical strain
---
For an [[Axial Load|uniaxial load]], only stress in one direction is applied. Let's call this direction $x$. Then, the strain is:
$$
\epsilon_{x}=\frac{\sigma_{x}}{E}
$$
However, when a material is stretched in one direction, it tends to contract in the perpendicular directions. This can be expressed with:
$$
\epsilon_{y}=\epsilon_{z}=-\nu \frac{\sigma_{x}}{E}
$$
- $E$ is the [[Elastic Constants|Young's Modulus]] of the material.
- [[Elastic Constants|Poisson's ratio]], $\nu$, describes the ratio of the transverse strain to the axial strain. 

## Generalized Triaxial Stress
This can be generalized consider that when stresses are applied in all three directions, the strains in each direction are influenced by stresses in all directions due to the material's Poisson's effect:
$$
\begin{align}
\epsilon_{x}=\frac{1}{E}[\sigma_{x}-\nu(\sigma_{y}+\sigma_{z})] \\[2ex] 
\epsilon_{y}=\frac{1}{E}[\sigma_{y}-\nu(\sigma_{x}+\sigma_{z})] \\[2ex] 
\epsilon_{z}=\frac{1}{E}[\sigma_{z}-\nu(\sigma_{x}+\sigma_{y})]
\end{align}
$$
