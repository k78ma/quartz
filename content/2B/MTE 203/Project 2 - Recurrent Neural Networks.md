---
title: Project 2 - Recurrent Neural Networks
tags: 
date: 2023-11-05
aliases:
---
## Abstract
In the past decade, neural network-based approaches have led to explosive growth in the field of machine learning. Language models are notable and popular application of this with the recent success of GPT \cite{} models. In this report, the mathematical foundations of neural network learning algorithms are examined, with a focus on the backpropagation mechanism. This is slightly extended to introduce the concept of recurrent neural networks and "backpropagation through time", allowing us to build a basic (but functional) character-level language model.
## Introduction


## Background
We introduce the foundational concepts of machine learning by discussing a single-layer neural network. Here, everything is explained in general terms.
#### Problem and Data
The core problem in many machine learning tasks is to make accurate predictions or decisions based on input data. In the context of a neural network, this typically involves learning a function that maps input features to desired output labels or values. To achieve this, a model is trained on a dataset comprising numerous instances, each containing a set of features and usually a label or value.

For all of the work discussed in this paper, we are dealing with a supervised learning scenario. This means that the dataset used for training includes not only the input features but also the corresponding output labels, which are essential for the network to learn the correct mappings. This dataset is defined as:
$$
D = \{ (x^{(1)}, y^{(1)}), \dots, (x^{(n)}, y^{(n)}) \}
$$
where $x$ values indicate inputs features and $y$ values indicate a label of some kind. The specific values and types of $x$ and $y$ dictate the type of problem. Fo

#### Model Definition
At a high-level, neural networks ingest a vector of input features $x = \begin{bmatrix}x_{1}, x_{2}, \dots, x_{n}\end{bmatrix}$,
where $n$ is the number of features. The "features" are individual measurable properties or characteristics of a phenomenon being observed; they inputs that we provide to a model, upon which the model makes a prediction or decision.

The prediction made by the model is fundamentally defined by a set of **weights** $w = \begin{bmatrix}w_{1}, w_{2}, \dots, w_{n}\end{bmatrix}$ and a **bias** term $b$. A weighted sum is produced by taking:
$$
z = w^{T}x + b = \sum_{i=1}^{n}w_{i}x_{i} + b
$$
Here, $w^{T}$ is the transpose of $w$, such that $w^{T}x$ is essentially a dot product. This weighted sum $z$ is called a **logit**.

At this step, **activation functions** are usually applied to the weighted logit. Activation functions introduce non-linearity into the network, which allows the network to model more complex relationships between the inputs and outputs. Some examples of activation functions are sigmoid, hyperbolic tangent, and ReLU functions.

Finally, the **output function** (also known as the activation function for the output layer) transforms the outputs of the final layer of a network into a form $y$ that is suitable for the specific type of problem the network is intended to solve. For example, sigmoid functions squashes inputs to be between $0$ and $1$, which can be interpreted as probabilities in binary classification tasks. 

We can formalize this entire process as:
$$
h(x; w, b) = \sigma(w^{T}x + b)
$$
where $h(x; w, b)$ is the hypothesis or the function modeled by the neural network with parameters $w$ (weights) and $b$ (bias), and $\sigma(\cdot)$ represents the activation function applied to the weighted sum of inputs.
#### Loss Functions
To measure how well the model is performing, a loss function is used. Specifically, loss functions quantify the quality of a prediction $h(x^{(i)}; \Theta)$ makes for a specific data sample $(x^{(i)}, y^{(i)})$. , where $\Theta$ represents the parameters of the model (such as $w$ and $b$). A low loss value indicates a good prediction, and a high loss indicates a poor prediction.

The exact definition of a loss function depends on the problem at hand. A common loss function for is the binary cross-entropy loss:
$$
\begin{align}
L(h(x^{(i)}; \Theta), y^{(i)}) = \sum_{i=1}^{n}(y^{i}\log g^{(i)} + (1-y^{(i)})\log(1-g^{(i)})) \\[3ex] 
\end{align}
$$
where $n$ is the number of training examples, $y^{(i)}$ is the true label for the $i^{th}$ training example, and $g^{(i)}$ is the predicted probability output by our model.
#### Learning as an Optimization Problem
Our model and loss function is defined, but how do we find a model that actually performs well? We can introduce a general framework for training models for arbitrarily complicated problems by framing machine learning as an computational minimization problem.

Fundamentally, we define an *objective function* $J(\Theta)$, where $\Theta$ are the parameters ($w$ and $b$) of our model. Since the loss function quantifies the quality of our model, we define the objective function to be:
$$
J(\Theta) = \left( \frac{1}{n}\sum_{i=1}^{n} \underbrace{ L(h(x^{(i)};\Theta), y^{i}) }_{ \text{loss} } \right)
$$
such that we are measuring the loss of the model across the entire dataset. 

Generally, the optimization is that we want to find $\Theta^\star$ such that:
$$
\Theta^{\star} = \mathrm{argmin}_{\Theta} \; J(\Theta)
$$
which is to say that we want to find the $\Theta$ that minimizes $J(\Theta)$, making this a minimization problem.
#### Gradient Descent
How do we find the minimum of our objective function?

The main idea is if we're trying to optimize a function *f*, we compute the gradient at our current point $x$. Since the gradient gives the direction of the maximum rate of increase, we move in the opposite direction, making the function smaller. In terms of a machine learning model, we would have some objective function $J(\Theta)$ defining some surface over $\Theta$, and we want to find the $\Theta$ value at the lowest point on the surface.

We specify an initial value for parameter $\Theta$, a step-size parameter $\eta$ (also called the learning rate), and a convergence threshold $\epsilon$. Then, the 1D gradient descent algorithm is:

1. Initialize parameters $\Theta$, learning rate $\eta$, and convergence threshold $\eta$.
2. Repeat until convergence (i.e., when the change in cost function is below $\epsilon$):
	1. Compute the gradient $\nabla_{\Theta}J(\Theta)$.
	2. Update the parameters: $\Theta \leftarrow \Theta - \eta \cdot \nabla_{\Theta}J(\Theta)$.
	3. If the magnitude of the gradient is less than $\epsilon$, then stop.
3. Output the final parameters $\Theta$.

## Approach
Given the background of basic neural networks, we will now focus on the application of recurrent neural networks to build a character-level language model. Each part of our model and learning algorithm is introduced and justified.
#### Problem and Data

#### Model Definition

#### Loss Function and Objective Function

#### Gradient Descent with Backpropagation

## Implementation

## Results

## Discussion

## Conclusion

## References

## Appendix A: RNN Code
```python
import numpy as np

# data I/O
data = open('input.txt', 'r').read() # should be simple plain text file
chars = list(set(data))
data_size, vocab_size = len(data), len(chars)
print 'data has %d characters, %d unique.' % (data_size, vocab_size)
char_to_ix = { ch:i for i,ch in enumerate(chars) }
ix_to_char = { i:ch for i,ch in enumerate(chars) }

# hyperparameters
hidden_size = 100 # size of hidden layer of neurons
seq_length = 25 # number of steps to unroll the RNN for
learning_rate = 1e-1

# model parameters
Wxh = np.random.randn(hidden_size, vocab_size)*0.01 # input to hidden
Whh = np.random.randn(hidden_size, hidden_size)*0.01 # hidden to hidden
Why = np.random.randn(vocab_size, hidden_size)*0.01 # hidden to output
bh = np.zeros((hidden_size, 1)) # hidden bias
by = np.zeros((vocab_size, 1)) # output bias

def lossFun(inputs, targets, hprev):
  """
  inputs,targets are both list of integers.
  hprev is Hx1 array of initial hidden state
  returns the loss, gradients on model parameters, and last hidden state
  """
  xs, hs, ys, ps = {}, {}, {}, {}
  hs[-1] = np.copy(hprev)
  loss = 0
  # forward pass
  for t in xrange(len(inputs)):
    xs[t] = np.zeros((vocab_size,1)) # encode in 1-of-k representation
    xs[t][inputs[t]] = 1
    hs[t] = np.tanh(np.dot(Wxh, xs[t]) + np.dot(Whh, hs[t-1]) + bh) # hidden state
    ys[t] = np.dot(Why, hs[t]) + by # unnormalized log probabilities for next chars
    ps[t] = np.exp(ys[t]) / np.sum(np.exp(ys[t])) # probabilities for next chars
    loss += -np.log(ps[t][targets[t],0]) # softmax (cross-entropy loss)
  # backward pass: compute gradients going backwards
  dWxh, dWhh, dWhy = np.zeros_like(Wxh), np.zeros_like(Whh), np.zeros_like(Why)
  dbh, dby = np.zeros_like(bh), np.zeros_like(by)
  dhnext = np.zeros_like(hs[0])
  for t in reversed(xrange(len(inputs))):
    dy = np.copy(ps[t])
    dy[targets[t]] -= 1 # backprop into y. see http://cs231n.github.io/neural-networks-case-study/#grad if confused here
    dWhy += np.dot(dy, hs[t].T)
    dby += dy
    dh = np.dot(Why.T, dy) + dhnext # backprop into h
    dhraw = (1 - hs[t] * hs[t]) * dh # backprop through tanh nonlinearity
    dbh += dhraw
    dWxh += np.dot(dhraw, xs[t].T)
    dWhh += np.dot(dhraw, hs[t-1].T)
    dhnext = np.dot(Whh.T, dhraw)
  for dparam in [dWxh, dWhh, dWhy, dbh, dby]:
    np.clip(dparam, -5, 5, out=dparam) # clip to mitigate exploding gradients
  return loss, dWxh, dWhh, dWhy, dbh, dby, hs[len(inputs)-1]

def sample(h, seed_ix, n):
  """ 
  sample a sequence of integers from the model 
  h is memory state, seed_ix is seed letter for first time step
  """
  x = np.zeros((vocab_size, 1))
  x[seed_ix] = 1
  ixes = []
  for t in xrange(n):
    h = np.tanh(np.dot(Wxh, x) + np.dot(Whh, h) + bh)
    y = np.dot(Why, h) + by
    p = np.exp(y) / np.sum(np.exp(y))
    ix = np.random.choice(range(vocab_size), p=p.ravel())
    x = np.zeros((vocab_size, 1))
    x[ix] = 1
    ixes.append(ix)
  return ixes

n, p = 0, 0
mWxh, mWhh, mWhy = np.zeros_like(Wxh), np.zeros_like(Whh), np.zeros_like(Why)
mbh, mby = np.zeros_like(bh), np.zeros_like(by) # memory variables for Adagrad
smooth_loss = -np.log(1.0/vocab_size)*seq_length # loss at iteration 0
while True:
  # prepare inputs (we're sweeping from left to right in steps seq_length long)
  if p+seq_length+1 >= len(data) or n == 0: 
    hprev = np.zeros((hidden_size,1)) # reset RNN memory
    p = 0 # go from start of data
  inputs = [char_to_ix[ch] for ch in data[p:p+seq_length]]
  targets = [char_to_ix[ch] for ch in data[p+1:p+seq_length+1]]

  # sample from the model now and then
  if n % 100 == 0:
    sample_ix = sample(hprev, inputs[0], 200)
    txt = ''.join(ix_to_char[ix] for ix in sample_ix)
    print '----\n %s \n----' % (txt, )

  # forward seq_length characters through the net and fetch gradient
  loss, dWxh, dWhh, dWhy, dbh, dby, hprev = lossFun(inputs, targets, hprev)
  smooth_loss = smooth_loss * 0.999 + loss * 0.001
  if n % 100 == 0: print 'iter %d, loss: %f' % (n, smooth_loss) # print progress
  
  # perform parameter update with Adagrad
  for param, dparam, mem in zip([Wxh, Whh, Why, bh, by], 
                                [dWxh, dWhh, dWhy, dbh, dby], 
                                [mWxh, mWhh, mWhy, mbh, mby]):
    mem += dparam * dparam
    param += -learning_rate * dparam / np.sqrt(mem + 1e-8) # adagrad update

  p += seq_length # move data pointer
  n += 1 # iteration counter
```