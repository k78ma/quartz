---
title: Stock Prices and Returns
tags:
  - fina2203
date: 2025-05-16
aliases:
  - stock prices and returns
  - stock valuation
---
## One-Year Investor
When an investor buys a stock, they pay the current market price for a share, $P_{0}$. When they hold the stock, they will be entitled to any dividends the stock pays; let $Div_{1}$ be the total dividends the investor expects to be paid per share during the year. At the end of the year, if we sell the share for market price, we can expect $P_{1}$ at the end of the year.

![[Stock Prices and Returns-20250516225734729.png]]


To find $P_{0}$ we need to discount the future cash flows. Since the cash flows are risky (vary based on company's performance and market conditions), we discount them at the equity cost of capital; this is the expected rate of return that investors require for investing in the stock, given the risk involved.


> [!question] Example Problem
> Suppose you expect Longs Drug Stores to pay an annual dividend of $0.56 per share in the coming year  and to trade for $45.50 per share at the end of the year. If investments with equivalent risk to Longs’ stock  have an expected return of 6.80%, what is the most you would pay today for Longs’ stock? What dividend  yield and capital gain rate would you expect at this price? 

First, we can create a timeline with example cash flows from holding the stock:

![[Stock Prices and Returns-20250516225546105.png|519]]

Plan:
$$
\begin{align}
P_{0}  & = \frac{Div_{1}+P_{1}}{1+r_{E}} \\[2ex] 
     & = \frac{0.56+45.50}{1.0680} \\[2ex]
     & = 43.13
\end{align}
$$
At a price of $43.13, this transaction has zero NPV. This is the most we would be willing to pay for Long's stock; if we paid more, our expected return would be less than 6.8% and we would rather invest elsewhere.

We can also find:
$$
\text{Expected dividend yield}=\frac{0.56}{43.13}=1.3\%
$$
and
$$
\begin{align}
 & \text{Expected capital gain rate from holding the stock}\\[2ex] 
 & = \frac{45.5-43.13}{43.13}=5.5\%
\end{align}
$$
The total return for the one year holding period of the investor is
$$
\text{Total return}=1.3\%+5.5\%=6.8\%
$$
which is the firm's equity cost of capital.


## Multi-Year Investor
What's the price if we plan on holding the stock for two years? We would receive dividends in the both year 1 and year 2 before selling the stock

![[Stock Prices and Returns-20250516231400133.png|516]]

$$
P_{0}=\frac{Div_{1}}{1+r_{E}}+ \frac{Div_{2}+P_{2}}{(1+r_{E})^{2}}
$$
However, note that
$$
P_{1}= \frac{Div_{2}+P_{2}}{1+r_{E}}
$$
so we essentially have:
$$
\begin{align}
P_{0} & = \frac{Div_{1}}{1+r_{E}}+\frac{1}{1+r_{E}}(P_{1}) \\[2ex]
     & =\frac{Div_{1}+P_{1}}{1+r_{E}}
\end{align}
$$
which is the same equation as before! This means that the price remains the same; stock valuation does not depend on the investor's holding period.

We can extend this to $N$ years:
$$
P_{0}=\frac{Div_{1}}{1+r_{E}}+\dots+\frac{Div_{N}}{(1+r_{E})^{N}}+\frac{P_{N}}{(1+r_{E})^{N}}
$$
The equation above hold for any horizon $N$. The PV of the expected sale price of the stock approaches zero if it happens in the distant future, so the price of the stock is just the present value of all expected dividends it will pay:
$$
\sum_{n=1}^{\infty} \frac{Div_{n}}{(1+r_{E})^{n}}
$$
All investors (with the same expectations) will attach the same value to the stock, independent of their investment horizons. How long they intend to hold the stock and whether they collect their return in the form of dividends or capital gains is irrelevant. 