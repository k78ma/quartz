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
> 


> [!question] Problem 8.3
> 


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




