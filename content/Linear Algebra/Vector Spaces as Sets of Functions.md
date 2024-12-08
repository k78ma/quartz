---
title: Vector Spaces as Sets of Functions
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - vector spaces as sets of functions
---
[[Vector space|Vector spaces]] can be more abstract instead of our typical conceptualization. Our next example of a vector space involves a set of functions.

> [!definition] $\mathbb{F}^{S}$
> We define $\mathbb{F}^{S}$ with the following:
> - If $S$ is a set, then $\mathbb{F}^{S}$ denotes the set of functions from $S$ to $\mathbb{F}$. In other words, each function in $\mathbb{F}^{S}$ takes an input from $S$ and gives an output in the field $\mathbb{F}$.
> - For $f,g\in \mathbb{F}^{S}$, the sum $f+g\in \mathbb{F}^{S}$ is the function defined by
>$$
>(f+g)(x)=f(x)+g(x)
>$$
>- For all $\lambda \in \mathbb{F}$ and $f\in \mathbb{F}^{S}$, the product $\lambda \mathbb{F}\in \mathbb{F}^{S}$ is the function defined by
>$$
>(\lambda f)(x)=\lambda f(x)
>$$
>for all $x \in S$.
>
>This perspective generalizes the concept of vectors. While we usually think of vectors as ordered tuples (like points in $\mathbb{R}^{n}$), in this more abstract setting, we treat entire functions as vectors.

As an example of the notation above, if $S$ is the interval $[0,1]$ and $\mathbb{F}=\mathbb{R}$, then $\mathbb{R}^{[0,1]}$ is the set of real-valued functions on the interval $[0,1]$. This means the the domain of each function are $[0,1]$, which is mapped to a real value $\mathbb{R}$. 
- The elements of the vector space $\mathbb{R}^{[0,1]}$ are real-valued functions on $[0,1]$, not [[Lists|lists]]. In general, a vector space is an abstract entity whose elements might be lists, functions, or weird objects.

We can show that $\mathbb{F}^{S}$ is a vector space by considering the following:
- If $S$ is a nonempty set, then $\mathbb{F}^{S}$ (with the operations of addition and scalar multiplication as defined above) is a vector space over $\mathbb{F}$.
- The additive identity of $\mathbb{F}^{S}$ is the function $0:S\to \mathbb{F}$ for all $x \in S$, defined by:
$$
0(x)=0
$$
for all $x \in S$.
- For all $f\in \mathbb{F}^{S}$, the additive inverse of $f$ is the function $-f:S\to F$ defined by:
$$
(-f)(x)=-f(x)
$$
for all $x \in S$.

The vector space $\mathbb{F}^{n}$ is a special case of the vector space $\mathbb{F}^{S}$ because each $(x_{1},\dots,x_{n})\in \mathbb{F}^{n}$ can be thought of as a function $x$ from the set $\{1, 2,\dots, n\}$ to $\mathbb{F}$. We just write $x(k)$ instead of writing $x_{k}$ for the $k$-th coordinate of $(x_{1},\dots,x_{n})$.
- In other words, we can think of $\mathbb{F}^{n}$ as $\mathbb{F}^{\{ 1,2,\dots,n \}}$.
- Similarly, we can think of $\mathbb{F}^{\infty}$ as $\mathbb{F}^{\{ 1,2,\dots \}}$.