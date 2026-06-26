---
title: Hourglass Network
tags:
  - dl
date: 2026-06-25
aliases: hourglass network
---
Hourglass networks are similar to [[U-Net]] but apply further convolutional layers in the skip connections and add the result back to the decoder rather than concatenating it. A series of these models form a stacked hourglass network that alternates between considering the image at local and global levels. 

These are used for pose estimation, where it is trained to predict one heatmap for each joint, and the estimated position is the maximum of the heatmap.

![[Hourglass Network-1782410543236.webp]]