---
title: Linear Map
tags:
  - lin-alg
date: 2024-12-15
aliases:
  - linear map
  - linear transformation
---

> [!definition] Definition: Linear Map
> A *linear map* from $V$ to $W$ is a function $T: \;V\to W$ with the following properties.
>- **Additivity:** $T(u+v)=Tu+Tv$ for all $u,v\in V$.
>- **Homogeneity:** $T(\lambda v)=\lambda(Tv)$ for all $\lambda \in \mathbb{F}$ and all $v\in V$.

We use the notation $Tv$ as well as the function notation $T(v)$. Some use the term **linear transformation** instead.


> [!note] Notation: $\mathcal{L}(V,W), \,\mathcal{L}(V)$
> - The set of linear maps from $V$ to $W$ is denoted by $\mathcal{L}(V,W)$
> - The set of linear maps from $V$ to $V$ is denoted by $\mathcal{L}(V)$. In other words, $\mathcal{L}(V)=\mathcal{L}(V,V)$.

## Examples

### Zero
We let the symbol $0$ denote the linear map that takes every element of some vector space to the additive identity of another (or possibly the same) vector space. To be specific, $0\in \mathcal{L}(V,W)$ is defined by
$$
0v=0
$$
- The $0$ on the left side of the equation above is a function from $V$ to $W$
- The $0$ on the right side is the additive identity in $W$

### Identity Operator
The *identity operator*, denoted by $I$, is the linear map on some vector space that takes each element to itself. To be specific, $I\in \mathcal{L}(V)$ is defined by
$$
Iv=v
$$

### Differentiation
Define $D\in \mathcal{L}(\mathcal{P}(\mathbb{R}))$ by
$$
Dp=p'
$$
The assertion that this function is a linear map is another way of stating a basic result about differentiation: $(f+g)'=f'+g'$ and $(\lambda f)'=\lambda f'$ whenever $f,g$ are differentiable and $\lambda$ is constant.

### Integration
Define $T\in \mathcal{L}(\mathcal{P}(\mathbb{R}),\mathbb{R})$ by
$$
Tp=\int_{0}^{1} p 
$$
The assertion that this function is linear is another way of stating a basic result about integration: the integration of the sum of two functions equals the sum of the integrals, and the integral of a constant times a function equals the constant times the integral of the function.

### Multiplication by $x^{2}$
Define a linear map $T\in \mathcal{L}(\mathcal{P}(\mathbb{R}))$ by
$$
(Tp)(x)=x^{2}p(x)
$$
for each $x \in \mathbb{R}$.

### Backward Shift
Recall that $\mathbb{F}^{\infty}$ denotes the vector space of all sequence of elements of $\mathbb{F}$. Define a linear map $T\in \mathcal{L}(\mathbb{F}^{\infty})$ by
$$
T(x_{1},x_{2},x_{3},\dots)=(x_{2},x_{3},\dots)
$$

### From $\mathbb{R}^{3}$ to $\mathbb{R}^{2}$
Define a linear map $T\in \mathcal{L}(\mathbb{R}^{3}, \mathbb{R}^{2})$ by
$$
T(x,y,z)=(2x-y+3z, 7x+5y-6z)
$$

### From $\mathbb{F}^{n}$ to $\mathbb{F}^{m}$
To generalize the previous example, let $m$ and $n$ be positive integers, let $A_{j,k}\in \mathbb{F}$ for each $j=1, \dots,m$ and each $k=1, \dots,n$, and define a linear map $T\in \mathcal{L}(\mathbb{F}^{n}, \mathbb{F}^{m})$ by
$$
T(x_{1}, \dots, x_{n})=(A_{1,1}x_{1}+\dots+A_{1,n}x_{n},\dots,A_{m,1}x_{1}+\dots+A_{m,n}x_{n})
$$
Actually every linear map from $\mathbb{F}^{n}$ to $\mathbb{F}^{m}$ is of this form.

### Composition
Fix a polynomial $q\in \mathcal{P}(\mathbb{R})$. Define a linear map $T\in \mathcal{L}(\mathcal{P}(\mathbb{R}))$ by
$$
(Tp)(x)=p(q(x))
$$


