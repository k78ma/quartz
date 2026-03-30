---
title: Recurrent Neural Networks
tags:
  - ml
date: 2023-10-11
aliases:
  - RNN
  - RNNs
---
A recurrent neural network allows us to process variable-length sequences. This is good for something like next-word prediction in a sentence.

RNNs' key strength is their a hidden state, which acts as a memory of previous inputs. This allows the network to capture temporal dependencies and make information predictions based on past information.
- Increasing the size of $\vec{h}^{i}$ (larger number of hidden units) enhances the ability to store and process long-term dependencies, but is more computationally expensive.

RNNs suffer from the [[Vanishing + Exploding Gradient Problem]], making it difficult to learn dependencies over long timespans. More advanced architectures such as [[Long Term Short Memory|LSTM]] and [[Gated Recurrent Unit|GRU]] address these issues.

## Vanilla RNN Formulation
RNNs process sequences by maintaining a hidden state that carries information from previous timesteps.

![[Recurrent Neural Networks-1774651319235.webp|241]]

At each time step $i$, the hidden state is updated using the previous hidden state and the current input.
$$
\begin{align}
s ^{i} & = Ux^{i} + Wh^{i-1}+b \\
h^{i}  & = \sigma(s ^{i})
\end{align}
$$
- $\vec{h}^{i}$ is the hidden state at time step $i$
- $\vec{x}^{i}$ is the input at time step $i$
- $U$ is the input-to-hidden transformation weight matrix
- $W$ is the hidden-to-hidden transformation weight matrix (allows information to persist over time)
- $\vec{b}$ is the bias term
- $a$ is a non-linear activation function

The output at each timestep is computed as
$$
\begin{align}
z^{i}  & = Vh^{i}+c \\
y^{i}  & = \sigma(z^{i})
\end{align}
$$
- $\vec{y}^{i}$ is the output at time step $i$
- $V$ is the hidden-to-output transformation weight matrix
- $\vec{c}$ is the bias term
- The softmax function ensures that the output represents probabilities or conditional probabilities

Unrolled through time:

![[Recurrent Neural Networks-1774846169647.webp|467]]

## Backpropagation Through Time
The total loss function $L$ over a sequence of timesteps is computed as the sum of individual losses at each step:
$$
E({y}^{1}, \dots, {y}^{N}, {t}^{1}, \dots, {t}^{N}) = \sum_{i=1}^{N}\alpha_{i}L({y}^{i}, {t}^{i})
$$
- ${y}^{i}$ is the predicted output at each time step $i$
- ${t}^{i}$ is the target/ground truth output at time step $i$
- $N$ is the sequence length
- $L({y}^{i}, {t}^{i})$ represents the loss function measuring the error between prediction and target at a given timestep. This could be a cross-entropy or MSE loss depending on the task.
- $\alpha_{i}$ are weights for different timesteps
- The total loss $E$ is accumulated over all timesteps, ensuring that all predictions contribute to the optimization process.

Then, the training objective is to minimize the expected loss over the entire dataset:
$$
\theta^{\ast  } = \underset{\theta}{\operatorname{argmin}} \mathbb{E}_{y,t}[E({y}^{1}, \dots, {y}^{N}, {t}^{1}, \dots, {t}^{N})]
$$
After the forward pass, we can propagate the error gradients through the network.

Let us first consider the output pre-activation, $z^{k} = V{h}^{i}+{c}$.
$$
\begin{align}
\nabla_{z^{k}}E  & = \nabla_{z^{k}}\left( \sum_{i=1}^{T}L(y^{i}, t^{i}) \right) \\[2ex]
     & = \sum_{i=1}^{T} \nabla_{z^{k}} L(y^{i}, t^{i}) \\[2ex] 
     & = \nabla_{z^{k}}L(y^{k}, t^{k})  & [\text{Only } y^{k} \text{ depends on } z^{k}, \text{ all other } y^{i} \text{ are 0}] \\[2ex] 
     & = \nabla_{y^{k}} L(y^{k}, t^{k}) \odot \sigma'(z^{k})
\end{align}
$$

With this we can get the gradient for the hidden-to-output weight matrix $V$:
$$
\begin{align}
\nabla_{V}E  & = \sum_{i=1}^{T} \nabla_{V} L(y^{i}, t^{i}) \\[2ex]
     & = \sum_{i=1}^{T} \nabla_{z^{i}}L(y^{i}, t^{i}) \, \nabla_{V}z^{i} \\[2ex] 
     & = \sum_{i=1}^{T} \nabla_{z^{i}} L(y^{i}, t^{i}) (h^{i})^{T}
\end{align}
$$
**Hidden layers:** Descending down to the hidden layer, it gets more interesting because each unrolled hidden layer depends on the one before it. So, we start at the final timestep $\tau$ and work our way back in time.

Define the "future-from-$k$" loss as:
$$
E^{k} = \sum_{i=k}^{\tau} L(y^{i}, t^{i})
$$
and consider $\nabla_{h^{z}}E$.

The variables before timestep $k$ do not depend on the variables after $k$; $h^{k}$ depends on $h^{k-1}$ but not $h^{k+1}$. 

![[Recurrent Neural Networks-1774845293480.webp|238]]
- $j=\tau$ here?

Therefore:
$$
\nabla_{h^{k}}E= \nabla_{h^{k}} \sum_{i=k}^{\tau}L(y^{i}, t^{i})=\nabla _{h^{k}} E^{k}
$$
Thus, for the final hidden layer we have $\nabla_{h^{\tau}}E = \nabla_{h^{\tau}}E^{\tau}$. This can be written as:
$$
\underbrace{\nabla_{h^{\tau}} E}_{H}=\underbrace{\nabla_{z^{\tau}} E}_{Y}
\,\underbrace{\frac{\partial z^{\tau}}{\partial h^{\tau}}}_{Y\times H} =\nabla_{z^{\tau}}E \, V^{T}
$$
- Recall that $z=hV+C$

Note: All the backprop paths from $E^{k}$ to the variables $x^{i}, s ^{i}, h^{i}$ must pass through $h^{k}$ for $i\leq k$.

Suppose that we have already comptued $\nabla_{h^{i+1}}E$. We we would like to compute $\nabla_{h^{i}}E$:
$$
\begin{align}
\nabla_{h^{i}}E  & = \nabla_{h^{i}}E^{i} \\[2ex] 
     & = \nabla_{h^{i}}\Big(L(y^{i}, t^{i})+E^{i+1}\Big) \\[2ex]
     & = \nabla_{h^{i}}L(y^{i}, t^{i}) + \nabla_{h^{i+1}}E \,\,\frac{ \partial h^{i+1} }{ \partial h^{i} } \\[2ex] 
     & = \underbrace{ \Big[ \nabla_{y^{i}}L(y^{i}, t^{i}) \odot \sigma'(z^{i}) }_{ Y } \underbrace{ \Big]V^{T} }_{ Y\times H } + \underbrace{ \Big[\nabla_{h^{i+1}} E \odot \sigma'(s ^{i+1}) \Big] }_{ H }\underbrace{  W^{T}  }_{ H\times H }
\end{align}
$$
Once you have $\nabla_{h^{i}}E$, $i=1, \dots, \tau$, you can compute the gradient with respect to the deeper weights and biases $\nabla_{W}E, \nabla_{U}E, \nabla_{b}E$.