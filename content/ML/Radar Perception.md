---
title: Radar Perception
tags:
  - ml
date: 2024-02-20
aliases:
---
## Radar Intro
Radars operate by emitting and receiving electromagnetic pulses, following principles similar to sound wave reflection.
- Transmitter generates radio frequency pulses with high power
- Pulses are transmitted through medium (air) through antenna
- When object is reached, pulses echo from the transmission of radio frequency energy to this object
- A small portion of the reflected energy returns to the radar through the antenna and is directed to the receiver. 
- Finally, the receiver sends the energy to the signal processor to determine the direction, distance, and even speed of the object identified

Strengths:
- Long-range: hundreds of meters
- Robustness to weather and lighting conditions
- Can determine the position of obstacles invisible to the naked eye - or even to other sensors like cameras - due to distance, darkness, or weather
- Velocity measurement: Doppler effect can be used to measure relative velocity of objects
- Much cheaper than lidar

Weaknesses:
- Low resolution; hard to distinguish between closely-spaced objects and small objects
- Hard to determine shape of detected objects
- Radar signals can reflect off multiple surfaces before returning to the sensor, leading to multi-path interference

## Camera-Radar Fusion

### Why fuse?
- Radar doesn't allow for delineating shapes, but is robust to conditions. 
	- Radar provides data in amplitudes, ranges, and Doppler spectrum
- Cameras provide rich semantic data

### How to fuse?
- Point-wise addition (or average)
- Concatenation of feature maps
- Ensembles and MoE

### When to fuse?
- Neural networks represent and process features in a hierarchical manner throughout their different levels of layers.
- Initial layers process coarser representation of the input, thus having more detailed spatial information.
- Move further in architecture → feature maps lose spatial detail to gain semantic information
- In last layers, feature maps completely encapsulate semantics, but are limited in terms of spatial information.

#### Early Fusion
- Fuse input data or fuse features from the initial layers of a network
- Full exploration of raw data
- Low computation cost (network jointly processes the fused sensing modalities, so you don't need 2 networks)
- Sensitiveness to spatial-temporal misalignment due to calibration errors

#### Middle Fusion
- Feature-level fusion
- Fuse features from intermediate layers of the network
	- One-layer fusion, deep fusion, sort-cut fusion
- Good balance between preserving spatial information and taking advantage of learned features
- Drawback: Hard to find optimal fusion scheme for each particular network architecture

![[Radar Perception.png]]

#### Late Fusion
- Decision-level fusion
- Occurs in late step of networking processing, close to output
- Combines the outputs of domain-specific networks (experts) for the different sensing modalities.
- Main advantages relies on model flexibility, given that when a new sensing modality is introduced, only its expert network must be retrained. 
- Main drawbacks are the high costs in terms of computation and memory, as well as the discarding of possibly important features from intermediate layers.