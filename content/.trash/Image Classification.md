---
title: Image Classification
tags:
  - dl
date: 2026-04-28
aliases:
  - image classification
---
Much of the pioneering work on deep learning in computer vision focuses on image classification using the ImageNet dataset.

Most methods reshape the input images to a standard size. In a typical system, the input $\mathbf{x}$ to the network is a $224\times 224$ RGB image, and the output is a probability distribution over the 1000 classes. ImageNet is quite challenging because there are a large number of classes, exhibiting considerable variation. Before deep networks were applied, the state-of-the-art method classified the test messages with $\sim 25\%$ errors for the correct class being in the top five suggestions. Five years later, deep learning models eclipsed human performance.

![[Image Classification-1777418564328.webp]]

[[AlexNet]] was the first method to do well on this task.