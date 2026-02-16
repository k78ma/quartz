---
title: Feature Extraction
tags:
  - mte544
date: 2025-11-01
aliases: feature extraction
---
Once we have a sensor image and have optionally filtered it (e.g., smoothed, edges detected), we need to extract useful information from the image. This is where feature extraction happens. Feature extraction or scene interpretation is required for more sophisticated, long-term perceptual tasks

![[Feature Extraction-20251101013734630.png|621]]


> [!definition] Definition: Feature
> Recognizable structure of elements in the environment.


Low-level features:
- First-stage abstraction of raw data (pixels), can be computed directly from pixel patterns
- Geometric primitives such as lines/points, corners, circles, polygons, etc.
- Require no understanding of object identity; just geometric, not semantic

![[Feature Extraction-20251101014144908.png|456]]

High-level features:
- Maximum abstraction from the raw data
- Objects: doors, tables, or trash cans
- Require another layer of algorithms, e.g. segment/classification
- Also called “semantic features”

![[Feature Extraction-20251101014156449.png|455]]

The term **local feature** is also used to mean a small pattern in the image that is distinctive, repeatable, and robust. Some examples could be small image patches, edges, or points. These are also called "interest points", "interest regions", or "keypoints".

Note that features must be distinctive and robustly detectable
- Invariant to changes in conditions, e.g. view point, illumination, scale, etc