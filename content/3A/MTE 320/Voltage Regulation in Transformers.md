---
title: Voltage Regulation in Transformers
tags:
  - mte320
date: 2024-06-23
aliases:
  - voltage regulation in transformers
---
The formula for voltage regulation in transformers is:
$$
VR=\frac{V_{NL}-V_{FL}}{V_{FL}}\times 100\%
$$
where NL and FL stand for no load and full load, respectively. When calculating voltage regulation of transformers, magnetizing branch is usually neglected. 

### Primary Side
Fig. 9-29 shows the equivalent circuit for the case where the resistances and inductances have been referred to the primary side, and the magnetizing branch has been neglected.

![[Voltage Regulation in Transformers.png]]

In this case, voltage regulation becomes:
$$
VR=\frac{V_{p}-aV_{s}}{aV_{s}}\times 100\%
$$
Note that at no-load, $aV_{s}=V_{p}$.

### Secondary Side
Fig. 9-30 shows the equivalent circuit for the case where the resistances and inductances have been referred to the secondary side and the magnetizing branch has been neglected.

![[Voltage Regulation in Transformers-1.png]]

In this case, voltage regulation becomes:
$$
VR = \frac{V_{p} / a-V_{s}}{V_{s}}\times 100\%
$$
Note that at no-load, $V_{s}=V_{p} / a$.

## Examples

![[MTE 320 Example 9-2.pdf]]

![[MTE 320 Example 9-3.pdf]]

- Example 9-3 is also relevant to [[Determining Transformer Equivalent Circuit Parameters]]