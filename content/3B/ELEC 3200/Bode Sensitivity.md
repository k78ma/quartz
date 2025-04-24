---
title: Bode Sensitivity
tags:
  - elec3200
date: 2025-04-24
aliases:
  - bode sensitivity
---
Consider again [[Motor Control Case Study|DC motor model]] with no disturbance (left side is open-loop version, right side is closed-loop version):

![[Bode Sensitivity-20250424173507470.png]]

In the "nominal" situation, we have the motor with DC gain of $A$, and the overall transfer function, either open-loop or closed-loop, has some other DC gain, which we call $T$.

Suppose that, due to modeling error, changes in operating conditions, etc, the motor gain changes so that we have
$$
A\quad \longrightarrow \quad A+\underbrace{ \delta A }_{ \text{small perturbation} }
$$
This will cause a perturbation in the overall DC gain:
$$
T\quad \longrightarrow \quad T+\delta T
$$
The **Bode sensitivity** is defined as
$$
\begin{align}
S & = \frac{\delta T / T}{\delta A / A} \\[2ex]
     & = \text{relative error} \\[2ex]
     & = \frac{\text{normalized (percentage) error in } T}{\text{normalized (percentage) error in }A}
\end{align}
$$
## Motor Example

### Open-loop
In the nominal case, we have $T_{\text{ol}}=K_{\text{ol}} A= \frac{1}{A}A=1$.

In the perturbed case, we have:
$$
\begin{align}
A\quad  & \longrightarrow \quad A+\delta A \\
T_{\text{ol}}\quad  & \longrightarrow \quad K_{\text{ol}}(A+\delta A)=\frac{1}{A}(A+\delta A)=\underbrace{ 1 }_{ T_{\text{ol}} }+\underbrace{ \frac{\delta A}{A} }_{ \delta T_{\text{ol}} }
\end{align}
$$
Thus, the sensitivity is
$$
S_{\text{ol}}= \frac{\delta T_{\text{ol}} / T_{\text{ol}}}{\delta A_{\text{ol}} / A_{\text{ol}}}=\frac{\delta A / A}{\delta A / A}=1
$$
which means that a 5% error in $A$ will cause a 5% error in $T_{\text{ol}}$.

### Closed-loop:
In the nominal case, we have
$$
T_{\text{cl}}=\frac{AK_{\text{cl}}}{1+AK_{\text{cl}}}
$$
In the perturbed case, we have
$$
\begin{align}
A\quad  & \longrightarrow \quad A+\delta A \\
T \quad  & \longrightarrow \quad T_{\text{cl}}+\delta T_{\text{cl}}
\end{align}
$$
How do we compute $\delta T_{\text{cl}}$? We can use a Taylor expansion:
$$
T(A+\delta A)=T(A)+\frac{dT}{dA}(A)\delta A+\text{higher order terms}
$$
In our case:
$$
\begin{align}
\frac{dT_{\text{cl}}}{dA} & =\frac{K_{\text{cl}}}{1+AK_{\text{cl}}}-\frac{AK^{2}_{\text{cl}}}{(1+AK_{\text{cl}})^{2}} \\
 & =\frac{K_{\text{cl}}}{(1+AK_{\text{cl}})^{2}}
\end{align}
$$
which gives
$$
\delta T_{\text{cl}}=\frac{K_{\text{cl}}}{(1+AK_{\text{cl}})}\delta A
$$
Therefore, we have
$$
\delta T_{\text{cl}} / T_{\text{cl}}= \frac{\frac{K_{\text{cl}}}{(1+AK_{\text{cl}})}\delta A}{\frac{AK_{\text{cl}}}{1+AK_{\text{cl}}}}=\frac{1}{1+AK_{\text{cl}}}\delta A / A
$$
which finally gives us the sensitivity:
$$
S_{\text{cl}}=\frac{\delta T_{\text{cl}} / T_{\text{cl}}}{\delta A / A}=\frac{1}{1+AK_{\text{cl}}}
$$
From this we can conclude that for high gains $K_{\text{cl}}$, we get smaller relative error due to parameter variations in the plant model, $S_{\text{cl}}\ll 1$.