---
title: Control of Numerical Errors
tags:
  - mte204
date: 2023-09-10
---
True error (based on an exact solution) is not usually available – if we had this, why would we even use numerical methods? Thus, you generally want to use approximate (estimated) error instead like: ![[Error Definitions#^d489e2|Approximate Relative Error]]
No systematic, general approach for error estimation for all problems, as specific methods use different approaches.

Some guidelines:
- Avoid subtracting two nearly equal numbers
- Do not add very small and very large numbers together

Error control methods:
- Sensitivity analysis, such as grid refinement study or sensitivity to variations in input parameters
- Examine limiting cases (e.g. upper/lower bounds)