---
title: Top K Frequent Elements (LC 347)
tags:
  - cs
  - problems
date: 2023-09-23
---
## Hashmap Sorting Solution
This is the solution I came up with initially. It uses a hashmap where the key is the number and the value is its frequency. Then, the frequencies are turned into a list, which is sorted from highest to lowest. The top frequencies are found, and then we go back to the hashmap and find the corresponding keys.
- Time complexity: $O(n \log n)$ because of sorting
- Space complexity: $O(n)$?
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        hashmap = {}

        for num in nums:
            hashmap[num] = hashmap.get(num, 0) + 1

        freq_list = list(hashmap.values())

        freq_list.sort()
        freq_list.reverse()

        top_freqs = []
        for i in range(k):
            top_freqs.append(freq_list[i])

        result = []
        for i in range(len(top_freqs)):
            for key, value in hashmap.items():
                if top_freqs[i] == value:
                    result.append(key)
                    hashmap[key] = 0
        return result
```

## Max Heap


## Bucket Sort
The idea of this is to use create an array where the index is frequency and the numbers is the value. So, for something like `[1,1,1,2,2,2,3,4,4,100]`, you would have:

| Index (Freq) | Value (Num) |
| ---------- | ----------- |
| 1          | \[100\]     |
| 2          | \[4]        |
| 3          | \[1,2]      |
| 4          |  None           |
| …          | …           |
| 10           | None            |

This makes stuff easier because it’s bounded by the length of the original list, and you can just go by frequency from the end of the map until you find the top $k$ frequencies.
- Time complexity: $O(n)$
- Space complexity: $O(n)$, we are creating an array/hashmap to help us.

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for n in nums:
            count[n] = count.get(n, 0) + 1
        for n, c in count.items():
            freq[c].append(n)

        result = []

        for i in range(len(freq)-1, 0, -1):
            for n in freq[i]:
                result.append(n)
                if len(result) == k:
                    return result
```
