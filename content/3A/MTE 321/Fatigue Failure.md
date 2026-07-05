---
title: Fatigue Failure
tags:
  - mte321
date: 2024-06-17
aliases:
  - fatigue failure
---
Fatigue failure is due to crack nucleation and propagation. A fatigue crack will initiate at a location that experiences repeated applications of locally high stress (and thus high strain). This is often at a discontinuity, such as:
- Geometric changes due to key ways and holes
- Manufacturing imperfections such as stamp marks and scratches
- Composition of the material itself as processed by rolling, forging, casting, heat, inclusions of foreign material, and voids
## Stages of Fatigue Failure
- **Stage I:** Initiation of micro-crack due to cyclic plastic deformation
- **Stage 2:** Progresses to macro-crack that repeatedly opens and closes, creating bands called beach marks.
- **Stage 3:** Crack has propagated far enough that remaining material is insufficient to carry the load, and fails by simple ultimate failure.

### Crack Nucleation
Crack nucleation occurs in the presence of localized plastic strain. This is due to the breaking of atomic bonds by the movement of dislocations, allowing atoms in crystal planes to slip past each other. Continued cyclic loading of sufficient level eventually causes the persistent slip bands to slide back and forth with respect to one another, leaving tiny steps in the surface that act as stress concentrations and are prone to nucleating a micro-crack.

![[Fatigue Failure.png]]

### Crack Propagation
After the micro-crack nucleates, it begins stage I crack growth by progressively breaking the bonds between slip planes across a single grain.

![[Fatigue Failure-1.png|540]]

1. Stage I: Crack growth (shear mode)
	- Continued cycling progressively breaks bonds between slip planes across a single grain.
	- The growth rate is very slow, on the order of $1 \text{ nm}$ per cycle.
	- At the grain boundary, the crack may slow or halt.
	- Eventually, the crack propagates into the next grain, especially if the grain is preferentially oriented with shear planes near $45\degree$ from the loading direction.
2. Stage II: Crack growth (tensile mode)
	- When the crack growth has grown across approximately 3 to 10 grains, it is sufficiently large to form a stress concentration at its tip, that forms a tensile plastic zone.
	- Several microcracks in near vicinity may join, increasing the size of the tensile plastic zone.
	- The crack is now vulnerable to being "opened" by tensile normal stress.

The crack nucleation and growth as a portion of total fatigue life is shown.
- At high stress levels, a crack initiates quickly, and most of the fatigue life is growing a crack (modeled by methods of fracture mechanics)
- At lower stress levels, a large fraction of the fatigue life is spent to nucleate a crack, followed by quick crack growth.

![[Fatigue Failure-2.png]]

## High-cycle vs. Low-cycle Fatigue
High-cycle fatigue:
- Relatively low cyclic loads with mostly elastic stresses and strains
- Long lives ($>10^{4}$)

Low-cycle fatigue:
- Relatively high cyclic loads with mostly plastic stresses and strains
- Short lives