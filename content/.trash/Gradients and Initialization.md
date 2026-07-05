---
title: Gradients and Initialization
tags:
  - dl
date: 2025-07-14
aliases:
  - gradients and initialization
---
## Problem Definitions
Consider a network $\mathbf{f}[\mathbf{x}, \phi]$ with multivariate input $\mathbf{x}$, parameters $\phi$, and three hidden units $\mathbf{h}_{1}, \mathbf{h}_{2}, \mathbf{h}_{3}$:
$$
\begin{align}
\mathbf{h}_{1}  & = \mathbf{a}[\beta_{0}+\Omega_{0}\mathbf{x}] \\
\mathbf{h}_{2}  & = \mathbf{a}[\beta_{1}+\Omega_{0}\mathbf{h}_{1}] \\
\mathbf{h}_{3}  & = \mathbf{a}[\beta_{2}+\Omega_{2}\mathbf{h}_{2}] \\
\mathbf{f}[\mathbf{x}, \phi] & = \beta_{3} + \Omega_{3}\mathbf{h}_{3}
\end{align}
$$
where the function $\mathbf{a}[\bullet]$ applies the application function separately to every element of the input. The model parameters $\phi=\{ \beta_{0}, \Omega_{0}, \beta_{1}, \Omega_{1},\beta_{2}, \Omega_{2}, \beta_{3}, \Omega_{3} \}$ consist of the bias vectors $\beta_{k}$ and weight matrices $\Omega_{k}$ between every layer.

We also have individual loss terms $3\ll$