---
title: Extended Surfaces
tags:
  - mte309
date: 2024-07-05
aliases:
  - extended surfaces
  - fin
  - fins
---
Recall that:
$$
\dot{Q}_{\text{conv}}=\bar{h}A(T_{s}-T_{\infty})
$$
At times, we would like to increase the rate of heat transfer, $\dot{Q}$, without increasing $\Delta T$ or $h$. To do this, we increase the surface area by attaching to the surface extended surfaces called **fins** made of highly conductive materials such as aluminum.

![[Extended Surfaces.png]]

We assume:
- Steady operation with no heat generation in the fin
- Thermal conductivity $k$ of the material remains constant
- Convection heat transfer coefficient $h$ is constant and uniform over the surface of the fin

## Fin Equation
Consider a volume element of a fin at location $x$ having a length of $\Delta x$, a cross-section area $A_{c}$, and a perimeter of $p$.

![[Extended Surfaces-1.png]]

Under steady conditions, the energy balance of this volume element can be expressed as:
$$
\begin{align}
\cancel{ \frac{dE}{dt} } & =\dot{E}_{\text{in}}-\dot{E}_{\text{out}}+\cancel{ \dot{E}_{\text{gen}} }-\cancel{ \dot{E}_{\text{consumed}} }\\[2ex] 
\dot{E}_{\text{in}} & =\dot{E}_{\text{out}} \\[2ex] 
\dot{Q}_{\text{cond},x} & =\dot{Q}_{\text{cond},x+\Delta x}+\dot{Q}_{\text{conv}}
\end{align}
$$
The second term on the right side, heat transfer from convection, can be written as:
$$
\dot{Q}_{\text{conv}}=h\underbrace{ (p \; \Delta x) }_{ \text{Area} }(T(x)-T_{\infty})
$$
For conduction, we can write a Taylor series expansion to relate $\dot{Q}_{\text{cond},x}$ and $\dot{Q}_{\text{cond},x+\Delta x}$. Omitting the $\text{cond}$ subscript for clarity, we have:
$$
\dot{Q}_{x+\Delta x}\approx \dot{Q}_{x}+\frac{d\dot{Q}_{x}}{dx}\Delta x
$$
Combining, we have:
$$
\begin{align}
\dot{Q}_{\text{cond},x} & =\dot{Q}_{\text{cond},x+\Delta x}+\dot{Q}_{\text{conv}} \\[2ex] 
\dot{Q}_{x}  & = \dot{Q}_{x}+\frac{d\dot{Q}_{x}}{dx}\Delta x + h(p \;\Delta x)(T(x)-T_{\infty}) \\[2ex] 
\end{align}
$$
Removing $\dot{Q}_{x}$ from both sides gives:
$$
\frac{d\dot{Q}_{x}}{dx}\cancel{ \Delta x }  + h(p \,\cancel{ \Delta x })(T(x)-T_{\infty})  = 0
$$
From [[Conduction|Fourier's law of heat conduction]], we have $\dot{Q}_{x}=-kA_{c} \frac{dT}{dx}$. Substituting this in, we have:
$$
\frac{d}{dx}\left( -kA_{c} \frac{dT}{dx} \right)+hp(T(x)-T_{\infty})=0
$$
For constant cross-sectional area and constant $k$, this becomes:
$$
\boxed{
\frac{d^{2}T}{dx^{2}}-\frac{hp}{kA_{c}}(T-T_{\infty})=0
}
$$

This can be written as:
$$
\frac{d^{2}\theta}{dx^{2}}-m^{2}\theta=0
$$
where $\theta=T-T_{\infty}$, and
$$
m=\frac{hp}{k\mathcal{A}_{c}}
$$

## Fin Equation Solutions
The above is a linear, homogeneous, second-order differential equation with constant coefficients. The general solution is:
$$
\theta(x)=C_{1}e^{mx}+C_{2}e^{-mx}
$$
We determine $C_{1}$ and $C_{2}$ based on various boundary conditions.

It should be noted that the plate to which the fins are attached is normally known in advance. Thus, at the fin base, we have a specified temperature boundary expressed as:
$$
\theta(0)=\theta_{b}=T_{b}-T_{\infty}
$$
At the fin tip, we have several possibilities, including:
- Very long fins (idealized as infinite long)
- Adiabatic fin tip
- Specified temperature $T$ at fin tip
- Convection at fin tip

With this, we can determine a temperature distribution for the fin:

![[Extended Surfaces-2.png]]

In the example above, we have a very long fin, where there is an exponential decay of temperature as distance from the fin base increases.
### Very Long Fin
For a very long fin, the temperature of the fin at the fin tip approaches the environment temperature $T_{\infty}$, and thus $\theta=T-T_{\infty}$ approaches zero:
$$
\theta(L)=T(L)-T_{\infty}=0 \quad \text{as} \quad L\to \infty
$$
Thus, we have:
- General solution: $\theta(x)=C_{1}e^{mx}+C_{2}e^{-mx}$
- Boundary condition 1: $\theta(0)=\theta_{B}=C_{1}+C_{2}$
- Boundary condition 2: $\theta(L)=0=\lim_{ x \to \infty }C_{1}e^{mx}+C_{2}e^{-mx}$

This is satisfied by:
$$
\theta(x)=C_{2}e^{-mx}=\theta_{b}e^{-mx}
$$
The variation of temperature along the fin can then be expressed as:
$$
\frac{T(x)-T\infty}{T_{b}-T_{\infty}}=e^{-mx}=e^{-x\sqrt{ hp / kA_{c} }}
$$
The steady rate of heat transfer from the entire fin is:
$$
\dot{Q}_{\text{long fin}}=-kA_{c} \frac{dT}{dx}\Bigg|_{x=0}=\sqrt{ hpkA_{c} }(T_{b}-T_{\infty})
$$
### Adiabatic Fin Tip
A more realistic situation is for heat transfer from the fin tip to be negligible, since the heat transfer from the fin is proportional to the fin area. This boundary condition can be expressed as:
$$
\frac{d\theta}{dx}\Bigg|_{x=L}=0
$$
This can be solved to obtain:
$$
\frac{T(x)-T\infty}{T_{b}-T_{\infty}}=\frac{\cosh m(L-x)}{\cosh mL}
$$
The rate of heat transfer from the fin in this case is:
$$
\dot{Q}_{\text{adiabatic tip}}=-kA_{c} \frac{dT}{dx}\Bigg|_{x=0}=\sqrt{ hpkA_{c} }(T_{b}-T_{\infty})\tanh mL
$$
### Specific Temperature at Fin Tip
In this case, the temperature at the end of the fin is fixed at a specified temperature $T_{L}$, such that:
$$
\theta(L)=T_{L}-T_{\infty}
$$
This can be solved to get:
$$
\frac{T(x)-T\infty}{T_{b}-T_{\infty}}=\frac{[(T_{L}-T_{\infty}) / (T_{b}-T_{\infty})]\sinh mx+\sinh m(L-x)}{\sinh mL}
$$
The rate of heat transfer for this case is:
$$
\begin{align*}
\dot{Q}_{\text{specified temp.}} & =-kA_{c} \frac{dT}{dx}\Bigg|_{x=0}\\[2ex] 
 & =\sqrt{ hpkA_{c} }(T_{b}-T_{\infty}) \frac{\cosh mL-[(T_{L}-T_{\infty} / (T_{b}-T_{\infty})]}{\sinh mL}
\end{align*}
$$

### Convection from Fin Tip
In practice, the fin tips are exposed to the surroundings, so the boundary conditions should include convection. This temperature distribution can be written as:
$$
\frac{T(x)-T\infty}{T_{b}-T_{\infty}}=\frac{\cosh m(L-x)+(h /mk)\sinh m(L-x)}{\cosh mL+(h / mk)\sinh mL}
$$
The rate of heat transfer for this case is:
$$
\begin{align}
\dot{Q}_{\text{specified temp.}} & =-kA_{c} \frac{dT}{dx}\Bigg|_{x=0}\\[2ex] 
 & =\sqrt{ hpkA_{c} }(T_{b}-T_{\infty}) \frac{\sinh mL+(h / mk)\cosh mL}{\cosh mL+(h / mk)\sinh mL}
\end{align}
$$
## Fin Temperature Distributions
The conduction and convection in a fin occurs as a function of location $x$. Thus, we cannot use the standard [[Thermal Resistance|thermal resistance]] equations for conduction and convection.

![[Extended Surfaces-4.png|432]]

![[Extended Surfaces-3.png]]'

## Example
![[MTE 309 - Fin Example.pdf]]