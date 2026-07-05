---
title: Population Coding Transformations
tags:
  - amath449
date: 2026-04-07
aliases: population coding transformations
---
How can we use [[Population Coding|population coding]] to pass data between populations of neurons?

So far we've looked at interpreting the activity of a population of neurons, such as decoding encoded values to an imaginary readout node. But neurons send their output to other neurons.

Suppose we want $B$ to encode the same value encoded in population $A$. Can we just copy the neural activities? No, because $A$ and $B$ might have different numbers of neurons.

![[Population Coding Transformations-1775592118331.webp|295]]

The correct approach is to decode the value from $A$ and then re-encode it using $B$'s encoders.

![[Population Coding Transformations-1775592180446.webp|538]]

## Step by step transformation process

**Encode** $x$ into population $A$
$$
A = \sigma(xE_{A} + \beta_{A})
$$
- $A \in  \mathbb{R}^{1\times N}, \, x \in  \mathbb{R}^{1\times K}, \, \mathbb{E_{A} \in  \mathbb{R}^{K\times N}}$

**Decode** $\hat{x}$ from $A$:
$$
\hat{x} = AD_{A}
$$
- $D_{A}\in \mathbb{R}^{N\times K}$

**Re-encode** $\hat{x}$ into population $B$:
$$
\begin{align}
B & =\sigma(\hat{x}E_{B}+\beta_{B}) \\
     & = \sigma(AD_{A}E_{B}+\beta_{B}) \\
     & = \sigma(AW + \beta_{B})
\end{align}
$$
where $W = D_{A}E_{B}$.
- $E_{B} \in \mathbb{R}^{K\times M}, \, \beta_{B} \in \mathbb{R}^{1\times M}$, $W \in \mathbb{R}^{N\times M}$

(Optional) **Decode** $\hat{\hat{x}}$ from$B$:
$$
\hat{\hat{x}}=BD_{B}
$$

![[Population Coding Transformations-1775592600928.webp|390]]


## Application
The reason we connect populations of neurons is because connections can perform transformations on the data.

For example, given $(x,y)$, we want to build a network that computes $x\cdot y$.

![[Population Coding Transformations-1775592630126.webp|437]]

The decoder is trained by:
$$
D_{xy} = \underset{\tilde{D}}{\operatorname{argmin}} || A\tilde{D} - xy ||
$$

## Low-Dimensional Bottleneck
Even though we can form a full connection matrix $W$ from the product $DE$, it is actually a low-rank matrix.

In the example above,
$$
D_{xy} \in  \mathbb{R}^{N\times 1}, \quad  E_{B}\in  \mathbb{R}^{1\times M} \quad \Longrightarrow \quad  W = D_{xy}E_{B} \in  \mathbb{R}^{N\times M} \quad  (\text{rank-1 matrix})
$$
This might seem like a limitation, but it actually makes things more efficient.

How many FLOPs for AW?
$$
A \in  \mathbb{R}^{N}, \quad  W \in  \mathbb{R}^{N\times M} \quad \Longrightarrow \quad  \text{FLOPs} = \mathcal{O}(NM)
$$
How many FLOPs for $ADE$?
$$
\begin{align}
A \in  \mathbb{R}^{N}, \quad  D \in  \mathbb{R}^{N\times 1}, \quad E \in  \mathbb{R}^{1\times M} \\
AD \in  \mathbb{R}^{1}, \quad  \text{FLOPs} = \mathcal{O}(N) \\
(AD)E \in  \mathbb{R}^{M}, \text{FLOPS} = \mathcal{O}(M) \\
\text{Total FLOPs} = \mathcal{O}(N+M)
\end{align}
$$
This is why using low-rank representations (like $DE$) is not only compact but computationally efficient. 