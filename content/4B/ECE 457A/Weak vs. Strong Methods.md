---
title: Weak vs. Strong Methods
tags:
  - ece457a
date: 2026-02-15
aliases: weak vs. strong methods
---
Strong methods (domain specific):
- Designed for a specific class of problems
- Exploit rich domain structure (constraints, geometry, causality)
- Often provide stronger guarantees (or better performance) within that domain.

Weak methods (general-purpose):
- General strategies applied to many problems
- Use limited domain knowledge (often only a heuristic or a generic rule)
- Called "weak" because they do not fully exploit domain-specific structure

Example of weak methods:
- Means-ends analysis: Compare current vs. goal state; pick an operator that reduces the gap
- Space splitting: Enumerate candidate regions/choices, then rule out classes that don't work
- Subgoaling: Break a large goal into smaller subgoals and solve incrementally

In the context of search algorithms:
- Strong: problem-specific reasoning (e.g., constraints propagation in CSPs)
- Weak: generic search + heuristic guidance (e.g. best-first variants)