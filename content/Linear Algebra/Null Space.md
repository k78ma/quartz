---
title: Null Space
tags:
  - lin-alg
date: 2025-01-20
aliases:
  - null space
---

> [!definition] Null space
> For $T \in \mathcal{L}(V,W)$, the null space of $T$, denoted by null $T$, is the subset of $V$ consisting of those vectors that $T$ maps to $0$:
> $$
> \text{null }T = \{ v \in  V \, : \,Tv=0 \}
> $$

This means that null spaces are specific to a linear map acting on a subspace, not on the subspace itself!

### Examples
- If $T$ is the zero map from $V$ to $W$, meaning that $Tv=0$ for every $v \in V$, then $\text{null }T = V$.
- Suppose $\phi \in \mathcal{L}(\mathbb{C}^{3}, \mathbb{C})$ is defined by $\phi(z_{1},z_{2},z_{3})=z_{1}+2z_{2}+3z_{3}$. Then null $\phi$ equals $\{ (z_{1},z_{2},z_{3}) \in \mathbb{C}^{3}\, : \,z_{1}+2z_{2}+3z_{3}=0 \}$, which is a subspace of the domain of $\phi$ (see [[Null Space is a Subspace]])
- Suppose $D \in \mathcal{L}(\mathcal{P}(\mathbb{R}))$ is the differentiation map defined by $Dp=p'$. The only functions whose derivative equals the zero functions are the constant functions. Thus, the null space of $D$ equals the set of constant functions.
- Suppose that $T \in \mathcal{L}(\mathcal{P})(\mathbb{R})$ is the multiplication by $x^{2}$ map defined by $(Tp)(x)=x^{2}p(x)$. The only polynomial $p$ such that $x^{2}p(x)=0$ for all $x \in \mathbb{R}$ is the $0$ polynomial. Thus, $\text{null }T=\{ 0 \}$.
- Suppose $T \in \mathcal{L}(\mathbb{F}^{\infty})$ is the backward shift defined by $T(x_{1},x_{2},x_{3},\dots)=(x_{2},x_{3},\dots)$. Then, $T(x_{1},x_{2},x_{3},\dots)$ equal $0$ if and only if the numbers $x_{2}, x_{3},\dots$ are all $0$. Thus, $\text{null } T=\{ (a,0,0,\dots) \, : \,a \in \mathbb{F} \}$.
