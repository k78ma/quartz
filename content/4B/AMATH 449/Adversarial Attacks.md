---
title: Adversarial Attacks
tags:
  - amath449
date: 2026-04-03
aliases: adversarial attacks
---
We can easily fool a classify network into misclassifying an input.

Suppose we are given a dataset.
$$
D = \{ (x,t) \, | \,x \in X, t\in  \{ 1,\dots,K \} \}
$$
for $X \subset \mathbb{X}$, where the class of $x$ is $t$.

Let $f\, : \, \mathbb{X}\to \mathbb{P}^{K}$ be a classifier network, where
$$
\mathbb{P}^{K} = \left\{   y \in  \mathbb{R}^{K} \, | \,0 \leq y_{i} \leq 1,\, \sum_{i}y_{i}=1  \right\}
$$
represents probability vectors, such as those produced by a softmax function.

The classification error is defined as:
$$
R(f) \equiv \mathbb{E}_{D}[\mathbb{1} \{ \underset{i}{\operatorname{argmax}} (y_{i}) \neq t \} \, | \,(x,t)\in  D, y=f(x)]
$$
where:
- $\mathbb{1}$ counts the number of occurrences
- $\underset{i}{\operatorname{argmax}} y_{i}$ gives the index of the largest element of $y$

Let's define the $\epsilon$-ball (neighborhood) of an input $x$ as:
$$
\mathbb{B}(x,\epsilon) = \{ x'\in  \mathbb{X} \, | \, || x'-x || \leq \epsilon \}
$$

![[Adversarial Attacks-1775245547644.webp|324]]

We ask ourselves, given an $(x,t)\in D$, is there $x'\in \mathbb{B}(x,\epsilon)$ such that
$$
\underset{i}{\operatorname{argmax}}(y_{i})\neq t, \quad  y=f(x')
$$
In other words, is there a very nearby input that would fool the network and yield an incorrect classification?

![[Adversarial Attacks-1775245659842.webp]]

These can actually be found quite easily. This is called an adversarial attack. There are two main classes of adversarial attacks:
- **Whitebox**: Attacker has access to the whole model, e.g., weights, activations, etc.
- **Blackbox**: Attacker only has access to inputs and outputs

## Gradient-Based Whitebox Attack
This is a common whitebox attack method. Recall that learning is done by gradient descent:
$$
\theta = \theta-\kappa \nabla_{\theta}E
$$
where $E$ is our loss function. Using backpropagation, we propagate the gradient of the cost function down through the layers of the network:

![[Adversarial Attacks-1775245834115.webp|356]]

We can calculate $\nabla_{x}E$ using $\nabla_{z^{1}}E$:
$$
\begin{align}
z^{1}  & = xW^{0}+b^{1} \\[2ex]
\nabla_{x}E  & = \nabla_{z_{1}}E \frac{ \partial z^{1} }{ \partial x }  = \nabla_{z^{1}} E \cdot (W^{0})^{T}
\end{align}
$$
This gives us the gradient of the loss with respect to the input, telling us how to adjust out input in order to decrease (**or increase**) the loss.

Untargeted attack:
$$
x'=x+k\nabla_{x}E(f(x;\theta),t(x))
$$
This is essentially gradient ascent, pushing image in a direction to increase loss.

Targeted attack:
$$
x' = x-k\nabla_{x}E(f(x;\theta), l)
$$
where $l \neq t(x)$. This is gradient descent nudging the input to decrease loss for the wrong target class.

For example, a change in pixel intensity of $1$ in an 8-bit image is imperceptible to the human eye. If we want to perturb our image by $1$ for each pixel, then we let the perturbation be:
$$
\Delta x=\text{sign}(\nabla_{x}E)
$$
such that $\Delta x=\pm {1}$. This means that $|| \Delta x ||_{\infty}=1$.

![[Adversarial Attacks-1775246348213.webp]]

The more general version of this is FGSM:

> [!definition] Fast Gradient Sign Method
> FGSM adjusts each pixel by $\epsilon$, such that $\Delta x = \epsilon \, \text{sign}(\nabla_{x}E)$. 
> 
> For example, for a 24-bit image where $(R,G,B) \in \{ 0,\dots,255 \}^{3}$, the perturbed image is computed as:
> $$
> (R,G,B)' = (R,G,B) \pm \epsilon \, \text{sign}(\nabla_{x}E)
> $$
> which ensures that the perturbation follows $|| \Delta x ||_{\infty}=\epsilon$.
> 
> Instead of applying a fixed perturbation, one can also search for the smallest $|| \Delta x ||$ that causes misclassification:
> $$
> \underset{|| \Delta x ||}{\operatorname{min}}[\underset{i}{\operatorname{argmax}}(y_{i}(x)) \neq t(x) ]
> $$


## Intuition
Why are classification networks so easily fooled?

Consider the input space of $28\times 28$ for MNIST, such that there are $784$ total dimensions. That's a lot of space. The classification partitions this high-dimensional space into 10 regions, one for each class. 

It turns out that most points are not too far away from a decision boundary.

![[Adversarial Attacks-1775246687450.webp]]

Learning is:
$$
\underset{\theta}{\operatorname{min}} \mathbb{E}_{D}[L(f(x),t)]
$$
Untargeted attack:
$$
\underset{x' \in  \mathbb{B}(x,\epsilon)}{\operatorname{max}} L(f(x'),t)
$$

Targeted attack:
$$
\underset{x' \in  \mathbb{B}(x,\epsilon)}{\operatorname{min}} L(f(x'),\ell), \quad  \ell \neq t
$$


![[Adversarial Attacks-1775246894052.webp|547]]

