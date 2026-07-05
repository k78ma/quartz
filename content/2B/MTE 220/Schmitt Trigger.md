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

Without $R_{3}$, this is just a comparator. All we're doing is generating $V_{ref}$ with a voltage divider. So first, we will ignore $R_{3}$, which makes it just a comparator with:
$$
V_{ref}= \frac{5 \cdot R_{2}}{R_{1}+R_{2}}
$$
This also means that $R_{1} = R_{2}$ would give $V_{ref}= 2.5\text{ V}$. This is a comparator in an inverting or "less than" configuration, shown below.

![[Schmitt Trigger-1.png|336]]

Since this is positive feedback, we want it to be more difficult to go snap away from a given state (fridge door magnet analogy). Note how the blue lines in the diagram below both go further before switching states:
- $V_{in} > 3.33\text{ V} \to V_{out} = 0$ 
- $V_{in} < 1.67\text{ V} \to V_{out} = 5$

![[Schmitt Trigger-2.png|327]]

This "stickiness" is called **hysteresis**, which makes systems less sensitive in general by reducing noisiness ("bouncing") at the state transition between 0 and 1. Thus, the action done by a Schmitt trigger is sometimes called "debouncing".

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

We can control the width of the hysteresis by changing $R_{3}$; as $R_{3}$ goes down, the amount of hysteresis goes up.

#### Example
See [[Schmitt Trigger Example]] for an example of an inverting Schmitt Trigger.

### Non-inverting Schmitt Trigger
A non-inverting Schmitt Trigger "drags" $V_{in}$ up or down instead of $V_{ref}$, as the non-inverting case does. It forms a voltage divider to $0$ or $V_{DD}$ (equivalent to $V_{out}$), so $V_{in}$ has to work extra hard to exceed $V_{ref}$. 

![[Schmitt Trigger-5.png|448]]

Governing equations:
$$
\begin{align}
V_{1\to0} = \left( 1+\frac{R_{i}}{R_{f}} \right)V_{ref} - \left( \frac{R_{i}}{R_{f}} \right)V_{DD} \\[3ex] 
V_{0\to1} = \left( 1+\frac{R_{i}}{R_{f}} \right)V_{ref} \\[3ex] 
\frac{R_{i}}{R_{f}} = \frac{V_{0 \to 1}-V_{1 \to 0}}{V_{DD}} \\[3ex] 
\frac{R_{i}}{R_{f}} = \frac{V_{0\to1}}{\left( \frac{V_{0\to1}-V_{1 \to 0}}{V_{DD}} \right) + 1} = \frac{V_{0 \to 1}}{\frac{R_{i}}{R_{f}} + 1}
\end{align}
$$
Below is the graph of non-inverting Schmitt Trigger transitions. The transition happens right when $V_{+} = V_{-}$ for both cases (think in terms of basic op-amp terms).

![[Schmitt Trigger-6.png|376]]

#### Example 
Let's say we have $V_{DD} = 5\text{ V}$ and want:
- $V_{1 \to 0} = 2\text{ V}$
- $V_{0 \to 1} = 3 \text{ V}$

Then, we would have:
$$
\begin{align}
\frac{R_{i}}{R_{f}} = \frac{3-2}{5} = \frac{1}{5}\\[3ex] 
V_{ref} = \frac{3}{\frac{1}{5}+1} = 2.5\text{V}
\end{align}
$$
