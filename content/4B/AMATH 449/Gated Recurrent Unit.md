---
title: Gated Recurrent Unit
tags:
  - amath449
  - dl
date: 2026-03-31
aliases:
  - gated recurrent unit
  - GRU
---
GRU is another architectural improvement to the RNN, conceptually similar to the [[Long Term Short Memory|LSTM]]. It uses reset and update gates to control the flow of information and mitigate the vanishing gradient problem.

![[Gated Recurrent Unit-1775015447734.webp]]

## Formulation
### Reset Gate
The reset gate controls how much of the previous state $h^{n-1}$ we still want to remember. It computes:
$$
r^{n}=\sigma(h^{n-1}W_{r}+x^{n}U_{r}+b_{r})
$$
The sigmoid forces the value to be between 0 and 1. 0 means that we completely ignore the previous state.
### Update gate
The update gate controls how much of the new state is just a copy of the old one. It computes:
$$
g^{n}=\sigma(h^{n-1}W_{g}+x^{n}U_{g}+b_{g})
$$
### Candidate state
The candidate output state that is passed on is calculated as
$$
\tilde{h}=\tanh((h^{n-1}\odot r^{n})W_{h}+x^{n}U_{h}+b_{h})
$$
Note the usage of the reset gate here to control how much of $h^{n-1}$ is used.

### Output
The final output state is calculated as:
$$
h^{n}=g^{n} \odot \tilde{h}^{n}+(1-g^{n}) \odot  h^{n-1}
$$
Note how the update gate is used here to weight $\tilde{h}$ vs. $h^{n-1}$.