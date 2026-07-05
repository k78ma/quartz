---
title: Hyperparameter Search
tags:
  - dl
date: 2025-09-10
aliases: hyperparameter search
---
For a deep network, the model capacity depends on the numbers of hidden layers and hidden units per layer as well as other aspects of architecture that we have yet to introduce. Furthermore, the choice of learning algorithm and any associated parameters (learning rate, etc.) also affects the test performance. These elements are collectively termed hyperparameters. The process of finding the best hyperparameters is termed hyperparameter search or (when focused on network structure) *neural architecture search*. 

Hyperparameters are typically chosen empirically; we train many models with different hyperparameters on the same training set, measure their performance, and retain the best model. However, we do not measure their performance on the test set; this would admit the possibility that these hyperparameters just happen to work well for the test set but don’t generalize to further data. Instead, we introduce a validation set. For every choice of hyperparameters, we train the associated model using the training set and evaluate performance on the validation set. Finally, we select the model that worked best on the validation set and measure its performance on the test set. In principle, this should give a reasonable estimate of the true performance.

The hyperparameter space is generally smaller than the parameter space but still too large to try every combination exhaustively. Unfortunately, many hyperparameters are discrete (e.g., the number of hidden layers), and others may be conditional on one another (e.g., we only need to specify the number of hidden units in the tenth hidden layer if there are ten or more layers). Hence, we cannot rely on gradient descent methods as we did for learning the model parameters. Hyperparameter optimization algorithms intelligently sample the space of hyperparameters, contingent on previous results. This procedure is computationally expensive since we must train an entire model and measure the validation performance for each combination of hyperparameters. 

Finding the best hyperparameters is a challenging optimization task:
- Testing a single configuration of hyperparameters is expensive; we must train an entire model and measure it's performance. 
- We have no easy way to access the derivatives (how performance changes when we make a small change to a hyperparameter).
- Many of the hyperparameters are discrete, so we cannot use gradient descent methods. 
- There are multiple local minima and no way to tell if we are close to the global minimum. 
- The noise level is high since each training/validation cycle uses a stochastic training algorithm; we expect different results if we train a model twice with the same hyperparameters.
- Some variables are conditional and only exist if others are set; for example, the number of hidden units in the 3rd hidden layer is only relevant if we have at least 3 hidden layers.

## Approaches
A simple approach is to sample the space randomly ([see here](https://dl.acm.org/doi/abs/10.5555/2188385.2188395)). However, for continuous variables, it's better to build a model of performance as a function of the hyperparameters and the uncertainty in this function. This can be exploited to test where the uncertainty is great (explore the space) or home in on regions where performance looks promising (exploiting previous knowledge).
- Bayesian optimization is a framework based on Gaussian processes that essentially does this, and its approach to hyperparameter search is described [here](https://proceedings.neurips.cc/paper/2012/file/05311655a15b75fab86956663e1819cd-Paper.pdf).
- The Beta-Bernoulli bandit is a roughly equivalent model for describing uncertainty in results due to discrete variables.

The sequential model-based configuration (SMAC) algorithm can cope with continuous, discrete, and conditional parameters. The basic approach is to use a random forest to model the objective function where the mean of the tree predictions is the best guess about the object function, and their variance represents the uncertainty. A completely approach that can also cope with combinations with continuous, discrete, and conditional parameters is Tree-Parzen Estimators. The previous methods modeled the probability of the model performance given the hyperparameters; in contrast, the Tree-Parzen estimator models the probability of the hyperparameters given the model performance.

Hyperband is a multi-armed bandit strategy for hyperparameter optimization. It assumes that there are computationally cheap but approximate ways to measure performance (e.g., by not training to completion) and that these can be associated with a budget (e.g., by training for a fixed number of iterations). A number of random configurations are sampled and run until the budget is used up. Then the best fraction $\eta$ of runs is kept, and the budget is multiplied by $1 / \eta$. This is repeated until the maximum budget is reached. This approach has the advantage of efficiency; for bad configurations, it does not need to run the experiment to the end. However, each sample is just chosen randomly, which is inefficient. The BOHB algorithm combines the efficiency of Hyperband with the more sensible choice of hyperparameters from Tree Parzen estimators to construct an even better method.