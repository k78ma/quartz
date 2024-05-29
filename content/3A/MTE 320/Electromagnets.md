---
title: Electromagnets
tags:
  - mte320
date: 2024-05-26
aliases:
  - electromagnets
  - solenoid
---
## Magnetic Field of Electromagnets
An electromagnet (solenoid) is composed of a cylindrical core of ferromagnetic material with N turns of wire wrapped around it, carrying a current $I$. 

![[Magnetic Field of a Solenoid.png|500]]

The below figure shows the longitudinal cross section of the core and the direction of magnetic field around each piece of wire perpendicular to the core cross section on either side of the core.

![[Magnetic Field of a Solenoid-1.png|524]]

As seen in Fig. 5-5, the magnetic fields produced by adjacent pieces of wire combine to make a net magnetic field inside and outside the core, very similar to that in a permanent magnet.
- Note that the magnetic field between adjacent turns of wire is weakened due to cancellations.

The lines of magnetic force (magnetic flux) leave the N pole and enter the S pole. The direction of the net magnetic field produced by a solenoid (N turns of wire wrapped around a magnetic core) can be determined by Ampere’s right hand rule in the following way:
- If you wrap your right-hand fingers around a coil of wire in the direction of current, your thumb will be pointing in the direction of magnetic field (North pole).

## Properties of Electromagnets
- An electromagnet can be thought of as a source of magnetic energy, whose value and direction can be controlled according to the magnitude and direction of the current supplied to the coil. 
- By changing the direction of the current, the positions of the N and S poles of the electromagnet will be interchanged. 
- By bringing the current down to zero, the core excitation will be lost, and the magnetic field is expected to vanish. 
- Depending on the characteristics of the core material, the stored magnetic energy in a core can follow the changes in the current applied to the coil very quickly (in soft magnetic materials) or very slowly (in hard magnetic materials). 
- Some very hard magnetic materials, once magnetized, keep their magnetism over a very long period. This kind of material is used for producing permanent magnets, where maintaining magnetism is desirable. 
	- In electric machines (except in permanent magnet machines) and transformers, soft magnetic materials are used, as magnetic field is expected to quickly follow the changes in the current applied to the windings.

## Applications of Electromagnets
Electromagnets find applications in relays and contactors. 

A relay mechanism is composed of a magnetic circuit with a movable arm. When a current is applied to the coil, the core gets magnetized, and the movable arm is absorbed by the stationary part. The magnetic force that makes this happen can be expressed in terms of the magnetic flux density ($B$), contact area ($A$), and permeability of air ($\mu_{0}$) as:
$$
F_{\text{magnetic}}=\frac{B^{2}A}{2\mu_{0}}
$$
As a result of movement of the movable arm, normally open contacts will be closed to initiate specific actions, while normally closed contact will be opened to stop previously on-going actions. The spring mechanism brings the movable arm back to the original position once the excitation is removed.

![[Electromagnets.png|496]]

Another application for electromagnets is lifting metal parts and picking up scrap metal. Upon magnetizing the core by applying a current to the coil, the metal parts and scrap metal will be absorbed by the electromagnet under the influence of the magnetic force produced. When the parts have been moved to the desired location, the core is de-magnetized by removing the excitation and the metal parts are released.

![[Electromagnets-1.png|500]]