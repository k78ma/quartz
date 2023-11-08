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
We first introduce the foundational concepts of machine learning by discussing basic feedforward neural networks. This is then extended to recurrent neural networks.

### Feedforward Neural Networks
#### Problem and Data
The core problem in many machine learning tasks is to make accurate predictions or decisions based on input data. In the context of a neural network, this typically involves learning a function that maps input features to desired output labels or values. To achieve this, a model is trained on a dataset comprising numerous instances, each containing a set of features and usually a label or value.

For all of the work discussed in this paper, we are dealing with a supervised learning scenario. This means that the dataset used for training includes not only the input features but also the corresponding output labels, which are essential for the network to learn the correct mappings. This dataset is defined as:
$$
D = \{ (x^{(1)}, y^{(1)}), \dots, (x^{(n)}, y^{(n)}) \}
$$
where $x$ values indicate inputs features and $y$ values indicate a label of some kind. The specific values and types of $x$ and $y$ dictate the type of problem. For example, sigmoid functions squashes inputs to be between $0$ and $1$, which can be interpreted as probabilities in binary classification tasks.  In a multi-layer networks (covered in Sectionref{dafadsf}), this activation and output function may be separated.
#### Model Definition
At a high-level, neural networks ingest a vector of input features $x = \begin{bmatrix}x_{1}, x_{2}, \dots, x_{n}\end{bmatrix}$,
where $n$ is the number of features. The "features" are individual measurable properties or characteristics of a phenomenon being observed; they inputs that we provide to a model, upon which the model makes a prediction or decision.

The prediction made by the model is fundamentally defined by a set of **weights** $w = \begin{bmatrix}w_{1}, w_{2}, \dots, w_{n}\end{bmatrix}$ and a **bias** term $b$. A weighted sum is produced by taking:
$$
z = w^{T}x + b = \sum_{i=1}^{n}w_{i}x_{i} + b
$$
Here, $w^{T}$ is the transpose of $w$, such that $w^{T}x$ is essentially a dot product. This weighted sum $z$ is called a **logit**.

At this step, **activation functions** are usually applied to the weighted logit. Activation functions introduce non-linearity into the network, which allows the network to model more complex relationships between the inputs and outputs. Some examples of activation functions are sigmoid, hyperbolic tangent, and ReLU functions. The activation function can also serves to interpret the output of the network.

We can formalize this entire process as:
$$
h(x; w, b) = \sigma(w^{T}x + b)
$$
where $h(x; w, b)$ is the hypothesis or the function modeled by the neural network with parameters $w$ (weights) and $b$ (bias), and $\sigma(\cdot)$ represents the activation function applied to the weighted sum of inputs. This is called the **forward pass**.
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
#### Training with Gradient Descent
How do we find the minimum of our objective function?

The main idea is if we're trying to optimize a function *f*, we compute the gradient at our current point $x$. Since the gradient gives the direction of the maximum rate of increase, we move in the opposite direction, making the function smaller. In terms of a machine learning model, we would have some objective function $J(\Theta)$ defining some surface over $\Theta$, and we want to find the $\Theta$ value at the lowest point on the surface.

We specify an initial value for parameter $\Theta$, a step-size parameter $\eta$ (also called the learning rate), and a convergence threshold $\epsilon$. Then, the 1D gradient descent algorithm is:

1. Initialize parameters $\Theta$, learning rate $\eta$, and convergence threshold $\eta$.
2. Repeat until convergence (i.e., when the change in cost function is below $\epsilon$):
	1. Compute the gradient $\nabla_{\Theta}J(\Theta)$.
	2. Update the parameters: $\Theta \leftarrow \Theta - \eta \cdot \nabla_{\Theta}J(\Theta)$.
	3. If the magnitude of the gradient is less than $\epsilon$, then stop.
3. Output the final parameters $\Theta$.

```pseudo
\begin{algorithm}
\caption{Gradient Descent} 
\begin{algorithmic}
\State \textbf{Input:} learning rate $\eta$, convergence threshold $\epsilon$
\State \textbf{Output:} optimized parameters $\Theta$

\Procedure{GradientDescent}{}
    \State Initialize parameters $\Theta$
    \Repeat
        \State Compute the gradient $\nabla_{\Theta}J(\Theta)$
        \State Update the parameters: $\Theta \leftarrow \Theta - \eta \cdot \nabla_{\Theta}J(\Theta)$
        \If{magnitude of $\nabla_{\Theta}J(\Theta) < \epsilon$}
            \State \textbf{break}
        \EndIf
    \Until{convergence}
    \State \textbf{return} $\Theta$
\EndProcedure
\end{algorithmic}
\end{algorithm}
```
#### Multi-layer Neural Networks
Multi-layer networks, often referred to as **multi-layer perceptrons (MLPs)**, extend the concept of the simple neural network model above into a more complex architecture composed of multiple layers of neurons.
These layers include:
1. **Input Layer**: This is the layer that receives the input features. It does not apply any computation and simply passes the features to the next layer.
2. **Hidden Layers**: One or more layers that compute the intermediate features. These layers are called "hidden" because their outputs are not observed in the training data. The computation in these layers introduces non-linearity to the system, allowing the network to capture complex patterns.
3. **Output Layer**: The final layer that provides the prediction or classification based on the input features and the computations done by the hidden layers.

The forward pass in multi-layer networks involves sequentially passing the input data passes through each layer to produce an output, such that the output of each layer becomes the input to the next layer. Mathematically, for each layer $l$, this process can be described as:
$$
h^{[l]}(x) = \sigma^{[l]}(w^{[l]T}h^{[l-1]}(x) + b^{[l]})
$$
where $h^{[l]}(x)$ is the output logit of layer $l$, $w^{[l]}$ and $b^{[l]}$ are the weights and biases of layer $l$, $\sigma^{[l]}$ is the activation function for layer $l$, and $h^{[l-1]}(x)$ is the output of the previous layer. We say that $h^{[0]} = x$ is the input to the network and $h^{[L]}$ is the final output (activation of last layer).

The final **output layer** transforms the outputs of the last hidden layer into a form $y$ that is suitable for the specific type of problem the network is intended to solve. Output layers often use similar functions as activation functions. For example, sigmoid functions squashes inputs to be between $0$ and $1$, which can be interpreted as probabilities in binary classification tasks. 
#### Gradient Descent with Backpropagation 
The training process for multi-layer networks follows a similar principle to that of single-layer networks, as discussed in the Training section; we define an objective function and use gradient descent to find model parameters that minimize this objective. The objective function typically includes the loss function $L$ as well as possibly other terms (such as regularization terms). However, the gradient descent process relies on the computation of the gradient of the objective function, $J(\Theta)$. Previously, our $\Theta$ consisted of a single weight and bias, but in a multi-layer network, there are multiple layers of weights and biases; we must find the gradient of the objective function with respect to the weights in the neural network. Backpropagation is a method that uses the chain rule to compute these gradients systematically.

In the introduction of gradient descent in Section, we combined the weights and biases into a single parameter $\Theta = \{ w, b \}$. Here, we will consider $w$ and $b$ individually for mathematical clarity.

Let us say we have a multi-layer network with layers $0, \dots, L$. First, a forward pass is performed. For each layer, we calculate:
$$
\begin{align}
z^{[l]} & =w^{[l]T}h^{[l-1]} + b^{[l]} \\
h^{[l]}  & = \sigma^{[l]} (z^{[l]}) \\
\end{align}
$$
where $h^{[0]} = x$ is the input to the network and $h^{[L]}$ is the final output (activation of last layer).

We then compute the loss using the predicted output $h^{[L]}$ and the true value $y$. Then, for the chosen objective function $J(h^{[L]}, y)$, we calculate the initial gradient of the loss with respect to the output of the last layer's activations $\frac{ \partial J }{ \partial h^{[l]} }$.

Then, we arrive at the central mechanism of backpropagation: the **backward pass**. This is performed through the network to compute the gradient of the loss with respect to the activations, weights, and biases of each layer, starting from the output layer $L$ back to the first hidden layer.

For the last layer $L$, compute the gradients of the loss with respect to the logits:
$$
\delta^{[L]} = \frac{ \partial J }{ \partial z^{[L]} } 
$$
Since $h$ is a function of $z$, we can use the partial derivative chain rule:
$$
\delta^{[L]} = \frac{ \partial J }{ \partial z^{[L]} } = \frac{ \partial J }{ \partial h^{[L]} } \cdot \frac{ \partial h^{[L]} }{ \partial z^{[L]} } 
$$
where the last term $\frac{ \partial h^{L} }{ \partial z^{L} }$ is the partial derivative of the activation function at the last layer with respect to its input $z^{[L]}$. We use $\delta^{[l]}$ to represents the "error" for each layer $l$, quantifying how much a given layer's output should change to minimize the loss for the entire network.

Then, we compute the gradients for the parameters of each layer. For the output layer $L$, we would have:
$$
\begin{align}
\nabla_{w^{[L]}}J  & = \delta^{[L]}⋅(h^{[L−1]})^{T} \\
\nabla_{b^{[L]}}J  & = \delta^{[L]}
\end{align}
$$
Here, the gradient with respect to the bias $b$ is the delta itself because the derivative of $z^{[L]}$ with respect to $b^{[L]}$ is $1$.

Following this method, we can recursive calculate gradients for each preceding layer $l = L-1, L-2, \dots, 1$:
$$
\delta^{[l]}=(w^{[l+1]T}\delta^{[l+1]}) \cdot \frac{ \partial \sigma^{[l]}(z^{[l]}) }{ \partial z^{[l]} } 
$$
This step propagates the error backward by taking into account the error from the layer above ($\delta^{[l+1]}$) and the gradient of the activation function for the current layer's output.

Then, the gradients for the weights and biases for layer $l$ are computed as follows:
$$
\begin{align}
\nabla_{w^{[l]}} L  & = \delta^{[l]} \cdot (h^{[l-1]})^{T} \\
\nabla_{b^{[l]}} L  & = \delta^{[l]}
\end{align}
$$
Finally, we can update the weights and biases using the previous gradient descent method:
$$
\begin{align}
w^{[l]}  & = w^{[l]} - \eta \cdot \nabla_{w^{[l]}}L \\
b^{[l]}  & = b^{[l]} - \eta \cdot \nabla_{b^{[l]}}L
\end{align}
$$
Backpropagation is efficient because it calculates the gradients for all weights and biases with only two passes through the network: one forward and one backward. By systematically applying the chain rule, backpropagation avoids redundant computations of gradients, thereby facilitating the training of deep neural networks.

```pseudo
\begin{algorithm} 
\caption{Backpropagation and Gradient Descent} 
\begin{algorithmic}
\Procedure{TrainNetwork}{$D, \eta, \epsilon$}
\STATE Initialize network weights (often small random values) 
\While{not converged} 
\For{each $(x^{(i)}, y^{(i)})$ in training set $D$} 
\State // Forward pass: 
\State Compute activation $a^{[l]}$ for each layer $l$ in the network 
\State // Backward pass: 
\State Compute $\delta^{[L]}$ for output layer $L$ (loss gradient) 
\For{$l = L-1$ to $1$} 
\State Compute $\delta^{[l]}$ based on $\delta^{[l+1]}$ (gradient for layer $l$) 
\EndFor 
\State // Update weights for each layer: 
\For{$l = 1$ to $L$} 
\State Update $w^{[l]} \leftarrow w^{[l]} - \eta \nabla_{w^{[l]}}J(w^{[l]})$ \EndFor 
\EndFor 
\State Check for convergence (e.g., if change in $J(\Theta)$ is below $\epsilon$) 
\EndWhile 
\State 
\Return{network weights} 
\EndProcedure 
\end{algorithmic} 
\end{algorithm}
```
### Recurrent Neural Networks
Based on the background above, we can formulate recurrent neural networks. 


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