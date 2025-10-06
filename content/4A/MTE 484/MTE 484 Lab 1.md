---
title: MTE 484 Lab 1
tags:
  - mte484
date: 2025-09-29
aliases: mte 484 lab 1
---
## Part c

Angle = 0 → Potentiometer = 535
- Offset = 535?

Angle = pi/4 → Potentiometer = 482

Angle = -pi/4 → Potentiometer = 595

-0.01482 * reading + 7.93

$$
\begin{align}
m  & = \frac{y_2 - y_1}{x_2 - x_1} = \frac{-\frac{\pi}{4} - \frac{\pi}{4}}{588 - 482} = -0.01482 \\[2ex]
0 & =m(535) + \text{offset} \quad \Longrightarrow \quad \text{offset}  = -m(535) = 7.93 \\[2ex] 
\therefore \text{rad} & = -0.01482 \cdot \text{reading} + 7.93
\end{align}
$$

## Part d - stiction
Positive direction: 0.185
Negative direction: 0.182


use $T_p$ somewhere?
$$
\begin{align}
T_{ry}(s) & =\frac{C(s)G(s)}{1+C(s)G(s)} \\[2ex]
 & =\frac{\dfrac{K_pK_1}{s(\tau s+1)}}{1+\dfrac{K_pK_1}{s(\tau s+1)}} \\[2ex] 
&=\frac{K_pK_1}{s(\tau s+1)+K_pK_1} \\[2ex] 
 & =\frac{K_pK_1}{\tau s^2+s+K_pK_{1}}\\[2ex] 
& =\frac{K_pK_1/\tau}{s^2+\frac{1}{\tau}s+\frac{K_pK_1}{\tau}}
\end{align}
$$

$$
\frac{\frac{K_{p}K_{1}}{\tau}}{s^{2}+\frac{1}{\tau}s+\frac{K_{p}K_{1}}{\tau}} = \frac{\omega_{n}^{2}}{s^{2}+2\zeta \omega_{n}s + \omega_{n}^{2}}
$$

First use the overshoot measurement to find
$$
\zeta = - - \frac{\ln(\text{\%OS} / 100)}{\sqrt{ \pi^{2}+\ln(\text{\%OS} / 100))^{2} }}
$$
Use $T_{s}$ and $\zeta$ to find $\omega_{n}$:
$$
\begin{align}
T_{p}  & = \frac{\pi}{\omega_{n}\sqrt{ 1-\zeta^{2} }} \\[2ex] 
\omega_{n}  & = \frac{\pi}{T_{p}\sqrt{ 1-\zeta^{2} }}
\end{align}
$$

Use $\zeta$ and $\omega_{n}$ to find $\tau$:
$$
\begin{align}
\frac{1}{\tau}  & = 2\zeta \omega_{n} \\
\tau & = \frac{1}{2\zeta \omega_{n}}
\end{align}$$

Find $K_{1}$ with $C_{1}, \tau, \omega_{n}$:
$$
\begin{align}
\frac{K_{p}K_{1}}{\tau} = \omega_{n}^{2} \\[2ex]
K_{1} = \frac{\omega_{n}^{2}\tau}{K_{p}}
\end{align}
$$


Motor input, current angle (rad), Error









===== K13.5_0to25.txt =====
$$
OS = 4.88\% \quad T_p = 110.0 \,\text{ms}
$$
$$
\zeta = -\frac{\ln(\%OS/100)}{\sqrt{\pi^2 + \ln^2(\%OS/100)}} = -\frac{\ln(0.0488)}{\sqrt{\pi^2 + (\ln(0.0488))^2}} = 0.6929
$$
$$
\omega_n = \frac{\pi}{T_p \sqrt{1-\zeta^2}} = \frac{\pi}{0.1100 \cdot \sqrt{1-(0.6929)^2}} = 39.6107 \,\text{rad/s}
$$
$$
\tau = \frac{1}{2\zeta \omega_n} = \frac{1}{2 \cdot 0.6929 \cdot 39.6107} = 0.0182 \,\text{s}
$$
$$
K_1 = \frac{\omega_n^2 \tau}{C_1} = \frac{(39.6107)^2 \cdot 0.0182}{-13.5000} = -2.1172 \,\frac{\text{rad}}{\text{V·s}}
$$

===== K14_0to25.txt =====
$$
OS = 6.19\% \quad T_p = 90.0 \,\text{ms}
$$
$$
\zeta = -\frac{\ln(\%OS/100)}{\sqrt{\pi^2 + \ln^2(\%OS/100)}} = -\frac{\ln(0.0619)}{\sqrt{\pi^2 + (\ln(0.0619))^2}} = 0.6630
$$
$$
\omega_n = \frac{\pi}{T_p \sqrt{1-\zeta^2}} = \frac{\pi}{0.0900 \cdot \sqrt{1-(0.6630)^2}} = 46.6297 \,\text{rad/s}
$$
$$
\tau = \frac{1}{2\zeta \omega_n} = \frac{1}{2 \cdot 0.6630 \cdot 46.6297} = 0.0162 \,\text{s}
$$
$$
K_1 = \frac{\omega_n^2 \tau}{C_1} = \frac{(46.6297)^2 \cdot 0.0162}{-14.0000} = -2.5117 \,\frac{\text{rad}}{\text{V·s}}
$$

===== K15_0to20.txt =====
$$
OS = 7.28\% \quad T_p = 125.0 \,\text{ms}
$$
$$
\zeta = -\frac{\ln(\%OS/100)}{\sqrt{\pi^2 + \ln^2(\%OS/100)}} = -\frac{\ln(0.0728)}{\sqrt{\pi^2 + (\ln(0.0728))^2}} = 0.6405
$$
$$
\omega_n = \frac{\pi}{T_p \sqrt{1-\zeta^2}} = \frac{\pi}{0.1250 \cdot \sqrt{1-(0.6405)^2}} = 32.7251 \,\text{rad/s}
$$
$$
\tau = \frac{1}{2\zeta \omega_n} = \frac{1}{2 \cdot 0.6405 \cdot 32.7251} = 0.0239 \,\text{s}
$$
$$
K_1 = \frac{\omega_n^2 \tau}{C_1} = \frac{(32.7251)^2 \cdot 0.0239}{-15.0000} = -1.7032 \,\frac{\text{rad}}{\text{V·s}}
$$

===== K17_0to20.txt =====
$$
OS = 9.82\% \quad T_p = 90.0 \,\text{ms}
$$
$$
\zeta = -\frac{\ln(\%OS/100)}{\sqrt{\pi^2 + \ln^2(\%OS/100)}} = -\frac{\ln(0.0982)}{\sqrt{\pi^2 + (\ln(0.0982))^2}} = 0.5942
$$
$$
\omega_n = \frac{\pi}{T_p \sqrt{1-\zeta^2}} = \frac{\pi}{0.0900 \cdot \sqrt{1-(0.5942)^2}} = 43.4001 \,\text{rad/s}
$$
$$
\tau = \frac{1}{2\zeta \omega_n} = \frac{1}{2 \cdot 0.5942 \cdot 43.4001} = 0.0194 \,\text{s}
$$
$$
K_1 = \frac{\omega_n^2 \tau}{C_1} = \frac{(43.4001)^2 \cdot 0.0194}{-17.0000} = -2.1481 \,\frac{\text{rad}}{\text{V·s}}
$$

===== K21_0to15.txt =====
$$
OS = 17.14\% \quad T_p = 85.0 \,\text{ms}
$$
$$
\zeta = -\frac{\ln(\%OS/100)}{\sqrt{\pi^2 + \ln^2(\%OS/100)}} = -\frac{\ln(0.1714)}{\sqrt{\pi^2 + (\ln(0.1714))^2}} = 0.4896
$$
$$
\omega_n = \frac{\pi}{T_p \sqrt{1-\zeta^2}} = \frac{\pi}{0.0850 \cdot \sqrt{1-(0.4896)^2}} = 42.3870 \,\text{rad/s}
$$
$$
\tau = \frac{1}{2\zeta \omega_n} = \frac{1}{2 \cdot 0.4896 \cdot 42.3870} = 0.0241 \,\text{s}
$$
$$
K_1 = \frac{\omega_n^2 \tau}{C_1} = \frac{(42.3870)^2 \cdot 0.0241}{-21.0000} = -2.0614 \,\frac{\text{rad}}{\text{V·s}}
$$

===== K23_0to15.txt =====
$$
OS = 12.05\% \quad T_p = 70.0 \,\text{ms}
$$
$$
\zeta = -\frac{\ln(\%OS/100)}{\sqrt{\pi^2 + \ln^2(\%OS/100)}} = -\frac{\ln(0.1205)}{\sqrt{\pi^2 + (\ln(0.1205))^2}} = 0.5587
$$
$$
\omega_n = \frac{\pi}{T_p \sqrt{1-\zeta^2}} = \frac{\pi}{0.0700 \cdot \sqrt{1-(0.5587)^2}} = 54.1148 \,\text{rad/s}
$$
$$
\tau = \frac{1}{2\zeta \omega_n} = \frac{1}{2 \cdot 0.5587 \cdot 54.1148} = 0.0165 \,\text{s}
$$
$$
K_1 = \frac{\omega_n^2 \tau}{C_1} = \frac{(54.1148)^2 \cdot 0.0165}{-23.0000} = -2.1055 \,\frac{\text{rad}}{\text{V·s}}
$$

