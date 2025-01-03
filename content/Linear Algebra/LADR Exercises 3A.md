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

If $v_{1}, \dots,v_{m}$ are not linearly independent, there exist some $a_{1}, \dots,a_{m}$ that are not all $0$, such that
$$
a_{1}v_{1}+\dots+a_{m}v_{m}=0
$$
Applying the linear map to both sides:
$$
\begin{align}
T(a_{1}v_{1}+\dots+a_{m}v_{m}) & =	T(0) \\
T(a_{1}v_{1}+\dots+a_{m}v_{m}) & =0 \\
T(a_{1}v_{1})+\dots+T(a_{m}v_{m}) & =0 \\
	a_{1}T(v_{1})+\dots+a_{m}T(v_{m})  & =0\\
\end{align}
$$
Note that $T(0)=0$ because [[Linear Maps Take 0 to 0|linear maps take 0 to 0]]. 

The last line implies that $Tv_{1}, \dots,Tv_{m}$ is not linearly independent, since we are using some $a_{1}, \dots,a_{m}$ that are not all $0$. This presents a contradiction. Thus, $v_{1}, \dots,v_{m}$ must be linearly independent.

This basically says that, by the linearity of the transformation $T$, if $v_{1}, \dots,v_{m}$ are linearly independent, so must $Tv_{1}, \dots,Tv_{m}$ and vice versa.

> [!question] Problem 5
> Prove that $\mathcal{L}(V,W)$ is a vector space.

Recall that for a vector space, we need to show a zero element, closure under addition, and closure under scalar multiplication. Specifically, for these three operations, we verify that the result is still a linear map (for example, the addition of two linear maps must still be a linear map).

We can define a zero map $0:V\to W$ by:
$$
0(v)=0_{W} \,\,\,\forall v\in  V
$$
where $0_{W}$ is the zero vector in $W$. The zero map is linear because is satisfies:
- Additivity: $0(u+w)=0(u)+0(v)=0_{W}+0_{W}=0_{W}$
- Homogeneity: $0(cv)=0_{W}=c 0(v)=c\cdot 0_{W}=c \cdot 0(v)$

For closure under addition, let $T_{1},T_{2}\in \mathcal{L}(V,W)$. Define $(T_{1}+T_{2}):V\to W$ by:
$$
(T_{1}+T_{2})(v)=T_{1}(v)+T_{2}(v), \quad \forall  v \in  V
$$
Checking the linearity of $T_{1}+T_{2}$:
- Additivity:
$$
\begin{align}
(T_{1}+T_{2})(u+v) & =T_{1}(u+v)+T_{2}(u+v) \\
 & =T_{1}(u)+T_{1}(v)+T_{2}(u)+T_{2}(v) \\
 & =(T_{1}+T_{2})u+(T_{1}+T_{2})v
\end{align}
$$
- Homogeneity:
$$
\begin{align}
(T_{1}+T_{2})(\lambda v) & =T_{1}(\lambda v)+T_{2}(\lambda v) \\
	 & = \lambda T_{1}(v)+ \lambda T_{2}(v) \\
	 & =\lambda(T_{1}(v)+T_{2}(v)) \\
	 & =\lambda(T_{1}+T_{2})(v)
\end{align}
$$
Therefore, $T_{1}+T_{2}\in \mathcal{L}(V,W)$, showing closure under addition. 

For closure under scalar multiplication, let $T\in \mathcal{L}(V,W)$, and define $\lambda T$ by:
$$
(\lambda T)(v)= \lambda T(v),\quad \forall  v \in  V, \quad c \in  \mathbb{F}
$$
Checking for linearity:
- Additivity:
$$
\begin{align}
(\lambda T)(u+v) & =\lambda T(u+v) \\
	 & =\lambda(T(u)+T(v)) \\
	 & =\lambda T(u)+\lambda T(v) \\
	 & =(\lambda T)(u)+(\lambda T)(v)
\end{align}
$$
- Homogeneity:
$$
\begin{align}
(\lambda T)(\alpha v)=\lambda T(\alpha v)=\lambda (\alpha T(v))=(\lambda \alpha)T(v)=\alpha(\lambda T)(v)
\end{align}
$$
Thus, $\lambda T\in \mathcal{L}(V,W)$, confirming closure under scalar multiplication.

Since we've shown zero element, closure under addition, and closure under scalar multiplication, we've shown that $\mathcal{L}(V,W)$ is a vector space.


> [!question] Problem 6
> Prove that multiplication of linear maps has the associative, identity, and distributive properties.

Associativity:
$$
\begin{align}
((T_{1}T_{2})T_{3})(v) & =(T_{1}T_{2})(T_{3}(v)) \\
	 & =T_{1}(T_{2}(T_{3}(v))) \\
	 & =T_{1}((T_{2}T_{3})(v)) \\
	 & =(T_{1}(T_{2}T_{3}))(v)
\end{align}
$$
Identity:
$$
(IT)(v)=I(T(v))=T(v)
$$
and
$$
(TI)(v)=T(I(v))=T(v)
$$

Distributive properties:
$$
\begin{align}
((S_{1}+S_{2})T)(v) & =(S_{1}+S_{2})(T(v)) \\
	 & = S_{1}(T(v))+S_{2}(T(v)) \\
	 & = (S_{1}T)(v)+ (S_{2}T)(v) \\
	 & =(S_{1}T+S_{2}T)(v)
\end{align}
$$
and
$$
\begin{align}
(S(T_{1}+T_{2}))(v) & =S((T_{1}+T_{2})(v)) \\
	 & =S(T_{1}(v)+T_{2}(v)) \\
	 & =S(T_{1}(v))+S(T_{2}(v)) \\
	 & =(ST_{1})(v)+(ST_{2})(v) \\
	 & =(ST_{1}+ST_{2})(v)
\end{align}
$$


> [!question] Problem 7
> Show that every linear map from a one-dimensional vector space to itself is multiplication by some scalar. More precisely, prove that if $\dim V=1$ and $T\in \mathcal{L}(V)$, then there exists $\lambda \in \mathbb{F}$ such that $Tv=\lambda v$ for all $v\in V$.

Since $\dim V=1$, there is some $v_{1}\in V$ that is a basis of $V$. Because $Tv_{1} \in V$, there exists some $\lambda \in \mathbb{F}$ such that $Tv_{1}=\lambda v_{1}$.

Since $v_{1}$ is a basis every $v\in V$, there exists some $a\in \mathbb{F}$ such that $v=av_{1}$. This implies that
$$
Tv=T(av_{1})=aTv_{1}=a \lambda v_{1}=\lambda av_{1}=\lambda v
$$

> [!question] Problem 8
> Give an example of a function $\phi: \,\mathbb{R}^{2}\to \mathbb{R}$ such that
> $$
> \phi(av)=a\phi(v)
> $$
> for all $a \in \mathbb{R}$ and all $v\in \mathbb{R}^{2}$ but $\phi$ is not linear.

For $v=(v_{1},v_{2}) \in \mathbb{R}^{2}$, let
$$
\phi(v)=\begin{cases}
\frac{v_{1}^{2}}{v_{2}},  &  v_{2}\neq 0 \\
0, & v_{2}=0
\end{cases}
$$
We can show that



> [!question] Problem 9
> Give an example of a function $\phi:\, \mathbb{C}\to \mathbb{C}$ such that
> $$
> \phi(w+z)=\phi(w)+\phi(z)
> $$ 
> for all $w,z \in  \mathbb{C}$ but $\phi$ is not linear. (Here $\mathbb{C}$ is thought of as a complex vector space.)






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


