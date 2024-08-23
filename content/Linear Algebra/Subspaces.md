---
title: Subspaces
tags: []
date: 2023-09-01
---
A subset $U$ of $V$ is called a *subspace* of $V$ if $U$ is also a [[Vector Space|vector space]] with the same additive identity, addition, and scalar multiplication as on $V$.

## Conditions
How do we check whether the subset of a vector space is a subspace? 

A subset $U$ of $V$ is a subspace of $V$ if and only if $U$ satisfies the following three conditions:
- **Additive identity:** $0 \in U$.
- **Closed under addition:** $u,w\in U$ implies $u+w\in U$.
- **Closed under scalar multiplication:** $a\in \mathbb{F}$ and $u\in U$ implies $au\in U$.

How do we prove that a subset $U$ that satisfies those conditions is a vector space with the same additive identity, addition, and scalar multiplication as on $V$?

> [!proof] Proof
>If $U$ is already known to be a subspace of $V$, then $U$ satisfies the three conditions above by the definition of vector space. 
>
>Conversely, suppose a subset $U$ satisfies the three conditions above. How do we know that $U$ is a vector space with the same properties as $V$ (hence being a subspace)? The three conditions tell us the following:
>- The first condition ensures that the additive identity of $V$ is in $U$. 
>- The second condition ensures that addition makes sense on $U$. 
>- The third condition ensures that scalar multiplication makes sense on $U$.
>
>If $u\in U$, then $-u$ (which is equal to $(-1)u$) is also in $U$ by the third condition above. Hence, every element of $U$ has an additive inverse in $U$.
>
>The other parts of the definition of a vector space, such associativity and commutativity, are automatically satisfied for $U$ because they hold on the larger space $V$. Thus, $U$ is a vector space and hence is a subspace of $V$.  
>
>**Q.E.D.**

The set $\{ 0 \}$ is the smallest subspace of $V$, and $V$ itself is the largest subspace of $V$. The empty set is not a subspace of $V$ because a subspace must be a vector space and hence must contain at least one element, namely, an additive identity.

> [!example]- Subspace Example 1
> If $b\in \mathbb{F}$, then $\{ (x_{1},x_{2},x_{3},x_{4})\in \mathbb{F}^{4}: x_{3}=5x_{4}+b \}$ is a subspace of $\mathbb{F}^{4}$ if and only if $b=0$.

> [!example]- Subspace Example 2
> The set of continuous real-valued functions on the interval $[0,1]$ is a subspace of $\mathbb{R}^{[0,1]}$.

> [!example]- Subspace Example 3
> The set of differentiable real-valued functions on $\mathbb{R}$ is a subspace of $\mathbb{R}^{\mathbb{R}}$.

> [!example]- Subspace Example 4
> The set of differentiable real-valued functions $f$ on the interval $(0,3)$ such that $f'(2)=b$ is a subspace of $\mathbb{R}^{(0,3)}$ if and only if $b=0$.

> [!example]- Subspace Example 5
> The set of all sequences of complex numbers with limit 0 is a subspace of $\mathbb{C}^{\infty}$.