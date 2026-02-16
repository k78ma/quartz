---
title: Avoiding Cycles and Repeated States
tags:
  - ece457a
date: 2026-02-15
aliases: avoiding cycles and repeated states
---
In increasing order of effectiveness in reducing the size of the state space:
- Do not return to the state you just came from (no backstepping)
- Do not create paths with cycles in them
- Do not generate any state that was ever created before

However, not that this list is also increasing with computational cost.

The net effect depends on the frequency of loops in the state space.