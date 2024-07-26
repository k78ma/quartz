---
title: 2-ADC Bug
tags:
  - mte325
date: 2024-07-11
aliases:
---
We wanted to set up two ADCs so that we could control both motors at the same time and earn the bonus mark. This led to various bugs that took a long time to resolve - likely around 3 hours in total.

The main bug we had was an issue with flipping values between the ADCs. For example, having one potentiometer set to the minimum value and one potentiometer set to the maximum value should produce readings of:
```
63, 0
63, 0
63, 0
63, 0
```

Instead, we observed what we called "flipping":
```
63, 0
0, 63
0, 63
63, 0
```

This "flipping" behavior was mostly random, which made it harder to debug because there would be periods of time where no flipping occurred, leading us to believe that we had fixed the problem.

