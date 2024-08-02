---
title: Determining Transformer Equivalent Circuit Parameters
tags:
  - mte320
date: 2024-06-23
aliases:
  - determining transformer equivalent circuit parameters
---
The parameters of an [[Transformer Equivalent Circuit]] can be determined through two tests on the transformer.

## Open-Circuit Test
The open-circuit test determines:
- $R_{cLV}$ – [[Core Losses|core loss]] resistance.
- $X_{mLV}$ – magnetizing reactance (reactance due to the magnetizing inductance of the transformer's core).

In an open-circuit test:
- The terminals of the high-voltage (HV) side are open-circuited (no-load)
- Rated voltage is applied at the low-voltage (LV) terminals
- The power, voltage, and current are measured from the low-voltage side

![[Determining Transformer Equivalent Circuit Parameters.png]]

HV terminals are open-circuited and LV side is excited because it's more convenient/likely to have a source that can produce the rated voltage on the low-voltage side. We're also more likely to have a low-voltage wattmeter and voltmeter. The ammeter and the current coil of the wattmeter experience open circuit current, which is small, and thus, they are not matters of concern in this test.

Detailed circuit for open-circuit test:

![[Determining Transformer Equivalent Circuit Parameters-1.png]]

- The magnetizing branch is on the low-voltage side
- All resistances and inductances have been referred to the high-voltage side 
- Since the secondary terminals are open-circuited, $I_{s}=0$; therefore, $I_{p}'=I_{s} / a =0$. 

This can be translated into an open circuit on the primary (LV) side of the transformer:

![[Determining Transformer Equivalent Circuit Parameters-2.png]]

The power measured by the wattmeter in the open-circuit test is equal to the [[Practical Single-Phase Transformer|no-load loss]] of the transformer, as it only includes the core losses. From the above diagram, we can write:
$$
\begin{align}
| Z_{oLV} |=\frac{V_{\text{o.c.}}}{I_{\text{o.c.}}}, \quad\text{where } \frac{1}{Z_{oLV}}=\frac{1}{R_{cLV}}+\frac{1}{jX_{mLV}}
\end{align}
$$
and
$$
R_{cLV}=\frac{V^{2}_{\text{o.c.}}}{P_{\text{o.c.}}}
$$
and
$$
\frac{1}{X_{mLV}}=\sqrt{ \left( \frac{1}{Z_{oLV}} \right)^{2}-\left( \frac{1}{R_{cLV}} \right)^{2} } \quad \longrightarrow \quad X_{mLV}=\frac{1}{\sqrt{ \left( \frac{1}{Z_{oLV}} \right)^{2}-\left( \frac{1}{R_{cLV}} \right)^{2} }}
$$
## Short-Circuit Test
The open-circuit test determines:
- $R_{eHV}$ – [[Copper Loss|copper loss]] resistance
- $X_{eHV}$ – reactance due to windings (resistance and leakage reactance)

In the short-circuit test,
- The terminals of the low-voltage (LV) side of the transformer are short circuited.
- High voltage (HV) side is fed by a reduced voltage such that the short circuit current read from the ammeter is at most equal to the rated current on the high-voltage side.
- The power, voltage and current are measured on the high-voltage side.

![[Determining Transformer Equivalent Circuit Parameters-3.png]]

LV terminals are short-circuited and HV side is excited because it's more convenient/likely to have a low-current wattmeter and voltmeter. Note that for the same power, high-voltage side has lower current than the low-voltage side. The voltmeter and voltage coil of wattmeter experience the reduced voltage, which is small, and thus, it is not a matter of concern in this test.

Below is the detailed equivalent circuit for this:

![[Determining Transformer Equivalent Circuit Parameters-4.png]]

- The magnetizing branch is on the low-voltage side and all resistances and inductances have been referred to the high-voltage side. 
- Since the low-voltage side terminals are short circuited, the low-voltage side terminal voltage will be zero. 

This can be translated into a zero voltage on the high-voltage side and can be represented as a short circuit on the high-voltage side, as shown in Fig. 9-28:

![[Determining Transformer Equivalent Circuit Parameters-5.png]]

Note that the power measured by the wattmeter in short-circuit test is equal to the [[Copper Loss|copper loss]] of the transformer, since it includes only the $I^{2}R$ losses in the resistances of the primary and secondary sides. From Fig. 9-28, we can write:
$$
R_{eHV}=\frac{P_{\text{s.c.}}}{I^{2}_{\text{s.c.}}}
$$
and
$$
| Z_{eHV} |=\frac{V_{\text{s.c.}}}{I_{\text{s.c.}}}
$$
and
$$
X_{eHV}=\sqrt{ Z^{2}_{eHV}-R^{2}_{eHV} }
$$
## Combination of Properties
We can combine all of the found parameters $R_{cLV}, X_{mLV}, R_{eHV}, X_{eHV}$ to find [[Transformer Equivalent Circuit|transformer equivalent circuit]] parameters. 

The series impedance parameters $R_{eHV}$ and $X_{eHV}$​ determined from the short-circuit test are directly equal to the equivalent primary-side parameters $R_{ep}$ and $X_{ep}$:
$$
\begin{align}
R_{ep}=R_{eHV}\\
X_{ep}=X_{eHV}
\end{align}
$$
We can also determine the equivalent shunt branch parameters based on $R_{cLV}$ and $X_{mLV}$ from the open-circuit test by referring them over to the primary side:
$$
\frac{1}{Y_{mHV}} = \frac{1}{R_{cHV}} + \frac{1}{jX_{mHV}}
$$

where:
$$
R_{cHV}=a^{2}\cdot R_{cLV}, \quad X_{mHV}=a^{2}\cdot X_{mLV}
$$
Most notably, we can use:
$$
\text{Core Loss}=\frac{E_{p}^{2}}{R_{cHV}}
$$
Remember that in the tests, $R_{eHV}$ and $X_{eHV}$ are referred to the high-voltage side and $R_{cLV}$ and $X_{mLV}$ are referred to the low-voltage side. To refer to a different side, the values found must be multiplied by the appropriate factors.
## Example

![[MTE 320 Example 9-3.pdf]]