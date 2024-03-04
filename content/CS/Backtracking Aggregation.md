---
title: Backtracking Aggregation
tags:
  - cs
  - dsa
date: 2024-03-04
aliases:
---
[[Backtracking]] problems sometimes ask us to generate **all** the combinations of things – combinations or permutations of letters, generating all valid parentheses and generate all valid palindrome partitions.

Aggregation instead lets us answer questions such as:
- **Is it possible** to make up a word using other words from a dictionary?
- Find the **number of ways** to decode a message
- Find the **minimum number** of coins to make up an amount

```python
function dfs(start_index, [...additional states]):
    if is_leaf(start_index):
        return 1
    ans = initial_value
    for edge in get_edges(start_index, [...additional states]):
        if additional states: 
            update([...additional states])
        ans = aggregate(ans, dfs(start_index + len(edge), [...additional states]))
        if additional states: 
            revert([...additional states])
    return ans
```

Differences:
- No `path` push/pop; we don't need to actually generate the solutions, just the aggregated value.
- Use return value to aggregate results from child `dfs`calls

Depending on what the problem asks for, the `initial_value` and `aggregate` function here can be:

| Problem | `initial_value` | `aggregate` |
| ---- | ---- | ---- |
| Is it possible? Does it exist? | boolean | logical OR (`\|\|`) |
| Number of ways to… | 0 | addition (`+`) |
| Max/min ways/value to | 0, inf | max/min |
