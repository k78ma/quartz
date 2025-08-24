---
title: UDL Chapter 8 Problems
tags:
  - dl
date: 2025-08-17
aliases:
  - udl chapter 8 problems
---
> [!question] Problem 8.1
> Will the multiclass cross-entropy loss in figure 8.2 ever reach zero? Explain your reasoning.
> 
> ![[UDL Chapter 8 Problems-20250823162953899.png]]

In [[Multi-class Classification|multi-class classification]], the likelihood that input $\mathbf{x}$ has label $y=k$ is:
$$
Pr(y=k|\mathbf{x})=\text{softmax}_{k}\Big[f[\mathbf{x}, \phi]\Big]
$$
and the loss function is the negative log-likelihood of the training data:
$$
\begin{align}
L[\phi] & = - \sum_{i=1}^{I} \log \Big[ \text{softmax}_{y_{i}} \Big[ f[\mathbf{x_{i}}, \phi] \Big] \Big] \\[2ex] 
\end{align}
$$
Thus, for the loss to be zero, we need $\text{softmax}_{y_{i}} [ f[\mathbf{x_{i}}, \phi]]$ to be $1$. This is impossible as $\text{softmax}[z]=1$ only for $z\to \infty$. With any finite parameters, we will have $\text{softmax}[z]<1$. Thus, although we can get arbitrarily close to zero, we will never get exactly zero. 

> [!question] Problem 8.2
> What values should we choose for the three weights and biases in the first layer of the model in figure 8.4a so that the hidden unit’s responses are as depicted in figures 8.4b–d? 

- The weights should all be $1$.
- First bias: $0$
- Second bias: $-\frac{1}{3}$
- Third bias: $-\frac{2}{3}$


> [!question] Problem 8.3
> Given a training dataset consisting of $I$ input/output pairs $\{ x_{i}, y_{i} \}$, show how the parameters $\{ \beta, \omega_{1}, \omega_{2}, \omega_{3} \}$ for the model in figure 8.4a using the least squares loss function can be found in closed form. 

The first part of the network is deterministic since we've fixed the weights and the biases between the input and the first hidden layer. Thus, we can compute the activations at the hidden units for any input. Denoting these by $h_{1}, h_{2},h_{3}$, we can write out the output layer now have a linear regression problem:
$$
y_{i}=\beta+\omega_{1}h_{1i}+ \omega_{2}h_{2i}+\omega_{3}h_{3i}
$$
where $i$ indexes the training data. This can be solved in closed form with [[Ordinary Least Squares]] for example.



> [!question] Problem 8.4
> 


> [!question] Problem 8.5
> 


> [!question] Problem 8.6
> 


> [!question] Problem 8.7
> 


> [!question] Problem 8.8
> 


> [!question] Problem 8.9
> 




