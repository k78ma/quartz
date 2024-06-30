---
title: Priority Queue
tags:
  - dsa
  - cs
date: 2024-04-26
aliases:
  - priority queue
---
Priority queues are an abstract data type that supports these 3 operations:
- $\text{Insert}(Q, x)$ – Given an item $x$, insert it into priority queue $Q$
- $\text{Find-Minimum}(Q)$ or $\text{Find-Maximum}(Q)$ – Return a pointer to the item whose key value is smallest or largest among all keys in priority queue $Q$.
- $\text{Delete-Minimum}(Q)$ or $\text{Delete-Maximum}(Q)$ – Remove the item whose key value is minimum or maximum from priority queue $Q$.

A priority queue that supports Find-Minimum and Delete-Minimum is a min-priority queue, and the definition of max-priority queue follows. Usually, we only support either min or max, not both.

Many algorithms need to process items in a specific order, such as scheduling jobs according to their importance. Priority queue provide more flexibility than simple sorting, since it allows new elements to enter a system at arbitrary intervals. It's more effective to insert a new job into a priority queue than to re-sort everything on each such arrival.

>[!example] Dating Example 
> Many processes are naturally modeled by priority queues. 
> - Single people maintain a priority queue of potential dating candidates, mentally if not explicitly.
> - One’s impression on meeting a new person maps directly to an attractiveness or desirability score, which serves as the key field for inserting this new entry into the “little black book” priority queue data structure. 
> - Dating is the process of extracting the most desirable person from the data structure ($\text{Find-Maximum}$), spending an evening to evaluate them better, and then reinserting them into the priority queue with a possibly revised score.