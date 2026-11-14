---
title: Data Augmentation
tags:
  - dl
date: 2025-12-28
aliases: data augmentation
---
[[Transfer learning]] improves performance by exploiting a different dataset. [[Multi-task Learning]] improves performance using additional labels. A third options it to expand the dataset. We can often transform each input data example in such a way that the label stays the same. For example, we might aim to determine if there is a bird in an image; we could rotate, flip, blur, or manipulate the color balance of the image, and the label "bird" remains valid. Similarly, for text tasks, we can substitute synonyms or translate to another language and back again. For tasks where the input is audio, we can amplify or attenuate different frequency bands.

Generating extra training data in this way is known as **data augmentation**. The aim is to teach the model to be indifferent to these irrelevant data transformations. 

![[Data Augmentation-1766984359651.webp]]

