---
title: Sensor Fusion
tags:
  - cs
  - ml
date: 2024-03-01
aliases:
---
## Definition and Basics
Sensor fusion combines two or more data sources in order to generate a better understanding of the system; better quality, reliability, and coverage. Essentially, we want to combine different sensors measurements, and mix in mathematical **models** of the world, with the goal of developing a better understanding of the world.

Big picture: In *perception* for autonomous systems, we want to interpret raw data provided by sensors, so that we can *plan* based on the state of the world, and eventually *act* on our plan.  Perception is responsible for:
- Self-awareness: Localization/position (Where am I? What am I doing? What state am I in?)
- Situational awareness: Detection and tracking
### Benefits of Sensor Fusion
Toward the above goals, sensor fusion is able to:
#### Increase the quality of data
- Basic example: Averaging outputs from identical sensors to get rid of noise.
- With two or more different sensor types, we can reduce the likelihood of correlated noise sources; we can use different types of sensors to calibrate each other
- [[Kalman Filter]] is a common way to do fusion like this; a nice thing about KF is that a mathematical model of the system is already built into the filter

#### Increase reliability
- We have backups in case of failure
- We can have duplicate sensors and using a voting scheme in our fusion algorithm to throw out the data of any single sensor producing a measurement that differs from the other two.
	- Example: 3 pitot tubes in an aircraft to measure air speed
	- We need to be careful of single failure modes that affect all of the sensors at the same time; it's good to have backups of different types (not susceptible to same failure modes)

 ![[Sensor Fusion.png|444]]

- Adding mathematical models in our sensor fusion algorithm means that we can make predictions using our model in the case of sensor failure.
	- Example: Radar tracking a small boat is blocked by a bigger boat; when this happens, the model takes over to make predictions.
	- This is good when the things we are perceiving have good models and we don't need to rely on these models long-term 

#### Estimate unmeasured states
Note that unmeasured $\neq$ unmeasurable; it just means the system doesn't have a sensor that can directly measure the state we're interested in. 
- Example: A single camera can't measure distance, but a pair of cameras can; we can compare the scene from 2 different angles and measure the relative distances between the objects. 

#### Increase coverage area
Cars require multiple ultrasonic sensors (for parking assistance) because of their small range and field of view. A sensor fusion algorithm could be used to merge all of these ultrasonic sensors into one coherent system map.