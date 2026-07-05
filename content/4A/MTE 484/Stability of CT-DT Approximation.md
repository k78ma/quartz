---
title: Stability of CT-DT Approximation
tags:
  - mte484
date: 2025-11-13
aliases: stability of ct-dt approximation
---
### Left side rule:
$$
s = \frac{1}{T}(z-1)
$$
Stable poles in CT can get mapped to unstable poles in DT:
$$
\frac{1}{s-p} \quad \longrightarrow \quad \frac{1}{\frac{1}{T}(z-1)-p} \times \frac{T}{T} = \frac{T}{z-1-Tp}
$$
- If $p < -\frac{2}{T}$, we can see that the pole $\notin \mathbb{D}$, and thus unstable.

### Right side rule
$$
s = \frac{1}{T} \frac{z-1}{z}
$$
Unstable poles in CT can get mapped to stable in DT
$$
\frac{1}{s-p}  \quad \longrightarrow \quad \frac{1}{\frac{1}{T} \frac{(z-1)}{z}-p} \times \frac{zT}{zT} = \frac{zT}{z-1-pzT} \quad \longrightarrow \quad  \text{pole:} \left\{  \frac{1}{1-pT}  \right\}
$$
- If $p> \frac{2}{T}$, pole $\in \mathbb{D}$, and thus stable.

### Trapezoidal rule
$$
s = \frac{2}{T} \frac{z-1}{z+1}
$$
Stable poles in CT get mapped to stable poles in DT (note: does not depend on $T$).
$$
\begin{align}
\frac{1}{s-p} \quad \longrightarrow \quad  & \frac{1}{\frac{2}{T} \frac{z-1}{z+1} - p} \times \frac{T(z+1)}{T(z+1)}  \\[2ex] 
& = \frac{T(z+1)}{2(z-1)-pT(z+1)}  \\[2ex] 
 & = \frac{T(z+1)}{(2-pT)z-(2+pT)} \\[2ex]
\longrightarrow  & \quad \text{pole:} \left\{  \frac{2+pT}{2-pT}  \right\}
\end{align}
$$

> [!question] Example 9.1.
>  Find the discretized version of $C(s)$ using the 3 discretization methods and compare stability:
> $$
> C(s) = \frac{s-2}{s+25}, \quad T = 0.1
> $$

We have a stable pole at $-25$.

Left side rule:
$$
\begin{align}
D[z]  & = C(s) \Big |_{s=\frac{1}{T}(z-1)} = C(s) \Big|_{s=10(z-1)} \\[2ex] 
 & = \frac{10(z-1)-2}{10(z-1)+25} \\[2ex] 
 & = \frac{10z-12}{10z+15}
\end{align}
$$
which has a pole at $-\frac{3}{2}$, not in $\mathbb{D}$ (unstable).

Right side rule:
$$
\begin{align}
D[z]  & = C(s) \Big |_{s=\frac{1}{T} \frac{z-1}{z}} = C(s) \Big|_{s=10 \frac{z-1}{z}} \\[2ex] 
 & = \frac{10 \frac{z-1}{z} -2}{10 \frac{z-1}{z}+25} \times \frac{z}{z} \\[2ex] 
 & = \frac{8z-10}{35z-10}
\end{align}
$$
which has a pole at $\frac{2}{7}$, which is in $\mathbb{D}$, so stable.

Trapezoidal rule:
$$
\begin{align}
D[z]  & = C(s) \Big |_{s=\frac{2}{T} \frac{z-1}{z+1}} = C(s) \Big|_{20 \frac{z-1}{z+1}} \\[2ex] 
 & = \frac{20 \frac{z-1}{z+1} -2}{20 \frac{z-1}{z+1}+25} \times \frac{z+1}{z+1} \\[2ex] 
 & = \frac{18z-22}{45z+5}
\end{align}
$$
which has a pole at $-\frac{1}{9}$, which is in $\mathbb{D}$, which is stable.
