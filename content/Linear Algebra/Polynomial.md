---
title: Polynomial
tags:
  - lin-alg
  - math
date: 2024-10-27
aliases:
  - polynomial
---
> [!definition] **Definition:** Polynomial, $\mathcal{P}(\mathbb{F})$
> A function $p:\mathbb{F}\to \mathbb{F}$ is called a *polynomial* with coefficients in $\mathbb{F}$ if there exists $a_{0},\dots,a_{m}\in \mathbb{F}$ such that
> $$
> p(z)=a_{0}+a_{1}z+a_{2}z^{2}+\dots+a_{m}z^{m}
> $$
> for all $z \in \mathbb{F}$.
> 
> $\mathcal{P}(\mathbb{F})$ is the set of all polynomials with coefficients in $\mathbb{F}$.

With the usual operations of addition and scalar multiplication, $\mathcal{P}(\mathbb{F})$ is a vector space of $\mathbb{F}$. Hence, $\mathcal{P}(\mathbb{F})$ is a subspace of $\mathbb{F}^{\mathbb{F}}$, the vector space of functions from $\mathbb{F}$ to $\mathbb{F}$.

If a polynomial (thought of as a function from $\mathbb{F}$ to $\mathbb{F}$) is represented by two sets of coefficients, then subtracting one representation of the polynomial from the other produces a polynomial that is identically zero as a function on $\mathbb{F}$ and hence has all zero coefficients. Thus, the coefficients of a polynomial are uniquely determined by the polynomial.


> [!definition] **Definition:** Degree of a polynomial
> A polynomial $p \in \mathcal{P}(\mathbb{F})$ is said to have degree $m$ if there exist scalars $a_{0},a_{1},\dots a_{m}\in \mathbb{F}$ with $a_{m}\neq 0$ such that for every $z\in \mathbb{F}$, we have
> $$
>p(z)=a_{0}+a_{1}z+\dots+a_{m}z^{m} 
>$$ 
> - The polynomial that is identically $0$ is said to have degree $-\infty$
> - The degree of a polynomial $p$ is denoted by $\deg p$


> [!definition] **Notation:** $\mathcal{P}_{m}(\mathbb{F})$
>For $m$, a nonnegative integer, $\mathcal{P}_{m}(\mathbb{F})$ denotes the set of all polynomials with coefficients in $\mathbb{F}$ and degree at most $m$.

If $m$ is a nonnegative integer, $\mathcal{P}_{m}(\mathbb{F})=\text{span}(1,z, \dots,z^{m})$. Here, we are letting $z^{k}$ denote a function.

Thus, $\mathcal{P}_{m}(\mathbb{F})$ is a [[Finite-Dimensional Vector Space|finite-dimensional vector space]] for each nonnegative integer $m$.  

On the other hand, $\mathcal{P}(\mathbb{F})$ is infinite-dimensional. Consider any list of elements of $\mathcal{P}(\mathbb{F})$. Let $m$ denote the highest degree of the polynomials in this list. Then, every polynomial in the span of this list has degree at most $m$. Then, $z^{m+1}$ is not in the span of our list; therefore, the span of any finite list of polynomials cannot span the entire $\mathcal{P}(\mathbb{F})$. Thus, $\mathcal{P}(\mathbb{F})$ is infinite-dimensional.