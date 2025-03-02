---
title: Amortizing Loans
tags:
  - fina2203
date: 2025-03-02
aliases:
  - amortizing loans
---
In an amortizing loan:
- All payments are equal
- The loan is fully repaid with the final payment. 

For example, a $30,000 loan paid over 60 months:

![[Amortizing Loans-4.png|608]]

- Regular fixed amount of payments cover both repayment of principal and interest on remaining loan amount
- Portion of principal repayment and interest from each payment is different throughout the term
    1. Portion of interest in the repayment is decreasing
    2. Portion of principal in the repayment is increasing
    3. Principal outstanding (balance) is declining

![[Amortizing Loans.png|596]]

![[Amortizing Loans-2.png|597]]

![[Amortizing Loans-3.png|597]]

## Payment Amount
We can find the payment amount by considering it as an [[Annuity|annuity]]:
$$
\begin{align}
PV=C\times \frac{1}{r}\left( 1-\frac{1}{(1+r)^{N}} \right)
\end{align}
$$

## Outstanding Loan Balance
The outstanding balance on an amortizing loan is different each month. The amount owed can be calculated as the present of future obligations ont he loan. So the outstanding balance (aka outstanding principal) is equal to the present value of the remaining future loan payments.