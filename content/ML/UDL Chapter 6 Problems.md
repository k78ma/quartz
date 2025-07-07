---
title: UDL Chapter 6 Problems
tags:
  - dl
date: 2025-07-01
aliases:
  - udl chapter 6 problems
---
> [!question] Problem 6.1
> Show that the derivates of the least squares loss function in equation 6.5 are given by the equations in 6.7.

Each loss component:
$$
\ell _{i} = (\phi_{0}+\phi_{1}x_{i} -y_{i})^{2}
$$
Derivatives:
$$
\frac{ \partial \ell _{i} }{ \partial \phi_{0} } = 2(\phi_{0}+\phi_{1}x_{i}-y_{i})
$$
$$
\frac{ \partial \ell _{i} }{ \partial \phi_{1} } = 2(\phi_{0}+\phi_{1}x_{i}-y_{i})(x_{i})
$$

> [!question] Problem 6.2
> A surface is guaranteed to be convex if the eigenvalues of the Hessian $\mathbf{H}[\phi]$ are positive everywhere. In this case, the surface has a unique minimum, and optimization is easy. Find an algebraic expression for the Hessian matrix,
> $$
> \mathbf{H}[\phi] = \begin{bmatrix}
> \frac{ \partial^{2}L }{ \partial \phi_{0}^{2} }  & \frac{ \partial^{2}L }{ \partial \phi_{0} \partial \phi_{1} }   \\
> \frac{ \partial^{2}L }{ \partial \phi_{1} \partial \phi_{0} }  & \frac{ \partial^{2}L }{ \partial \phi_{1}^{2} } 
>\end{bmatrix}
> $$
> for the linear regression model. Prove that this function is convex by showing that the eigenvalues are always positive. This can be done by showing that both the trace and determinant of the matrix are positive.

We have:
$$
\ell _{i} = (\phi_{0}+\phi_{1}x_{i} -y_{i})^{2}
$$
Top left $(H_{1,1})$:
$$
\begin{align}
\frac{ \partial \ell _{i} }{ \partial \phi_{0} }  & = 2(\phi_{0}+\phi_{1}x_{i}-y_{i}) \\[2ex]
\frac{ \partial^{2}\ell_{i} }{ \partial \phi_{0}^{2} }  & =2
\end{align}
$$

Bottom left ($H_{2,1}$):
$$
\begin{align}
\frac{ \partial^{2}\ell_{i} }{ \partial \phi_{1} \phi_{0} } = 2x_{i} 
\end{align}
$$
Top right ($H_{1,2}$):
$$
\begin{align}
\frac{ \partial \ell _{i} }{ \partial \phi_{1} }  & = 2x_{i}(\phi_{0}+\phi_{1}x_{i}-y_{i}) \\[2ex] 
\frac{ \partial^{2} \ell_{i} }{ \partial \phi_{0} \phi_{1} } & = 2x_{i}
\end{align}
$$
Bottom right ($H_{2,2}$):
$$
\frac{ \partial^{2} \ell_{i} }{ \partial \phi_{1}^{2} } = 2x_{i}^{2}
$$
So the result for a single point is:
$$
\begin{bmatrix}
2 & 2x_{i} \\
2x_{i} & 2x_{i}^{2}
\end{bmatrix}
$$
And the Hessian of the total loss is:
$$
H[\phi] = \sum_{i=1}^{I} \begin{bmatrix}
2 & 2x_{i} \\
2x_{i} & 2x_{i}^{2}
\end{bmatrix} = \begin{bmatrix}
2I  & 2\sum x_{i} \\
2\sum x_{i}  & 2\sum x_{i}^{2}
\end{bmatrix}
$$
The trace is positive:
$$
\text{tr}(H) = H_{1,1}+H_{2,2} = 2I + 2 \sum x_{i}^{2} >0
$$
The determinant is:
$$
\det(H) = ad - bc = (2I)\left( 2 \sum x_{i}^{2} \right) - \left( 2 \sum x_{i} \right)^{2} = 4I \sum x_{i}^{2} - 4\left( \sum x_{i}\right)^{2} > 0
$$
Thus, the surface is convex.

> [!question] Problem 6.3
> Compute the derivatives of the least squares loss $L[\phi]$ with respect to the parameters $\phi_{0}$ and $\phi_{1}$ for the Gabor model.

$$
\begin{align}
L[\phi]  & = \sum_{i=1}^{I} (f[x_{i}, \phi]-y_{i})^{2} \\[2ex] 
 & =
\left(\sin[\phi_{0}+0.06\cdot \phi_{1}x] \cdot  \exp\left(  - \frac{(\phi_{0}+0.06\cdot \phi_{1}x_{i})^{2}}{32.0}  \right) - y_{i}\right)^{2}
\end{align}
$$

Let:
$$
\begin{align}
g_{i}  & = \phi_{0} + 0.06 \phi_{1}x_{i} \\
f_{i} & = \sin(g_{i}) \cdot \exp\left( - \frac{g_{i}^{2}}{32} \right)
\end{align}
$$
Then, we have
$$
L[\phi]=\sum r_{i}^{2}
$$
where $r_{i}=f_{i}-y_{i}$.

First, we can find:
$$
\begin{align}
\frac{ \partial f_{i} }{ \partial g_{i} }  & = \cos(g_{i}) \exp\left( -\frac{g_{i}^{2}}{32} \right)+\sin(g_{i})\exp\left( -\frac{g_{i}^{2}}{32} \right) \left( -\frac{2g_{i}}{32} \right) \\[2ex] 
     & = \exp\left( -\frac{g_{i}^{2}}{32} \right)\left[ \cos(g_{i})+\sin(g_{i})\left( -\frac{g_{i}}{16} \right) \right]
\end{align}
$$
using the product rule and chain rule.

So:
$$
\begin{align}
\frac{ \partial f_{i} }{ \partial \phi_{0} } = \frac{ \partial f_{i} }{ \partial g_{i} } \frac{ \partial g_{i} }{ \partial \phi_{0} } = \exp\left( -\frac{g_{i}^{2}}{32} \right)\left[ \cos(g_{i})+\sin(g_{i})\left( -\frac{g_{i}}{16} \right) \right]  (1)
\end{align}
$$
and
$$
\frac{ \partial f_{i} }{ \partial \phi_{1} } = \frac{ \partial f_{i} }{ \partial g_{i} } \frac{ \partial g_{i} }{ \partial \phi_{1} } =  \exp\left( -\frac{g_{i}^{2}}{32} \right)\left[ \cos(g_{i})+\sin(g_{i})\left( -\frac{g_{i}}{16} \right) \right] (0.06x_{i})
$$

Because $L[\phi]= \sum r_{i}^{2}$, for each of the parameters, we have
$$
\frac{ \partial L }{ \partial \phi_{k} } =2 \sum r_{i} \frac{ \partial f_{i} }{ \partial \phi_{k} } 
$$
So:
$$
\frac{ \partial L }{ \partial \phi_{0} } = 2 \sum (f_{i}-y_{i}) \exp\left( -\frac{g_{i}^{2}}{32} \right)\left[ \cos(g_{i})+\sin(g_{i})\left( -\frac{g_{i}}{16} \right) \right]
$$
and
$$
\frac{ \partial L }{ \partial \phi_{1} } = 2 \sum(f_{i}-y_{i}) \exp\left( -\frac{g_{i}^{2}}{32} \right)\left[ \cos(g_{i})+\sin(g_{i})\left( -\frac{g_{i}}{16} \right) \right] (0.06x_{i})
$$

> [!question] Problem 6.4
> The logistic regression model uses a linear function to assign an input $\mathbf{x}$ to one of two classes $y \in \{ 0,1 \}$. For a 1D input and a 1D output, it has two parameters, $\phi_{0}$ and $\phi_{1}$, and is defined
> $$
> Pr(y=1\, | \,x) = \text{sig}[\phi_{0}+\phi_{1}x]
> $$
> where $\text{sig}[\bullet]$ is the logistic sigmoid function.
> - (i) Plot $y$ against $x$ for this model for different values of $\phi_{0}$ and $\phi_{1}$ and explain the qualitative meaning of each parameters.
> - (ii) What is a suitable loss function for this model?
> - (iii) Compute the derivatives of this loss function with respect to the parameters.
> - (iv) Generate ten data points from a normal distribution with mean $-1$ and standard deviation $1$ and assign them to label $y=0$. Generate another ten data points from a normal distribution with mean $1$ and standard deviation $1$ and assign these the label $y=1$. Plot the loss as a heatmap in terms of the two parameters $\phi_{0}$ and $\phi_{1}$.
>   (v) Is this loss function convex? How could you prove this?




> [!question] Problem 6.5
> Compute the derivatives of the least squares loss with respect to the ten parameters of the simple neural network model:
> $$
> f[x,\phi] = \phi_{0}+\phi_{1}a[\theta_{10}+\theta_{11}x] + \phi_{2}[\theta_{20}+\theta_{21}x] + \phi_{3}a[\theta_{30}+\theta_{31}x]
> $$
> Think carefully about what the derivative of the ReLU function $a[\bullet]$ will be.



> [!question] Problem 6.6
> 


> [!question] Problem 6.7
> 


> [!question] Problem 6.8
> 


> [!question] Problem 6.9
> 


> [!question] Problem 6.10
> 


> [!question] Problem 6.11
> 