---
title: Synapses
tags:
  - amath449
date: 2026-01-11
aliases: synapses
---
We've seen how individual neurons react to their input. That input usually comes from other neurons. When a neuron fires, an action potential (wave of electrical activity) travels along its axon. The junction where one neuron communicates with another is called a **synapse**.

![[Synapses-1768172324869.webp]]

A pre-synaptic action potential causes the release of a neurotransmitter, which binds to the receptors of the post-synaptic neuron, opening ion channels and thereby changing the membrane potential.

![[Synapses-1768172356622.webp]]

Neurons are separated by microscopic small space called the **synaptic cleft**, which is around 20-50mm wide.

## Post-Synaptic Current
Even though an action potential is very fast, the synaptic processes by which it affects the next neuron take time. Some synapses are fast (~10ms), and some are slow (~300ms). If we represent that time constant using $\tau_{s}$,  then the current entering the post-synaptic neuron can be written as:
$$
h(t) = \begin{cases}
kt^{n}e^{\frac{-t}{\tau_{s}}} & \text{if }t \geq 0 &  \text{ (for some }n \in  \mathbb{Z}_{\geq 0})  \\
0 & \text{if } t<0
\end{cases}
$$
where $k$ is chosen so that
$$
\int_{0}^{\infty} h(t) \, dt = 1 \quad \Longrightarrow \quad k = \frac{1}{n! \, \tau_{s}^{n+1}}
$$

![[Synapses-1768172742383.webp]]

The function is called a Post-Synaptic Current (PSC) filter, or Post-Synaptic Potential (PSP) filter.

Recall that the synapse takes action potential spikes as input. Multiple spikes form a **spike train**, and can be modeled as a sum of Dirac delta functions:
$$
a(t) = \sum_{p=1}^{3} \delta(t-t_{p})
$$

> [!def] Dirac Delta Function
> The Dirac Delta Function is defined as
> $$
> \delta(t) = \begin{cases}
> \infty & \text{if }t=0 \\
> 0 & \text{otherwise}
> \end{cases}
> $$
> with the properties
> $$
> \int_{-\infty}^{\infty} \delta(t) \, dt = 1 \quad \text{and} \quad \int_{-\infty}^{\infty} f(t)\delta(t-\tau) \, dt  
> $$
> 
> The second equation there basically means that we can use the Dirac delta function that sample the value of a function at a specific $\tau$.
> 
> ![[Synapses-1768173032285.webp]]

**How does a spike train influence the post-synaptic neuron?** We can simply add together all PSC filters, one for each spike. This is actually [[Convolution Integral|convolving]] the spike train with the PSC filter:

![[Synapses-1768173241619.webp]]

That is:
$$
\begin{align}
s(t)  & = a(t) \ast  h(t) \\[2ex] 
     & = (a \ast  h)(t) \\[2ex] 
     & = \left[ \sum_{p} \delta(t-t_{p}) \right] \ast  h(t) \\[2ex] 
     & =\int \sum_{p} \delta(\tau-t_{p})h(t-\tau) \, d\tau & \text{[Convolution]} \\[2ex] 
     & = \sum_{p} h(t-t_{p})
\end{align}
$$
which is the **sum of the PSC filters**, one for each spike, also known as the **filtered spike train**.

Post-synaptic current for a random spike train with $\tau_{s}, n=1$. The PSC captures some information about the pre-synaptic spike train history:

![[Synapses-1768173482061.webp]]

Interestingly, for a constant firing rate of $P=60 \text{ Hz}$ and $\tau_{s}=0.1, n=1$, we observe that the post-synaptic current saturates to a constant value, which is determined by the pre-synaptic firing rate $P$.

![[Synapses-1768173534310.webp]]

More specifically, if we plot the asymptotic value of the post-synaptic current (PSC) against the firing rate, we find a linear relationship
$$
\text{PSC} \approx P
$$
as demonstrated in the following plot:

![[Synapses-1768173572322.webp]]

## Connection Weight
The total current induced by an actual potential onto a particular post-synaptic neuron can vary widely, depending on:
- The number of sizes of the synapses
- The amount and type of neurotramsitter
- The number and type of receptors

We can combine all those factors into a single number, the **connection weight**. Thus, the total input to a neuron is a weighted sum of filtered spike-trains.

![[Synapses-1768173799678.webp|214x162]]


## Weight Matrices
When we have many pre-synaptic neurons, it is more convenient to use matrix-vector notation to represent the weights and activities.

Suppose we have two populations $X$ and $Y$, where:
- $X$ has $N$ nodes
- $Y$ has $M$ nodes

![[Synapses-1768173962504.webp]]

If every node in $X$ sends its output to every node in $Y$, we will have a total of $N\times M$ connections, each with its own weight.

![[Synapses-1768173994800.webp]]

The weights can be represented as a matrix
$$
W= \begin{bmatrix}
w_{11}  & w_{12}  & w_{13} \\
w_{21} & w_{22} & w_{23}
\end{bmatrix}
$$
Note that the subscript order is $w_{\text{start}, \text{end}}$ so that the weight connecting $x_{1}$ to $y_{2}$ is $w_{21}$.

## Vectors of Neuron Activities
We typically store the neuron activities in vectors:
$$
\vec{x} = \begin{bmatrix}
x_{1} & x_{2}
\end{bmatrix}, \quad  \vec{y}=\begin{bmatrix}
y_{1} & y_{2} & y_{3}
\end{bmatrix}
$$
We can compute the input to the nodes in $Y$ using
$$
\vec{z} = \vec{x}W + b
$$
where $\vec{b}$ holds the biases for the neurons in $Y$.

Thus,
$$
\vec{y}= \sigma(\vec{z}) = \sigma(\vec{x}W+\vec{b})
$$
where $\sigma$ represents and activation function.

### Bias Representation
Another way to represent the biases, $\vec{b}$, is by adding an additional input node with a fixed value of $1$.
$$
\vec{x}W+\vec{b} = \begin{bmatrix}
\vec{x}  & 1
\end{bmatrix} \cdot  \begin{bmatrix}
W \\
\vec{b}
\end{bmatrix}
$$
![[Synapses-1768174749347.webp]]

## Implementing Connections Between Spiking Neurons
For simplicity, let $n=0$:
$$
h(t) = \begin{cases}
\frac{1}{\tau_{s}} e^{- \frac{t}{\tau_{s}} }  & \text{ if } t \geq 0  \\
0 & \text{if } t<0
\end{cases}
$$
![[Synapses-1768174950434.webp]]

> [!theorem]
> The function $h(t)$ defined above is the solution of the initial value problem (IVP):
> $$
> \tau_{s} \frac{ds}{dt}= -s, \quad s(0)=\frac{1}{\tau_{s}}
> $$

## Full LIF Neuron Model

![[Synapses-1768175006934.webp]]

The dynamics of the neuron can be defined by:
$$
\begin{cases}
\tau_{m} \frac{dv_{i}}{dt} = s_{i}-v_{i}  & \text{if not in refractory period} \\
\tau_{s} \frac{ds_{i}}{dt} = -s_{i}
\end{cases}
$$
If $v_{i}$ reaches 1:
1. Start refractory period
2. Send spike along the axon
3. Reset $v_{i}$ to 0

If a spike arrives from neuron $j$: Increment $s_{i}$ using
$$
s_{i} \leftarrow s_{i} + \frac{w_{ij}}{\tau_s}
$$