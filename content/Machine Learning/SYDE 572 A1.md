---
title: SYDE 572 A1
tags:
  - ml
date: 2024-01-25
aliases:
---
## Assignment 1

### Question 3
>[!question] 3-1
>Prove expectation is linear: $E(aX + bY) = aE(X)+bE(Y)$.

Start with the definition of expected value. For a discrete random variable:
$$
E(Z) = \sum_{z}z \cdot P(Z=z)
$$
where $z$ runs over all possible values of $Z$, and $P(Z=z)$ is the probability that $Z$ takes on the value $z$. Using this definition, we have:
$$
E(aX+bY) = \sum_{x,y} (ax+by) \cdot  P(X=x, Y=Y)
$$
Distributing the sum over the addition inside the parentheses:
$$
E(aX+bY) = \sum_{x,y} ax \cdot P(X=x, Y=y) + \sum_{x,y} by \cdot P(X=x, Y=y)
$$
Factor out $a$ and $b$:
$$
E(aX+bY) = a \sum_{x}x \sum_{y} \; P(X=x, Y=y) + b \sum_{y}y \sum_{x} \; P(X=x, Y=y)
$$
The inner sums $\sum_{y} \; P(X=x, Y=y)$ and $\sum_{x} \; P(X=x, Y=y)$ are just the marginal probabilities $P(X=x)$ and $P(Y=y)$ respectively, so we can re-write the above us:
$$
\begin{align}
E(aX + bY)  & = a\sum_{x}P(X=x) +  b \sum_{y} P(Y=y) \\[2ex]
	 & = \boxed{aE(X) + bE(Y)}
\end{align}
$$
>[!question] 3-2
>Prove variance is: $\sigma_{x}^{2} = E(X^{2})-E(X)^{2}$.

Variance is defined as:
$$
\begin{align}
\sigma_{x}^{2}  & = E[(X-\mu_{x})^{2}] \\
	 & = E[X^{2}-2\mu_{x}X + \mu_{x}^{2}]
\end{align}
$$
Note that the mean, $\mu_{x}$, is a constant equal to the expected value $E(X)$. Thus, we can separate the above:
$$
\sigma_{x}^{2} = E[X^{2}]-2\mu_{x}E[X] + E[\mu_{x}^{2}]
$$
The expectation of a constant is just the constant itself, so $E[\mu_{x}^{2}] =\mu_{x}^{2}$.
$$
\begin{align}
\sigma_{x}^{2}  & = E[X^{2}]-2\mu_{x}^{2} + \mu_{x}^{2} \\
	 & =E[X^{2}]-\mu_{x}^{2}
\end{align}
$$
Once again, $\mu_{x} = E(X)$, so:
$$
\begin{align}
\sigma_{x}^{2}  & =E[X^{2}]-\mu_{x}^{2} \\
	 & = \boxed{E[X^{2}]-(E[X])^{2}}
\end{align}
$$

>[!question] 3-3
>Derive the mean and variance of $aX+b$.

Mean:
$$
\begin{align}
E(aX+b)  & = aE(x)+b \\
	 & =\boxed{a\mu_{x} + b}
\end{align}
$$
Variance:
$$
\begin{align}
Var(aX+b) & =E[(aX+b -E(aX+b))^{2}] \\
	 & =E[(aX+b-(a\mu_{x}+b))^{2}] \\
	 & =E[(aX - a\mu_{x})^{2}] \\
	 & =E[a^{2}(X-\mu_{x})^{2}  \\
	 & =a^{2}[E(X-\mu_{x})^{2}]
\end{align}
$$
$E(X-\mu_{x})^{2}$ is just the variance of $X$, $\sigma^{2}_{x}$. Therefore:
$$
Var(aX+b) = \boxed{a^{2}\sigma_{x}^{2}
}
$$

>[!question] 3-4
>Show $A$ is symmetric, where $A=V\Lambda V^{-1}$, such that $V^{-1}=V^{T}$.

Given:
$$
\begin{align}
A & =V \Lambda V^{-1} \\
V^{-1} & =V^{T}
\end{align}
$$
To show that $A$ is symmetric, we need to show that $A=A^{T}$. Based on the above, we have:
$$
A^{T}= (V \Lambda V^{-1})^{T}
$$
The transpose of a product of matrices is the product of their transposes in reverse order:
$$
\begin{align}
A^{T} & =(V^{-1})^{T} \Lambda^{T}V^{T} \\
	 & = (V^{T})^{T} \Lambda^{T}V^{T}
\end{align}
$$
Since $\Lambda$ is a diagonal matrix, so $\Lambda^{T}=\Lambda$. Also, the transpose of the transpose of a matrix is the matrix itself, so $(V^{T})^{T}=V$. So the above the expression simplifies to:
$$
A^{T} = V \Lambda V^{T}
$$
This is the same as $A = V\Lambda V^{-1}$, since $V^{-1} = V^{T}$. Thus:
$$
A = A^{T}
$$
proving that $A$ is symmetric.