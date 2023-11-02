---
title: Support Vector Machine
tags:
  - ml
date: 2023-11-01
aliases:
  - SVM
  - svm
---
A supervised learning algorithm for [[Linear Classifier|linear classifiers]] that aim to find a hyperplane decision boundary that maximizes the [[Margin|margin]] to data.

Specifically, SVM aims to choose the hyperplane so that the distance from the hyperplane to the nearest data point on each side is maximized. These nearest points are called support vectors because they "support" the hyperplane.

![[Support Vector Machine.png|440]]

The distance between the two hyperplanes is $\frac{2}{\lvert \theta \rvert}$. So, to maximize the margin, $\lvert \theta \rvert$ needs to be minimized. This is why objective functions for SVMs typically include a $\lambda || \theta ||^{2}$ [[Regularization|regularizer]]. A typical training object would be:
$$
J(\theta) = \frac{1}{n}\sum_{i=1}^{n}L_{h}(y^{(i)}\theta\cdot x^{(i)}) + \frac{\lambda}{2}|| \theta ||^{2}
$$
where $L_{h}$ is [[Hinge Loss]]. Hinge loss is ideal for support vector machines because its definition includes maximizing the distance between $\theta \cdot x$ and the decision boundary, which is the same as the margin maximization objective here.

See also: [[Pegasos Algorithm]]