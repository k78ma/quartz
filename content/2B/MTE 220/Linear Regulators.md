---
title: Linear Regulators
tags:
  - mte220
date: 2023-11-13
aliases:
  - buck converter
---
Linear regulators are a type of DC/DC voltage regulators. Generally, Linear Regulators are less complex, smaller, and cheaper with low ripple, but are inefficient and have high heat waste. These are often called buck converters.

Linear regulators are often called an "LDO": Low Drop-Out. This means that $V_{out}$ stays fairly constant as $I_{out}$ changes.

**Linear regulators are always step-down** – high DC voltage in, low DC voltage out. These are also called buck converters.

Negative feedback is used to check $V_{out}$ against the desired $V_{ref}$. Here is an example circuit using a transistor in an analog way (not just switch on/off).
![[Linear Regulators.png|320]]

Some other circuits/models:
![[Linear Regulators-1.png|492]]