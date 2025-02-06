---
title: Regulation (Control)
tags:
  - elec3200
date: 2025-02-06
aliases:
  - regulation (control)
---
**Regulation problem:** Given a plant, select a sensor and an actuator, and design a controller so that the output of the closed-loop system can track a reference signal, and eliminate the effect of disturbances.

**Example:** Have a car running along a hilly road against a persistent wind, so that its speed follows an external command, such as the maximum and minimum speed limits in certain segments of the road.

![[Regulation (Control).png|475]]

This can be presented as 2 subtasks:
- **Tracking:** Speed following, even without the uphill or downhill slopes, or the head/tail wind.
- **Disturbance rejection:** Reduction or complete elimination of the effect of the slopes and wind

We can once again compare the open-loop and closed-loop approaches here:
- **Open-loop control:** Setting the gas pedal movement according to a computed position profile derived from the desired speed command, the road conditions in different segments of the road, and the wind speed obtained from an accurate weather forecast. 
    - This will not work well since any error in the computed position profile, the road conditions, and the weather forecast will cause the speed to settle at the wrong value or not to settle at all because of the integration effect (the speed is proportional to the integral of the gas pedal position and hence small errors in the position may accumulate into large errors in speed).
- **Closed-loop control:** adjusting the gas pedal position according to the actual speed of the car. Since we can accelerate or decelerate the car in real time, according to the speed measurement, we should be able to control the speed of the car within a small neighborhood of the command as long as we take correct actions. Whether or not we know the road conditions or the wind speed is not important.

