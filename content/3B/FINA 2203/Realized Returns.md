---
title: Realized Returns
tags:
  - fina2203
date: 2025-05-17
aliases:
  - realized returns
---
Example: Stock price and dividend data of Microsoft stock

![[Realized Returns-20250517132325753.png]]

> [!question]
> 1. *Suppose you purchased MSFT on Nov 1, 2004 and sold it immediately on Nov 15 after receiving the divided. What was your realized return?*

**Realized return** (non-annual holding period) is the total return that actually occurs over a particular time period (no interim cash flows):
$$
R_{t+1}=\frac{Div_{t+1} + P_{t+1} - P_{t}}{P_{t}} = \frac{3.08+27.39-28.08}{28.08} = 0.0851 = 8.51\%
$$
Dividend yield is given as
$$
\text{Dividend yield} = \frac{3.08}{28.08} = 10.97\%
$$
Capital gain yield is given as
$$
\text{Capital gain yield} = \frac{-0.69}{28.08} -2.46 \%
$$

> [!question]
> 2. *Suppose you purchased Microsoft stock (MSFT) on Nov 1, 2004 and held it for one year, selling on Oct 31, 2005. What was your annual realized return?*

- If you hold the stock beyond the date of the first dividend, then to compute your return, you must specify how you invest any dividends you receive in the interim.
    - Let's assume all dividends are immediately reinvested and used to purchase additional shares of the same stock or security.

If a stock pays dividends at the end of each quarter, with realized returns $R_{1},\dots R_{4}$ each quarter, then its annualized return, $R_{\text{annual}}$ is computed as the compounded period returns:
$$
1+R_{\text{annual}}=(1+R_{1})(1+R_{2})(1+R_{3})(1+R_{4})
$$
In the case of MSFT:

![[Realized Returns-20250517133141337.png]]

$$
\begin{align}
1+R_{\text{annual}} & =(1.0851)(0.9496)(0.9861)(1.0675)(0.9475) = 1.0275 \\
R_{\text{annual}} & = 2.75\%
\end{align}
$$

Notes:
- Selling price is lower than purchase price, but the return is positive because of dividends. Total return is 2.75% over the year.
- MSFT stock price fluctuated up and down over the year. Returns are risky. Realized return is not possible to be predicted. 
- However, from the observed realized returns over many years, we can graph the distribution of actual returns and calculate a historical average return which can be used as an “expected” return.

