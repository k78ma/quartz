---
title: Zero Coupon Bonds
tags:
  - fina2203
date: 2025-04-29
aliases:
  - zero coupon bonds
---
A zero-coupon bond makes no coupon payments, only making a single cash flow at the end. It always sells at a discount (price lower than face value), so they are called pure discount bonds. 
- Treasury bills are U.S. government zero-coupon bonds with a maturity of up to one year. 

Suppose that a one-year, risk-free, zero-coupon bond with a $100,000 face value has an initial price of $96,618.36. The cash flows would be:

![[Financial Bonds-20250428121903885.png|310]]

The rate of return on the bond would be:
$$
96,618.36=\frac{100,000}{(1+r_{1})}\quad \longrightarrow \quad r_{1}=3.5\%
$$
The **Yield to Maturity (YTM)** on the bond is the discount rate that sets the present value of the promised payment from the bond equal to the current market price of the bond. 
- Intuitively, the yield to maturity for a zero-coupon bond is the return you will earn as  an investor by buying the bond at its current market price, holding the bond to maturity,  and receiving the promised face value payment. 
$$
\begin{align}
96,618.36 & =\frac{100,000}{(1+\text{YTM}_{1})}\\[2ex] 
1+\text{YTM}_{1} & =\frac{100,000}{96,618.36}=1.05 \quad \longrightarrow \quad \text{YTM}_{1}=3.5\%
\end{align}
$$
In general, the yield to maturity of an $n$-year zero-coupon bond can be found by:
$$
1+\text{YTM}_{n}=\left( \frac{\text{Face Value}}{\text{Price}} \right)^{1 / n}
$$
- The per-period rate of return for holding the bond from today till maturity on date $n$
- Solving for the YTM of a zero-coupon bond is the same process we used to solve for the [[Internal Rate of Return|internal rate of return]] – YTM is the IRR of buying the bond.

The price of a zero-coupon bond:
$$
P=\frac{\text{FV}}{(1+\text{YTM}_{n})^{n}}
$$

## Risk-Free Interest Rates
In a competitive market, all risk-free investments must earn the same rate of return over the same period. A default-free (risk free) zero-coupon that matures on date $n$ provides a risk-free return over this period.

Thus, the [[Law of One Price]] guarantees that the risk-free interest rate equals the yield to maturity on such a bond. That is, the YTM of a risk free bond is a proxy for risk free rate.

"Spot interest rate" is another term for a default-free, zero-coupon yield "on the spot".


## Yield Curve
The yield curve is a plot of the yield of risk-free zero-coupon bonds as a function of the bond's maturity date.

![[Zero Coupon Bonds-20250504230655352.png|516]]

![[Zero Coupon Bonds-20250504230707394.png|509]]


If the yield curve is downward sloping, longer maturity bonds generally have lower yields than shorter maturity bonds.

