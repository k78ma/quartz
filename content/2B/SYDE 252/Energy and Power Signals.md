---
title: Energy and Power Signals
tags:
  - syde252
date: 2023-09-23
---
How do we measure signal size or signal strength with a single number?
We need to consider signal amplitude and duration.

### Signal Energy
Area under the signal takes care of both amplitude and duration, but we can’t use area under the signal directly, as positive and negative areas will cancel each other. 

Thus, signal energy for continuous time is defined as:
$$
E_{x}=\int_{-\infty}^{\infty} |x(t)|^{2} \, dt 
$$
And the discrete time equivalent is:
$$
E_{x} = \sum_{n=-\infty}^{\infty}|x(n)|^{2}
$$
Energy exists if $\mid x(t) \mid \to 0$ as $|t|\to \infty$, as the area under the curve must be integrable. The discrete equivalent is $\mid x(n) \mid \to 0$ as $|n|\to \infty$.

### Signal Power
When $|x(t)|$ doesn’t approach $0$ as $t \to \infty$, signal energy is infinite and is not meaningful. A more meaningful measure in this case is the time average of energy, which is called the power of the signal:
$$
P_{x}=\lim_{ T \to \infty } \frac{1}{T} \int_{-T / 2}^{T/2} |x(t)|^{2} \, dt
$$
The discrete equivalent is:
$$
\lim_{ T \to \infty } \frac{1}{T}\sum|x(n)|^{2}
$$
This is also just the mean-square of $|x(t)|$. Also, root-mean-square (rms) of a signal is just $\sqrt{ P_{x} }$.

Generally, power exists if the signal is either periodic or has some sort of statistical regularity. A ramp signal $x(t)=t$ increases indefinitely, and neither energy or power exists for this. However, the unit step function, which is neither periodic nor has a statistical regularity, does have finite power.

