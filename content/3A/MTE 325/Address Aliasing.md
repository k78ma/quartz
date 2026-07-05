---
title: Address Aliasing
tags:
  - mte325
date: 2024-06-09
aliases:
  - address aliasing
---
In addition to [[Device Addressing|address decoding]], there is also a trade-off to be made, known as **aliasing**. If no aliasing is used, all address lines must be checked.

Address aliasing is an optimization technique that allows additional logic to be removed from the system by only requiring a subset of the address lines to actually be checked when determining the target peripheral.

In the example below, the full address of `0x842` is checked when no aliasing is used. If aliasing allowed bits `10` and `11` to be ignored while still uniquely selecting the correct device, those lines no longer need to be checked. The result is that four addresses will now result in the chip select being asserted: `0x842`, as well as `0x802`, `0x882`, `0x8C2`.

For this to work, the three additional addresses must not be used by another device in the system. 

![[Address Aliasing.png]]

The number of aliases will be $2^{n-1}$, where $n$ is the number of aliased addresses. Subtracting 1 accounts for the fact that one of the addresses is the actual assigned address.

## Trade-Offs
A benefit of aliasing is a reduction in the required hardware, but it comes with the drawback that unused addresses could now select that device. Whether this is acceptable depends on the system.