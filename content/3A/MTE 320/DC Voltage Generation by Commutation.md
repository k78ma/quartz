---
title: DC Voltage Generation by Commutation
tags:
  - mte320
date: 2024-06-28
aliases:
  - DC voltage generation by commutation
---
The emf generated in the loop of a [[Simple Generator|simple generator]] is inherently alternating, as previously shown. In a DC generator, it is required to produce a DC voltage at the output terminals. The AC-to-DC conversion is performed via the mechanism of commutation. 

The figure below shows the simple generator, where two semicircular conductive pieces called commutator segments have been attached to the two leads of the loop. These two segments turn with the loop. The commutator segments rub against two stationary carbon brushes to which the terminals of the generator are connected.

![[DC Voltage Generation by Commutation.png]]

As the loop rotates, for the first $180\degree$, when loop sides *bc* and *de* are under the south and north poles:
- The brush connected to the positive output terminal is in contact with the commutator segment attached to loop side *bc*
- The brush connected to the negative output terminal is in contact with the commutator segment attached to loop side *de*.

As the loop rotates and the loop sides leave the pole faces, the brushes short circuit the commutator segments, and the emf induced in the loop passes through zero.

During the next $180\degree$, when the loop sides *bc* and *de* are under the north and south poles:
- The brush connected to the positive output terminal will come in contact with the commutator segment attached to the loop side *de*.
- The brush connected to the negative output terminal will come in contact with the commutator segment attached to the loop side *bc*.

Therefore, as the loop rotates, the output voltage will assume the waveform shown below. This is a rectified version of the [[Simple Generator|simple generator with no commutation]].

![[DC Voltage Generation by Commutation-1.png]]