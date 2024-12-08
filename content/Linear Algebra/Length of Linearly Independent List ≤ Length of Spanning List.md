---
title: Length of Linearly Independent List ≤ Length of Spanning List
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - length of linearly independent list ≤ length of spanning list
---
Now we come to a key result. It says that no linearly independent list in $V$ is longer than a spanning list in $V$.

> [!theorem] Length of linearly independent list $\leq$ Length of spanning list
> In a finite-dimensional vector space, the length of every linearly independent list of vectors is less than or equal to the length of every spanning list of vectors.
*Proof.* Suppose that $u_{1},\dots,u_{m}$ is linearly independent in $V$. Suppose also that $w_{1},\dots,w_{n}$ spans $V$. We need to prove that $m\leq n$. This is done through the process described below with $m$ steps; in each step, we add one of the $u$'s and remove one of the $w$'s.

**Step 1:** Let $B$ be the list $w_{1},\dots,w_{n}$, which spans $V$. Adjoining $u_{1}$ at the beginning of the list produces a linearly dependent list; this is because $w_{1},\dots,w_{n}$ is a spanning list, so $u_{1}$ can be written as a combination of $w_{1},\dots,w_{n}$. In other words, the list
$$
u_{1},w_{1},\dots,w_{n}
$$
is linearly dependent.

Thus, by the [[Linear Dependence Lemma|linear dependence lemma]], one of the vectors in the list above is a linear combination of the previous vectors in the list. We know that $u_{1}\neq 0$ because the list $u_{1},\dots,u_{m}$ is linearly independent. Obviously, $u_{1}$ is not in the span of the previous vectors in the list above; it is the first element, and $u_{1}$ is not in $\{ 0 \}$, which is the span of the empty list. Hence, the linearly dependence lemma implies we can remove one of the $w$'s so that the new list $B$ (of length $n$) consisting of $u_{1}$ and the remaining $w$'s spans $V$. 

**Step $k$ for $k=2,\dots,m$**: The list $B$ (of length $n$) from step $k-1$ spans $V$. In particular, $u_{k}$ is in the span of the list $B$. Thus, the list of length $n+1$ obtained by adjoining $u_{k}$ to $B$, placing it just after $u_{1},\dots,u_{k-1}$ is linearly dependent. By the linear dependence lemma, one of the vectors in the list is in the span of the previous ones, and because $u_{1},\dots u_{k}$ is linearly independent, this vector cannot be one of the $u$'s.

Hence, there must still be at least one remaining $w$ at this step. We can remove from our list (after adjoining $u_{k}$ in the proper place) a $w$ that is a linear combination of the previous vectors in the list, so that the new list $B$ (of length $n$) consisting of $u_{1},\dots,u_{k}$ and the remaining $w$'s spans $V$.

After step $m$, we have added all the $u$'s and the process stops. At each step we add a $u$ to $B$, the linear dependence lemma implies that there is some $w$ to remove. Thus, there are at least as many $w$'s as $u$'s.

### Examples
The next two examples show how the result above can be used to show, without any computations, that certain lists are not linearly independent and that certain lists do not span a given vector space.

> [!example] Example: No list of length 4 is linearly independent in $\mathbb{R}^{3}$
> The list $(1,0,0), (0,1,0), (0,0,1)$, which has length $3$, spans $\mathbb{R}^{3}$. Thus, no list of length larger than $3$ is linearly independent in $\mathbb{R}^{3}$.
> 
> For example, $(1,2,3), (4,5,8), (9,6,7), (-3,2,8)$ which is a list of length $4$, is not linearly independent in $\mathbb{R}^{3}$.


> [!example] Example: No list of length 3 spans $\mathbb{R}^{4}$
> The list $(1,0,0,0), (0,1,0,0), (0,0,1,0), (0,0,0,1)$, which has length $4$, is linearly independent in $\mathbb{R}^{4}$. Thus, no list of length less than four spans $\mathbb{R}^{4}$.
> 
> For example, $(1,2,3,-5), (4,5,8,3),(9,6,7,-1)$, which has length $3$, does not span $\mathbb{R}^{4}$.

