---
title: Overparameterization
tags:
  - dl
date: 2026-09-03
aliases: overparameterization
---
We've seen that generalization performance tends to improve with the degree of overparameterization. When combined with the [[Reducing Model Error|bias-variance tradeoff]] curve, this results in [[Double Descent|double descent]]. The putative explanation for this improvement is that the network has more latitude to become smoother *between* the training data points when the model is overparameterized.

It follows that the norm of the weights can also be used to explain double descent.
- The norm of the weights increases when the number of parameters is similar to the number of data points, as the model contorts itself to these points exactly, causing generalization to reduce. 
- As the model becomes wider and the number of weights increases, the overall norm of the weights decreases; the weights are initialized with a variance inversely proportional to the width (i.e. [[Parameter Initialization|He initialization]] or Glorot initialization), and the weights need not change as drastically to fit the data well.

It's not clear if there is some fundamental properties of smaller models preventing them from performing as well or whether the training algorithms can't find good solutions for small models. [[Pruning]] and [[Knowledge Distillation]] are two methods for reducing the size of trained models while maintaining performance.

Despite pruning and knowledge distillation, current evidence still suggests that overparameterization is needed for generalization, at least for the size and complexity of datasets that are currently used. There are no demonstrations of state-of-the-art performance on complex datasets where there are significantly fewer parameters than training examples. Attempts to reduce model size by pruning or distilling trained networks have not changed this picture.

Moreover, recent theory shows that there is a trade-off between the model's [[Lipschitz constant]] and overparameterization. It has been proven that in $D$ dimensions, *smooth* interpolation requires $D$ times more parameters than mere interpolation. In fact, this leads to the argument that current models for large datasets (e.g., ImageNet) aren't overparameterized *enough*; increasing model capacity further may be key to improving performance.