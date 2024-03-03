---
title: Multi-Object Tracking
tags:
  - robotics
date: 2024-03-03
aliases:
---
Multi-object tracking is a difficult problem due to uncertainty in observations and model predictions.
- We don't want to correct the prediction of one object using the measurement of another
- The number of objects being tracked is not fixed, sometimes tracks need to be added or removed

So, what are some ways of doing data association and track maintenance?
## Data Association
When thinking about data association with a specific object, we need to think about what kind of data we're getting and the characteristics of that data. 

For example, if we're using radar to detect a bunch of planes, we have some *measured quantities* such as range, range rate, line of sight. We also have *measured attributes* like target type, ID number, and object shape. If we have
