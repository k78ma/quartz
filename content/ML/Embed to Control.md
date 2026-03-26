---
title: Embed to Control
tags:
  - dl
date: 2025-12-03
aliases: embed to control
---
## Introduction
"World modeling" has become a woefully overloaded term; people use it to describe maps of the world and engines. In this post, we use the current popular usage of the term: learned dynamics models that predict a future state $x_{t+1}$ given the current state $x_{t}$ and an action $a_{t}$. Specifically, we will implement some tiny world models step-by-step to develop some intuition.

Why do we even care about world models? In robotics (or embodied intelligence, as the cool kids call it), we often need bespoke sensors to measure the state of the system at a given point in time. For example, the angle of a pendulum is typically measured using an encoder in an inverted pendulum balancing task, while a potentiometer and an encoder provide observability in a ball-and-beam system. The 

## Further Reading
- [Yann LeCun's definition of world model](https://www.linkedin.com/posts/yann-lecun_lots-of-confusion-about-what-a-world-model-activity-7165738293223931904-vdgR/)
- [What Is a World Model? | NVIDIA Glossary](https://www.nvidia.com/en-us/glossary/world-models/)
- [World Models | Rohit Bandaru](https://rohitbandaru.github.io/blog/World-Models/)
## Dataset
The robot dataset is generated using the `robot_data.py` script.

We



## Variational Autoencoders
**Autoencoders**. 

A cheap way to do efficient feature extraction on images is to use a convolutional architecture. Thus, we add some convolution blocks in the decoder and some de-convolution blocks in the decoder.