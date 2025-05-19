---
title: "<%tp.file.title%>"
tags: 
date: "<%tp.date.now()%>"
aliases: "<%tp.file.title.toLowerCase()%>"
---
To understand how lift force is generated on an airfoil or rotating object, we introduce the concept of circulation and its effect on the flow of air around the object.

![[Lift Force Circulation-20250519121317294.png]]

The circulation increases $V$ above the airfoil (lower pressure) and decreases $V$ below the airfoil (higher pressure), creating a pressure difference. This difference in velocity and pressure generates lift:
$$
F_{L} = \rho V\Gamma
$$
where $\Gamma$ is the **circulation** of the airfoil.

If we don't account for circulation and use only potential theory:

![[Lift Force Circulation-20250519121528425.png]]

- The streamlines are more symmetric.
- There is no lift because circulation is not considered.
- This is an idealized view where there is no boundary layer separation or vortex generation.

What if we apply both potential theory and circulation?

![[Lift Force Circulation-20250519121626422.png]]

- This simulates the real behavior of air around an airfoil.
- The addition of **circulation** accelerates the flow over the top and decelerates it on the bottom
- This matches real observations that we saw above.

Circulation is introduced in the form of vortex theory. As the airfoil moves through the fluid, it generates bound vortices that modify the flow. These vortices create regions of high velocity and low pressure above the airfoil and low velocity and high pressure below it. This pressure difference results in lift.

![[Lift Force Circulation-20250519121736360.png]]

- When an airfoil generates lift, it also induces trailing vortices that spiral off the wingtips. 
- This forms a vortex wake that trails behind the aircraft.
- The bound vortex (on the wing) and trailing vortices (in the wake) complete the circulation loop.
