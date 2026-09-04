---
title: Generalization Factors
tags:
  - dl
date: 2026-09-03
aliases: generalization factors
---
What determines how well a network generalizes?

## Training algorithms
Since deep networks are usually overparameterized, the details of the training process determine which of the degenerate family of minima the algorithm converges. Some of these details reliable improve generalization.

First, it has been shown that [[Stochastic Gradient Descent|SGD]] generalizes better than full-batch gradient descent. It has been argued that SGD generalizes better than [[Adaptive moment estimation|Adam]], but more recent studies suggest that there is little difference when the hyperparameter search is done carefully.

Furthermore, it has been shown that deep networks generalize better with smaller batch-size when no other form of regularization is used. It's also well known that larger learning rates tend to generalize better ([[Implicit Regularization|implicit regularization]]). It can also be argued that the batch size/learning rate ratio is important. It has been shown that there is significant correlation between this ratio and the degree of generalization, with even a proven generalization bound that has a positive correlation with this ratio.

![[Generalization Factors-1788488193082.webp]]

## Flatness of minimum
There has been speculation for a long time that flat minima in the loss function generalize better than sharp minima.
- Informally, if the minimum is flatter, then small errors in estimated parameters are less important.
- This can also be motivated from various theoretical viewpoints. For example, [[Minimum Description Length|minimum description length]] theory suggests models specified by fewer bits generalize better. For wide minima, the precision needed to store the weights is lower, so they should generalize better.

![[Generalization Factors-1788488237820.webp]]

Flatness can measured by:
- The size of the connected region around the minimum for which training loss is similar
- The second-order curvature around the minimum
- The maximum loss within a neighborhood of the minimum.

However, caution is required; estimated flatness can be affected by trivial reparameterizations of the network due to the non-negative homogeneity property of the ReLU function.

Studies have varied the batch size and learning rate and showed that flatness correlates with generalization. Also, averaging together weights from multiple points in a learning trajectory results in flatter test and training surfaces at the minimum and improves generalization. Other regularization techniques can also be viewed through this lens. For example, averaging model outputs ([[Model Ensembling|ensembling]]) may also make the test loss surface flatter. It has also been shown that large gradient variance during training helps avoid sharp regions, which may explain why reducing the batch size and adding noise helps generalization.

Sharpness alone is not a good criterion to predict generalization *between* datasets (instead of single model and training set). When the labels in the CIFAR dataset are randomized, making generalization impossible, there is no commensurate sharpening of the minimum.

## Architecture
The inductive bias of a network is determined by its architecture, and judicious choices of model can drastically improve generalization.
- [[Convolutional Neural Networks]] are designed to process data on regular grids; they implicitly assume that the input statistics are the same across the input, so they share parameters across position.
- [[Transformer]] is suited for modeling data that is invariant to permutations
- [[Graph Neural Networks]] are suited to data represented on irregular graphs.

Matching the architecture to the properties of the data improves generalization over generic, fully connected architectures.


## Norm of weights
We saw in [[Properties of Loss Functions#Curvature of loss surface]] that the curvature of the loss surface is unusually positive when the $\ell_{2}$ norm of the weights lies within a certain range. Similarly, there has been evidence that generalization is good when the $\ell_{2}$ weight norm falls within this Goldilocks zone.

![[Generalization Factors-1788489103364.webp]]

This is perhaps unsurprising. The norm of the weights is (indirectly) related to the Lipschitz constant of the model. If this norm is too small, then the model will not be able to change fast enough to capture the variation in the underlying function. If the norm is too large, then the model will be unnecessarily variable between training points and will not interpolate smoothly.

This could be used to explain [[Grokking]].

## Out-of-distribution data
Until this point, we've discussed generalization to new data that is drawn from the same distribution as the training data. This is a reasonable assumption for experimentation. However, real deployed systems may encounter unexpected data due to noise, changes in the data statistics over time, or deliberate attacks.

Deep learning models are susceptible to [[Adversarial Attacks|adversarial attacks]]. There are positions that are close to but not on the data manifold that are misclassified – adversarial examples. Their existence is surprising; how can such a small change to the network input make such a drastic change to the output? The best current explanation is that adversarial examples aren't due to a lack of robustness to data from outside the training data manifold. Instead, they are exploiting a source of information that is in the training distribution but which has a small norm and is imperceptible to humans.