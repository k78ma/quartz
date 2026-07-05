---
title: Notch Sensitivity
tags:
  - mte321
date: 2024-06-22
aliases:
  - notch sensitivity
---
The relationship between $K_{t}$ for static loading and $K_{f}$ for dynamic loading is defined by **notch sensitivity**, $q$. This value ranges from 0 (not sensitive) to 1 (full notch sensitivity).

- For normal stress:
$$
K_{f}=1+q(K_{t}-1)
$$
- For shear stress:
$$
K_{fs}=1+q_{s}(K_{ts}-1)
$$

Notch sensitivity is typically determined experimentally.  

![[Notch Sensitivity.png]]

It has been shown that notch sensitivity can be described as a function of the notch radius and a material characteristic length dimension $a$. This characteristic length is several times the size of a single microstructure grain, and can be thought of as near the size of the material's natural internal imperfections. It is often shown in the form of the *Neuber constant*, $\sqrt{ a }$, such that:
$$
q=\frac{1}{1+\frac{\sqrt{ a }}{\sqrt{ r }}} \quad \longrightarrow \quad K_{f}=1+\frac{K_{t}-1}{1+(\sqrt{ a } / \sqrt{ r })}
$$
where $r$ is the notch radius.

The Neuber constant is experimentally determined for each material. For steels, it correlates with the ultimate strength, and can be represented with the following curve-fit equations in both U.S. customary and SI units.

![[Notch Sensitivity-1.png]]