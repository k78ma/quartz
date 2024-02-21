---
title: Radar Perception
tags:
  - ml
date: 2024-02-20
aliases:
---
### Radar Intro
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

