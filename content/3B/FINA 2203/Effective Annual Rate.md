---
title: Effective Annual Rate
tags:
  - fina2203
date: 2025-03-02
aliases:
  - effective annual rate
  - EAR
---
EAR is the actual rate paid (or received) after accounting for compounding that occurs during a year. EAR gives the amount of **compound** interest earned in one year.

EAR and APR are only different if interest is compounded non-annually.

Suppose:
- Bank 1 offers 3% per quarter:
$$
EAR_{1}=(1+0.03)^{4}-1=12.55\%
$$
- Bank 2 offers 1% per month:
$$
EAR_{2}=(1+0.01)^{12}-1=12.68 \%
$$
EAR increases with frequency of compounding. 

Where the interest rate per compounding period is:
$$
i_{m}=\frac{\text{APR}}{m}
$$

Given [[Annual Percentage Rate|APR]]:
$$
\text{EAR}=\left[ 1+ \frac{\text{APR}}{m} \right]^{m}-1
$$
where APR is the quoted rate and $m$ is the number of compounding per year.

Period interest rate from EAR:
$$
i_{m}=(1+\text{EAR})^{1/m}-1
$$
where $m$ is the number of compounding periods.

Equivalent $n$-period discount rate:
$$
(1+r)^{n}-1
$$