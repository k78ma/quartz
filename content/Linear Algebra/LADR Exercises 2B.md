---
title: LADR Exercises 2B
tags:
  - lin-alg
date: 2024-11-16
aliases: []
---

> [!question] Problem 1
> Find all vector spaces that have exactly one basis.

The only one is $\{ 0 \}$. If there is some nonzero vector $v$ in the basis, we can get a new basis by changing $v$ to $2v$.

> [!question] Problem 2
> Verify all of the assertions in 2.27.

Omitted – easy but tedious.

> [!question] Problem 3
> - **(a)** Find the basis of $U$, where $U$ is the subspace of $\mathbb{R}^{5}$ defined by
>  $$
> U=\{ (x_{1},x_{2},x_{3},x_{4},x_{5})\in \mathbb{R}^{5}\, : \,x_{1}=3x_{2} \text{ and } x_{3}=7x_{4} \} 
> $$
> - **(b)** Extend the basis in (a) to a basis of $\mathbb{R}^{5}$.
> - **(c)** Find a subspace $W$ of $\mathbb{R}^{5}$ such that $\mathbb{R}^{5}=U\oplus W$.

(a) We can parametrize the set as:
$$
(3x_{2},x_{2},7x_{4}, x_{4}, x_{5})
$$
which leads to choosing 
$$
(3,1,0,0,0), (0,0,7,1,0), (0,0,0,0,1)
$$
as a a basis; it is linearly independent and spans the space.

(b) We can extend by adding basis vectors for that place nonzero entries that are currently "missed" by our basis vectors.
$$
(1,0,0,0,0), (0,0,1,0,0)
$$
(c) $W=\text{span}((1,0,0,0,0), (0,0,1,0,0))$ by (b). We can show that $U\cap W=\{ 0 \}$ by considering $u\in U\cap W$ such that
$$
\begin{align}
a_{1}v_{1}+a_{2}v_{2}+a_{3}v_{3}=b_{1}v_{4}+b_{2}v_{5} \\
a_{1}v_{1}+a_{2}v_{2}+a_{3}v_{3}-b_{1}v_{4}-b_{2}v_{5}=0
\end{align}
$$
Since $v_{1},\dots,v_{5}$ are linearly independent, the only solution is where $a$'s and $b$'s are all zero, and so we have $U\cap W=\{ 0 \}$.


> [!question] Problem 4
> - **(a)** Find the basis of $U$, where $U$ is the subspace of $\mathbb{C}^{5}$ defined by
> $$
> U=\{ (z_{1},z_{2},z_{3},z_{4},z_{5}) \in \mathbb{C}^{5}\, : \,6z_{1}=z_{2} \text{ and } z_{3}+2z_{4}+3z_{5}=0 \}
> $$
> - (b) Extend the basis in (a) to a basis of $\mathbb{C}^{5}$ .
> - **(c)** Extend the basis $W$ of $\mathbb{C}^{5}$ such that $\mathbb{C}^{5}=U\oplus W$

(a) We can parametrize by writing $z_{1}=a$, which gives $z_{2}=6a$. We can also make $z_{4}=b$ and $z_{5}=c$ so $z_{3}=-2b-3c$. This gives:
$$
\begin{align}
(z_{1},z_{2},z_{3},z_{4},z_{5}) & =(a,6a,-2b-3c,b,c) \\
	 & =a(1,6,0,0,0)+b(0,0,-2,1,0)+c(0,0,-3,0,1)
\end{align}
$$
Thus the vectors corresponding forming our basis are
$$
v_{1}=(1,6,0,0,0), v_{2}=(0,0,-2,1,0), v_{3}=(0,0,-3,0,1)
$$
(b) We need vectors that are independent from the current basis (not in span of $U$). We can choose a vector where $z_{2}\neq 6z_{1}$ and a vector where $z_{3}\neq-2z_{4}-3z_{5}$. Thus, we can extend to $\mathbb{C}^{5}$ by adding
$$
(0,1,0,0,0), (0,0,1,0,0)
$$
(c) $W=\text{span}((0,1,0,0,0), (0,0,1,0,0))$.

> [!question] Problem 5
> Suppose $V$ is finite-dimensional and $U,W$ are subspaces of $V$ such that $V=U+W$. Prove that there exists a basis of $V$ consisting of vectors in $U\cup W$.

Suppose we have a set $\{ v_{1},v_{2},\dots,v_{m} \}$ as a basis for $U \cup W$. We can extend to to a basis of $U$ by adding vectors $\{ u_{1},u_{2}, \dots,u_{p-m} \}$ from $U$ such that $U=\text{span}(v_{1},\dots,v_{m}, u_{1},\dots,u_{p-m})$. Similarly, we can extend to basis for $W$ by adding vectors from $W$ such that $W=\text{span}(v_{1},\dots,v_{m}, w_{1}, \dots, w_{q-m})$.
- Note that $u_{i}$ are vectors exclusive to $U$ such that $u_{i}\in U \setminus U\cap W$
- Note that $w_{i}$ are vectors exclusive to $V$ such that $w_{i}\in W \setminus U\cap W$

Let's construct a set $S$ that contains all of these.
$$
S=\{ u_{1},\dots,u_{p-m}, v_{1}, \dots v_{m}, w_{1},\dots,w_{q-m} \}
$$
Note that all elements of $S$ are in $U\cup W$.

Let's show that $S$ is linearly independent. Suppose there exist scalars $c_{i}$ and $d_{j}$ such that
$$
\sum_{i=1}^{p-m}c_{i}u_{i}+\sum_{k=1}^{m}c_{p-m+k}v_{k}+\sum_{j=1}^{q-m}d_{j}w_{j}=0
$$
Re-arranging:
$$
\left(\sum_{i=1}^{p-m}c_{i}u_{i}+\sum_{k=1}^{m}c_{p-m+k}v_{k}\right)+\left(\sum_{j=1}^{q-m}d_{j}w_{j}\right)=0
$$
The first bracket is in $U$ (since $v_{k}\in U\cap V$) and the second bracket is in $W$. Note that we could do this proof grouping $v$ with $w$ as well.

The sum being zero implies that their negatives are equal. Furthermore, since the left side is in $U$ and the right side is in $W$, they must both be in $U\cap W$:
$$
\left(\sum_{i=1}^{p-m}c_{i}u_{i}+\sum_{k=1}^{m}c_{p-m+k}v_{k}\right)=-\left(\sum_{j=1}^{q-m}d_{j}w_{j}\right) \in U\cap W
$$
Since $\{ u_{i} \}$ are in $U \setminus (U\cap W)$, their coefficients must be zero, such that $c_{i}=0$ for $i=1,\dots,p-m$. Similarly,  $\{ w_{j} \}$ are in $W \setminus (U\cap W)$, their coefficients must be zero, such that $d_{j}=0$ for $j=1,\dots,q-m$. Thus, we have
$$
\sum_{k=1}^{m}c_{p-m+k}v_{k}=0
$$
Since $\{ v_{k} \}$ is a basis, all $c_{p-m+k}=0$. Therefore, $S$ is linearly independent.

Now we can show that $S$ spans $V$ – every vector in $V$ can be expressed as a sum of vectors from $U$ and $W$, because $V=U+W$. Since $S$ contains bases for $U$ and $W$, it spans $V$.

We have constructed a basis $S$ of $V$ consisting entirely of vectors from $U\cup W$; therefore, such a basis exists.

> [!question] Problem 6
> Prove or give a counterexample: If $p_{0}, p_{1}, p_{2}, p_{3}$ is a list in $\mathcal{P}_{3}(\mathbb{F})$ such that none of the polynomials $p_{0}, p_{1}, p_{2}, p_{3}$ has degree 2, then $p_{0}, p_{1}, p_{2}, p_{3}$ is not a basis of $\mathcal{P}_{3}(\mathbb{F})$.

Consider the list
$$
p_{0}, p_{1}, p_{2}, p_{3} = 1,x, x^{2}+x^{3}, x^{3}
$$
which contains no polynomial of degree 2.

We can prove that $\text{span}(1,x,x^{2}+x^{3}, x^{3})=\mathcal{P}_{3}(\mathbb{F})$. 

Let $q\in \mathcal{P}_{3}(\mathbb{F})$. Then, there exist
$$
a_{0},\dots,a_{3}\in \mathbb{F}
$$
such that $q=a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}$. But notice that we can write
$$
\begin{align}
a_{0}p_{0}+a_{1}p_{1}+a_{2}p_{2}+(a_{3}-a_{2})p_{3} & =a_{0}+a_{1}x+a_{2}(x^{2}+x^{3})+(a_{3}-a_{2})x^{3} \\
	 & = a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3} \\
	 & =q
\end{align}
$$
To see the list is linearly independent, suppose $b_{0}, \dots , b_{3}\in \mathbb{F}$ such that
$$
b_{0}p_{0}+b_{1}p_{1}+b_{2}p_{2}+b_{3}p_{3}=0
$$
It follows that
$$
b_{0}+b_{1}x+b_{2}x^{2}+(b_{2}+b_{3})x^{3}=0
$$
which is true if and only if all coefficients are zero. Thus, this is a basis as claimed. $\blacksquare$

> [!question] Problem 7
> Suppose that $v_{1},v_{2},v_{3},v_{4}$ is a basis of $V$. Prove that
> $$
> v_{1}+v_{2}, v_{2}+v_{3}, v_{3}+v_{4}, v_{4}
> $$
> is also a basis of $V$.

First, we need to show that the list is linearly independent. Suppose that
$$
\begin{align}
a(v_{1}+v_{2})+b(v_{2}+v_{3})+c(v_{3}+v_{4})+dv_{4} & =0 \\
av_{2}+(a+b)v_{2}+(b+c)v_{4} +(c+d)v_{4} & =0
\end{align}
$$
If $a=0$, then we must have $b=0$, which in turn also gives us $c=0, d=0$. Thus, we have shown that the list is linearly independent.

Now note that we can write:
$$
\begin{align}
v_{3} & =(v_{3}+v_{4})-v_{4} \\
v_{2} & =(v_{2}+v_{3})-v_{3}=(v_{2}+v_{3})-(v_{3}+v_{4})+v_{4} \\
v_{1} & =(v_{1}+v_{2})-v_{2}=(v_{1}+v_{2})- (v_{2}+v_{3})+(v_{3}+v_{4})-v_{4}
\end{align}
$$
and of course, $v_{4}=v_{4}$.

Since we know that $v_{1},v_{2},v_{3},v_{4}$ is a basis of $V$, and we can write these basis vectors as linear combinations of elements from our list, then our list must span $V$ as well.

Therefore, our list is a span of $V$.

> [!question] Problem 8
> Prove or give a counterexample: If $v_{1},v_{2},v_{3},v_{4}$ is a basis of $V$ and $U$ is a subspace of $V$ such that $v_{1},v_{2}\in U$ and $v_{3} \notin U$ and $v_{4} \notin U$, then $v_{1},v_{2}$ is a basis of $U$.

The statement is false. Let $V=\mathbb{R}^{4}$ and let
$$
\begin{align}
v_{1}=(1,0,0,0) \\
v_{2}=(0,1,0,0) \\
v_{3}=(0,0,1,0) \\
v_{4}=(0,0,0,1)
\end{align}
$$
Clearly $v_{1},v_{2},v_{3},v_{4}$ is a basis of $V$.

Define
$$
U=\{ (x_{1},x_{2},x_{3},x_{4})\in \mathbb{R}^{4}\, : \,x_{3}=x_{4} \}
$$
Then $v_{1},v_{2}\in U$ but $v_{3},v_{4} \notin U$. 

However $v_{1},v_{2}$ does not span $U$, since no combination of them can yield $(0,0,1,1)$.

> [!question] Problem 9
> Suppose $v_{1},\dots,v_{m}$ is a list of vectors in $V$. For $k\in \{ 1,\dots,m \}$, let
> $$
> w_{k}=v_{1}+\dots+v_{k}
>$$
> Show that $v_{1},\dots,v_{m}$ is a basis of $V$ if and only if $w_{1},\dots,w_{m}$ is a basis of $V$.

First, we want to show that if $v_{1},\dots,v_{m}$ is a basis of $V$, then $w_{1},\dots, w_{m}$ is a basis of $V$. 

We can first show that $w_{1},\dots,w_{m}$ spans $V$ if $v_{1},\dots,v_{m}$ is a basis. This can be done by considering that any element $v_{k}$ can be written as:
$$
\begin{align}
v_{k} & =w_{k}-w_{k-1} \\
 & =(v_{1}+\dots+v_{k})-(v_{1}+\dots+v_{k-1})
\end{align}
$$
if we define $v_{0}=0$. Since we can write all any element $v_{k}$ as a linear combination of $w_{k}$'s, and $v_{1},\dots,v_{m}$ is a basis, then $w_{1},\dots,w_{m}$ span $V$ as well.

We can then show that $w_{1},\dots,w_{m}$ is linearly independent by considering
$$
\begin{align}
a_{1}w_{1}+ a_{2}w_{2}+\dots+a_{m}v_{m} & =0 \\
a_{1}v_{1}+ a_{2}(v_{1}+v_{2}) \dots+a_{m}(v_{1}+\dots+v_{m}) & =0 \\
(a_{1}+\dots+a_{m})v_{1}+(a_{2}+\dots+a_{m})v_{2}+\dots+a_{m}v_{m} & =0 \\
\end{align}
$$
Since $v_{1},\dots,v_{m}$ are linearly independent, the coefficients of each $v_{k}$ needs to be zero. We can start from $a_{m}=0$ and work backward to get all $a_{1}=\dots=a_{m}=0$.

Then, we want to show the opposite direction; if $w_{1},\dots,w_{m}$ is a basis of $V$, then $v_{1},\dots,v_{m}$ is a basis of $V$.

We can first show that $v_{1},\dots,v_{m}$ spans $V$. Since $w_{1},\dots,w_{m}$ is basis in $V$, every vector in $W$ can be written as a linear combination of $w_{1}, \dots,w_{m}$. Since each $w_{k}$ can be written in terms of $v_{1}, \dots,v_{k}$, it follows that any vector in $V$ can also be written as a linear combination of $v_{1},\dots,v_{m}$.

We can then show that $v_{1},\dots,v_{m}$ are linearly independent similar to above:
$$
\begin{align}
a_{1}v_{1}+a_{2}v_{2}+\dots+a_{m}v_{m} & =0 \\
a_{1}w_{1}+a_{2}(w_{2}-w_{1})+\dots+a_{m}(w_{m}-w_{m-1}) & =0 \\
(a_{1}-a_{2})w_{1}+(a_{2}-a_{3})w_{2}+\dots+(a_{m-1}-a_{m})w_{m-1}+a_{m}w_{m} & =0
\end{align}
$$
Since $w_{1},\dots,w_{m}$ are a basis of $V$, they are linearly independent, so each of the coefficients must be zero. We can work backward from $a_{m}=0$ back to get $a_{1}=\dots=a_{m}=0$.


> [!question] Problem 10
> Suppose $U$ and $W$ are subspaces of $V$ such that $V=U\oplus W$. Suppose also that $u_{1},\dots,u_{m}$ is a basis of $U$ and $w_{1}, \dots, w_{n}$ is a basis of $W$. Prove that
>$$
> u_{1}, \dots, u_{m}, w_{1}, \dots, w_{n}
>$$
>is a basis of $V$.

First, we show that $u_{1},\dots,u_{m}, w_{1}, \dots, w_{n}$ is linearly independent. If there exist $a_{1},\dots,a_{m} \in \mathbb{F}$ and $b_{1},\dots,b_{n}\in \mathbb{F}$ such that
$$
a_{1}u_{1}+\dots+a_{m}u_{m}+b_{1}w_{1}+\dots+b_{n}w_{n}=0
$$
Then
$$
a_{1}u_{1}+\dots a_{m}u_{m}=-(b_{1}w_{1}+\dots+b_{n}w_{n})\in U\cap W
$$
since $V=U\oplus W$, we have $U\cap W=\{ 0 \}$. 

However, note that $u_{1},\dots,u_{m}$ is a basis of $U$ and $w_{1},\dots,w_{n}$ is a basis of $W$. It follows that $a_{1}=\dots=a_{m}=0$ and $b_{1}=\dots=b_{n}=0$. Hence, $u_{1},\dots,u_{m}, w_{1},\dots,w_{n}$ is linearly independent.

Second, we need to show that $u_{1},\dots,u_m, w_{1},\dots,w_{n}$ spans $V$. For any $v\in V$, there exist $u\in U$ and $w\in W$ such that $v=u+w$ since $V=U\oplus W$. Note that $u_{1},\dots,u_{m}$ is a basis of $U$ and $w_{1},\dots,w_{n}$ is a basis of $W$. It follows that for any $u$ and $w$, there exist $a_{1},\dots,a_{m}\in \mathbb{F}$ and $b_{1},\dots,b_{n}\in \mathbb{F}$ such that
$$
\begin{align}
u=a_{1}u_{1}+\dots+a_{m}u_{m} \\
w=b_{1}w_{1}+\dots+b_{n}w_{n}
\end{align}
$$
Hence,
$$
v=u+w=a_{1}u_{1}+\dots+a_{m}v_{m}+b_{1}w_{1}+\dots+b_{n}w_{n}
$$
which means that $u_{1},\dots,u_{m}, w_{1},\dots,w_{n}$ spans $V$.

This shows that
$$
u_{1},\dots,u_{m}, w_{1}, \dots, w_{n}
$$
is a basis of $V$.


> [!question] Problem 11
> Suppose $V$ is a real vector space. Show that if $v_{1}, \dots, v_{n}$ is a basis of $V$ (as a real vector space), then $v_{1},\dots, v_{n}$ is also a basis of the complexification $V_{\mathbb{C}}$ (as a complex vector space). 
> - See [[LADR Exercises 1B]] for the definition of complexification.

Recall that the complexification $V_{\mathbb{C}}$ of $V$ is defined as:
$$
V_{\mathbb{C}}=V\times V
$$
and we write elements of $V_{\mathbb{C}}$ as $u+iv$, where $u,v\in V$. Scalar multiplication by a complex scalar $a+bi$ is defined as $(a+bi)(u+iv)=(au-bv)+i(av+bu)$.

Suppose there exist complex scalars $c_{1},\dots,c_{n}\in \mathbb{C}$ such that
$$
c_{1}v_{1}+c_{2}v_{2}+\dots+c_{n}v_{n}=0
$$
We can write each $c_{j}$ as $c_{j}=a_{j}+ib_{j}$ and express the sum
$$
c_{1}v_{1}+c_{2}v_{2}+\dots+c_{n}v_{n}=(a_{1}v_{1}+a_{2}v_{2}+\dots+a_{n}v_{n})+i(b_{1}v_{1}+b_{2}v_{2}+\dots+b_{n}v_{n})
$$
For this to be zero, we need the real and imaginary parts to be equal in $V$. Thus:
$$
\begin{align}
a_{1}v_{1}+a_{2}v_{2}+\dots+a_{n}v_{n}=0 \\
b_{1}v_{1}+b_{2}v_{2}+\dots+b_{n}v_{n}=0
\end{align}
$$
Since $v_{1},\dots,v_{n}$ is a basis of $V$ as a real vector space, they are linearly independent over $\mathbb{R}$. Therefore
$$
\begin{align}
a_{1}=a_{2}=\dots=a_{n}=0 \\
b_{1}=b_{2}=\dots=b_{n}=0
\end{align}
$$
This shows linear independence.

Next, to show that $v_{1},\dots,v_{n}$ spans $V_{\mathbb{C}}$, we can write any arbitrary element of $V_{\mathbb{C}}$ in the form $u+iv$, where $u,v\in V$. Since $v_{1},\dots v_{n}$ is a basis of $V$, we can write
$$
u=\sum_{j=1}^{n}a_{j}v_{j}, \quad v=\sum_{j=1}^{n}b_{j}v_{j}
$$
for some $a_{j}, b_{j}\in \mathbb{R}$. Substituting these into $u+iv$:
$$
u+iv=\sum_{j=1}^{n}a_{j}v_{j}+i\sum_{j=1}^{n}b_{j}v_{j}=\sum_{j=1}^{n}(a_{j}+ib_{j})v_{j}
$$
The coefficients $a_{j}+ib_{j}$ are complex scalars, so $u+iv$ is a complex linear combination of $v_{1},\dots,v_{n}$. Thus, $v_{1},\dots v_{n}$ span $V_{\mathbb{C}}$ over $\mathbb{C}$.

Since $v_{1},\dots,v_{n}$ are linearly independent and span $V_{\mathbb{C}}$, they form a basis of $V_{\mathbb{C}}$ as a complex vector space.