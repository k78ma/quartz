---
title: Backpropagation 3-Layer Example
tags:
  - dl
date: 2025-08-09
aliases:
  - backpropagation 3-layer example
---
Let's repeat the [[Backpropagation Scalar Example|backpropagation toy example]] but for a three-layer network.

![[Backpropagation Algorithm-20250715141758385.png]]

The intuition and much of the algebra are identical. The main differences are that intermediate variables $\mathbf{f}_k, \mathbf{h}_{k}$ are vectors, the biases $\beta_{k}$ are vectors, the weights $\Omega_{k}$ are matrices, and we are using ReLU functions rather than simple algebraic functions like $\cos[\bullet]$.

### Forward pass
We write the network as a series of sequential calculations:
$$
\begin{align}
\mathbf{f}_{0} & = \beta_{0}+\Omega_{0}\mathbf{x}_{i} \\
\mathbf{h}_{1} & =\mathbf{a}[\mathbf{f}_{0}] \\
\mathbf{f}_{1} & =\beta_{1} + \Omega_{1}\mathbf{h}_{1} \\
\mathbf{h}_{2} & =\mathbf{a}[\mathbf{f}_{1}] \\
\mathbf{f}_{2} & =\beta_{2} + \Omega_{2}\mathbf{h}_{2} \\
\mathbf{h}_{3} & =\mathbf{a}[\mathbf{f}_{2}] \\
\mathbf{f}_{3} & =\beta_{3} + \Omega_{3}\mathbf{h}_{3} \\
\ell_{i} & =\text{l}[\mathbf{f_{3}}, y_{i}]
\end{align}
$$
where:
- $\mathbf{f}_{k-1}$ represents the pre-activations at the $k$-th hidden layer (values before the ReLU function $\mathbf{a}[\bullet]$)
- $\mathbf{h}_{k}$ represents the activations at the $k$-th layer (after the ReLU function)
- The term $\text{l}[\mathbf{f_{3}}, y_{i}]$ represents the loss function

In the forward pass, we work through these calculations and store all the intermediate values.

### Backward pass 1
Now, let's consider how the loss changes when the pre-activations $\mathbf{f}_{0}, \mathbf{f}_{1}, \mathbf{f}_{2}$ change. Applying the chain rule, the expression for the derivative of the loss with $\ell_{i}$ with respect to $\mathbf{f}_{2}$ is:
$$
\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{2} } = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{3} } \frac{ \partial \mathbf{f}_{3} }{ \partial \mathbf{h}_{3} } \frac{ \partial \mathbf{h}_{3} }{ \partial \mathbf{f}_{2} }  
$$
- The first term on the right has size $D_{f}\times 1$
    - $D_{f}$ is the dimension of the model output $\mathbf{f}_{3}$
- The second term has size $D_{3} \times D_{f}$
    - $D_{3}$ is the number of hidden units in the third layer
- The third term has size $D_{3}\times D_{3}$

Similarly, we can compute how the loss changes when we change $\mathbf{f_{1}}$ and $\mathbf{f}_{0}$:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{1} }  & = \left(\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{3} } \frac{ \partial \mathbf{f}_{3} }{ \partial \mathbf{h}_{3} } \frac{ \partial \mathbf{h}_{3} }{ \partial \mathbf{f}_{2} }  \right) \frac{ \partial \mathbf{f_{2}} }{ \partial \mathbf{h}_{2}  } \frac{ \partial \mathbf{h}_{2} }{ \partial \mathbf{f}_{1} } \\[2ex] 
\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{0} }  & =\left(\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{3} } \frac{ \partial \mathbf{f}_{3} }{ \partial \mathbf{h}_{3} } \frac{ \partial \mathbf{h}_{3} }{ \partial \mathbf{f}_{2} }   \frac{ \partial \mathbf{f_{2}} }{ \partial \mathbf{h}_{2}  } \frac{ \partial \mathbf{h}_{2} }{ \partial \mathbf{f}_{1} } \right) \frac{ \partial \mathbf{f}_{1} }{ \partial \mathbf{h}_{1} } \frac{ \partial \mathbf{h}_{1} }{ \partial \mathbf{f}_{0} } 
\end{align}
$$
- In each case, the term in brackets was computed in the previous step. By working backward through the network, we can reuse previous computations.

Each term tends to be fairly simple:
- $\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{3} }$ (derivative of the loss $\ell_{i}$ w.r.t network output $\mathbf{f}_{3}$) depends on the loss function but generally has a simple form
- $\frac{ \partial \mathbf{f}_{3} }{ \partial \mathbf{h}_{3} }$ of the network output with respect to hidden layer $\mathbf{h}_{3}$ is:
    $$
    \frac{ \partial \mathbf{f}_{3} }{ \partial \mathbf{h}_{3} } = \frac{ \partial  }{ \partial \mathbf{h}_{3} } (\beta_{3}+\Omega_{3}\mathbf{h}_{3})=\Omega_{3}^{T}
    $$
    This is shown in [[UDL Chapter 7 Problems|Problem 7.6]].
- The derivative $\frac{ \partial \mathbf{h}_{3} }{ \partial \mathbf{f}_{2} }$ of the output $\mathbf{h}_{3}$ of the activation function with respect to its input $\mathbf{f}_{2}$ will depend on the activation function. 
    - It will be a diagonal matrix since each activation only depends on the corresponding pre-activation. 
    - For ReLU functions, the diagonal terms are zero everywhere $\mathbf{f}_{2}$ is less than zero and one otherwise. Rather than multiply by this matrix, we extract the diagonal terms as a vector $\mathbb{I}(\mathbf{f}_{2}>0)$ and pointwise multiply, which is more efficient.

### Backward pass 2
Now that we know how to compute $\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} }$, we can focus on calculating the erivatives of the loss with respect to the weights and biases. 

To calculate the derivatives of the loss with respect to biases $\beta_{k}$, we use the chain rule:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial \beta_{k} }  & = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} }\frac{ \partial \mathbf{f}_{k} }{ \partial \beta_{k} } \\[2ex]
& = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} }\frac{ \partial  }{ \partial \beta_{k} } (\beta_{k} + \Omega_{k}\mathbf{h}_{k})   \\[2ex]
& = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} } 
\end{align}
$$
which we already calculated above.

Similarly, the derivative of the weights matrix $\Omega_{k}$ is given by:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial \Omega_{k} }  & = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} }  \frac{ \partial \mathbf{f}_{k} }{ \partial \Omega_{k} } \\[2ex] 
     & = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} } \frac{ \partial  }{ \partial \Omega_{k} } (\beta_{k}+\Omega_{k}\mathbf{h}_{k}) \\[2ex] 
     & = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} } \mathbf{h}_{k}^{T}
\end{align}
$$
- The progression from line 2 to 3 is shown in [[UDL Chapter 7 Problems|Problem 7.9]] .

The result above makes intuitive sense; the final line is a matrix of the same size as $\Omega_{k}$. It depends linearly on $\mathbf{h}_{k}$, which was multiplied by $\Omega_{k}$ in the original expression.

This is consistent with the intuition that the derivatives of the weights in $\Omega_{k}$ will be proportional to the values of the hidden units $\mathbf{h}_{k}$ that they multiply. Recall that we already computed these during the forward pass.