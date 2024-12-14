---
title: LADR Exercises 2C
tags:
  - lin-alg
date: 2024-12-08
aliases:
  - ladr exercises 2c
---
> [!question] Problem 1
> Show that the subspaces of $\mathbb{R}^{2}$ are precisely $\{ 0 \}$, all lines in $\mathbb{R}^{2}$ containing the origin, and $\mathbb{R}^{2}$.

A subspace of $\mathbb{R}^{3}$ can have a basis of length 0, 1, 2.
- 0: The only basis of length 0 is $\{ 0 \}$.
- 1: Any basis of length 1 contains a single $x \in \mathbb{R}^{n}$. Note that $\text{span}(x)=\{ ax \in \mathbb{R}^{n}\, : \,a\in \mathbb{R} \}$, and hence bases of length $1$ are lines through the origin.
- 2: Any basis of length 2 is simply a basis of $\mathbb{R}^{2}$ and hence generates all $\mathbb{R}^{2}$ with its span.


> [!question] Problem 2
> Show that the subspaces of $\mathbb{R}^{3}$ are precisely $\{ 0 \}$, all lines in $\mathbb{R}^{3}$ containing the origin, all planes in $\mathbb{R}^{3}$ containing the origin, and $\mathbb{R}^{3}$.

A subspace of $\mathbb{R}^{3}$ can have a basis of length 0, 1, 2, 3.
- 0: The only basis of length 0 is $\{ 0 \}$.
- 1: Any basis of length 1 contains a single $x \in \mathbb{R}^{n}$. Note that $\text{span}(x)=\{ ax \in \mathbb{R}^{n}\, : \,a\in \mathbb{R} \}$, and hence bases of length $1$ are lines through the origin.
- 2: Any basis of length 2 contains two linearly independent $x,y\in \mathbb{R}^{n}$. Notice $\text{span}(x,y)=\{ ax+by\in \mathbb{R}^{n}\, : \,x,y\in \mathbb{R} \}$, hence bases of length 2 generate planes through the origin.
- 3: Any basis of length 3 is simply a basis of $\mathbb{R}^{3}$ and hence generates all $\mathbb{R}^{3}$ with its span.


> [!question] Problem 3
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.

(a) The set $U$ consists of polynomials in $\mathcal{P}_4$ such that  $p(6)=0$. This gives a single constraint, so our basis needs 4 elements. A basis would be
$$
\{ x-6, (x-6)x, (x-6)x^{2}, (x-6)x^{3} \}
$$
which are linearly independent. Any linear combination of these would still be a member of $U$. Note that $\dim U=4$.

(b) We can simply add one element $q\notin U$, since we just need $\dim U=5$ ([[Linearly Independent List of the Right Length is a Basis|linearly independent list of the right length is a basis]]). We can add $1$, so that we have
$$
\{1, x-6, (x-6)x, (x-6)x^{2}, (x-6)x^{3} \}
$$

(c) We need $P_{4}(\mathbb{F})=U+W$ and $U\cap W=\{ 0 \}$. Based on (b) above, we can let $W=\{ c\, : \,c\in \mathbb{F} \}$, then $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$ by the previous part.


> [!question] Problem 4
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p''(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.

(a) The set $U$ consists of degree-4 polynomials such that $p''(6)=0$.
$$
\begin{align}
p(x) & =a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4} \\
p'(x) & =a_{1}+2a_{2}x+3x^{2}a_{3}+4x^{3}a_{4} \\
p''(x) & =2a_{2}+6a_{3}x+12a_{4}x^{2} \\
p''(6) & =2a_{2}+36a_{3}+432a_{4}
\end{align}
$$
Since $p''(6)=0$, we can write
$$
\begin{align}
2a_{2}+36a_{3}+432a_{4} =0 \\
a_{2}=-18a_{3}-216a_{4}
\end{align}
$$
This means that any $p \in U$ has the form
$$
\begin{align}
p(x) & = a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4} \\
p(x) & =a_{0}+a_{1}x+(-18a_{3}-216a_{4})x^{2}+a_{3}x^{3}+a_{4}x^{4}
\end{align}
$$
which gives us a basis of
$$
{ 1,x,-18x^{2}+x^{3}, -216x^{2}+x^{4} }
$$

(b) We just need to find an element of $\mathcal{P}_{4}(\mathbb{F})$ to $U$ that is not in $U$ already, because we already have $\dim U=4$. We can simply add $x^{2}$, since $\frac{d^{2}}{dx}(x^{2})=2\neq 6$. This gives us
$$
\{ x^{2},1,x,-18x^{2}+x^{3}, -216x^{2}+x^{4} \}
$$

(c) We can use $W=\text{span}(x^{2})$.

> [!question] Problem 5
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(2)=p(5) \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.

(a) We can write $p(2)$ and $p(5)$ and equate them to each other:
$$
\begin{align}
a_{0}+2a_{1}+4a_{2}+8a_{3}+16a_{4} & =a_{0}+5a_{1}+25a_{2}+125a_{3}+625a^{4} \\
0 & =3a_{1}+21a_{2}+117a_{3}+609a_{4}
\end{align}
$$
This gives a constraint on the coefficients. We can solve the constraint explicitly for one variable:
$$
a_{1}=-7a_{2}-39a_{3}-203a_{4}
$$
Then we can re-write the original polynomial as:
$$
\begin{align}
p(x)  & = a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4} \\
p(x) & = a_{0}+(-7a_{2}-39a_{3}-203a_{4})x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4}
\end{align}
$$
which means that any $p \in U$ has the form
$$
p(x) =a_{0}+a_{2}(x^{2}-7x)+a_{3}(x^{3}-39x)+a_{4}(x^{4}-203x)
$$
This results in a basis of:
$$
\{ 1,x^{2}-7x, x^{3}-39x , x^{4}-203x\}
$$
(b) We can add $x$
$$
\{ 1,x,x^{2}-7x, x^{3}-39x, x^{4}-203x \}
$$
(c) We can have $W=\text{span}(x)$.


> [!question] Problem 6
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(2)=p(5)=p(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.

(a) The condition $U=\{ p \in P_{4}(\mathbb{F})\, : \,p(2)=p(5)=p(6)=0 \}$ means that any polynomial $p(x)\in U$ must have the form
$$
p(x)=(x-2)(x-5)(x-6)q(x)
$$
where $q(x)$ is some polynomial of at most degree 1, since $p(x)\in P_{4}(\mathbb{F})$ and the degree of $(x-2)(x-5)(x-6)$ is already 3. This means that:
$$
p(x)=a_{3}(x-2)(x-5)(x-6)+a_{4}x(x-2)(x-5)(x-6)
$$
where $a_{3},a_{4}\in \mathbb{F}$. The basis is thus
$$
\{ (x-2)(x-5)(x-6),x(x-2)(x-5)(x-6) \}
$$
(b) The dimension of $P_{4}(\mathbb{F})$ is 5, and the basis of $U$ in part (a) only had 2 elements. Thus, we need three additional linearly independent polynomials. A simple choice is
$$
\{ 1,x,x^{2} \}
$$
Thus, the extended basis is
$$
\{ (x-2)(x-5)(x-6),x (x-2)(x-5)(x-6),1,x,x^{2} \}
$$
(c) $W=\text{span}(1,x,x^{2})$. 

> [!question] Problem 7
> - (a) Let $U=\left\{  p \in \mathcal{P}_{4}(\mathbb{F})\, : \, \int_{-1}^{1} p =0  \right\}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.

(a) We can write $p(x)=a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4}$. The integral is then
$$
\begin{align}
\int_{-1}^{1} p(x) \, dx &  =\int_{-1}^{1} a_{0} \, dx +\int_{-1}^{1} a_{1}x \, dx +\int_{-1}^{1} a_{2}x^{2} \, dx +\int_{-1}^{1} a_{3}x^{3} \, dx +\int_{-1}^{1} a_{4}x^{4} \, dx \\[2ex] 
	 & = 2a_{0} +\frac{2}{3}a_{2}+\frac{2}{5}a_{4}
\end{align}
$$
so for $p(x)=0$, we have
$$
\begin{align}
2a_{0}+\frac{2}{3}a_{2}+\frac{2}{5}a_{4}=0\\[2ex] 
a_{0}+\frac{1}{3}a_{2}+\frac{1}{5}a_{4}=0
\end{align}
$$
which gives
$$
p(x)=\left( -\frac{1}{3}a_{2}-\frac{1}{5}a_{4} \right)+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4}
$$
Thus, the basis for $U$ is
$$
\left\{  x,x^{2}-\frac{1}{3},x^{3},x^{4}-\frac{1}{5}  \right\}
$$
(b) We have $\dim U=4$ and $\dim P_{4}=5$, so we need to find one more linearly independent vector.
$$
\left\{  1,x,x^{2}-\frac{1}{3},x^{3},x^{4}-\frac{1}{5}  \right\}
$$
(c) We have $W=\text{span}(1)$.


> [!question] Problem 8
> Suppose $v_{1}, \dots,v_{m}$ is linearly independent in $V$ and $w\in V$. Prove that
> $$
> \dim  \text{span}(v_{1}+w, \dots, v_{m}+w)\geq m-1
> $$

The span is
$$
\text{span}(v_{1}+w,v_{2}+w, \dots, v_{m}+w)=\text{span}(w,v_{1},v_{2}, \dots, v_{m})
$$
Since $v_{1}, \dots,v_{m}$ are linearly independent, their span has dimension $m$. Adding $w$ changes the span, depending on whether $w$ is in the span of $v_{1}, \dots,v_{m}$.

If $w\in \text{span}(v_{1}, \dots,v_{m})$, then $\text{span}(v_{1}, \dots,v_{m})=\text{span}(w,v_{1}, \dots,v_{m})$. In this case, $\dim \text{span}(w,v_{1}, \dots,v_{m})=m$.

If $w\notin \text{span}(v_{1}, \dots,v_{m})$, then $w$ adds an additional dimension, and the dimension becomes $m+1$.

Thus, in both cases, the minimum dimension is $m-1$.

Alternatively, we can note that
$$
v_{2}-v_{1}=(v_{2}+w)-(v_{1}+w)
$$
it follows that $v_{2}-v_{1}\in \text{span}(v_{1}+w, \dots,v_{m}+w)$. Similarly, $v_{i}-v_{1}\in \text{span}(v_{1}+w, \dots,v_{m}+w)$ for all $2\leq i\leq m$.

The list $v_{2}-v_{1}, \dots,v_{m}-v_{1}$ is linearly independent since $v_{1}, \dots,v_{m}$ is linearly independent in $V$. Thus, we have $\dim \text{span}(v_{1}+w, \dots,v_{m}+w)\geq m-1$.


> [!question] Problem 9
> Suppose $m$ is a positive integer and $p_{0},p_{1}, \dots,p_{m}\in \mathcal{P}(\mathbb{F})$ are such that each $p_{k}$ has degree $k$. Prove that $p_{0}, p_{1}, \dots,p_{m}$ is a basis of $\mathcal{P}_{m}(\mathbb{F})$.

To prove that $p_{0},p_{1}, \dots,p_{m}$ is a basis, they must span $P_{m}(\mathbb{F})$ and they must be linearly independent.

Any polynomial $q(x)\in P_{m}(\mathbb{F})$ can be written as a linear combination of polynomials of degree $0,1, \dots,m$. Since the list $p_{0}, p_{1}, \dots,p_{m}$ contains a polynomial from each of these degrees, their span must cover $P_{m}(\mathbb{F})$.

By constructions, the list is linearly independent since each of them is a polynomial with a different degree. We can also think of this recursively (the highest degree polynomial $p_{m}$ has a term $x^{m}$ that doesn't exist in any other $p$'s), so for $c_{0}p_{0}+\dots+c_{m}p_{m}=0$, $c_{m}$ must be zero, and then we can work backward to see that all coefficients must be zero.


> [!question] Problem 10
> Suppose $m$ is a positive integer. For $0\leq k\leq m$, let
> $$
> p_{k}(x)=x^{k}(1-x)^{m-k}
> $$
> Show that $p_{0}, \dots,p_{m}$ is a basis of $\mathcal{P}_{m}(\mathbb{F})$.

We need to show that they span $P_{m}(\mathbb{F})$ and they are linearly independent.

For linear independence, we need
$$
\sum_{k=0}^{m}c_{k}p_{k}(x)=0 \quad \text{for all } x \in \mathbb{F} 
$$
where $c_{k}\in \mathbb{F}$ are constants. Substituting $p_{k}(x)=x^{k}(1-x)^{m-k}$, this becomes
$$
\sum_{k=0}^{m}c_{k}x^{k}(1-x)^{m-k}=0
$$
Each term $x^{k}(1-x)^{m-k}$ is a polynomial of degree $m$. These polynomials are linearly independent because they involve distinct contributions of powers of $x$ and $(1-x)$, which cannot cancel each other out unless all coefficients $c_{k}=0$. 

Since the list contains $m+1$ linearly independent polynomials and $\dim (P_{m}(\mathbb{F}))=m+1$, it suffices to show linear independence. Thus, the list is a basis because [[Linearly Independent List of the Right Length is a Basis|linearly independent list of the right length is a basis]].


> [!question] Problem 11
> Suppose $U$ and $W$ are both four-dimensional subspaces of $\mathbb{C}^{6}$. Prove that there exist two vectors in $U\cap W$ such that neither of these vectors is a scalar multiple of the other.

We treat $\mathbb{C}^{6}$ as a vector space over $\mathbb{C}$. We have
$$
\dim  (U+W)=\dim  U+\dim  W-\dim  (U\cap W)
$$
and thus $\dim U=\dim W=4$. Then we have
$$
\dim  (U+W)=8-\dim  (U \cap W)
$$
Since $U+W$ is a subspace of $\mathbb{C}^{6}$ and $\dim \mathbb{C}^{6}=6$, we must have $\dim (U+W) \leq 6$. Since $\dim (U+W)\geq \max(\dim U,\dim W)=4$, we have
$$
4 \leq \dim  (U+W)\leq 6
$$
and hence
$$
2\leq \dim  (U\cap W)\leq 4
$$
Thus, $U\cap W$ has a basis of length at least two. Since vectors in a basis are linearly independent from each other, there exist two vectors in $U\cap W$ such that neither is a scalar multiple of the other.

> [!question] Problem 12
> Suppose $U$ and $W$ are both five-dimensional subspaces of $\mathbb{R}^{9}$, such that $\dim U=3$, $\dim W=5$, and $U+W=\mathbb{R}^{8}$. Prove that $\mathbb{R}^{8}=U\oplus W$.

We have
$$
\dim  (U+W)=\dim  U+\dim  W-\dim  (U\cap W)
$$
and since $U+W=\mathbb{R}^{8}$ with $\dim U=5$ and $\dim W=3$, we have
$$
8=3+5-\dim  (U\cap W)
$$
and hence we must have $\dim (U\cap W)=0$. Therefore, we must have $U\cap W=\{ 0 \}$. By the [[Condition for Direct Sum of Two Subspaces|condition for direct sum of two subspaces]], we have $\mathbb{R}^{8}=U\oplus W$.


> [!question] Problem 13
> Suppose $U$ and $W$ are both five-dimensional subspaces of $\mathbb{R}^{9}$. Prove that $U\cap W\neq \{ 0 \}$.

Since $U$ and $W$ are subspaces of $\mathbb{R}^{9}$, their sum is also a subspace (sums and scalar multiples of elements from $U+W$ remain in $U+W$). Thus, we must have:
$$
\begin{align}
\dim  (U+W) & \leq \dim  (\mathbb{R}^{9}) \\
\dim  (U+W) & \leq 9
\end{align}
$$
We can write $\dim (U+W)$ as
$$
\dim  (U+W)=\dim  U+\dim  W-\dim  (U\cap W)
$$
which gives us
$$
\begin{align}
\dim  U+\dim  W-\dim  (U\cap W) & \leq 9 \\
5+5-\dim  (U\cap W) & \leq 9
\end{align}
$$
which means $\dim (U\cap W)\geq 1$. This means that $U\cap W\neq 0$, as this would give $\dim (U\cap W)=0$.


> [!question] Problem 14
> Suppose $V$ is a ten-dimensional vector space and $V_{1},V_{2},V_{3}$ are subspaces of $V$ with $\dim V_{1}=\dim V_{2}=\dim V_{3}=7$. Prove that $V_{1}\cap V_{2}\cap V_{3}\neq \{ 0 \}$.



> [!question] Problem 15
> Suppose $V$ is finite-dimensional and $V_{1},V_{2},V_{3}$ are subspaces of $V$ with $\dim V_{1}+\dim V_{2}+\dim V_{3}>2\dim V$. Prove that $V_{1}\cap V_{2}\cap V_{3}\neq \{ 0 \}$.



> [!question] Problem 16
> Suppose $V$ is finite-dimensional and $U$ is a subspace of $V$ with $U\neq V$. Let $n=\dim V$ and $m=\dim U$. Prove that there exist $n-m$ subspaces of $V$, each of dimension $n-1$, whose intersection equals $U$.



> [!question] Problem 17
> Suppose $V_{1}, \dots,V_{m}$ are finite-dimensional subspaces of $V$. Prove that $V_{1}+\dots+V_{m}$ is finite-dimensional and
> $$
> \dim (V_{1}+\dots+V_{m})\leq \dim  V_{1}+\dots+\dim  V_{m}
> $$



> [!question] Problem 18
> Suppose $V$ is finite-dimensional with $\dim V=n\geq 1$. Prove that there exist one-dimensional subspaces $V_{1}, \dots,V_{n}$ of $V$ such that
> $$
> V=V_{1}\oplus\dots \oplus V_{n}
> $$



> [!question] Problem 19
> Explain why you might guess, motivated by some analogy with the formula for the number of elements in the union of three finite sets, that if $V_{1},V_{2},V_{3}$ are subspaces of finite-dimensional vector space, then
> $$
> \begin{align}
> \dim  (V_{1}+ & V_{2}+V_{3}) \\ 
> & = \dim  V_{1}+\dim  V_{2}+\dim  V_{3}\\
>  & \quad - \dim  (V_{1}\cap V_{2})-\dim  (V_{1}\cap V_{3})-\dim  (V_{2}\cap V_{3}) \\
>  & \quad +\dim  (V_{1}\cap V_{2}\cap V_{3})
\end{align}
> $$





> [!question] Problem 20
> Prove that if $V_{1}$, $V_{2}$ and $V_{3}$ are subspaces of finite-dimensional vector space, then
> $$
>\begin{align}
> \dim  (&V_{1}+V_{2}+V_{3}) \\
> &= \dim  V_{1}+\dim  V_{2}+\dim  V_{3} \\
> & \quad - \frac{\dim  (V_{1}\cap V_{2})+\dim  (V_{1}\cap V_{3})+\dim  (V_{2}\cap V_{3})}{3}\\
> & \quad - \frac{\dim  ((V_{1}+V_{2})\cap V_{3})+\dim  ((V_{1}+V_{3})\cap V_{2})+\dim  ((V_{2}+V_{3})\cap V_{1})}{3}
>\end{align}
> $$


