---
title: Counter Torque and EMF
tags:
  - mte320
date: 2024-07-08
aliases:
  - counter torque and emf
---
## Counter Torque in DC generators
In a DC generator, a torque is applied by a prime mover to turn the rotor, leading to generation of a DC voltage at the terminals of the machine. When the generator is loaded, such that an electrical load is connected across machine terminals, a current will flow into the load through the armature conductors. 

In the presence of a magnetic field, a force and eventually a torque will be developed and exerted on the current-carrying conductors. This torque will oppose the original torque, i.e., the torque applied by the prime mover, and tends to slow the machine down. This torque is called **counter torque** $\tau_{c}$ and is given by
$$
\tau_{c} =K\phi I_{a}
$$
The larger the electrical load connected to the machine’s terminals, the larger the counter torque produced.

## Counter EMF in DC motors
Similarly, in a DC motor, an emf is applied by an external source to the armature winding. This results in a current and a torque, resulting in the rotation of the rotor. When rotor conductors are moved in the magnetic field of the stator, an emf will be induced in them. This emf will oppose the original emf applied by the external source, lowering the current. This emf is called **counter emf** $E_{c}$ and is given by
$$
E_{c}=K\phi \omega_{m} = K'\phi n
$$
The larger the mechanical load connected to the machine's shaft, the larger the counter emf produced.