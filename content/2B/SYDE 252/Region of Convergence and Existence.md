---
title: Region of Convergence and Existence
tags:
  - syde252
date: 2023-11-22
aliases:
---
The region in the complex plane for which $\mathcal{L}$ or $Z$ converges or exists.

For example: $h(t)=e^{-at}u(t)$

![[Region of Convergence and Existence.png|188]]

Then, we have:
$$
\begin{align}
H(s) & =\mathcal{L}[h(t)]=\int_{-\infty}^{\infty} h(t)e^{-st} \, dt  \\[3ex] 
	 & = \int_{-\infty}^{\infty} e^{-at} \, e^{-st} \, u(t) \, dt \\[3ex] 
	 & = \int_{0}^{\infty} e^{-(s+a)t} \, dt \\[3ex] 
  & = -\frac{1}{s+a}e^{-(s+a)t} \; \;\Bigg |^{\infty}_{0} \\[3ex] 
	 & = -\frac{1}{s+a} \lim_{ t \to \infty } e^{-(s+a)t}-1
\end{align}
$$
For the limit in the final expression, we have:
$$
\lim_{ t \to \infty } e^{-(s+a)t} = \begin{cases}
0  & \text{if} & \text{Re}[-(s+a)] < 0  \\
\infty  & \text{if} & \text{Re}[-(s+a)] > 0
\end{cases}
$$
This can be simplified to:
$$
\begin{align}
\text{Re}[-(s+a)] & <0 \\
\text{Re}(-a) + \text{Re}(-s) & <0 \\
-a + \text{Re}(-s)  & <0 \\
\text{Re}(-s) & <a \\
-\text{Re}(s) & <a \\
\text{Re}(s) & >-a
\end{align}
$$
This is the region of convergence, such that
$$
H(s)=\frac{1}{s+a} \quad \text{for} \quad \underbrace{ \text{Re}(s)>-a }_{ \text{ROC} }
$$

![[Region of Convergence and Existence-1.png|332]]