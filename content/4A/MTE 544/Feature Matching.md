---
title: Feature Matching
tags:
  - mte544
date: 2025-11-01
aliases: feature matching
---
After we detect distinctive keypoints in images, we want to recognize the same physical point when seen again from:
- A different viewpoint
- A different camera
- A later time

Some common scenarios where this is used is panorama stitching and [[Stereo Cameras|stereo]] matching.

![[Pasted image 20251101020346.png|558]]

![[Pasted image 20251101020401.png]]


After we've found features using our feature extraction methods, how do we tell which ones are correct/incorrect matches?

 Least squares: Assumes most matches are correct and fits a transformation (e.g., fundamental matrix) that best explains them.

 [[RANSAC]] is the more standard approach:
1. Randomly pick a small set of matches
2. Compute the geometric model (e.g., essential / fundamental matrix)
3. Test how many matches agree with this model (called **inliers**)
4. Repeat many times
5. Keep the model that has the **most inliers**