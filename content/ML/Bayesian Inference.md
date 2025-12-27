---
title: Bayesian Inference
tags:
  - dl
date: 2025-12-26
aliases: bayesian inference
---
The [[Maximum Likelihood Criterion|maximum likelihood criterion]] approach to learning is generally overconfident; it selects the most likely parameters during training and uses these to make predictions. However, many parameter values may be broadly compatible with the data and only slightly less likely. The Bayesian approach treats the parameters as unknown variables and computes a distribution $Pr(\phi \, | \, \{ \mathbf{x}_{i}, \mathbf{y}_{i} \})$ over the parameters $\phi$, conditioned on the training data $\{ \mathbf{x}_{i}, \mathbf{y}_{i} \}$, using [[Bayes' Rule]]:
$$
Pr(\phi \, | \,\{ \mathbf{x}_{i}, \mathbf{y}_{i} \}) = \frac{\prod_{i=1}^{I} Pr(\mathbf{y_{i}}\, | \,\mathbf{x_{i}}, \phi)Pr(\phi)}{\int \prod_{i=1}^{I} Pr(\mathbf{y_{i}}\, | \,\mathbf{x_{i}}, \phi) Pr(\phi) \, d\phi }
$$
where $Pr(\phi)$ is the prior probability of the parameters, and the denominator is a normalizing term. Hence, very parameter choice is assigned a probability.

![[Bayesian Inference-1766816319335.webp]]

The prediction $\mathbf{y}$ for new input $\mathbf{x}$ is an infinite weighted sum (an integral) of the predictions for each parameter set, where the weights are the associated probabilities:
$$
Pr(\mathbf{y}\, | \, \mathbf{x}, \{ \mathbf{x}_{i}, \mathbf{y}_{i} \}) = \int Pr(\mathbf{y}\, | \,\mathbf{x}, \phi)Pr(\phi \, | \, \{ \mathbf{x}_{i}, \mathbf{y}_{i} \}) \, d\phi 
$$
This is effectively an infinite weighted ensemble, where the weight depends on (i) the prior probability of the parameters and (ii) their agreement with the data.

The Bayesian approach is elegant and can provide more robust predictions than those that derive from maximum likelihood. Unfortunately, for complex models like neural networks, there is no way to represent the full probability distribution over the parameters or integrate over it during inference. Thus, all current methods of this type must make an approximation of some kind, addying considerably complexity to learning and inference.