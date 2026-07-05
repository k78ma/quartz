---
title: Peak Detector
tags:
  - mte220
date: 2023-10-25
---
Circuit:
![[Peak Detector-1.png|245]]

Any time $V_{in} > V_{out}$, the diode conducts. When $V_{in} < V_{out}$, the diode is off. $V_{out}$ stays constant. Basically, $V_{out}$ will stay at the highest $V_{in}$ value that it's seen until it sees a higher value.

![[Peak Detector.png|568]]

We can reset it by adding a switch:
![[Peak Detector-2.png|251]]

There will be some leakage, so it won't hold the value perfectly:
![[Peak Detector-3.png|532]]