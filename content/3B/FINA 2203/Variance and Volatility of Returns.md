---
title: Variance and Volatility of Returns
tags:
  - fina2203
date: 2025-05-17
aliases:
  - variance and volatility of returns
---
In order to examine the risk of an investment, we measure its variability in a distribution.

 [[Variance]] and [[Standard Deviation]]:
- Measure the spread in returns
- Measure how far actual returns deviate from the mean
- Measure the volatility of asset returns

Variance estimate using realized returns:
$$
Var(R) = \frac{1}{T-1} \sum_{t=1}^{T} (R_{t}- \bar{R})^{2}
$$
Standard deviation is the square root of variance
$$
SD(R) = \sqrt{ Var(R) }
$$
- Expressed in percentage
- The larger the number, the greater the uncertainty of returns

## Example
Using the following data, what is the standard deviation of the S&P 500's returns for the year's 2005-2009?

![[Variance and Volatility of Returns-20250517135031653.png]]

We have:

![[Variance and Volatility of Returns-20250517135122628.png]]

$$
\begin{align}
Var(R) & =\left( \frac{1}{5-1} \right)(3.1+160+5.57+1611+545.7) =581.46 \\[2ex] 
SD(R)  & = \sqrt{ 581.46 } = 24.11
\end{align}
$$
