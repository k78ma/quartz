---
title: Hinge Loss
tags:
  - ml
date: 2023-11-01
aliases:
---
Hinge loss is defined as:
$$
L_{h}(y(\theta \cdot x)) = \mathrm{max}\{ 0, 1-y(\theta \cdot x) \}
$$
where $y$ is the label of a data point $x$ and $\theta \cdot x$ is the raw prediction made by classifier $\theta$. 

It is also written as:
$$
L(y) = \mathrm{max}(0, 1-t\cdot y)
$$
where $t$ is the ground truth and $y$ is the prediction given by the model.



![[Hinge loss.png|424]]

Intuition:
- If $y(\theta \cdot x)$ is large and positive, the prediction is very confident and correct ($y$ and $\theta\cdot x$ have the same sign). This means that $1-y(\theta \cdot x)$ will be negative; since the maximum of hinge loss is zero, the loss for this sample will be $0$.
- If $y(\theta \cdot x)$ is positive but less than one, it means that the prediction is correct but the confidence is not high. This is penalized linearly; smaller values of $y(\theta\cdot x)$ get penalized more by $1-y(\theta\cdot x)$.
- If $y(\theta\cdot x)$ is zero or negative, it means that the prediction is incorrect (or exactly on the decision boundary). The model is penalized linearly the more it is on the wrong side. 

As such, hinge loss is essentially trying to ensure that the sign of the prediction is right (correct classification) and maximize confidence about possible predictions. Hinge loss is commonly used for [[Support Vector Machine]] training.