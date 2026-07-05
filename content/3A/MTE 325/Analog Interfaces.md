---
title: Analog Interfaces
tags:
  - mte325
date: 2024-06-30
aliases:
  - analog interfaces
---
Very few physical systems or phenomena are digital, which means we need to convert analog information to digital and back again when interacting with the outside world. 

![[Analog Systems.png|684]]

Example: Phone converts digital representation of caller's voice to an analog signal that can be processed by your ear. 
- First, the processing system takes the digital information and converts it to an analog voltage signal with an [[Digital to Analog Converter]] (DAC)
- Analog voltage signal drives the speaker to create an analog sound wave
- If you want to reply, microphone is used to convert the sound waves of your voice to an analog voltage signal, which is converted to digital values by an [[Analog to Digital Converter]] (ADC).

There are physical limitations of ADCs, which combined with the frequency of practical analog voltage signals, means an additional piece of hardware is needed. This hardware is called the [[Sample and Hold Circuits|sample and hold block]] and is used to make a clean conversion possible.