---
title: Every Linearly Independent List Extends to a Basis
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - every linearly independent list extends to a basis
---

> [!theorem] Every linearly independent list extends to a basis
> Every linearly independent list of vectors in a finite-dimensional vector space can be extended to a basis of the vector space.

*Proof.* Suppose $u_{1},\dots,u_{m}$ is linearly independent in a finite-dimensional vector space $V$. Let $w_{1},\dots,w_{n}$ be a list of vectors in $V$ that spans $V$. Thus the list
$$
u_{1},\dots,u_{m}, \,w_{1},\dots,w_{n}
$$
spans $V$. Applying the procedure from the above result [[Basis#Every spanning list contains a basis|every spanning list contains a basis]] to reduce this list to a basis of $V$ produces a basis consisting of the vectors $u_{1},\dots,u_{m}$ and some $w$'s. (None of the $u$'s get deleted in this procedure since $u_{1},\dots,u_m$ is linearly dependent).

As an example in $\mathbb{F}^{3}$, suppose we start with the linearly independent list $(2,3,4), (9,6,8)$. If we take $w_{1},w_{2},w_{3}$ to be the standard basis of $\mathbb{F}^{3}$, then applying the produces in the proof above produces the list
$$
(2,3,4), (9,6,8), (0,1,0)
$$
which is a basis of $\mathbb{F}^{3}$.