---
title: Commutator Brush Issues
tags:
  - mte320
date: 2024-07-13
aliases:
  - commutator brush issues
---
In [[DC Generator|DC generators]], the commutator rectifies the alternating voltage generated in the machine to a DC voltage at the generator output terminals. In [[DC Motor|DC motors]], the DC current from a source is inverted to an alternating current before being applied to the armature conductors.

The presence of brushes is considered a disadvantage; they have high maintenance requirements due to wear between brushes and commutator segments. This wear is accelerated by sparking at the brushes.

Sparking can be dangerous in some operating environments due to fire hazard. In these cases, we need to use totally enclosed DC machines, or avoid using DC machines altogether.

There is voltage drop associated with the brushes, which contributes to power loss in the presence of armature current. The voltage drop is almost constant over a wide range of armature current values and is normally assumed to be around 2V, if not otherwise stated. The power loss associated with the brush voltage drop is given by:
$$
P_{\text{brush drop loss}}=V_{\text{brush drop}}\times I_{a}
$$
Due to the problems with the brushes in DC machines, the industry has been shifting its attention from conventional DC motors towards brushless DC motors and AC motors. Thanks to the development of sophisticated control techniques, AC motors can be operated with the ease and controllability of DC motors, without having the problems associated with the brushes.