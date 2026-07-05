---
title: Motion Model
tags:
  - mte544
date: 2025-09-27
aliases: motion model
---
A motion model is a mathematical description of how a robot’s inputs (like wheel speeds or motor commands) translate into changes in its **state** (position and orientation) over time.

Given coordinate frames:
- Reference frame; $\{ s \}$ with axes $(X_{S}, Y_{S})$
- Moving frame; $\{ r \}$ with axes $(X_{R}, Y_{R})$

![[Motion Model-20250927142651770.png|243]]

## Main variables
Velocity variables (for a point in the body):
- $v$ – translational/linear velocity
- $\omega$ – rotation/angular velocity

Position variables:
- $x$ – horizontal position
- $y$ – vertical position
- $\theta$ – rotation angle

Different types of robot model describe relations between these variables.