---
title: Linear Map Lemma
tags:
  - lin-alg
date: 2024-12-15
aliases:
  - linear map lemma
---
The existence part of this result means that we can find a linear map that takes on whatever values we wish on the vectors in a basis. The uniqueness part of this result means that a linear map is completely determined by its values on a basis.

> [!theorem] Linear Map Lemma
> Suppose $v_{1}, \dots,v_{m}$ is a basis of $V$ and $w_{1}, \dots,w_{n}\in W$. Then there exists a unique linear map $T: \,\,V\to W$ such that
> $$
> Tv_{k}=w_{k}
> $$
> for each $k=1, \dots,n$.

*Proof.* 

The idea of this proof is that if we know what a linear map does the basis vectors of $V$, then that linear map is completely determined for all of $V$.

First, we show the existence of the desired linear map $T$. We can explicitly define $T: \,\,V\to W$ by
$$
T(c_{1}v_{1}+\dots+c_{n}v_{n})=c_{1}w_{1}+\dots+c_{n}w_{n}
$$
where $c_{1}, \dots,c_{n}$ are arbitrary elements of $\mathbb{F}$. The list $v_{1}, \dots,v_{n}$ is a basis of $V$. Thus, the equation above does indeed define a function $T$ from $V$ to $W$ (because each element of $V$ can be uniquely written in the form $c_{1}v_{1}+\dots+c_{n}v_{n}$). 

Every vector $v\in V$ can be written uniquely as a linear combination of basis vectors, so $T(v)$ is well-defined because the coefficients $c_{1}, \dots,c_{m}$ in $v$ are uniquely determined. For one of the basis vectors $v_{k}$, taking $c_{k}=1$ and the other $c$'s equal to $0$ in the equation above shows that $Tv_{k}=c_{k}w_{k}=w_{k}$.

Now, we seek to show additivity and homogeneity ([[Linear Map|properties of a linear map]])  If $u,v\in V$ with $u=a_{1}v_{1}+\dots+a_{n}v_{n}$ and $v=c_{1}v_{1}+\dots+c_{n}v_{n}$, then
$$
\begin{align}
T(u+v) & =T((a_{1}+c_{1})v_{1}+\dots+(a_{n}+c_{n})v_{n}) \\
	 & =(a_{1}+c_{1})w_{1}+\dots(a_{n}+c_{n})w_{n} \\
	 & =(a_{1}w_{1}+\dots+a_{n}w_{n})+(c_{1}w_{1}+\dots+c_{n}w_{n}) \\
	 & =Tu+Tv
\end{align}
$$
Similarly, if $\lambda \in \mathbb{F}$ and $v=c_{1}v_{1}+\dots+c_{n}v_{n}$, then
$$
\begin{align}
T(\lambda v) & =T(\lambda c_{1}v_{1}+\dots+\lambda c_{n}v_{n}) \\
	 & =\lambda c_{1}w_{1}+\dots+\lambda c_{n}w_{n} \\
	 & =\lambda(c_{1}w_{1}+\dots+c_{n}w_{n}) \\
	 & =\lambda Tv
\end{align}
$$
Thus, $T$ is a linear map from $V$ to $W$.

To prove uniqueness, now suppose that $T\in \mathcal{L}(V,W)$ and that $Tv_{k}=w_{k}$ for each $k=1, \dots,n$. Let $c_{1}, \dots,c_{n}\in \mathbb{F}$. Then, the homogeneity of $T$ implies that $T(c_{k}v_{k})=c_{k}w_{k}$ for each $k=1, \dots,n$. The additivity of $T$ now implies that
$$
T(c_{1}v_{1}+\dots+c_{n}v_{n})=c_{1}w_{1}+\dots+c_{n}w_{n}
$$
Thus, $T$ is uniquely determined on $\text{span}(v_{1}, \dots,v_{n})$ by the equation above. Because $v_{1}, \dots,v_{n}$ is a basis of $V$, this implies that $T$ is uniquely determined on $V$, as desired.