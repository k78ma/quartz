---
title: Shallow Neural Network
tags:
  - ml
  - dl
date: 2024-06-13
aliases:
  - shallow neural network
---
Shallow neural networks are functions $\mathbf{y}=\mathbf{f}[\mathbf{x}, \mathbf{\phi}]$ that map multi-dimensional inputs $\mathbf{x} \in \mathbb{R}^{D_{i}}$ to a multi-dimensional output $\mathbf{y}\in\mathbb{R}^{D_{o}}$ using $\mathbf{h} \in \mathbb{R}^{D}$ hidden units. Each hidden unit is computed as:
$$
h_{d}=a\left[ \theta_{d_{0}}+\sum_{i=1}^{D_{i}}\theta_{d_{i}}x_{i} \right]
$$
which are combined linearly to create an output.

## Intuition
We can illustrate the main ideas using an example network $f[x, \phi]$ that maps a scalar input $x$ to a scalar output $y$, using ten parameters $\phi=\{ \phi_{0}, \phi_{1},\phi_{2}, \phi_{3}, \theta_{10}, \theta_{11}, \theta_{20}, \theta_{21}, \theta_{30}, \theta_{31} \}$. This is defined such that:
$$
\begin{align}
y & =f[x, \phi] \\
 & = \phi_{0}+\phi_{1}a[\theta_{10}+\theta_{11}x]+\phi_{2}a[\theta_{20}+\theta_{21}x]+\phi_{3}a[\theta_{30}+\theta_{31}x]
\end{align}
$$
This calculation can be broken down into three parts:
1. We compute three linear functions of the input data, $\theta_{10}+\theta_{11}x$, $\theta_{20}+\theta_{21}x$ and $\theta_{30}+\theta_{31}x$
2. We pass the three results through an [[Activation Function|activation function]] $a[\cdot]$
3. We weight the three resulting activations with $\phi_{1}$, $\phi_{2}$ and $\phi_{3}$, sum them, and then add an offset $\phi_{0}$.

Equation $(1)$ characterizes a family of functions where the particular member of the family is characterized by the parameters $\phi$. Given these parameters, we can perform inference to predict $y$ by evaluating the equation on a given $x$. Given a data set $\{ x_{i}, y_{i} \}_{i=1}^{I}$, we can define a loss function $L[\phi]$ and use it to measure how effectively the model describes the data set for this given set of parameters $\phi$. To train the model, we search for the values $\hat{\phi}$ that minimize loss.

![[Shallow Neural Network-1.png]]

To gain more intuition, we can think about what equation $(1)$ actually represents. It is a family of piecewise functions with up to four linear regions. This can be easily seen by splitting up the quantities, which we call *hidden units*:
$$
\begin{align}
h_{1}= a[\theta_{10}+\theta_{11}x] \\
h_{2}= a[\theta_{20}+\theta_{21}x] \\
h_{3}= a[\theta_{30}+\theta_{31}x]
\end{align}
$$
The output of then be found by combining these hidden units with a linear function:
$$
y=\phi_{0}+\phi_{1}h_{1}+\phi_{2}h_{2}+\phi_{3}h_{3}
$$
The flow of computation is shown here:

![[Shallow Neural Network.png]]

- Each hidden unit contains a linear function $\theta_{\bullet0}+\theta_{\bullet 1}x$.
- This line is clipped by the ReLU $a[\bullet]$ below zero.
- The positions where the three liens cross zero become the "joints" in the output.
- The three clipped lines are then weighted by $\phi_{1}, \phi_{2}, \phi_{3}$.
- Finally, the offset $\phi_{0}$ is added.

Each linear region corresponds to a different *activation pattern* in the hidden units. When a unit is clipped, its referred to as *inactive*; when it's not clipped, we say it's *active*.
- For example, the shaded region above has $h_{1}$ and $h_{3}$ active, while $h_{2}$ is inactive.

The slope of each linear region is determined by the original slopes $\theta_{\bullet 1}$ and the weights $\phi_{\bullet}$ that were subsequently applied. 
- For example, the slope in the shaded region is $\phi_{1}\theta_{11}+\phi_{3}\theta_{31}$, where the first term is the slope in panel (g) and the second is the slope in panel (i).

Each hidden unit contributes one “joint” to the function, so with three hidden units, there can be four linear regions. However, only three of the slopes of these regions are independent; the fourth is either zero (if all the hidden units are inactive in this region) or is a sum of slopes from the other regions.

## Network Visualization
The network we've been discussing has one input, one output, and three hidden units. This can be depicted as such:

![[Shallow Neural Network-2.png]]