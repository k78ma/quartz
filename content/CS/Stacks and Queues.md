---
title: Stacks and Queues
tags:
  - cs
date: 2023-06-25
aliases:
  - stack
  - queue
---
Stacks and queues are containers – abstract data types permit data storage and retrieval of items irrespective of actual content.

## Stack
- LIFO (last-in, first-out)
- Use a pointer to keep track of the top of the stack
### Operations
- Push: Insert item at the top of the stack.
	- Set the value of the pointer to the item being inserted
	- Increment pointer by 1
- Pop: Return (and remove item) at the top of the stack.
	- Decrease pointer by 1
- Example: Towers of Hanoi

>[!note]- Stack Graphical Explanation
>![500](Pasted%20image%2020230726151912.png)
>![500](Pasted%20image%2020230726152014.png)
>![500](Pasted%20image%2020230726152027.png)
>![500](Pasted%20image%2020230726152042.png)


## Queues
- FIFO (first-in, first-out).
	- FIFO order minimizes the *maximum* time spent waiting, but the average time will be the same whether FIFO or LIFO is used. 
- Use two pointers to keep track of the start and end of the queue
### Operations
- Enqueue: Insert item at the back of the queue.
	- Set the entry at the end pointer to the value and increase the end pointer by one.
- Dequeue: Return and remove the from item of the queue
	- Set increase the start pointer by one.
- Example: Drive-thru
- **Deque:** Double-ended queue where inserting and removing items can be done from both ends

>[!note]- Queue Graphical Explanation
>![Pasted image 20230726152746](Pasted%20image%2020230726152746.png)
>![Pasted image 20230726152804](Pasted%20image%2020230726152804.png)
>![Pasted image 20230726152814](Pasted%20image%2020230726152814.png)
>![Pasted image 20230726152845](Pasted%20image%2020230726152845.png)
>![Pasted image 20230726152855](Pasted%20image%2020230726152855.png)
>![Pasted image 20230726152927](Pasted%20image%2020230726152927.png)
>![Pasted image 20230726152941](Pasted%20image%2020230726152941.png)
