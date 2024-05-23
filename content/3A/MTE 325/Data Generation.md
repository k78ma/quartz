---
title: Data Generation
tags:
  - mte325
date: 2024-05-22
aliases:
  - data generation
---
Data generation for [[Data Transmission Model|data transmission]] in computer systems mostly depends on the question of "why is the data being produced"? Based on the answer, one of the data generation scenarios below can be chosen.

Data generation requires action by the producer. However, the creation of the data can be initiated by either the producer or the consumer

![[Data Generation.png|580]]

### Spontaneous Generation
For example, the data could be produced at the convenience of the producer without any input from the consumer. In this case, the data and/or event information would be stored in registers that are accessible to the consumer. This is called *spontaneous generation*; since there's no feedback between the producer and consumer, there are no guarantees that information is consumed before the next piece is produced, and it is possible that information is lost. 

### Consumer Sensitive Data Generation
If the consumer acknowledges consumption of information before the next piece is produced, this is *consumer sensitive data generation*. In this case, the data/event would be made available, the consumer would receive it then acknowledge having done so before the production of the next piece of data. Information cannot be lost in this case.

### Consumer Responsive Data Generation
In the case of *consumer responsive data generation*, the information is only generated when requested by the consumer. So, the request is made, the producer produces the data/event information, and the information remains available until the next request starts a new production cycle.