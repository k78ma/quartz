---
title: UDL Chapter 7 Problems
tags:
  - dl
date: 2025-07-14
aliases:
  - udl chapter 7 problems
---
> [!question] Problem 7.1
> A two-layer network with two hidden units in each layer can be defined as:
> $$
>\begin{align}
>y=\phi_{0} & + \phi_{1}a \Big[\psi_{01}+\psi_{11}a[\theta_{01}+\theta_{11}x] + \psi_{21}a[\theta_{02} + \theta_{12}x] \Big] \\
>  & + \phi_{2}a\Big[\psi_{02}+\psi_{12}a[\theta_{01}+\theta_{11}x] + \psi_{22}a[\theta_{02} + \theta_{12}x] \Big]
>\end{align}
> $$
> where the functions $a[\bullet]$ are ReLU functions. Compute the derivatives of the output $y$ with respect to each of the 13 parameters $\phi_{\bullet}, \theta_{\bullet \bullet}$ and $\psi_{\bullet \bullet}$ directly. The derivatives of the ReLU function with respect to its input $\partial a[z] / \partial[z]$ is the indicator function $\mathbb{I}[z>0]$, which returns one if the argument is greater than zero and zero otherwise.

**Output layer:**
$$
\begin{align}
\frac{ \partial y }{ \partial \phi_{0} } &  = 1 \\[2ex] 
\frac{ \partial y }{ \partial \phi_{1} }  & = a\Big[\psi_{01}+\psi_{11}a[\theta_{01}+\theta_{11}x] + \psi_{21}a[\theta_{02} + \theta_{12}x] \Big] \\[2ex] 
\frac{ \partial y }{ \partial \phi_{2} }  & = a\Big[\psi_{02}+\psi_{12}a[\theta_{01}+\theta_{11}x] + \psi_{22}a[\theta_{02} + \theta_{12}x] \Big]
\end{align}
$$
**Second hidden layer:** Let us first define 
$$
\begin{align}
h_{21} = \psi_{01} + \psi_{11} \cdot a[z_1] + \psi_{21} \cdot a[z_2] \\
h_{22} = \psi_{02} + \psi_{12} \cdot a[z_1] + \psi_{22} \cdot a[z_2]
\end{align}
$$
Then:
$$
\begin{align}
\frac{ \partial y }{ \partial \psi_{01} }  & = \frac{ \partial y }{ \partial a[h_{21}] } \frac{ \partial a[h_{21}] }{ \partial h_{21} } \frac{ \partial \psi_{01} }{ \partial h_{21} }  = \phi_{1}\cdot \mathbb{I}(h_{21}>0)\cdot 1 \\[2ex]
\frac{ \partial y  }{ \partial \psi_{11} }  & = \frac{ \partial y }{ \partial a[h_{21}] } \frac{ \partial a[h_{21}] }{ \partial h_{21} } \frac{ \partial \psi_{11} }{ \partial h_{21} } =  \phi_{1} \cdot \mathbb{I}(h_{21} > 0) \cdot a[\theta_{01}+\theta_{11}x] \\[2ex] 
\frac{ \partial y }{ \partial \psi_{21} }  & = \frac{ \partial y }{ \partial a[h_{21}] } \frac{ \partial a[h_{21}] }{ \partial h_{21} } \frac{ \partial \psi_{21} }{ \partial h_{21} } =\phi_{1}\cdot \mathbb{I}(h_{21}>0)\cdot a[\theta_{02}+\theta_{12}x] \\[2ex] 
\frac{ \partial y }{ \partial \psi_{02} }  & = \frac{ \partial y }{ \partial a[h_{22}] } \frac{ \partial a[h_{22}] }{ \partial h_{22} } \frac{ \partial \psi_{02} }{ \partial h_{22} }  = \phi_{2}\cdot \mathbb{I}(h_{22}>0)\cdot 1 \\[2ex]
\frac{ \partial y  }{ \partial \psi_{12} }  & = \frac{ \partial y }{ \partial a[h_{22}] } \frac{ \partial a[h_{22}] }{ \partial h_{22} } \frac{ \partial \psi_{12} }{ \partial h_{22} } =  \phi_{2} \cdot \mathbb{I}(h_{22} > 0) \cdot a[\theta_{01}+\theta_{11}x] \\[2ex] 
\frac{ \partial y }{ \partial \psi_{22} }  & = \frac{ \partial y }{ \partial a[h_{22}] } \frac{ \partial a[h_{22}] }{ \partial h_{22} } \frac{ \partial \psi_{22} }{ \partial h_{22} } =\phi_{2}\cdot \mathbb{I}(h_{22}>0)\cdot a[\theta_{02}+\theta_{12}x]
\end{align}
$$

**First hidden layer:** Let us first define
$$
\begin{align}
h_{11}= \theta_{01}+\theta_{11}x \\
h_{12} =\theta_{02}+\theta_{12}x
\end{align}
$$
Then we have:
$$
\begin{align}
\frac{ \partial y }{ \partial \theta_{01} }  & =\frac{ \partial y }{ \partial a[h_{21}] } \frac{ \partial a[h_{21}] }{ \partial h_{21} } \frac{ \partial h_{21} }{ \partial a[h_{11}] }  \frac{ \partial a[h_{11}] }{ \partial h_{11} } \frac{ \partial h_{11} }{ \partial \theta_{01} }  \\[2ex]
     & = \phi_{1} \cdot \mathbb{I}(h_{21}>0)  \cdot  \psi_{11}\cdot \mathbb{I}(h_{11} > 0)\cdot 1 \\[2ex] 
\frac{ \partial y }{ \partial \theta_{11} }  & =\frac{ \partial y }{ \partial a[h_{21}] } \frac{ \partial a[h_{21}] }{ \partial h_{21} } \frac{ \partial h_{21} }{ \partial a[h_{11}] }  \frac{ \partial a[h_{11}] }{ \partial h_{11} } \frac{ \partial h_{11} }{ \partial \theta_{11} }  \\[2ex]
     & = \phi_{1} \cdot \mathbb{I}(h_{21}>0)  \cdot  \psi_{11}\cdot \mathbb{I}(h_{11} > 0)\cdot x \\[2ex] 
\frac{ \partial y }{ \partial \theta_{02} }  & =\frac{ \partial y }{ \partial a[h_{22}] } \frac{ \partial a[h_{22}] }{ \partial h_{22} } \frac{ \partial h_{22} }{ \partial a[h_{12}] }  \frac{ \partial a[h_{12}] }{ \partial h_{12} } \frac{ \partial h_{12} }{ \partial \theta_{02} } \\[2ex] 
     & = \phi_{2} \cdot \mathbb{I}(h_{22}>0)  \cdot  \psi_{12}\cdot \mathbb{I}(h_{12} > 0)\cdot 1 \\[2ex]
\frac{ \partial y }{ \partial \theta_{12} }  & =\frac{ \partial y }{ \partial a[h_{22}] } \frac{ \partial a[h_{22}] }{ \partial h_{22} } \frac{ \partial h_{22} }{ \partial a[h_{12}] }  \frac{ \partial a[h_{12}] }{ \partial h_{12} } \frac{ \partial h_{12} }{ \partial \theta_{12} } \\[2ex] 
     & = \phi_{2} \cdot \mathbb{I}(h_{22}>0)  \cdot  \psi_{12}\cdot \mathbb{I}(h_{12} > 0)\cdot x \\[2ex] 
\end{align}
$$

> [!question] Problem 7.2
> Find an expression for the final term in each of the five chains of derivatives in equation 7.13. 

$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial f_{2} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }   \right)\frac{ \partial h_{3} }{ \partial f_{2} } \\[2ex] 
     & = 2(f_{3}-y_{i}) \cdot \omega_{3} \cdot  -\sin f_{2}
\end{align}
$$
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial h_{2} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }  \frac{ \partial h_{3} }{ \partial f_{2} }\right) \frac{ \partial f_{2} }{ \partial h_{2} } \\[2ex] 
     & = 2(f_{3}-y_{i}) \cdot \omega_{3} \cdot  -\sin f_{2} \cdot  \omega_{2}
\end{align}
$$
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial f_{1} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }  \frac{ \partial h_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial h_{2} }\right) \frac{ \partial h_{2} }{ \partial f_{1} }\\[2ex] 
     & = 2(f_{3}-y_{i}) \cdot \omega_{3} \cdot  -\sin f_{2} \cdot  \omega_{2} \cdot \exp[f_{1}]
\end{align}
$$
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial h_{1} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }  \frac{ \partial h_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial h_{2} } \frac{ \partial h_{2} }{ \partial f_{1} }\right) \frac{ \partial f_{1} }{ \partial h_{1} } \\[2ex]  
     & =2(f_{3}-y_{i}) \cdot \omega_{3} \cdot  -\sin f_{2} \cdot  \omega_{2} \cdot \exp[f_{1}] \cdot \omega_{1}
\end{align}
$$
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial f_{0} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }  \frac{ \partial h_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial h_{2} } \frac{ \partial h_{2} }{ \partial f_{1} } \frac{ \partial f_{1} }{ \partial h_{1} }\right) \frac{ \partial h_{1} }{ \partial f_{0}  }  \\[2ex] 
     & =2(f_{3}-y_{i}) \cdot \omega_{3} \cdot  -\sin f_{2} \cdot  \omega_{2} \cdot \exp[f_{1}] \cdot \omega_{1} \cdot \cos[f_{0}]
\end{align}
$$

> [!question] Problem 7.3
> What size are each of the terms in equation 7.20? 

- $\frac{ \partial \mathbf{f}_{2} }{ \partial \mathbf{h}_{2} }$ is $D_{3} \times D_{2}$
- $\frac{ \partial \mathbf{h}_{2} }{ \partial \mathbf{f}_{1} }$ is $D_2 \times D_{2}$
- $\frac{ \partial \mathbf{f}_{1} }{ \partial \mathbf{h}_{1} }$ is $D_{2} \times D_{1}$
- $\frac{ \partial \mathbf{h}_{1} }{ \partial \mathbf{f}_{0} }$is $D_{1} \times D_{1}$

> [!question] Problem 7.4
> Calculate the derivative $\frac{ \partial \ell_{i} }{ \partial \text{f}[\mathbf{x}_{i}, \phi] }$ for the least squares loss function: 
> $$
> \ell_{i}=(y_{i}-\text{f}[\mathbf{x}_{i}, \phi])^{2}
> $$

$$
\frac{ \partial \ell_{i} }{ \partial \text{f}[\mathbf{x}_{i}, \phi] } = 2(y_{i} - \text{f}[\mathbf{x}_{i}, \phi])(-1)=2(\text{f}[\mathbf{x}_{i}, \phi]-y_{i})
$$


> [!question] Problem 7.5
> Calculate the derivative $\frac{ \partial \ell_{i} }{ \partial \text{f}[\mathbf{x}_{i}, \phi] }$ for the binary classification loss function:
> $$
> \ell_{i} = -(1-y_{i})\log\Bigg[ 1-\text{sig}\Big[\text{f}[\mathbf{x}_{i}, \phi]\Big] \Bigg] - y_{i}\log\Bigg[\text{sig}\Big[\text{f}[\mathbf{x}_{i}, \phi]\Big] \Bigg]
> $$

For the sake of clean math let's write $f=\text{f}[\mathbf{x}_{i}, \phi]$. So we want to find $\frac{ \partial \ell_{i} }{ \partial f }$.

We have:
$$
\frac{ \partial \ell_{i} }{ \partial f }  = \frac{ \partial \ell_{i} }{ \partial \text{sig}[f] } \frac{ \partial \text{sig}[f] }{ \partial f }
$$
The first term is:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial \text{sig}[f] }  &  = -(1-y_{i}) \left(\frac{1}{1-\text{sig}[f]}\right)(-1) - (y_{i}) \left(\frac{1}{\text{sig}[ f]}\right) (1) \\[2ex]
     & = \frac{1-y_{i}}{1-\text{sig}[f]} - \frac{y_{i}}{\text{sig}[f]}
\end{align}
$$
The second term is:
$$
\frac{ \partial \text{sig}[f] }{ \partial f } =  \frac{\exp[-f]}{(1+\exp[-f])^{2}}
$$
Combining them back, we have:
$$
\frac{ \partial \ell_{i} }{ \partial f } =\left(\frac{1-y_{i}}{1-\text{sig}\left[f\right]} - \frac{y_{i}}{\text{sig}[f]}\right) \left(  \frac{\exp[-f]}{(1+\exp[-f])^{2}} \right) 
$$

Recall that the sigmoid is:
$$
\begin{align}
\text{sig}[f]  & = \frac{1}{1+\exp[-f]} \\[2ex]
1- \text{sig}[f]     & = \frac{\exp[-f]}{1+\exp[-f]}
\end{align}
$$

Let's substitute these back into our loss function and simplify:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial f }  & = \left(  (1-y_{i}) \left( \frac{1+\exp[-f]}{\exp[-f]} \right) - (y_{i}) (1+\exp[-f])  \right) \left(  \frac{\exp[-f]}{(1+\exp[-f])^{2}} \right)  \\[2ex] 
     & = \left(  \frac{(1-y_{i})(1+\exp[-f])}{\exp[-f]} - (y_{i}) (1+\exp[-f])\right)\left(  \frac{\exp[-f]}{(1+\exp[-f])^{2}} \right) \\[2ex]
     & =\cancel{ (1+\exp[-f]) }\left(  \frac{1-y_{i}}{\exp[-f]} - y_{i}  \right)\left(  \frac{\exp[-f]}{(1+\exp[-f])^\cancel{ {2} }} \right)\\[2ex] 
     & =\left( \frac{1-y_{i}}{\exp[-f]}-y_{i}  \right)\left( \frac{\exp[-f]}{1+\exp[-f]} \right) \\[2ex] 
     & = \frac{1-y_{i}}{1+\exp[-f]}-\frac{y_{i}\exp[-f]}{1+\exp[-f]} \\[2ex]
     & = \frac{1-y_{i}-y_{i}\exp[-f]}{1+\exp[-f]} \\[2ex]
     & = \frac{1}{1+\exp[-f]}- \frac{y_{i}+y_{i}\exp[-f]}{1+\exp[-f]} \\[2ex]
     & = \frac{1}{1+\exp[-f]}-\frac{y_{i}(1+\exp[-f])}{1+\exp[-f]} \\[2ex]
     & = \frac{1}{1+\exp[-f]} - y_{i} \\[2ex]
     & =\boxed{\text{sig}[f]-y_{i}}
\end{align}
$$

Nice result (and seems important)!

> [!question] Problem 7.6
> Show that for $\mathbf{z}=\mathbf{\beta}+\mathbf{\Omega} \mathbf{h}$:
> $$
> \frac{ \partial \mathbf{z} }{ \partial \mathbf{h} } = \mathbf{\Omega}^{T}
> $$
> where $\partial \mathbf{ z} / \partial \mathbf{h}$ is a matrix containing the term $\partial z_{i} / \partial h_{j}$ in its $i$-th column and $j$-th row. 
> 
> To do this, first find an expression for the constituent elements $\partial z_{i} / \partial h_{j}$, and then consider the form that the matrix $\partial \mathbf{ z} / \partial \mathbf{h}$ must take.

Let:
$$
\mathbf{h} = \begin{bmatrix}
h_{1} \\
\vdots \\
h_{n}
\end{bmatrix}, \quad  \mathbf{z} = \beta+\Omega \mathbf{h}, \quad  \mathbf{\Omega} = [\Omega_{ij}] \in  \mathbb{R}^{m\times n}
$$
so that $z_{i}=\beta_{i}+\sum_{k=1}^{n}\mathbf{\Omega}_{ik}h_{k}$. We can see this is in action in [[Deep Neural Network#Example Computation]] – $\mathbf{\Omega}_{ik}\mathbf{h}_{k}$ is a dot product between $\mathbf{h}$ and the $i$-th row of $\Omega$, and then we add the bias for that row.

Now let's consider the element-wise derivative. For some fixed $i$ and $j$:
$$
\frac{ \partial z_{i} }{ \partial h_{j} } = \frac{ \partial  }{ \partial h_{j} } \left( \beta_{i} + \sum_{k} \mathbf{\Omega}_{ik}h_{k} \right) = \mathbf{\Omega}_{ij}
$$
This is because $z_{i}$ depends linearly on each $h_{j}$, so the partial derivative just plucks out the corresponding weight.

Then, since $\partial \mathbf{ z} / \partial \mathbf{h}$ is a matrix containing the term $\partial z_{i} / \partial h_{j}$ in its $i$-th column and $j$-th row":
$$
\frac{ \partial \mathbf{z} }{ \partial \mathbf{h} }  = \left[  \frac{ \partial z_{i} }{ \partial h_{j} }   \right]_{\text{row }j, \text{col } i} = \Omega_{ij}
$$

Now we can notice that the matrix whose $(j,i)$ entry is $\Omega_{ij}$ is precisely the transpose of $\mathbf{\Omega}$, leading us to:
$$
\frac{ \partial \mathbf{z} }{ \partial \mathbf{h} } = \mathbf{\Omega}^{T}
$$
If you instead store instead in row $i$, column $j$ —the more common “Jacobian” convention—the matrix would be $\mathbf{{\Omega}}$ itself. The textbook’s row/column choice therefore introduces the transpose.


> [!question] Problem 7.7
> Consider the case where we use the logistic sigmoid as an activation function, so $h = \text{sig}[f]$. Compute the derivative $\partial h / \partial f$ for this activation function. What happens to the derivative when the input takes (i) a large positive value and (ii) a large negative value? 

We have:
$$
h=\text{sig}[f] = \frac{1}{1+\exp[-f]}
$$
and it follows that
$$
\frac{ \partial h }{ \partial f } =  \frac{ \partial \text{sig}[f] }{ \partial f } = \frac{\exp[-f]}{(1+\exp[-f])^{2}} 
$$
which can then be re-written as:
$$
\begin{align}
\frac{ \partial h }{ \partial f }   & = \frac{1}{1+\exp[-f]} \cdot  \frac{\exp[-f]}{1+\exp[-f]}\\[2ex] 
     & = \text{sig}[f] \cdot (1-\text{sig}[f]) \\[2ex]
     & = h(1-h)
\end{align}
$$
When the input $f$ becomes large positive value, $h=\text{sig}[f] \approx 1$, so we have $1(1-1)=0$. When the input $f$ becomes a large negative value, we in turn have $h\approx 0$, which gives $0(1-0)=0$. Thus, the gradient is (near) zero at both extremes.


> [!question] Problem 7.8
> Consider using (i) the Heaviside function and (ii) the rectangular function as activations:
> $$
> \text{Heaviside}[z] = \begin{cases}
> 0 & z<0 \\
> 1 & z\geq 0
> \end{cases}
> $$
> $$
> \text{rect}[z] = \begin{cases}
> 0 & z < 0 \\
> 1  & 0 \leq z \leq 1 \\
> 0  & z>1
> \end{cases}
> $$
> Discuss why these functions are problematic for neural network training with gradient-based optimization methods.

Both of these functions are flat and discontinuous. 

In regions where the function is flat, weights before the activation will not change because the chain rule will include a multiplication by zero. For some weight $w$:
$$
\frac{ \partial L }{ \partial w } = \frac{ \partial L }{ \partial a } \cdot  \frac{ \partial a }{ \partial z } \cdot \frac{ \partial z }{ \partial w } 
$$
In this case $\frac{ \partial a }{ \partial z }=0$ because the activation is flat, so we also just have $\frac{ \partial L }{ \partial w }=0$ and the weight doesn't update at all.

In regions where the function is discontinuous, there's no gradient to follow (undefined) – optimization algorithms like gradient descent are stuck.

> [!question] Problem 7.9
> Consider a loss function $\ell[\mathbf{f}]$, where $\mathbf{f}=\beta+\mathbf{\Omega} \mathbf{h}$. We want to find how the loss $\ell$ changes when we change $\mathbf{\Omega}$, which we'll express with a matrix that contains the derivative $\partial \ell / \partial \Omega_{ij}$ at the $i$-th row and $j$-th column. Find an expression for $\partial f_{i} / \partial \Omega_{ij}$, and, using the chain rule, show that
> $$
> \frac{ \partial \ell }{ \partial \Omega }  = \frac{ \partial \ell }{ \partial \mathbf{f} } \mathbf{h}^{T}
> $$

We have
$$
f_{i}= \beta_{i} + \sum_{j} \mathbf{\Omega}_{ij} h_{j}
$$
and so:
$$
\frac{ \partial f_{i} }{ \partial \mathbf{\Omega}_{ij} } =h_{j}
$$
Using the chain rule:
$$
\frac{ \partial \ell }{ \partial \mathbf{\Omega}_{ij} } = \frac{ \partial \ell }{ \partial f_{i} } \frac{ \partial f_{i} }{ \partial \mathbf{\Omega}_{ij} } = \frac{ \partial \ell }{ \partial f_{i} } h_{j}
$$
Converting back to vector form, we have
$$
\frac{ \partial \ell }{ \partial \mathbf{\Omega} } = \frac{ \partial \ell }{ \partial \mathbf{f} } \mathbf{h}^{T}
$$
as required.


> [!question] Problem 7.10
> Derive the equations for the backward pass of the backpropagation algorithm that uses leaky ReLU activations, which are defined as:
> $$
> \mathbf{a}[z] = \text{ReLU}[z] = \begin{cases}
> \alpha \cdot  z &  z < 0  \\
> z & z \geq 0
> \end{cases}
> $$
> where $\alpha$ is a small positive constant, typically $0.1$.

The Leaky ReLU has a gradient of $+1$ when the input is greater than zero, and a gradient of $\alpha$ when the gradient is less than zero. The backprop equations are the same except for
$$
\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k-1} } = \mathbb{I}[\mathbf{f}_{k-1}>0] \odot \left( \mathbf{\Omega}_{k}^{T} \frac{ \partial \ell_{i} }{ \partial \mathbf{f_{k}} }  \right) + \mathbb{I}[\mathbf{f_{k-1}}<0] \odot \alpha\left( \mathbf{\Omega}_{k}^{T} \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} }  \right)
$$


> [!question] Problem 7.11
> Consider training a network with fifty layers, where we only have enough memory to store the pre-activations at every tenth hidden layer during the forward pass. Explain how to compute the derivatives in this situation using gradient checkpointing.

We just start from each 10th hidden layers.
- We have the loss gradient at 50 and the saved checkpoint at 40, so we recompute the forward for layers 41-50 from the saved state at 40. Then we backprop through 50 to 41, accumulating parameter grads and the gradient wrt the activation at layer 40.
- Then we just move to the next window - recompute forward 31 to 40, 21–30, 11–20, and 1–10,


> [!question] Problem 7.12
> This problem explores computing derivatives on general acyclic computational graphs. Consider the function: 
> $$
> y= \exp[\exp[x]+\exp[x]^{2}] + \sin[\exp[x] + \exp[x]^{2}]
> $$
> We can break this down into a series of intermediate computations so that:
> $$
> \begin{align}
> f_{1}  & = \exp[x] \\
> f_{2}  & = f_{1}^{2} \\
> f_{3}  & = f_{1}+f_{2} \\
> f_{4}  & = \exp[f_{3}] \\
> f_{5}  & = \sin[f_{3}] \\
> y  & = f_{4} + f_{5}
>\end{align}
> $$
> The associated computational graph is shown below.
> 
> ![[UDL Chapter 7 Problems-20250810171542955.png]]
> 
> Compute the derivative $\partial y / \partial x$ by *reverse-mode differentiation*. In other words, compute in order:
> $$
> \frac{ \partial y }{ \partial f_{5} } , \frac{ \partial y }{ \partial f_{4} }, \frac{ \partial y }{ \partial f_{3} } , \frac{ \partial y }{ \partial f_{2} } , \frac{ \partial y }{ \partial f_{1} }, \frac{ \partial y }{ \partial x } 
> $$
> using the chain rule in each case to make use of the derivatives already computed.

$$
\begin{align}
\frac{ \partial y }{ \partial f_{5} }  & = 1 \\[2ex] 
\frac{ \partial y }{ \partial f_{4} }  & = 1 \\[2ex] 
\frac{ \partial y }{ \partial f_{3} }  & = \frac{ \partial y }{ \partial f_{4} } \frac{ \partial f_{4} }{ \partial f_{3} }  + \frac{ \partial y }{ \partial f_{5} } \frac{ \partial f_{5} }{ \partial f_{3} }  = \cos[f_{3}] + \exp[f_{3}] \\[2ex] 
\frac{ \partial y }{ \partial f_{2} }  & = \frac{ \partial y }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial f_{2} } = \cos[f_{3}] + \exp[f_{3}] \\[2ex] 
\frac{ \partial y }{ \partial f_{1} }  & = \frac{ \partial y }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial f_{1} } +\frac{ \partial y }{ \partial f_{3} } \frac{ \partial f_{2} }{ \partial f_{1} } = \cos[f_{3}] + \exp[f_{3}]  + (\cos[f_{3}] + \exp[f_{3}])(2f_{1}) \\[2ex] 
\frac{ \partial y }{ \partial x }  & = \frac{ \partial y }{ \partial f_{1} } \frac{ \partial f_{1} }{ \partial x }  = \exp[x]\Big(\cos[f_{3}] + \exp[f_{3}]  + (\cos[f_{3}] + \exp[f_{3}])(2f_{1}) \Big)
\end{align}
$$


> [!question] Problem 7.13
> For the same function as 7.12, compute the derivative $\partial y / \partial x$ by *forward-mode differentiation*. In other words, compute in order:
> $$
> \frac{ \partial f_{1} }{ \partial x } , \frac{ \partial f_{2} }{ \partial x } , \frac{ \partial f_{3} }{ \partial x } , \frac{ \partial f_{4} }{ \partial x } , \frac{ \partial f_{5} }{ \partial x } , \frac{ \partial y }{ \partial x } 
> $$
> using the chain rule in each case to make use of the derivatives already computed. Why do we not use forward-mode differentiation when we calculate the parameter gradients for deep networks? 

$$
\begin{align}
\frac{ \partial f_{1} }{ \partial x }  & = \exp[x] \\[2ex] 
\frac{ \partial f_{2} }{ \partial x }  & = \frac{ \partial f_{2} }{ \partial f_{1} } \frac{ \partial f_{1} }{ \partial x } = 2f_{1} \exp[x] \\[2ex] 
\frac{ \partial f_{3} }{ \partial x }  & = \frac{ \partial f_{3} }{ \partial f_{1} } \frac{ \partial f_{1} }{ \partial x } + \frac{ \partial f_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial x } = \exp[x] + 2f_{1}\exp[x] = \exp[x](1+2f_{1}) \\[2ex] 
\frac{ \partial f_{4} }{ \partial x }  & = \frac{ \partial f_{4} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial x } = \exp [f_{3}] \exp[x](1+2f_{1}) \\[2ex] 
\frac{ \partial f_{5} }{ \partial x }  & = \frac{ \partial f_{5} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial x } = \cos [f_{3}] \exp[x](1+2f_{1}) \\[2ex] 
\frac{ \partial y }{ \partial x }  & = \frac{ \partial y }{ \partial f_{4} } \frac{ \partial f_{4} }{ \partial x }  + \frac{ \partial y }{ \partial f_{5} } \frac{ \partial f_{5} }{ \partial x } = \exp [f_{3}] \exp[x](1+2f_{1}) +  \cos [f_{3}] \exp[x](1+2f_{1}) \\[2ex] 
     & =\exp[x]((\exp[f_{3}]+\cos[f_{3}])(1+2f_{1})) \\
     & = \exp[x](\exp [f_{3}] + \cos[f_{3}] + 2f_{1}(\exp[f_{3}]+\cos[f_{3}]))
\end{align}
$$

We don't do forward mode differentiation because for each input variable we will need to do a pass, whereas for backward mode we will have to do a pass for each output variable. Generally neural networks have fewer outputs (usually just a scalar loss) than inputs, so backward mode is cheaper.


> [!example]- Example with two input variables
> Let’s tweak Problem 7.12 graph to have **two inputs** $x$ and $z$ while keeping the same structure:
> $$
> \begin{aligned}
> f_1 &= e^{x}\\
> f_2 &= f_1^2\\ 
> f_3 &= f_1 + f_2 + z \qquad (\text{new: direct input } z)\\ f_4 &= e^{f_3}\\ f_5 &= \sin(f_3)\\ y &= f_4 + f_5 \end{aligned}
> $$
> **Forward mode** needs one pass per input:
> - Pass 1 (derivatives with respect to $x$):
> $$
> \begin{aligned} 
> \dot f_1 &= e^{x}\dot x = e^{x}\\ 
> \dot f_2 &= 2f_1\,\dot f_1 = 2f_1 e^{x}\\ 
> \dot f_3 &= \dot f_1+\dot f_2+\dot z = e^{x}+2f_1 e^{x} = e^{x}(1+2f_1)\\ 
> \dot f_4 &= e^{f_3}\dot f_3\\ 
> \dot f_5 &= \cos(f_3)\dot f_3\\ 
> \dot y &= (e^{f_3}+\cos f_3)\,\dot f_3 = (e^{f_3}+\cos f_3)\,e^{x}(1+2f_1) = \frac{\partial y}{\partial x} \end{aligned} 
>$$
>  - Pass 2 (derivatives with respect to $z$):
>$$
>\begin{aligned} 
>\dot f_1 &= 0,\quad \dot f_2=0\\ 
>\dot f_3 &= 0+0+1 = 1\\ 
>\dot f_4 &= e^{f_3}\\ 
>\dot f_5 &= \cos(f_3)\\ 
>\dot y &= e^{f_3}+\cos f_3 = \frac{\partial y}{\partial z} \end{aligned}    
>$$
>
>**Reverse mode** only requires one pass:
>$$
>\begin{aligned} 
>\frac{\partial y}{\partial f_5}&=1,\quad \frac{\partial y}{\partial f_4}=1\\ 
>\frac{\partial y}{\partial f_3} &= \frac{\partial y}{\partial f_4}\frac{\partial f_4}{\partial f_3} • \frac{\partial y}{\partial f_5}\frac{\partial f_5}{\partial f_3} = e^{f_3}+\cos f_3\\ \frac{\partial y}{\partial f_2}&=\frac{\partial y}{\partial f_3}\cdot 1 = e^{f_3}+\cos f_3\\ 
>\frac{\partial y}{\partial f_1} &= \frac{\partial y}{\partial f_3}\cdot 1 • \frac{\partial y}{\partial f_2}\cdot (2f_1) = (e^{f_3}+\cos f_3)\,(1+2f_1)\\ 
>\frac{\partial y}{\partial x} &= \frac{\partial y}{\partial f_1}\cdot \frac{\partial f_1}{\partial x} = (e^{f_3}+\cos f_3)\,(1+2f_1)\,e^{x}\\ 
>\frac{\partial y}{\partial z} &= \frac{\partial y}{\partial f_3}\cdot \frac{\partial f_3}{\partial z} = e^{f_3}+\cos f_3 \end{aligned}
>$$


> [!question] Problem 7.14
> Consider a random variable $a$ with variance $\text{Var}[a] = \sigma^{2}$ and a symmetrical distribution around the mean $\mathbb{E}[a]=0$. Prove that if we pass this variable through the ReLU function
> $$
> b = \text{ReLU}[a] = \begin{cases}
> 0 & a<0 \\
> a & a\geq 0
> \end{cases}
> $$
> then the second moment of the transformed variable is $\mathbb{E}[b^{2}]=\sigma^{2}/2$.

We have:
$$
b^{2} = a^{2} \mathbf{1}_{\{ a\geq 0 \}}
$$
where $\mathbf{1}$ is an indicator function that returns 1 is the condition inside the brackets is true and 0 if false.

Then:
$$
\mathbb{E}[b^{2}] = \mathbb{E}[a^{2}\mathbf{1}_{\{ a\geq 0 \}}]
$$
To find this, let's try to first find an expression for $\mathbb{E}[a^{2}]$ in terms of $\mathbb{E}[a^{2} \mathbf{1}_{\{ a\geq 0 \}}]$.

Since $a$ is symmetric around 0, we have:
$$
\mathbb{E}[a^{2} \mathbf{1}_{\{ a< 0 \}}] = \mathbb{E}[a^{2} \mathbf{1}_{\{ a\geq 0 \}}]
$$
Splitting $\mathbb{E}[a^{2}]$ into positive and negative parts:
$$
\mathbb{E}[a^{2}] = \mathbb{E}[a^{2} \mathbf{1}_{\{ a< 0 \}}] + \mathbb{E}[a^{2} \mathbf{1}_{\{ a\geq 0 \}}] = 2\mathbb{E}[a^{2} \mathbf{1}_{\{ a\geq 0 \}}]
$$
Therefore,
$$
\mathbb{E}[b^{2}] = \mathbb{E}[a^{2}\mathbf{1}_{\{ a\geq 0 \}}] = \frac{1}{2}\mathbb{E}[a^{2}]
$$
Since $\mathbb{E}[a]=0, \mathbb{E}[a^{2}]=\text{Var}(a)=\sigma^{2}$. Thus,
$$
E[b^{2}] = \frac{1}{2}\sigma^{2}
$$
as desired.


> [!question] Problem 7.15
> What would you expect to happen if we initialized all of the weights and biases in the network to zero? 

During gradient descent, we calculate how each neuron in a layer affects the loss. However, if all the weights are initialized to zero, all the neurons in the same layer have identical gradients; while they will update so that they are not zero, they will all update the same way.

If neurons in a layer are clones, they compute the same function, so the network loses its ability to learn different features. The output will stay the same forever.

> [!question] Problem 7.16
> 


> [!question] Problem 7.17
> 
