---
title: Single-Ended and Differential Signalling
tags:
  - mte220
date: 2023-11-18
aliases:
---
Signals must be sent from sensors to circuits, within circuits, and from circuits to actuators and indicators. 

#### Single-Ended Signalling
![[Single-Ended and Differential Signalling.png|357]]

The simplest say to send a signal is as a ground-referenced voltage, $v_{s}$, called single-ended signaling. 
- The signal picks up noise, $v_{n}$, from various sources as it traverses from transmitter to receiver. 
- Therefore, the receiver $v_{r}$ recovers both the signal and the noise. 
- Filtering may help to eliminate some noise sources, especially if the energies are in different parts of the frequency spectrum than the signal. However, adding gain to the receiver also amplifies the noise.

#### Differential Signalling
![[Single-Ended and Differential Signaling'.png|468]]

Sending $v_{s}$ as a differential signal dramatically improves the ability to reject noise. The signal is sent as positive and negative halves, $+v_{s}/2$ and $-v_{s}/2$, called differential signalling. 
- The two conductors that carry the signal are kept very close together, sometimes twisted around one another, so they experience nearly the same noise, $v_{n}$. 
- The noise is called common-mode noise since it is common to both signals. The two signals are subtracted on the receiver side, restoring vs to its total value and eliminating $v_{n}$.

The receiver applies gain while subtracting the two received signals, which we have seen in the op-amp difference amplifier. Ideally, this gain is equal for both received signals and results in $v_{r}=A_{d}(v_{r+}-v_{r-})$, where $A_{d}$ is called differential gain. 

However, the gain applied to each signal may not be equal due to mismatch. Consider the case when $A_{+}\neq A_{-}$:
$$
\begin{align}
v_{r}  & = A_{+}v_{r+} - A_{-}v_{r-} \\
	 & = A_{+}(v_{s} / 2 + v_{n})-A_{-}(-v_{s} / 2 + v_{n}) \\[2ex] 
	 & = \left( \frac{A_{+}+A_{-}}{2} \right)v_{s} + (A_{+} - A_{-})v_{n} \\[3ex] 
	 & = A_{d}v_{s} + A_{cm}v_{n}
\end{align}
$$

- The differential gain, $A_{d}$, is applied to the wanted signal, and is the average of the gains applied to the positive and negative signal pathways. 
- The common-mode gain, $A_{cm}$, is applied to the unwanted noise, and is the mismatch in the gains applied to the positive and negative signal pathways. 
- Thus, the goal is to receive the differential signal with the highest quality amplifier necessary for gain matching.

The Common-Mode Rejection Ratio, CMRR, characterizes how well an amplifier eliminates the unwanted common-mode noise to the wanted differential gain:
$$
\text{CMRR} = \frac{A_{d}}{A_{cm}}
$$
It is usually expressed in dB and can be thought of as “gain you want” divided by “gain you don’t want”.