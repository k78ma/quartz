---
title: Koko Eating Bananas (LC 875)
tags:
  - cs
  - problems
date: 2024-02-25
aliases:
---
Koko loves to eat bananas. There are `n` piles of bananas, the `ith` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return _the minimum integer_ `k` _such that she can eat all the bananas within_ `h` _hours_.

## Solution

If we have `k = max(piles)`, we will always be able to finish within `h` hours, we will always be able to finish. So, we essentially just want to try all the numbers between `1, ... , max(piles)` until we find the minimum which allows us to eat all the bananas within `h` hours. This can be done using a binary search.

```python
def minEatingSpeed(self, piles: List[int], h: int) -> int:
	
	l, r = 1, max(piles)
	res = r
	
	# Helper to calculate time taken given a k value
	def timeCalc(k):
		totalTime = 0
		for p in piles:
			totalTime += math.ceil(p / k)
		return totalTime

	while l <= r:
		k = (l + r) // 2
		
		time = timeCalc(k)
			
		if time <= h: # Room for improvement, so let's try lower rate h
			r = k - 1
			res = k
		else: # Went over threshold, so let's try a higher rate h
			l = k + 1
			
	return res
```

Notes:
- `math.ceil` is used to find ceiling – we always round up, e.g. 8 bananas with $k=3$ would take 3 hours.
- We can take `float(p)` to ensure floating point results, although this is technically unnecessary in Python 3.
