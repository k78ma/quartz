---
title: LADR Exercises 3A
tags:
  - lin-alg
date: 2024-12-20
aliases:
  - ladr exercises 3a
---
> [!question] Problem 1
> Suppose $b,c\in \mathbb{R}$. Define $T:\,\mathbb{R}^{3}\to \mathbb{R}^{2}$ by
> $$
> T(x,y,z)=(2x-4y+3z+b, 6x+cxyz)
> $$
> Show that $T$ is linear if and only if $b=c=0$.

Recall that a [[Linear Map|linear map]] have additivity and homogeneity. Let's say we have $x,y\in \mathbb{R}^{3}$ where $x=(x_{1},x_{2},x_{3}), y=(y_{1},y_{2},y_{3})$. 

Then, for additivity, we would need
$$
\begin{align}
T(x+y) & =Tx+Ty \\
T(x_{1}+y_{1},x_{2}+y_{2},x_{3}+y_{3}) & =T(x_{1},x_{2},x_{3})+T(y_{1},y_{2},y_{3}) \\
\end{align}
$$
The left side gives us
$$
\begin{align}
(2(x_{1}+y_{1}) & -4(x_{2}+x_{2})+3(x_{3}+y_{3})+b, 6(x_{1}+y_{1})+c(x_{1}+y_{1})(x_{2}+y_{2})(x_{3}+y_{3})) \\
 & =2x_{1}+2y_{1}-4x_{2}+y_{2}+3x_{3}+3y_{3}+b,  \\
 &\,\,\,\,\,\,\,\, 6x_{1}+6y_{1}+c(x_1x_2x_3 + x_1x_2y_3 + x_1y_2x_3 +  \\
 & \,\,\,\,\,\,\,\,x_1y_2y_3 + y_1x_2x_3 + y_1x_2y_3 + y_1y_2x_3 + y_1y_2y_3)
\end{align}
$$
The right side gives us:
$$
\begin{align}
 & (2x_{1}-4x_{2}+3x_{3}+b, 6x_{1}+cx_{1}x_{2}x_{3})+(2y_{1}-4y_{2}+3y_{3}+b, 6y_{1}+cy_{1}y_{2}y_{3}) \\
& = \big(2x_1 + 2y_1 - 4x_2 - 4y_2 + 3x_3 + 3y_3 + 2b, \\ & \quad 6x_1 + 6y_1 + c x_1 x_2 x_3 + c y_1 y_2 y_3\big).
\end{align}
$$
For the two of them to be equal
$$
\begin{align}
2x_{1}+2y_{1}-4x_{2}+y_{2}+3x_{3}+3y_{3}+b  & = 2x_1 + 2y_1 - 4x_2 - 4y_2 + 3x_3 + 3y_3 + 2b \\
b & =2b \\
\therefore b & =0
\end{align}
$$
and
$$
\begin{align}
 & 6x_{1}+6y_{1}+c(x_1x_2x_3 + x_1x_2y_3 + x_1y_2x_3 + x_1y_2y_3 + y_1x_2x_3 + y_1x_2y_3 + y_1y_2x_3 + y_1y_2y_3) \\
  & =6x_1 + 6y_1 + c x_1 x_2 x_3 + c y_1 y_2 y_3
\end{align}
$$
For this to be true, will also need $c=0$. Thus, additivity needs $b=c=0$.

To confirm homogeneity, we compare $T(\lambda v)$ and $\lambda(Tv)$ for all $\lambda \in \mathbb{F}$ and $v\in \mathbb{R}^{3}$. 
$$
\begin{align}
T(\lambda v)=T(\lambda x,\lambda y, \lambda z) & =(2\lambda x-4\lambda y+3\lambda z+b, 6 \lambda x +c \lambda x \lambda y \lambda z)
\end{align}
$$
and
$$
\begin{align}
\lambda(Tv)=\lambda(T(x,y,z)) & =\lambda(2x-4y+3z+b, 6x+cxyz) \\
	 & = 2\lambda x-4\lambda y+3\lambda z+b\lambda, 6\lambda x+\lambda cxyz
\end{align}
$$
Thus, for $T(\lambda v)=\lambda(Tv)$, we must have
$$
\begin{align}
2\lambda x-4\lambda y+3\lambda z+b & =2\lambda x-4\lambda y+3\lambda z+b\lambda \\
b & =b\lambda \\
b & =0 \text{ if } \lambda \neq 1
\end{align}
$$
and
$$
\begin{align}
c\lambda x\lambda y\lambda z=\lambda cxyz \\
c\lambda^{3}xyz=c\lambda xyz
\end{align}
$$
which also requires $c=0$ if $\lambda \neq 1$.

Thus, for both additivity and homogeneity, we need $b=c=0$.

> [!question] Problem 2
> Suppose $b,c\in \mathbb{R}$. Define $T:\,\mathcal{P}(\mathbb{R})\to \mathbb{R}^{2}$ by
> $$
> Tp=\left( 3p(4)+5p'(6)+bp(1)p(2), \int_{-1}^{2} x^{3}p(x) \, dx +c\sin p(0)  \right)
> $$
> Show that $T$ is linear if and only if $b=c=0$.

Let us have two polynomials $f,g\in \mathcal{P}(\mathbb{R})$. For additivity, we need to have
$$
T(f+g)=Tf+Tg
$$
The left side gives:
$$
\begin{align}
\Big ( & 3(f+g)(4)+5(f'+g')(6)+b(f(1)+g(1))( f(2)+g(2)) , \\
 & \int_{-1}^{2}x^{3}(f(x)+g(x))  \, dx +c\sin((f+g)(0))  \Big ) \\[2ex]
=\Big ( & 3f(4)+3g(4)+5f'(6)+5g'(6)+b(f(1)+g(1))( f(2)+g(2)) , \\
 & \int_{-1}^{2}x^{3}(f(x)+g(x))  \, dx +c\sin((f+g)(0))  \Big ) 
\end{align}
$$
The right side gives:
$$
\begin{align}
 & \left( 3f(4)+5f'(6)+b f(1)f(2), \int_{-1}^{2} x^{3}f(x) \, dx +c\sin f(0) \right)  \\
 & + \left( 3g(4)+5g'(6)+b g(1)g(2), \int_{-1}^{2} x^{3}g(x) \, dx +c\sin g(0) \right)  \\[2ex]
	 & =(3f(4)+3g(4)+5f'(6)+5g'(6)+b f(1)f(2)+b g(1)g(2), \\
 & \int_{-1}^{2} x^{3}f(x) \, dx + \int_{-1}^{2} x^{3}f(x) \, dx +c\sin f(0)+c\sin g(0))
\end{align}
$$
For the left and right sides to be equal, we need
$$
\begin{align}
b(f(1)+g(1))( f(2)+g(2)) & =b f(1)f(2)+b g(1)g(2) \\
b f(1)f(2)+b f(1)g(2)+b g(1)f(2)+b g(1)g(2) & =b f(1)f(2)+b g(1)g(2) \\
\therefore b & =0
\end{align}
$$
We also need
$$
\begin{align}
c\sin((f+g)(0)) & =c\sin f(0)+c\sin g(0) \\
c\sin(f(0)+g(0)) & =c\sin f(0)+c\sin g(0) \\
\therefore c & =0 \,\text{ is the only universal solution}
\end{align}
$$
We can also check homogeneity
$$
T(\lambda f)=\lambda (Tf)
$$
The left side gives:
$$
\left( 3\lambda p(4)+5\lambda p'(6)+b\lambda p(1)\lambda p(2), \int_{-1}^{2}x^{3}\lambda p(x)  \, dx  +c\sin \lambda p(0) \right)
$$
The right side gives:
$$
\lambda\left( 3p(4)+5p'(6)+bp(1)p(2),\int_{-1}^{2} x^{3}p(x) \, dx+c\sin p(0)  \right)
$$
Then, we have
$$
\begin{align}
b\lambda p(1) \lambda p(2) & = \lambda bp(1)p(2) \\
b\lambda^{2}p(1)p(2) & =\lambda bp(1)p(2)
\end{align}
$$
so the only solution is for all $\lambda$ is $b=0$.

And we also have
$$
c\sin \lambda p(0)=\lambda c\sin p(0)
$$
which is also only true for all $\lambda$ is $c=0$.


> [!question] Problem 3
> Suppose that $T\in \mathcal{L}(\mathbb{F}^{n}, \mathbb{F}^{m})$. Show that there exist scalars $A_{j,k}\in \mathbb{F}$ for $j=1,\dots,m$ and $k=1, \dots,n$ such that
> $$
> T(x_{1}, \dots, x_{n})=(A_{1,1}x_{1}+\dots+A_{1,n}x_{n},\dots,A_{m,1}x_{1}+\dots+A_{m,n}x_{n})
> $$
> for every $(x_{1}, \dots,x_{n})\in \mathbb{F}^{n}$.

Note that this problem shows the 2nd last example from [[Linear Map]].

We first determine $T$ using its action on the standard basis vectors of $\mathbb{F}^{n}$, denoted as $e_{1},e_{2}, \dots,e_{n}$, where $e_{k}$ is the vector with a $1$ in the $k$-th position and $0$ elsewhere. For each $k\in \{ 1,, \dots,n \}$, the transformation of $e_{k}$ by $T$ is a vector in $\mathbb{F}^{m}$, denoted as
$$
T(e_{k})=(A_{1,k}, A_{2,k}, \dots, A_{m,k})\in  \mathbb{F}^{m}
$$
where $A_{j,k}\in \mathbb{F}$ for each $j=1, \dots,m$.

We can write an arbitrary vector $(x_{1}, \dots,x_{n})\in \mathbb{F}^{n}$ as a linear combination of the basis vectors $e_{1}, \dots,e_{n}$:
$$
(x_{1}, \dots, x_{n})=x_{1}e_{1}+\dots+x_{n}e_{n}
$$
By linearity of $T$, we have
$$
T(x_{1}e_{1}+\dots+x_{n}e_{n})=x_{1}T(e_{1})+\dots+x_{n}T(e_{n})
$$
Substituting $T(e_{k})=(A_{1,k}, A_{2,k}, \dots, A_{m,k})$, we have
$$
T(x_{1}, \dots, x_{n})=x_{1}(A_{1,1},\dots,A_{m,1})+\dots+x_{n}(A_{1,n} , \dots, A_{m,n})
$$
If we consider the $j$-th component of $T(x_{1}, \dots,x_{n})$, we have
$$
x_{1}A_{j,1}+x_{2}A_{j,2}+\dots+x_{n}A_{j,n}
$$
Thus, we have
$$
T(x_{1}, \dots, x_{n})=(A_{1,1}x_{1}+\dots+A_{1,n}x_{n},\dots,A_{m,1}x_{1}+\dots+A_{m,n}x_{n})
$$

We can look at an example of $T:\mathbb{F}^{3}\to \mathbb{F}^{2}$ so that $T$ takes vectors from $\mathbb{F}^{3}$ of the form $(x_{1},x_{2},x_{3})$ and maps them to vectors from $\mathbb{F}^{2}$ of the form $(y_{1},y_{2})$.

We'll define $T$ by specifying how it acts on the basis standard vectors of $\mathbb{F}^{3}$, $e_{1}=(1,0,0)$, $e_{2}=(0,1,0)$, and $e_{3}=(0,0,1)$:
$$
\begin{align}
T(e_{1})=(1,2) \\
T(e_{2})=(3,4) \\
T(e_{3})=(5,6)
\end{align}
$$
For a general vector $(x_{1},x_{2},x_{3})\in \mathbb{F}^{3}$, we can have:
$$
\begin{align}
(x_{1},x_{2},x_{3}) & =x_{1}e_{1}+x_{2}e_{2}+x_{3}e_{3} \\
T(x_{1},x_{2},x_{3}) & =x_{1}T(e_{1})+x_{2}T(e_{2})+x_{3}T(e_{3}) \\
 & =x_{1}(1,2)+x_{2}(3,4)+x_{3}(5,6)
\end{align}
$$
Now we can compute the two components corresponding to $\mathbb{F}^{2}$
- First component:
$$
x_{1}(1)+x_{2}(3)+x_{3}(5)=x_{1}+3x_{2}+5x_{3}
$$
- Second component:
$$
x_{1}(2)+x_{2}(4)+x_{3}(6)=2x_{1}+4x_{2}+6x_{3}
$$
Here, the scalars $A_{j,k}$ are
- $A_{1,1}=1, A_{1,2}=3, A_{1,3}=5$
- $A_{2,1}=2, A_{2,2}=4, A_{2,3}=6$

So:
$$
\begin{align}
T(x_{1},x_{2},x_{3}) & =(A_{1,1}x_{1}+A_{1,2}x_{2}+A_{1,3}x_{3},A_{2,1}x_{1}+A_{2,2}x_{2}+A_{2,3}x_{3}) \\
T(1,2,3) & =(1(1)+3(2)+5(3),2(1)+4(2)+6(3))=(22,32)
\end{align}
$$

> [!question] Problem 4
> Suppose $T\in \mathcal{L}(V,W)$ and $v_{1}, \dots,v_{m}$ is a list of vectors in $V$ such that $Tv_{1}, \dots,Tv_{m}$ is a linearly independent list in $W$. Prove that $v_{1}, \dots,v_{m}$ is linearly independent.



> [!question] Problem 5
> Prove that $\mathcal{L}(V,W)$ is a vector space.



> [!question] Problem 6
> Prove that multiplication of linear maps has the associative, identity, and distributive properties.



> [!question] Problem 7
> Show that every linear map from a one-dimensional vector space to itself is multiplication by some scalar. More precisely, prove that if $\dim V=1$ and $T\in \mathcal{L}(V)$, then there exists $\lambda \in \mathbb{F}$ such that $Tv=\lambda v$ for all $v\in V$.



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


