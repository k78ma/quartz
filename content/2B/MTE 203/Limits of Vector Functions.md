---
title: Limits of Vector Functions
tags:
  - mte203
date: 2023-09-10
---
### Limits
The limit of a vector function is defined as:
$$
\begin{align}
\lim_{ t \to a } \vec{r} (t) &= \lim_{ t \to a } \langle f(t), g(t), h(t) \rangle \\ \\
&= \langle \lim_{ t \to a } f(t), \lim_{ t \to a } g(t), \lim_{ t \to a } h(t) \rangle \\ \\
&=\lim_{ t \to a } f(t) \vec{i} + \lim_{ t \to a } g(t) \vec{j}+ \lim_{ t \to a } h(t)\vec{k}
\end{align}
$$
### Continuity
A vector valued function $\vec{v}(t)$ is called continuous at a point $t_{0}$ if
$$
\vec{v}(t_{0})=\lim_{ t \to t_{0} } \vec{v}(t)
$$
A vector valued function is continuous at a point if and only if its components are continuous at that point.