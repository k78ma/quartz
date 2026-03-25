---
title: Restricted Boltzmann Machines
tags:
  - amath449
  - dl
date: 2026-03-08
aliases: restricted boltzmann machines
---
An RBM network consists of:
- A "hidden layer": $\vec{h} \in \{ 0, 1 \}^{n}$
- A "visible layer": $\vec{v} \in \{ 0,1 \}^{m}$, because this layer interacts with the environment.

Note that each node is binary, so it is either on (1) or off (0). The probability that a node is on depends on the states of the nodes feeding it, and the connection weights.

Connections between layers are symmetric, represented by weight matrix $W$.

![[Restricted Boltzmann Machines-1773008730339.webp|508]]

Together, $\vec{v}$ and $\vec{h}$ represent the network state. For example, a single network state could be:
$$
\begin{align}
\vec{v}  & = \begin{bmatrix}
1 & 0 & 0 & 1
\end{bmatrix} \\[2ex]
\vec{h} & =\begin{bmatrix}
0 & 1 & 1
\end{bmatrix}
\end{align}
$$
## RBM energy
Similar [[Hopfield Networks]], an RBM is characterized by an energy:
$$
\begin{align}
E(v,h)  & = -\sum_{i=1}^{m}\sum_{j=1}^{n}v_{i}W_{ij}h_{j} + \sum_{i=1}^{m}b_{i}v_{i}+\sum_{j=1}^{n}c_{j}h_{j}\\[2ex] 
 & = -vWh^{T}-vb^{T} - hc^{T}
\end{align}
$$
- $-vWh^{T}$ is a discount for when nodes $i$ and $j$ are both on
- $-bv^{T}-ch^{T}$ is the energy incurred by turning a node on.

Like many processes in nature, we want to find the minimum energy.

Consider the "energy gap", the difference in energy when we flip an energy $v_{k}$ from off to on.
$$
\begin{align}
\Delta E_{k}  & = E(v_{k} \text{ off}) - E(v_{k} \text{ on}) \\[2ex]
     & = \sum_{j} w_{kj}h_{j}-b_{j}
\end{align}
$$
- If $\Delta E_{k}>0$, $E(v_{k} \text{ off})>E(v_{k} \text{ on})$. Then "on" is lower energy, so we set $v_{k}=1$
- If $\Delta_{k}<0$, $E(v_{k} \text{ off})<E(v_{k} \text{ on})$, then "off" is lower energy, so we set $v_{k}=0$.

The energy gap of each node depends on the states of other nodes, so finding the minimum energy state requires some work. One strategy is to visit and update the nodes in random order (like Hopfield). We can do better since our network is bipartite (hence the "Restricted"). The visible units only depend on the hidden units, and vice versa, so we can update one whole layer at a time.

This is still a local optimization method, so we can still get stuck in local optima. To avoid this, we use stochastic (random) neurons. Each neuron is on or off according to a probability that is established by its input current:
$$
\begin{align}
P(v_{k}=1 \, | \,\vec{h})= \sigma(\Delta E_{k}) \\
P(h_{j}=1\, | \,\vec{v}) = \sigma(\Delta E_{j}) \\[2ex] 
\sigma(z)=\frac{1}{1+e^{-\frac{z}{T}}}
\end{align}
$$
where $T$ is a temperature parameter. This idea comes from statistical mechanics. Essentially, higher temperature makes the sigmoid curve flatten so that there is more movement back and fourth between the states. 

Let's say we want to find out whether neuron $h_{j}\sim P(h_{j}=1 \, | \, v)$ is on:
1. Evaluate its input $H=\sigma(\dots)$
2. For $j=1, \dots, n$:
    - $r=\text{rand}\in (0,1)$
    - If $H_{j}>r$:
        - $h_{j}=1$
    - Else:
        - $h_{j}=0$

This produces a $\vec{h}\in \{ (0,1) \}^{n}$.

This is basically a [[Bernoulli Distribution]] sampling process. 

If we let our network run freely using the logistic function to compute the probability that the neuron is 1 vs. 0. Starting with some initial state $v^{(0)}$, we project up to $h^{(0)}$, project it down to get to $v^{(1)}$, project back up, etc…

![[Restricted Boltzmann Machines-1774317889359.webp|478]]

We will eventually visit all possible network states, but not with equal probability. Instead we will visit state $(\vec{v}, \vec{h})$ with probability
$$
P(v,h)= \frac{1}{z}e^{-E(v, h)}
$$
where $z = \sum_{v,h}e^{-E(v,h)}$. This is essentially just softmax. 

If $E(v^{(1)}, h^{(1)})>E(v^{(1)}, h^{(1)})$, then the $P(v^{(1)}, h^{(1)})<P(v^{(2)}, h^{(2)})$. **Lower energy states are visited more frequently.** This is known as the **Boltzmann Distribution**.

Example with 4 visible nodes and 2 hidden nodes (32 net states):

![[Restricted Boltzmann Machines-1774318091324.webp|523]]


## Training an RBM as a Generative Model
Suppose we have inputs $v \sim p(v)$. We want an RBM to behave as a generative model $q_{\theta}$ such that:
$$
\underset{\theta}{\operatorname{max}} E_{v \sim p}[q_{\theta}(v)] \quad  \text{or equivalently} \quad  \underset{\theta}{\operatorname{min}}E_{v\sim p}[-\ln q_{\theta}(v)]
$$
Let $L=-\ln q_{\theta}(\vec{\nu})$ for a given fixed $\vec{\nu}$.
Then:
$$
\begin{align}
L   & = -\ln\left( \frac{1}{Z} \sum_{h} e^{-E_{\theta}(\nu,h)} \right) \\[2ex]
 & =-\ln\left( \sum_{h} e^{-E_{\theta}(\nu,h)} \right) + \ln\left( \sum_{v}\sum_{h} e^{-E_{\theta}(\nu,h)} \right) \\[2ex]
     & = L_{1} + L_{2}
\end{align}
$$
Thus, we can decompose the loss into $L=L_{1}+L_{2}$.

To do gradient descent, we need to find the gradients. 

### Gradient of $L_{1}$
$$
\nabla_{\theta}L_{1} = \mathbb{E}_{q(h | \nu)} [\nabla_{\theta}E_{\theta}]
$$
- $q(h | \nu)$ is the distribution of $h$ conditioned on the fixed $\nu$

### Gradient of $L_{2}$
$$
\nabla_{\theta}L_{2}=\mathbb{E}_{q(v,h)}[-\nabla_{\theta}E_{\theta}]
$$
- $q(v,h)$ is the joint distribution over $v$ and $h$

### Gradient for $W_{ij}$
What is the gradient of $\nabla_{\theta}E_{\theta}$? Consider $\theta=w_{ij}$. 

Recall:
$$
E(v,h)  = -\sum_{i=1}^{m}\sum_{j=1}^{n}v_{i}W_{ij}h_{j} + \sum_{i=1}^{m}b_{i}v_{i}+\sum_{j=1}^{n}c_{j}h_{j}\\[2ex] 
$$
Then:
$$
\begin{align}
\nabla_{w_{ij}}E(\nu, h) = -\nu_{i}h_{j} \quad \text{and} \quad \nabla_{w_{ij}}E(v,h) = -v_{i}h_{j} \\[2ex] 
\therefore \nabla_{w_{ij}}L = \underbrace{ \mathbb{E}_{q(h|\nu)}[\nu_{i}h_{j}] }_{ \text{term 1} }-\underbrace{ \mathbb{E}_{q(v,h)}[v_{i}h_{j}] }_{ \text{term 2} }
\end{align}
$$
**Term 1.** This is the expected value under the posterior distribution. We clamp visible states to $\nu$:
$$
q(h_{i}\, | \,\vec{\nu}) = \sigma(-\vec{\nu}W_{ij}+c_{j})
$$
Note that this calculates the hidden $h_{j}$ Bernoulli probabilities! It does not actually give us the binary hidden units.

Then
$$
\mathbb{E}_{q(\vec{h}|\vec{\nu})} [\nu_{i}h_{j}] = -\nu_{i}\sigma(-\nu W_{ij}+c_{j})
$$
Computing for all the weights at once:
$$
\nabla_{w}L_{1} = -\vec{\nu}^{T}\sigma(-\vec{\nu}W+\vec{c})
$$

**Term 2.** This is the expected value under the joint distribution. Compute:
$$
\mathbb{E}_{q(\vec{v}, \vec{h})}[v_{i}h_{j}] = \sum_{\vec{v}}\sum_{\vec{h}}q(\vec{v}, \vec{h})v_{i}h_{j}
$$
We could find this by running the network freely for a lot of iterations and sampling the results. In practice, a single net state is used.

![[Restricted Boltzmann Machines-1774319740342.webp]]

We start with the fixed $\nu$ and then project it up to get the hidden probabilities. This is done as part of the calculation for $\nabla_{w}L_{1}$. Then, we use the probabilities, sample to get a binary $h$. We project down to get a new visible state, and then project up again. We use this $v$ and $h$ as a single sample to get
$$
\nabla_{w}L_{2} = \vec{v}^{T}\sigma(-\vec{v}W+\vec{c})
$$
To update all weights in $W$:
$$
\begin{align}
W  & = W-\kappa(\nabla_{w}L_{1}+\nabla_{w}L_{2}) \\
     & = W + \kappa  \underbrace{ \vec{\nu}^{T}\sigma(-\vec{\nu}W+\vec{c})  }_{ \text{clamped} }- \kappa \underbrace{ \vec{v}^{T}\sigma(-\vec{v}W+\vec{c}) }_{ \text{free} }
\end{align}
$$
We call the up pass (from visible to hidden) **recognition**.  We call the down pass (hidden to visible) **generation**.

## Contrastive Divergence for Training RBMs
This algorithm is based on a comparison between the original input, and how well it can be reconstructed from the resulting hidden-layer state.

We are given an input pattern $\vec{\nu}$ with $m$ visible nodes and $n$ hidden nodes. 

**1.** Recognition pass 1:
$$
P(\vec{h}\, | \, \vec{\nu}) = \sigma(\vec{\Delta E})
$$
where $\vec{\Delta E}=-\vec{\nu}W+\vec{c}$.

**2.** Compute term 1 (the co-occurence statistics): how many times $h$ and $v$ are both on simultaneously
$$
s_{1}=\vec{\nu}^{T}\sigma(\vec{\Delta E})
$$
**3.** Generative pass: We sample the Bernoulli process for the hidden nodes:
$$
\vec{h}_{1} \sim \sigma(\vec{\Delta E}) \in  \{ 0,1 \}^{n}
$$
Projecting down gives us the energy gap for the visible nodes:
$$
\vec{\Delta E} = -W\vec{h}_{1}^{T}+\vec{b}
$$
Computing the Bernoulli probabilities of the visibles given the hidden:
$$
P(\vec{\nu}\, | \,\vec{h}_{1}) = \sigma(\vec{\Delta E})
$$
Sample $\vec{\nu}_{2} \sim P(\vec{\nu}\, | \,\vec{h}_{1}) \in \{ 0,1 \}^{m}$.

**4.** Recognition pass 2:
$$
\begin{align}
\vec{\Delta E}= -\vec{v}_{2}W+\vec{c} \\
\end{align}
$$
We can sample $\vec{h}_{2} \sim \sigma(\vec{\Delta E})$ or use $\sigma(\vec{\Delta E})$ directly.

**5.** Compute term 2 co-occurence states:
$$
s_{2} = \vec{v}_{2}h_{2}
$$
**6.** Update weights:
$$
W_{\text{new}}=W_{\text{old}}+\kappa(s_{1}-s_{2})
$$
Update biases:
$$
\vec{b}_{\text{new}}=\vec{b}_{\text{old}}-\gamma(\vec{\nu}-\vec{v}_{2})
$$
$$
\vec{c}_\text{new} = \vec{c}_{\text{old}}-\gamma(\vec{h}_{1}-\vec{h}_{2})
$$
Training algorithm:
```
for each temp T = 20, 10, 5, 2,1
    for each of 400 epochs
        for each V batch (visibles from data)
            add some noise (optional)
            project up: V -> H1, collect S1
            project down & up: H1 -> V1 -> H2: Collect S2
            update weights & biases
```