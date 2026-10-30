---
title: Deep Q-Networks
tags:
  - rl
date: 2026-08-27
aliases:
  - deep Q-networks
  - DQN
---
Deep networks are ideally suited to making predictions from a high-dimensional state space, so they are a natural choice for the model in [[Fitted Q-Learning|fitted Q-learning]]. In principle, they could take both state and action as input and predict the values, but in practice, the network takes only the state and simultaneously predicts the values for each action.

The *Deep Q-Network* was a breakthrough reinforcement learning architecture that exploited deep learning to learn to play Atari games.

![[Deep Q-Networks-1787890404321.webp]]

- The observed data comprises of $220 \times 160$ images with 128 possible colors at each pixel. This was reshaped to size $84\times 84$, and only the brightness value was retained.
- Unfortunately, the full state is not observable from the single frame. For example, the velocity of game objects is unknown. To help resolve this problem, the network ingests the last four frames at each timestep to form $\mathbf{s}_{t}$. It maps these frames through 3 convolutional layers followed by a fully connected layer to predict the value of every action.

![[Deep Q-Networks-1787890429534.webp]]

Several modifications were made to the standard training procedure. First, the rewards (which were driven by the score in the game) were clipped to -1 for a negative change and a +1 for a positive change. This compensates for the wide variation in scores between different games and allows the same learning rate to be used.

Second, the system exploited *experience replay*. Rather than update the network based on the tuple $\langle \mathbf{s}_{t}, a_{t}, r_{t+1}, \mathbf{s}_{t+1} \rangle$ at the current step or with a batch of the last $I$ tuples, all recent tuples were stored in a buffer. This buffer was sampled randomly to generate a batch at each step. This approach reuses data samples many times and reduces correlations between the samples in the batch that arise due to the similarity of adjacent frames.

Finally, the issue of convergence in fitted Q-Networks was tackled by fixing the target parameters to values $\phi^{-}$ and only updating them periodically. This gives the update:
$$
\phi \,\, \leftarrow \,\, \phi + \alpha \Big ( r[\mathbf{s}_{t}, a_{t}] + \gamma \cdot \underset{a}{\operatorname{max}} \big [ q[\mathbf{s}_{t+1}, a, \phi^{-}] \big] -q[\mathbf{s}_{t}, a_{t}, \phi] \Big) \frac{ \partial q[\mathbf{s}_{t}, a_{t}, \phi] }{ \partial \phi } 
$$
Now the network no longer chases a moving target and is less prone to oscillation.

Using these and other heuristics with an $\epsilon$-greedy policy, DQN performed at a level comparable to a professional game tester.