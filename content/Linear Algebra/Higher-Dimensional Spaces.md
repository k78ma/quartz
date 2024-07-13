---
title: Higher-Dimensional Spaces
tags:
  - lin-alg
date: 2024-07-12
aliases:
  - higher-dimensional spaces
---
To define the higher-dimensional analogues of $\mathbb{R}^{2}$ and $\mathbb{R}^{3}$, we will simply replace $\mathbb{R}$ with $\mathbb{F}$ (which equals $\mathbb{R}$ and $\mathbb{C}$ [[Complex Numbers#$ mathbb{F}$|as defined here]]), and replace $2$ and $3$ with an arbitrary positive integer.

We define $\mathbb{F}^{n}$ to be the set of all lists of length $n$ of elements of $\mathbb{F}$:
$$
\mathbb{F}^{n}=\{ (x_{1},\dots,x_{n}): x_{k}\in \mathbb{F} \text{ for } k=1,\dots,n \}.
$$
For $(x_{1},\dots,x_{n}) \in \mathbb{F}^{n}$ and $k\in \{ 1,\dots,n \}$, we say that $x_{k}$ is the $k$th *coordinate* of $(x_{1},\dots,x_{n})$.


> [!example] Example: 4D complex space
> For example $\mathbb{C}^{4}$ is the set of all lists of four complex numbers:
>$$
>\mathbb{C}^{4}=\{ (z_{1},z_{2},z_{3},z_{4}):z_{1},z_{2},z_{3},z_{4}\in \mathbb{C} \}.
>$$

If $n \geq 4$, we cannot visualize $\mathbb{R}^{n}$ as a physical object. Similarly, $\mathbb{C}^{1}$ can be thought of as a plane, but for $n\geq 2$, the human brain cannot provide a full image of $\mathbb{C}^{n}$. However, even if $n$ is large, we can perform algebraic manipulations in $\mathbb{F}^{n}$ as easily as in $\mathbb{R}^{2}$ or $\mathbb{R}^{3}$. 

For example, we can define addition in $\mathbb{F}^{n}$ is defined by adding corresponding coordinates:
$$
(x_{1},\dots,x_{n})+(y_{1},\dots,y_{n})=(x_{1}+y_{1},\dots,x_{n}+y_{n}).
$$
We can simplify the notation to just use one letter, such as just $x$ and $y$ instead of using $(x_{1},\dots,x_{n})$ and $(y_{1},\dots,y_{n})$. 
- If a single letter is used to denote an element of $\mathbb{F}^{n}$, then the same letter with appropriate subscripts is often used when coordinates must be displayed. 
- For example, if $x \in \mathbb{F}^{n}$, then letting $x$ equal $(x_{1},\dots,x_{n})$ is good notation, as shown in the proof below.
- Even better, we will work with just $x$ and avoid explicit coordinates when possible.

> [!proof] Proof: Commutativity of addition
> If $x,y\in \mathbb{F}^{n}$, then $x+y=y+x$.
> 
> Suppose that $x=(x_{1},\dots,x_{n})\in \mathbb{F}^{n}$ and $y=(y_{1},\dots,y_{n})\in \mathbb{F}^{n}$. Then
>$$
>\begin{align}
>x+y & =(x_{1},\dots,x_{n})+(y_{1},\dots,y_{n}) \\[2ex]
> & =(x_{1}+y_{1},\dots,x_{n}+y_{n}) \\[2ex]
> & =(y_{1}+x_{1},\dots,y_{n}+x_{n}) \\[2ex]
> & =(y_{1},\dots,y_{n})+(x_{1},\dots,x_{n}) \\[2ex]
> & =y+x
>\end{align}
>$$
>where:
> - the second and fourth equalities holds because of the definition of addition in $\mathbb{F}^{n}$
> - the third equality holds because of the usual commutativity of addition in $\mathbb{F}$.
>   
> Q.E.D.

## Definition of Zero
