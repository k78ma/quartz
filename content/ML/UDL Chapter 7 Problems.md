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

For the sake of clean math let's write $f=\text{f}[\mathbf{x}_{i}, \phi]$.

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

Let's substitute these back into our loss function:
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

Nice result.

> [!question] Problem 7.6
> 


> [!question] Problem 7.7
> 


> [!question] Problem 7.8
> 


> [!question] Problem 7.9
> 


> [!question] Problem 7.10
> 


> [!question] Problem 7.11
> 


> [!question] Problem 7.12
> 


> [!question] Problem 7.13
> 


> [!question] Problem 7.14
> 


> [!question] Problem 7.15
> 


> [!question] Problem 7.16
> 


> [!question] Problem 7.17
> 
