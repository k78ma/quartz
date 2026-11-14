---
title: Reparameterized Diffusion Loss
tags:
  - dl
date: 2026-08-12
aliases: reparameterized diffusion loss
---
## Reparameterization of Target
The original diffusion update was given by
$$
z_{t} = \sqrt{ \alpha_{t} } \cdot x+ \sqrt{ 1-\alpha_{t} }\cdot \epsilon
$$
Recall that in the original [[Diffusion Training#Diffusion loss function|diffusion loss function]] was:
$$
\begin{align*}
L[\phi_{1\dots T}] = \sum_{i=I}^{I}\left( \underbrace{ -\log \Big[\text{Norm}_{x_{i}}[f_{1}[z_{i_{1}}, \phi_{1}], \sigma_{1}^{2}I] \Big]  }_{ \text{reconstruction term} }
+ \sum_{t=2}^{T} \frac{1}{2\sigma_{t}^{2}} \left| \left| \underbrace{ \frac{1-\alpha_{t-1}}{1-\alpha_{t}} \sqrt{ 1-\beta_{t}}z_{it} + \frac{\sqrt{ \alpha_{t-1} \beta_{t} }}{1-\alpha_{t}} x_{i} }_{ \text{target, mean of } q(z_{t-1}|z_{t}, x) } - \underbrace{ f_{t}[z_{it}, \phi_{t}] }_{ \text{predicted }z_{t-1} } \right| \right|^{2} \right)
\end{align*}
$$
where the original form of the KL divergence as:
$$
D_{KL}[q(z_{t-1}|z_{t}, x) \, \mid \mid \, Pr(z_{t-1}|z_{t}, \phi_{t})] = \frac{1}{2\sigma_{t}^{2}} \left| \left| \frac{(1-\alpha_{t-1})}{1-\alpha_{t}} \sqrt{ 1-\beta_{t} }z_{t} + \frac{\sqrt{ \alpha_{t-1}} \beta_{t}}{1-\alpha_{t}}x - f_{t}[z_{t}, \phi_{t}] \right| \right|^{2} + C
$$

The data term $x$ in the KL divergence can be expressed as the diffused image minus the noise that was added to it:
$$
x = \frac{1}{\sqrt{ \alpha_{t} }}\cdot z_{t} - \frac{\sqrt{ 1-\alpha_{t} }}{\sqrt{ \alpha_{t} }} \cdot  \epsilon
$$
Substituting this into the target terms from the original loss function gives:
$$
\begin{align*}
 & \frac{(1-\alpha_{t-1})}{1-\alpha_{t}} \sqrt{ 1-\beta_{t} }z_{t} + \frac{\sqrt{ \alpha_{t-1}} \beta_{t}}{1-\alpha_{t}}x \\[2ex] 
&=  \frac{(1-\alpha_{t-1})}{1-\alpha_{t}}\sqrt{ 1-\beta_{t} }z_{t} +\frac{\sqrt{ \alpha_{t-1} }\beta_{t}}{1-\alpha_{t}}\left( \frac{1}{\sqrt{ \alpha_{t} }}z_{t}-\frac{\sqrt{ 1-\alpha_{t} }}{\sqrt{ \alpha_{t} }}\epsilon \right) \\[2ex] 
&= \frac{(1-\alpha_{t-1})}{1-\alpha_{t}} \sqrt{ 1-\beta_{t} }z_{t} + \frac{\beta_{t}}{1-\alpha_{t}}\left( \frac{1}{\sqrt{ 1-\beta_{t} }}z_{t} - \frac{\sqrt{ 1-\alpha_{t} }}{\sqrt{ 1-\beta_{t} }}\epsilon \right)
\end{align*}
$$
where we have used the fact that $\sqrt{ \alpha_{t} } / \sqrt{ \alpha_{t-1} } =\sqrt{ 1-\beta_{t} }$ between the second and third lines.

Simplifying further, we get:
$$
\begin{align*}
\frac{1-\alpha_{t-1}}{1-\alpha_t}\sqrt{1-\beta_t}\,z_t
+ \frac{\sqrt{\alpha_{t-1}}\beta_t}{1-\alpha_t}x
&= \left(
\frac{(1-\alpha_{t-1})\sqrt{1-\beta_t}}{1-\alpha_t}
+ \frac{\beta_t}{(1-\alpha_t)\sqrt{1-\beta_t}}
\right)z_t
- \frac{\beta_t}{\sqrt{1-\alpha_t}\sqrt{1-\beta_t}}\epsilon
\\[2ex]
&= \left(
\frac{(1-\alpha_{t-1})(1-\beta_t)}
{(1-\alpha_t)\sqrt{1-\beta_t}}
+ \frac{\beta_t}
{(1-\alpha_t)\sqrt{1-\beta_t}}
\right)z_t
- \frac{\beta_t}{\sqrt{1-\alpha_t}\sqrt{1-\beta_t}}\epsilon
\\[2ex]
&= \frac{(1-\alpha_{t-1})(1-\beta_t)+\beta_t}
{(1-\alpha_t)\sqrt{1-\beta_t}}z_t
- \frac{\beta_t}{\sqrt{1-\alpha_t}\sqrt{1-\beta_t}}\epsilon
\\[2ex]
&= \frac{1-\alpha_t}
{(1-\alpha_t)\sqrt{1-\beta_t}}z_t
- \frac{\beta_t}{\sqrt{1-\alpha_t}\sqrt{1-\beta_t}}\epsilon
\\[2ex]
&= \frac{1}{\sqrt{1-\beta_t}}z_t
- \frac{\beta_t}{\sqrt{1-\alpha_t}\sqrt{1-\beta_t}}\epsilon.
\end{align*}
$$
where we multiplied the numerator and denominator of the first term by $\sqrt{ 1-\beta_{t} }$ between lines 2 and 3, multiplied out the terms, and then simplified the numerator in the first term between lines 3 and 4.

Substituting this back into the loss function, we have:
$$
\begin{align*}
L[\phi_{1\dots T}] &= \sum_{i=1}^{I}\left( -\log[\text{Norm}_{x_{i}}[f_{1}[z_{i 1}, \phi_{1}], \sigma_{1}^{2}I]] + \sum_{t=2}^{T} \frac{1}{2\sigma_{t}^{2}} \left| \left | \left( \frac{1}{\sqrt{ 1-\beta_{t} }}z_{it} - \frac{\beta_{t}}{\sqrt{ 1-\alpha_{t} }\sqrt{ 1-\beta_{t} }}\epsilon_{it} - f_{t}[z_{it}, \phi_{t}]^{2} \right) \right| \right |^{2}  \right)
\end{align*}
$$

## Reparameterization of network
Now we replace the model $\hat{z}_{t-1}=f_{t}[z_{t}, \phi_{t}]$ with a new model $\hat{\epsilon}=g_{t}[z_{t}, \phi_{t}]$, which predicts the noise $\epsilon$ that was mixed with $x$ to create $z_{t}$:
$$
f_{t}[z_{t}, \phi_{t}] = \frac{1}{\sqrt{ 1-\beta_{t} }}z_{t}-\frac{\beta_{t}}{\sqrt{ 1-\alpha_{t} }\sqrt{ 1-\beta_{t} }}g_{t}[z_{t}, \phi_{t}]
$$
Substituting the new model our loss function produces the criterion:
$$
\begin{align*}
L[\phi_{1\dots T}] &= \sum_{i=1}^{I} -\log\Big[\text{Norm}_{x_{i}}[f_{1}[z_{i1}, \phi_{1}], \sigma_{1}^{2}I] \Big] + \sum_{t=2}^{T} \frac{\beta_{t}^{2}}{(1-\alpha_{t})(1-\beta_{t})2\sigma_{t}^{2}} \left| \left | g_{t}[z_{it}, \phi_{t}] - \epsilon_{it} \right| \right | ^{2}
\end{align*}
$$
The log normal can be written as a least squares loss plus a constant $C_{i}$:
$$
\begin{align*}
L[\phi_{1\dots T}] &= \sum_{i=1}^{I} \frac{1}{2\sigma_{1}^{2}} \left| \left | x_{i}-f_{1}[z_{i 1}, \phi_{1}] \right| \right |^{2}  + \sum_{t=2}^{T} \frac{\beta_{t}^{2}}{(1-\alpha_{t})(1-\beta_{t})2\sigma_{t}^{2}} \left| \left | g_{t}[z_{it}, \phi_{t}] - \epsilon_{it} \right| \right | ^{2}
\end{align*}
$$
Substituting in the definitions of $x$ and $f_{1}[z_{1}, \phi_{1}]$ from above, the first term simplifies to
$$
\frac{1}{2\sigma_{1}^{2}} \Big| \Big | x_{i}-f_{1}[z_{i 1}, \phi_{1}] \Big| \Big|^{2} = \frac{1}{2\sigma_{1}^{2}} \left| \left | \frac{\beta_{1}}{\sqrt{ 1-\alpha_{1} }\sqrt{ 1-\beta_{1} }} g_{1}[z_{i1}, \phi_{1}] - \frac{\beta_{1}}{\sqrt{ 1-\alpha_{1} }\sqrt{ 1-\beta_{1} }}\epsilon_{i 1} \right| \right | ^{2}
$$
Adding this back to the final loss function yields:
$$
L[\phi_{1 \dots T}] = \sum_{i=1}^{I} \sum_{t=1}^{T} \frac{\beta_{t}^{2}}{(1-\alpha_{t})(1-\beta_{t}) 2\sigma_{t}^{2}} \Big| \Big | g_{t}[z_{it}, \phi_{t}] - \epsilon_{it} \Big| \Big | ^{2}
$$
where we have disregarded the additive constants $C_{i}$.

In practice, the scaling factors (which might be different at each time step) are ignored, giving an even simpler formulation:
$$
\begin{align*}
L[\phi_{1 \dots T}] &= \sum_{i=1}^{I} \sum_{t=1}^{T} \Big| \Big | g_{t}[z_{it}, \phi_{t}] - \epsilon_{it} \Big| \Big | ^{2} \\[2ex] 
&= \sum_{i=1}^{I}\sum_{t=1}^{T}\Big| \Big | g_{t}[\sqrt{ \alpha_{t}} \cdot x_{i} + \sqrt{ 1-\alpha_{t} }\cdot \epsilon_{it}, \phi_{t}] - \epsilon_{it} \Big| \Big | ^{2}
\end{align*}
$$
where we have rewritten $z_{t}$ using the [[Diffusion Encoder|diffusion kernel]] in the second line.