---
title: UDL Chapter 2 Problems
tags:
  - lin-alg
date: 2024-12-16
aliases:
  - udl chapter 2 problems
draft: "true"
---
> [!question] Problem 2.1
> To walk "downhill" on the least squares loss function
> $$
> L[\phi]=\sum_{i=1}^{I}(\phi_{0}+\phi_{1}x_{i}-y_{i})^{2}
> $$
> we measure its its gradient with respect to the parameters $\phi_{0}$ and $\phi_{1}$. Calculate expressions for the slopes $\partial L / \partial \phi_{0}$ and $\partial L  /\partial \phi_{1}$.

For $\phi_{0}$:
$$
\begin{align}
\frac{ \partial }{ \partial \phi_{0} }(\phi_{0}+\phi_{1}x_{i}-y_{i})^{2}  & =2(\phi_{0}+\phi_{1}x_{i}-y_{i})\cdot \frac{ \partial  }{ \partial \phi_{0} } (\phi_{0}+\phi_{1} x_{i}-y_{i}) \\[2ex] 
	 & =2(\phi_{0}+\phi_{1}x_{i}-y_{i})\cdot 1
\end{align}
$$
Taking the summation into account, we have
$$
\frac{ \partial L }{ \partial \phi_{0} } = 2\sum_{i=1}^{I}(\phi_{0}+\phi_{1}x_{i}-y_{i})
$$
For $\phi_{1}$:
$$
\begin{align}
\frac{ \partial }{ \partial \phi_{1} }(\phi_{0}+\phi_{1}x_{i}-y_{i})^{2}  & =2(\phi_{0}+\phi_{1}x_{i}-y_{i})\cdot \frac{ \partial  }{ \partial \phi_{1} } (\phi_{0}+\phi_{1} x_{i}-y_{i}) \\[2ex] 
	 & =2(\phi_{0}+\phi_{1}x_{i}-y_{i})\cdot x_{i} \\
\end{align}
$$
Taking the summation into account, we have:
$$
\frac{ \partial L }{ \partial \phi_{1} } = 2\sum_{i=1}^{I}(\phi_{0}+\phi_{1}x_{i}-y_{i})\,x_{i}
$$

> [!question] Problem 2.2
> Show that we can find the minimum of the loss function in closed form by setting the expression for the derivatives from Problem 2.1 to zero and solving for $\phi_{0}$ and $\phi_{1}$. Note that this works for linear regression but not for more complex models; this is why we use iterative model fitting methods like gradient descent.

For $\phi_{0}$:
$$
\begin{align}
\frac{ \partial L }{ \partial \phi_{0} } = 2\sum_{i=1}^{I}(\phi_{0}+\phi_{1}x_{i}-y_{i}) & =0 \\[2ex]
\sum_{i=1}^{I}\phi_{0}+ \sum_{i=1}^{I}\phi_{1}x_{i}-\sum_{i=1}^{I}y_{i} & =0 \\[2ex]
I\phi_{0}+\phi_{1} \sum_{i=1}^{I}x_{i}-\sum_{i=1}^{I}y_{i} & =0 \\[2ex]
\phi_{0} & =\frac{1}{I} \sum_{i=1}^{I}y_{i}-\phi_{1}\frac{1}{I} \sum_{i=1}^{I}x_{i} \\[2ex] 
	 \phi_{0}   & =\boxed{\bar{y}-\phi_{1}\bar{x}}
\end{align}
$$
For $\phi_{1}$:
$$
\begin{align}
\frac{\partial L}{\partial \phi_1} = 2 \sum_{i=1}^{I} (\phi_0 + \phi_1 x_i - y_i) x_i  & = 0 \\[2ex]
\sum_{i=1}^{I} (\phi_0 + \phi_1 x_i - y_i) x_i &= 0 \\[2ex]
\sum_{i=1}^{I} \phi_0 x_i + \sum_{i=1}^{I} \phi_1 x_i^2 - \sum_{i=1}^{I} y_i x_i &= 0 \\[2ex]
\phi_0 \sum_{i=1}^{I} x_i + \phi_1 \sum_{i=1}^{I} x_i^2 - \sum_{i=1}^{I} y_i x_i &= 0 \\[2ex]
\end{align}
$$
Substitute $\phi_0 = \bar{y} - \phi_1 \bar{x}$ into the equation:
$$
\begin{align}
\left( \bar{y} - \phi_1 \bar{x} \right) \sum_{i=1}^{I} x_i + \phi_1 \sum_{i=1}^{I} x_i^2 - \sum_{i=1}^{I} y_i x_i &= 0 \\[2ex]
\bar{y} \sum_{i=1}^{I} x_i - \phi_1 \bar{x} \sum_{i=1}^{I} x_i + \phi_1 \sum_{i=1}^{I} x_i^2 - \sum_{i=1}^{I} y_i x_i &= 0 \\[2ex]
\bar{y} \sum_{i=1}^{I} x_i - \sum_{i=1}^{I} y_i x_i + \phi_1 \left( \sum_{i=1}^{I} x_i^2 - \bar{x} \sum_{i=1}^{I} x_i \right) &= 0 \\[2ex]
\sum_{i=1}^{I} (\bar{y} - y_i) x_i + \phi_1 \sum_{i=1}^{I} (x_i - \bar{x}) x_i &= 0.
\end{align}
$$
Then:
$$
\begin{align}
\sum_{i=1}^{I} (\bar{y} - y_i) x_i + \phi_1 \sum_{i=1}^{I} (x_i - \bar{x}) x_i &= 0 \\[2ex]
\sum_{i=1}^{I} \bar{y} x_i - \sum_{i=1}^{I} y_i x_i + \phi_1 \sum_{i=1}^{I} \left( x_i^2 - \bar{x} x_i \right) &= 0 \\[2ex]
\bar{y} \sum_{i=1}^{I} x_i - \sum_{i=1}^{I} y_i x_i + \phi_1 \left( \sum_{i=1}^{I} x_i^2 - \bar{x} \sum_{i=1}^{I} x_i \right) &= 0 \\[2ex]
\phi_1 \left( \sum_{i=1}^{I} x_i^2 - \bar{x} \sum_{i=1}^{I} x_i \right) &= \sum_{i=1}^{I} y_i x_i - \bar{y} \sum_{i=1}^{I} x_i \\[2ex]
\phi_1 &= \frac{\sum_{i=1}^{I} y_i x_i - \bar{y} \sum_{i=1}^{I} x_i}{\sum_{i=1}^{I} x_i^2 - \bar{x} \sum_{i=1}^{I} x_i} \\[2ex]
\phi_1 &= \frac{\sum_{i=1}^{I} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{I} (x_i - \bar{x})^2}.
\end{align}

$$


> [!question] Problem 2.3
> Consider reformulating linear regression as a generative model, so we have $x = g[y, \phi] = \phi_{0} + \phi_{1}y$. What is the new loss function? Find an expression for the inverse function $y=g^{-1}[x,\phi]$ that we would use to perform inference. Will this model make the same predictions as the discriminative version for a given training dataset $\{ x_{i},y_{i} \}$? One way to establish this is to write code that fits a line to three data points using both methods and see if the result is the same.

The generative model is
$$
x=g[y,\phi]=\phi_{0}+\phi_{1}y
$$
Here, $x$ is generated as a function of $y$ and parameters $\phi_{0}, \phi_{1}$.

The new least squares loss becomes:
$$
L[\phi]=\sum_{i=1}^{I}(x_{i}-(\phi_{0}+\phi_{1}y_{i}))^{2}
$$
We want to find the inverse function $y=g^{-1}[x,\phi]$, starting from:
$$
\begin{align}
x & =\phi_{0}+\phi_{1}y \\[2ex]
y &= \frac{x-\phi_{0}}{\phi_{1}}
\end{align}
$$
- The **discriminative model** directly minimizes the loss on $y$ given $x$.
- The **generative model** minimizes the loss on $x$ given $y$, and we invert it to predict $y$ from $x$.


```
Discriminative Model: y = 1.17 + 0.75x
Generative Model: x = -1.43 + 1.29y
Inverse Generative Model: y = 1.11 + 0.78x
```

![[UDL Chapter 2 Problems.png|496]]

