---
title: UDL Chapter 5 Problems
tags:
  - dl
date: 2025-06-24
aliases:
  - udl chapter 5 problems
draft:
---
> [!question] Problem 5.1
> Show that the logistic sigmoid function $\text{sig}[z]$ becomes $0$ as $z\to-\infty$, is $0.5$ when $z=0$, and becomes $1$ when $z\to \infty$, where
> $$
> \text{sig}[z] = \frac{1}{1+\exp[-z]}
> $$

For $z\to-\infty$:
$$
\lim_{ z \to -\infty } \frac{1}{1+\exp[-z]}= \frac{1}{\infty} = 0
$$
For $z=0$:
$$
\frac{1}{1+\exp[0]} = \frac{1}{1+1}=\frac{1}{2}=0.5
$$
For $z\to \infty$:
$$
\lim_{ z \to -\infty } \frac{1}{1+\exp[-z]}= \frac{1}{1+0} = 1
$$

> [!question] Problem 5.2
> The loss $L$ for binary classification for a single training pair $\{ \mathbf{x} , y \}$ is
> $$
> L=-(1-y)\log \Big[1- \text{sig}[f[\mathbf{x}, \phi]]\Big] - y \log \Big[ \text{sig}[f[\mathbf{x}, \phi]] \Big]
> $$
> Plot this loss as a function of the transformed output $\text{sig}[f[\mathbf{x}, \phi]]\in [0,1]$ (i) when the training label $y=0$ and when (ii) when $y=1$.

When $y=0$, we just have $L=-1 \log\Big[1-\text{sig}[f[x,\phi]]\Big]$. With $y=1$, we just have $L=-\log\Big[\text{sig}[f[x,\phi]]\Big]$:

![[UDL Chapter 5 Problems-20250624103914141.png]]


> [!question] Problem 5.3
> Suppose we want to build a model that predicts the direction $y$ in radians of the prevailing wind based on local measurements of barometric pressure $\mathbf{x}$. A suitable distribution over circular domains is the von Mises distribution:
> $$
> Pr(y|\mu, \kappa) = \frac{\exp[\kappa \cos[y-\mu]]}{2\pi \cdot \text{Bessel}_{0}[\kappa]}
> $$
> 
> ![[UDL Chapter 5 Problems-20250625171442730.png]]
> 
> - $\mu$ is a measure of the mean direction
> - $\kappa$ is a measure of concentration (i.e. inverse of variance)
> - The term $\text{Bessel}_{0}(\kappa)$ is a modified Bessel function of the first kind of order $0$.
>   
>   Use the [[Loss Function Recipe|loss function recipe]] to develop a loss function for learning the parameter $\mu$ of a model $f[\mathbf{x}, \phi]$ to predict the most likely wind direction. Your solution should treat the concentration $\kappa$ as a constant. How would you perform inference?

We set $\mu=f[\mathbf{x}_{i}, \phi]$, so
$$
Pr(y_{i} | f[x_{i}, \phi]) = \frac{\exp[\kappa \cos[y-f[\mathbf{x}_{i}, \phi]]]}{2\pi \cdot \text{Bessel}_{0}[\kappa]}
$$
Then the [[Log-Likelihood Criterion|negative log-likelihood]] loss function is
$$
\begin{align}
L  & = - \sum_{i=1}^{I} \log \left(\frac{\exp[\kappa \cos[y-f[\mathbf{x}_{i}, \phi]]]}{2\pi \cdot \text{Bessel}_{0}[\kappa]}\right) \\[2ex]
     & = -\sum_{i=1}^{I} [\kappa \cos[y-f[\mathbf{x}_{i}, \phi]]]-\Big({ \log (2\pi) } +\log(\text{Bessel}_{0}[\kappa])\Big) \\[2ex] 
     & = -\sum_{i=1}^{I}\cos[y - f[\mathbf{x}_{i}, \phi]]
\end{align} 
$$
To perform inference we just take the maximum of the distribution (which is just the predicted parameter $\mu$). This might be out of the range $[−\pi, \pi]$, in which case we would add/remove multiples of $2\pi$ until it is in the right range.


> [!question] Problem 5.4
> Sometimes, the outputs for input $\mathbf{x}$ are multimodal; there is more than one valid prediction for a given input. Here, we might use a sum of normal components as the distribution over the output. This is known as a *mixture of Gaussians* model. For example, a mixture of two Gaussians has parameters $\mathbf{\theta}=\{ \lambda, \mu_{1}, \sigma_{1}^{2}, \mu_{2}, \sigma_{2}^{2} \}$:
> $$
> Pr(y\, | \,\lambda, \mu_{1}, \mu_{2}, \sigma_{1}^{2}, \sigma_{2}^{2}) = \frac{\lambda}{\sqrt{ 2 \pi \sigma_{1}^{2} }} \exp \left[  -\frac{(y-\mu_{1})^{2}}{2\sigma_{1}^{2}} \right] + \frac{1-\lambda}{\sqrt{ 2\pi \sigma_{2}^{2} }} \exp\left[ \frac{-(y-\mu_{2})^{2}}{2\sigma_{2}^{2}} \right]
> $$
> where $\lambda \in [0,1]$ controls the relative weight of the two components, which have means $\mu_{1}, \mu_{2}$ and variances $\sigma_{1}^{2}, \sigma_{2}^{2}$, respectively. This model can represent a distribution with two peaks or a distribution with one peak but a more complex shape. 
> 
> ![[UDL Chapter 5 Problems-20250627004038230.png]]
> 
> Use the [[Loss Function Recipe|loss function recipe]] to construct a loss function for training a model $\mathbf{f}[x, \phi]$ that takes input $x$, has parameters $\phi$, and predicts a mixture of two Gaussians. The loss should be based on $I$ training data pairs $\{ x_{i}, y_{i} \}$. What problems do you foresee when performing inference?

Let:
- $\lambda= \text{sig} [\mathbf{f}_{1}[\mathbf{x}_{i}, \phi]]$
    - Use sigmoid to enforce $\lambda \in [0,1]$.
- $\mu_{1}=\mathbf{f}_{2}[\mathbf{x}_{i}, \phi]$
- $\sigma_{1}=\mathbf{f}_{3}[\mathbf{x}_{i}, \phi]$
- $\mu_{2}=\mathbf{f}_{4}[\mathbf{x}_{i}, \phi]$
- $\sigma_{2}=\mathbf{f}_{5}[\mathbf{x}_{i}, \phi]$

Then the loss is
$$
L= - \sum_{i=1}^{I} \log\left[  \frac{\text{sig}[\mathbf{f_{1}}[\mathbf{x}_{i}, \phi]]}{\sqrt{ 2\pi \mathbf{f_{3}}[\mathbf{x}_{i}, \phi]^{2}}} \exp\left[  \frac{-(y-\mathbf{f_{2}}[\mathbf{x}_{i}, \phi])^{2}}{2\mathbf{f_{3}}[\mathbf{x}_{i}, \phi]^{2}}  \right] + \frac{1-\text{sig}[\mathbf{f_{1}}[\mathbf{x}_{i}, \phi]]}{\sqrt{ 2\pi \mathbf{f_{5}}[\mathbf{x}_{i}, \phi]^{2} }} \exp\left[ \frac{-(y-\mathbf{f_{4}}[\mathbf{x}_{i}, \phi])^{2}}{2\mathbf{f_{5}}[\mathbf{x}_{i}, \phi]^{2}} \right] \right] 
$$
Inference is a bit trickier in this case since there is no simple closed form for the mode of this distribution. 
- [MACP: How many modes can a Gaussian mixture have?](https://www.cs.toronto.edu/~miguel/research/GMmodes.html)

> [!question] Problem 5.5
> Consider extending the model from problem 5.3 to predict the wind direction using a mixture of two von Mises distributions. Write an expression for the likelihood $Pr(y|\theta)$ for this model. How many outputs will the network produce?

Each von Mises distribution is parametrized by $\mu, \kappa$. Thus, for a mixture of two von Mises distributions, the parameters will be
$$
\theta=\{ \lambda, \mu_{1}, \kappa_{1}, \mu_{2}, \kappa_{2} \}
$$
where $\lambda$ is the relative weight of the two distributions. The likelihood will then be:
$$
Pr(y\, | \,\lambda, \mu_{1}, \kappa_{1}, \mu_{2}, \kappa_{2}) =
\lambda \frac{\exp[\kappa_{1} \cos[y-\mu_{1}]}{2\pi\cdot \text{Bessel}_{0}[\kappa_{1}]} + (1-\lambda)\frac{[\exp[\kappa_{2} \cos[y-\mu_{2}]]}{2\pi\cdot \text{Bessel}_{0}[\kappa_{2}]}
$$
Like the mixture of Gaussians above, we would need five outputs, unless we consider $\kappa_{1}$ and $\kappa_{2}$ to be constants, in which case we would need 3.


> [!question] Problem 5.6
> Consider building a model to predict the number of pedestrians $y \in \{ 0,1,2,\dots \}$ that will pass a given point in the city in the next minute, based on data $\mathbf{x}$ that contains information about the time of the day, the longitude and latitude, and the type of neighborhood. A suitable distribution for modeling counts is the Poisson distribution. This has a single parameter $\lambda>0$ called the *rate* that represents the mean of the distribution. The distribution has probability distribution function:
> $$
> Pr(y=k) = \frac{\lambda^{k}e^{-\lambda}}{k!}
> $$
> 
> ![[UDL Chapter 5 Problems-20250627010758682.png]]
> 
> Design a loss function for this model assuming we have access to $I$ training pairs $\{ \mathbf{x_{i}}, y_{i} \}$.

We make the rate $\lambda$ the learned parameter such that $\lambda=f[\mathbf{x}_{i}, \phi]$. Then, we have
$$
\begin{align}
Pr(y_{i} = k | f[x_{i}, \phi]) = \frac{f[\mathbf{x_{i}}, \phi]^{k}e^{-f[\mathbf{x}_{i}, \phi]}}{k!}
\end{align}
$$
The loss function based on [[Log-Likelihood Criterion|negative log-likelihood]] is then
$$
\begin{align}
L  & = - \sum_{i=1}^{I} \log \left[\frac{f[\mathbf{x_{i}}, \phi]^{k}e^{-f[\mathbf{x}_{i}, \phi]}}{y_{i}!}\right] \\[2ex]
     & = - \sum_{i=1}^{I} k\log[f[\mathbf{x}_{i}, \phi]] -f[\mathbf{x}_{i}, \phi] - \log[y_{i}!]
\end{align}
$$
We can drop the last term above since it doesn't depend on $\phi$. Also, we often would want to add a function like $\lambda = \exp(f[\mathbf{x}_{i},\phi])$ or $\lambda=| f[\mathbf{x}_{i}, \phi] |$ to enforce the condition that $\lambda>0$, similarly to how we used sigmoid/softmax to enforce $0<\mu<1$ before. $\exp$ is likely a better choice because it is differentiable.

> [!question] Problem 5.7
> Consider a multivariate regression problem where we predict ten outputs, so $\mathbf{y} \in  \mathbb{R}^{10}$, and model each with an independent normal distribution where the means $\mu_{d}$ are predicted by the network, and variances $\sigma^{2}$ are constant. Write an expression for the likelihood $Pr(\mathbf{y} \, | \, \mathbf{f}[\mathbf{x}, \phi])$. Show that minimizing the [[Log-Likelihood Criterion|negative log-likelihood]] of this model is still equivalent to minimizing a sum of square terms if we don't estimate the variance $\sigma^{2}$.

Each probability likelihood is given by
$$
Pr(y_{id} \, | \,f[\mathbf{x}_{i}, \phi]) = \frac{1}{\sqrt{ 2\pi \sigma^{2} }}\exp \left[ -\frac{(y_{id}- \mu_{d})^{2}}{2\sigma^{2}} \right]
$$
We try to learn parameters to predict each mean, such that $\mu_{d} = \mathbf{f}_{d}[\mathbf{x_{i}}, \phi]$.

Then, the overall joint likelihood is given by
$$
Pr(\mathbf y_i \mid \mathbf f[\mathbf x_i,\phi]) \;=\; \prod_{d=1}^{10} \frac{1}{\sqrt{2\pi\sigma^{2}}}\, \exp\!\Bigl[-\tfrac{(y_{id}-f_{d}[\mathbf x_i,\phi])^{2}}{2\sigma^{2}}\Bigr].
$$
Then:
$$
\begin{align}
L[\phi] & = - \sum_{i=1}^{I} \log[Pr(\mathbf{y}_{i} \, | \,\mathbf{f}[\mathbf{x}_{i}, \mathbf{\phi}])]  \\[2ex]
 & = - \sum_{i=1}^{I} \sum_{d=1}^{10} \log \Big[ Pr(y_{id} \, | \, \mathbf{f}_{d}[\mathbf{x}_{i}, \mathbf{\phi}]) \Big] \\[2ex]
     & = - \sum_{i=1}^{I} \sum_{d=1}^{10} \log \frac{1}{\sqrt{ 2\pi \sigma^{2} }}\exp \left[ -\frac{(y_{id}- \mathbf{f}_{d}[\mathbf{x_{i}}, \phi])^{2}}{2\sigma^{2}} \right] \\[2ex]
\end{align}
$$
Then, following the derivation we did for [[Univariate Regression|least squares]], we just have
$$
\begin{align}
\hat{\phi} =  \underset{\phi}{\operatorname{argmin}} \left[ \sum_{i=1}^{I} \sum_{d=1}^{10} (y_{id}-\mathbf{f}_{d}[\mathbf{x}_{i}, \phi])^{2} \right]
\end{align}
$$
- The terms with no relation to $\phi$ were discarded since they have no effect on the location of $\hat{\phi}$


> [!question] Problem 5.8
> Construct a loss function for making multivariate predictions $\mathbf{y} \in \mathbb{R}^{D_{o}}$ based on independent normal distributions with different variances $\sigma_{d}^{2}$ for each dimension. Assume a [[Heteroscedastic Regression|heteroscedastic]] model so that both the means $\mu_{d}$ and the variances $\sigma_{d}^{2}$ vary as a function of the data.

Let:
- $\mu_{d} = \mathbf{f}_{1d}[\mathbf{x}_{i}, \phi]$ 
- $\sigma_{d}^{2} = \mathbf{f}_{2d}[\mathbf{x}_{i}, \phi]$

Then the loss function is:
$$
L = -\sum_{i=1}^{I} \log \left[  \prod_{d=1}^{D_{o}} \frac{1}{\sqrt{ 2\pi \mathbf{f}_{2d}[\mathbf{x}_{i}, \phi]^{2} }} \exp\left[ -\frac{(y_{id}-\mathbf{f}_{1d}[\mathbf{x}_{i}, \phi])}{2 \mathbf{f}_{2d}[\mathbf{x}_{i}, \phi]^{2}} \right]  \right]
$$
We can do negative log-likelihood on the inside term too:
$$
\begin{aligned} 
L &= -\sum_{i=1}^{I}\sum_{d=1}^{D_{o}} \log\left[ \frac{1}{\sqrt{2\pi\,\mathbf f_{2d}[\mathbf x_{i},\phi]^{\,2}}}\; \exp\left[-\frac{(y_{id}-\mathbf f_{1d}[\mathbf x_{i},\phi])^{2}} {2\,\mathbf f_{2d}[\mathbf x_{i},\phi]^{\,2}}\right]\right]
\end{aligned}
$$
Taking the log of the product inside:
$$
\begin{aligned} 
L &=\sum_{i=1}^{I}\sum_{d=1}^{D_{o}} \Biggl\{ \frac12\log\!\bigl(2\pi\,\mathbf f_{2d}[\mathbf x_{i},\phi]^{\,2}\bigr) +\frac{(y_{id}-\mathbf f_{1d}[\mathbf x_{i},\phi])^{2}} {2\,\mathbf f_{2d}[\mathbf x_{i},\phi]^{\,2}} \Biggr\}
\end{aligned}
$$

> [!question] Problem 5.9
> Consider a multivariate regression problem in which we predict the height of a person in meters and their weight in kilos from data $\mathbf{x}$. Here, the units take quite different ranges. What problems do you see this causing? Propose two solutions to these problems. 

The values for weight in kilos (50-100 range) are going to be much higher than for height in meters (1-2m) range. Using least squares, the loss will focus much more on weight than height. 

Possible solutions:
- Rescale/normalize outputs so they have the same standard deviation, build the model the predict the normalized outputs, and scale them back after inference
- Learn a separate variance for the two dimensions so that the model can automatically take care of this. This can be done in either a homoscedastic or heteroscedastic way.

> [!question] Problem 5.10
> Extend the model from problem 5.3 to predict both the wind direction and the wind speed and define the associated loss function. 

Direction uses von Mises distribution in 5.3:
$$
Pr(y|\mu, \kappa) = \frac{\exp[\kappa \cos[y-\mu]]}{2\pi \cdot \text{Bessel}_{0}[\kappa]}
$$
which results in a negative log-likelihood loss function of
$$
L_{\text{direction}}=-\sum_{i=1}^{I}\cos[y - f_{1}[\mathbf{x}_{i}, \phi]]
$$
For windspeed, we can use a Weibull distribution:
$$
Pr(v\, | \,k, \lambda)=\frac{k}{\lambda}\bigl(\tfrac{v}{\lambda}\bigr)^{k-1}\exp\!\bigl[-(v/\lambda)^{k}\bigr]
$$
where $k$ is a shape parameter and $\lambda$ is a scale parameter.

Using negative log likelihood on the Weibull distribution gives us
$$
\begin{aligned} 
L_{\text{speed}} &= -\sum_{i=1}^I \log \left[ \frac{k}{\lambda_i} \left( \frac{v_i}{\lambda_i} \right)^{k-1} \exp\left( -\left( \frac{v_i}{\lambda_i} \right)^k \right) \right] \\[2ex]
&= -\sum_{i=1}^I \left[ \log k - \log \lambda_i + (k-1) \log \left( \frac{v_i}{\lambda_i} \right) - \left( \frac{v_i}{\lambda_i} \right)^k \right] \\[2ex]
&= -\sum_{i=1}^I \left[ \log k - \log \lambda_i + (k-1)(\log v_i - \log \lambda_i) - \left( \frac{v_i}{\lambda_i} \right)^k \right] \\[2ex] 
&= -\sum_{i=1}^I \left[ \log k + (k-1)\log v_i - k \log \lambda_i - \left( \frac{v_i}{\lambda_i} \right)^k \right]. \end{aligned}
$$
We can learn both $\lambda$ and $k$, or fix $k$ and just learn $\lambda$. Let's say we learn both and have $\lambda=f_{2}[\mathbf{x}_{i}, \phi]$ and $k=f_{3}[\mathbf{x}_{i}, \phi]$. Then the complete loss function is:
$$
\begin{aligned}
L_{\text{total}} = \sum_{i=1}^I \bigg[
& -\cos\big(y_i - f_1[\mathbf{x}_i, \phi]\big) 
- \log f_3[\mathbf{x}_i, \phi]
- (f_3[\mathbf{x}_i, \phi] - 1) \log v_i \  
- f_3[\mathbf{x}_i, \phi] \log f_2[\mathbf{x}_i, \phi]
- \left( \frac{v_i}{f_2[\mathbf{x}_i, \phi]} \right)^{f_3[\mathbf{x}_i, \phi]}
\bigg]
\end{aligned}
$$

