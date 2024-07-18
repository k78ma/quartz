---
title: LADR Exercises 1A
tags:
  - lin-alg
date: 2024-07-17
aliases:
  - ladr exercises 1a
---
>[!question] Problem 1
>Show that $\alpha+\beta=\beta+\alpha$ for all $\alpha,\beta \in \mathbb{C}$.

*Proof.* Let $\alpha=a+bi$, $\beta=c+di$ for $a, b, c, d \in \mathbb{R}$. Then, we have:
$$
\begin{align}
\alpha+\beta & =(a+bi)+(c+di) \\
	 & =(a+c)+(b+d)i
\end{align}
$$
And also:
$$
\begin{align}
\beta+\alpha & =(c+di)+(a+bi) \\
	 & =(a+c)+(d+b)i
\end{align}
$$
Since addition of real numbers is commutative, we have $a+c=c+a$ and $b+d=d+b$, so
$$
\begin{align}
(a+c)+(b+d)i & =(c+a)+(d+b)i \\
\alpha+\beta & =\beta+\alpha
\end{align}
$$
as desired.

>[!question] Problem 2
>Show that $(\alpha+\beta)+\lambda=\alpha+(\beta+\lambda)$ for all $\alpha,\beta, \lambda \in \mathbb{C}$.

*Proof.* Let $\alpha=a_{1}+a_{2}i$, $b=b_{1}+b_{2}i$, and $\lambda=c_{1}+c_{2}i$, for $a_{k}, b_{k}, c_{k}\in \mathbb{R}$. Then:
$$
\begin{align}
(\alpha+\beta)+\lambda & =[(a_{1}+a_{2}i)+(b_{1}+b_{2}i)]+(c_{1}+c_{2}i) \\
	 & =[(a_{1}+b_{1})+(a_{2}+b_{2})i]+(c_{1}+c_{2}i) \\
	 &=[(a_{1}+b_{1})+c_{1}]+[(a_{2}+b_{2})+c_{2}]i \\
	 & =[a_{1}+(b_{1}+c_{1})]+[a_{2}+(b_{2}+c_{2})]i \\
	 & =(a_{1}+a_{2}i)+[(b_{1}+c_{1})+(b_{2}+c_{2})i] \\
	 & =(a_{1}+a_{2}i)+[(b_{1}+b_{2}i)+(c_{1}+c_{2})i] \\
	 & =\alpha+(\beta+\lambda)
\end{align}
$$
as desired.

>[!question] Problem 3
>Show that $(\alpha \beta)\lambda=\alpha(\beta \lambda)$ for all $\alpha,\beta, \lambda \in \mathbb{C}$.

This proof feels clumsy. Maybe there's a better way to do this?

*Proof.* Let $\alpha=a_{1}+a_{2}i$, $b=b_{1}+b_{2}i$, and $\lambda=c_{1}+c_{2}i$, for $a_{k}, b_{k}, c_{k}\in \mathbb{R}$. Then:
$$
\begin{align}
\alpha \beta & =(a_{1}+a_{2}i)(b_{1}+b_{2}i) \\
	 & =a_{1}b_{1}+a_{1}b_{2}i+a_{2}b_{1}i+a_{2}b_{2}i^{2} \\
	 & =(a_{1}b_{1}-a_{2}b_{2})+(a_{1}b_{2}+a_{2}b_{1})i \\
	 & =x+yi
\end{align}
$$
where $x=a_{1}b_{1}-a_{2}b_{2}$, $y=a_{1}b_{2}+a_{2}b_{1}$. Then, $(\alpha \beta)\lambda$ is:
$$
\begin{align}
\alpha \beta(\lambda) & =(x+yi)(c_{1}+c_{2}i) \\
	 & =xc_{1}+xc_{2}i+yc_{1}i+yc_{2}i^{2} \\
	 & = (xc_{1}-yc_{2})+(xc_{2}+yc_{1})i
\end{align}
$$
For $\beta \lambda$, we have:
$$
\begin{align}
\beta \lambda & =(b_{1}+b_{2}i)(c_{1}+c_{2}i) \\
	 & =b_{1}c_{1}+b_{1}c_{2}i+b_{2}c_{1}i+b_{2}c_{2}i^{2} \\
	 & =(b_{1}c_{1}-b_{2}c_{2})+(b_{1}c_{2}+b_{2}c_{1})i \\
	 & =p+qi
\end{align}
$$
where $p=b_{1}c_{1}-b_{2}c_{2}$, $q=b_{1}c_{2}+b_{2}c_{1}$. Then, $\alpha(\beta \lambda)$ is:
$$
\begin{align}
\alpha(\beta \lambda) & =(a_{1}+a_{2}i)(p+qi) \\
	 & =a_{1}p+a_{1}qi+a_{2}pi+a_{2}qi^{2} \\
	 & =(a_{1}p-a_{2}q)+(a_{1}q+a_{2}p)i
\end{align}
$$
Expanding our simplifications:
$$
\begin{align}
\alpha \beta(\lambda) & = (xc_{1}-yc_{2})+(xc_{2}+yc_{1})i \\
	 & =(a_{1}b_{1}c_{1}-a_{2}b_{2}c_{1}-a_{1}b_{2}c_{2}-a_{2}b_{1}c_{2})+(a_{1}b_{1}c_{2}-a_{2}b_{2}c_{2}+a_{1}b_{2}c_{1}+a_{2}b_{1}c_{1})i
\end{align}
$$
and
$$
\begin{align}
\alpha(\beta \lambda)& =(a_{1}p-a_{2}q)+(a_{1}q+a_{2}p)i \\
	 & =(a_{1}b_{1}c_{1}-a_{1}b_{2}c_{2}-a_{2}b_{1}c_{2}-a_{2}b_{2}c_{1})+(a_{1}b_{1}c_{2}+a_{1}b_{2}c_{1}+a_{2}b_{1}c_{1}-a_{2}b_{2}c_{2})i \\
	 & =(a_{1}b_{1}c_{1}-a_{2}b_{2}c_{1}-a_{1}b_{2}c_{2}-a_{2}b_{1}c_{2})+(a_{1}b_{1}c_{2}-a_{2}b_{2}c_{2}+a_{1}b_{2}c_{1}+a_{2}b_{1}c_{1})i \\
	 & =a(\beta \lambda)
\end{align}
$$
as desired.

>[!question] Problem 4
>Show that $\lambda+(\alpha+\beta)=\lambda \alpha+\lambda \beta$ for all $\alpha,\beta, \lambda \in \mathbb{C}$.







>[!question] Problem 5
>Show that for every $\alpha \in \mathbb{C}$, there exists a unique $\beta \in \mathbb{C}$ such that $\alpha+\beta=0$.

*Proof*. Let $\alpha=a_{1}+a_{2}i$, where $a_{k}\in \mathbb{R}$, and $\beta=-a_{1}-a_{2}i$. Then, we have:
$$
\begin{align}
\alpha+\beta & =(a_{1}+a_{2}i)+(-a_{1}-a_{2}i) \\
	 & =(a_{1}-a_{1})+(a_{2}-a_{2})i \\
	 & =0+0i \\
	 & =0
\end{align}
$$
which proves existence. To show that $\beta$ is unique, suppose $\lambda \in \mathbb{C}$ such that $\alpha+\lambda=0$. Then:
$$
\begin{align}
\lambda & =\lambda+(\alpha+\beta) \\
 & =(\lambda+\alpha)+\beta \\
 & =0+\beta \\
	 & = \beta
\end{align}
$$
and thus $\beta$ is unique.

>[!question] Problem 6
>Show that for every $\alpha \in \mathbb{C}$ with $\alpha \neq 0$, there exists a unique $\beta \in \mathbb{C}$ such that $\alpha \beta=1$.






>[!question] Problem 7
>Show that
>$$
>\frac{-1+\sqrt{ 3 }i}{2}
>$$
>is a cube root of $1$ (meaning its cube equals $1$).




>[!question] Problem 8
>Find two distinct square roots of $i$.




>[!question] Problem 9
>Find $x \in \mathbb{R}^{4}$ such that
>$$
>(4,-3, 1,7)+2x=(5,9, -6, 8)
>$$




>[!question] Problem 11
>Show that for every $(x+y)+z=x+(y+z)$ for all $x,y,z \in \mathbb{F}^{n}$.




>[!question] Problem 12
>Show that for every $(ab)x=a(bx)$ for all $x \in \mathbb{F}^{n}$ and all $a,b \in \mathbb{F}$.




>[!question] Problem 13
>Show that $1x=x$ for all $x \in \mathbb{F}^{n}$.





>[!question] Problem 14
>Show that $\lambda(x+y) =\lambda x+\lambda y$ for all $\lambda \in \mathbb{F}$ and all $x,y \in \mathbb{F}$.






>[!question] Problem 15
>Show that $(a+b)x =ax+bx$ for all $a,b \in \mathbb{F}$ and all $x \in \mathbb{F}^{n}$.