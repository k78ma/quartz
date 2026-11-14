---
title: Inductive vs. Transductive Models
tags:
  - dl
date: 2026-07-26
aliases:
  - inductive vs. transductive models
  - transductive
  - inductive
---
**Inductive** models exploit a training set of labeled data to learn the relation between the inputs and outputs. Then we apply this to new test data. We are learning the rule that maps inputs to outputs then applying it elsewhere.

**Transductive** models consider both the labeled and unlabeled data at the same time. It does not produce a rule but merely a labeling for the unknown outputs. This is sometimes termed *semi-supervised learning*. It has the the advantage that it can use patterns in the unlabeled data to help make its decisions; however, it has the disadvantage that the model needs to be retrained when extra unlabeled data are added.

Both problem types are commonly encountered for [[Graph|graphs]]. Sometimes, we have many labeled graphs and learn a mapping between the graph and the labels. For example, we might have many molecules, each labeled according to whether it is toxic to humans. We learn the rule that maps the graph to the toxic/non-toxic label and apply this rule to new molecules. However, sometimes there is a single monolithic graph. In the graph of paper citations, we might have labels indicating the field (physics, biology, etc.) for some nodes and wish to label the remaining nodes. Here, the training and test data are irrevocably connected.

Graph-level tasks only occur in inductive tasks, where there are training and test graphs. However, [[Node Classification|node-level]] and edge prediction tasks can occur in either setting. In the transductive case, the loss function minimizes the mismatch between the model output and the ground truth where it is known. New predictions are computed by running the forward pass and retrieving the results where the ground truth is unknown.