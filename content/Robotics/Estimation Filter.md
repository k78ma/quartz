---
title: Estimation Filter
tags:
  - robotics
date: 2024-03-03
aliases:
---
Estimation filters, such as the [[Kalman Filter]] work under a predict-correct paradigm:
- Predict future state of the system
- Correct that state with a measurement

In order to do prediction, we have to give the filter a model of the system – something it can use to predict where the system will be at some time in the future. We then take a measurement of the state at this future time using sensors; this measured state is used to correct the predicted state, based on the relative confidence between our prediction and our measurement. This corrected state is the final output of the filter.

Let's say we are trying to predict the motion of an airplane. To build our model, we know that motion comes from:
- The kinematics/dynamics of the system
- The commanded/known inputs
- Random/unknown inputs

Our model for the motion of the plane would take the first two into account, while adding process noise to deal with random/unknown inputs.