---
title: Supervised Learning
tags:
  - ml
  - dl
date: 2024-12-15
aliases:
  - supervised learning
---
A supervised learning model defines a mapping from one or more inputs to one or more outputs. The model is a mathematical equation; when the inputs are passed through tis equation, it computes the output (**inference**). The model equation also contains **parameters**. Different parameter values change the outcome of the computation; the model equation describes a family of possible input-output mappings, and the parameters specify the particular relationship.

When we **train** or **learn** a model, we find parameters that describe the true relationship between inputs and outputs. A learning algorithm takes a training set of input/output pairs and manipulates the parameters until the inputs predict their corresponding outputs as closely as possible. 

Specifically, we aim to build a model that takes an input $\mathbf{x}$ and outputs a prediction $\mathbf{y}$, both of which are vectors. To make the prediction, we need a model $\mathbf{f}[\cdot]$ that takes the input $\mathbf{x}$ and returns $\mathbf{y}$, so:
$$
\mathbf{y}=\mathbf{f}[\mathbf{x}]
$$
The model is a mathematical equation with a fixed form, representing a family of relations between input and output. The model contains parameters $\phi$, where the choice of parameters determines the particular relation between input and output:
$$
\mathbf{y}=\mathbf{f}[\mathbf{x},\phi]
$$
We learn these parameters using a training dataset of $I$ pairs of input and output examples $\{ x_{i},y_{i} \}$. We aim to select parameters that map each training input to its associated output as closely as possible. We quantify the degree of mismatch in this mapping with the **loss** $L$. This is a scalar value that summarizes how poorly the model predicts the training outputs from their corresponding inputs for parameters $\phi$.

We can treat the loss as a function $L[\phi]$ of these parameters. When we train the model, we are seeking parameters $\hat{\phi}$ that minimize this **loss function**:
$$
\hat{\phi}=\underset{\phi}{\operatorname{argmin}}\Big[L[\phi]\Big]
$$
If the loss is small after this minimization, we have found model parameters that accurately predict the training outputs $\mathbf{y}_{i}$ from the training inputs $\mathbf{x}_{i}$.

After training a model, we assess its performance by running the model on a separate test data to see how well it *generalizes* to examples that it didn't observe during training.

## Linear Regression Example
We can make the idea above more concrete with a simple example of [[Regression|regression]]. We consider a model $y=f[x,\phi]$ that predicts a single output $y$ from a single input $x$. A 1D linear regression model describes a straight line:
$$
\begin{align}
y & =f[x,\phi] \\
	 & =\phi_{0}+\phi_{1}x
\end{align}
$$
This model has two parameters $\phi=[\phi_{0},\phi_{1}]$, where $\phi_{0}$ is the $y$-intercept of the line and $\phi_{1}$ is the slope. Different choices for the intercept and the slope result in different relations, hence the model defines a *family* of possible input-output relations.

![[Supervised Learning-20250412023846795.png|575]]

For this model, the training dataset consists of $I$ input/output pairs $\{ x_{i},y_{i} \}$. The mismatch between the model predictions $f[x_{i},\phi]$ and the ground truth $y_{i}$. This loss is quantified using a sum of squares, over all $I$ training pairs:
$$
\begin{align}
L[\phi] & =\sum_{i=1}^{I}(f[x_{i},\phi]-y_{i})^{2} \\[2ex]
	 & = \sum_{i=1}^{I}(\phi_{0}+\phi_{1}x_{i}-y_{i})^{2}
\end{align}
$$
This is called *least-squares* loss. The squaring operations means that the direction of the deviation (above/below the data) is unimportant.

![[Supervised Learning-20250412023920804.png|492]]

The goal of the training process is then to find the parameters $\hat{\phi}$ that minimize this quantity:
$$
\begin{align}
\hat{\phi} & =\underset{\phi}{\operatorname{argmin}}[L[\phi]] \\[2ex]
	 & =\underset{\phi}{\operatorname{argmin}}\left[ \sum_{i=1}^{I} (f[x_{i},\phi]-y_{i})^{2} \right] \\[2ex]
	 & =\underset{\phi}{\operatorname{argmin}}\left[ \sum_{i=1}^{I} (\phi_{0}+\phi_{1}x_{i}-y_{i})^{2} \right]
\end{align}
$$
There are only two parameters, so we can calculate the loss for every combination of values and visualize the loss function as a surface. The "best" parameters are at the minimum of this surface.

![[Supervised Learning-20250412023953807.png|566]]

For training and testing, the basic method is to choose the initial parameters randomly and then improve them by "walking down" the loss function until we reach the bottom. One way to do this is to measure the gradient of the surface at the current position and take a step in the direction that is most steeply downhill. Then we repeat this process until the gradient is flat and we can improve no further.

![[Supervised Learning-20250412024014063.png|583]]


Having trained the model, we test it by computing the loss on a separate set of test data. This shows how well the training data *generalizes*. 
- A simple model like a line might not be able to capture the true relationship between input and output. This is known as *underfitting*. 
- Conversely, a very expressive model may describe statistical peculiarities of the training data that are atypical and lead to unusual predictions. This is known as *overfitting*.