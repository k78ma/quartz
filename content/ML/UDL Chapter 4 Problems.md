---
title: UDL Chapter 4 Problems
tags:
  - dl
date: 2025-04-10
aliases:
  - udl chapter 4 problems
draft:
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
> Figure 4.9 shows the activations in the three hidden units of a shallow network (as in figure 3.3). The slopes in the hidden units are $1.0$, $1.0$, and $-1.0$, respectively, and the “joints” in the hidden units are at positions $1/6$, $2/6$, and $4/6$. 
> - Find values of $\phi_{0}, \phi_{1}, \phi_{2}$, and $\phi_{3}$ that will combine the hidden unit activations as $\phi_{0} + \phi_{1}h_{1} + \phi_{2}h_{2} + \phi_{3}h_{3}$ to create a function with four linear regions that oscillate between output values of zero and one. The slope of the leftmost region should be positive, the next one negative, and so on. 
> - How many linear regions will we create if we compose this network with itself? 
> - How many will we create if we compose it with itself $K$ times? 

Region 1:
- Only $h_{3}$ is active. Its joint is at $\frac{4}{6}$, so the pre-activation for $h_{3}(x)$ is $-x + \frac{4}{6}$.
- We need:
$$
\begin{align}
y(0) & =\phi_{0}+\phi_{3}\left( -0+\frac{4}{6} \right) = 0 \\[2ex]
y\left( \frac{1}{6} \right)  & = \phi_{0}+\phi_{3}\left( -\frac{1}{6}+\frac{4}{6} \right)=1
\end{align}
$$
- Solving the system of equations gives $\phi_{0}=4, \phi_{3}=-6$.

Region 2:
- $h_{1}$ and $h_{3}$ are active, which means that the region has a slope of $\phi_{1}-\phi_{3}$.
- To get the output back down from $y\left( \frac{1}{6} \right)=1$ to $y\left( \frac{2}{6} \right)=0$, we need a slope of $\frac{-1}{\frac{2}{6}-\frac{1}{6}}= -6$. 
- Since we have $\phi_{3}=-6$, this gives $\phi_{1}=-12$.

Region 2:
- $h_{1}$, $h_{2}, h_{3}$ are active, so the slope will be $\phi_{1}+\phi_{2}-\phi_{3}$.
- To get the output back up from $y\left( \frac{2}{6} \right)=0$ to $y\left( \frac{4}{6} \right)=1$, we need slope of $\frac{1}{\frac{4}{6}-\frac{2}{6}}=3$.
- Since we have $\phi_{1}=-12, \phi_{3}=-6$, we have $\phi_{2}=9$.

Region 4:
- $h_{1}$ and $h_{2}$ are active, so the slope will be $\phi_{1}+\phi_{2}$.
- To get the output down from $y\left( \frac{4}{6} \right)=1$ to $y(1)=0$, we need a slope of $\frac{-1}{1-\frac{4}{6}}=-3$.
- We already achieve this with $\phi_{1}=-12$ an $\phi_{2}=-9$.

If we compose the network with itself once, we will get $4^2=16$ regions; each region in the second network is replicated four times.

If we compose the network with itself $K$ times, we will get $4^{K+1}$ regions.

![[UDL Chapter 4 Problems-20250603081101638.png]]


> [!question] Problem 4.9
> Following problem 4.8, is it possible to create a function with three linear regions that oscillates back and forth between output values of zero and one using a shallow network with two hidden units? Is it possible to create a function with five linear regions that oscillates in the same way using a shallow network with four hidden units? 

It is not possible to create a function with three linear regions that oscillates back and forth between output values of 0 and 1 using a shallow network with two hidden units. At best it can rise and fall once, producing only two linear pieces with opposite slopes.
- Each hidden ReLU unit can change the output slope once—at the joint where that ReLU switches on or off.
- for 0-1-0-1 (or $+ - +$), we would need two segments that have positive slope, but this isn't possible because a ReLU only activates once, so the positive hidden unit can only turn on/off once.
- Because one unit’s jump adds a positive amount to the slope and the other unit’s jump subtracts a positive amount, the slope can go up-then-down, down-then-up, but never up-down-up (two flips) or down-up-down.

However, it is possible to create a function with five linear regions that oscillates in the same way using a shallow network with four hidden units, and generally, for $N \geq 3$ hidden units it’s possible to make a function that oscillates back and forth $N + 1$ times.
- Four units provide four independent slope jumps, letting you enforce the sign pattern $+ - + - +$.  
- That yields five alternating linear pieces $0 \to 1 \to 0 \to 1 \to 0 \to 1$, so the five-region oscillation is achievable with a shallow network that has four hidden units.


> [!question] Problem 4.10
> Consider a deep neural network with a single input, a single output, and $K$ hidden layers, each of which contains $D$ hidden units. Show that this network will have a total of $3D + 1 + (K − 1)D(D + 1)$ parameters. 

- Input to first hidden layer has $D$ weights and $D$ biases – $2D$
- Between hidden layers we connect $D$ units to $D$ units
    - $D^{2}$ weights, $D$ biases
    - This happens $K-1$ times
    - Total: $(K-1)(D^{2}+D)$
- Last hidden layer and output: $D$ weights and $1$ bus – $1D+1$

Total:
$$
3D+1 + (K-1)(D^{2}+D)
$$
which is the same thing as $3D + 1 + (K − 1)D(D + 1)$.


> [!question] Problem 4.11
> Consider two neural networks that map a scalar input $x$ to a scalar output $y$. The first network is shallow and has $D = 95$ hidden units. The second is deep and has $K = 10$ layers, each containing $D = 5$ hidden units. How many parameters does each network have? How many linear regions can each network make (see equation 4.17)? Which would run faster? 

The first network has:
$$
3\cdot 95+1 = 286 \text{ parameters}
$$
The second network has:
$$
(3 \cdot  5) + 1+(10-1)(5^{2+5)}= 286 \text{ parameters}
$$
For the shallow network, since there is just one input, each hidden unit creates one joint, for a total of 95 joints separating 96 linear regions. 

The number of linear regions for the deep network is given by [[Linear Regions Per Parameter for Neural Network|equation 4.17]]:
$$
N_{r}=\left( \frac{D}{D_{i}}+1  \right)^{D_{i}(K-1)} \cdot  \sum_{j=0}^{D_{i}} {D \choose j} = 60,466,176
$$
In principle, the shallow network will be faster to run on modern hardware as the computation is more parallel.