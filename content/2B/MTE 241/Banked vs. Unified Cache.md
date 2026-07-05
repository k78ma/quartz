---
title: Banked vs. Unified Cache
tags:
  - mte241
date: 2023-09-28
---
Caches can be split ("or" banked) into pieces so that they only store instructions or data. This makes sense because data and instructions might go through different pathways (depends on processor architecture). 

Thus, using a single unified cache might introduce performance losses as the controller must first determine if the access is for instructions or data, and then route the information to the appropriate locations.

Strategies for fastest (or only) cache:
- Bank it – optimize slightly by separating into 2 sections
- Only allow one - store only one type of instruction and require the other type to come from main memory, big advantage of reducing cost. Cortex M4 does this.