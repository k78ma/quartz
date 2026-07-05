---
title: Front Loader Project Script
tags:
  - mte321
date: 2024-07-25
aliases:
  - front loader project script
draft: "true"
---
Today, I will be explaining the front loader mechanism. It's commonly used with various industrial and agricultural machines, especially tractors. The one I'll be using as an example today is the 120R front loader from John Deere, which is designed for small tractors.

The primary function of the front loader mechanism is to convert the translational motion within its hydraulic cylinders into the rotational motion of the loader arm and bucket. The clever thing about this mechanism is that it uses leverage, so that not a lot of force is required to lift heavy loads in a stable and controlled manner, and because there are only two hydraulic actuators involved, using the mechanism is fairly easy and its cheap to manufacture and maintain.

How does it work? The ground frame is the tractor that the loader is attached to. We have two things attached to the ground frame. First, we have a loader arm (big ternary link labeled link 4 on the kinematic diagram), and a hydraulic cylinder (represented by links 2 and 3 and connected by joint C). When the hydraulic cylinder extends or contracts linearly, it applies a force to the loader arm, which in turn creates a torque about joint A, which is where the arm is connected to the ground link. So there, linear motion in sliding joint C or the hydraulic cylinder has turned into rotational motion for the loader arm about joint A.

Similarly, the hydraulic cylinder represented by links 5 and 6, and sliding joint F exerts a linear force on joint G, which is the end bucket used for picking things up. This again creates a torque around joint H, so we once again have that linear motion in F becoming rotational motion around H, which lets us adjust what angle the bucket is tilted at.

I mentioned leverage earlier and this is where it comes in; torque is expressed as Force times distance, so to minimize the amount of force from the hydraulic cylinders needed to generate torque, we make the arm lengths involved in torque long. So for example, the length from D, which is where we're applying the force, and A is, which is the pivot point where the torque is taken, is pretty long, which means that the hydraulic cylinder C doesn't need to provide as much linear force.

Note that the hydraulic cylinders are represented as 2 links connected by a sliding joint. These 2 links move linearly with respect to each other, which is why we say we're converting linear motion to rotational motion. If we look at them with respect to the whole system, they move in rotational or complex motion, but this is a result of the force from their linear actuation. The types of motion in each link, and link types, are discussed in detail on my slide.

In total we have 7 links and 8 full joints (6 rotational and 2 sliding). So applying Kutzbach's equation gives us 2 degrees of freedom. It's easy to see that this is intuitively correct, because our 2 degrees of motion are the loader arm lifting up or down, and the bucket tilting up or down.

Finally, in terms of applications, these front loaders are very ubiquitous because of how simple and effective they are. Any setting that involves moving around heavy loads in a fairly controlled manner like agriculture, construction, mining, forestry will have this mechanism or mechanisms like this. Some areas that I didn't see too much in my research that I think would be good are automated warehouses and disaster relief. An interesting new development is that many manufacturers are now producing front loaders that have a self-leveling mechanism to keep the bucket at the same angle relative to the ground while the arm is moving.