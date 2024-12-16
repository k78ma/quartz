---
title: Products of Linear Maps
tags:
  - lin-alg
date: 2024-12-15
aliases:
  - products of linear maps
---
Often it makes no sense to multiply together two elements of a vector space, but for some pairs of linear maps a useful product exists.

> [!theorem] Product of linear maps
> If $T\in \mathcal{L}(U,V)$ and $S\in \mathcal{L}(V,W)$, then the *product* $ST\in \mathcal{L}(U,W)$ is defined by
> $$
> (ST)(u)=S(Tu)
> $$
> for all $u\in U$.

Thus $ST$ is just the usual composition $S \circ T$ of two functions, but when both functions are linear, we usually write $ST$ instead of $S \circ T$. The product notation $ST$ makes the distributive properties (see below) seem natural.

Note that $ST$ is defined only when $T$ maps into the domain of $S$. We can verify that $ST$ is indeed a linear map from $U$ to $W$ whenever $T\in \mathcal{L}(U,V)$ and $S\in \mathcal{L}(V,W)$.


> [!theorem] Algebraic properties of products of linear maps
> - **Associativity:** $(T_{1}T_{2})T_{3}=T_{1}(T_{2}T_{3})$ whenever $T_{1}$, $T_{2}$, and $T_{3}$ are linear maps such that the products make sense (meaning $T_{3}$ maps into the domain of $T_{2}$, and $T_{2}$ maps into the domain of $T_{1}$).
> - **Identity:** $TI=IT=T$ whenever $T\in \mathcal{L}(V,W)$; here, the first $I$ is the identity operator on $V$, and the second $I$ is the identity operator on $W$.
> - **Distributive properties:** $(S_{1}+S_{2})T=S_{1}T+S_{2}T$ and $S(T_{1}+T_{2})=ST_{1}+ST_{2}$ whenever $T,T_{1},T_{2}\in \mathcal{L}(U,W)$ and $S,S_{1},S_{2}\in \mathcal{L}(V,W)$.

Multiplication of linear maps is not commutative. In other words, it is not necessarily true that $ST=TS$, even if both sides of the equation makes sense.

#### **Example:** Two noncommuting linear maps from $\mathcal{P}(\mathbb{R})$ to $\mathcal{P}(\mathbb{R})$.
Suppose $D\in \mathcal{L}(\mathcal{P}(\mathbb{R}))$ is the differentiation map (as we saw in [[Linear Map|here]]), and $T\in \mathcal{L}(\mathcal{P}(\mathbb{R}))$ is the multiplication by $x^{2}$ map we saw. Let's consider applying these maps to some polynomial $p(x)$.

Then:
$$
((TD)p)(x)=x^{2}p'(x)
$$
but
$$
((DT)p)(x)=x^{2}p'(x)=2xp(x)
$$
Thus, $TD\neq DT$ – differentiating and then multiplying by $x^{2}$ is not the same as multiplying by $x^{2}$ and then differentiating.