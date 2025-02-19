---
title: LADR Exercises 3B
tags:
  - lin-alg
date: 2025-01-27
aliases:
  - ladr exercises 3b
  - ladr exercises 3b
---
> [!question] Problem 1
> Give an example of a linear map $T$ with $\dim \text{null } T=3$ and $\dim \text{range } T=2$.

Consider
$$
T\in \mathcal{L}(\mathbb{F}^{5}, \mathbb{F}^{2})\, : \,T(x_{1},x_{2},x_{3},x_{4},x_{5})=(x_{1},x_{2})
$$
Then the null space is all vectors of the form $(0,0, x_{3},x_{4},x_{5})$, giving $\dim \text{null } T=3$. The range is all vectors of the form $(x_{1},x_{2})$, which clearly gives $\dim \text{range } T=2$. Note that this also fulfills the [[Fundamental Theorem of Linear Maps|fundamental theorem of linear maps]], since $3+2=5$.

> [!question] Problem 2
> Suppose $S,T\in \mathcal{L}(V)$ are such that $\text{range } S \subseteq \text{null } T$. Prove that $(ST)^{2}=0$. 

We have:
$$
(ST)^{2}(v)=STST(v)=S(T(S(Tv)))
$$
As $\text{range } S \subseteq \text{null } T$, we have
$$
T(S(u))=0
$$
for any $u$ in $V$.

This means that $T(S(Tv))=0$ for all $v$. The final operation would be $S(0)$, and since [[Linear Maps Take 0 to 0|linear maps take 0 to 0]], we have $(ST)^{2}=0$.

> [!question] Problem 3
> Suppose $v_{1}, \dots,v_{m}$ is a list of vectors in $V$. Define $T\in \mathcal{L}(\mathbb{F}^{m}, V)$ by
> $$
> T(z_{1}, \dots, z_{m})=z_{1}v_{1}+\dots+z_{m}v_{m}
> $$
> - (a) What property of $T$ corresponds to $v_{1}, \dots,v_{m}$ spanning $V$?
> - (b) What property of $T$ corresponds to $v_{1}, \dots,v_{m}$ being linearly indepedent?

(a) 

> [!question] Problem 4
> Show that $\{ T\in \mathcal{L}(\mathbb{R}^{5}, \mathbb{R}^{4})\, : \,\dim \text{null } T>2 \}$ is not a subspace of $\mathcal{L}(\mathbb{R}^{5}, \mathbb{R}^{4})$.


> [!question] Problem 5
> 


> [!question] Problem 6
> 


> [!question] Problem 7
> 


> [!question] Problem 8
> 


> [!question] Problem 9
> 


> [!question] Problem 10
> 


> [!question] Problem 11
> 


> [!question] Problem 12
> 


> [!question] Problem 13
> 


> [!question] Problem 14
> 


> [!question] Problem 15
> 


> [!question] Problem 16
> 


> [!question] Problem 17
> 


> [!question] Problem 18
> 


> [!question] Problem 19
> 


> [!question] Problem 20
> 


> [!question] Problem 21
> 


> [!question] Problem 22
> 


> [!question] Problem 23
> 


> [!question] Problem 24
> 


> [!question] Problem 25
> 


> [!question] Problem 26
> 


> [!question] Problem 27
> 


> [!question] Problem 28
> 


> [!question] Problem 29
> 


> [!question] Problem 30
> 


> [!question] Problem 31
> 


> [!question] Problem 32
> 
