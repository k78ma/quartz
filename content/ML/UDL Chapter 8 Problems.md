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
> Consider the curve in figure 8.10b at the point where we train a model with a hidden layer of size 200, which would have 50,410 parameters. What do you predict will happen to the training and test performance if we increase the number of training examples from 10,000 to 50,410.
> 
> ![[UDL Chapter 8 Problems-20250904233131622.png]]

The training performance would be worse than before, as the number of model parameters compared to training examples is less than before, making the training set harder to memorize. However, testing performance may be better; with more data, variance decreases, resulting in less test error. One can also argue that noise, while irreducible, is diluted in this case because the model can rely on more clean samples.


> [!question] Problem 8.5
> Consider the case where the model capacity exceeds the number of training data points, and the model is flexible enough to reduce the training loss to zero. What are the implications of this for fitting a heteroscedastic model? Propose a method to resolve any problems that you identify.

Recall that [[Heteroscedastic Regression|heteroscedastic]] means that the uncertainty of the model varies as a function of input data.

In this case, we would typically predict the variance as a model output in the training process. However, if we are overparametrized, there are no residuals to train the variance on, so the variance would always be zero.

Some ways to deal with this would be to compute residuals on held-out predictions and train the variance on those instead of in-sample points. Or, we could constrain by putting some floor variance. The obvious best thing to do would be [[Regularization|regularization]] to keep the model from perfectly fitting but the point here is to overfit I think.

> [!question] Problem 8.6
> 


> [!question] Problem 8.7
> 


> [!question] Problem 8.8
> 


> [!question] Problem 8.9
> 




