---
title: Goodness of Fit
tags:
  - mte204
date: 2023-10-19
---
How do we quantify the quality of fit?

The sum of squares of residuals ($S_{r}$) is a quantification of the error between the measured and predicted $y$ values after regression:
$$
S_{r} = \sum_{i=1}^{n}(y_{i} -a_{0}-a_{1}x_{i})^{2}
$$
The total sum of squares around the mean value is the magnitude of the residual error associated with the dependent variable prior to regression:
$$
S_{t} = \sum_{i=1}^{n} (y_{i} - \bar{y})^{2}
$$
We can then use then use the difference between $S_{t}$ and $S_{r}$ to quantify the improvement or error reduction. To do this, we define:
$$
\begin{align}
\text{Coefficient of Determination: } &  \quad r^{2} = \frac{S_{t}-S_{r}}{S_{t}} \\[3ex] 

\text{Correlation Coefficient: }  & \quad r
\end{align}
$$
If we have $r^{2} = 1$, that means that the line explains all of the variability of the data and is therefore a "perfect fit". On the other hand, $r^{2} = 0$ would be a poor fit.

Something like $r^{2} = 0.868$ means that 86% of the uncertainty is explained by the linear model.

It's still important to check results visually, as $r^{2}$ and $r$ can trick you!

![[Goodness of Fit.png|258]]