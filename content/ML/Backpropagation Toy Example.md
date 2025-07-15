---
title: Backpropagation Toy Example
tags:
  - dl
date: 2025-07-14
aliases:
  - backpropagation toy example
---
Consider a model $f[x,\phi]$ with eight scalar parameters $\phi=\{ \beta_{0}, \omega_{0}, \beta_{1}, \omega_{1},\beta_{2}, \omega_{2}, \beta_{3}, \omega_{3} \}$ that consists of a composition of functions $\sin[\bullet], \exp[\bullet]$ and $\cos[\bullet]$:
$$
f[x,\phi] = \beta_{3}+\omega_{3}\cdot \cos\Big[ \beta_{2} + \omega_{2}\cdot \exp[\beta_{1} + \omega_{1}\cdot \sin[\beta_{0}+\omega_{0}\cdot x]] \Big]
$$
and a least squares loss function $L[\phi] = \sum_{i}\ell_{i}$ with individual terms:
$$
\ell_{i} = (f[x_{i}, \phi]-y_{i})^{2}
$$
where $x_{i}$ is the $i$-th training input, and $y_{i}$ is the $i$-th training output. You can think of this as a simple neural network with one input, one output, one hidden unit at each layer, and different activation functions $\sin[\bullet], \exp[\bullet]$ and $\cos[\bullet]$ between each layer.

We aim to compute the derivatives of $\ell_{i}$ with respect to each of the eight parameters:
$$
\frac{ \partial \ell_{i} }{ \partial \beta_{0} } , \frac{ \partial \ell_{i} }{ \partial \omega_{0} } , \frac{ \partial \ell_{i} }{ \partial \beta_{1} } , \frac{ \partial \ell_{i} }{ \partial \omega_{1} }, \frac{ \partial \ell_{i} }{ \partial \beta_{2} } , \frac{ \partial \ell_{i} }{ \partial \omega_{2} } , \frac{ \partial \ell_{i} }{ \partial \beta_{3} } , \frac{ \partial \ell_{i} }{ \partial \omega_{3} } 
$$
Of course, we could find expressions for these derivatives by hand and compute them directly. However, some of these expressions are quite complex. Such expressions are awkward to derive and code without mistakes and do not exploit the inherent redundancy.

[[Backpropagation]] is an efficient method for computing all of these derivatives at once. It consists of a forward pass, in which we compute and store a series of intermediate values and the network output, and a backward pass, in which we calculate the derivatives of each parameter, starting at the end of the network, and re-use previous calculations as we move toward the start.

### Forward Pass
We treat the computation of the loss as a series of calculations:

![[Backpropagation Toy Example-20250714225715114.png]]

$$
\begin{align}
f_{0}  & =\beta_{0}+\omega_{0}\cdot x_{i} \\
h_{1}  & =\sin[f_{0}] \\
f_{1} & =\beta_{1}+\omega_{1}\cdot h_{1} \\
h_{2} & =\exp[f_{1}] \\
f_{2} & =\beta_{2}+\omega_{2}\cdot h_{2} \\
h_{3} & =\cos[f_{2}] \\
f_{3} & =\beta_{3}+\omega_{3}\cdot h_{3} \\
\ell _{i} & =(f_{3}-y_{i})^{2}
\end{align}
$$
We compute and store the values of the intermediate variables $f_{k}$ and $h_{k}$.

### Backward pass 1
We now compute the derivatives of $\ell_{1}$ with respect to these intermediate variables, but in reverse order.

![[Backpropagation Toy Example-20250714231304915.png]]


The first one is very straightforward:
$$
\frac{ \partial \ell_{i} }{ \partial f_{3} } =2(f_{3}-y_{i})
$$
The next derivative can be calculated using the chain rule:
$$
\frac{ \partial \ell _{i} }{ \partial h_{3} } =\frac{ \partial \ell_{i} }{ \partial f_{3} }\frac{ \partial f_{3} }{ \partial h_{3} }  
$$
- The left side asks how $\ell_{i}$ changes when $h_{3}$ changes
- The right side says we can decompose this into (i) how $\ell_{i}$ changes when $f_{3}$ changes and (ii) how $f_{3}$ changes when $h_{3}$ changes. In the original equations, $h_{3}$ changes $f_{3}$, which changes $\ell_{i}$, and the derivatives represent the effects of this chain. Notice that we already computed the first derivative and the other is just the derivative of $\beta_{3}+\omega_{3}\cdot h_{3}$ with respect to $h_{3}$.

We can continue this way:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial f_{2} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }   \right)\frac{ \partial h_{3} }{ \partial f_{2} } \\[2ex] 
\frac{ \partial \ell_{i} }{ \partial h_{2} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }  \frac{ \partial h_{3} }{ \partial f_{2} }\right) \frac{ \partial f_{2} }{ \partial h_{2} } \\[2ex] 
\frac{ \partial \ell_{i} }{ \partial f_{1} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }  \frac{ \partial h_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial h_{2} }\right) \frac{ \partial h_{2} }{ \partial f_{1} }\\[2ex] 
\frac{ \partial \ell_{i} }{ \partial h_{1} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }  \frac{ \partial h_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial h_{2} } \frac{ \partial h_{2} }{ \partial f_{1} }\right) \frac{ \partial f_{1} }{ \partial h_{1} } \\[2ex] 
\frac{ \partial \ell_{i} }{ \partial f_{0} }  & =\left( \frac{ \partial \ell_{i} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial h_{3} }  \frac{ \partial h_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial h_{2} } \frac{ \partial h_{2} }{ \partial f_{1} } \frac{ \partial f_{1} }{ \partial h_{1} }\right) \frac{ \partial h_{1} }{ \partial f_{0}  }  
\end{align}
$$
In each case, we already calculated the quantities in the brackets in the previous step, and the last term has a simple expression. These equations embody Observation 2 we made in [[Backpropagation Intuition]]; we can reuse the previously computed derivatives if we calculate them in reverse order.

### Backward pass 2
Finally, we consider how the loss $\ell_{i}$ changes when we change the parameters $\{ \beta_{k} \}$ and $\{ \omega_{k} \}$. 

![[Backpropagation Toy Example-20250714231635163.png]]

Once again, we apply the chain rule:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial \beta_{k} }  & =  \frac{ \partial \ell_{i} }{ \partial f_{k} } \frac{ \partial f_{k} }{ \partial \beta_{k} } \\[2ex] 
\frac{ \partial \ell_{i} }{ \partial \omega_{k} }  & = \frac{ \partial \ell_{i}}{ \partial f_{k} } \frac{ \partial f_{k} }{ \partial \omega_{k} } 
\end{align}
$$
In each case, the first term on the right side was already computed above. When $k>0$, we have $f_{k}$ = $\beta_{k}+\omega_{k}\cdot h_{k}$, so
$$
\frac{ \partial f_{k} }{ \partial \beta_{k} } =1 \quad \text{and} \quad \frac{ \partial f_{k} }{ \partial \omega_{k} } =h_{k}
$$
This is consistent with Observation 1 from [[Backpropagation Intuition]]; the effect of a change in the weight $\omega_k$ is proportional to the value of the source $h_{k}$ which was stored in the forward pass. The final derivatives from the term $f_{0}=\beta_{0}+\omega_{0}\cdot x_{i}$ are:
$$
\frac{ \partial f_{0} }{ \partial \beta_{0} } =1 \quad \text{and} \quad \frac{ \partial f_{0} }{ \partial \omega_{0} } =x_{i}
$$
Backpropagation is both simpler and more efficient than computing the derivatives individually.