---
title: Changing Growth Rates
tags:
  - fina2203
date: 2025-05-17
aliases:
  - changing growth rates
---
Dividends tend to grow at different rates depending on where the company is in its life cycle, economy, availability of positive NPV projects, cash flow uncertainty, etc. Thus, it may be more realistic to use a differential (rather than zero or constant) dividend growth approach. 

To do this, we estimate dividends as closely as possible in the foreseeable future, and assume constant growth rate thereafter:
$$
P_{0} = \underbrace{ \frac{D_{1}}{1+r_{E}} + \frac{D_{2}}{(1+r_E)^{2}}+\dots+\frac{D_{N}}{1+(r_{E})^{N}} }_{ \text{Precise valuation for short-term dividends} } + \underbrace{ \frac{D_{N}(1+g)}{r_{E}-g} \frac{1}{(1+r_{E})^{N}} }_{ \text{Growing perpetuity} }
$$

So, we use a two-step in computing the stock price of non-constant growth rates

![[Changing Growth Rates-20250517112852136.png]]

1. Compute terminal value by applying the constant growth model to calculate the future share price of the stock once the expected growth rate stabilizes:
$$
P_{N} = \frac{Div_{N+1}}{r_{E}-g}
$$
2. Add the other non–constant dividends:
$$
\begin{align}
P_{0} & =\frac{Div_{1}}{1+r_{E}}+\frac{Div_{2}}{(1+r_{E})^{2}}+ \dots+ \frac{Div_{N}}{(1+r_{E})^{N}} + \frac{1}{(1+r_{E})^{N}} P_{N} \\[2ex]
     & = \frac{Div_{1}}{1+r_{E}}+\frac{Div_{2}}{(1+r_{E})^{2}}+ \dots+ \frac{Div_{N}}{(1+r_{E})^{N}} + \frac{1}{(1+r_{E})^{N}} \left(\frac{Div_{N+1}}{r_{E}-g}\right) \\[2ex]
\end{align}
$$

## Example
Small Fry, Inc., has just invented a potato chip that looks and tastes like a french fry. Given the phenomenal market response to this product, Small Fry is reinvesting all of its earnings to expand its operations. Earnings were **$2 per share** this past year and are expected to grow at a rate of **20% per year until the end of year 4**. At that point, other companies are likely to bring out competing products. Analysts project that at the end of year 4, Small Fry will cut its investment and begin paying 60% of its earnings as dividends. Its growth will also slow to a **long-run rate of 4%**. If Small Fry’s equity cost of capital is 8%, what is the value of a share today?

First, we use the projected earnings growth rate and payout rate to forecast its future earnings and dividends for year 1-4. Then, we find the constant growth dividends for year 5 and later:

![[Changing Growth Rates-20250517112144484.png]]

We can find dividends after year 4 with
$$
D_{5}=D_{4}(1+4\%) = 2.59
$$
Now, we can use the terminal value of the stock at year 4 using constant growth dividends starting from year 5:

![[Changing Growth Rates-20250517112352300.png|561]]

$$
P_{4} = \frac{Div_{5}}{r_{E}-g}=\frac{2.49(1+0.04)}{0.08-0.04}=64.74
$$

Then, we can compute the PV of other dividends and $P_{4}$:
$$
P_{0}=\frac{Div_{1}}{1+r_{E}}+\frac{Div_{2}}{(1+r_{E})^{2}}+\frac{Div_{3}}{(1+r_{E})^{3}}+\frac{Div_{4}}{(1+r_{E})^{4}}+\frac{P_{4}}{(1+r_{E})^{4}}=49.42
$$