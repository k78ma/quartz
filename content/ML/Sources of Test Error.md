---
title: Sources of Test Error
tags:
  - dl
date: 2025-08-18
aliases:
  - sources of test error
---
With sufficient capacity, a neural network often performs perfectly on training data; however, it does not necessarily generalize well to new test data.

We will see that the test errors have three distinct causes and that their relative contributions depend on (i) the inherent uncertainty in the task, (ii) the amount of training data, and (iii) the choice of model. The latter dependency raises the issue of hyperparameter search. We discuss how to select both the model hyperparameters (e.g., the number of hidden layers and the number of hidden units in each) and the learning algorithm hyperparameters (e.g., the learning rate and batch size).

## Training example
We explore performance using the MNIST-1D dataset. This consists of ten classes $y \in \{ 0,1,\dots,9 \}$, representing digits 0-9. The data is derived from 1D templates for each of the digits. Each data example $\mathbf{x}$ is created by randomly transforming one of these templates and adding noise. The full training dataset $\{ x_{i}, y_{i} \}$ consists of $I =4000$ training examples, each consisting of $D_{i} =40$ dimensions representing the horizontal offset at 40 positions. The ten classes are drawn uniformly during data generation, so there are around 400 examples of each class. 

![[Sources of Test Error-20250819144249899.png|490]]

We use a network with $D_{i}=40$ inputs and $D_{o}=10$ outputs which are passed through a softmax function to produce class probabilities ([[Multi-class Classification]]). The network has two hidden layers with $D=100$ hidden units each. It is trained using stochastic gradient descent with batch size 100 and learning rate 0.1 for 6000 steps (150 epochs) with a multiclass cross-entropy loss. Figure 8.2 shows that the training error decreases as training proceeds. The training data are classified perfectly after about 4000 steps. The training loss also decreases, eventually approaching zero.

![[Sources of Test Error-20250818213111848.png|621]]

However, this doesn't mean the classifier is perfect; the model might have memorized the training set but be unable to predict new examples. To estimate the true performance, we need a separate test set of input/output pairs $\{ \mathbf{x}_{i}, y_{i} \}$. To this end, we generate 1000 more examples using the same process. Figures 8.2a also shows the errors for this test data as a function of the training step. These decrease as training proceeds, but only to around 40%. This is better than the chance error rate of 90% but far worse than for the training set; the model has not generalized well to the test data.

The test loss (8.2b) decreases for the first 1500 training steps but then increases again. At this point, the test error rate is fairly constant. This is because the model makes the same mistakes but with increasing confidence. This decreases the probability of the correct answers and thus increases the negative log-likelihood. This increasing confidence is a side-effect of the softmax function; the pre-softmax activations are driven to increasingly extreme values to make the probability of the training data approach one.

## Sources of error
