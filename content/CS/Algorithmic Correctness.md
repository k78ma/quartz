---
title: Algorithmic Correctness
tags:
  - cs
  - algos
date: 2023-06-25
aliases:
---
Chapter 1.3 of [[Algorithm Design Manual (Skiena)]] - "Reasoning About Correctness"
- Show correctness through proofs
- We should try to show both correctness and *not incorrectness*

MIT 6.006 L1 - Introduction provides some tips on showing correctness
- For small inputs, we can use case analysis
- For large inputs, algorithm must be recursive or loop in some way
### Incorrectness
- A good way to demonstrate incorrectness is through counterexamples
	- Think small – counterexamples are often present in simple cases
	- This exhaustively – there are usually only a small number of possible instances for the first non-trivial value *n* when it comes to algorithms
	- Hunt for weakness – if the proposed algorithm is of the form “always take the biggest” (greedy algorithm), think about why this might be the wrong thing to do
	- Go for a tie – break greedy heuristics by providing instances where everything is the same size
	- Seek extremes  – usually easy to reason about
