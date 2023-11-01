---
title: Negative log-likelihood
tags:
  - ml
date: 2023-10-29
aliases:
  - log loss
  - cross-entropy
  - cross entropy
---
For simplicity, we assume or transform the labels so that $y \in \{ 0, 1 \}$.

We would like to pick the parameters of our classifier to maximize the probability assigned to the correct $y$ values, as specified in the training set.

We can express this using class-wise if statements. Letting guess $g^{(i)} = \sigma(\theta^{T}x^{(i)} + \theta_{0})$, the probability is:
$$
\prod_{i=1}^{n}\begin{cases}
g^{(i)} & \text{if } y^{(i)} = 1 \\
1-g^{(i)} & \text{if }y^{(i)} = 0 \\
\end{cases}
$$
Recall that $g^{(i)}$ gives the probability that we think $y^{(i)}$ should be positive. So, if $y^{(i)} = 1$, we're happy with $g^{(i)}$ but if $y^{(i)}=0$, we want the complement of the probability instead.

>[!info]- Intuition
>To make this clear, let's consider an example where $g^{(i)} = 0.7$, indicating a prediction of $y^{(i)} = 1$ using a threshold of 0.5. 
>- Let's say the correct label is $y^{(i)} = 1$. Then the result would just be $0.7$.
>- Let's say the correct label is $y^{(i)}= 0$. Then the result would be $0.3$. 
>
>This makes sense if we think about the case where $g^{(i)} = 0.3$, indicating a prediction of $y^{(i)}=0$. In this case, we would have flipped results from above. Thus, we are outputting probabilities correctly by intuition. 

The product operator is used because the probability of a series of independent events can be found by multiplying them together. In this case, this would be the probability that our classifier is correct for each sample in the dataset.

The expression can be rewritten as:
$$
\prod_{i=1}^{n}g^{(i)^{y^{(i)}}}(1-g^{(i)})^{1-y^{(i)}}
$$
Here, since $y^{(i)}$ is either 0 or 1, either the first or second term is nullified its exponent. We're basically replacing the if statement with multiplication.

We take logs to simplify the function. This is also based on the fact that $\log(x)$ is monotonic on $x$, such that finding the maximum $\theta, \theta_{0}$ that maximize the log expression will also have result in the maximum of the original expression.
$$
\sum_{i=1}^{n}(y^{i}\log g^{(i)} + (1-y^{(i)})\log(1-g^{(i)}))
$$
We can turn the maximization problem into a minimization problem by taking the negative of the above expression, and write it in terms of minimizing a loss:
$$
\sum_{i=1}^{n}L_{\text{NLL}} (g^{(i)}, y^{(i)})
$$
where $L_{\text{nll}}$ is the negative log-likelihood loss function:
$$
L_{\text{NLL}}(\text{guess, actual}) = - (\text{actual} \cdot \log(\text{guess})+ (1-\text{actual})\cdot \log(1-\text{guess}))
$$
This is also referred to as log loss or cross-entropy.