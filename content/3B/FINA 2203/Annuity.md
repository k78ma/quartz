---
title: Annuity
tags:
  - fina2203
date: 2025-02-28
aliases:
  - annuity
---
An annuity is a stream consisting of a fixed number of equal cash flows paid at regular intervals, instead of continuing forever like a [[Perpetuity|perpetuity]].
- **Ordinary Annuity:** Annuity in which cash flows start at the end of each time period.
- **Annuity due:** An annuity which cash flows start at the beginning of each time period.

![[Annuity.png|551]]

The convention is to use ordinary annuities, where the first payment takes place at date 1, one period from today.

## Present Value of an Annuity
Let's suppose that we invested $100 in a bank account paying 5% interest. With the initial $100 investment, we have created a 20-year annuity of $5 a year, plus we will receive $100 at the end of 20 years. Thus, the present value of an annuity is the initial investment in the bank account, minus the present value of the principal that will be left in the account at the end.

![[Annuity-1.png|587]]

We can re-arrange the equation above by considering that we can write our initial investment of $100 as $5/.05. 

![[Annuity-2.png|577]]

Resulting in the equation:
$$
\begin{align}
PV & (\text{Annuity of C for N periods with interest rate }r) \\[2ex]
 & =C\times \frac{1}{r}\left( 1-\frac{1}{(1+r)^{N}} \right)
\end{align}
$$
### Annuity Due

![[Annuity-3.png|440]]

## Future Value of an Annuity
The future value of an annuity can be found by moving the present value $N$ periods forward.

![[Annuity-4.png|619]]

$$
\begin{align}
FV(\text{Annuity}) & =PV\times(1+r)^{N} \\
     & = \dots \\
     & = C\times \frac{1}{r}((1+r)^{N}-1)
\end{align}
$$
This applies to both ordinary annuity and annuity due.