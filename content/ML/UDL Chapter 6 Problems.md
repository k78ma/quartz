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

**(i)** $\phi_{0}$ controls the location of the centerpoint of the sigmoid function ($y=0.5$), $\phi_{1}$ controls the slope of the transition.

**(ii)** Binary cross-entropy loss:
$$
L[\phi]= \sum_{i=1}^{I} -(1-y_{i}) \log \Big[1-\text{sig}[\phi_{0}+\phi_{1}x]\Big]-y_{i} \log[\text{sig}[\phi_{0}+\phi_{1}x]]
$$

**(iii)** Derivatives of the sigmoid function are:
$$
\frac{ \partial \text{sig}[z] }{ \partial z } = \frac{\exp[-z]}{(1+\exp[-z])^{2}}
$$
It follows that the derivatives of the loss function are
$$
\begin{align}
\frac{ \partial L }{ \partial \phi_{0} }  & = \frac{ \partial L  }{ \partial (\text{sig}[\phi_{0}+\phi_{1}x_{i}]) } \frac{ \partial (\text{sig}[\phi_{0}+\phi_{1}x_{i}]) }{ \partial \phi_{0}+\phi_{1}x_{i} }  \frac{ \partial (\phi_{0} + \phi_{1}x_{i}) }{ \partial \phi_{0} }   \\[2ex] 
     & =
\sum_{i=1}^{I}\left( \frac{1-y_{i}}{1-\text{sig}[\phi_{0}+\phi_{1}x_{i}]} - \frac{y_{i}}{\text{sig}[\phi_{0}+\phi_{1}x]} \right) \frac{\exp[-\phi_{0}-\phi_{1}x_{i}]}{(1+\exp[-\phi_{0}-\phi_{1}x_{i}])^{2}}
\end{align}
$$
and
$$
\begin{align}
\frac{ \partial L }{ \partial \phi_{0} }  & = \frac{ \partial L  }{ \partial (\text{sig}[\phi_{0}+\phi_{1}x_{i}]) } \frac{ \partial (\text{sig}[\phi_{0}+\phi_{1}x_{i}]) }{ \partial \phi_{0}+\phi_{1}x_{i} }  \frac{ \partial (\phi_{0} + \phi_{1}x_{i}) }{ \partial \phi_{1} }  \\[2ex] 
     & =
\sum_{i=1}^{I}\left( \frac{1-y_{i}}{1-\text{sig}[\phi_{0}+\phi_{1}x_{i}]} - \frac{y_{i}}{\text{sig}[\phi_{0}+\phi_{1}x]} \right) \frac{  \exp[-\phi_{0}-\phi_{1}x_{i}]}{(1+\exp[-\phi_{0}-\phi_{1}x_{i}])^{2}} \cdot  x_{i}
\end{align}
$$

**(iv)**
```python
import numpy as np
import matplotlib.pyplot as plt

np.random.seed(42)

# Generate data
x0 = np.random.normal(-1.0, 1.0, 10)
y0 = np.zeros(10)

x1 = np.random.normal(1.0, 1.0, 10)
y1 = np.ones(10)

x = np.concatenate([x0, x1])
y = np.concatenate([y0, y1])

# Sigmoid and loss
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def loss(phi0, phi1):
    z = phi0 + phi1 * x
    p = sigmoid(z)
    eps = 1e-12
    p = np.clip(p, eps, 1 - eps) # Keep p from exact 0 or 1 to prevent overflow
    return -np.sum((1 - y) * np.log(1 - p) + y * np.log(p))

# Grid
phi0_vals = np.linspace(-4, 4, 200)
phi1_vals = np.linspace(-4, 4, 200)
loss_grid = np.zeros((len(phi1_vals), len(phi0_vals)))

for i, phi1 in enumerate(phi1_vals):
    for j, phi0 in enumerate(phi0_vals):
        loss_grid[i, j] = loss(phi0, phi1)

# Plot
plt.figure(figsize=(7, 6))
plt.imshow(
    loss_grid,
    extent=[phi0_vals.min(), phi0_vals.max(), phi1_vals.min(), phi1_vals.max()],
    origin="lower",
    aspect="auto",
)

# Add level curves (contours)
min_loss = np.min(loss_grid)
max_loss = np.max(loss_grid)
contour_levels = np.linspace(min_loss, max_loss, 15)
plt.contour(
    phi0_vals, 
    phi1_vals, 
    loss_grid, 
    levels=contour_levels,
    colors='white',
    alpha=0.7,
    linewidths=0.5
)

plt.colorbar(label="Loss")
plt.xlabel(r"$\phi_0$")
plt.ylabel(r"$\phi_1$")
plt.title("Binary Cross‑Entropy Loss Surface")
plt.show()
```

![[UDL Chapter 6 Problems-20250706214030358.png|620]]

**(v)** The loss function seems to be convex based on the plot above. We can prove it by examining the Hessian matrix like we did in question 6.2


> [!question] Problem 6.5
> Compute the derivatives of the least squares loss with respect to the ten parameters of the simple neural network model:
> $$
> f[x,\phi] = \phi_{0}+\phi_{1}a[\theta_{10}+\theta_{11}x] + \phi_{2}[\theta_{20}+\theta_{21}x] + \phi_{3}a[\theta_{30}+\theta_{31}x]
> $$
> Think carefully about what the derivative of the ReLU function $a[\bullet]$ will be.

The derivative of the least squares loss function $f[x,\phi]$ is given by:
$$
\frac{ \partial L }{ \partial \phi_{j} } = -2 \sum_{i} (y-f[x_{i},\phi]) \frac{ \partial f[x_{i}, \phi] }{ \partial \phi_{j} } 
$$
The derivative of ReLU is:
$$
\begin{cases}
0 & \text{if }z<0 \\
1 & \text{if }z>0
\end{cases}
$$
We can write this as $\mathbb{I}[z>0]$.

Then, the derivatives are:
$$
\begin{align}
\frac{ \partial f[x_{i}, \phi] }{ \partial \phi_{0} }  & = 1  \\[2ex]
\frac{ \partial f[x_{i}, \phi] }{ \partial \phi_{1} }   & = a[\theta_{10}+\theta_{11}x_{i}] \\[2ex]
\frac{ \partial f[x_{i}, \phi] }{ \partial \phi_{2} }   & = a[\theta_{20}+\theta_{21}x_{i}] \\[2ex]
\frac{ \partial f[x_{i}, \phi] }{ \partial \phi_{3} }  & =a[\theta_{30}+\theta_{31}x_{i}]
\end{align}
$$
and:
$$
\begin{align}
\frac{ \partial f[x_{i}, \phi] }{ \partial \theta_{10} }  & = \phi_{1} \cdot \mathbb{I}[\theta_{10}+\theta_{11}x_{i} > 0] \\[2ex]
\frac{ \partial f[x_{i}, \phi] }{ \partial \theta_{11} }  & = \phi_{1}\cdot x_{i} \cdot \mathbb{I}[\theta_{10}+\theta_{11}x_{i} > 0]   \\[2ex]
\frac{ \partial f[x_{i}, \phi] }{ \partial \theta_{20} }  & = \phi_{2} \cdot \mathbb{I}[\theta_{20}+\theta_{21}x_{i} > 0] \\[2ex]
\frac{ \partial f[x_{i}, \phi] }{ \partial \theta_{21} }  & = \phi_{2}\cdot x_{i} \cdot \mathbb{I}[\theta_{20}+\theta_{21}x_{i} > 0]   \\[2ex]
\frac{ \partial f[x_{i}, \phi] }{ \partial \theta_{30} }  & = \phi_{3} \cdot \mathbb{I}[\theta_{30}+\theta_{31}x_{i} > 0] \\[2ex]
\frac{ \partial f[x_{i}, \phi] }{ \partial \theta_{31} }  & = \phi_{3}\cdot x_{i} \cdot \mathbb{I}[\theta_{30}+\theta_{31}x_{i} > 0]   \\[2ex]
\end{align}
$$

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