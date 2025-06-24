---
title: UDL Chapter 5 Problems
tags:
  - dl
date: 2025-06-24
aliases:
  - udl chapter 5 problems
---
> [!question] Problem 5.1
> Show that the logistic sigmoid function $\text{sig}[z]$ becomes $0$ as $z\to-\infty$, is $0.5$ when $z=0$, and becomes $1$ when $z\to \infty$, where
> $$
> \text{sig}[z] = \frac{1}{1+\exp[-z]}
> $$

For $z\to-\infty$:
$$
\lim_{ z \to -\infty } \frac{1}{1+\exp[-z]}= \frac{1}{\infty} = 0
$$
For $z=0$:
$$
\frac{1}{1+\exp[0]} = \frac{1}{1+1}=\frac{1}{2}=0.5
$$
For $z\to \infty$:
$$
\lim_{ z \to -\infty } \frac{1}{1+\exp[-z]}= \frac{1}{1+0} = 1
$$

> [!question] Problem 5.2
> The loss $L$ for binary classification for a single training pair $\{ \mathbf{x} , y \}$ is
> $$
> L=-(1-y)\log \Big[1- \text{sig}[f[\mathbf{x}, \phi]]\Big] - y \log \Big[ \text{sig}[f[\mathbf{x}, \phi]] \Big]
> $$
> Plot this loss as a function of the transformed output $\text{sig}[f[\mathbf{x}, \phi]]\in [0,1]$ (i) when the training label $y=0$ and when (ii) when $y=1$.

When $y=0$, we just have $L=-1 \log\Big[1-\text{sig}[f[x,\phi]]\Big]$. With $y=1$, we just have $L=-\log\Big[\text{sig}[f[x,\phi]]\Big]$:

![[UDL Chapter 5 Problems-20250624103914141.png]]


> [!question] Problem 5.3
> 


> [!question] Problem 5.4
> 


> [!question] Problem 5.5
> 


> [!question] Problem 5.6
> 


> [!question] Problem 5.7
> 


> [!question] Problem 5.8
> 


> [!question] Problem 5.9
> 


> [!question] Problem 5.10
> 


