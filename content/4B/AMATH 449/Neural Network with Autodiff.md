---
title: Neural Network with Autodiff
tags:
  - amath449
date: 2026-01-27
aliases: neural network with autodiff
---
Consider a scalar function $E$ that depends on some variable $\mathbf{v}$. Suppose we want to minimize $E$ with respect to $\mathbf{v}$, i.e.
$$
\min E(\mathbf{v})
$$
We can use gradient descent:
$$
\mathbf{v} \leftarrow \mathbf{v}- \kappa \nabla_{\mathbf{v}}E(\mathbf{v})
$$
where $\nabla_{\mathbf{v}} E(\mathbf{v})$ is the gradient of $E$ with respect to $\mathbf{v}$, and $\kappa$ is the learning rate.

## Pseudocode
1. Initialize $\mathbf{v}, \kappa$.
2. Construct the expression graph for $E$.
3. Until convergence:
    1. Evaluate $E$ at $\mathbf{v}$
    2. Set gradients to zero (i.e. $\mathbf{v}$.grad = 0)
    3. Propagate derivatives down (increment $\mathbf{v}$.grad)
    4. Update $\mathbf{v} \leftarrow \mathbf{v}- \kappa \cdot \mathbf{v}$.grad

## Neural Learning
We use the same process to implement error propagation for neural networks, and we optimize with respect to the connection weights and biases.

To accomplish this, our network will be composed of a series of layers, each layer transforming the data from the layer below it, culminating in a scalar-valued cost function.

There are two types of operations in the network:
1. Multiply by connection weights (including adding biases)
2. Apply activation function

Finally, a cost function takes the output of the network, as well as the targets, and returns a scalar.

Let us consider this small network:

![[Neural Network with Autodiff-1769546970728.webp|375x213]]

Given dataset $(X,T)$:
$$
\begin{align}
A  & = \text{identity}  \\
B  & = (z\to z\cdot W)  & (\text{multiply by } W) \\
C  & = \text{logistic function}   & (\text{logistic function}) \\
D  & = \text{Cost/loss function}
\end{align}
$$
These are all functions that transform their input.

Each layer can be called like a function:
$$
\begin{align}
x & = A(X)  & \text{e.g,} \,\, A(X)=X \\[2ex]
z & = B(x) & \text{e.g.,} \,\, B(x)=x\cdot W \\[2ex]
y & =C(z) & \text{e.g.,} \,\, C(z)=\sigma(z) \\[2ex]
E & =D(y,T) & \text{e.g.,} \,\, D(T,y) = \mathbb{E}\left[ \frac{1}{2} \left| \left| y-T \right|  \right|^{2}_{2}  \right]
\end{align}
$$
Each layer, including the cost function, is just a function in a nested mathematical expression:
$$
E=D(C(B(A(X))),T)
$$
Neural learning is:
$$
W \leftarrow W - \kappa \nabla_{W}E
$$
We construct our network using objects from our AD classes (Variables and Operations) so that we can take advantage of their `backward()` methods to compute the gradients.
$$
\begin{align}
\text{net}  & = (A,B,C) \\
y  & = \text{net}(X) = C(B(A(x)))  &  \text{(Forward pass sets network state)} \\
E & = D(y,T)
\end{align}
$$

Then, we take gradient steps:
```python
E.zero_grad()
E.backward()
```


![[Neural Network with Autodiff-1769548338487.webp]]

## Matrix Autodiff
To work with neural networks, our AD library will have to deal with matrix operations. 

### Matrix Addition
Suppose our scalar function involved a matrix addition:
$$
L(y) \text{ is a scalar function, where } y=A+B, \quad  A,B \in  \mathbb{R}^{M\times N} 
$$
What is $\nabla_{A}L$ and $\nabla_{B}L$?
$$
\begin{align}
\nabla_{A}L  & = \nabla_{y}L \odot \nabla_{A}y = s \odot 1_{M\times N}  & (\text{same shape as }A) \\[2ex] 
\nabla_{B}L  &= \nabla_{y}L \odot \nabla_{B}y = s\odot 1_{M\times N} & (\text{same shape as }B)
\end{align}
$$
As we previously, within the plus operation method `+.backward(s)`, we need to call the following commands

![[Neural Network with Autodiff-1769548727512.webp|332x82]]

### Matrix Multiplication
Suppose our scalar function involved a matrix multiplication:
$$
L(\dots,A,B,\dots), \quad  y=A \ast  B, \quad  A\in  \mathbb{R}^{M\times N}, \quad  B \in  \mathbb{R}^{N\times K}, \quad  y \in  \mathbb{R}^{M\times K}
$$
Then:
$$
\begin{align}
\nabla_{A}L & = \nabla_{y}L \cdot  \nabla_{A}y = s\cdot B^{T}  &   (M\times K \cdot  K\times N \to M\times N )  \\[2ex]
\nabla_{B}L  & = \nabla_{B}y \cdot \nabla_{y}L =A^{T}\cdot s  & (N\times M \cdot M\times K \to N\times K)
\end{align}
$$

