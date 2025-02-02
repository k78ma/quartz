---
title: Homogeneous System of Linear Equations
tags:
  - lin-alg
date: 2025-01-25
aliases:
  - homogeneous system of linear equations
---
We saw that:
- [[Linear Map to Lower-Dimensional Space is Not Injective|a linear map to lower-dimensional space is not injective]]  
- [[Linear Map to Higher-Dimensional Space is Not Surjective|a linear map to higher-dimensional space is not surjective]]

These have important consequences in the theory of linear equations. The idea is to express about systems of linear equations in terms of linear maps. Let's begin by rephrasing in terms of linear maps the questions of whether a homogeneous system of linear equations has a nonzero solution.

Fix positive integers $m$ and $n$, and let $A_{j,k}\in \mathbb{F}$ for $j=1, \dots,m$ and $k=1, \dots,n$. Consider the homogenous systems of linear equations (homogenous means constant term on right side is $0$):
$$
\begin{align}
\sum_{k=1}^{n}A_{1,k}x_{k} & =0 \\
 & \vdots \\
\sum_{k=1}^{n}A_{m,k}x_{k} & =0
\end{align}
$$
Essentially, $j$ denotes the row, $k$ denotes the column:
$$
\begin{align}
A_{1,1}x_{1}+A_{1,2}x_{2}+ & \dots+A_{1,n}x_{n}=0 \\
A_{2,1}x_{1}+A_{2,2}x_{2}+ & \dots+A_{2,n}x_{n}=0 \\ & 
\dots \\
A_{m,1}x_{1}+A_{m,2}x_{2}+ & \dots+A_{m,n}x_{n}=0 \\
\end{align}
$$

Clearly, $x_{1}=\dots=x_{n}=0$ is a solution of the system of equations above. The questions here is whether any other solutions exist.

Define $T\, : \,\mathbb{F}^{n}\to \mathbb{F}^{m}$ by
$$
T(x_{1}, \dots, x_{n})=\left( \sum_{k=1}^{n}A_{1,k}x_{k}, , \dots, \sum_{k=1}^{n}A_{m,k}x_{k} \right)
$$
The equation $T(x_{1}, \dots,x_{n})=0$ is the same as the homogeneous system of linear equations above.
- Here, $0$ is the additive identity in $\mathbb{F}^{m}$, namely, the list of length $m$ of all $0$'s.

Thus, we want to know if $\text{null } T$ is strictly bigger than $\{ 0 \}$, which is equivalent to $T$ not being injective ([[Injectivity Implies Null Space is 0 and vice versa|injectivity implies null space is 0 and vice versa]]).

This next result gives an important condition for ensuring that $T$ is not injective.

## Non-Zero Solutions 

> [!theorem] Solutions for homogeneous system of linear equations
> A homogeneous system of linear equations with more variables than equations has nonzero solutions.

*Proof.* Use the notation and result from the discussion above. Thus $T$ is a linear map from $\mathbb{F}^{n}$ to $\mathbb{F}^{m}$, and we have a homogeneous system of $m$ linear equations with $n$ variables $x_{1}, \dots,x_{n}$. We know that $T$ is not injective if $n>m$ ([[Linear Map to Lower-Dimensional Space is Not Injective|linear map to lower-dimensional space is not injective]]). $\blacksquare$

An example of the result above is that a homogeneous system of four linear equations with five variables has nonzero solutions.

## No Solutions
Is there a system of linear equations for some choice of constant terms? 

To rephrase this in terms of a constant map, fix positive integers $m$ and $n$, and let $A_{j,k}\in \mathbb{F}$ for all $j=1, \dots,m$ and all $k=1, \dots,n$. For $c_{1}, \dots,c_{m} \in \mathbb{F}$, consider the system of linear equations
$$
\begin{align}
\sum_{k=1}^{n}A_{1,k}x_{k} & =c_{1} \\
     & \vdots \\
\sum_{k=1}^{n}A_{m,k}x_{k} & =c_{m}
\end{align}
$$
With this notation, the question here is whether there is some choice of the constants terms $c_{1}, \dots,c_{m}\in \mathbb{F}$ such that no solution exists to the system above.

Define $T\, : \,\mathbb{F}^{n}\to \mathbb{F}^{m}$ the same way we did previously:
$$
T(x_{1}, \dots, x_{n})=\left( \sum_{k=1}^{n}A_{1,k}x_{k}, , \dots, \sum_{k=1}^{n}A_{m,k}x_{k} \right)
$$
The equation $T(x_{1}, \dots,x_{n})=(c_{1}, \dots,c_{m})$ is the same as the system of equations as we have here.

Thus, we want to know if $\text{range } T \neq \mathbb{F}^{m}$. Hence, we can rephrase our question about not having a solution for some choice of $c_{1}, \dots,c_{m}\in \mathbb{F}$ as follows: What condition ensures that $T$ is not surjective?

The next result gives one such condition:

> [!theorem] Systems of linear equations with more equations than variables
> A system of linear equations with more equations than variables has no solution for some choice of linear terms.

*Proof.* Use the notation from the discussion above. Thus, $T$ is a linear map from $\mathbb{F}^{n}$ to $\mathbb{F}^{m}$, and we have a system of $m$ equations with $n$ variables $x_{1}, \dots,x_{n}$. If $n< m$, then $T$ is not surjective ([[Linear Map to Higher-Dimensional Space is Not Surjective|linear map to higher-dimensional space is not surjective]]). As discussed above, this shows that if we have more equations than variables in a system of linear equations, then there is no solution for some choice of the constant terms. $\blacksquare$

Example: A system of 5 linear equations with 4 variables has no solution for some choice of constant terms.