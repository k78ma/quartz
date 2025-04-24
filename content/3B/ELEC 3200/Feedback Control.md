---
title: Feedback Control
tags:
  - elec3200
date: 2025-04-24
aliases:
  - feedback control
---
## Open-Loop Control vs. Feedback Control
Recall that the basic objectives of control are to:
- Track a given reference
- Reject disturbances
- Meet performance specs

Open-loop control:

![[Feedback Control-20250424164111604.png|393]]


- Cheaper/easier to implement (no sensor) required
- Does not destabilize the system. This means that if both $K$ and $P$ are stable (all poles are in the open left-half plane),
    $$
    \frac{Y}{R}=KP
    $$
    is also stable, and we have
    $$
    \{ \text{poles of } KP\}=\{ \text{poles of } K\} \cup \{ \text{poles of } P \}
    $$

Feedback control:

![[Feedback Control-20250424164612847.png|481]]

- More difficult/expensive to implement (requires a sensor and an information path from controller to actuator)
- May destabilize the system as
    $$
    \frac{Y}{R}=\frac{KP}{1+KP}
    $$
    has new poles, which may be unstable
- However, feedback control is the only way to stabilize an unstable plant.
- Reduces steady-state error to disturbances
- Reduces steady-state sensitivity to model uncertainty (parameter variations)
- Improves time response

