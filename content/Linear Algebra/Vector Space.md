---
title: Vector Space
tags:
  - lin-alg
  - math
date: 2024-08-15
aliases:
  - vector space
---
A vector space is a set $V$ along with an addition on $V$ and a scalar multiplication on $V$ such that the following properties hold.
- **Commutativity:** $u+v=v+u$ for all $u,v\in V$.
- **Associativity:** $(u+v)+w=u+(v+w)$ and $(ab)v=a(bv)$ for all $u,v,w \in V$ and for all $a,b \in \mathbb{F}$.
- **Additive Identity:** There exists an element $0\in V$ such that $v+0=v$ for $v\in V$.
- **Additive Inverse:** For every $v\in V$, there exists $w\in V$ such that $v+w=0$.
- **Multiplicative Identity:** $1v=v$ for all $v\in V$.
- **Distributive Properties:** $a(u+v)=au+av$ and $(a+b)v=av+bv$ for all $a,b\in \mathbb{F}$ and all $u,v\in V$.

To avoid re-stating this many times, we declare that $V$ denotes a vector space over $\mathbb{F}$.

> [!definition] Definitions: Addition, Scalar Multiplication
> - An addition on a set $V$ is a function that assigns an element $u+v\in V$ to each pair of elements $u,v\in V$.
> - A scalar multiplication on a set $V$ is a function that assigns an element $\lambda v\in V$ to each $\lambda \in \mathbb{F}$ and each $v\in V$.
> 

We can use some geometric language to aid our intuition by saying that elements of a vector space are called *vectors* or *points*.

The scalar multiplication in a vector space depends on $\mathbb{F}$. Thus when we need to be precise, we will say that $V$ is a vector space over $\mathbb{F}$ instead of saying simply that $V$ is a vector space. For example, $\mathbb{R}^{n}$ is a vector space over $\mathbb{R}$, and $\mathbb{C}$ is a vector space over $\mathbb{C}^{n}$.
- Note that vectors in $V$ and scalars in $\mathbb{F}$ can belong to different sets; the vectors do not need to be elements of the scalar field. For example, in Problem 7 of [[LADR Exercises 2A]], we see the $\mathbb{C}$ defined as a vector space over $\mathbb{R}$. In this case, complex numbers are vectors while real numbers are scalars. The closure of vector addition still applies, as the sum of any two complex numbers is a complex number. The closure of scalar multiplication still applies, as multiplying a complex number by a real number yields another complex number.

Usually the choice of $\mathbb{F}$ is either clear from the context or irrelevant. Thus we often assume that $\mathbb{F}$ is lurking in the background without specifically mentioning it. With the usual operations of addition and scalar multiplication, $\mathbb{F^{n}}$ is a vector space over $\mathbb{F}$, as you should verify. The example of $\mathbb{F}^{n}$ ([[n-dimensional Spaces|see here]]) motivated our definition of vector space.

The simplest vector space is $\{ 0 \}$, which contains only one point.

## Elementary Properties
We need to develop some of the elementary properties of vector spaces.
### Unique Additive Identity
A vector space has a unique additive identity.

*Proof.* Suppose $0$ and $0'$ are both additive identities for some vector space $V$. Then
$$
0'=0'+0=0+0'=0
$$
where the first equality holds because $0$ is the additive identity, the second equality comes from commutativity, and the third equality holds because $0'$ is an additive identity. Thus, $0=0'$, showing that $V$ only has one additive identity.

### Unique Additive Inverse
Every element in a vector space has a has a unique additive inverse.

*Proof.* Suppose $V$ is a vector space. Let $v \in V$. Suppose $w$ and $w'$ are additive inverses of $v$. Then
$$
w=w+0=w+(v+w')=(w+v)+w'=0+w'=w'
$$
Thus $w=w'$ as desired.

Then we can use the following notation for $v,w\in V$:
- $-v$ denotes the additive inverse of $v$;
- $w-v$ is defined to be $w+(-v)$.

### Multiplication by Scalar 0
When we multiply a vector by the number zero, we have $0v=0$ for every $v\in V$.

*Proof*. For $v\in V$, we have:
$$
0v=(0+0)v=0v+0v
$$
Adding the additive inverse of both sides gives:
$$
0=0v
$$
as desired.

### Multiplication by Vector 0
When we multiply a scalar by a vector $0$, we have $a0=0$ for every $a\in \mathbb{F}$. Here, $0$ denotes the additive identity of $V$, not scalar $0$.

*Proof.* For $a\in \mathbb{F}$, we have
$$
a 0=a(0+0)=a0+a0
$$
Adding the additive inverse of $a0$ to both sides of the equation above gives $0 = a0$, as desired.

### Multiplication by -1
Multiplying a vector by $-1$ gives $(-1)v=-v$ for every $v\in V$.

*Proof.* For $v\in V$, we have
$$
v+(-1v)=1v+(-1)v=(1+(-1))v=0v=0
$$
This tells us that $(-1)v$, when added to $v$, gives $0$. Thus, $(-1)v$ is the additive inverse of $v$, as desired.