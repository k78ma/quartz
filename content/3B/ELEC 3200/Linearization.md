---
title: Linearization
tags:
  - elec3200
date: 2025-03-10
aliases:
  - linearization
---
How do we approximate a nonlinear system by a linear one?

Assume that a time-invariant system is described by the state space model:
$$
\begin{align}
\dot{\mathbf{x}}(t) & =\mathbf{f}(\mathbf{x}(t), u(t)) \\
y(t) & =g[\mathbf{x}(t),u(t)]
\end{align}
$$
where $\mathbf{f}$ and $g$ are continuously differentiable functions.

The **operating** point of the system is a triple of constant vectors $(u_{0}, \mathbf{x}_{0}, y_{0}) \in \mathbb{R} \times \mathbb{R}^{n} \times \mathbb{R}$ if
$$
\begin{align}
0 & =\mathbf{f}(\mathbf{x}_{0}, u_{0}) \\
y_{0} & = g(\mathbf{x}_{0}, u_{0})
\end{align}
$$
Physical meaning: If the system has initial condition $\mathbf{x}_{0}$ and a constant input $u_{0}$ is applied, then the state and output will stay at constant values $\mathbf{x}_{0}$ and $y_{0}$, respectively, for all time, i.e.,
$$
\begin{cases}
u(t)=u_{0} \\
\mathbf{x}(0)=\mathbf{x}_{0}
\end{cases} \implies
\begin{cases}
\mathbf{x}(t)=\mathbf{x}_{0} \\
y(t)=y_{0}
\end{cases}
$$
Since $\mathbf{f}$ and $g$ are differentiable (sufficiently smooth), we can say that
$$
\begin{cases}
u(t)-u_{0} \\
\mathbf{x}(0)-\mathbf{x}_{0}
\end{cases} \quad  \text{are small} \quad \implies \quad 
\begin{cases}
\mathbf{x(t)}-\mathbf{x}_{0} \\
y(t)-y_{0}
\end{cases} \quad  \text{are small}
$$
Denote
$$
\begin{align}
\tilde{u}(t) & =u(t)-u_{0} \\
\tilde{\mathbf{x}}(t) & =\mathbf{x}(t)-\mathbf{x}_{0} \\
\tilde{y}(t) & =y(t)-y_{0}
\end{align}
$$
Replace $\mathbf{f}$ and $g$ by their differentials:

![[Linearization.png|562]]

where we have:

![[Linearization-1.png|621]]

Since $\tilde{u}(t), \tilde{\mathbf{x}}(t), \tilde{y}(t)$ are small, we can neglect the higher-order terms and approximate the original system by the following linear system:
$$
\begin{align}
\dot{\tilde{\mathbf{x}}}(t) & =\mathbf{A}\tilde{\mathbf{x}}(t)+\mathbf{b}\tilde{u}(t) \\
\tilde{y}(t) & =\mathbf{c}\tilde{\mathbf{x}}(t)+d \tilde{u}(t)
\end{align}
$$
where
$$
\begin{align}
\mathbf{A} & =\frac{ \partial f }{ \partial x } \Bigg |_{x=x_{0}, u=u_{0}} \\[2ex]
\mathbf{b} & =\frac{ \partial f }{ \partial u } \Bigg |_{x=x_{0}, u=u_{0}} \\[2ex]
\mathbf{c} & =\frac{ \partial g }{ \partial x } \Bigg |_{x-x_{0}, u=u_{0}} \\[2ex]
d & =\frac{ \partial g }{ \partial u } \Bigg |_{x-x_{0}, u=u_{0}} \\
\end{align}
$$