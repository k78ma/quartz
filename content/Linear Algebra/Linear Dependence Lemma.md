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
## Length of linearly independent list $\leq$ Length of spanning list
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

