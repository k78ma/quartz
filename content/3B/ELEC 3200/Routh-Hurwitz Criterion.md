---
title: Routh-Hurwitz Criterion
tags:
  - elec3200
date: 2025-04-06
aliases:
  - Routh Criterion
---
The Routh criterion allows us to determine the stability of a polynomial without computing the roots.
## Routh Table Construction
- The first two rows come directly from the coefficients of $a(s)$
- Each of the other rows is computed from its two preceding rows as
$$
r_{ij}=-\frac{1}{r_{(i-1)0}}\det \begin{bmatrix}
r_{(i-2)0}  & r_{(i-2)(j+1)} \\
r_{(i-1)0} & r_{(i-1)(j+1)}
\end{bmatrix}
$$
- Whenever $r_{(i-1)(j+1)}$ is missing, let $r_{(i-1)(j+1)}=0$, then $r_{ij}=r_{(i-2)(j+1)}$.

![[Routh-Hurwitz Criterion-20250406184554681.png|503]]


## Pole Locations from Routh Table
- Total number of poles = Degree of characteristic polynomial
- RHP poles: Number of sign changes in first column
- $j\omega$-axis poles: All-zero rows
- LHP poles: Total poles - RHP poles - $j\omega$-axis poles

## Examples

### Example 1

![[Routh-Hurwitz Criterion-20250406185006888.png|589]]

![[Routh-Hurwitz Criterion-20250406184956241.png|586]]


### Example 2

![[Routh-Hurwitz Criterion-20250406185045177.png|567]]

### Example 3

![[Routh-Hurwitz Criterion-20250406185103610.png|565]]

### Example 4

![[Routh-Hurwitz Criterion-20250406185131832.png|567]]

### Example 5

![[Routh-Hurwitz Criterion-20250406185149397.png|574]]

