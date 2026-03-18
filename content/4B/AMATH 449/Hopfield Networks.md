---
title: Hopfield Networks
tags:
  - amath449
date: 2026-02-28
aliases: hopfield networks
---
## Content-Addressable Memory
A CAM is a system that can take part of a pattern, and produce the most likely match from memory. A CAM for instance would be able to interpret these:
```
intel__gent 
nueroscience 
War+++loo 
pa$sv0rd 
1,3, ,7, ,1
```

A CAM system can find an input's closest match to a set of known patterns. It retrieves data by directly comparing input queries with stored memory locations. Hopfield networks mimic the behavior of CAM in a biologically inspired way using neural networks.

## Hopfield Networks
Suppose we have a network of $N$ neurons, each connected to all the others. We want this network to converge to the nearest of a set of $M$ targets or inputs.

![[Hopfield Networks-1772318049339.webp|231x219]]

The stored targets are a set of $M$ binary patterns, each of length $N$:
$$
\begin{align}
X  & = \{ \vec{x}^{(s)} \in \{ -1, 1 \}^{N} \, | \, s = 1, \dots, M\} \\[2ex] 
\end{align}
$$
where the $i$th component is calculated using the weights and biases as:
$$
x_{i}  = \begin{cases}
-1  &  \text{if } (\vec{x}W)_{i}+b_{i} < 0 \\
1  & \text{if } (\vec{x}W)_{i} + b_{i} \geq 0
\end{cases}
$$

![[Hopfield Networks-1772318075515.webp]]

One target is easy. What if we have many targets?

Another problem: The graph of the Hopfield net has cycles, so backpropagation won't work.

## Hopfield Energy
Hopfield energy is a scalar number that we compute for any network state $\vec{x}\in \{ -1, 1 \}^{N}$. The dynamics are defined such that updating neurons makes $E$ decrease, so that the network falls into low-energy states, which correspond to the stored memories/patterns.

Hopfield energy is defined as:
$$
\begin{align}
E = -\frac{1}{2} \sum_{i} \sum_{j\neq i} x_{i}W_{ij}x_{j}-\sum_{i}b_{i}x_{i} \\
E = -\frac{1}{2}\vec{x}W\vec{x}^{T} - \vec{b}\vec{x}^{T}
\end{align}
$$
where $W_{ii}=0$.

To minimize energy, we use gradient descent:
$$
\frac{ \partial E }{ \partial x_{j} } = - \sum_{i\neq j}x_{i}W_{ij}-b_{j}
$$
or
$$
\begin{align}
\nabla_{\vec{x}}E = -\vec{x}W-\overline{b} \\
\\[2ex] 
\implies \tau_{x} \frac{d\vec{x}}{dt} = \vec{x}W+b
\end{align}
$$
which is similar to the $(\vec{x}W)_{i}+b_{i}$ equation we saw earlier.

If $i\neq j$:
$$
\frac{ \partial E }{ \partial W_{ij} }  = -x_{i}x_{j}
$$
If $i=j$:
$$
\frac{ \partial E }{ \partial W_{ii} }  = -x_{i}^{2} = -1
$$
As a result, the gradient vector is:
$$
\nabla_{W}E = -\vec{x}^{T}\vec{x}+I_{N\times N}
$$
where $\vec{x}^{T}\vec{x}$ is a rank-1 $N\times N$ matrix. We add the identity matrix to the right-hand side, so that the gradient of the diagonal weights is zero, to keep $W_{ii}=0$ for gradient descent.

Over all $M$ targets, we have:
$$
\nabla_{W}E = -\frac{1}{M} \sum_{s=1}^{M} (\vec{x}^{(s)})^{T}\vec{x}^{(s)} + I = -\frac{1}{M}X^{T}X+I
$$
Thus:
$$
W \leftarrow W+\kappa\left( \frac{1}{M} X^{T}X-I \right)
$$
where $X^{T}X$ computes coactivation states between all pairs of neurons.

Because the input patterns $X$ are fixed, the coactivation matrix $\frac{1}{M}X^{T}X-I$  remains constant across iterations, so the gradient direction does not change, and repeated updates simply move $W$ linearly towards the steady-state solution, which is proportional to $W^{\ast }=\frac{1}{M}X^{T}X-I$.

## Example
Let's say we have $N=4$ neurons and $M=2$ target patterns.
$$
\vec{x}^{(1)}=[-1, 1, 1, -1], \quad \vec{x}^{(2)} = [1,1,-1,-1]
$$
Stacking them into the data matrix $X$:
$$
X = \begin{bmatrix}
1 & -1 & 1 & -1 \\
1 & 1 & -1 & -1
\end{bmatrix}
$$
Now, we compute the coactivation states between all pairs of neurons:
$$
X^{T}X=\begin{bmatrix}
2 & 0 & 0 & -2 \\
0 & 2 & -2 & 0 \\
0 & -2 & 2 & 0 \\
-2 & 0 & 0 & 2
\end{bmatrix}
$$
Then:
$$
\frac{1}{M}X^{T}X = \frac{1}{2}X^{T}X = \begin{bmatrix}
1 & 0 & 0 & -1 \\
0 & 1 & -1 & 0 \\
0 & -1 & 1 & 0 \\
-1 & 0 & 0 & 1
\end{bmatrix}
$$
Using this to do weight update:
$$
W \leftarrow W+\kappa\left( \frac{1}{M} X^{T}X-I \right)
$$
Let's start with $W=0$ and $\kappa=1$. Then:
$$
W = \frac{1}{M}X^{T}X-I = \begin{bmatrix}
0 & 0 & 0 & -1 \\
0 & 0 & -1 & 0 \\
0 & -1 & 0 & 0 \\
-1 & 0 & 0 & 0
\end{bmatrix}
$$
and we take biases $\vec{b}=0$.

Now, suppose we have a noisy cue:
$$
\vec{x}=[-1, -1, 1, -1]
$$
- (the first bit should be $1$ for this to match $\vec{x}^{(1)}$)

Using the update rule:
$$
x_i = \begin{cases}
 -1 & \text{if } (\vec x W)_i + b_i < 0 \\
1 & \text{if } (\vec x W)_i + b_i \ge 0 
\end{cases}
$$
Note that Hopfield networks are asynchronous, such that only one unit is updated at one time.

We have:
$$
(\vec xW)_1 = x_4\cdot W_{41} = (-1)\cdot(-1)=+1  \\
$$
Then:
$$
h_{1} =1 \geq0 \quad \longrightarrow \quad  x_{1}=1 \\
$$
So the state is now $\vec{x}=[1, -1, 1, -1]$ (the first bit flipped).

For the second one:
$$
\begin{align}
(\vec xW)_2  & = x_3\cdot W_{32} = (1)(-1)=-1 \\
h_{2} & = -1 < 0 \quad \longrightarrow \quad  x_{2}=-1
\end{align}
$$
The state stays as $\vec{x}=[1, -1, 1, -1]$.

For the third one:
$$
\begin{align}
(\vec xW)_3  & = x_2\cdot W_{23} = (-1)(-1)=+1 \\
h_{3}  & = 1 \geq 0 \quad \longrightarrow \quad x_{3} = +1
\end{align}
$$
The state stays as $\hat{x}= [1,\,-1,\,1,\,-1]$.

Finally:
$$
\begin{align}
(\vec xW)_4  & = x_1\cdot W_{14} = (1)(-1)=-1 \\
h_{4} & =-1 < 0 \quad \longrightarrow \quad x_{4}=-1
\end{align}
$$
