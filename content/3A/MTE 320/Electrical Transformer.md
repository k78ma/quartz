---
title: Electrical Transformer
tags:
  - mte320
date: 2024-06-07
aliases:
  - electrical transformer
---
Transformers are electrical energy transfer devices.

![[Electrical Transformer.png|464]]

Transformers are high-efficiency devices. Typical values for efficiency range from 92%, for smaller units, to 99%, for larger units. The most common applications of transformers in power engineering are:
- Voltage level adjustment (step-up and step-down transformers)
- Voltage and current measurement
- Isolation for safety (isolation transformers)
- Impedance matching (maximum power transfer from the source to the load)

In [[MTE 320 - Actuators and Power Electronics|MTE 320]], transformer refers to line-frequency (50/60 Hz) transformer, even though most of the discussions are also valid for high-frequency transformers that are used in isolated power electronic converters.

## Simple Transformer
Below is a schematic for a simple transformer.

![[Electrical Transformer-1.png|564]]

The simple transformer is composed of two electrical circuits, called *primary* and *secondary*, linked through a [[Magnetic Circuit|magnetic circuit]]. 

The ferromagnetic core is made of laminations; the material is usually an alloy of silicon and iron. Increasing the silicon content reduces the [[Core Losses|core losses]], especially eddy current losses, but makes the core more brittle. The thickness of the laminations in the core of 60-Hz transformers is in the range of 0.01 to 0.025 inches. The laminated materials are made so that the iron crystals are co-oriented. This increases the permeability of the core and reduces the hysteresis loss.

When an AC voltage is applied to the primary winding of the transformer, the result is an AC current. The AC primary current $i_{1}$ sets up a time-varying magnetic flux $\phi$ in the core. The flux goes through the secondary winding of the transformer. According to [[Faraday’s Law]], an emf $e=N_{2}\; d\phi / dt$ will be induced in the secondary winding. This is known as *transformer action*. If a load is connected to the secondary terminals, a current $i_{2}$ will flow in the secondary winding and electric power will be transferred to the load. The direction of the current in the secondary winding is determined by Lenz’s law. The secondary current's direction is such that the flux produced by this current opposes the changes in the original flux with respect to time.