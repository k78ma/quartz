---
title: Human Visual System
tags:
  - amath449
date: 2026-03-12
aliases: human visual system
---
Most of the networks we have looked at assume an all-to-all connectivity between populations of neurons, like between layers in a network. But that’s not the way human brains are wired; if every one of your 86 billion neurons was connected to every other neuron, our heads would have to be much bigger.

## Layers
The human visual layer is roughly arranged into a hierarchy of layers.

![[Human Visual System-1773361701426.webp]]

Visual information flows from the retina through successive processing stages in the lateral geniculate nucleus (LGN) and primary visual cortex (V1), onward to higher areas such as V2, V4, and IT. Ultimately, these layers of processing allow your brain to form coherent perceptions (e.g., recognizing a cat).

## Topology
The vision system is topological: neurons close to each other in the primary visual cortex process parts of the visual scene that are close to each other.

![[Human Visual System-1773361786891.webp|374]]

This dot in the visual field only excites a small patch of neurons in V1. Each neuron in V1 is only activated by a small patch in the visual field.

![[Human Visual System-1773361820704.webp|513]]

Conversely, each patch in the visual field excites only a small neighborhood of neurons in V1.

This topological mapping between the visual field and the surface of the cortex is called a *retinotopic mapping*.

Moreover, neurons in V1 project to the next layer, V2, and again, the connections are retinotopically local. The “footprint” of a region in the visual field gets larger as the data progresses up the layers. By the time signals reach IT (Inferior Temporal cortex), the neurons may be influenced by the entire visual field.

## Filter bank
In the lower levels of the hierarchy, the neurons seem to respond to standard patterns of input.

Each little square corresponds to one V1 neuron and shows the pattern that most activates that neuron – its *receptive field*.

![[Human Visual System-1773446427478.webp]]

Each column of squares is a different neuron’s preferred stimulus. Notice that both the macaque and the neural network learn a diverse set of oriented patterns, reflecting the system’s attempt to efficiently encode natural images.