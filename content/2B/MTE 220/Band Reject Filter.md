---
title: Band Reject Filter
tags:
  - mte220
date: 2023-12-03
aliases:
  - Notch Filter
  - notch
---
The bandpass filter blocks a certain range of frequencies. This is often for removing noise at a known frequency.

A band reject filter can be made by putting a [[Highpass Filter]] and [[Low-pass Filter]] in parallel:

![[Band Reject Filter.png|411]]

Examples: Switching regulator noise, clock frequencies, PWM PRF