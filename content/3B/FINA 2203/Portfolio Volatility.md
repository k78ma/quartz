---
title: Portfolio Volatility
tags:
  - fina2203
date: 2025-05-17
aliases:
  - portfolio volatility
---
The volatility of a portfolio is the total risk, measured as standard deviation, of the portfolio. When we combine stocks in a portfolio, some of their risk is eliminated through diversification. The amount of risk that will remain depends upon the degree to which the stocks share common risk.

## Correlation
Correlation measures how returns move in relation to each other. It is between +1 and -1.
$$
Corr(R_{i}, R_{j}) = \frac{Cov(R_{i}, R_{j})}{SD(R_{i})SD(R_{j})}
$$

![[Portfolio Volatility-20250517162059327.png]]

![[Portfolio Volatility-20250517162114479.png]]

![[Portfolio Volatility-20250517162159274.png]]

- Notice the clear positive relation between Ford and Goodyear, which tend to move up and down together, versus almost no relation between Apple and Berkshire. 

The variance of a two-stock portfolio can then be found as:
$$
Var(R_{P}) = w_{1}^{2}SD(R_{1})^{2}+w_{2}^{2}SD(R_{2})^{2}+2w_{1}w_{2}Corr(R_{1}, R_{2})SD(R_{1})SD(R_{2}) 
$$
- The first term accounts for the risk of stock 1
- The second term accounts for the risk of stock 2
- The third term adjusts for how much the two stocks move together

Variance of a portfolio does not equal to the weighted average variance of individual securities in the portfolio. It is lower, as long as correlation among assets are smaller than 1. As the number of assets increases, $w_{i}$ becomes smaller. The correlation (covariance) among assets becomes much more important in determining the portfolio variance than the individual assets' variances.

Thus, the volatility of returns can be substantially reduced by forming portfolios of individual assets without an equivalent reduction in expected returns. However, there is a minimum level of risk that cannot be diversified away.

![[Portfolio Volatility-20250517163134537.png|620]]


## Example
Using the data from Table 12.3, what is the volatility (standard deviation) of a portfolio with equal amounts invested in Apple and Microsoft stock? What is the standard deviation of a portfolio with equal amounts invested in Apple and Starbucks?

![[Portfolio Volatility-20250517161148521.png]]

We have:
$$
\begin{align}
Var(R_{P})  & = w_{1}^{2}SD(R_{1})^{2}+w_{2}^{2}SD(R_{2})^{2}+2w_{1}w_{2}Corr(R_{1}, R_{2})SD(R_{1})SD(R_{2}) \\[2ex] 
     & = (0.5)^{2}(41)^{2}+(0.5)^{2}(32)^{2}+2(0.5)(0.5)(0.38)(41)(32) \\[2ex]
     & = 925.5
\end{align}
$$
which gives $SD(R_{p})=\sqrt{ Var(R_{p}) }=\sqrt{ 925.5 }=30.4\%$. Similarly, we can find that the standard deviation of the portfolio of Apple and Microsoft is 29.9%.

Notes:
- The portfolio of Apple and Starbucks is less volatile than either of the individual stocks.
- It has about the same volatility as the portfolio of Apple and Microsoft.
- Even though Starbucks is more volatile than Microsoft, its lower correlation with Apple leads to greater diversification benefits in the portfolio.
