---
title: Infrared Sensors
tags:
  - mte544
date: 2025-11-01
aliases: infrared sensors
---
Infrared sensor emit an infrared light beam and measure the angle of the reflected to triangulate the distance to a surface. 

![[Infrared Sensors-20251101134621775.png]]

The reflected light is captured by an image sensor such as a position-sensitive detector (PSD). Because the detector is offset from the emitter, the angle at which the light returns changes with distance. Using simple triangulation, the sensor converts that angle into distance.

IR uses a specific wavelength (850-900nm) and receivers are tuned to detect only that wavelength, so IR is known to be robust to noise from ambient light. However, sunlight contains the IR range so it's not as good outdoors.

Features:
- Low cost
- Limited range (3cm - 1.5 m)
- Interfere with electrically conductive materials like fluorescent light, etc.