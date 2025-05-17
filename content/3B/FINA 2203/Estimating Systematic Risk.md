---
title: Estimating Systematic Risk
tags:
  - fina2203
date: 2025-05-17
aliases:
  - estimating systematic risk
  - beta
---
To find the required return on an investment, we need to know the risk premium of the investment, then add the risk free rate to it. Steps:
1. Measure the investment's systematic risk – this lets us determine how much of the variability of its return due to systematic risk vs. unsystematic risk.
2. Determine the risk premium required to compensate for that amount of systematic risk.

## Market Portfolio
To determine the systematic risk, we a benchmark portfolio –  a market portfolio.

Suppose all investors wants to hold portfolios that are fully diversified and optimal. If everyone is expected to hold the most diversified portfolio, everyone must hold the same portfolio with same composition. Because every security is owned by someone, the sum of all investors’ portfolios must equal the portfolio of all risky securities available in the market. As such, the investment in each security is proportional to its market capitalization, which is the total market value of its outstanding shares. The **market portfolio** consists of all risky investments that are trading in the market and is held in proportion to their market value. The market portfolio is value-weighted, and consists of **only systematic risk**.

In reality, we use a **market proxy** – a portfolio whose return should track the underlying, unobservable market portfolio. Most common proxy portfolios are:
- Market indexes, like the Dow Jones Industrial Average, the S&P 500
- Index funds
- Exchange Traded Funds (ETF)

## Measuring Systematic Risk
To determine how much of a stock’s return variability is due to systematic risk, we can measure the average change in its return for each 1% change in the return of a portfolio that fluctuates solely due to systematic risk (the market portfolio). **Any risk that is correlated with the market portfolio must be systematic risk.**

### Beta
Beta ($\beta$) is the is the expected percentage change in the return of a security for a 1% change in the market’s return:
$$
\beta_{i}= \frac{Cov(R_{i}, R_{M})}{Var(R_{M})}
$$
where $R_{i}$ is security $i$'s return and $R_{m}$ is market return.
- Note that market (well-diversified) portfolio has a beta of 1.

Cases:
- $\beta=1$ the asset has same systematic risk as the overall market
- $\beta<1$ the asset has less systematic risk than the overall market 
- $\beta>1$ the asset has more systematic risk than the overall market 
- $\beta=0$ the asset has no systematic risk

Estimating $\beta$ in practice:
- Use linear regression to estimate the relation between a stock’s returns and the market’s return. 
- Typically, these data sources estimate correlations and volatilities from two to five years of weekly or monthly returns and use the S&P 500 as the market portfolio.
- The best-fitting line represents the historical relation between the stock and the market.
- Slope of this line is our estimate of its beta.
- Returns of the market portfolio is the single explanatory factor for returns of the stock.

![[Estimating Systematic Risk-20250517165402920.png]]


![[Estimating Systematic Risk-20250517165416212.png|596]]


## Example

![[Estimating Systematic Risk-20250517170028964.png]]

1. Total risk is measured by standard deviation – Starbucks is higher.
2. Systematic risk is measured by beta – Target is higher.
3. Risk premium is directly related to systematic risk (beta) – Target is higher.