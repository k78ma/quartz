---
title: "Robot Joints"
tag: robotics
date: 2023-06-30
alias:
---
Every joint connects exactly two links

![[Robotics/attachments/robot joints.png|500]]

One DOF:
- Revolute joints (R) — basically a hinge allowing rotational motion about the joint axis
- Prismatic joints (P) — sliding/linear joint, allows translational/rectilinear motion
- Helical joints (H) — screw joints, allows rotation and translation about a screw axis

Multiple DOF:
- Cylindrical joints (C) — 2 DOF, allows independent translations and rotational movement about a single fixed joint axis
- Universal joint (U) — 2  DOF, a pair of revolute joints arranged so that they are orthogonal, allowing rotation in two directions
- Spherical joint (S) — 3 DOF, ball-and-socket joint

There are a couple of ways to think about the purpose of joints:
- They can be viewed as providing freedoms to allow one rigid body to more relative to another
- They can be viewed as providing constraints on the possible motions of the two rigid bodies it connects

>[!example] Example: Different Ways of Thinking about Joints
 > - A revolute joint can be viewed as allowing one freedom of motion between two rigid bodies. 
 > - Alternatively, a revolute joint can be viewed as providing five constraints on motion of one rigid body relative to the other
 > This ties into [[Grubler’s Formula|Grubler’s Formula]]