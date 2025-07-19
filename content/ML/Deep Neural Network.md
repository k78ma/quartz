---
title: Deep Neural Network
tags:
  - dl
date: 2025-04-15
aliases:
  - deep neural network
---
We have seen that [[Composing Shallow Networks|composing shallow networks]] can give us complex functions. We can extend this to construct deep networks with more than two hidden layers; modern networks have hundreds of layers with thousands of hidden units at each layer.
- The number of hidden units in each layer is referred to as the *width* of the network
- The number of hidden layers is the *depth*
- The total number of hidden units is a measure of network *capacity*

## Hyperparameters
We denote the number of layers as $K$ and the number of hidden units in each layer as $D_{1}, D_{2},\dots,D_{K}$. These are examples of *hyperparameters*. They are quantities chosen before we learn the model parameters (i.e., the slope and intercept terms). For fixed hyperparameters (e.g., $K=2$ and $D_{k}=3$ hidden units each), the model describes a family of functions, and the parameters determine the particular function. Hence, when we also consider the hyperparameters, we can think of neural networks as representing a family of families of functions relating input to output. 

## General Formulation
- See [[Composing Shallow Networks#Matrix Notation]] for an introduction to matrix notation for a simple composition of shallow networks

We describe the vector of hidden units at layer $k$ as $\mathbf{h}_{k}$, the vector of biases (intercepts) that contribute to hidden layer $k+1$ as $\mathbf{\beta}_k$, and the weights (slopes) that are applied to the $k$-th layer and contribute to the $(k+1)$-th layer as $\Omega_{k}$. A general deep network $\mathbf{y}=\mathbf{f}[\mathbf{x}, \mathbf{\phi}]$ with $K$ layers can now be written as:
$$
\begin{align}
\mathbf{h}_{1} & =a[\beta_{0}+\Omega_{0}\mathbf{x}] \\
\mathbf{h}_{2} & =a[\beta_{1}+\Omega_{1} \mathbf{h}_{1}] \\
\mathbf{h}_{3} & =a[\beta_{2}+\Omega_{2}\mathbf{h_{2}}] \\
 & \,\,\, \vdots \\
\mathbf{h}_{K} & =a[\beta_{K-1}+\Omega_{K-1}\mathbf{h}_{K-1}] \\
\mathbf{y} & =\beta_{K}+\Omega_{K}\mathbf{h}_{K}
\end{align}
$$
The parameters $\phi$ of this model comprise all of these weight matrices and bias vectors $\phi=\{ \beta_{k}, \Omega_{k} \}_{k=0}^{K}$.

- If the $k$-th layer has $D_{k}$ has hidden units, then the bias vector $\beta_{k-1}$ will be of size $D_{k}$. The last bias vector $\beta_{K}$ has the size $D_{o}$ of the output. 
- The first weight matrix $\Omega_{0}$ has size $D_{1}\times D_{i}$ where $D_{i}$ is the size of the input. 
- The last weight matrix $\Omega_{K}$ is $D_{o}\times D_{K}$, and the remaining matrices $\Omega_{k}$ are $D_{k+1}\times D_{k}$

We can equivalently write the network as a single function:
$$
\mathbf{y}=\beta_{K}+\Omega_{K}[\beta_{K-1}+\Omega_{K-1}a[\dots \beta_{2}+\Omega_{2}a[\beta_{1}+\Omega_{1}a[\beta_{0}+\Omega_{0}\mathbf{x}]] \dots]]
$$

In diagram form:

![[Deep Neural Network-20250415173138789.png|606]]


> [!note] Clarification on terminology
> - Layer $k$ is the operation $\Omega_{k-1},\beta_{k-1}, a(\bullet)$
> - The activations $h_{k}$ is the result we get as a result of applying the operation layer $k$. 
> - However, "layer" is used to refer to "layer $k$'s activations" which can be confusing.

### Example Computation
Let's consider a numeric example of the above. We use a training input of
$$
\mathbf{x} = \begin{bmatrix}
1 \\
-1 \\
0.5
\end{bmatrix}
$$
**Layer 1:** We first have $\Omega_{0} \in \mathbb{R}^{4\times 3}$ that maps the input ($D_{i}=3$) to the first hidden layer ($D_{1}=4$), and a corresponding bias vector $\beta_{0} \in \mathbb{R}^{4}$:
$$
\Omega_{0} = \begin{bmatrix}
0.2 & -0.1 & 0.4 \\
0.7 & 0.3 & -0.5  \\
-0.6 & 0.8 & 0.1 \\
0.0 & -0.2 & 0.2
\end{bmatrix}, \quad \beta_{0}= \begin{bmatrix}
0.1 \\
-0.3 \\
0.05 \\
0.2
\end{bmatrix}
$$
Then, the first pre-activation is:
$$
\begin{align}
\mathbf{z}_{1}  & = \Omega_{0} \mathbf{x} + \beta_{0} \\[2ex]
     & = \begin{bmatrix}
(0.2)(1) + (-0.1)(-1) + (0.4)(0.5) \\
(0.7)(1) + (0.3)(-1) + (-0.5 )(0.5) \\
(-0.6)(1) + (0.8)(-1) + (0.1) (0.5) \\
(0.0)(1) + (-0.2)(-1) + (0.2) (0.5)
\end{bmatrix} + \begin{bmatrix}
0.1 \\
-0.3 \\
0.05 \\
0.2
\end{bmatrix}\\[2ex] 
     & = \begin{bmatrix}
0.5 \\
0.15 \\
-1.35 \\
0.3
\end{bmatrix} + \begin{bmatrix}
0.1 \\
-0.3 \\
0.05 \\
0.2
\end{bmatrix} \\[2ex]
     & = \begin{bmatrix}
0.6 \\
-0.15 \\
-1.3 \\
0.5
\end{bmatrix}
\end{align}
$$
Passing through ReLU to get to the complete first hidden layer:
$$
\mathbf{h}_{1}=a[\mathbf{z}_{1}] = \begin{bmatrix}
0.6 \\
0 \\
0 \\
0.5
\end{bmatrix}
$$

**Layer 2:** Now we have $\Omega_{1} \in \mathbb{R}^{2\times 4}$ that maps the first hidden layer ($D_{1}=4$) to the second hidden layer ($D_{2}=2$), and a corresponding bias vector $\beta_{1} \in \mathbb{R}^{2}$:
$$
\mathbf{\Omega}_{1}=\begin{bmatrix}
0.3 & -0.2 & 0.1 & 0.4 \\
-0.5 & 0.6 & 0.2 & -0.1
\end{bmatrix}, \quad  \beta_{1} = \begin{bmatrix}
0.05 \\
-0.1
\end{bmatrix}
$$
Then, the pre-activation is:
$$
\begin{align}
\mathbf{z}_{2}  & = \mathbf{\Omega_{1}}\mathbf{h}_{1}+\beta_{1} \\[2ex]
     & = \begin{bmatrix}
(0.3)(0.6) + (-0.2)(0) + (0.1)(0) + (0.4)(0.5) \\
(-0.5)(0.6) + (0.6)(0) + (0.2)(0) + (-0.1)(0.5)
\end{bmatrix} + \begin{bmatrix}
0.05 \\
-0.1
\end{bmatrix} \\[2ex]
     & = \begin{bmatrix}
0.38 \\
-0.35
\end{bmatrix}+\begin{bmatrix}
0.05 \\
-0.1
\end{bmatrix} \\[2ex]
     & =\begin{bmatrix}
0.43 \\
-0.45
\end{bmatrix}
\end{align}
$$
Passing through ReLU:
$$
\mathbf{h}_{2} = a[\mathbf{z}_{2}] = \begin{bmatrix}
0.43 \\
0
\end{bmatrix}
$$

**Layer 3:** Now, $\mathbf{\Omega_{2}}\in \mathbb{R}^{3\times 2}, \beta_{2} \in \mathbb{R}^{3}$:
$$
\Omega_{2} =
\begin{bmatrix}
0.2 & -0.1 \\
-0.3 & 0.4 \\
0.5 & 0.1
\end{bmatrix},
\quad
\beta_{2} =
\begin{bmatrix}
0.1 \\
0.2 \\
-0.05
\end{bmatrix}
$$
and we compute the pre-activation with:
$$
\begin{align}
\mathbf{z}_{3}  & = \Omega_{2}\mathbf{h}_{2} + \beta_{2} \\[2ex]
     &  =\begin{bmatrix}
(0.2)(0.43) + (-0.1)(0) \\
(-0.3)(0.43) + (0.4)(0) \\
(0.5)(0.43) + (0.1)(0)
\end{bmatrix} + \begin{bmatrix}
0.1 \\
0.2 \\
-0.05
\end{bmatrix} \\[2ex] 
 & =
\begin{bmatrix}
0.086 \\
-0.129 \\
0.215
\end{bmatrix} + \begin{bmatrix}
0.1 \\
0.2 \\
-0.05
\end{bmatrix} \\[2ex] 
     & = \begin{bmatrix}
0.186 \\
0.071 \\
0.165
\end{bmatrix}
\end{align}
$$
Then, applying ReLU to get the activations of the third hidden layer:
$$
\mathbf{h}_{3} = a[\mathbf{z}_{3}] = \begin{bmatrix}
0.186 \\
0.071 \\
0.165
\end{bmatrix}
$$
**Output layer:**
Finally, $\Omega_{3} \in \mathbb{R}^{2\times 3}$ and $\beta_{3} \in \mathbb{R}^{2}$:
$$
\mathbf{\Omega}_{3} = \begin{bmatrix}
0.4 & -0.2 & 0.1 \\
-0.3 & 0.5 & 0.2
\end{bmatrix}, \quad  \beta_{3} = \begin{bmatrix}
0.05 \\
-0.02
\end{bmatrix}
$$
We use these to compute the output pre-activation:
$$
\begin{align}
\mathbf{z}_{4}  & = \Omega_{3}\mathbf{h}_{3} + \beta_{3} \\[2ex]

 &  = \begin{bmatrix} (0.4)(0.186) + (-0.2)(0.071) + (0.1)(0.165) \\ (-0.3)(0.186) + (0.5)(0.071) + (0.2)(0.165) \end{bmatrix} +\begin{bmatrix}
0.05 \\
-0.02
\end{bmatrix} \\[2ex] 
 & = \begin{bmatrix} 0.0767 \\ 0.0127 \end{bmatrix} + \begin{bmatrix}
0.05 \\
-0.02
\end{bmatrix} \\[2ex] 
     & = \begin{bmatrix}
0.1267 \\
-0.0073
\end{bmatrix}
\end{align}
$$
