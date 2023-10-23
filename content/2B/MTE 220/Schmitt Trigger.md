---
title: Schmitt Trigger
tags:
  - mte220
date: 2023-10-22
---
who the fuck is schmitt and why he triggered???

Schmitt Triggers are comparators with positive [[Feedback|feedback]], such that it makes the output "stick to one extreme or the other".

### Inverting Schmitt Trigger

Let's say we have an **inverting Schmitt trigger like this:**

![[Schmitt Trigger.png|285]]

Without $R_{3}$, this is just a comparator. All we're doing is generated $V_{ref}$ with a voltage divider. So first, we will ignore $R_{3}$, which makes it just a comparator with:
$$
V_{ref}= \frac{5 \cdot R_{2}}{R_{1}+R_{2}}
$$
This also means that $R_{1} = R_{2}$ would give $V_{ref}= 2.5\text{ V}$. This is a comparator in an inverting or "less than" configuration, shown below.

![[Schmitt Trigger-1.png|336]]

Since this is positive feedback, we want it to be more difficult to go snap away from a given state (fridge door magnet analogy). Note how the blue lines in the diagram below both go further before switching states:
- $V_{in} > 3.33\text{ V} \to V_{out} = 0$ 
- $V_{in} < 1.67\text{ V} \to V_{out} = 5$

![[Schmitt Trigger-2.png|327]]

This "stickiness" is called **hysteresis**, which makes systems less sensitive in general.

At the circuit level, this is happening by changing $V_{ref}$ using $R_{3}$ based on the output. There are two cases:

**Case 1:** $V_{out} = 0 \text{ V}$

![[Schmitt Trigger-3.png|322]]

Note how $R_{3}$ is connected to the output of the op-amp. Since the output is $0$, $R_{3}$ is basically connected to ground. This drags $V_{ref}$ down.
$$
V_{ref} = 5 \cdot \frac{(R_{2} \parallel R_{3})}{R_{1} + R_{2} \parallel R_{3}}
$$

**Case 2:** $V_{out} = 5 \text{ V}$

![[Schmitt Trigger-4.png|331]]

Once again, $R_{3}$ is connected to the op-amp output, which is 5V this time. This changes the configuration of the voltage divider in the circuit, giving:
$$
V_{ref} = 5 \cdot \frac{R_{2}}{R_{1} \parallel R_{3} + R_{2}}
$$
This pushes $V_{ref}$ up.