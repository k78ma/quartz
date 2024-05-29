---
title: Permutation in String (LC 567)
tags:
  - problems
  - cs
date: 2024-01-04
aliases:
---
Given two strings `s1` and `s2`, return `true` _if_ `s2` _contains a permutation of_ `s1`_, or_ `false` _otherwise_.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

**Example 1:**
- **Input:** `s1 = "ab", s2 = "eidbaooo"`
- **Output:** `true`
- **Explanation:** `s2 contains one permutation of s1 ("ba").`

### Sliding Window Hashmap Solution
I was able to come up with this solution pretty quickly but had trouble with the implementation.

```python
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        
        if len(s1) > len(s2):
            return False

        s1_count, window_count = {}, {}
        
        for ch in s1:
            s1_count[ch] = s1_count.get(ch, 0) + 1

        for i in range(len(s2)):
            window_count[s2[i]] = window_count.get(s2[i], 0) + 1

            if i >= len(s1):
                if window_count[s2[i - len(s1)]] == 1:
                    del window_count[s2[i - len(s1)]]
                else:
                    window_count[s2[i - len(s1)]] -= 1

            if window_count == s1_count:
                return True

        return False
```

The general idea is to make a hashmap for `s1` and have a sliding window with the same length as `s1`  traversing `s2`. This allows us to check for anagrams (see [[Valid Anagram (LC 242)]]).

The part I struggled with is updating the hashmap for the sliding window (lines 15-19). Basically, we want to adjust the window by removing the leftmost character (since we are moving the window to the right). For this part, if the number of that specific character is 1, we need to delete it entirely using the `del` keyword; if it's more than 1, we can just decrement it.

#### Fixed-Size Hashmap Alternative
We can also use a fixed-size hashmap using the `ord` ASCII conversion trick we saw in [[Group Anagrams (LC 49)]]. 

```python
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1_count = [0] * 26
        window_count = [0] * 26

        for ch in s1:
            s1_count[ord(ch) - ord('a')] += 1

        left = 0
        for right in range(len(s2)):
            window_count[ord(s2[right]) - ord('a')] += 1

            if right - left + 1 > len(s1):
                window_count[ord(s2[left]) - ord('a')] -= 1
                left += 1

            if window_count == s1_count:
                return True

        return False
```

The above solution also uses left and right pointers to keep track of the window instead.

#### Some Notes
- `window_count.get(s2[i], 0)` attempts to use `get` to retrieve the value at key `s2[i]`. If this key doesn't exist, it returns `0` as a default value.
- `del` deletes objects in Python.