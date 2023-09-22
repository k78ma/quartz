---
title: Desktop Bot
tags:
  - robotics
date: 2023-09-22
---
Side project with Skye – been wanting to make something with a hardware component for a while and this seems like a good start.
## Hardware
Should be pretty easy?
- Raspberry Pi / some other small computer
- 2 servos for wheels
	- Maybe make it run on treads/diff drive like a tank
- 3D printed body

## Software
### Natural Language Instructions
I want the robot to follow simple natural language instructions.

Idea: Have function prototypes for movement and rotation

```python
def move(direction, speed, distance)
	# control motors to move in the same direction 
	# at some speed for some distance
	# need to know motor rotation to distance IRL

def rotate(angle)
	# control motors to move in opposite directions
	# to achieve some angle of turn
	# need to know model rotation to angle IRL
```

And then, we train a small language model to turn a natural language instruction into a function call like so:
`Instruction: "Move forward slowly for 5 meters"` → `move(forward, slow, 5)`
`Instruction: "Turn left"` → `rotate(-90)`

We can probably get an advanced model like GPT to generate training data for us, but we should only need small model to get what we want.
### Peer-to-peer communication
No idea how to do this.