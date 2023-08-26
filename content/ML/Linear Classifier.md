---
title: "Linear Classifier"
tag: ml
date: 2023-06-25
alias:
---

Hypothesis class of machine learning models.

>[!note] Definition
>A linear classifier in $d$ dimensions is defined by the parameters $\theta \in \mathbb{R}^d$ and $\theta_{0} \in \mathbb{R}$:
>$$
>h(x; \theta, \theta_{0}) = \text{sign}(\theta^{T}x+ \theta_{0})= 
>\begin{cases} 
> +1 \text{ if } \theta^{T}x + \theta_{0}> 0 \\
> -1 \text{ otherwise}
>\end{cases}
>$$

>[!tip]- Example
>Let $\theta = \begin{bmatrix} -1 \\ 1.5 \end{bmatrix}$ and $\theta_{0}=3$. Classify the points $x^{(1)} = \begin{bmatrix} 3 \\ 2 \end{bmatrix}$ and $x^{(2)} = \begin{bmatrix} 4 \\ -1 \end{bmatrix}$.
>$$h(x^{(1)}; \theta, \theta_{0}) = \text{sign}(\begin{bmatrix} -1 & 1.5 \end{bmatrix} \begin{bmatrix} 3 \\ 2 \end{bmatrix} + 3) = \text{sign}(3) = 1
>$$
>$$h(x^{(2)}; \theta, \theta_{0}) = \text{sign}(\begin{bmatrix} -1 & 1.5 \end{bmatrix} \begin{bmatrix} 4 \\ -1 \end{bmatrix} + 3) = \text{sign}(-2.5) = 1
>$$
>![500](ML/attachments/Pasted%20image%2020230708174900.png)


Algorithms:
- [Perceptron](ML/Perceptron.md)
- [Averaged Perceptron](ML/Averaged%20Perceptron.md)