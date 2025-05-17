---
title: Simple Growth Model
tags:
  - fina2203
date: 2025-05-17
aliases:
  - simple growth model
---
We saw that with the [[Constant Dividend Growth Model|constant dividend growth model]], a firm's share price increases with the current dividend level, $Div_{1}$, and the expected growth rate, $g$. To maximize its share price, a firm would like to increase both quantities. However, this presents a tradeoff: Increasing growth may require investment, and money spent on investment cannot be used to pay dividends.

What determines the rate of growth of a firm's dividends? It is determined by the firm's dividend payout rate and earnings per share:
$$
Div_{t}=\underbrace{ \frac{\text{Earnings}_{t}}{\text{Shares Outstanding}_{t}} }_{ EPS_{t} }\times \text{Dividend Payout Rate}_{t}
$$
where the dividend payout rate is the fraction of earnings the firm pays as dividends each year.

The firm can do 3 things to increase its dividend:
1. Increase its earnings (net income)
2. Increase its dividend payout ratio
3. Decrease its number of shares outstanding

If we keep the payout ratio and number of shares constant, then the growth has to come from earnings.

How does future earnings increase? It depends on the amount of new investment and the rate of return on the new investment. We have:
$$
\text{Change in Earnings}=\text{New Investment} \times \text{Return on New Investment}
$$
Assuming that new investment comes from internal funds only, then
$$
\text{New Investment}=\text{Earnings} \times \text{Retention Rate}
$$
This gives us earnings growth rate as:
$$
\begin{align}
\text{Earnings Growth Rate} & = \frac{\text{Change in Earnings}}{\text{Earnings}} \\[2ex] 
     g& = \text{Retention Rate} \times \text{Return on New Investment}
\end{align}
$$
## Example

![[Dividends vs. Growth-20250517105040832.png]]

First, we need to find the equity cost of capital $r_{E}$. If all earnings are paid out, we have a growth rate of $0$. With a dividend of $6 and a share price of $60, we have
$$
r_{E}=\frac{Div_{1}}{P_{0}}+g = \frac{6}{60}+0=10\%
$$
Under the new policy, its dividend from the coming year falls to
$$
Div_{1}= EPS_{1} \times 0.75= 6\cdot 0.75=4.5
$$
The growth rate will increase to
$$
\begin{align}
g & = \text{Retention rate} \times \text{Return on New Investment} \\
     & = 0.25 \times 0.12 \\
     & =3\%
\end{align}
$$
Then, the new price with a constant growth rate of 3% is
$$
P_{0}=\frac{Div_{1}}{r_{E}-g}=\frac{4.50}{0.10-0.03}=64.29
$$
Thus, Crane’s share price should rise from $60 to $64.29 now if the company announces to cut its future dividend to increase its investment, implying that Crane has created value for its shareholders. The project offers a rate of return (12%) which is greater than its equity cost of capital (10%). The investment has positive NPV. By using its earnings to invest in positive NPV projects, the growth is profitable.

## Dividends vs Investment and Growth
If a firm wants to increase its share price, should it cut its dividend and invest more, or should it cut investment and increase its dividend?
- Tradeoff between paying out earnings as dividends and reinvesting earnings to increase growth

The answer depends on the profitability of the firm's new investments:
- Cutting the firm’s dividend to increase investment will raise the stock price, iff the new investments have a positive NPV.
- If the company cuts its dividend to make new investments with a return lower than its equity cost of capital, it will reduce shareholder value.