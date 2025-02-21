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

(a) If $v_{1}, \dots,v_{m}$ spans $V$, for all $v \in V$, there must exist scalars $z_{1}, \dots,z_{m}$ such that
$$
v=z_{1}v_{1}+\dots+z_{m}v_{m}
$$
which is the definition of the linear transformation $T(z_{1}, \dots, z_{m})=z_{1}v_{1}+\dots+z_{m}v_{m}$. Since every $v \in V$ can be written as $T(z_{1}, \dots,z_{m})$, we can say that $\text{range } T=V$. Thus, $T$ is [[Surjectivity|surjective]].

(b) If $v_{1}, \dots,v_{m}$ are linearly independent, if we have $z_{1}v_{1}+\dots+z_{m}v_{m}=0$, we need $z_{1}, \dots,z_{m}=0$. 

The key here again is to recognize that the $z_{1}v_{1}+\dots+z_{m}v_{m}$ is the operation applied by our map $T$. This means that if we apply the map and the result is zero as below:
$$
T(z_{1}, \dots, z_{m})=z_{1}v_{1}+\dots z_{m}v_{m}=0
$$
the only possible case when this happens is when $z_{1}=\dots=z_{m}=0$ for linear independence. This implies that $\text{null } T=0$, and since [[Injectivity Implies Null Space is 0 and vice versa|injectivity implies null space is 0 and vice versa]], the map $T$ must be [[Injectivity|injective]].

> [!question] Problem 4
> Show that $\{ T\in \mathcal{L}(\mathbb{R}^{5}, \mathbb{R}^{4})\, : \,\dim \text{null } T>2 \}$ is not a subspace of $\mathcal{L}(\mathbb{R}^{5}, \mathbb{R}^{4})$.

We can show this is not closed under addition with a counterexample. Suppose we have $T_{1}, T_{2}\in T$, such that
$$
\begin{align}
T_{1}(x_{1},x_{2},x_{3},x_{4},x_{5})=(0,0, x_{3},x_{4}) \\
T_{2}(x_{1},x_{2},x_{3},x_{4},x_{5})=(x_{1},x_{2},0,0)
\end{align}
$$
Then, we have
$$
\begin{align}
\text{null }  (T_{1}) & =\{ (x_{1},x_{2},0,0, x_{5}) \, : \,x_{1},x_{2},x_{5}\in  \mathbb{R} \}\\
\text{null }  (T_{2}) & =\{ (0,0,x_{3},x_{4}, x_{5}) \, : \, x_{3}, x_{4}, x_{5} \in  \mathbb{R} \}
\end{align}
$$
This means that both $\text{null } (T_{1})$ and $\text{null } (T_{2})$ have dimension $3$.

However, note that:
$$
\begin{align}
(T_{1}+T_{2})(x_{1},x_{2},x_{3},x_{4},x_{5}) & =(0,0,x_{3},x_{4})+(x_{1},x_{2},0,0) \\
     & =(x_{1},x_{2},x_{3},x_{4})
\end{align}
$$
such that
$$
\text{null }  (T_{1}+T_{2})=\{ ((0,0,0,0,x_{5})) \, : \,x_{5}\in  \mathbb{R} \}
$$
which means that $\dim \text{null } (T_{1}+T_{2})=1$. Thus, $(T_{1}+T_{2})\notin T$, since members of $T$ must have null space dimension higher than 2. This means that $T$ is not closed under addition, and hence it cannot be a subspace of $\mathcal{L}(\mathbb{R}^{5}, \mathbb{R}^{4})$. 


> [!question] Problem 5
> Give an example of $T\in \mathcal{L}(\mathbb{R}^{4})$ such that $\text{range } T=\text{null } T$.
> 


> [!question] Problem 6
> Prove that there does not exist $T \in \mathcal{L}(\mathbb{R}^{5})$ such that $\text{range } T=\text{null } T$.


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
