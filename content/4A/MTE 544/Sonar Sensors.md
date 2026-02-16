---
title: Sonar Sensors
tags:
  - mte544
date: 2025-11-01
aliases:
  - sonar sensors
  - sonar
---
Sonar makes use of acoustic signals (usually ultrasound), measuring distance using sound waves.
- A speaker/transmitter emits/receives an acoustic wave (~40 kHz)
- The time of return can be translated into distance using the speed of sound ($344 \text{ m/s}$)

Configurations:
- Bistatic: Separate transducer for transmit/receive
- Monostatic: One unit for both transmit and receive

![[Sonar Sensors-20251101133422392.png|323]]

Sonar performance depends heavily on environment, such as object shape, surface material, and environmental variables.

Pros:
- Good for short distances
- Good for indoor
- Very low cost
- Suffers from noise (false echoes, missed readings, etc.)

To use sonar for mapping, the sonar data needs to be swept (rotated) to map the environment, which requires a rotating servo. Alternatively, one can also use an array of sonar.