---
title: EmerNeRF
tags:
  - ml
date: 2024-01-31
aliases:
---
EmerNERF aims to representing and reconstructing dynamic scenes (4D = 3D + time).

Features:
- Decouples static and dynamic scene components
- Estimates 3D scene flows, use them to aggregate temporally-displaced features

Method:
- High-level: Builds a hybrid static-dynamic world representation via a density-regularized objective, generating density for dynamic objects only as necessary (i.e., when points intersect dynamic objects).
- Predic