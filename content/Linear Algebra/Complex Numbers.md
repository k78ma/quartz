---
title: Complex Numbers
tags:
  - lin-alg
date: 2024-07-08
aliases:
  - complex numbers
---
Complex numbers were invented so that we can take square roots of negative numbers. The idea is to assume that we have a square root of $-1$, denoted by $i$, that obeys the rules of arithmetic. We have:
$$
i^{2}=-1
$$

> [!definition] **Definition:** Complex Numbers, $\mathbb{C}$
>- A *complex number* is an ordered pair $(a,b)$ where $a,b\in\mathbb{R}$, but we write it as $a+bi$.
>- The set of all complex numbers is denoted by $\mathbb{C}$:
>$$
>\mathbb{C}=\{ a+bi:a,b \in \mathbb{R} \}
>$$
>- Addition and multiplication on $\mathbb{C}$ are defined by:
>$$
>\begin{align}
>(a+bi)+(c+di) =(a+c)+(b+d)i\\
>(a+bi)(c+di) =(ac-bd)+(ad+bc)i
>\end{align}
>$$

If $a\in \mathbb{R}$, we identify $a=a+0i$. Thus, $\mathbb{R}$ is a subset of $\mathbb{C}$.

## Properties
Properties of complex arithmetic:
- **Commutativity:** $\alpha+\beta=\beta+\alpha$ and $\alpha \beta=\beta \alpha$ for all $\alpha,\beta \in\mathbb{C}$
- **Identities:** $\lambda+0=\lambda$ and $\lambda1=\lambda$ for all $\lambda \in \mathbb{C}$
- **Additive inverse:** For every $\alpha \in \mathbb{C}$, there exists a unique $\beta \in \mathbb{C}$ such that $\alpha+\beta=0$
- **Multiplicative inverse:** For every $\alpha \in \mathbb{C}$ with $\alpha \neq 0$, there exists a unique $\beta \in \mathbb{C}$ such that $\alpha \beta=1$
- **Distributive property:** $\lambda(\alpha+\beta)=\lambda \alpha+\lambda \beta$ for all $\lambda, \alpha,\beta \in \mathbb{C}$

### Subtraction and Divsion
We can use the additive and multiplicative inverses to define subtraction and division operations with complex numbers.

Suppose $\alpha,\beta \in \mathbb{C}$.
- Let $-\alpha$ denote the additive inverse of $\alpha$. Thus, $-\alpha$ is the unique complex number such that $\alpha+(-\alpha)=0$.
- Subtraction on $\mathbb{C}$ is defined by
$$
\beta-\alpha=\beta+(-\alpha)
$$
- For $\alpha \neq 0$, let $1 / \alpha$ and $\frac{1}{\alpha}$ define the multiplicative inverse of $\alpha$. Thus, $1 / \alpha$ is the unique complex number such that $\alpha(1 / \alpha)=1$.
- For $\alpha \neq 0$, division by $\alpha$ is defined by
$$
\frac{\beta}{\alpha}=\beta\left( \frac{1}{\alpha} \right)
$$
## $\mathbb{F}_{n}$
So that we can conveniently make definitions and prove theorems that apply to both real and complex numbers, we adopt the notation of $\mathbb{F}$, which stands for either $\mathbb{R}$ or $\mathbb{C}$. The letter $\mathbb{F}$ is used because $\mathbb{R}$ and $\mathbb{C}$ are examples of [[Fields|fields]].

Thus, if we prove a theorem involving $\mathbb{F}$, we will know that it holds when $\mathbb{F}$ is replaced by $\mathbb{R}$, and when $\mathbb{F}$ is replaced with $\mathbb{C}$. 

Elements of $\mathbb{F}$ are called *scalars*. Scalar objects are numerical values, as opposed to [[vectors]].

For $\alpha \in \mathbb{F}$ and a positive integer $m$, we define $\alpha^{m}$ to denote the product of 𝛼 with itself $m$ times:
$$
\alpha^{m}=\alpha \underbrace{ \cdot \cdot \cdot  }_{ m \text{ times} } \alpha
$$
This implies that
$$
(\alpha^{m})^{n}=\alpha^{mn} \quad \text{and} \quad (\alpha \beta)^{m}=\alpha^{m}\beta^{m}
$$
for all $\alpha,\beta \in \mathbb{F}$ and all positive integers $m$, $n$.