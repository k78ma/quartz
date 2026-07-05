---
title: Basis
tags:
  - lin-alg
date: 2024-11-16
aliases:
  - basis
---
> [!definition] Definition: Basis
> A basis of $V$ is a list of vectors in $V$ that is linearly independent and spans $V$.

Examples:
- The list $(1,0,\dots,0), (0,1,0,\dots,0),\dots(0,\dots,0,1)$ is a basis of $\mathbb{F}^{n}$, called the *standard basis* of $\mathbb{F}^{n}$.
- The list $(1,2),(3,5)$ is a basis of $\mathbb{F}^{2}$. Note that this list has length 2, which is the same as the length of the standard basis of $\mathbb{F}^{2}$.
- The list $(1,2,-4), (7,-5,6)$ is linearly independent in $\mathbb{F}^{3}$ but is not a basis of $\mathbb{F}^{3}$ because it does not span $\mathbb{F}^{3}$.
- The list $(1,2),(3,5),(4,13)$ spans $\mathbb{F}^{3}$ but is not a basis of $\mathbb{F}^{2}$ because it is not linearly independent.
- The list $(1,1,0),(0,0,1)$ is a basis of $\{ (x,x,y)\in \mathbb{F}^{3}\, : \,x,y,\in \mathbb{F} \}$
- The list $(1,-1,0),(1,0,-1)$ is a basis of $\{ (x,y,z)\in \mathbb{F}^{3}\, : \,x+y+z=0 \}$
- The list $1,z, \dots,z^{m}$ is a basis of $\mathcal{P}_{m}(\mathbb{F})$, called the *standard basis* of $\mathcal{P}_{m}(\mathbb{F})$.

## Criterion for Basis

> [!theorem] Criterion for Basis
> A list $v_{1},\dots,v_{n}$ of vectors in $V$ is a basis of $V$ if and only if every $v\in V$ can be written uniquely in the form
> $$
> v=a_{1}v_{1}+\dots+a_{n}v_{n}
> $$
> where $a_{1},\dots,a_{n}\in \mathbb{F}$.

*Proof.* First suppose that $v_{1},\dots,v_{n}$ is a basis of $V$. Let $v\in V$. Because $v_{1},\dots,v_{n}$ [[Span|spans]] $V$, there exist $a_{1},\dots a_{n}\in \mathbb{F}$ such that $v=a_{1}v_{1}+\dots+a_{n}v_{n}$ holds. To show that the representation is unique, suppose that we also have
$$
v=c_{1}v_{1}+\dots+c_{n}v_{n}
$$
Subtracting the two equations from each other would give us
$$
0=(a_{1}-c_{1})v_{1}+\dots+(a_{n}-c_{n})v_{n}
$$
This implies that each $a_{k}-c_{k}$ equals $0$, because $v_{1},\dots,v_{n}$ is linearly independent. Hence, $a_{1}=c_{1},\dots,a_{n}=c_{n}$. We have the desired uniqueness. This completes the proof in one direction.

From the other direction, suppose every $v\in V$ can be written uniquely in the form of $v=a_{1}v_{1}+\dots+a_{n}v_{n}$. This means that the list $v_{1},\dots,v_{n}$ spans $V$. To show that $v_{1},\dots,v_{n}$ is linearly independent, suppose $a_{1},\dots,a_{n}\in \mathbb{F}$ such that
$$
0=a_{1}v_{1}+\dots+a_{n}v_{n}
$$
The uniqueness of the representation implies that $a_{1}=\dots=a_{n}=0$.  If there were any solutions other than the trivial one, they would not be unique (we would have other nonzero combinations summing to $0$). Thus $v_{1},\dots,v_{n}$ is linearly independent and hence is the basis of $V$.
