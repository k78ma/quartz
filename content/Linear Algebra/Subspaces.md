---
title: Subspaces
tags:
  - lin-alg
date: 2023-09-01
aliases:
  - subspace
  - subspaces
---
A subset $U$ of $V$ is called a *subspace* of $V$ if $U$ is also a [[Vector Space|vector space]] with the same additive identity, addition, and scalar multiplication as on $V$.

## Conditions
How do we check whether the subset of a vector space is a subspace? 

A subset $U$ of $V$ is a subspace of $V$ if and only if $U$ satisfies the following three conditions:
- **Additive identity:** $0 \in U$.
- **Closed under addition:** $u,w\in U$ implies $u+w\in U$.
- **Closed under scalar multiplication:** $a\in \mathbb{F}$ and $u\in U$ implies $au\in U$.
	- More specifically, $a$ is a scalar from the [[Fields|field]] over which $V$ is defined.

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

The subspaces of $\mathbb{R}^{2}$ are precisely $\{ 0 \}$, all lines in $\mathbb{R}^{2}$ containing the origin, and $\mathbb{R}^{2}$. The subspaces of $\mathbb{R}^{3}$ are precisely $\{ 0 \}$, all lines in $\mathbb{R}^{3}$ containing the origin, all planes in $\mathbb{R}^{3}$ containing the origin, and $\mathbb{R}^{3}$. 

## Examples
Some of the examples below show the linear structure underlying parts of calculus. For example:
- Example 2 requires the result that the sum of two continuous functions is continuous. 
- Example 4 requires the result that for a constant $c$, the derivative of $cf$ equals $c$ times the derivative of $f$

> [!example] Subspace Example 1
> Show that if $b\in \mathbb{F}$, then $\{ (x_{1},x_{2},x_{3},x_{4})\in \mathbb{F}^{4}: x_{3}=5x_{4}+b \}$ is a subspace of $\mathbb{F}^{4}$ if and only if $b=0$.
 
We need to check whether if our set satisfies the three conditions of being a subspace: zero vector, closed under addition, closed under scalar multiplication.

**Zero vector:** The zero vector in $\mathbb{F}^{4}$ is $(0,0,0,0)$. For this vector to be in our set, it must satisfy $x_{3}=5x_{4}+b$. Thus, we have $0=5(0)+b$, which gives means for the zero vector to exist in our set, we must have $b=0$. 

**Closed under vector addition:** Suppose we have $\mathbf{u}=(u_{1},u_{2},u_{3},u_{4})$ and $\mathbf{v}=(v_{1},v_{2},v_{3},v_{4})$. Then $u_{3}=5u_{4}+b$ and $v_{3}=5v_{4}+b$. The sum $\mathbf{u}+\mathbf{v}$ should be in our set. Thus, its third component of $\mathbf{u}+\mathbf{v}$ needs to satisfy:
$$
u_{3}+v_{3}=5(u_{4}+v_{4})+b
$$
Substituting the expressions for $u_{3}$ and $v_{3}$, we get:
$$
u_{3}+v_{3}=(5u_{4}+b)+(5v_{4}+b)
$$
Thus, we need to have:
$$
\begin{align}
5(u_{4}+v_{4})+b  & = (5u_{4}+b)+(5v_{4}+b) \\
b & =2b
\end{align}
$$
which only holds if $b=0$.

**Closed under scalar multiplication:** Let $\mathbf{u}=(u_{1},u_{2},u_{3},u_{4})$ be in our set, such that $u_{3}=5u_{4}+b$. For any scalar $\lambda \in \mathbb{F}$, we have $\lambda \mathbf{u}=(\lambda u_{1},\lambda u_{2},\lambda u_{3},\lambda u_{4})$. For $\lambda \mathbf{u}$ to be in our set, the third component must then satisfy
$$
\lambda u_{3}=5(\lambda u_{4})+b
$$
Substituting $u_{3}=5u_{4}+b$ into this, we then have
$$
\begin{align}
\lambda(5u_{4}+b) & =5(\lambda u_{4})+b \\
5\lambda u_{4}+\lambda b & =5\lambda u_{4}+b
\end{align}
$$
which holds if $\lambda b=b$. This is true for all $\lambda$ only if $b=0$.
 
Thus, our set is a subspace of $\mathbb{F}^{4}$ if and only if $b=0$. Otherwise, the set does not satisfy the conditions required to be subspace.

> [!example] Subspace Example 2
> Show that the set of continuous real-valued functions on the interval $[0,1]$ is a subspace of $\mathbb{R}^{[0,1]}$.

Recall that $\mathbb{R}^{[0,1]}$ is the set of all real functions on the interval $[0,1]$. This set includes every possible function that takes a real value for each $x \in[0,1]$. We can check whether the set of continuous real-valued functions meets the conditions of being a subspace of $\mathbb{R}^{[0,1]}$.

**Zero vector:** The zero vector in $\mathbb{R}^{[0,1]}$ is the function $f(x)=0$ for all $x \in[0,1]$. This is continuous on the interval $[0,1]$ because it is constant and equal to $0$ for all $x$. Therefore, the zero function is an element of the set of continuous real-valued functions on $[0,1]$.

**Closed under addition:** Let $f(x)$ and $g(x)$ be continuous real-valued functions on $[0,1]$, such that they are members of $\mathbb{R}^{[0,1]}$. The sum of two functions is continuous; since $f(x)$ and $g(x)$ are continuous on $[0,1]$, $h(x)=f(x)+g(x)$ is also continuous on $[0,1]$. Therefore, $h(x)$ also belongs to the set of continuous real-valued functions on $[0,1]$.

**Closed under scalar multiplication:** Let $f(x)$ be a continuous real-valued function $[0,1]$ and $a\in \mathbb{R}$ be a scalar. The scalar multiple of a continuous function is continuous; thus, $af(x)$ is also continuous on $[0,1]$. Therefore, $cf(x)$ belongs to the set of continuous real-valued functions on $[0,1]$.

This examples shows the linear structure underlying parts of calculus. It requires the result that the sum of two continuous functions is continuous. 

> [!example] Subspace Example 3
> Show that the set of differentiable real-valued functions on $\mathbb{R}$ is a subspace of $\mathbb{R}^{\mathbb{R}}$.

The notation $\mathbb{R}^{\mathbb{R}}$ represents the set of all functions from the real numbers $\mathbb{R}$ to the real numbers $\mathbb{R}$. We want to show that the set of *differentiable* functions is a subspace of this set of *all* functions.

**Zero element:** The zero function $f(x)=0$ is differentiable on $\mathbb{R}$. Therefore, the set of differentiable real-valued functions on $\mathbb{R}$ fulfills the requirement of having the same zero element as $\mathbb{R}^{\mathbb{R}}$.

**Closed under addition:** Let $f(x)$ and $g(x)$ be differentiable real-valued functions on $\mathbb{R}$. We need to show that $h(x)=f(x)+g(x)$ is also differentiable on $\mathbb{R}$. We have
$$
h'(x)=\frac{d}{dx}[f(x)+g(x)]=f'(x)+g'(x)
$$
Since $f'(x)$ and $g'(x)$ exist and are continuous, $h'(x)$ also exists and is continuous, which means that $h(x)$ is differentiable. Thus, $h(x)$ also belongs to the set of differentiable real-valued functions on $\mathbb{R}$, satisfying the closure under addition requirement.

**Closed under scalar multiplication:** Let $f(x)$ be a differentiable real-valued function on $\mathbb{R}$. We need to show that $af(x)$ is also in the set of differentiable functions for some scalar $a\in \mathbb{R}$.  We have
$$
(af')(x)=\frac{d}{dx}(af(x))=a f'(x)
$$
Since $f'(x)$ exists and is continuous, $af'(x)$ also exists and is continuous, which means that $af(x)$ is differentiable. Thus, $af(x)$ also belongs to the set of differentiable real-valued functions on $\mathbb{R}$, satisfying the closure under scalar multiplication requirement.


> [!example] Subspace Example 4
> Show that the set of differentiable real-valued functions $f$ on the interval $(0,3)$ such that $f'(2)=b$ is a subspace of $\mathbb{R}^{(0,3)}$ if and only if $b=0$.

$\mathbb{R}^{(0,3)}$ is the set of functions from $(0,3)$ to $\mathbb{R}$. To show that the set of differentiable real-valued functions $f$ on $(0,3)$ is a subspace of $\mathbb{R}^{(0,3)}$, we show that they share a zero element, and that the latter is closed under addition and scalar multiplication.

**Zero element:** The zero function in $\mathbb{R}^{(0,3)}$ is $f(x)=0$, which is differentiable on $(0,3)$. Thus, the set of differentiable real-valued functions on $(0,3)$ fulfills the requirement of having the same zero element as $\mathbb{R}^{(0,3)}$.

**Closed under addition:** Let $f(x)$ and $g(x)$ be differentiable real-valued functions on $(0,3)$ with $f'(2)=g'(2)=b$. 

Let's say that we have the sum $h(x)=f(x)+g(x)$. We have
$$
h'(x)=\frac{d}{dx}[f(x)+g(x)]=f'(x)+g'(x)
$$
For the set of differentiable real-valued functions to be closed under addition, $h(x)$ must also be a member of this set, which means that we must have $h'(2)=b$. Thus, we have:
$$
\begin{align}
h'(2) & =f'(2)+g'(2) \\
b &  =b+b \\
b & =2b
\end{align}
$$
which is only true if we have $b=0$.

**Closed under scalar multiplication:** Let $f(x)$ be a differentiable real-valued function on $(0,3)$ with $f'(2)=b$. For the set of differentiable real-valued functions to be closed under scalar multiplication, $af(x)$ is also in the set of differentiable functions on $(0,3)$ for some scalar $a\in \mathbb{R}$.  We have
$$
(af')(x)=\frac{d}{dx}(af(x))=a f'(x)
$$
where $(af')(2)=b$. Thus, we would have:
$$
\begin{align}
(af')(2) & =af'(2) \\
b & =ab
\end{align}
$$
which is only true for all $a$ if $b=0$.

This examples shows the linear structure underlying parts of calculus. It requires the result that for a constant $c$, the derivative of $cf$ equals $c$ times the derivative of $f$.

> [!example] Subspace Example 5
> Show that the set of all sequences of complex numbers with limit 0 is a subspace of $\mathbb{C}^{\infty}$.

Let $S$ be the set of all sequences of complex numbers that converge to $0$. That is,
$$
S=\{ (a_{n}) \,|\, \lim_{ n \to \infty }=0, a_{n}\in \mathbb{C} \text{ for all } n \}
$$
We want to show that this is a subspace of $\mathbb{C}^{\infty}$, which is the space of all infinite sequences of complex numbers.

**Zero element:** The zero sequence $(0,0,0,\dots)$ is a sequence where every term is $0$. Since the sequence is constant and equal to $0$ for all $n$, it clearly converges to $0$. Therefore, the zero sequence is in $S$.

**Closed under addition:** Let $(a_{n})$ and $(b_{n})$ be two sequences in $S$. By definition, we have:
$$
\lim_{ n \to \infty } a_{n}=0, \;\;\lim_{ n \to \infty } b_{n}=0
$$
Consider the sequence formed by adding these two sequences, $(a_{n}+b_{n})$. The limit of the sum of the sequences is:
$$
\lim_{ n \to \infty } (a_{n}+b_{n})=\lim_{ n \to \infty } a_{n}+\lim_{ n \to \infty } b_{n}=0+0=0
$$
Since $\lim_{ n \to \infty }(a_{n}+b_{n})=0$, the sequence $(a_{n}+b_{n})$ is in $S$. Hence, $S$ is closed under addition.

**Closed under scalar multiplication:** Let $(a_{n})$ be a sequence in $S$ and let $c\in \mathbb{C}$ be any complex number. We need to check if the sequence $(c\cdot a_{n})$ is in $S$. The limit of the scalar multiple of the sequence is
$$
\lim_{ n \to \infty } (c\cdot a_{n})=c\cdot \lim_{ n \to \infty } a_{n}=c\cdot 0=0
$$
Since $\lim_{ n \to \infty }(c\cdot a_{n})=0$, the sequence $(c\cdot a_{n})$ is also in $S$. Therefore, $S$ is closed under scalar multiplication.
