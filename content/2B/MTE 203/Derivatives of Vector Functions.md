---
title: Derivatives of Vector Functions
tags:
  - mte203
date: 2023-09-10
---
### First Principles Definition
If $\vec{r}(t)=\langle x(t), y(t), z(t) \rangle$ is a vector valued function with parameter $t$, then the derivative of $r(t)$ is:
$$
\lim_{ \Delta t \to 0 } \frac{\vec{r}(t+\Delta t)-\vec{r}(t)}{\Delta t}
$$
provided that it exists.

### Practical Usage
Practically, we can just use:
$$
\begin{align}
\vec{r}'(t) &= \langle f'(t), g'(t), h'(t) \rangle \\
&= f'(t) \vec{i} + g'(t) \vec{j} +h'(t)\vec{k}
\end{align}
$$
### Properties
Chain rule:
$$
\begin{align}
\frac{d}{dt} (f(t)\vec{u}(t)) &= f'(t)\vec{u}(t)+f(t)\vec{u}'(t) \\ \\ \text{or} \\ \\
\frac{d}{dt}(f\vec{v})&=\frac{ df }{ dt } \vec{v}+f\frac{ d\vec{v} }{ dt } 
\end{align}
$$

Dot product and cross product:
$$
\begin{align}
\frac{d}{dt} (\vec{u} \cdot \vec{v}) &= \vec{u}' \cdot \vec{v} + \vec{u} \cdot \vec{v}' \\
\frac{d}{dt} (\vec{u} \times \vec{v}) &= \vec{u}' \times \vec{v} + \vec{u} \times \vec{v}'
\end{align}
$$