---
title: Bayes' Theorem
tags:
  - stats
date: 2024-03-22
aliases:
  - Bayes' rule
---
Bayes' Theorem $P(A|B)=$==$\frac{P(B|A)\cdot P(A)}{P(B)}$==
<!--SR:!fsrs,2027-01-25T00:05:46.789Z,142,142.16696858,2.95933514,2,5,0,0,2026-09-05T00:05:46.789Z-->
## Definition
Bayes' Theorem states:
$$
p(Y|X) = \frac{p(X|Y)\;p(Y)}{p(X)}
$$
## Derivation
The [[Sum and Product Rules of Probability|product rule]] tells us:
$$
p(X,Y)=p(Y|X) \;p(X)
$$
The symmetry property tells us:
$$
\begin{align}
p(X,Y)  & = p(Y,X) \\
	 & = p(X|Y) \; p(Y)
\end{align}
$$
Thus, we have:
$$
\begin{align}
p(Y|X) \;p(X)  & = p(X|Y) \; p(Y) \\[2ex]
p(Y|X)	 & = \frac{p(X|Y) \; p(Y)}{p(X)}
\end{align}
$$
## Notes
Bayes' theorem relates the conditional distribution $p(Y|X)$ to the reversed conditional distribution $p(X|Y)$.

Using the [[Sum and Product Rules of Probability|sum rule]], the denominator in Bayes' theorem can be expressed by the quantities appearing in the numerator:
$$
p(X)=\sum_{Y}p(X|Y) \; p(Y)
$$
Thus, we can view the denominator as being a normalization constant, ensuring that the sum over the conditional probability distribution $p(Y|X)$ on the left hand side of Bayes' theorem over all $Y$ values equals $1$.