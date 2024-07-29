---
title: Final Individual Lab Note
tags:
  - mte325
date: 2024-07-29
aliases:
  - final individual lab note
---
**Kai Ma**

1. *What was the most challenging part of the project for you?*

The most challenging part for me was the debugging process, primarily due to the high level of complexity from working with both hardware and software. For any given bug, it took considerable time to determine whether the issue was with the hardware, the software, or both. There were many instances where behavior seemed nondeterministic and varied randomly. Consequently, some bugs would disappear and reappear unpredictably; we would think we had fixed an issue, only for it to re-emerge later.

2. *What part or parts of the project contributed the most to your learning?*

The implementation of various functions in C code was particularly enlightening, as it allowed me to see the real-world effects of my code, reinforcing concepts learned in class. This hands-on experience solidified my understanding of the material. 

I also found that debugging, while frustrating, was very useful as a learning experience. It forced us to dive deeper into the intricacies of the code and the underlying hardware. This process helped me understand the workings of the system, while also reinforcing good development practices so that we can write error-free code in the first place.

3. *What would you do differently if you were to complete another embedded systems project in the future?*

For future projects, I would incorporate more rigorous testing methodologies throughout the development process, including unit testing, integration testing, and system testing, to catch bugs early and ensure system reliability.

It would also be valuable to refine my skills in reading schematics and datasheets for projects like this. While this was exercised in the labs, I still don't feel totally confident; for example, our group sometimes had issues with picking appropriate pins to use for connecting peripherals.

4. *What wouldn’t you change if you were to complete a different embedded systems project in the future?*

I appreciated the modular, progressive approach we took with this project, where we implemented each component separately and step-by-step (e.g., limit switches, then ADC, then ADC + motor, and finally integrating everything). This approach made development, testing, and maintenance easier, as we didn’t have to manage multiple components simultaneously, and integration at the end was straightforward. For example, for the limit switches, all we had to do in terms of code was uncomment what we had already prepared.