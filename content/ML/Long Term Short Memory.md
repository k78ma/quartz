---
title: Long Term Short Memory
tags:
  - ml
date: 2023-10-11
aliases:
  - LSTM
---
- [Alex Colah’s blog on LSTMs](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)

The benefit of an [[Recurrent Neural Networks|RNN]] is that it can accumulate a hidden state that encodes input over time. However, it can be hard to maintain information in its hidden state for a long time. Backpropagation through time becomes of exploding/vanishing gradients.

To combat this decay, the LSTM includes an additional "cell state" that persists from step to step. It does not pass through an activation function or get multiplied by the connection weights at each timestep.

![[Long Term Short Memory-1775008337749.webp|550]]

- $h$ and $x$ can increment $c$ (input)
- $h$ and $x$ can erase $c$ (forget)
- $h$ and $x$ can control the output of $c$ (output)

![[Long Term Short Memory-1775008420972.webp|501]]

## LSTM Formulation
### Forget Gate
The forget gate determines whether to keep the current cell state or to flush it. It computes:
$$
f_{t}=\sigma([h_{{t-1}}x_{t}]W_{f}+b_{f})
$$
The sigmoid function outputs a value between 0 and 1. If 1, we completely persist. If 0, we completely forget. We'll see how this works later.

### Input Gate
The input gate determines how much of the input should be added to $c$. It computes:
$$
i_{t} = \sigma([h_{t-1}x_{t}]W_{i}+b_{i})
$$
Likewise, 1 = input, 0 = no input.

### Cell state
A "candidate cell state" is calculated based on the past input hidden state.
$$
\tilde{c}_{t} = \tanh([h_{t-1}x_{t}]W_{c}+b_{c})
$$
Then past and candidate cell states are combined to give the total cell state:
$$
c_{t} = f_{t} \odot c_{t-1} + i_{t} \odot \tilde{c}_{t}
$$
### Output Gate
The output gate determines whether the cell state should influence the output. It computes:
$$
o_{t} = \sigma([h_{t-1}x_{t}]W_{o}+b_{o})
$$
where 1 = output and 0 = no output.

### Output
Finally, we can compute the output as:
$$
h_{t} = o_{t} \odot \tanh(c_{t})
$$
where $c_{t}$ can be written in one expression as
$$
c_{t} = \underbrace{ \sigma(x_{t}W_{f}+b_{f}) }_{ \text{Forget gate} }c_{t-1}+\underbrace{ \sigma(x_{t}W_{i}+b_{i}) }_{ \text{Input gate} }\underbrace{ \tanh(x_{t}W_{c}+b_{c}) }_{ \text{Candidate cell state} }
$$

## Gradients
How does this make a difference with respect to solving the exploding/vanishing gradients problem?

We have:
$$
c_{t}=f_{t} \odot c_{t-1} + i_{t} \odot \tilde{c}_{t}
$$
How does $\nabla_{c_{t-1}}E$ depend on $\nabla_{c_{t}}E$? We have:
$$
\nabla_{c_{t-1}}E= \nabla _{c_{t}}E \odot f_{t} +\text{other stuff}
$$
As long as $f$ is close to $1$, there is little decay of the gradient. Presumably $f$ is only close to $0$ when we actually want to forget. We don't want to push gradient lower.
- Note that multiplying by $\sigma$ is different from multiplication by $\sigma'$.

Essentially, the point is that the cell states evolve additively, When $f\approx 1$, the gradient can pass backward with little decay. This is much more stable than vanilla RNNs, where gradients are repeatedly multiplied by weight matrices and activation derivatives.