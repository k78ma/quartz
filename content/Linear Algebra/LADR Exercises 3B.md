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

An example would be
$$
T(x_{1},x_{2},x_{3},x_{4})=(0,0,x_{1},x_{2})
$$
as this would give
$$
\begin{align}
\text{null }  T & =\{ (0,0,x_{3},x_{4})\, : \,x_{3},x_{4}\in  \mathbb{R} \} \\
\text{range }  T & =\{ (0,0,x_{1},x_{2})\, : \,x_{1},x_{2}\in  \mathbb{R} \}
\end{align}
$$
In both the null space and the range, the first two elements are zero and the last two elements are arbitrary scalars.

> [!question] Problem 6
> Prove that there does not exist $T \in \mathcal{L}(\mathbb{R}^{5})$ such that $\text{range } T=\text{null } T$.

The [[Fundamental Theorem of Linear Maps|rank-nullity theorem]] requires $\dim  V=\dim  \text{null }  T+\dim  \text{range }  T$. In this case $V$ is $\mathbb{R}^{5}$, so $\dim V=5$. If we define $d =\text{range } T=\text{null } T$, we would need $5=2d$ or $d=2.5$. Since dimension needs to be a whole number, this is not possible.


> [!question] Problem 7
> Suppose $V$ and $W$ are finite-dimensional with $2\leq \dim V\leq \dim W$. Show that $\{ T\in \mathcal{L}(V,W)\, : \,T \text{ is not injective}\}$ is not a subspace of $\mathcal{L}(V,W)$.

Suppose $\dim V=n$ and $\dim W=m$, with $2\leq n\leq m$. Let $v_{1}, \dots,v_{n}$ be a basis of $V$ and $w_{1}, \dots,w_{m}$ be a basis of $W$.

Define $T_{1},T_{2}\in \mathcal{L}(V,W)$ such that
$$
\begin{align}
T_{1}(a_{1}v_{1}+\dots+a_{n}v_{n}) & =a_{2}w_{2}+\dots+a_{n}w_{n} \\
T_{2}(a_{1}v_{1}+\dots+a_{n}v_{n}) & =a_{1}w_{1}+\dots+a_{n-1}w_{n-1}
\end{align}
$$
To find the null space of $T_{1}$, we consider $a_{2}w_{2}+\dots+a_{n}w_{n}=0$. Since $w_{2}, \dots,w_{n}$ are linearly independent (as they are part of a basis), the only solution is $a_{2}=a_{3}=\dots=a_{n}=0$. This means that $a_{2}w_{2}+\dots+a_{n}w_{n}=0$ for any $v=a_{1}v_{1}$, meaning that the null space consists of all scalar multiples of $v_{1}$, which gives $\dim \text{null } T_{1}=1$. Similarly, $\dim \text{null } T_{2}=1$.

Since $\dim \text{null } T_{1}=\dim \text{null } T_{2}=1$, these maps are not injective ([[Injectivity Implies Null Space is 0 and vice versa|injectivity implies null space is 0 and vice versa]]).

However:
$$
\begin{align}
(T_{1}+T_{2})(a_{1}v_{1}+\dots+a_{n}v_{n}) & =T_{1}(a_{1}v_{1}+\dots+a_{n}v_{n})+T_{2}(a_{1}v_{1}+\dots+a_{n}v_{n}) \\
     & =a_{1}w_{1}+2a_{2}w_{2}+\dots+2a_{n-1}w_{n-1}+a_{n}w_{n}
\end{align}
$$
Imitating the process above and finding the null space of $(T_{1}+T_{2})$ by finding $v$ such that $(T_{1}+T_{2})(v)=0$ would show us that the only solution is $v=0$, as we have the $n$ terms this time instead of $n-1$. This means that $T_{1}+T_{2}$ is injective. Hence, we have found a counterexample showing that set is not closed under addition, and cannot be a subspace of $\mathcal{L}(V,W)$. $\blacksquare$

> [!question] Problem 8
> Suppose $V$ and $W$ are finite-dimensional with $\dim V\geq \dim W\geq 2$. Show that $\{ T\in \mathcal{L}(V,W)\, : \,T \text{ is not surjective}\}$ is not a subspace of $\mathcal{L}(V,W)$.

Let $T_{1},T_{2}\in \mathcal{L}(\mathbb{R}^{2})$ such that $\dim T_{1}=\dim T_{2}=2$. Then define
$$
\begin{align}
T_{1}(x,y)=(x,0) \\
T_{2}(x,y)=(0,y)
\end{align}
$$
Neither $T_{1}$ or $T_{2}$ are surjective since both of their ranges are one-dimensional subspaces of $\mathbb{R}^{2}$.

However
$$
\begin{align}
(T_{1}+T_{2})(x,y) & =T_{1}(x,y)+T_{2}(x,y) \\
     & = (x,0)+(0,y) \\
     & =(x,y)
\end{align}
$$
So $T_{1}+T_{2}$ has range $\mathbb{R}^{2}$, making it surjective.

Thus, since closure under addition does not hold, we have shown that this set cannot be a subspace of $\mathcal{L}(V,W)$.


> [!question] Problem 9
> Suppose $T\in \mathcal{L}(V,W)$ is injective and $v_{1}, \dots,v_{n}$ is linearly independent in $V$. Prove that $Tv_{1}, \dots,Tv_{n}$ is linearly independent in $W$.

Let
$$
0=a_{1}Tv_{1}+\dots+a_{n}Tv_{n}
$$
where $a_{1},\dots,a_{n}\in \mathbb{F}$.

By linearity, this implies that $T(a_{1}v_{1}+\dots+a_{n}v_{n})=0$. 

Since $T$ is injective, the equation $T(a_{1}v_{1}+\dots+a_{n}v_{n})=0$ implies that $a_{1}v_{1}+\dots+a_{n}v_{n}=0$. 
- This is because [[Linear Maps Take 0 to 0|linear maps take 0 to 0]], so in an injective map, $0$ can be the only input that gets mapped to $0$.

Thus, we've shown that the original equation is equivalent to solving $a_{1}v_{1}+\dots+a_{n}v_{n}=0$. Because $v_{1}, \dots,v_{n}$ is linearly independent, the only solution is $a_{1}=\dots=a_{n}=0$. This means the only solution to $a_{1}Tv_{1}+\dots+a_{n}Tv_{n}=0$ is also $a_{1}=\dots=a_{n}=0$. Thus, $Tv_{1},\dots ,Tv_{n}$ is also linearly independent.


> [!question] Problem 10
> Suppose $v_{1}, \dots,v_{n}$ spans $V$ and $T\in \mathcal{L}(V,W)$. Show that $Tv_{1}, \dots,Tv_{n}$ spans $\text{range } T$.

- For every $w \in \text{range } T$, there exists some $v$ such that $w=Tv$. 
- As $v_{1}, \dots,v_{n}$ spans $V$, there exists $a_{1}, \dots,a_{n}$ for which $v=a_{1}v_{1}+\dots +a_{n}v_{n}$.
- Thus, $w=Tv=T(a_{1}v_{1}+\dots+a_{n}v_{n})=a_{1}Tv_{1}+\dots+a_{n}Tv_{n}$.
- Therefore, $Tv_{1}, \dots,Tv_{n}$ spans $\text{range } T$.

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
