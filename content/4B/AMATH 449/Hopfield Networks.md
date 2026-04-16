---
title: Hopfield Networks
tags:
  - amath449
date: 2026-02-28
aliases:
  - hopfield networks
  - Hopfield Energy
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
Suppose we have a network of $N$ neurons, each connected to all the others.
- $W_{ij}$ is the connection strength from node $i$ to node $j$. We assume that $W_{ij}=W_{}{ji}$.

We want this network to converge to the nearest of a set of $M$ targets or inputs.

![[Hopfield Networks-1772318049339.webp|231x219]]

Each node in the network can be a $-1$ or $1$, such that $x_{j}\in \{ -1, 1 \}, j=1,\dots,N$. 

Suppose each node wants to change its state so that:
$$
x_{j} = \begin{cases}
-1 & \text{if } \sum_{j\neq i} x_{i}W_{ij} < b_{j}  \\
1 & \text{if } \sum_{j\neq i} x_{i}W_{ij} \geq -b_{j}
\end{cases}
$$
If we have a pattern that we would like the network to recall, we could set the weights such that:
- $W_{ij}>0$ between any two nodes in the same state
- $W_{ij} < 0$  between any two nodes that are different

![[Hopfield Networks-1772318075515.webp]]

So we've seen that setting the weights is easy if we have one target. But what if we have a bunch of different targets that we want to encode?

Given $M$ target network states, $\{ x^{(1)}, \dots, x^{(m)} \}$, each of length $N$:
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
We then find the weights as:
$$
\begin{align}
W_{ij} & =\frac{1}{M} \sum_{s=1}^{M}x_{i}^{(s)}x_{j}^{(s)} \quad \quad  \quad  i\neq j \\[2ex] 
W_{ii}  & = 0 = \frac{1}{M} \sum_{s=1}^{M}x_{i}^{(s)}x_{i}^{(s)} -1
\end{align}
$$
- We call $W_{ij}$ the average co-activation between nodes $i$ and $j$. It is found by running through all the stored patterns and looking at the states of the nodes that the weight connects, and then connecting how many times they are in the same/opposite states and averaging.

Writing this in matrix form, we can write:
$$
\begin{align}
W &= \frac{1}{M} \sum_{s=1}^{M} x^{(s)}(x^{(s)})^{T}-I \\
\end{align}
$$
- $x^{(s)}$ is a column vector, and $(x^{s})^{T}$ is a row vector.

This method works best if the network states, $\{ x^{(1)}, \dots, x^{(m)} \}$ are all mutually orthogonal.

## Hopfield Energy
Hopfield recognized a link between these network states and the Ising model in physics. 
- Ising model: Lattice of interacting magnetic dipoles, each of which can be "up" or "down". The state of each dipole depends on its neighbors.

Hopfield energy is a scalar number that we compute for any network state $\vec{x}\in \{ -1, 1 \}^{N}$. The dynamics are defined such that updating neurons makes $E$ decrease, so that the network falls into low-energy states, which correspond to the stored memories/patterns.

Hopfield energy is defined as:
$$
\begin{align}
E  & = -\frac{1}{2}  \sum_{j\neq i} x_{i}W_{ij}x_{j}-\sum_{j}b_{j}x_{j} \\
E  & = -\frac{1}{2}x^{T}Wx - b^{T}x
\end{align}
$$
where $W_{ii}=0$.

Intution:
- If $x_{i}$ and $x_{j}$ are the same sign, their product is positive. Then, we want $W_{ij}$ to be positive. Since we have $-\frac{1}{2}$ at the front, the whole term will be negative, such that a good state corresponds to low energy.
- The $\sum_{j}b_{j}x_{j}$ term reflects that there is a cost to each node being on/off. If the node is on, it reduces the energy by $b_{j}$.

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
where $X^{T}X$ computes co-activation states between all pairs of neurons.

Because the input patterns $X$ are fixed, the co-activation matrix $\frac{1}{M}X^{T}X-I$  remains constant across iterations, so the gradient direction does not change, and repeated updates simply move $W$ linearly towards the steady-state solution, which is proportional to $W^{\ast }=\frac{1}{M}X^{T}X-I$.

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
Note that Hopfield networks are usually asynchronous, such that only one unit is updated at one time.

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
Thus, after all the updates we have $[1, -1, 1, -1]$, matching the input $\vec{x}^{(1)}$.