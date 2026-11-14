---
title: YOLO
tags:
  - dl
date: 2026-04-30
aliases:
---
YOLO (*You Only Look Once*) is an early object detection method based on [[Convolutional Layer|convolution]]. 

The input to the network is a $448\times 448$ RGB image. This is passed through 24 convolutional layers that gradually decrease the representation size using max pooling operations while concurrently increasing the number of channels (similar to [[VGG]]). The final convolutional layer is of size $7\times 7$ and has 1024 channels. This is reshaped to a vector, and a fully connected layer maps it to 4096 values. Another FC layer maps this representation to the output.

The output values encode which class is present at each of a $7\times 7$ grid of locations. For each location, the output values also encode a fixed number of bounding boxes. Each box is defined by 5 parameters: $x$ and $y$ position of the center, the height and width of the box, and the confidence of the prediction. The confidence estimates the overlap between the predicted and ground truth bounding boxes.

![[YOLO-1777597263933.webp]]

The system is trained using momentum, weight decay, dropout, and data augmentation. Transfer learning is employed; the network is initially trained on the ImageNet classification task and is then fine-tuned for object detection.

After the network is run, a heuristic process is used to remove rectangles with low confidence and suppress predicted bounding boxes that correspond to the same object, so that only the most confident one is retained (Non-Maximum Suppression, aka. NMS).

