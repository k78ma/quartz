---
title: Projected Light Depth Cameras
tags:
  - mte544
date: 2025-10-31
aliases: projected light depth cameras
---
These are a family of depth cameras using infra-red images, comprising of a RGB camera, IR emitter and IR camera. IR cameras (structural or dot patterns) invisible to human eyes are projected to objects. The reflected image is captured by the IR camera to retrieve depth information (for each pixel).

![[Projected Light Depth Cameras-20251031201900920.png]]

Pros:
- Works even on blank walls because the camera adds its own texture, unlike [[Stereo Cameras|stereo cameras]]. 
- Produces high-quality indoor depth with dense coverage.
- Good at close range.

Cons:
- Does not work well in bright sunlight (pattern washes out).
- Limited range (usually < 5 meters).
- More complex hardware and slightly higher cost