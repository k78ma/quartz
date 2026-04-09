---
title: ACO for Timetabling
tags:
  - ece457a
date: 2026-04-09
aliases: aco for timetabling
---
The timetabling problem refers to the scheduling of events in timeslots and rooms, e.g. courses, exams, sports events.

Specifically, we are given:
- A set of $n$ events $E$ to be schedule in a set of time slots $T=\{ t_{1},t_{2},\dots,t_{k} \}$. For example, we have $k=45$ i there are 5 days with 9 hours each
- Set of rooms $R$, each with a certain capacity
- Set of participants $S$ to attend the events, with each pre-assigned to a set of events
- A set of features satisfied by rooms and required by events
- A set of hard constraints involving the participants such as no participant attending more than one event at the same time, only one event taking plae in each room at a given time
- More soft constraints or preferences: Students shouldn't have more than 4 classes in a row, room utilization should not exceed a certain threshold, etc.

Then, a feasible timetable/schedule is one in which each of the events is assigned a timeslot and a room and satisfies the hard constraints. The best solution is a feasible one that minimizes violation of the soft constraints.

The problem is often solved in 2 stages:
1. Solve the assignment of events to time slots
2. Assign rooms to events

ACO can be used for one or both stages.