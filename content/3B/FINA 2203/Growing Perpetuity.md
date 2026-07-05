---
title: Growing Perpetuity
tags:
  - fina2203
date: 2025-03-01
aliases:
  - growing perpetuity
---
A growing perpetuity is a stream of cash flows that occur at regular intervals and grow at a constant rate forever.

![[Growing Perpetuity.png|606]]

We can find the present value by computing the amount you would need to deposit today to create the perpetuity yourself.

Suppose we want to create a perpetuity growing at 2%, so you invest $100 in a bank account that pays 5% interest.
- At the end of the year, you will have $105 in the bank – your original $100 plus $5 in interest.
- If you withdraw only $3, you will have $102 to reinvest – 2% more than the amount you had initially. This amount will then grow to $\$102 \times 1.05 = \$107.10$ in the following year, and you can withdraw $\$3 \times 1.02 = \$3.06$, which leaves us with $\$107.10-\$3.06=\$104.04$.
- Note that $\$102\times 1.02=\$104.04$; both the amount you withdraw and the principal you reinvest grow by 2% each year.

![[Growing Perpetuity-1.png|603]]

In general, if we want to increase the amount we withdraw form the bank each year by $g$, then the principal in the bank will have to grow by the same factor $g$. Instead of reinvesting $P$ in the second year, we should reinvest $P(1+g)$. In order to increase our principal by $gP$, we need to leave $gP$ of the interest in the account.

==The principal must grow at the same rate as the payments to sustain the perpetuity.==

![[Growing Perpetuity-2.png]]

The present value can then be found with:
$$
PV(\text{Growing Perpetuity})=\frac{C}{r-g}
$$
