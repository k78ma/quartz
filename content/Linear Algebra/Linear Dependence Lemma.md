---
title: Linear Dependence Lemma
tags:
  - lin-alg
date: 2024-10-28
aliases:
  - linear dependence lemma
---
The linear dependence lemma is a useful tool. It states that given a linearly dependent list of vectors, one of the vectors is in the span of the previous ones. Furthermore, we can throw out that vector without changing the span of the original list.

> [!theorem] Linear Dependence Lemma
> Suppose $v_{1}, \dots,v_{m}$ is a linearly dependent list in $V$. Then there exists $k\in(1,2,\dots,m)$ such that
> $$
> v_{k}\in \text{span}(v_{1},\dots,v_{k-1})
> $$
> Furthermore, if $k$ satisfies the condition above and the $k$-th term is removed from $v_{1},\dots,v_{m}$, then the span of the remaining list equals $\text{span}(v_{1},\dots,v_{m})$.

*Proof.* Because the list $v_{1}, \dots,v_{m}$ is linearly dependent, there exist numbers $a_{1}, \dots, a_{m}$, not all $0$, such that
$$
a_{1}v_{1}+\dots+a_{m}v_m=0
$$
Let $k$ be the largest of $\{ 1,\dots,m \}$ such that $a_{k}\neq 0$. Then, we can write $v_{k}$ as
$$
v_{k} =- \frac{a_{1}}{a_{k}}v_{1}-\dots-\frac{a_{k-1}}{a_{k}}v_{k-1}
$$
which proves $v_{k}\in \text{span}(v_{1},\dots v_{k-1})$ as desired.

Now suppose $k$ is any element of $\{ 1,\dots,m \}$ such that $v_{k}\in \text{span}(v_{1},\dots,v_{k-1})$. That means we have $b_{1}, \dots,b_{k-1}\in \mathbb{F}$ such that
$$
v_{k}=b_{1}v_{1}+\dots+b_{k-1}v_{k-1}
$$
Suppose $u\in \text{span}(v_{1},\dots v_{m})$. Then there exist $c_{1},\dots,c_{m}\in \mathbb{F}$ such that
$$
u=c_{1}v_{1}+\dots +c_{k}v_{k} + \dots +c_{m}v_{m}
$$
In the equation above, we can replace $v_{k}$ with the right side of the our expression above for $v_{k}$:
$$
u=c_{1}v_{1}+\dots+c_{1}(b_{1}v_{1}+\dots+b_{k-1}v_{k-1})+\dots+c_{m}v_{m}
$$
which shows that $u$ is in the span of the list obtained from removing the $k$th term from $v_{1},\dots,v_{m}$. Thus, removing the $k$th term of the list $v_{1},\dots,v_{m}$ does not change the span of the list.

If $k=1$ in the linear dependence lemma, then $v_{k}\in \text{span}(v_{1},\dots,v_{k-1})$ means $v_{1}=0$, because $\text{span}(\,) = \{ 0 \}$.


> [!example] Example: Smallest $k$ in linear dependence lemma
> Consider the list
> $$
> (1,2,3), (6,5,4), (15, 16, 17), (8, 9, 7)
> $$
> in $\mathbb{R}^{3}$. This list of four is linearly dependent. Thus, the linear dependence lemma implies that there exists $k\in \{ 1,2,3,4 \}$ such that the $k^{\text{th}}$ vector in this list is a linear combination of the previous vectors in the list. How do we find the smallest value of $k$ that works?

Taking $k=1$ in the linear dependence lemma works if and only if the first vector in the list equals $0$. Because $(1,2,3)$ is not the $0$ vector, we cannot take $k=1$ for this list.

Taking $k=2$ in the linear dependence lemma works if and only if the second vector in the list is a scalar multiple of the first vector. In our example, there does not exist $c\in \mathbb{R}$ such that $(6,5,4)=c(1,2,3)$. 

Taking $k=3$ in the linear dependence lemma works if and only if the third vector in the list is a linear combination of the first two vectors. Thus, we want to know whether there is $a,b\in \mathbb{R}$ such that
$$
(15,16,17)=a(1,2,3)+b(6,5,4)
$$
which is a system of three linear equations with two unknowns $a,b$. Solving gives us $a=3, b=2$. Thus, taking $k=3$ is the smallest value of $k$ that works in the linear dependence lemma.