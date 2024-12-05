---
title: Preloading Fasteners
tags:
  - mte322
date: 2024-12-05
aliases:
  - preloading fasteners
---
Pre-loading fasteners improves joint stability, reduces fatigue, and prevents separation under varying loads. Pre-loading ensures that the clamping force remains consistent, even when external forces act on the system. This is shown below:

![[Pre-loading Fasteners.png]]

- Initial state
- Fasteners is pre-loaded with clamping force of 100 lb. The preload compresses the joint members and ensures that the spring (representing the elasticity of the joint) is engaged. An external load (100 lb) is applied. Due to preloading, the fastener absorbs this force elastically without any joint separation. The preload ensures the fastener remains in tension while maintaining joint stability
- By inserting a stop to limit the compression or stretch of the spring, the system gains additional support. This prevents excessive movement under loading conditions.
- Even when the external load decreases (e.g., to 90 lb) or increases (to 110 lb), the preload remains effective. This minimizes joint separation and ensures the fastener does not bear the full brunt of the fluctuating forces, distributing stresses more uniformly.

How much pre-loading is desirable?
- Static loading: about 90% of proof strength
- Dynamic loading: about 75% of proof strength

## Pre-loaded Bolts Under Static Loading
Assuming that we have a preload $F_{i}$ before the external load $P$ is applied. Then, we have:
- Load on bolt:
$$
F_{b}=F_{i}=k_{b}\delta_{b}
$$
- Load on material:
$$
F_{m}=F_{i}=k_{m}\delta_{m}
$$
- The bolt elongates by $\delta_{b}$ while the material gets compressed by $\delta_{m}$. If $k_{m}>k_{b}$, $\delta_{m}<d_{b}$.

![[Pre-loading Fasteners-2.png|158]]

![[Pre-loading Fasteners-1.png|364]]

Now apply $P$ to material. $P$ will will be taken up by both material and bolt, i.e. $P_{b}+P_{m}$:
- $P_{b}$ is external load taken up by the bolt
- $P_{m}$ is external load taken up by the material

The total compressive load on material due to $F_{i}$ and $P$:
$$
F_{m}=F_{i}-P_{m}
$$
Note that we want $F_{m}\geq 0$; if $F_{m}=0$, "separation" occurs.

The total tensile load on bolt due to $F_{i}$ and $P$:
$$
F_{b}=F_{i}+P_{b}
$$
A compatibility condition: additional deflection $\Delta \delta$ due to the applied load $P$ must be the same for both the bolt and the material
$$
\Delta\delta=\frac{P_{b}}{k_{b}}=\frac{P_{m}}{k_{m}} \quad \Longrightarrow \quad P_{m}=\frac{k_{m}}{k_{b}}P_{b}
$$

![[Pre-loading Fasteners-3.png|676]]

![[Pre-loading Fasteners-4.png|170]]

Using $P=P_{m}+P_{b}$, we get $P_{b}= \frac{k_{b}}{k_{b}+k_{m}}P=CP$ where $C=\frac{k_{b}}{k_{b}+k_{m}}$ is called joint constant.

Similarly, we get $P_{m}=\frac{k_{m}}{k_{b}+k_{m}}P=(1-C)P$ for the material.

Note, if $k_{m}\gg k_{b}$ (as is often the case), then $C\ll 1$ and $P_{b} \ll P$. Consequently, $P_{m}\approx P$, which means that most of the external load $P$ will be taken up by the material.

![[Pre-loading Fasteners-5.png|484]]

## Safety Factors Related to Preloading
Safety factor against separation:
- Remember the material will separate (no clamping) when $F_{m}=0$
$$
\begin{align}
F_{m} & =F_{i}-P_{m} \\
 & =F_{i}-(1-C)P=0  \\
\implies  & P_{\text{sep}}=\frac{1}{1-C}F_{i}
\end{align}
$$
Thus, the safety factor against separation is given by
$$
N_{\text{sep}}=\frac{P_{\text{sep}}}{P}=\frac{F_{i}}{P(1-C)}
$$
Safety factor against yielding:
$$
N_{y}=\frac{S_{y}}{\sigma_{b}}=\frac{S_{y}}{F_{b} / A_{t}} = \frac{A_{t}S_{y}}{F_{t}+ CP}
$$
Load factor: overload capacity against proof strength
$$
S_{p}=\frac{F_{i}+N_{\ell}CP}{A_{t}} \quad \Longrightarrow \quad N_{\ell}=\frac{S_{p}A_{t}-F_{i}}{CP}
$$

## Determination of Pre-load
- Point A: Pre-load for $N_{y}=N_{\text{sep}}$
- Point B: Pre-load for protecting joint against possible overloads. 90% of proof strength.

![[Pre-loading Fasteners-7.png|548]]

## Required Torque to Achieve Preload
How to compute wrench torque required to develop the specified preload?

From the power screw, we have
$$
T_{i}=F_{i} \frac{d_{p}}{2}\cdot \frac{\mu+\tan \lambda \cos \alpha}{\cos \alpha-\mu \tan \lambda}+F_{i} \frac{d_{c}}{2}\mu_{c}
$$
Approximating $d_{c}\approx 1.25d$, $d_{p}\approx d$, we get
$$
T_{i}\approx F_{i}d \left( 0.5 \frac{\mu+\tan \lambda \cos \alpha}{\cos \alpha-\mu \tan \lambda}+0.625\mu_{c} \right)=F_{i}dK_{i}
$$
Assuming $\mu=\mu_{c}=0.15$ and using $\alpha=30\degree$:
$$
K_{i}=0.21 \sim 0.22
$$
Interestingly, $K_{i}$ is similar for all threads. For example, for 3/8 - 16 UNC thread, $d=0.375$, $p = 1/ 16$, $d_{p}=0.3344$
$$
\tan \lambda=\frac{p}{\pi d_{p}}=0.595, \quad \quad\cos 30\degree=\frac{\sqrt{ 3 }}{2}=0.866
$$
$$
K_{i}=0.5 \frac{\mu+\tan \lambda \cos \alpha}{\cos \alpha-\mu \tan \lambda}+0.625\mu_{c}+0.625\cdot 0.15=0.2113
$$

![[Pre-loading Fasteners-8.png]]

## Example

Example 7: Pre-loaded Bolt for Static Load

![[MTE 322 screws ex 7.pdf]]


## Properly Preloaded Bolt “Never” Breaks in Statically Loaded Service:

During preloading, the principle stress is determined by the combined effect of tensile and shear stresses
$$
\sigma_{x}=\frac{F_{b}}{A_{t}}, \quad \tau_{xy}=\frac{16T_{i}}{\pi d_{r}^{3}} \quad \Longrightarrow \quad \sigma_{1}=\frac{\sigma_{x}}{2}+\sqrt{ \left( \frac{\sigma_{x}}{2} \right)^{2}+\tau_{xy}^{2} }
$$
After preloading, the shear is gradually relieved and eventually, only the tensile component remains.

Thus, the principle stress long after preloading is smaller than that during preloading by the amount
$$
\Delta \sigma_{1}=\sigma_{1}-\sigma_{x}=-\frac{\sigma_{x}}{2}+\sqrt{ \left( \frac{\sigma_{x}}{2} \right)^{2}+\tau_{xy}^{2} }
$$

![[Pre-loading Fasteners-9.png|244]]
