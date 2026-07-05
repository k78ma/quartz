---
title: Time-Domain Stability
tags:
  - mte484
date: 2025-09-12
aliases: time-domain stability
---
Our original [[Stability Criterion|stability criterion]] is only available for LTI systems which allow us to convert to the frequency domain. However, [[Sampled-Data Control Systems|sampled-data systems]] are not LTI, so we need to come up with a notion of stability in the time domain.

> [!definition] Bounded signal
> Let $u(t)$/$u[k]$ be a real-valued signal defined for $t \geq 0$/$k\geq 0$. Then $u$ is **bounded** if there exists some constant $\overline{u}\in \mathbb{R}, \,\overline{u} >0$  such that
> -  $| u(t) |\leq \overline{u} \,\, \forall \, t \geq 0$, or 
> - $| u[k] | \leq \overline{u}  \,\, \forall \, k \, \in \mathbb{Z}_{\geq 0}$.
> 
> Only signals are defined to be bounded, not transfer functions!
> - See also: [[BIBO Stability]]

