---
title: EMF Generation with Relative Motion between Conductor and Magnetic Field
tags:
  - mte320
date: 2024-06-05
aliases:
  - emf generation with relative motion between conductor and magnetic field
---
In electric machines, emf is generated based on the relative motion involving conductors and a magnetic field.

![[Pasted image 20240605195903.png|484]]

## Maximum EMF
In most cases, the induced emf, $\vec{e}_{\text{induced}}$, in a conductor of length $l$ moving at velocity $\vec{v}$ in the presence of a magnetic field of flux density $\vec{B}$, is expressed by the following vector relation:
$$
\vec{e}_{\text{induced}}=(\vec{v}\times \vec{B})\cdot \vec{l}
$$
In order to maximize the magnitude of the induced emf, for a given conductor length, conductor velocity and magnetic flux density, the structure of electric machines are designed such that 
$$
\begin{align}
\vec{v} \perp \vec{B}  & \quad \longrightarrow \quad v\times B\times \sin(90\degree)=vB \\
\end{align}
$$
and $(\vec{v}\times \vec{B})$ collinear with $\vec{l}$, so that
$$ 
| \vec{e}_{\text{induced}} |=| (\vec{v}\times \vec{B})\cdot \vec{l} |=vB\times l\times \cos(0)=vBl
$$

## Direction
As the conductor moves, it cuts the lines of magnetic force, which is essential in the process of induction of emf. 
- $\vec{e}_{\text{induced}}=(\vec{v}\times \vec{B})\cdot \vec{l}$ gives the magnitude of the induced voltage as well as its polarity. 
- The vector $\vec{e}_{\text{induced}}$ points to the positive polarity of the induced voltage (or the direction of the current that would be produced upon closing the circuit via a load).
- If $\vec{v}$ and $\vec{B}$ are collinear (conductor moves in the direction of $\vec{B}$ or opposite to $\vec{B}$), or if $v=0$, **no emf is induced**. 
- The magnitude of the induced voltage is proportional to the length of the conductor. That’s why in electric machines the conductor is in the form of several turns of wire to increase the conductor length, and thus, the induced voltage.

![[Relative Motion with Conductor and Magnetic Field.png|584]]

### Right-hand Rule
The direction of the vector $\vec{e}_{\text{induced}}$ can be  found by using right-hand fingers. If you point your right-hand fingers to the direction of $\vec{v}$ and wrap your fingers towards the direction of $\vec{B}$, your thumb will be pointing to $e_{\text{induced}}$. 

