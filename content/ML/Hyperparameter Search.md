---
title: Hyperparameter Search
tags:
  - dl
date: 2025-09-10
aliases: hyperparameter search
---
Hyperparameters are typically chosen empirically; we train many models with different hyperparameters on the same training set, measure their performance, and retain the best model. However, we do not measure their performance on the test set; this would admit the possibility that these hyperparameters just happen to work well for the test set but don’t generalize to further data. Instead, we introduce a validation set. For every choice of hyperparameters, we train the associated model using the training set and evaluate performance on the validation set. Finally, we select the model that worked best on the validation set and measure its performance on the test set. In principle, this should give a reasonable estimate of the true performance.

The hyperparameter space is generally smaller than the parameter space but still too large to try every combination exhaustively. Unfortunately, many hyperparameters are discrete (e.g., the number of hidden layers), and others may be conditional on one another (e.g., we only need to specify the number of hidden units in the tenth hidden layer if there are ten or more layers). Hence, we cannot rely on gradient descent methods as we did for learning the model parameters. Hyperparameter optimization algorithms intelligently sample the space of hyperparameters, contingent on previous results. This procedure is computationally expensive since we must train an entire model and measure the validation performance for each combination of hyperparameters. 

Finding the best hyperparameters is a challenging optimization task:
- Testing a single configuration of hyperparameters is expensive; we must train an entire model and measure it's performance. 
- We have no easy way to access the derivatives (how performance changes when we make a small change to a hyperparameter).
- Many of the hyperparameters are discrete, so we cannot use gradient descent methods. 
- There are multiple local minima and no way to tell if we are close to the global minimum. 
- The noise level is high since each training/validation cycle uses a stochastic training algorithm; we expect different results if we train a model twice with the same hyperparameters.
- Some variables are conditional and only exist if others are set; for example, the number of hidden units in the 3rd hidden layer is only relevant if we have at least 3 hidden layers.

