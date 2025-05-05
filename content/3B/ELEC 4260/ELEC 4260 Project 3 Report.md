---
title: ELEC 4260 Project 3 Report
tags:
  - elec4260
date: 2025-05-02
aliases:
  - elec 4260 project 3 report
---
## Task 1 – Analytic Grasping
- Task 1 video: https://youtu.be/u2K_dRxwZqA

## Task 2 – PoseCNN
During a preliminary training run, I noticed that the model rapidly improved at the beginning but did not improve much after a few thousand iterations, getting stuck around a total loss of ~0.5. To deal with this, I added a learning rate scheduler to decrease the learning rate by a factor of 10 every epoch; this resulted in much lower loss.