---
title: Algorithmic Efficiency Examples
tags:
  - ml
date: 2024-01-21
aliases:
---
```c
void selection_sort(item_type s[], int n){
	int i, j; // counters
	int min; // index of minimum

	for (i = 0; i < n; i++){
		min = i;
		for (j = i + 1; j < n; j++){
			if (s[j] < s[min]){
				min = j;
			}
		}
		swap[&s[i], &s[min]]
	}
}
```
