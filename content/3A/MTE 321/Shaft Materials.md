---
title: Shaft Materials
tags:
  - mte321
date: 2024-06-25
aliases:
  - shaft materials
---
Deflection is not affected by strength, but rather by stiffness as represented by the modulus of elasticity. This is essentially constant for all steels, so deflection will not be impacted significantly by decision between steel types.
- Rigidity is given by $EI$, where $E$ is the modulus of elasticity and $I$ is the [[Second Moment of Area|second moment of area]].
- For steels, $E$ is essentially constant, so rigidity changes mostly by $I$, which is in turn dependent on the cross section of the shaft.

Strength to resist loading stresses will vary with steel choice. This will impact static and dynamic failure. Fatigue failure will reduce as strength increases but only to a certain point, where endurance limit and notch sensitivity start to counteract the improvements.

## Steel Choices
- AISI 1020-1050 steels – cold-drawn or hot-rolled
	- Commonly used, inexpensive
	- If diameter is less than 3 in, cold-drawn is typically used
- AISI 1340-50, 3140–50, 4140, 4340, 5140, and 8650
	- Used when higher strength is needed
- Carburizing grades of AISI 1020, 4320, 4820 and 8620
	- Surface hardened
	- Shafts usually don’t need to be surface hardened unless they serve as the actual journal of a bearing surface.

A good practice is to start with AISI 1020-1050 for the first time through the design calculations. If strength considerations turn out to dominate over deflection, then a higher strength material should be tried, allowing the shaft sizes to be reduced until excess deflection becomes an issue.

## Production Considerations
In approaching material selection, the amount to be produced is a salient factor. 
- For low production, turning is the usual primary shaping process. An economic viewpoint may require removing the least material. 
- High production may permit a volume-conservative shaping method (hot or cold forming, casting), and minimum material in the shaft can become a design goal. 
- Cast iron may be specified if the production quantity is high, and the gears are to be integrally cast with the shaft.