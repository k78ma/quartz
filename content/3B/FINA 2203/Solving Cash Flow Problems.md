---
title: Solving Cash Flow Problems
tags:
  - fina2203
date: 2025-03-01
aliases:
  - solving cash flow problems
---
How do we calculate for variables present value or future value?
## Solving for Cash Flow
Let's consider an example where we know the present value of an investment, but do not know the cash flows. 

The best example if a loan – you know how much you want to borrow (present value) and you know the interest rate, but you do not know how much you need to repay each year. Suppose you are opening a business that requires an initial investment of $100,000. Your bank manager has agreed to lend you this money. The terms of the loan state that you will make equal annual payments for the next 10 years and will pay an interest rate of 8% with the first payment due one year from today. What is your annual payment?

Bank's perspective:

![[Solving Cash Flow Problems.png|564]]

In general, when solving for a loan payment, think of the amount borrowed (the loan principal) as the present value of the payments. If the payments of loan are an annuity, we can solve for the payment of the loan by inverting the annuity formula. Writing the equation for the payments for a loan with principal $P$, requiring $N$ periodic payments of $C$ and interest rate $r$, we have
$$
C=\frac{P}{\frac{1}{r}\left( 1-\frac{1}{(1+r)^{N}} \right)}
$$
### Example
Suppose you have graduated from college and decide to be prudent and starting saving for a down payment on a house. You would like to have $60,000 saved in 10 years. If you can earn 7% per year on your savings, how much do you need to save each year to meet your goal?

![[Solving Cash Flow Problems-1.png|494]]

That is, you plan to save some amount $C$ per year, and then withdraw $60,000 from the bank in 10 years. Therefore, we need to find the annuity payment that has a future value of $60,000 in 10 years. Then we have:
$$
60,000 = FV(\text{annuity})=C\times \frac{1}{0.07}(1.07^{10}-1)=C\times 13.816
$$
Therefore, $C=60 000 / 13.186 = 4343$. 

## Rate of Return
$$
PV=\frac{C}{r}-\left( \frac{C}{r} \right)\left( \frac{1}{(1+r)^{N}} \right)
$$
Trial and error:
- Choose an interest rate and compute the PV of the cash flows based on this rate
- Compare the computed PV with the actual cash flow amount 
- If the computed PV > CF amount, then the interest rate is too low
- If the computed PV < CF amount, then the interest rate is too high
- Adjust the rate and repeat the process until the computed PV and the CF amount are equal

## Number of Periods
$$
N= \frac{\ln(FV\cdot r+C)-\ln(PV\cdot r+C)}{\ln(1+r)}
$$
