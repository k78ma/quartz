---
title: Transient Heat Transfer
tags:
  - mte309
date: 2024-07-12
aliases:
  - transient heat transfer
  - lumped capacitance method
---
In transient problems, the temperature of a body changes over time, unlike steady-state. To simplify this analysis, it's useful to treat the body as a **lump** that has one uniform temperature at a given time.

![[Transient Heat Transfer.png|324]]

For the lumped capacitance above, we have:
- Uniform temperature $T$ at each time
- Transient (not steady-state)
- Closed system
- No work, $\dot{W}=0$
- No energy generation
- Constant properties $k,\rho,c_{p}$

Then, our energy balance is:
$$
\begin{align}
\frac{dE}{dt} & =\dot{Q}-\dot{W} \\[2ex] 
mc_{p} \, \frac{dT}{dt} & =hA_{s}(T_{\infty}-T(t))\\[2ex] 
\rho Vc_{p} \, \frac{dT}{dt}  +hA_{s}(T(t)-T_{\infty}) & =0
\end{align}
$$
Now, let $\theta=T(t)-T_{\infty}$. This gives:
$$
\begin{align}
\frac{d\theta}{dt}+\frac{hA_{s}}{pVc_{p}}\theta & =0 \\[2ex]
\frac{d\theta}{dt}+b\theta & =0
\end{align}
$$
where $b=hA_{s} / pVc_{p}$.

The generation solution to this in the form $\theta=C_{1}e^{-bt}$. The boundary condition we apply to solve this is
$$
\theta_{0}=T_{0}-T_{\infty} \quad \text{ at }t=0
$$
which gives:
$$
\begin{align}
C_{1}=\theta_{0} \\
\theta=\theta_{0} & e^{-bt}
\end{align}
$$
Then, we have:
$$
\boxed{
\begin{align*}
\frac{T(t)-T_{\infty}}{T_{0}-T_{\infty}} & =e^{-bt} \quad \text{ where }\quad b =\frac{hA_{s}}{pVc_{p}}=\frac{1}{\tau} \\[2ex] 
	  & =e^{-t/\tau}
\end{align*}
}
$$
where $\tau$ is a time constant.

Thus, this lumped capacitance model gives **exponential decay in body temperature**.

![[Transient Heat Transfer-1.png]]

## Criteria for Lumped Capacitance Method
For the lumped capacitance method above to be valid, thermal diffusion (conductivity within the ball) must be much faster than convection outside the ball. This can be characterized by the Biot number:
$$
\begin{align}
\text{Bi} & =\frac{\text{Conduction resistance within body}}{\text{Convection resistance at surface of body}}\ll 1 \\[2ex]
	\text{Bi} & =\frac{L/kA_{s}}{1/hA_{s}}=\frac{hL}{k}\ll1
\end{align}
$$
In general, we want:
$$
\text{Bi}=\frac{hL_{c}}{k}\leq 0.1
$$
where $L_{c}=\frac{V}{A_{s}}$ is the **characteristic length**. For various shapes:
$$
\begin{align}
\text{Sphere:}  & \quad L_{c}= \frac{\frac{4}{3}\pi r^{3}}{4\pi r^{2}}= \frac{r}{3} \\[2ex] 
\text{Cylinder:}  & \quad L_{c}=\frac{r}{2} \\[2ex] 
\text{Wall:} & \quad L_{c}=\frac{t}{2}
\end{align}
$$
### Examples

> [!example]- Example 1
> ![[Transient Heat Transfer-2.png]]
>
First, we want to check that $\text{Bi}\leq 0.1$:
>$$
>\begin{align}
>\text{Bi}_{\text{sphere}}=\frac{hL_{c}}{k} & =\frac{h}{k}\left( \frac{r}{3} \right) \\[2ex] 
>	 & =\frac{(1000 \;[\text{W/}\text{m}^{2}\text{K}])(0.001 \;[\text{m}])}{3(50 \;[\text{W/}\text{mK}])} \\[2ex] 
>	 & =0.066 \leq 0.1
>\end{align}
>$$
>Thus, lumped capacitance method is valid.
>
>We have:
>
>$$
>\begin{align}
>\frac{T(t)-T_{\infty}}{(T_{0}-T_{\infty})}& =\exp\left( -\frac{hA_{s}}{pVc_{p}}t \right) \\[2ex] 
>\frac{100  -25\degree \text{C}}{1200 -25 \degree \text{C}} & =\exp\left( \frac{-1000\;\left[ \frac{\text{J}}{\text{s}\,\text{m}^{2}\text{K}} \right]3t}{8000 \; [\text{kg/}\text{m}^{3}](0.01 \;[\text{m}])(502 [\text{J/}\text{kg/}\text{K}])} \right) \\[2ex] 
>0.0638 & =\exp(-7.47\;[\text{s}^{-1}]\;t) \\[2ex] 
>t & =\frac{\ln(0.0638)}{-7.47 [\text{s}^{-1}]} \\[2ex]
>	 & =0.368 \text{ s}
>\end{align}
>$$

> [!example]- Example 2
> ![[MTE 309 LE 25-1.pdf]]

## Lumped Capacitance as a Thermal Circuit
Lumped capacitances are similar to [[RC Circuit Behaviour|RC circuits]]. We have:
$$
\frac{\theta(t)}{\theta_{0}}=e^{-t/\tau}
$$
where
$$
\tau=\left( \frac{1}{hA_{s}} \right)(pVc_{p})=R_{\text{th}}C_{\text{th}}
$$
where $R_{th}$ is the [[Thermal Resistance|convection resistance]] and $C_{\text{th}}$ is the thermal capacitance. Convection resistance is used because the object has high thermal conductivity, so heat transfer is limited by the rate at which heat can be transferred to or from the surrounding fluid, which is a convection process.

![[Transient Heat Transfer-3.png]]