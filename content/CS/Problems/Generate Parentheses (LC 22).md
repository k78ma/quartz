---
title: Generate Parentheses (LC 22)
tags:
  - cs
  - problems
date: 2024-03-02
aliases:
---
Given an integer `n`, generate all strings with `n` matching parentheses. "matching" parentheses mean
- There is equal number of opening and closing parentheses.
- Each opening parenthesis has matching closing parentheses.

For example, `()` is a valid string but `)(` is not a valid string because `)` has no matching parenthesis before it and `(` has no matching parenthesis after it.

## Solution
This is a [[Backtracking]] problem (keywords: "generate all"). Starting with an empty string, we can add `(` or `)` and continue to do so until the length reaches `2 * n`. 

Generated strings are invalid when:
- There are more than `n` occurrences `(`
- We want to add a `)` but there is no matching `(`

![[Generate Parentheses.png|500]]

We can [[Tree Pruning|prune]] branches that don't lead to a valid leaf node.

```python
def generate_parentheses(n: int) -> List[str]:
    
    def dfs(start_index, path, open_count, close_count, result):
        if start_index == 2*n:
            result.append(''.join(path))
            return
        if open_count < n:
            path.append('(')
            dfs(start_index + 1, path, open_count + 1, close_count, result)
            path.pop()
        if close_count < open_count:
            path.append(')')
            dfs(start_index + 1, path, open_count, close_count + 1, result)
            path.pop()
    
    ans = []
    dfs(0, [], 0, 0, ans)
    return ans
```