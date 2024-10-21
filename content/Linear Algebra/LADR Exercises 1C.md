---
title: LADR Exercises 1C
tags:
  - lin-alg
date: 2024-09-11
aliases:
  - ladr exercises 1c
---
>[!question] Problem 1
>For each of the following subsets $S$ of $\mathbb{F}^{3}$, determine whether it is a subspace of $\mathbb{F}^{3}$.
>- (a) $\{ (x_{1},x_{2},x_{3}) \}\in \mathbb{F}^{3}\, : \,x_{1}+2x_{2}+3x_{3}=0$
>- (b) $\{ (x_{1},x_{2},x_{3}) \}\in \mathbb{F}^{3}\, : \,x_{1}+2x_{2}+3x_{3}=4$
>- (c) $\{ (x_{1},x_{2},x_{3}) \}\in \mathbb{F}^{3}\, : \,x_{1}x_{2}x_{3}=0$
>- (d) $\{ (x_{1},x_{2},x_{3}) \}\in \mathbb{F}^{3}\, : \,x_{1}=5x_{3}$

**1(a)**
The zero vector in $\mathbb{F}^{3}$ is $(0,0,0)$. Since we have
$$
0+2(0)+3(0)=0,
$$
this zero vector also exists in the subset.

For addition, suppose we have $u,v\in S$ such that $u=(u_{1},u_{2},u_{3})$ and $v=(v_{1},v_{2},v_{3})$. Then, let's say we have:
$$
\begin{align}
w & =u+v \\
(w_{1},w_{2},w_{3}) & =(u_{1}+v_{1}, u_{2}+v_{2}, u_{3}+v_{3})
\end{align}
$$
For closure under addition, we need to have $w\in S$. So we check:
$$
\begin{align}
w_{1}+2w_{2}+3w_{3} & = (u_{1}+v_{1})+2(u_{2}+v_{2})+3(u_{3}+v_{3}) \\
	 & = (u_{1}+2u_{2}+3u_{3})+(v_{1}+2v_{2}+3v_{3}) \\
	 & =0+0 \\
	 & =0
\end{align}
$$
Thus, $w=u+v$ satisfies the condition for belonging in $S$, so we have closure under addition.

For scalar multiplication, let's say we have $\lambda \in \mathbb{F}$ and $u\in S$ such that:
$$
\lambda u=(\lambda u_{1}, \lambda u_{2}, \lambda u_{3})
$$
To check whether $\lambda u \in S$ for closure of scalar multiplication, we check
$$
(\lambda u_{1})+2(\lambda u_{2})+3(\lambda u_{3})=\lambda(u_{1}+2u_{2}+3u_{3})=\lambda(0)=0
$$
Thus, $\lambda u$ satisfies the condition for belonging in $S$, so we have closure under scalar multiplication as well. 

**1(b)**
This subset is not a subspace because the zero vector of $\mathbb{F}^{4}$ is not in it:
$$
0+2(0)+3(0)\neq 4
$$
**1(c)**
The zero vector exists in the subspace, since $(0,0,0)$ has $0\cdot 0 \cdot 0 =0$. However, the additive identity is not valid since for some $u, v\in S$, we do not always have
$$
(u_{1}+v_{1})(u_{2}+v_{2})(u_{3}+v_{3})=0
$$
For example, $(1,1,0)$ and $(0,1,1)$ both belong in the subset, but their sum $(1,2,1)$ does not.

**1(d)**
The zero vector/additive identity for $\mathbb{F}^{3}$ exists in the subspace, since $(0,0,0)$ satisfies $x_{1}=5x_{3}$ with $0=5(0)$.

Closure under addition holds. For some $u, v \in S$ we have
$$
\begin{align}
w & =u+v \\
(w_{1}, w_{2}, w_{3}) & =(u_{1}+v_{1}, u_{2}+v_{2}, u_{3}+v_{3})
\end{align}
$$
then, $w \in S$ if $w_{1}=5w_{3}$, which we can show with
$$
\begin{align}
w_{1} & =5w_{3} \\
u_{1}+v_{1} & =5(u_{3}+v_{3}) \\
u_{1}+v_{1} & =5u_{3}+5v_{3}
\end{align}
$$
For scalar multiplication, we have
$$
\lambda u=(\lambda u_{1}, \lambda u_{2}, \lambda u_{3})
$$
which satisfies the closure property because
$$
\begin{align}
\lambda u_{1}=5(\lambda u_{3}) \\
\lambda u_{1} = \lambda(5u_{3})
\end{align}
$$


>[!question] Problem 2
>Verify all assertions about subspaces in Example 1.35.

This is done in [[Subspaces#Examples]].


>[!question] Problem 3
>Show that the set of differentiable real-valued functions $f$ on the interval $(−4, 4)$ such that $f'(-1)=3f(2)$ is a subspace of $\mathbb{R}^{(-4,4)}$.

 $\mathbb{R}^{(-4, 4)}$  is the set of functions from $(0,3)$ to $\mathbb{R}$. The zero function in $\mathbb{R}^{(-4,4)}$ is $f(x)=0$, which is differentiable on $(0,3)$. We also have:
$$
\begin{align}
f'(-1) & =0 \\
3f(2) & =3(0)=0
\end{align}
$$
Thus, the zero function in $\mathbb{R}^{(-4,4)}$ is contained in $V$.

Next, for addition, if $f,g\in V$, then $f$ and $g$ are differentiable real-valued functions. So, $f+g$ must also be differentiable. Then:
$$
(f+g)'(-1)=f'(-1)+g'(-1)=3f(2)+3g(2)=3(f(2)+g(2))=3(f+g)(2)
$$
from which we can conclude that $V$ is closed under addition.

For scalar multiplication, if $f\in V$ for any $\lambda \in \mathbb{R}$, then $f$ is differentiable real-valued functions. So, $\lambda f$ is differentiable too. Moreover,
$$
(\lambda f)'(-1)=\lambda f'(-1)=\lambda(3f)(2)=3(\lambda f)(2)
$$
This shows $V$ is closed under scalar multiplication.

Thus, we've shown that $V$ shares the same zero function/additive identity, is closed under addition, and is closed under scalar multiplication.


> [!question] Problem 4
> Suppose $b\in \mathbb{R}$. Show that the set of continuous real-valued functions $f$ on the interval $[0, 1]$ such that $\int_{0}^{1}f  =b$ is a subspace of $\mathbb{R}^{[0,1]}$ if and only if $b=0$.

Let us call the set $V$. If $V$ is a subspace of $\mathbb{R}^{[0,1]}$, then for any $f\in V$, we have $\int_{0}^{1} f \,=b$. For $V$ to be a subspace, any $kf$, where $k\in \mathbb{R}$, must also be in $V$. Hence
$$
\begin{align}
b & =\int_{0}^{1}(kf)   \\[2ex]
 & = k \int_{0}^{1} f \\[2ex] 
	 & =kb
\end{align}
$$
which only happens if $b=0$.

If $b=0$, then for any $f,g\in V$ and $\lambda \in \mathbb{R}$, we have
$$
\int_{0}^{1} (f+g) \,= \int_{1}^{0} f +\int_{1}^{0} g=0+0=0
$$
which satisfies closure under addition, $f+g\in V$. Note that $f+g$ is a continuous real-valued function since $f$ and $g$ are.

Similarly,
$$
\int_{0}^{1} (\lambda f) =\lambda \int_{0}^{1}f=k0=0 
$$
and $\lambda f$ is a continuous real-valued function because $f$ is. Thus, we have closure under multiplication, $\lambda f\in V$.

Finally, we note the constant function (additive identity) $f\equiv 0$ in $\mathbb{R}^{[0,1]}$ is also the additive identity in $V$. Hence, $V$ is a subspace of $\mathbb{R}^{[0,1]}$.

> [!question] Problem 5
> Is $\mathbb{R}^{2}$ a subspace of $\mathbb{C}^{2}$?

$\mathbb{R}^{2}$ is not a subspace of $\mathbb{C}^{2}$ because it does not satisfy closure under scalar multiplication. Specifically, we need to have $\lambda a\in \mathbb{R}^{2}$ for $\lambda \in \mathbb{C}$, $a\in \mathbb{R}^{2}$. 
- Recall that for closure of multiplication where $U$ is a subspace of $V$, $\lambda$ is a scalar from the [[Fields|field]] over which $V$ is defined.

This is clearly not true:
$$
\lambda =i, \,\, a=(1,1) \quad \longrightarrow \quad \lambda a=(i,i) \notin \mathbb{R}^{2}
$$
Hence, $\mathbb{R}^{2}$ is not a subspace of the complex vector space $\mathbb{C}^{2}$.

> [!question] Problem 6
> - **(a)** Is $\{ (a,b,c)\in \mathbb{R}^{3}\, : \,a^{3}=b^{3} \}$ a subspace of $\mathbb{R}^{3}$?
> - **(b)** Is $\{ (a,b,c)\in \mathbb{C}^{3}\, : \,a^{3}=b^{3} \}$ a subspace of $\mathbb{C}^{3}$?

**6(a)**
The additive identity in $\mathbb{R}^{3}$ is $(0,0,0)$. This same additive identity exists in $V$.

For elements $x,y \in V$, we have:
$$
\begin{align}
x+y & =(a_{x}, b_{x},c_{x})+(a_{y}, b_{y}, c_{y}) \\
	 & = (a_{x}+a_{y}, b_{x}+b_{y}, c_{x}+c_{y})
\end{align}
$$
For closure under addition, we need to have
$$
(a_{x}+a_{y})^{3}=(b_{x}+b_{y})^{3}
$$
or
$$
a_{x}^{3}+3a_{x}^{2}a_{y}+3a_{x}a_{y}^{2}+a_{y}^{3} = b_{x}^{3}+3b_{x}^{2}b_{y}+3b_{x}b_{y}^{2}+b_{y}^{3}
$$
This is true, since the $a_{x}^{3}=b_{x}^{3}$ and $a_{y}^{3}=b_{y}^{3}$ is only true if $a_{x}=b_{x}$ and $a_{y}=b_{y}$ (for real numbers). Thus, closure under addition is satisfied.

Closure under multiplication is easy to show:
$$
\begin{align}
\lambda x=(\lambda a_{x}, \lambda b_{x}, \lambda c_{x}) \\
\end{align}
$$
and we have
$$
\begin{align}
(\lambda a_{x})^{3} & =(\lambda b_{x})^{3} \\
\lambda^{3}a_{x}^{3} & =\lambda^{3}b_{x}^{3} \\
a_{x}^{3}&=b_{x}^{3}
\end{align}
$$
Thus, we've shown that $V$ is indeed a subspace of $\mathbb{R}^{3}$.

**6(b)**
We can show that the set is not a subspace of $\mathbb{C}^{3}$ by providing a counterexample. We have two elements in the subset, $x$ and $y$:
$$
\begin{align}
x & =\left( 1, \frac{-1+\sqrt{ 3 }i}{2},0 \right) \in \{ (a,b,c)\in \mathbb{C}^{3} \, : \, a^{3}=b^{3} \} \\[2ex]
y & =\left( 1, \frac{-1-\sqrt{ 3 }i}{2},0 \right) \in \{ (a,b,c)\in \mathbb{C}^{3} \, : \, a^{3}=b^{3} \} \\
\end{align}
$$
Adding these two elements shows that the set is not closed under addition:
$$
x+y=(2, -1, 0) \notin \{ (a,b,c)\in \mathbb{C}^{3} \, : \, a^{3}=b^{3} \}
$$

> [!question] Problem 7
> Prove or give a counterexample: If $U$ is a nonempty subset of $\mathbb{R}^{2}$ such that $U$ is closed under addition and under taking additive inverses (meaning $-u\in U$ whenever $u\in U$), then $U$ is a subspace of $\mathbb{R}^{2}$.

Let's say we have $U=\{ (x,y)\in \mathbb{R}^{2}: x,y\in \mathbb{Z} \}$. $U$ is not empty. 

If we have $(x_{1},y_{1})\in U$ and $(x_{2},y_{2})\in U$, then $x_{1},x_{2},y_{1},y_{2}\in \mathbb{Z}$. The sums of each pair are integers, $x_{1}+y_{1}\in \mathbb{Z}$ and $x_{2}+y_{2}\in \mathbb{Z}$, so we have
$$
(x_{1},y_{1})+(x_{2},y_{2})=(x_{1}+x_{2}, y_{1}+y_{2})\in U
$$
which means that $U$ is closed under addition.

Similarly, since $(-x_{1},-y_{1})\in U$, $U$ is closed under additive inverses.

However, $U$ is not closed under scalar multiplication if we have fractional scalars. For example, while $(1,1) \in U$, we do not have $\frac{1}{2}(1,1)\in U$.

Therefore, $U$ is not a subspace of $\mathbb{R}^{2}$.

> [!question] Problem 8
> Give an example of a nonempty subset $U$ of $\mathbb{R}^{2}$ such that $U$ is closed under scalar multiplication, but $U$ is not a subspace of $\mathbb{R}^{2}$.

An example nonempty subset is
$$
U=\{ (x,y)\in \mathbb{R}^{2} \, : \,x = 0 \text{ or }y = 0 \}
$$
This is closed under scalar multiplication because for some elements $u,v$ and a scalar $\lambda$, we have
$$
\begin{align}
u=(x,0) \quad  & \longrightarrow \quad \lambda u=(\lambda x,0) \\
v=(0,y) \quad  & \longrightarrow \quad \lambda u=(0,\lambda y) \\
\end{align}
$$
where we have some $x,y\in \mathbb{R}$.

However, $U$ is not closed under addition because
$$
u+v=(x,0)+(y,0)=(x,y) \notin U
$$
Hence, $U$ is not a subspace of $\mathbb{R}^{2}$.


> [!question] Problem 9
>A function $f\, : \,\mathbb{R}\to \mathbb{R}$ is called periodic if there exists a positive number $p$ such that $f(x)=f(x+p)$ for all $x \in \mathbb{R}$. Is the set of periodic functions from $\mathbb{R}$ to $\mathbb{R}$ a subspace of $\mathbb{R}^{\mathbb{R}}$? Explain.

Consider two periodic functions from $\mathbb{R}$ to $\mathbb{R}$:
$$
\begin{align}
f(x) & =\sin \sqrt{ 2 }x \\
g(x) & =\cos x
\end{align}
$$
Then, for this to be a subspace, it needs to be closed under addition, such that the sum of the above functions
$$
h(x)=\sin \sqrt{ 2 }x+\cos x
$$
is also periodic.

For $h(x)$ to be periodic, we need to have some $p$ such that $h(x)=h(x+p)$ for all $x \in \mathbb{R}$. Then, we must have
$$
h(0)=1=h(p)=h(-p)
$$
This means we must have:
$$
1=\sin \sqrt{ 2 }p+\cos p=-\sin \sqrt{ 2 }p+\cos p
$$
which implies that $\sin \sqrt{ 2 }p=0$ and $\cos p=1$. We know from $\cos p=1$ that we must have $p=2\pi k$ where $k\in \mathbb{Z}$. However, $\sin \sqrt{ 2 }p=0$ implies that $\sqrt{ 2 }p=\ell \pi$, where $\ell \in \mathbb{Z}$. Hence,
$$
\sqrt{ 2 }=\frac{\ell \pi}{2k\pi}=\frac{1}{2k}\in \mathbb{Q}
$$
which is not possible since $\sqrt{ 2 } \notin \mathbb{Q}$. 

Thus, this cannot be a subspace since our contradiction above shows it is not closed under addition.


> [!question] Problem 10
> Suppose $V_{1}$ and $V_{2}$ are subspace of $V$. Prove that the intersection $V_{1} \cap V_{2}$ is a subspace of $V$.

**Additive identity:** Since $V_{1}$ and $V_{2}$ are subspaces of $V$, they both contain the zero vector. Then, the zero vector must also be in the intersection $V_{1}\cap V_{2}$.

**Closure under addition:** Let $u,v\in V_{1}\cap V_{2}$. Then, this means that $u\in V_{1},u\in V_{2}, w\in V_{1}, w\in V_{2}$. Since $V_{1}$ is a subspace, it is closed under addition, so $u+v\in V_{1}$. Since $V_{2}$ is also a subspace, $u+v\in V_{2}$. Since $u+v$ is in both $V_{1}$ and $V_{2}$, we have
$$
u+v\in V_{1}\cap V_{2}
$$
which shows that $V_{1}\cap V_{2}$ is closed under addition.

**Closure under scalar multiplication:** Let $u\in V_{1}\cap V_{2}$ and $\lambda \in \mathbb{F}$. We know that $u\in V_{1}$ and $u\in V_{2}$. Since $V_{1}$ and $V_{2}$ are both subspaces, they are closed under scalar multiplication, such that
$$
\lambda u\in V_{1}, \lambda u\in V_{2}
$$
Thus, we also have $\lambda u\in V_{1}\cap V_{2}$. Therefore, $V_{1}\cap V_{2}$ is closed under scalar multiplication.


> [!question] Problem 11
> Prove that the intersection of every collection of subspaces of $V$ is a subspace of $V$.

This seems to be a trivial extension of Problem 10 above. The idea is just that if a given element exists in the intersection of a collection, it must also exist in each of the subspaces in the collection. Conversely, a sum of two such elements must also exist in each of the subspaces for each of them to be closed under addition; since they exist in every subspace in the collection, they're in the intersection. Same goes for scalar multiplication, and all of the subspaces must share the same additive identity since they are all subspaces of $V$.


> [!question] Problem 12
> Prove that the union of two subspaces of $V$ is only a subspace if and only if one of the subspace is contained in the other.



> [!question] Problem 13
> Prove that the union of three subspaces of $V$ is a subspace of $V$ if and only if one of the subspaces contains the other two.



> [!question] Problem 14
> Suppose
> $$
> \begin{align}
> U & =\{ (x,-x,2x)\in \mathbb{F}^{3}\, : \,x \in \mathbb{F} \}\\
>W & =\{ (x,x,2x)\in \mathbb{F}^{3}\, : \,x \in \mathbb{F} \}
>\end{align}
> $$
> Describe $U+W$ using symbols, also give a description of $U+W$ that uses no symbols.


