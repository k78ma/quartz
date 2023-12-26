---
title: Adding ML to Polymath's Perception System
tags:
  - polymath
date: 2023-10-15
---
Hello, I’m Kai Ma. I interned as a Robotics Engineering Intern at Polymath Robotics this summer, focusing on machine learning. Here, I’ll share one of my projects – making Polymath’s perception system a bit more intelligent.

## The Problem
Polymath’s existing object detection systems consists of two parts. Lidar point clouds are ingested by the system, and a ground segmentation using an algorithm called [Patchwork++](https://arxiv.org/abs/2207.11919) is used to remove points that are part of the ground; then, height-based filtering is done such that points below a certain height are considered to not be obstacles. The remaining points are then considered obstacles, and are mapped so that the robot will avoid them; the figure below shows an example of this.

![[blog-1.png|544]]

While this system is sufficient for basic autonomy, it has some flaws:
- **Lack of semantic information** – we know where obstacles are in space, but don’t know what they are. This is troublesome for complex environments like forests, where many objects like tall grass may bypass the height filter but are not actual obstacles. Alternatively, small objects like rocks that are dangerous to the robot may not be considered at all!
- **Requires human-in-the-loop** – Polymath autonomy is used for many different robots in many different environments. With the current system, a Polymath engineer needs to tune the height filtering to work for each different use case, which is not exactly ideal for Polymath’s vision of a general autonomy stack.

What are some features that would fix this? An better system would have:
- Semantic labels for objects.
- Outputs that can be integrated with ROS costmaps or contribute meaningfully to Polymath autonomy in some way.
- Low-latency to enable running at real-time.
- Re-usable/generalizable to different use cases, such as different environments, semantic classes, and sensor configurations

## The Model(s)
With the above requirements in mind, I dove into machine learning literature to find an appropriate model. We ended up choosing these two:
### PointPillars
PointPillars is considered a class lidar-based approach. It works by creating “pillars” (vertical columns of points) in birds-eye-view (BEV) space, which are then transformed to a unified representation by encoding the points to a canonical coordinate system and aggregating their features. The encoded pillar features are then scattered into a 2D pseudo-image based on their BEV location, which means that 2D convolutional network architectures (which are mature and well-studied) can be used for object detection. These 2D detections are then transformed back to 3D space. This method is able to balance efficiency by preserving spatial features effectively while avoiding 3D convolutions.

[PointPillars](https://arxiv.org/abs/1812.05784) is chosen as the lidar-based object detection backbone for Polymath’s new perception system for a couple reasons. Most importantly, it is considered a classic approach and is fairly well-studied, which means that its behavior is well-understood and relatively stable. While it’s not necessarily state-of-the-art anymore, it achieves respectable performance in all aspects without significant weaknesses. Furthermore, due to its status as a classic method, many open-source implementations exist, including adoption by MMDetection3D and even existing integrations with ROS2.

![[blog-pp.png]]

### BEVFusion
[BEVFusion](https://hanlab.mit.edu/projects/bevfusion) is a multi-modal (camera + lidar) method for 3D object detection using sensor fusion. Sensor fusion is very attractive to perception systems as you get to combine the spatial features of lidar (where things are in 3D space) with rich semantic features from camera (colors, textures, etc). But it's hard to combine these features due to their difference in dimensionality; projecting images to 3D tends to lose important semantic information, while projecting 3D lidar points to 2D loses spatial information.

To combat this, BEVFusion instead uses a unified bird’s-eye view (BEV) space by using independent camera and lidar encoders to extract features for each sensor modality and transforming them to BEV. Then, a convolutional BEV encoder can be used on the unified BEV features to align different features more accurately. However, this pipeline has a lot of view transformations, which makes it inefficient; thus, an optimized BEV pooling operation is introduced to reduce latency during inference. Notably, since the effective sensor fusion framework presented by BEVFusion is task agnostic, it can be used for other tasks, such as predicting maps directly; it is also relatively robust to environmental conditions such as poor lighting or rain. While BEVFusion still has other issues, such as sensitivity during training and performance degradation in joint multi-task training, it has garnered a lot of popularity due to the success of its novel approach, leading to many works using it as a foundation.

Because BEVFusion provides a general framework for unified representation, it is robust to different sensor configurations ($n$ cameras, $n$ lidars). Furthermore, birds-eye-view is inherently easy to convert to the costmaps used by Polymath for navigation. While the original repository is a relatively basic proof-of-concept and not well-maintained, other implementations are becoming available despite the paper being less than a year old due to its success, including an experimental MMDetection implementation, and an NVIDIA implementation that is optimized for NVIDIA hardware. These new implementations are not yet completely stable, making BEVFusion relatively hard to train and deploy; as such, PointPillars is used as a default approach for Polymath Robotics, while BEVFusion is mainly reserved for customers operating in complex environments that would significantly benefit from camera information for semantic understanding.

![[blog-bevfusion.png]]

### Why Not Segmentation?
During initial planning for this project, we discussed doing point cloud segmentation instead of detection. To clarify the terminology here:

- Detection: 3D bounding boxes (with semantic labels) around point clouds of interest. Left side in figure below.
- Segmentation: Semantic labels on every point in a point cloud. Right side in figure below.

![[blog-detseg.png]]

So why did we go with detection instead of segmentation? Segmentation models tend to be more computationally expensive to train and run inference with, as every single point in a point cloud (which can get really big!) needs a semantic label. Furthermore, having semantic label for every single point doesn't really affect navigation much for most use-cases; we just need to know the approximate area taken up by an object in space, not every minute detail. Furthermore, segmentation is not studied as much as detection (maybe for some of the reasons above), so there are less papers and open-source repositories for us to try.

## Implementation
Here are some things we did to build the perception system with models in a nice way:

1. **Building on top of MMDetection3D model implementations.** MMDetection3D is arguably the most complete and actively maintained open-source toolkit for 3D object detection tasks, leading us to build on top of it for machine learning components. It supports a large selection of models (including PointPillars and a preliminary implementation of BEVFusion), as well as training methods, optimizers, and lots of nice utilities. MMDetection3D is also compatible with other toolboxes that are potentially useful for the perception system, such as [MMRazor](https://github.com/open-mmlab/mmrazor) and [MMDeploy](https://github.com/open-mmlab/mmdeploy). MMRazor is a toolkit designed for model optimization/compression, contributing to lower latency without performance sacrifices. On the other hand, MMDeploy converts models to appropriate formats for deployment on edge hardware.

2. **ROS Integration:** Model inference is implemented as a ROS node that subscribes to camera and lidar data topics and publishes 3D object detection model outputs. 

	The most interesting and important part of our implementation is probably the output of this ROS node. The direct output of the MMDetection3D model is 3D bounding boxes with class labels in the format:$$(x, y, z, x_{\text{size}}, y_{\text{size}}, z_{\text{size}}, \psi, c, P(c))$$where $(x, y, z)$ specifies the coordinates of the center of the bounding box relative to the ego frame of the robot, $(x_{\text{size}}, y_{\text{size}}, z_{\text{size}})$ specifies the width of the box in each direction, and $\psi$ denotes the yaw of the box. For semantic information, $c$ is a number indicating a class label, and $P(c)$ is a probability or confidence value between 0 and 1 of the detected object. To turn this bounding box format into forms that are more useful and interpretable, we create layered ROS cotmaps:

	**Layered ROS Costmap:** Predicted bounding box coordinates are extracted and projected to a costmap. To include semantic information in a flexible way, each class gets its own costmap. For example, if a model is tasked with detecting bounding boxes for "human", "tree", and "vehicle" classes, there would be three published costmaps: a `human_costmap` only showing human bounding boxes, and a `tree_costmap` and `vehicle-costmap` each showing only bounding boxes for their classes. These class-specific costmaps can then be layered together to achieve the same effect as having a single costmap displaying all bounding boxes; however, having class-specific costmaps gives the navigation system more flexibility as it can be configured to only subscribe to certain class’ costmaps and ignore others, or assign higher cost values to certain classes.
	
	Lots of other output formats are also implemented with minimal overhead, such as standard ROS `Detection3D` messages, as well as visualization with `Marker` messages and Open3D. This gives Polymath's navigation engineers lots of options to work with.


There are lots of details to our implementation that aren't covered, such as model training processes and transfer learning. While our repo isn't quite ready to be open-sourced yet, hopefully it'll come soon in the future!

## ML as Part of Polymath's Product
If you are a Polymath customer, do you need this system? Not necessarily; it depends on your needs and the complexity of the environment your robots operating in. For example, if you don't need much semantic awareness and are content with just knowing where obstacles are (but not what they are), the existing system of ground segmentation and height filtering will work fine. If you do want some semantic awareness and your environment is relatively simple in terms of lidar feature diversity (things don't look similar in point cloud form), you can use PointPillars or BEVFusion's lidar backbone. If your environment is very complex, a full BEVFusion model with both camera and lidar might be the way to go.

![[productization.png]]


## What's next?
- During my internship I was able to finish most components of this system – there are a still few kinks to be worked out.
- Testing! We did some brief testing on Farmonacci, Polymath's testing tractor and successfully produced some costmaps, but there's lots more to be done before safe deployment.
- Once everything is up to standard, we'll open-source stuff and offer to train and deploy models for Polymath customers.
- We also already have some improvements in mind to make this system even better:
	- Model optimization for faster inference (did some of this but more can be done!)
	- Adaptation for specific hardware, such as OAK cameras
	- Combination with existing stack (Ground segmentation + ML = speed)
	- And lots more!