---
title: LADR Exercises 2A
tags:
  - lin-alg
date: 2024-10-30
aliases:
  - ladr exercises 2a
---
> [!question] Problem 1
> Find a list of four distinct vectors in $\mathbb{F}^{3}$ whose span equals
> $$
> \{ (x,y,z)\in \mathbb{F}^{3}\, : \,x+y+z=0 \}
> $$

We can write $z$ as $-x-y$. Then, we just need linearly independent vectors of the form:
$$
(x,y,-x-y)
$$
We actually only need two to span the given set, since there are only two variables (this is a plane in 3D space).

Here are four distinct vectors:
$$
\begin{align}
(1,-1,0) \\
(1,0,-1) \\
(1,1,-2) \\
(-1,1,0)
\end{align}
$$
 Since $x+y+z-0$ is true any of the vectors individually, and any scalar multiplications of the individual vectors, any linear combination of these will always have $x+y+z$ as well.

> [!question] Problem 2
> Prove or give a counterexample: If $v_{1},v_{2}, v_{3}, v_{4}$ spans $V$, then the list
> $$
> v_{1}-v_{2}, v_{2}-v_{3}, v_{3}-v_{4}, v_{4}
> $$
> also spans $V$.

If $v_{1}, v_{2}, v_{3}, v_{4}$ span $V$, that means any $u\in V$ can be expressed as a linear combination of them. Then, we just need to show that we can produce $v_{1}, v_{2}, v_{3}, v_{4}$ with the linear combinations four given vectors; if we are able to produce each of these, we will be able to produce everything in the span as well.
$$
\begin{align}
v_{1} & =(v_{1}-v_{2})+(v_{2}-v_{3})+(v_{3}-v_{4})+v_{4} \\
v_{2} & =(v_{2}-v_{3})+(v_{3}-v_{4})+v_{4} \\
v_{3}  & =(v_{3}-v_{4})+v_{4} \\
v_{4} & =v_{4}
\end{align}
$$

> [!question] Problem 3
> Suppose $v_{1}, \dots, v_{m}$ is a list of vectors in $V$. For $k\in \{ 1,\dots,m \}$, let
> $$
> w_{k}=v_{1}+\dots+v_{k}
> $$
> Show that $\text{span}(v_{1},\dots,v_{m})=\text{span}(w_{1}, \dots, w_{m})$.

Any element $w_{k}$ is a linear combination of the vectors in $v_{1}, \dots, v_{m}$. For example, for some $w_{a}, w_{b}$, we would just have
$$
w_{a}+w_{b}=(v_{1}+\dots+v_{a})+(v_{1}+\dots+v_{b})
$$
Thus, any $w$, and any linear combination of $w$'s, can be written as a linear combination of $v$'s; hence, we can say that $\text{span}(w_{1},\dots ,w_{m})\subseteq \text{span}(v_{1},\dots,v_{m})$. 

On the other hand, any $v_{k}$ can be written as:
$$
v_{k}=w_{k}-w_{k-1}
$$
where we have $w_{0}=0$. As such, we can also express any $v$ as a linear combination of $w$'s, giving us $\text{span}(v_{1},\dots,v_{m})\subseteq \text{span}(w_{1},\dots,w_{m})$. Thus,
$$
\text{span}(v_{1},\dots,v_{m})=\text{span}(w_{1},\dots w_{m})
$$

> [!question] Problem 4
> - (a) Show that a list of length one in a vector space is linearly independent if and only if the vector in the list is not $0$.
> - (b) Show that a list of length two in a vector space is linearly independent if and only if neither of the two vectors in the list is a scalar multiple of the other.

**(a)** If the only vector in a list of length one is $0$, it is not linearly independent, since any $a\in \mathbb{F}$ makes $a(0)=0$. For any other element, we would need $a=0$, which would be linearly independent.

**(b)** Call our vectors $v_{1}$ and $v_{2}$. If they are scalar multiples of each other, we could write $v_{1}=\lambda v_{2}$ for some scalar $\lambda \in \mathbb{F}$. Then, we would have:
$$
a_{1}v_{1}+a_{2}v_{2} =0
$$
For [[Linear Independence|linear independence]], the only solution to the above is $a_{1}=a_{2}=0$. However, in the case of scalar multiples, we could write:
$$
\begin{align}
a_{1}v_{1}+a_{2}\lambda v_{1}  & = 0 \\
(a_{1}+a_{2}\lambda)v_{1} & =0 \\
\end{align}
$$
which could be true if we have $a_{1}=-a_{2}\lambda$. Thus, the only solution is not when $a_{1}=a_{2}=0$.


> [!question] Problem 5
> Find a number $t$ such that
> $$
> (3,1,4), (2,-3,5),(5,9,t)
> $$
> is not linearly independent in $\mathbb{R}^{3}$.

First we can solve:
$$
\begin{align}
3x+2y=5 \\
x-3y=9 \\
\end{align}
$$
$(\text{Eq 1})-3\cdot(\text{Eq2})$ gives:
$$
\begin{align}
11y = -22 \quad  & \longrightarrow \quad y=-2 \\
x-3(-2)=9 \quad  & \longrightarrow \quad x=3
\end{align}
$$
which then gives
$$
t=4(3)+5(-2)=2
$$
Thus, if $t=2$, we can write $3(3,1,4)-2(2,-3,5)=(5,9,2)$. Since one of the vectors is a linear combination of the other ones, we do not have a linearly independent set.


> [!question] Problem 6
> Show that the list $(2,3,1),(1,-1,2),(7,3,c)$ is linearly dependent in $\mathbb{F}^{3}$ if and only if $c=8$.

Suppose $x, y, z\in \mathbb{F}$ exist such that not all are zero and
$$
x(2,3,1)+y(1,-1,2)+z(7,3,c)=0
$$
Then we have:
$$
\begin{align}
2x+y+7z & =0 \\
3x-y+3z & =0 \\
\end{align}
$$
Eliminating $y$ gives
$$
5x+10z=0 \quad \longrightarrow \quad x=-2z
$$
Eliminating $x$ gives
$$
\begin{align}
6x+3y+21z & =0 \\
6x-2y+6z & =0 \\
\therefore 5y+15z=0 \quad  & \longrightarrow \quad y=-3z
\end{align}
$$
Since $x,y,z$ are not all zero, $z$ is not zero either. 

We can write the final equation as:
$$
\begin{align}
x+2y+cz & =0 \\
-2z+2(-3z)+cz & =0 \\
(c-8)z & =0
\end{align}
$$
Hence, in the case that $x,y,z$ are not $0$, we can still write $x(2,3,1)+y(1,-1,2)+z(7,3,c)=0$ if $c=8$, in which case this would be linearly dependent. The only other way to solve would be $x=y=z=0$, which would be lienarly independent.

> [!question] Problem 7
> - (a) Show that if we think of $\mathbb{C}$ as a vector space over $\mathbb{R}$, then the list $1+i, 1-i$ is linearly independent.
> - (b) Show that if we think of $\mathbb{C}$ as a vector space over $\mathbb{C}$, then the list $1+i, 1-i$ is linearly dependent.

**(a)** If we think of $\mathbb{C}$ as a vector space over $\mathbb{R}$, then our vectors are in $\mathbb{C}$ and scalars are in $\mathbb{R}$, so scalar multiplication is done with real numbers. Thus, for the list $1+i, 1-i$ to be linearly independent, we need
$$
a(1+i)+b(1-i)=0
$$
where $a,b\in \mathbb{R}$ and $a=b=0$ is the only solution. Expanding:
$$
\begin{align}
a+a(i)+b-b(i) & =0 \\
(a+b)+(a-b)i & =0
\end{align}
$$
We need both the real and imaginary parts to be zero:
$$
\begin{align}
a+b & =0 \\
a-b & =0 \\
\therefore 2a & =0  \quad \longrightarrow \quad a=b=0
\end{align}
$$
Since the only solution is the trivial one, when we think of $\mathbb{C}$ as a vector space over $\mathbb{R}$, then the list $1+i, 1-i$ is linearly independent.

**(b)** If we think of $\mathbb{C}$ as a vector space over $\mathbb{C}$, then both our vectors and scalars are in $\mathbb{C}$, which means scalar multiplication can be done with a complex number. Thus, for the list $1+i, 1-i$ to be linearly independent, we need
$$
a(1+i)+b(1-i)=0
$$
with $a=b=0$, except that in this case we have $a,b\in \mathbb{C}$. Since this is a list with only two elements, we actually just need to show that one of the elements can be expressed as a scalar multiple of the other element:
$$
\begin{align}
1-i & =c(1+i)  \\[2ex]
c & =\frac{1-i}{1+i}=\frac{1-i}{1+i} \frac{1-i}{1-i}=\frac{(1-i)^{2}}{1^{2}-i^{2}}=\frac{-2i}{2}=-i
\end{align}
$$
Since we have shown that one of the vectors can be written as a scalar multiple of the other (remember vectors and scalars are the same thing in this case because we have $\mathbb{C}$ defined over $\mathbb{C}$).

Alternatively, we could also use the above result for $c$ to derive $a$ and $b$:
$$
\begin{align}
(-i)(1+i) & =1-i \\
(-i)(1+i)-(1-i) & =0 \\
(-i)(1+i)+(-1)(1-i) & =0
\end{align}
$$
which can be verified by expanding. This gives us $a=-i, b=-1$. Since $a\neq b\neq 0$, we have linear dependence.

> [!question] Problem 8
> Suppose $v_{1},v_{2},v_{3},v_{4}$ is linearly independent in $V$. Prove that the list
> $$
> v_{1}-v_{2}, v_{2}-v_{3}, v_{3}-v_{4}, v_{4}
> $$
> is also linearly independent.

Let us consider a linear combination of these vectors:
$$
\begin{align}
a_{1}(v_{1}-v_{2})+a_{2}(v_{2}-v_{3})+a_{3}(v_{3}-v_{4})+a_{4}v_{4} & =0 \\
a_{1}v_{1}-a_{1}v_{2}+a_{2}v_{2}-a_{2}v_{3}+a_{3}v_{3}-a_{3}v_{4}+a_{4}v_{4} & =0 \\
a_{1}v_{1}+(-a_{1}+a_{2})v_{2}+(-a_{2}+a_{3})v_{3}+(-a_{3}+a_{4})v_{4} & =0
\end{align}
$$
Thus we can write the system
$$
\begin{align}
a_{1} & =0 \\
-a_{1}+a_{2} & =0 \\
-a_{2}+a_{3} & =0 \\
-a_{3}+a_{4} & =0
\end{align}
$$
which has the solution $a_{1}=a_{2}=a_{3}=a_{4}=0$. Thus, since the only solution is the trivial one, this list is linearly independent.


> [!question] Problem 9
> Prove or give a counterexample: If $v_{1}, v_{2}, \dots, v_{m}$ is a linearly independent list of vectors in $V$, then
> $$
> 5v_{1}-4v_{2}, v_{2}, v_{3}, \dots, v_{m}
> $$
> is linearly independent.

We can follow the same procedure as above:
$$
\begin{align}
a_{1}(5v_{1}-4v_{2})+a_{2}v_{2}+a_{3}v_{3}+\dots+a_{m}v_{m} & =0 \\
5a_{1}v_{1}-4a_{1}v_{2}+a_{2}v_{2}+a_{3}v_{3}+\dots+a_{m}v_{m} & =0 \\
5a_{1}v_{1}+(-4a_{1}+a_{2})v_{2}+a_{3}v_{3}+\dots+a_{m}v_{m} & =0
\end{align}
$$
which yields
$$
\begin{align}
5a_{1} & =0 \\
-4a_{1}+a_{2} & =0 \\
a_{3} & =0 \\
 & \dots \\
a_{m} & =0
\end{align}
$$
$5a_{1}=0$ yields $a_{1}=0$, which in turn gives $a_{2}=0$ from the second equation. We already know $a_{3},\dots,a_{m}=0$ because it was given that $a_{1},\dots,a_{m}$ is linearly independent.

> [!question] Problem 10
> Prove or give a counterexample: If $v_{1}, v_{2}, \dots, v_{m}$ is a linearly independent list of vectors in $V$ and $\lambda \in \mathbb{F}$, then $\lambda v_{1}, \lambda v_{2}, \dots, \lambda v_{m}$ is linearly independent.

This is true for $\lambda \neq 0$ but false if $\lambda=0$. If $\lambda=0$, any solution of $a$'s will fold for
$$
a_{1}(\lambda v_{1})+a_{2}(\lambda v_{2})+\dots+a_{m}(\lambda v_{m})=0
$$

> [!question] Problem 11
> Prove or give a counterexample: If $v_{1}, \dots, v_m$ and $w_{1}, \dots, w_{m}$ are linearly independent lists of vectors in $V$, then the list $v_{1}+w_{1}, \dots, v_{m}+w_{m}$ is linearly independent.

This is false. We can have $v_{k}=-w_{k}$, in which case any any $v_{k}+w_{k}=0$, so it doesn't matter what scalar $a_{k}$ is used, we will always have $a_{k}(v_{k}+v_{k})=0$. As such, the only solution is not trivial.

> [!question] Problem 12
> Suppose $v_{1}, \dots, v_{m}$ is linearly independent in $V$ and $w\in V$. Prove that if $v_{1}+w, \dots, v_{m}+w$ is linearly dependent, then $w\in \text{span}(v_{1}, \dots, v_{m})$.

For linear independence, we have
$$
a_{1}(v_{1}+w)+a_{2}(v_{w}+w)+\dots+a_{m}(v_{m}+w)=0
$$
Expanding and collecting like terms:
$$
\begin{align}
a_{1}v_{1}+a_{1}w+a_{2}v_{w}+a_{2}2+\dots+a_{m}v_{m}+a_{m}w & =0 \\
\underbrace{ (a_{1}v_{1}+a_{2}v_{2}+\dots+a_{m}v_{m}) }_{ S }+\underbrace{ (a_{1}+a_{2}+\dots+a_{m}) }_{ A }w & =0 \\
S+Aw & =0
\end{align}
$$
If $A\neq 0$, we have
$$
w=-\frac{1}{A}S
$$
Since $S$ is a linear combination of $v_{1},\dots,v_{m}$, $w$ is also a linear combination.

If $A=0$, we have $S=0$. Since $S=a_{1}v_{1}+\dots+a_{m}v_{m}$ and we started off with $v_{1},\dots,v_{m}$ being linearly independent, by definition we must have $a_{1}=\dots=a_{m}=0$. However, this cannot be true because $v_{1}+w , \dots,v_{m}+w$ is linearly dependent (there must be some solution other than the trivial). 

Because of this contradiction, we must have $A=0$, which means $w$ is a linear combination of $v_{1},\dots,v_{m}$, which by definition means that $w\in \text{span}(v_{1},\dots, v_{m})$.

> [!question] Problem 13
> Suppose $v_{1}, \dots, v_{m}$ is linearly independent in $V$ and $w\in V$. Show that
> $$
> v_{1}, \dots, v_{m}, w \text{ is linearly independent} \Longleftrightarrow  w \notin \text{span}(v_{1}, \dots, v_{m})
> $$

First, we can show that $w \notin \text{span}(v_{1},\dots,v_{m}) \implies v_{1}, \dots, v_{m}, w \text{ is linearly independent}$. 

Assume that $w \notin (v_{1},\dots,v_{m})$. Suppose there exists some linear combination such that
$$
a_{1}v_{1}+\dots a_{m}v_{m}+a_{w}w=0
$$
Then, if $a_{w}\neq 0$, we have
$$
w=-\frac{1}{a_{w}}(a_{1}v_{1}+a_{m}v_{m})
$$
which would make $w$ a linear combination of $v_{1},\dots,v_{m}$. Therefore, we must have $a_{w}=0$, which simplifies the original equation to
$$
a_{1}v_{1}+\dots+a_{m}v_{m}=0
$$
Since $\{ v_{1},\dots,v_{m} \}$ is linearly independent, all $a_{1},\dots,a_{m}$ must be zero. Thus, all coefficients $a_{1},\dots,a_{m}, w$ are zero, so $\{ v_{1},\dots,v_{m}, w \}$ is linearly independent.

Then, we can show that $v_{1},\dots,v_{m},w$ being linearly independent implies $w \notin \text{span}(v_{1},\dots,v_{m})$. 

Assume that $w\in \text{span}(v_{1},\dots,v_{m})$, so there exist scalars $a_{1},a_{2},\dots,a_{m}$ such that
$$
w=a_{1}v_{1}+a_{2}v_{2}+\dots+a_{m}v_{m}
$$
Consider the linear combination:
$$
(-a_{1})v_{1}+\dots+(-a_{m})v_{m}+w=0
$$
Not all coefficients are zero, since the coefficient of $w$ is $1$. This implies that $\{ v_{1},\dots,v_{m}, w \}$ is linearly dependent. This contradicts our assumption that $\{ v_{1},\dots,v_{m},w \}$ is linearly independent, so we must have $w\notin \text{span}(v_{1},\dots,v_{m})$. $\blacksquare$

> [!question] Problem 14
> Suppose $v_{1}, \dots, v_{m}$ is a list of vectors in $V$. For $k\in \{ 1, \dots, m \}$, let
> $$
> w_{k}=v_{1}+\dots+v_{k}
> $$
> Show that the list $v_{1}, \dots, v_{m}$ is linearly independent if and only if the list $w_{1}, \dots, w_{m}$ is linearly independent.

First, we aim to show that independent $v$'s means independent $w$'s. If $w_{1},\dots,w_{m}$ is linearly independent, we have
$$
a_{1}w_{1}+\dots+a_{m}w_{m}=0
$$
if and only if all $a_{1},\dots,a_{m}$ are $0$. This can be expanded to
$$
a_{1}(v_{1})+\dots+a_{m}(v_{1}+\dots+v_{m})=0
$$
Expanding each term:
$$
\begin{align}
 & a_{1}v_{1} \\
	+ & a_{2}v_{1}+a_{2}v_{2} \\
	+ & a_{3}v_{1} + a_{3}v_{2}+a_{3}v_{3} \\
+ & \dots \\
+  & a_{m}v_{1}+a_{m}v_{2}+a_{m}v_{3}+\dots+a_{m}v_{m} \\
= & 0	
\end{align}
$$
Grouping like terms:
$$
(a_{1}+\dots+a_{m})v_{1}+(a_{2}+\dots+a_{m})v_{2}+\dots+a_{m}v_{m}=0
$$
where each term has one less $a$ term in its coefficient than before.

If the list $v_{1},\dots,v_{m}$ is linearly independent, then the only solution is where the coefficients are all zero. Thus we know that $a_{m}=0$. We can recursively work backward for the other coefficients; for example, for the second last term:
$$
\begin{align}
(a_{m-1}+a_{m})a_{m-1}=0 \\
a_{m}=0 \implies a_{m-1}=0
\end{align}
$$
Following this, we have all $a_{1},\dots,a_{m}=0$. Since all scalar coefficients are zero, $w_{1},\dots,w_{m}$ are linearly independent.

Second, we aim to show that independent $w$'s means independent $v$'s. Suppose that there exists
$$
a_{1}v_{1}+a_{2}v_{2}+\dots+a_{m}v_{m}=0
$$
where we want to show that $a_{1}=\dots=a_{m}=0$.

We can express $v$'s in terms of $w$'s. For some term $v_k$, we can say that
$$
v_{k}=w_{k}-w_{k-1}
$$
with $w_{0}=0$. Then, we can substitute:
$$
a_{1}(w_{1}-w_{0})+a_{2}(w_{2}-w_{1})+\dots+a_{m}(w_{m}-w_{m-1})=0
$$
Expanding each term:
$$
\begin{align}
a_{1}w_{1}-a_{1}w_{0}+a_{2}w_{2}-a_{2}w_{1}+\dots+a_{m}w_{m}-a_{m}w_{m-1} & =0 \\
(a_{1}w_{1}-a_{2}w_{1})+(a_{2}w_{2}-a_{3}w_{2})+\dots+(a_{m}w_{m}-a_{m}w_{m-1}) & =0
\end{align}
$$
Grouping like terms:
$$
(a_{1}-a_{2})w_{1}+(a_{2}-a_{3})w_{2}+\dots+(a_{m-1}-a_{m-2})w_{m-1}+a_{m}w_{m}=0
$$
Since $w_{1},\dots,w_{m}$ are linearly independent, each of these coefficient terms must be zero. Like what we did before, we can start from $a_{m}=0$ to algo get $a_{1},\dots,a_{m-1}=0$. Since all $a_{1},\dots,a_{m}=0$, we've shown that $v_{1},\dots,v_{m}$ are linearly independent.

Thus, we've shown that if $v_{1},\dots,v_{m}$ are linearly independent, then $w_{1},\dots,w_{m}$ are linearly independent, as well as the other direction.

> [!question] Problem 15
> Explain why there does not exist a list of six polynomials that is linearly independent in $\mathcal{P}_{4}(\mathbb{F})$.

The space $\mathcal{P}_{4}(\mathbb{F})$ consists of all polynomials with coefficients in $\mathbb{F}$ whose degree is at most 4:
$$
p(x)=a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4}
$$
where $a_{0}, a_{1}, a_{2}, a_{3}, a_{4}\in \mathbb{F}$.

Suppose we have six polynomials such that each polynomial can be written as
$$
p_{i}(x)=a_{i0}+a_{i1}x+a_{i2}x^{2}+a_{i3}x^{3}+a_{i4}x^{4}
$$
Now, for linear independence, we write
$$
c_{1}p_{1}(x)+c_{2}p_{2}(x)+\dots+c_{6}p_{6}(x)=0
$$
where $a_{1},\dots,a_{6}\in \mathbb{F}$.

We can expand these as:
$$
\sum_{i=1}^{6}c_{i}(a_{i 0}+a_{i1}x+a_{i 2}x^{2}+a_{i 3}x^{3}+a_{i 4}x^{4})=0
$$
which can be written in terms of each power of $x$:
$$
\left( \sum_{i=1}^{6} c_{i}a_{i 0} \right)+\left( \sum_{i=1}^{6} c_{i}a_{i 1} \right)x+\left( \sum_{i=1}^{6} c_{i}a_{i 2} \right)x^{2}+\left( \sum_{i=1}^{6} c_{i}a_{i 3} \right)x^{3}+\left( \sum_{i=1}^{6} c_{i}a_{i 4} \right)^{4}=0
$$
Each coefficient must be zero, which gives us a system of five linear equations with 6 unknowns. Since we have more unknowns than equations, there are always non-trivial solutions (not all coefficients are zero). Since non-trivial solutions exist, this list is linearly dependent.

> [!question] Problem 16
> Explain why no list of four polynomials spans $\mathcal{P}_{4}(\mathbb{F})$.

A polynomial in $\mathcal{P}_{4}(\mathbb{F})$ has the form:
$$
p(x)=a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4}
$$
Since any polynomial in $\mathcal{P}_{4}(\mathbb{F})$ requires five coefficients to be uniquely determined and we have only four polynomials to combine, it's impossible to represent every polynomial in $\mathcal{P}_{4}(\mathbb{F})$ with just four polynomials.

> [!question] Problem 17
> Prove that $V$ is infinite-dimensional if and only if there is a sequence $v_{1}, v_{2}, \dots$ of vectors in $V$ such that $v_{1}, \dots, v_{m}$ is linearly independent for every positive integer $m$.

($\implies$) First suppose $V$ is [[Finite-Dimensional Vector Space|infinite-dimensional]]. We can prove by induction that there exists a sequence $v_{1},v_{2},\dots$ of vectors in $V$ such that for every $m\in \mathbb{Z}^{+}$ (positive integers), the first $m$ vectors are linearly independent.
- Base case: Since $V$ is infinite-dimensional, $V$ contains some nonzero vector $v_{1}$. The list containing only this vector is clearly linearly independent.
- Inductive step: Suppose the list of vectors $v_{1},\dots,v_{k}$ is linearly dependent for some $k\in \mathbb{Z}^{+}$. Since $V$ is infinite-dimensional, these vectors cannot span $V$, and so there exists some $v_{k+1}\in V$ that is outside $\text{span}(v_{1},\dots,v_{k})$. Note that $v_{k+1}\neq 0$. But, then $v_{1},\dots,v_{k+1}$ is linearly independent by the [[Linear Dependence Lemma]]; if it were linearly independent, the lemma guarantees that there would exist a vector in the list which could be written as a linear combination of its predecessors, which is impossible by our construction.
- By induction, we have shown there exists a list $v_{1}, v_{2}, \dots$ such that $v_{1}, \dots, v_{m}$ is linearly independent for every $m\in \mathbb{Z}^{+}$.

($\Longleftarrow$) Second, assume there is a sequence $v_{1},v_{2}, \dots$ of vectors in $V$ such that $v_{1},\dots,v_{m}$ is linearly independent for every $m\in \mathbb{Z}^{+}$. If $V$ were finite-dimensional, there would exist a list $v_{1},\dots,v_{n}$ for some $n\in \mathbb{Z}^{+}$ such that $V=\text{span}(v_{1},\dots, v_{n})$. But, by our assumption, the list $v_{1},\dots, v_{n+1}$ is linearly independent since we specified independence for every positive integer $m$. Linearly independent lists must have length no longer than every spanning list, this is a contradiction. Thus $V$ is infinite-dimensional.

> [!question] Problem 18
> Prove that $\mathbb{F}^{\infty}$ is infinite-dimensional.

For every integer $k\in \mathbb{Z}$, define the vector $v_{k}$ such that it has a $1$ in coordinate $k$ and $0$ everywhere else. Then, the list $v_{1}, \dots, v_{m}$ is linearly independent for any choice of $m\in \mathbb{Z}^{+}$. By Problem 17, $\mathbb{F}^{\infty}$ must be infinite-dimensional.

> [!question] Problem 19
> Prove that the real vector space of all continuous real-valued functions on the interval $[0,1]$ is infinite-dimensional.

- This means that each function $f$ has domain $x \in[0,1]$. And each $x \in[0,1]$, we have $f(x)\in \mathbb{R}$. The difference between this and $\mathbb{R}^{[0,1]}$ is that in this case, we are only concerned with real-valued functions. We will call the set $C[0,1]$.

Consider the set of monomials:
$$
S=\{ 1,x,x^{2},x^{3},\dots \}
$$
Each function $x^{n}$ in this set is a continuous real-valued function on $[0,1]$, so $S\subseteq C[0,1]$.

To show that $S$ is linearly independent, assume there exists a finite linear combination of elements of $S$ that equals the zero function:
$$
c_{0}(1)+c_{1}x+c_{2}x^{2}+\dots+c_{n}x^{n}=0
$$
where $c_{0}, c_{1},\dots,c_{n}$ are real coefficients. Expanding this, we have
$$
c_{0}+c_{1}t+c_{2}t^{2}+\dots+c_{n}t^{n}=0 \quad \text{ for all }t\in[0,1] 
$$
For this to be zero, all of its coefficients must be $0$. Therefore, the set $S$ is linearly independent as no non-trivial linear combination of the functions in $S$ is zero.

Since any finite subset of $S$ is linearly independent, and $S$ is infinite, there exists an infinite linearly independent set in $S$. Since $S\subseteq C[0,1]$ there also exists an infinite linearly independent set in $C[0,1]$. Thus, $C[0,1]$ cannot be spanned by any finite set of functions and thus must be infinite-dimensional.

> [!question] Problem 20
> Suppose $p_{0}, p_{1}, \dots, p_{m}$ are polynomials in $\mathcal{P}_{m}(\mathbb{F})$ such that $p_{k}(2)=0$ for each $k\in \{ 0,\dots,m \}$. Prove that $p_{0}, p_{1}, \dots, p_{m}$ is not linearly independent in $\mathcal{P}_{m}(\mathbb{F})$.

Suppose that $p_{0}, p_{1},\dots,p_{m}$ is linearly independent for contradiction. 
- First, we show that this implies that $\text{span}(p_{0}, p_{1},\dots,p_{m})=\mathcal{P}_{m}(\mathbb{F})$.
- Then, we show that the above leads to a contradiction, because we can find a polynomial in $\mathcal{P_{m}}(\mathbb{F})$ such that is not in $\text{span}(p_{0}, p_{1},\dots,p)$.
- Therefore, $p_{0}, p_{1},\dots p_{m}$ must not be linearly independent.
  
Note that the list $1,z, \dots, z^{m}$ spans $\mathcal{P}_{m}(\mathbb{F})$ and has length $m+1$. Hence, every linearly independent list must be have length $m+1$ or less (see [[Linear Dependence Lemma#Length of linearly independent list $ leq$ Length of spanning list|here]]). If $\text{span}(p_{0},p_{1},\dots, p_{m})\neq \mathcal{P}_{m}(\mathbb{F})$, there exists some $p$ in $\mathcal{P}_{m}(\mathbb{F})$ such that $p \notin \text{span}(p_{0}, p_{1}, \dots, p_{m})$ , and thus the list $p_{0}, p_{1}, \dots p_{m}, p$ is linearly independent and has length $m+2$. This presents a contradiction. Thus, we must have $\text{span}(p_{0}, p_{1}, \dots,p_{m})=\mathcal{P}_{m}(\mathbb{F})$.

Now, define the polynomial $q\equiv 1$. Then, $q\in \text{span}(p_{0}, p_{1}, \dots,p_{m})$, which means there must be $a_{0},\dots,a_{m}\in \mathbb{F}$ such that
$$
q=a_{0}p_{0}+a_{1}p_{1}+\dots+a_{m}p_{m}
$$
which in turn implies
$$
q(2)=a_{0}p_{0}(2)+a_{1}p_{1}(2)+\dots +a_{m}p_{m}(2)
$$
This would give us $1=0$. Therefore, $p_{0},p_{1}, \dots p_{m}$ cannot be linearly independent.