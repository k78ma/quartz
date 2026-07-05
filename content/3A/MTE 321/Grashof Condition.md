---
title: Grashof Condition
tags:
  - mte321
date: 2024-07-09
aliases:
  - Grashof condition
---
œThe Grashof condition predicts the rotation behavior of a four-bar linkage's inversions based on link lengths only.
- **Inversion:** A mechanism inversion is said to occur when the fixed link is allowed to move, and an alternative link is fixed

Let:
- $S$ = length of shortest link
- $L$ = length of longest link
- $P$ = length of one remaining link
- $Q$ = length of other remaining link

## Grashof Classes
Grashof condition evaluates the mechanism into one of three classes:

### Class I - Grashof Linkage
In this case, $S+L<P+Q$. The types of motions that are possible are:
- Ground link adjacent to shortest: Crank-rocker
- Ground shortest link: Double-crank
- Ground link opposite to shortest link: Grashof double-rocker

![[Grashof Condition.png|624]]

### Class II - non-Grashof/Triple rocker
In this case, $S+L>P+Q$:
- All inversions will be triple-rockers in which no link can fully rotate.

![[Grashof Condition-1.png|620]]

### Class III (special-case Grashof)
In this case, $S+L=P+Q$.
- All inversions will be either double-cranks or crank-rockers but will have “change points” twice per revolution of the input crank when the links all become collinear. At these change points the output behavior will become indeterminate.

![[Grashof Condition-2.png|612]]

## Barker's Classification
Barker's classification is a more fine-grained version of Grashof that allows for the prediction of the type of motion that can be expected from a fourbar linkage based on the values of its link ratios.

![[Grashof Condition-3.png]]

- 1-4: Grashof Class I
- 5-8: Grashof Class II
- 9-14: Grashof Class III