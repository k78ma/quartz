---
title: Shaft Design
tags:
  - mte321
date: 2024-06-25
aliases:
  - shaft design
---
A *shaft* is a rotating member, usually of circular cross section, used to transmit power or motion. It provides the axis of rotation, or oscillation, of elements such as gears, pulleys, flywheels, cranks, sprockets, and the like and controls the geometry of their motion. 
- An *axle* is a non-rotating member that carries no torque and is used to support rotating wheels, pulleys, and the like. The automotive axle is not a true axle; the term is a carryover from the horse-and-buggy era, when the wheels rotated on non-rotating members. A non-rotating axle can readily be designed and analyzed as a static beam, and will not warrant the special attention given in this chapter to the rotating shafts, which are subject to fatigue loading.

Important factors when designing a shaft:
- [[Shaft Materials|Material selection]]
- Geometric layout
- Stress and strength
	- Static strength
	- Fatigue strength
- Deflection and rigidity
	- Bending deflection
	- Torsional deflection
	- Slope at bearings and shaft-supported elements
	- Shear deflection due to transverse loading of short shafts
- Vibration due to natural frequency

## General Process for Stress Analysis
1. Identify critical sections
2. Analyze stresses in each critical section for:
	- Static failure
	- Dynamic/fatigue failure
3. Need to consider stress concentration factors and general shaft dimensions in addition to loading 

## Deflection Analysis
For deflection analysis, we need all shaft geometry and loading to be defined, not just the geometry at a critical section.

Deflection analysis typically occurs after stress analysis, and is done using software. Manual analysis can be time consuming and, for the superposition method, is limited to loading scenarios found in tables.