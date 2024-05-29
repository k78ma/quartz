---
title: Best Time to Buy and Sell Stock (LC 121)
tags:
  - problems
date: 2023-12-25
aliases:
---
You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

### Solution
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        maxProfit = 0
        
        lowest = prices[0]
        
        for price in prices:
            if price < lowest:
                lowest = price
                
            profit = price - lowest
            maxProfit = max(maxProfit, profit)
            
        return maxProfit
```
- Keep track of max profit
- Start by setting the lowest price as the first element of the array (price on day 1)
- Iterate through the daily prices
	- For a given price, if it's lower than the lowest price we've seen before, update the lowest price
	- Calculate the profit of this day by calculating `price - lowest`
	- Compare this to the maximum profit we've seen, if it is more then we can update

Some things to note:
- If the `if price < lowest` is triggered, the profit is zero for that day
- Since we are finding the lowest amount based on our traversal of the array, we don't have to deal with issues with selling before buying (there's probably a better way to explain this) 