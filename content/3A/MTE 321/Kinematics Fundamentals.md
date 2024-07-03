---
title: Kinematics Fundamentals
tags:
  - mte321
date: 2024-07-02
aliases:
  - kinematics fundamentals
---
Kinematics is the study of the geometric aspects of motion.
## Particle vs. Rigid Body Motion
Particles have:
- Point mass
- Negligible size and shape
- Only translational motion
- Kinematic quantities: Position, displacement, velocity and acceleration
  
Rigid bodies have:
- Continuous mass distribution
- Shape and size
- No deformation under the load (distance between any two given points of it remains constant in time)  
- Can have both translational and rotational motion
- Kinematic quantities: *linear* position, displacement, velocity and acceleration, as well as *angular* position, displacement, velocity and acceleration

## Types of Motion

### Pure translation
In pure translation, every line segment on the body remains parallel to its original direction during the motion.
- Rectilinear translation: all points move along straight lines
- Curvilinear translation: all points move along curved lines

![[Kinematics Fundamentals.png|592]]

### Pure rotation
The body possesses one point (center of rotation) that has no motion with respect to the “stationary” frame of reference. All other points on the body describe arcs about that center. A reference line drawn on the body through the center changes only its angular orientation.

### Complex motion
The body undergoes both translation and rotation.  Translation occurs within a plane and rotation occurs about an axis perpendicular to this plane. 
- Any reference line drawn on the body will change both its linear position and its angular orientation. 
- Points on the body will travel nonparallel paths, and there will be, at every instant, a center of rotation, which will continuously change location. 

![[Kinematics Fundamentals-1.png|372]]

See [[General Planar Motion]].

## Degrees of Freedom
The **degree of freedom** is the number of independent parameters/measurements that are needed to uniquely define a system's position in space at any instant in time. Also known as "mobility".

## Linkages
Linkages are the basic building blocks of all mechanisms. They are made up of:
- Links – rigid bodies with at least two nodes.
- Node – points for attachment to other links.
- Joint – connection between 2 or more links at their nodes, which may allow for motion between the connected links.

![[Kinematics Fundamentals-2.png|556]]

## Joints
Joints can be classified in several ways:
- Type of contact between the elements (line, point, surface)
	- Lower pair – surface contact
	- Higher pair – point or line contact
- Number of degrees of freedom allowed
	- 1 DoF = full joint
	- 2 DoF = half joint
- Type of physical closure
	- Form closed – closed by its geometry
	- Force-closed – external force keeps the joint together/closed
- Number of links joined

Lower pair joints have surface contact:

![[Kinematics Fundamentals-4.png]]

## Additional Definitions
- **Kinematic chain:** An assemblage of links and joints interconnected in a way to provide a controlled output motion in response to a supplied input motion
- **Mechanism:** A kinematic chain in which at least one link has been grounded (attached) to the frame of reference (which itself can be in motion)
- **Machine:** A collection of mechanisms arranged to transmit forces and do work. 
- **Crank:** A link that makes a complete revolution and is pivoted to the ground
- **Rocker:** A link that has oscillatory (back and forth) rotation and is pivoted to the ground
- **Coupler:** A connecting rod, a link that has complex motion and not pivoted to the ground
- **Ground:** A link or links that are fixed (non-moving) with respect to the reference frame

## Kinematic Diagrams
- Should be clear and simple
- Allow for identification of links and joints
- Identify grounded links clearly
- Kinematic link (link edge) – line between joints that allow relative motion between links

![[Kinematics Fundamentals-5.png]]