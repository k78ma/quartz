---
title: UDL Chapter 4 Problems
tags:
  - dl
date: 2025-04-10
aliases:
  - udl chapter 4 problems
---
> [!question] Problem 4.1
> Consider composing the two neural networks in figure 4.8. Draw a plot of the relationship between the input $x$ and output $y'$ for $x \in  [−1, 1]$. 


![[UDL Chapter 4 Problems-20250414130531197.png|489]]


> [!question] Problem 4.2
> Identify the four parameters in figure 4.6.

- $K=3$
- $D_{1}=4$
- $D_{2}=2$
- $D_{3}=3$


> [!question] Problem 4.3
> Using the non-negative homogeneity property of the ReLU function (see problem 3.5), show that: 
> $$
> \text{ReLU}\Big[\beta_{1}+\lambda_{1}\cdot \Omega_{1}\text{ReLU}[\beta_{0}+\gamma_{0}\cdot \Omega_{0}\mathbf{x}]\Big] = \lambda_{0}\lambda_{1}\cdot \text{ReLU}\left[ \frac{1}{\lambda_{0}\lambda_{1}}\beta_{1}+\Omega_{1} \text{ReLU}\left[ \frac{1}{\lambda_{0}}\beta_{0}+\Omega_{0}\mathbf{x} \right]  \right]
> $$
> where $\lambda_{0}$ and $\lambda_{1}$ are non-negative scalars. From this, we see that the weight matrices can be rescaled by any magnitude as long as the biases are also adjusted, and the scale factors can be re-applied at the end of the network.




> [!question] Problem 4.4
> Write out the equations for a deep neural network that takes $D_{i} = 5$ inputs, $D_{o} = 4$ outputs and has three hidden layers of sizes $D_{1} = 20$, $D_{2} = 10$, and $D_{3} = 7$, respectively, in both the forms of equations 4.15 and 4.16. What are the sizes of each weight matrix $\Omega_{\bullet}$ and bias vector $\beta_{\bullet}$? 





> [!question] Problem 4.5
> Consider a deep neural network with $D_{i}=5$ inputs, $D_{o}=1$ output, and $K=20$ hidden layers containing $D=30$ hidden units each. What is the depth of this network? What is the width?




> [!question] Problem 4.6
> Consider a network with $D_{i}=1$ input, $D_{o}=1$ output, and $K=10$ layers, with $D=10$ hidden units in each. Would the number of weights increase more if we increased the depth by one or the width by one? 



> [!question] Problem 7
> 


> [!question] Problem 8
> 


> [!question] Problem 9
> 


> [!question] Problem 10
> 


