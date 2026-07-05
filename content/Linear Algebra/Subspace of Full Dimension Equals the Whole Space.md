---
title: Subspace of Full Dimension Equals the Whole Space
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - subspace of full dimension equals the whole space
---
The fact that [[Linearly Independent List of the Right Length is a Basis|a linearly independent list of the right length is a basis]] gives us a useful consequence.

> [!definition] Subspace of full dimension equals the whole space
> Suppose that $V$ is finite-dimensional and $U$ is a subspace of $V$, such that $\dim U=\dim V$. Then $U=V$.

*Proof.* Let $u_{1},\dots,u_{n}$ be a basis of $U$. Thus $n=\dim U$. Since we have $\dim U=\dim V$, we also have $n=\dim V$. 

Thus $u_{1},\dots,u_{n}$ is a linearly independent list of vectors in $V$ (because it is a basis of $U$) of length $\dim V$. From [[Linearly Independent List of Right Length is a Basis]], we see that $u_{1},\dots,u_{n}$ is a basis of $V$, because it has length $\dim V$. In particular, every vector in $V$ is a linear combination of $u_{1},\dots,u_{n}$. Thus, $U=V$.

## Examples

**Example 1:** A basis of $\mathbb{F}^{2}$. 

Consider the list $(5,7), (4,3)$ of vectors in $\mathbb{F}^{3}$. This list of length two is linearly independent in $\mathbb{F}^{2}$, because neither vector is a scalar multiple of the other. Note that $\mathbb{F}^{2}$ has dimension 2.

Thus, [[Linearly Independent List of the Right Length is a Basis]] implies that the linearly independent list $(5,7), (4,3)$ of length two is a basis of $\mathbb{F}^{2}$. 
- No need to bother with checking that it spans $\mathbb{F}^{2}$.

**Example 2:** A basis of a subspace of $\mathcal{P}_{3}(\mathbb{R})$.

Let $U$ be the subspace of $\mathcal{P}_{3}(\mathbb{R})$ defined by
$$
U=\{ p \in \mathcal{P}_{3}(\mathbb{R})\, : \,p'(5)=0 \}
$$
To find a basis of $U$, first note that each of the polynomials $1,(x-5)^{2}, (x-5)^{3}$ are in $U$.

Suppose $a,b,c\in \mathbb{R}$ and
$$
a+b(x-5)^{2}+c(x-5)^{3}=0
$$
for every $x \in \mathbb{R}$. 
- Without explicitly expanding the left side of the equation above, we can see that the left side has a $cx^{3}$ term. Because the right side has no $x^{3}$ term, this implies that $c=0$. 
- Because $c=0$, we can see that the left side has a $bx^{2}$ term, which implies that $b=0$.
- Because $b=c=0$, we can conclude $a=0$.

Thus, the equation above implies that $a=b=c=0$. Hence the list $1,(x-5)^{2},(x-5)^{3}$ is linearly independent in $U$. This means that $3\leq \dim U$. Hence
$$
3\leq \dim  U \leq \dim  \mathcal{P}_{3}(\mathbb{R})=4
$$
where we used [[Dimension of a Subspace]].

The polynomial $x$ is not in $U$ because its derivative is the constant function $1$. Thus $U\neq \mathcal{P}_{3}(\mathbb{R})$. Hence, $\dim U\neq 4$, by our previous result that "subspace of full dimension equals the whole space", if $\dim U=4$, we would have $U=\mathcal{P}_{3}(\mathbb{R})$.

The inequality above now implies that $\dim U=3$. Thus, the linearly independent list $1,(x-5)^{2}, (x-5)^{3}$ in $U$ has length $\dim U$ and hence is a basis of $U$.