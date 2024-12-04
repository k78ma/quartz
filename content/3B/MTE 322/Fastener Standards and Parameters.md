---
title: Fastener Standards and Parameters
tags:
  - mte322
date: 2024-12-04
aliases:
  - fastener standards and parameters
---
## Thread Parameters
- Major diameter
- Minor diameter
- Pitch diameter
- Pitch $p$

![[Fastener Standards and Parameters.png|600]]

## Thread Callouts for Fasteners
- Inch (UNS – Unified National Standard) threads
	- Smaller than 1/4'' screws are specified by numbers, #0 ~ #12
	- #6 - 32 UNC 2B means $d=0.138 \text{ in}$

![[Fastener Standards and Parameters-2.png|560]]

- Metric (ISO) threads

![[Fastener Standards and Parameters-3.png|452]]

![[Fastener Standards and Parameters-4.png|348]]

## Thread Standards
Basic profile and standard formula:
- Pitch $p$ and height $H$:
$$
H=\frac{1}{\tan 30\degree}\cdot p= \frac{\sqrt{ 3 }}{2}\cdot p \approx 0.866025\cdot p
$$
- Formula for $d_{p}$:
$$
d_{p}=d-\frac{5\sqrt{ 3 }}{8}p=d-0.649519\cdot p=d-0.649519 / N
$$
- Formula for $d_{r}$:
$$
\begin{align}
\text{UNS threads:}  & \quad d_{r}=d-1.299038 / N\left( =d- \frac{3\sqrt{ 3 }}{4}p \right)\\[2ex] 
\text{ISO threads:} &  \quad d_{r}=d-1.226869 \cdot p
\end{align}
$$
Parameters for strength analysis:
- For tensile stress analysis, use the mean area of $d_{p}$ and $d_{r}$
$$
A_{t}=\frac{\pi}{4}\left( \frac{d_{p}+d_{r}}{2} \right)^{2} \quad \longrightarrow \quad \sigma_{t}=\frac{F}{A_{t}}
$$
	- For torsional shear stress, use the minimum area (given by $d_{r}$)
$$
J=\frac{\pi r ^{4}}{2}=\frac{\pi d_{r}^{4}}{32} \quad \longrightarrow \quad \tau=\frac{Tr}{J}=\frac{16T}{\pi d_{r}^{3}}
$$
## Standard Thread Dimensions

![[Fastener Standards and Parameters-5.png|636]]

![[Fastener Standards and Parameters-6.png|628]]

![[Fastener Standards and Parameters-7.png|628]]
