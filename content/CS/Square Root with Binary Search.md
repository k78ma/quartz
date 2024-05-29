---
title: Square Root with Binary Search
tags:
  - cs
date: 2024-02-24
aliases:
---
We can algorithmically estimate roots using a variation of [[One-sided Binary Search]].

**Problem statement:** Given an integer, find its square root without using the built-in square root function. Only return the integer part (truncate the decimals).
- Input: `16`, Output: `4`
- Input: `8`, Output: `2` (decimals are truncated)

```python
def square_root(n: int) -> int:
    if n == 0:
        return 0

    l, r = 1, n 
    while l <= r:
        m = (l + r) // 2
        if m * m == n:
            return m
        elif m * m > n:
            r = m - 1
            ans = m 
        else:
            l = m + 1
    return ans - 1

```

Because we truncate the decimals, we're essentially just trying to find the largest element in the sorted array whose square is equal to or less than `n`. Thus, our `feasible` function (discussed [[One-sided Binary Search|here]]) is `i^2 >= n`, which reduces our problem to a [[One-sided Binary Search]].

There is a small caveat: if there is no element in the array whose square equals `n`, then we want to return the largest element that is smaller than the square root of `n`. In this case, we are actually looking for the last `false`. We can subtract 1 from the index after we find the first `true` from binary search.
