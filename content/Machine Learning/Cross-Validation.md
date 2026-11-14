---
title: Cross-Validation
tags:
  - dl
date: 2025-09-11
aliases: cross-validation
---
We saw that data is typically divided into three parts:
- Training data (to learn model parameters)
- Validation data (to choose hyperparameters)
- Test data (to estimate the final performance)

However, this division may cause problems where the total number of data examples is limited; if the number of training examples is comparable to the model capacity, then the variance will be large.

One way to mitigate this is to use $k$-fold cross-validation. The training and validation data are partitioned into $K$ disjoint subsets. For example, we might divide these into five parts. We train with four and validate with the fifth for each of the five permutations, and choose the hyperparameters based on the average validation performance. The final test performance is assessed using the average of the predictions from the five models with the best hyperparameters on an entirely different test set, which reduces variance. 

If the goal is a single final model, the best practice is to retrain on the full training data with the chosen hyperparameters.