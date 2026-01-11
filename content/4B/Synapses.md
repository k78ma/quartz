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
Even though an action potential is very fast, the synaptic processes by which it affects the next neuron take time. Some synapses are fast (~10ms), and some are slow (~300ms). If we represent that time constant using $\tau_{s}$,l then the current entering the post-synaptic neuron can be written as:
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

Multiple spikes form a **spike train**, and can be modeled as a sum of Dirac delta functions:
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

