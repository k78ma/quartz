---
title: Response of First-Order Systems
tags:
  - syde351
date: 2024-07-19
aliases:
  - response of first-order systems
---
We now examine the response of first-order systems. Let's use the system:
$$
m\dot{v}+cv=f(t)
$$
Many systems have first-order models with the same form as that of the system above, $a\dot{y}+by=f(t)$ or $\frac{a}{b}\dot{y}+y=\frac{1}{b}f(t)$.

>[!example]- Examples of First-Order Models
>![[Response of First-Order Systems.png]]

## Free Response
The **free response** or **zero input response** of the model is its solution in the absence of an input. It can be obtained by using the Laplace transform:
$$
m[sV(s)-v(0^{-})]+cV(s) =F(s)
$$
Then, since this is the free response, we have $f(t)=0$. This gives us:
$$
\begin{align}
m\dot{v}+cv & =0 \\[2ex] 
msV(s)-mv(0)+cV(s) & =0 \\[2ex] 
msV(s)+cV(s) & =mv(0)\\[2ex] 
V(s) & =\frac{mv(0)}{ms+c}=\frac{v(0)}{s+\frac{c}{m}}
\end{align}
$$
which gives:
$$
v(t)=v(0)e^{-\frac{c}{m}t}
$$
where $v(0)$ is the initial value of the response $v(t)$, and $m$ and $c$ are constants.
- When $c/m < 0$ the solution grows exponentially; this is the unstable case. 
- If $c/m = 0$, the model is neutrally stable, and $v(t) = v(0)$. 
- If $c/m$ is positive, the model is stable, and the solution decays exponentially.

For the stable case, we can introduce a time constant:
$$
\tau=\frac{m}{c}
$$
and re-write the equation above as:
$$
v(t)=v(0)e^{-t/\tau}
$$

![[Response of First-Order Systems-1.png|560]]

## Forced Response
In the forced response case, we have
$$
\begin{align}
msV(s)-mv(0)+cV(s) & =F(s) \\[2ex] 
V(s)(ms+c) & =F(s)+mv(0) \\[2ex]
V(s) & =\underbrace{ \frac{F(s)}{ms+c} }_{ \text{ZSR} }+\underbrace{ \frac{mv(0)}{ms+c} }_{ \text{ZIR} }
\end{align}
$$
where the ZSR is the zero-state response and ZIR is the zero-input response.

## Step Response
In the case of a step input, we have
$$
f(t)=Fu(t)
$$
Recall that $\mathcal{L}\{ u(t) \}=\frac{1}{s}$, so we have
$$
F(s)=\frac{F}{s}
$$
So we have:
$$
m[sV(s)-v(0)]+cV(s) =\frac{F}{s}
$$
where $F$ is the magnitude of the step input. 

Solving for $V(s)$:
$$
\begin{align}
V(s) & =\frac{mv(0)}{ms+c}+\frac{F}{s(ms+c)} \\[2ex]
	 & =\frac{v(0)}{s+c /m}+\frac{F}{c}\left( \frac{1}{s}-\frac{1}{s+c /m} \right)
\end{align}
$$
which in turn gives:
$$
\begin{align}
v(t) & =\underbrace{ v(0)e^{-\frac{c}{m}t} }_{ \text{Free response} }+\underbrace{ \frac{F}{c}\left( 1-e^{-\frac{c}{m}t} \right) }_{ \text{Forced response} } \\
\end{align}
$$
![[Response of First-Order Systems-2.png]]

### Transient vs Steady-State Response
We can also arrange the terms above to get:
$$
v(t)=\underbrace{ \left( v(0)-\frac{F}{c} \right)e^{- \frac{c}{m}t} }_{ \text{Transient response} }+\underbrace{ \quad\frac{F}{c} \quad}_{ \text{SS response} }
$$
The transient response term eventually disappears as $t$ increases, while the steady-state (SS) response term stays.

![[Response of First-Order Systems-3.png]]

- In the above, $v_{ss}=\frac{F}{C}$.
- Basically what the above graph tells us no matter the starting $v(0)$, it will eventually converge to $v(t)=v_{ss}$ because of the transient term disappearing.