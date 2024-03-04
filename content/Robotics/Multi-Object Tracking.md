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

![[Multi-Object Tracking.png]]
## Data Association
### Observations
When thinking about data association with a specific object, we need to think about what kind of data we're getting and the characteristics of that data. 

For example, if we're using radar to detect a bunch of planes, we have some *measured quantities* such as range, range rate, line of sight. We also have *measured attributes* like target type, ID number, and object shape. If we have convenient object attributes, like an ID number, the data association problem becomes significantly easier. We could also try to do classification from our data, such as using Doppler spectrum/fluctuations to figure out what an object is.

We also need to think about *resolution*. If our target object is a point target, each object would contain at most one radar point, resulting in 1-to-1 association between detections and objects. However, if we have large objects or high resolution, we will have several points, or even a point cloud (many-to-one). If we have low resolution, several objects may be shown by a single detection (1-to-many).
### Assignment
Assignment is the process of matching an observation to a tracked project. A simple algorithm for doing this is [[Global Nearest Neighbour|GNN]], which simply assigns a track to the nearest observation; note that this doesn't have to use Euclidean distance and can instead use a probabilistic distance metric like [[Mahalanobis Distance]]. 

GNN works well for sparsely distributed objects, but for clustered objects, something like [[Joint Probabilistic Data Association]] might be better. Instead of making a hard assignment between 1 observation and 1 track, it makes weighted combination of all of the neighboring observations, with closer observations being weighted higher than further ones.

## Track Maintenance
Here, we want to delete and add tracks as we make new observations or objects go out of our field of view. 

A simple track deletion algorithm would be:
```pseudocode
delete if not detected 
at least P times in R updates
with P <= R
```

Creating a track can be difficult because we don't know if a single unassigned observation is a new object right away. We can create a tentative track, and move them to do something similar to the above:
```pseudo
confirm track if object has been detected
at least M times in N updates
with M < N
```

## Estimation Filtering & Gating
After we have made observations and created/deleted tracks, we can use an [[Estimation Filter]], such as an [[Interacting Multiple Model Filter|IMM filter]]. 

We can make this process less computationally expensive by noting that it's stupid to look at every single observation and consider how likely it is to be assigned to every single track. For example, we can choose to ignore observations outside of a defined region for each track.