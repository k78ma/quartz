---
title: Dictionary
tags:
  - cs
  - dsa
date: 2024-03-24
aliases:
---
Dictionaries allow access to data items by content.

Operations:
- *Search* – Given a search key $k$, return a pointer to the element in the dictionary whose key value is $k$, if one exists.
- *Insert* – Given a data item $x$, add it to the dictionary.
- *Delete* – Given a pointer $x$ to a given data item in the dictionary, remove it.

Some dictionary implementations also support:
- *Max* and *Min* – Retrieve the item with the largest or smallest key. This enables the dictionary to serve as a [[Priority Queue]].
- *Predecessor* and *Successor* – Retrieve the item whose key is immediately before or after item $x$ in sorted order. These enable us to iterate through the elements of the dictionary in sorted order.