---
title: Composing Shallow Networks
tags:
  - dl
date: 2025-01-08
aliases:
  - composing shallow networks
---
As an entrypoint to [[Deep Neural Network|deep neural networks]], we first consider composing two [[Shallow Neural Network|shallow neural networks]] so that the output of the first becomes the input of the second.

Consider two shallow networks with 3 hidden units each. 

![[Composing Shallow Networks.png|580]]

The first network takes an input $x$ and returns output $y$ and is defined by:
$$
\begin{align}
h_{1}= a[\theta_{10}+\theta_{11}x] \\
h_{2}= a[\theta_{20}+\theta_{21}x] \\
h_{3}= a[\theta_{30}+\theta_{31}x]
\end{align}
$$
and
$$
y=\phi_{0}+\phi_{1}h_{1}+\phi_{2}h_{2}+\phi_{3}h_{3}
$$
The second network takes $y$ as input and returns $y'$ and is defined by:
$$
\begin{align}
h_{1}'= a[\theta_{10}'+\theta_{11}'x] \\
h_{2}'= a[\theta_{20}'+\theta_{21}'x] \\
h_{3}'= a[\theta_{30}'+\theta_{31}'x]
\end{align}
$$
and
$$
y=\phi_{0}'+\phi_{1}'h_{1}'+\phi_{2}'h_{2}'+\phi_{3}'h_{3}'
$$

![[Composing Shallow Networks-1.png|580]]

- The first network maps inputs $x \in [-1,1]$ to outputs $y\in [-1,1]$ using a function comprising three linear regions that are chosen so that they alternate the sign of their slope (4th linear region is outside range of graph). Multiple inputs $x$ (gray circles) now map to the same output $y$ (cyan circle).
- The second network defines a function comprising three linear regions that takes $y$ and $y'$ (i.e. the cyan circle is mapped to the brown circle).
- The combined effect of these 2 functions when composed is that three different inputs $x$ are mapped to any given value of $y$ by the first network and are processed the same way by the second network.
- The result is that the function defined by the second network in panel (c) is duplicated three times, variously flipped and rescaled according to the slope of the regions of panel (b).

With [[Rectified Linear Unit|ReLU]] activations, this model also describes a family of piecewise linear functions. However, the number of linear regions is potentially greater than for a shallow network with 6 hidden units. To see this, consider choosing the first network to produce three alternating regions of positive and negative slope (panel b above). This means that three different ranges of $x$ are mapped to the same output range $y \in [-1,1]$, and the subsequent mapping from this range of $y$ to $y'$ is applied three times. The overall effect is that the function defined by the second network is duplicated three times to create nine linear regions.

![[Composing Shallow Networks-2.png|604]]

A different way to think about composing networks is that the first network "folds" input space $x$ onto itself so that multiple inputs generate the same output. Then the second network applies a function, which is replicated at all points that were folded on top of one another.

![[Composing Shallow Networks-3.png|612]]