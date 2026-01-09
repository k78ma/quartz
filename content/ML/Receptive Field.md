---
title: "Receptive Field"
tags: 
date: "2026-01-08"
aliases: "receptive field"
---
[[Convolutional Neural Networks]] consist of a sequence of [[Convolutional Layer|convolutional layers]]. For a given hidden unit in the network, its **receptive field** is the region of the original input that feeds into it. 

Consider a convolutional network where each convolutional layer has kernel size 3.
- The hidden units in the first layer take the weighted sum of the three closest inputs, so have receptive fields of size 3.
- The units in the second layer take a weighted sum of the three closest positions in the first layer, which are themselves weighted sums of three inputs. Hence, the hidden units in the second layer have a receptive field of size 5.

Thus, the receptive field of units in successive layers increases, and information from across the input is gradually integrated.

![[Receptive Field-1767926637961.webp]]
