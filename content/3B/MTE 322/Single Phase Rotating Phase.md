---
title: Single Phase Rotating Phase
tags:
  - mte322
date: 2024-10-19
aliases:
  - single phase rotating phase
---
What if we want to create a rotating magnetic field for an [[Induction Motor|induction motor]] with a single-phase AC supply?

Unlike the 3-phase system, a single-phase AC current produces a pulsating magnetic field rather than a rotating one. 

![[Single Phase Rotating Phase.png|612]]

The diagram on the top shows how a single-phase magnetic field oscillates back and forth rather than rotating. The bottom graphs represent the stator magnetic field waveform (red) and its interaction with the rotor (black dots).

Since the magnetic field only pulsates, it cannot self-start the motor, as there is no initial rotating magnetic field to induce motion in the rotor.

## Capacitor Start Induction Motor
To capacitor start induction motor enables self-start by introducing an auxiliary coil with a phase lag (e.g. a capacitor). This phase lag effectively splits the single-phase supply into two phase-displaced currents, thus mimicking a 2-phase motor and generating a rotating magnetic field.

![[Single Phase Rotating Phase-1.png|640]]

## Shaded Pole Induction Motor
The shaded pole induction motor has a main pole with a small shaded pole segment. The shaded pole is created by placing a small copper ring as a secondary coil. 

The shading coil around the shaded pole creates a delayed magnetic flux in that region, causing the overall magnetic field to sweep across the pole face. This sweeping action produces a weak rotating magnetic field, which induces currents in the rotor, initiating rotation.

![[Single Phase Rotating Phase-2.png|632]]
