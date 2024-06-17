---
title: Failure Theories for Brittle Materials
tags:
  - mte321
date: 2024-06-16
aliases:
  - failure theories for brittle materials
---
Brittle materials have $\epsilon_{f}< 0.05$, such that the material has a maximum fracture strain of 0.05. Fracture strain is the strain at which a material ultimately fails or breaks.

Instead of $S_{yt}=S_{yc}=S_{y}$ in the [[Failure Theories for Ductile Materials|ductile case]], we use $S_{ut}$ and $S_{uc}$, which are the ultimate tensile and compressive strengths. 

Applicable failure theories to determine **fracture criteria**:
- [[Maximum Shear Stress Theory]]
	- Quick, easy, conservative
	- Useful for design purposes
- [[Distortion Energy Theory]]
	- Not as conservative, need to consider the $n$ value carefully
	- Useful when we want to learn why a part failed
- [[Coulomb-Mohr Theory]]
	- Useful when yield strengths are unequal in tension and compression
	- Magnesium alloys and gray cast irons