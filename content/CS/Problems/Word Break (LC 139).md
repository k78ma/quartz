---
title: Word Break (LC 139)
tags:
  - cs
  - problems
date: 2024-03-04
aliases:
---
Given a string and a list of words, determine if the string can be constructed from concatenating words from the list of words. A word can be used multiple times.

```
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation:** Return true because "leetcode" can be segmented as "leet code".
```

## Solution

### Backtracking Aggregation
We can try every word in the dictionary and see if the dictionary word is a prefix of the target word. For example, assuming the dictionary contains `["a", "b", "algo"],` `"a" `and "`algo"` are both prefixes of `"algomonster`", but `"b"` is not. If the dictionary word is a prefix then we can consider the prefix matched and continue to try to match the remaining part of the target word. We can draw the state-space tree by using every dictionary word as an edge at every level.

- `is_leaf`: This occurs when `start_index == len(words)`; then we have matched every letter and word break is a success
- `get_edges`: We can use `startIndex` to record the next letter in the target we have matched so far. We try this for each word in the dictionary
	- `target[:startIndex]` is matched
	- `target[startIndex:]` is to be matched. 
- `initial_value`: We start with `False` because we haven't broken the target word yet.
- `aggregate`: We use logical OR to update `ans` to `True` if return value from the child recursive call is `True`.
- `additional_states`: There are no additional states.

```python
def word_break(target, words):
    def dfs(start_index):
        if start_index == len(target):
            return True

        ans = False
        for word in words:
            if target[start_index:].startswith(word):
                ans = ans or dfs(start_index + len(word))

        return ans

    return dfs(0)
```

The solution above works but has bad time complexity. Let `n` represent the length of the `target`  string, and let `m` represent the number of words in the `words` list.

In the worst case scenario, you would require all `m` words to make the `target` string. In addition, in the worst possible case, you would need to use `n` words to make the `target` string, which happens when all the words we use have a length of `1`. Since we have `m` choices for each word, we get an upper bound time complexity of `O(m^n)`. In practice however, it will much faster than `O(m^n)`, but still really inefficient.

### Memoization
The above solution works but will time out if there are a lot of branches. We can use [[Memoization]] to cache the branches we have already seen. 

```python
def word_break(target, words) -> bool:
    memo = {}
    def dfs(start_index):
        if start_index == len(target):
            return True

        if start_index in memo:
            return memo[start_index]

        ans = False
        for word in words:
            if target[start_index:].startswith(word):
                if dfs(start_index + len(word)):
                    ans = True
                    break

        memo[start_index] = ans
        return ans

    return dfs(0)
```

**Time complexity:** 
- The size of the `memo` array is `O(n)` where `n` is the length of the target word. 
- For each state in the `memo` array, we have to try every dictionary word to see if it's a prefix of the target word at the current position. 
- Assuming the size of the dictionary is `m`, string matching takes `O(n)`, so the overall time complexity is `O(n^2 * m)`;