---
title: Universal Approximation Theorem
tags:
  - ml
date: 2023-12-29
aliases:
---
The universal approximation theorem states that for any continuous function, there exists a shallow network that can approximate this function to any specified precision.

Let's say we have a shallow neural network of the form:
$$
y = \phi_{0}+\phi_{1}h_{1} + \dots+\phi_{n}h_{n}
$$
where $d$-th **hidden unit** $h_{d}$ is:
$$
h_{d}=a[\theta_{d_{0}}+\theta_{d_{1}}x]
$$
where $a$ is an activation function such as [[Rectifier Circuits|ReLU]]. We can then write the neural network as:
$$
y = \phi_{0} + \sum_{d=1}^{D}\phi_{d}h_{d}
$$
The number of hidden units in a shallow network is a measure of the network capacity. 

With ReLU activation functions, the output of a network with $D$ hidden units has at most D “joints” and so is a piecewise linear function with at most $D+1$ linear regions：

![[Universal Approximation Theorem.png|472]]

As we add more hidden units, the model can approximate more complex functions. With enough capacity (more hidden units), a shallow network can describe any continuous 1D function defined on a compact subset of the real line to arbitrary precision. 

To see this, consider that every time we add a hidden unit, we add another linear region to the function. More regions means that each represents smaller sections of the function, which in turn means a better approximation.

![[Universal Approximation Theorem-1.png]]

Why would we ever need a neural network with more than one hidden layer? The theorem guarantees existence, but no claims about the scaling of $N$ (the number of hidden neurons) as a function of $\epsilon$, the desired approximation error. $N$ might grow exponentially as $\epsilon$ get smaller.

## Width Version
The *width* version of this theorem states that there exists a network with one hidden layer containing a finite number of hidden units that can approximate any specified continuous function on a compact subset of $\mathbb{R}^{n}$ to arbitrary accuracy.  

## Depth Version
There exist a network with ReLU activation functions and at least $D_{i}+4$ hidden units in each layer that can approximate any $D_{i}$-dimensional Lebesgue integrable function to arbitrary accuracy given enough layers. This was shown in [[1709.02540] The Expressive Power of Neural Networks: A View from the Width](https://arxiv.org/abs/1709.02540).

This is known as the depth version of the universal approximation theorem.

## Formalization

> [!theorem] Universal Approximation Theorem
> Let $\sigma$ be any continuous sigmoidal function. The finite sums of the form
> $$
> G(x) = \sum_{j=1}^{N} \alpha_{j}\sigma(\omega_{j}x+\theta_{j})
> $$
> - ($w_{j}, \alpha_{j}$ are weights and $\theta_{j}$ are biases)
>   
> are dense in $C(I_{n})$ (continuous functions in domain $I_{n}$).
> 
 In other words, given any $f \in C(I_{n})$ and $\epsilon>0$, there is a sum $G(s)$, of the above form, for which
> $$
> \left| G(x)-f(x) \right|  < \epsilon \quad  \text{for all } x \in I_{n}
> $$
> In this example, $I_{n} = [0,1]^{n}$. It just needs to be a compact domain.

> [!def] Sigmoidal function
> A function $\sigma$ is "sigmoidal" if
> $$
> \sigma(x)=\begin{cases}
> 1  & \text{as }x\to \infty\\
> 0 & \text{as } x\to-\infty
> \end{cases}
> $$

### Informal Proof
Suppose we let $\omega_{j} \to \infty$ for $j=1,\dots,N$, then
$$
\sigma(\omega_{j}x)  \longrightarrow   \begin{cases}
0 & \text{for } x\leq 0 \\
1 & \text{for } x > 0
\end{cases}
$$
![[Universal Approximation Theorem-1768420529728.webp|412x340]]

By shifting the $x$-axis by $b_{j}$, we get
$$
\sigma(\omega_{j}(x-b_{j}))  \longrightarrow \begin{cases}
0  & \text{for } x \leq b_{j},\\
1 & \text{for } x>b_{j}
\end{cases} 
$$

![[Universal Approximation Theorem-1768420657832.webp|422x326]]

Within this limit, we obtain the Heaviside step function:
$$
H(x)=\lim_{ \omega_{j} \to \infty } \sigma(\omega_{j}x)
$$
Let us define
$$
H(x;b)=\lim_{ \omega \to \infty } \sigma(\omega(x-b))
$$
We can use two such functions to create a horizontal piece:
$$
P(x;b,\delta)=H(x;b)-H(x;b+\delta)
$$
where $P$ is made from sigmoidal functions:

![[Universal Approximation Theorem-1768420843227.webp|440x182]]

The piece function $P(x;b,\delta)$ is defined as

![[Universal Approximation Theorem-1768420866233.webp|444x184]]

Since $f(x)$ is continuous,
$$
\lim_{ x \to a } f(x)=f(a), \quad \,\, \forall \, a \in  I_{n}
$$
Therefore, $\exists$ an interval, $(a_{j}, a_{j}+\Delta x)$, such that
$$
\left| f(x)-f(a_{j}) \right| <\epsilon, \quad \,\, \forall \, x \in  (a_{j}, a_{j}+\Delta x)
$$

![[Universal Approximation Theorem-1768421003622.webp|454x287]]

As a result, the function
$$
G(x)=\sum_{j=1}^{N'} f(a_{j})P(x;b_{j}, \delta_{j})
$$
satisfies the constraint
$$
\left| G(x)-f(x) \right| < \epsilon \quad \text{ for all }x \in  I_{n}
$$
Here, $N'$ is the number of subintervals. $G(x)$ can also be written in terms of threshold functions (which can be approximated by sigmoids) as:
$$
G(x)= \sum_{j=1}^{N'}f(a_{j})(H(x;b_{j})-H(x;b_{j}+\delta_{j}))
$$
Thus, the total number of hidden neurons required to construct $G(x)$ is $N=2N'$.

![[Universal Approximation Theorem-1768421242188.webp|516x393]]

Instead of using sigmoid, we can do ReLU, etc. The proof would be different but in theory the result should be the same.