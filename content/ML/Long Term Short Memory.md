---
title: Long Term Short Memory
tags:
  - ml
date: 2023-10-11
aliases:
  - LSTM
---
- [Alex Colah’s classic blog on LSTMs](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)

When I read words, I don't think from scratch but understand each word based on your understanding of previous words. Traditional neural networks can't do this; they cannot use its reasoning about previous events in the film to inform later ones. 

>[!info]- Motivation: RNNs and why they fail
>[[Recurrent Neural Networks]] were made to address this by looping/chaining output from previous states to serve as input for the current state. The appeal of this is the idea that they can connect previous information to the present task, such as using previous video frames to inform the understanding of the present frame. Sometimes, recent information is good enough, like trying to predict the last word of "the clouds are in the *sky*", where no further context is needed.
>
>![[LSTM (Long Term Short Memory).png|398]]
>
> However, as context gets longer, RNNs begin to struggle, like mentioning that "I grew up in Finland" and then later mentioning that "I speak Finnish". Recent information suggests that the next word is probably a language but the context of Finland, which might be further back, is required to determine what language it is.
>
>![[LSTM (Long Term Short Memory)-1.png|472]]
>
>While RNNs are theoretically capable of handling these long-term dependencies, they don't seem to be able to learn them due to the [[Vanishing Gradient Problem]].

## LSTM
LSTMs are a special type of [[Recurrent Neural Networks|RNN]], designed for learning long term dependencies. All RNNs have the form of a chain of repeating modules of neural network. In standard neural networks, this repeating module will have a simple structure such as a single $\tanh$ layer:

![[simple rnn.png|488]]

LSTMs have this same chain structure but the repeating module has a different structure. Instead of a single neural network layer, there are four that interact with each other.

![[Long Term Short Memory.png|484]]
![[notation.png|484]]

In the above diagram
- Each line carries an entire vector, from the output of one node to the input of others.
- Pink circles are pointwise operations, like vector addition
- Yellow boxes are learned NN layers
- Lines merging denote concatenation
- Line forking denotes copying a vector to different locations.

### Core Idea: Cell State
The key to LSTMs is the cell state, the horizontal line running through the top of the diagram. It's like a conveyor belt running straight down the whole chain, with only some minor linear interactions. Information can easily just flow along unchanged.

![[cellstate.png|372]]

The LSTM does have the ability to add/remove information to the cell state, regulated by structures called gates. **Gates** optionally let information through, composed out of a sigmoid neural net layer and a pointwise multiplication system. The LSTM has 3 of these gates to protect and control the cell state.

![[sigmoid.png|111]]

- [[Sigmoid]] layer: outputs numbers between $0$ and $1$, describing how much of each component should be let through. $0$ means let nothing through, $1$ means let everything through.

### LSTM Walkthrough

#### Forget gate
First, we decide what information to throw about from the cell state. This decision is made by a sigmoid layer called the "forget gate layer". It looks at $h_{t-1}$ and $x_{t}$, and outputs a number between $0$ and $1$ for each number in the cell state $C_{{t-1}}$.

For a language model trying to predict the next word based on all the previous ones, the cell state might include the gender of the present subject, so that the correct pronouns are used. When we see a new subject, we want to forget the gender of the old subject.

![[Long Term Short Memory-1.png]]

#### Input to Cell State
The next step is to decide what information we're going to store in the cell state.
1. A sigmoid layer called the **input gate layer** decides which values we'll update.
2. A $\tanh$ layer then creates a vector of new candidates, $\tilde{C}_{t}$, that could be added to the state.
In the next step, we'll combine these two to create an update to the state.

In the example of a language model, we'd want to add the gender of the new subject to the cell state, to replace the old one we're forgetting.
![[input.png]]

#### Cell state update
Here, the old cell state, $C_{t-1}$, is updated into the new cell state, $C_{t}$. The previous steps already decided what to do, we just need to actually do it.

- We multiply the old state by $f_{t}$, forgetting the things we decided to forget earlier.
- We add $i_{t} * \tilde{C}_{t}$. This is the new candidate value, scaled by how much we decided to update each state value.

In the case of the language model, this is where we would actually drop the information about the old subject's gender and add the new information, as we decided in previous steps.

![[Long Term Short Memory-2.png]]

#### Output
Finally, the outputs are decided – basically a filtered version of our cell state.
- First, a sigmoid layer decides which parts of the cell state we're going to output.
- Then, the cell state is put through $\tanh$ to push the values to be between $-1$ and $1$ and multiply it by the output of the sigmoid gate, so that we can only output the parts we decided to.

For the language model example, since it just saw a subject, it might want to output information relevant to a verb, in case that's what's coming next. For example, it might output whether the subject is singular or plural, so that we know what form a verb should be conjugated into if that's what follows next.

![[output.png]]

### Variants on LSTM
- [[Peephole LSTM]]
- [[Coupled LSTM]]
- [[Gated Recurrent Unit]]