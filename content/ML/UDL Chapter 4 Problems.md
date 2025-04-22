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
> \text{ReLU}\Big[\beta_{1}+\lambda_{1}\cdot \Omega_{1}\text{ReLU}[\beta_{0}+\lambda_{0}\cdot \Omega_{0}\mathbf{x}]\Big] = \lambda_{0}\lambda_{1}\cdot \text{ReLU}\left[ \frac{1}{\lambda_{0}\lambda_{1}}\beta_{1}+\Omega_{1} \text{ReLU}\left[ \frac{1}{\lambda_{0}}\beta_{0}+\Omega_{0}\mathbf{x} \right]  \right]
> $$
> where $\lambda_{0}$ and $\lambda_{1}$ are non-negative scalars. From this, we see that the weight matrices can be rescaled by any magnitude as long as the biases are also adjusted, and the scale factors can be re-applied at the end of the network.

The non-negative homogeneity property states that:
$$
\text{ReLU}[\alpha\cdot z]=\alpha\cdot \text{ReLU}[z]
$$
We have
$$
\begin{align}
 & \text{ReLU}\Big[\beta_{1}+\lambda_{1}\cdot \Omega_{1}\text{ReLU}[\beta_{0}+\lambda_{0}\cdot \Omega_{0}\mathbf{x}]\Big] \\[2ex]
 & =\text{ReLU}\left[ \lambda_{1} \cdot \left(\frac{\beta_{1}}{\lambda_{1}}+  \Omega_{1} \text{ReLU} \left[ \lambda_{0}\cdot  \left(\frac{\beta_{0}}{ \lambda_{0}}+ \Omega_{0}\mathbf{x} \right) \right]  \right)\right] \\[2ex]
& = \lambda_{1} \text{ReLU}\left[ \frac{\beta_{1}}{\lambda_{1}}+ \lambda_{0}\Omega_{1}\text{ReLU}\left[ \frac{\beta_{0}}{\lambda_{0}}+\Omega_{0}\mathbf{x} \right] \right] \\[2ex]
& = \lambda_{1}\text{ReLU}\left[ \lambda_{0}\left( \frac{\beta_{1}}{\lambda_{1}\lambda_{0}}+\Omega_{1} \text{ReLU}\left[ \frac{\beta_{0}}{\lambda_{0}}+\Omega_{0}\mathbf{x} \right] \right) \right] \\[2ex]
& = \lambda_{0}\lambda_{1}\text{ReLU}\left[ \frac{\beta_{1}}{\lambda_{1}\lambda_{0}}+\Omega_{1}\text{ReLU}\left[ \frac{\beta_{0}}{\lambda_{0}}+\Omega_{0} \mathbf{x} \right] \right]
\end{align}
$$
as desired.


> [!question] Problem 4.4
> Write out the equations for a deep neural network that takes $D_{i} = 5$ inputs, $D_{o} = 4$ outputs and has three hidden layers of sizes $D_{1} = 20$, $D_{2} = 10$, and $D_{3} = 7$, respectively, in both the forms of equations 4.15 and 4.16. What are the sizes of each weight matrix $\Omega_{\bullet}$ and bias vector $\beta_{\bullet}$? 

Individual equations (like 4.15):
$$
\begin{align}
\mathbf{h}_{1} & =a[\beta_{0}+\Omega_{0}\mathbf{x}] \\
\mathbf{h}_{2} & =a[\beta_{1}+\Omega_{1}\mathbf{h}_{1}] \\
\mathbf{h}_{3} & =a[\beta_{2}+\Omega_{2}\mathbf{h}_{2}] \\
\mathbf{y} & = \beta_{3}+\Omega_{3}\mathbf{h}_{3}
\end{align}
$$
One equation (like 4.16):
$$
\mathbf{y}=\beta_{3}+\Omega_{3}a[\beta_{2}+\Omega_{2}a[\beta_{1}+\Omega_{1}a[\beta_{0}+\Omega_{0}\mathbf{x}]]]
$$
Sizes:
- $\Omega_{0}: 20\times 5$
- $\beta_{0}:20$
- $\Omega_{1}:10\times 20$
- $\beta_{1}:10$
- $\Omega_{2}:7\times 10$
- $\beta_{2}:7$
- $\Omega_{3}:4\times 7$
- $\beta_{3}:4$

> [!question] Problem 4.5
> Consider a deep neural network with $D_{i}=5$ inputs, $D_{o}=1$ output, and $K=20$ hidden layers containing $D=30$ hidden units each. What is the depth of this network? What is the width?

- Depth is 20 (number of hidden layers)
    - Or 21 if we count the output layer? In this case, the definition we're using is "number of layers with parameters" instead of number of hidden layers
- Width is 30 (number of hidden units in each layer)


> [!question] Problem 4.6
> Consider a network with $D_{i}=1$ input, $D_{o}=1$ output, and $K=10$ layers, with $D=10$ hidden units in each. Would the number of weights increase more if we increased the depth by one or the width by one? 

Original: 
- Input to $h_{1}$: $10\times 1=10$
- Between 9 hidden layers: $9\times 10\times 10=900$
- Last hidden to output: $10\times 1=10$
- Each hidden layer has 10 biases: $9\times 10=90$
- Output layer: $1$ bias
- Total:  $10+900+10+90+1=1011$

Increase depth by 1:
- Input to $h_{1}$: $10\times 1=10$
- Between 9 hidden layers: $10\times 10\times 10=1000$
- Last hidden to output: $10\times 1=10$
- Each hidden layer has 10 biases: $10\times 10=100$
- Output layer: $1$ bias
- Total:  $10+1000+10+100+1=1121$

Increase width by 1:
- Input to $h_{1}$: $11\times 1=11$
- Between 9 hidden layers: $9\times 11\times 11=1089$
- Last hidden to output: $11\times 1=11$
- Each hidden layer has 10 biases: $9\times 11=99$
- Output layer: $1$ bias
- Total:  $11+1089+11+99+1=1211$

> [!question] Problem 4.7
> Choose values for the parameters $\mathbf{\phi}=\{ \phi_{0}, \phi_{1}, \phi_{2}, \phi_{3}, \theta_{10}, \theta_{11}, \theta_{20}, \theta_{21}, \theta_{30}, \theta_{31} \}$  for the shallow neural network in equation 3.1 (with ReLU activation functions) that will define an identity function over a finite range $x \in [a,b]$.

The function is:
$$
\begin{align}
y & =f[x, \phi] \\
 & = \phi_{0}+\phi_{1}a[\theta_{10}+\theta_{11}x]+\phi_{2}a[\theta_{20}+\theta_{21}x]+\phi_{3}a[\theta_{30}+\theta_{31}x]
\end{align}
$$
We want it to be the identity function, such that
$$
\begin{align}
y & = f[x,\phi] \\
     & =x
\end{align}
$$
If we have:
- $\phi_{0}=0$
- $\phi_{1}=1$
- $\theta_{10}=0$
- $\theta_{11}=1$
- $\phi_{2}=1$
- $\theta_{20}=0$
- $\theta_{21}=1$
- $\phi_{3}=1$
- $\theta_{30}=0$
- $\theta_{31}=1$

We would get $y=3\cdot\text{ReLU}[x]$, which only equals $x>0$ and has slope $3$ instead of $1$.

Instead, we need
- $\phi_{0}=a$
- $\phi_{1}=1$
- $\theta_{10}=-a$
- $\theta_{11}=1$
- $\phi_{2}=-1$
- $\theta_{20}=-b$
- $\theta_{21}=1$
- $\phi_{3}=0$
- $\theta_{30}=0$
- $\theta_{31}=1$

which expands to
$$
\begin{align}
f[x, \phi] & =a+ \text{ReLU}[x-a]-\text{ReLU}[x-b] \\
     & = a+ \text{max}[0, x-a]-\text{max}[0,x-b]
\end{align}
$$
If we have:
- $x\leq a$, both ReLUs are 0 so $f[x]=a$
- $a\leq x\leq b$, the first ReLU is active, so we have $f[x]=a+(x-a)=x$
- $x\geq b$, both ReLUs are active, so we have $f[x]=a+(x-a)-(x-b)=b$

> [!question] Problem 4.8
> 


> [!question] Problem 4.9
> 


> [!question] Problem 4.10
> 


> [!question] Problem 4.11


