---
title: Screw Strength Analysis
tags:
  - mte322
date: 2024-12-04
aliases:
  - screw strength analysis
---
Thread strength is judged against the **proof strength** $S_{p}$, which is the stress at which permanent deformation begins to occur. This is typically close to, but lower than $S_{y}$ (yield strength).

Some relevant lengths to analyze stiffness of bolt and material:

![[Screw Strength Analysis.png|664]]

- Grip length $l=l_{s}+l_{t}$, length under tension or material thickness under compression
- Threaded section under tension $l_{t}$
- Unthreaded (shank) section $l_{s}$
- Total threaded section $l_{thd}$

## Deformation of Bolt and Material
Stiffness of the bolt: There are two sections, $l_{s}$ and $l_{t}$. (Note that $l_{t}=l-l_{s}$). These two sections have different stiffness values connected in series.
- Deflection of an elastic member under tension:
$$
\delta=\frac{FL}{AE}
$$
- Equivalent stiffness:
$$
k=\frac{F}{\delta} \quad \Longrightarrow \quad k=\frac{AE}{L}
$$
- Stiffness of the unthreaded section:
$$
k_{ut}=\frac{A_{b}E_{b}}{l_{s}}=\frac{A_{b}E_{b}}{l-l_{t}} \quad \quad \left( A_{b}=\frac{\pi d^{2}}{4} \right)
$$
- Stiffness of threaded section:
$$
k_{t}=\frac{A_{t}E_{b}}{l_{t}} \quad \quad (A_{t}:\text{tensile stress area})
$$
- Equivalent stiffness of the total grip $l$:
$$
\frac{1}{k_{b}}=\frac{1}{k_{t}}+\frac{1}{k_{ut}}=\frac{l_{t}}{A_{t}E_{b}}+\frac{l_{s}}{A_{b}E_{b}} \quad \Longrightarrow \quad k_{b}=\frac{A_{t}A_{b}}{A_{b}l_{t}+A_{t}l_{s}}E_{b}
$$


Stiffness of the material is given by an equivalent stiffness:
$$
k_{m}=\frac{A_{m}E}{l}
$$
where $A_{m}=\frac{\pi D^{2}_{\text{eff}}}{4}\approx \frac{\pi D_{w}^{2}}{4}-\frac{\pi d^{2}}{4}$. $D_{w}$ is an equivalent washer diameter.

## Strengths of Standard Bolts

![[Screw Strength Analysis-1.png|520]]

![[Screw Strength Analysis-2.png|520]]

## Examples

Example 5: Strength of Bolts

![[MTE 322 screws ex 5.pdf]]


Example 6: Stiffness of Bolt and Member

![[MTE 322 screw ex 6.pdf]]