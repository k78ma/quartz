---
title: SYDE 572 SVM Grad
tags:
  - ml
date: 2024-03-17
aliases:
---
## Q2 

![[SYDE 572 SVM Grad.png]]

For the first term, $| w |$, provided that this is the L2 norm, we have:
$$
\nabla_{w}(| w |) = \frac{w}{| w |}
$$

For the second term (hinge loss), we need to partition the domain based on whether the term inside the $\max$ function is positive or not:
1. If $1-c_{i} \cdot h(x_{i} | w, w_{0}) \leq 0$, then the data point is correctly classified. The $\max$ function returns $0$, and the gradient is $0$.
2. If $1-c_{i} \cdot h(x_{i} | w, w_{0}) > 0$, then the hinge loss affects the gradient, returning $1-c_{i}\cdot h(x_{i}|w, w_{0})$. We need to calculate the gradient of this term.

The gradient of $1-c_{i}\cdot h(x_{i}|w, w_{0})$ with respect to $w / w_{0}$ is:
$$
\nabla_{w}(1-c_{i} \cdot h(x_{i}|w, w_{0})) = -c_{i} \cdot  \nabla_{w}(h(x_{i}|w, w_{0}))
$$
Assuming $h(x_{i}|w, w_{0})$ is a linear function, such as $h(x_{i}|w, w_{0}) = w^{T}\cdot x_{i} + w_{0}$, the gradient of $h(x_{i}|w, w_{0})$ with respect to $w_{0}$ is:
$$
\nabla(h(x_{i}|w, w_{0})) = x_{i}
$$
Combining the two steps above, the gradient of hinge loss for case 2 is just $-c_{i}\cdot x_{i}$.

Combining the two cases, we can write the gradient of the 2nd term as:
$$
\frac{\beta}{N}\cdot \sum (-c_{i}\cdot x_{i}) \cdot I(1-c_{i}\cdot h(x_{i}|w, w_{0}) > 0)
$$
where $I[\cdot]$ is an indicator function that returns $1$ if the condition inside the brackets is true, and returns $0$ otherwise.

Combining everything, we have:
$$
\nabla_{w}\left( L_{\text{soft margin}}\left( \left[ \frac{w}{w_{0}} \right] \right) \right) = \frac{w}{| w |} + \frac{\beta}{N}\cdot \sum (-c_{i}\cdot x_{i}) \cdot I(1-c_{i}\cdot h(x_{i}|w, w_{0}) > 0)
$$

## Q3

![[SYDE 572 SVM Grad-1.png]]

The given formula provides a numerical approximation of the partial derivative using the definition of partial derivative as the limit of the slope of the tangent line. It calculates the difference in the value of $L$ when $w'_{i}$ is slightly perturbed by $h$, divided by $h$.

To calculate this approximation for each dimension of the 1000-dimensional weight vector $w$, we need to:
1. Evaluate $L$ once with the original weight vector $(w'_{1}, w'_{2}, \dots, w'_{1000})$
2. For each dimension $i$ from $1$ to $1000$:
	1. Create a perturbed weight vector by adding $h$ to $w'_{i}$.
	2. Evaluate $L$ with this perturbed weight vector.

Therefore, we need:
- $1$ evaluation of $L$ with the original weight vector
- $1000$ evaluations of $L$ for each perturbed weight vector

So, we have a total of $1+1000=1001$ forward evaluations.