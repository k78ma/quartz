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

![[Composing Shallow Networks.png|550]]

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
h_{1}'= a[\theta_{10}'+\theta_{11}'y] \\
h_{2}'= a[\theta_{20}'+\theta_{21}'y] \\
h_{3}'= a[\theta_{30}'+\theta_{31}'y]
\end{align}
$$
and
$$
y'=\phi_{0}'+\phi_{1}'h_{1}'+\phi_{2}'h_{2}'+\phi_{3}'h_{3}'
$$

![[Composing Shallow Networks-1.png|580]]

- The first network maps inputs $x \in [-1,1]$ to outputs $y\in [-1,1]$ using a function comprising three linear regions that are chosen so that they alternate the sign of their slope (4th linear region is outside range of graph). Multiple inputs $x$ (gray circles) now map to the same output $y$ (cyan circle).
- The second network defines a function comprising three linear regions that takes $y$ and returns $y'$ (i.e. the cyan circle is mapped to the brown circle).
- The combined effect of these 2 functions when composed is that three different inputs $x$ are mapped to any given value of $y$ by the first network and are processed the same way by the second network.
- The result is that the function defined by the second network in panel (c) is duplicated three times, variously flipped and rescaled according to the slope of the regions of panel (b).

With [[Rectified Linear Unit|ReLU]] activations, this model also describes a family of piecewise linear functions. However, the number of linear regions is potentially greater than for a shallow network with 6 hidden units. To see this, consider choosing the first network to produce three alternating regions of positive and negative slope (panel b above). This means that three different ranges of $x$ are mapped to the same output range $y \in [-1,1]$, and the subsequent mapping from this range of $y$ to $y'$ is applied three times. The overall effect is that the function defined by the second network is duplicated three times to create nine linear regions.

The same principle applies in higher dimensions as well.

![[Composing Shallow Networks-2.png|604]]

A different way to think about composing networks is that the first network "folds" input space $x$ onto itself so that multiple inputs generate the same output. Then the second network applies a function, which is replicated at all points that were folded on top of one another.

![[Composing Shallow Networks-3.png|612]]

## From composing networks to deep networks
We can show that our composition of networks is a special case of a [[Deep Neural Network]] with two hidden layers. The first layer is defined by
$$
\begin{align}
h_{1} & = a[\theta_{10}+\theta_{11}x] \\
h_{2} & =a[\theta_{20}+\theta_{21}x] \\
h_{3} & =a[\theta_{30}+\theta_{31}x]
\end{align}
$$
The output of the first network ($y=\phi_{0}+\phi_{1}h_{1}+\phi_{2}h_{2}+\phi_{3}h_{3}$) is a linear combination of the activations of the hidden units. The first operations of the second network ($\theta'_{10}+\theta'_{11}y, \theta'_{20}+\theta'_{21}y, \theta'_{30}+\theta'_{31}y$) are linear in the output of the first network. Applying one linear function to another yields another linear function. 

Substituting the expression for $y$ in the calculation of hidden units in the second network gives:
$$
\begin{align}
h_{1}'= a[\theta_{10}'+\theta_{11}'y] = a[\theta'_{10}+\theta'_{11}\phi_{0}+  \theta'_{11}\phi_{1}h_{1}+\theta'_{11}\phi_{2}h_{2}+\theta'_{11}\phi_{3}h_{3}] \\
h_{2}'= a[\theta_{20}'+\theta_{21}'y] = a[\theta'_{20}+ \theta'_{21}\phi_{0}+ \theta'_{21}\phi_{1}h_{1}+\theta'_{21}\phi_{2}h_{2}+\theta'_{21}\phi_{3}h_{3}]\\
h_{3}'= a[\theta_{30}'+\theta_{31}'y] = a[\theta'_{30}+ \theta'_{31}\phi_{0}+ \theta'_{31}\phi_{1}h_{1}+\theta'_{31}\phi_{2}h_{2}+\theta'_{31}\phi_{3}h_{3}]
\end{align}
$$
which can be re-written as:
$$
\begin{align}
h_{1}'=a[\psi_{10}+\psi_{11}h_{1}+\psi_{12}h_{2}+\psi_{13}h_{3}] \\
h_{2}'=a[\psi_{20}+\psi_{21}h_{1}+\psi_{22}h_{2}+\psi_{23}h_{3}] \\
h_{3}'=a[\psi_{30}+\psi_{31}h_{1}+\psi_{32}h_{2}+\psi_{33}h_{3}] \\
\end{align}
$$
where $\psi_{10}=\theta'_{10}+\theta'_{11}\phi_{0}, \psi_{11}=\theta'_{11}\phi_{1}, \psi_{12}=\theta'_{11}\phi_{2}$ and so on. Finally we can define the output by:
$$
y'=\phi'_{0}+\phi_{1}'h_{1}'+\phi_{2}'h_{2}'+\phi_{3}'h_{3}'
$$

The result is a network with two hidden layers.

![[Composing Shallow Networks-4.png|564]]

It follows that a network with two layers can represent the family of functions created by passing the output of one single-layer network into another. It represents a broader family, because the nine slope parameters, $\psi_{11}, \psi_{21}, \dots, \psi_{33}$ can take arbitrary values, whereas the original parameters are constrained to be the outer product $[\theta_{11}', \theta_{21}', \theta'_{31}]^{T}[\phi_{1},\phi_{2}, \phi_{3}]$.

Considering the above equations leads to another way of thinking about how the network constructs an increasingly complex function:
1. The three hidden units $h_{1}, h_{2}$ and $h_{3}$ in the first layer are computed as usual by forming linear functions of the input and passing these through ReLU activation functions.
2. The pre-activations at second layer are computed by taking three new linear functions of these hidden units. At this point, we effectively have a shallow network with three outputs; we have computed three piecewise linear functions with the "joints" between linear regions in the same places.
3. At the second hidden layer, another ReLU function is applied to each function, which clips them and adds new "joints" to each.
4. The final output is a linear combination of these hidden units.

We can think of each layer as "folding" the input space or as creating the new functions, which are clipped (creating new regions) and then recombined. The former view emphasizes the dependencies in the output, but not how clipping creates new joints, and the latter has the opposite emphasis. Both only provide partial insight into how deep neural networks operate.

It's important to not lose sight of the fact that this is still merely an equation relating input $x$ to output $y'$. We can combine all the equations to get one expression:
$$
\begin{align}
y'=\phi_{0}' & +\phi_{1}'a[\psi_{10}+\psi_{11}a[\theta_{10}+\theta_{11}x]+\psi_{12}a[\theta_{20}+\theta_{21}x]+\psi_{13}a[\theta_{30}+\theta_{31}x]] \\
&+\phi_{2}'a[\psi_{20}+\psi_{21}a[\theta_{10}+\theta_{11}x]+\psi_{22}a[\theta_{20}+\theta_{21}x]+\psi_{23}a[\theta_{30}+\theta_{31}x]] \\
&+\phi_{3}'a[\psi_{30}+\psi_{31}a[\theta_{10}+\theta_{11}x]+\psi_{32}a[\theta_{20}+\theta_{21}x]+\psi_{33}a[\theta_{30}+\theta_{31}x]]    
\end{align}
$$

![[Composing Shallow Networks-20250415003023211.png|599]]

## Matrix Notation
We can describe our composition above in matrix notation as:
$$
\begin{bmatrix}
h_{1} \\
h_{2} \\
h_{3}
\end{bmatrix}=a\begin{bmatrix}
\begin{bmatrix}
\theta_{10} \\
\theta_{20} \\
\theta_{30}
\end{bmatrix}+\begin{bmatrix}
\theta_{11} \\
\theta_{21} \\
\theta_{31}
\end{bmatrix}x
\end{bmatrix}
$$
and
$$
\begin{bmatrix}
h_{1}' \\
h_{2}' \\
h_{3}'
\end{bmatrix}=a \begin{bmatrix}
\begin{bmatrix}
\psi_{10} \\
\psi_{20} \\
\psi_{30}
\end{bmatrix}+\begin{bmatrix}
\psi_{11} & \psi_{12} & \psi_{13} \\
\psi_{21} & \psi_{22} & \psi_{23} \\
\psi_{31} & \psi_{32} & \psi_{33}
\end{bmatrix} \begin{bmatrix}
h_{1} \\
h_{2} \\
h_{3}
\end{bmatrix}
\end{bmatrix}
$$
and
$$
y'=\phi_{0}'+\begin{bmatrix}
\phi_{1}'  & \phi_{2}' & \phi_{3}'
\end{bmatrix} \begin{bmatrix}
h_{1}' \\
h_{2}' \\
h_{3}'
\end{bmatrix}
$$
or even more compactly as
$$
\begin{align}
\mathbf{h} & =a[\mathbf{\theta}_{0}+\mathbf{\theta}x] \\
\mathbf{h}' & =a[\mathbf{\psi}_{0}+\Psi \mathbf{h}] \\
y' & =\phi_{0}'+\mathbf{\phi}'\mathbf{h}'
\end{align}
$$
where, in each case, the function $a[\cdot]$ applies the activation function separately to every element of its vector input.