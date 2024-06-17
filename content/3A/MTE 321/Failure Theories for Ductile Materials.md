---
title: Failure Theories for Ductile Materials
tags:
  - mte321
date: 2024-06-16
aliases:
  - failure theories for ductile materials
---
Ductile materials have $\epsilon_{f}\geq 0.05$, such that the material has a minimum fracture strain of 0.05. Fracture strain is the strain at which a material ultimately fails or breaks.

Furthermore, we have $S_{yt}=S_{yc}=S_{y}$, where these are the compressive and tensile yield strengths of the material. This simplification is often done for ductile materials, but we can use [[Coulomb-Mohr Theory]] if it isn't true.

Applicable failure theories to determine **yield criteria**:
- [[Maximum Shear Stress Theory]]
	- Quick, easy, conservative
	- Useful for design purposes
- [[Distortion Energy Theory]]
	- Not as conservative, need to consider the $n$ value carefully
	- Useful when we want to learn why a part failed
- [[Coulomb-Mohr Theory]]
	- Useful when yield strengths are unequal in tension and compression
	- Magnesium alloys and gray cast irons