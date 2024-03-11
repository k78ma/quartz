---
title: Review
tags: 
date: 2024-02-16
aliases: 
draft: "true"
---
## Polymath

### Perception
- Polymath builds general autonomy software for industrial vehicles. 
- We do mostly lidar-based vision with ground segmentation (just ground vs. obstacle) which is fine for most use-cases, but gets tricky in complex environments. There are also cameras but they're mostly for teleoperation
- Forest environments – rocks and tall grass are both identified as obstacles but have very different implications for vehicle safety
- So, I worked on 3D object detection with lidar, as well as camera-lidar fusion to take advantage of semantic image features
	- PointPillars – lidar object detection
		- Discretize the point cloud into vertical columns (pillars), aggregates features within each pillar through a learnable neural network, and then processes these features for object detection in a 2D pseudo-image format.
	- BEVFusion – camera-lidar fusion for object detection
		- Camera project to lidar space → lost semantic information
		- Lidar projection to camera space → lost spatial information
		- Project both to BEV instead
- Map-to-vision system for ROS – extract bounding box coordinates from object detection, project them onto a costmap, which can then be used for navigation
- Each class gets its own costmap layer and you can configure the cost, so certain classes get higher costs than others
- Layer all the class costmaps together to get big costmap
- Deployment – cloud, local containers
### Baymax
- Robotic systems engineering project
- C++ ROS node that checks robot health monitor in terms of sensors and nodes
- Checks sensors are publishing at correct rates, latency, blank messages
- Check nodes are publishing the correct topics
- Everything is configurable from a single file
- Publish heartbeat and diagnostics
- Log failures
- Visualize system errors and how those errors propagate – if a sensor or some topic is not healthy, any nodes that use it are not healthy, and the topics these nodes publish are not healthy either
- Optimizing to run with low overhead – need to perform a lot of calculations and subscribe to a lot of topics
	- Callback functions are lightweight – heavy computations are offloaded to separate threads or asynchronous processing
	- Multi-threaded executor if your node handles multiple subscriptions or services
	- Uses intra-process communication to avoid serialization and deserialization overhead when communicating between nodes within the same process
	- ROS built in
### Customer Work
- ROS sensor drivers for custom sensors with no ROS integration
- Compound Eye – depth image to costmap conversion
- Write URDF/XML specifications for customer robots to use in Gazebo simulations

## VIP
- FLAIROP project – collaboration with a bunch of German & Canadian institutions and companies
- I specifically worked on the object detection and classification for robot arm pick & place in warehouses
- Specific problem we were trying to solve:
	- Datasets with a large number of classes
	- Small but important difference between classes – two types of screws might look very similar
	- New classes can be added to the dataset at any time – factory started shipping a new thing
- To solve this, I built a system to automatically generate and train Mixture-of-Experts models
- First, train a normal object detection model
- Then, programmatically analyze confusion matrix to find "weak groups" – objects that are frequently confused with each other
- Automatically generate filtered datasets (every image must have at least one object belonging to a weak group), and train "expert" models
- Expert model ensembling – gating mechanism either via confidence or a gating network
- Pipeline work – automating label generation from raw data files to COCO dataset labels for MetaGraspNet, and helped add pose and keypoint annotations and adopt RLE segmentation.
	- Run-length encoding: encode the location of foreground objects in segmentation
		- Give a list of start pixels and how many pixels after each of those starts is included in the mask
		- Example: Donut hole
- Helping grad students implement deep reinforcement learning papers for pose-based grasping
	- Read papers → help turn into algorithms

## NRC
- COVID-Net project – initiative from UWaterloo and NRC for ML-assisted COVID diagnosis
- I worked on COVID diagnosis from lung radiographs (X-rays)
- The core problem I worked on was addressing the data weaknesses that come with novel diseases:
	- Lack of data
	- Imbalanced data – a lot more benign (negative) than malignant (positive)
- Small datasets means that transfer learning is good, but the success of transfer learning is heavily dependent on the relevance of upstream data, and the it requires high quality labels, which is costly for medical imaging
- To combat this, we used supervised pre-training on ImageNet as usual, but added self-supervised pre-training on a relevant chest X-ray dataset (not COVID).
	- SimCLR – contrastive method from Google; do data augmentation, use a encoder to extract representation vectors from images, and then train use a contrastive loss function on the vectors – basically just want to determine if two augmentation are from the same original image, or from different origins.
	- MoCo (momentum contrast) – contrastive method from Facebook that uses a dictionary look-up mechanism. 
		- For each image, generate 2 augmentations 
		- One is fed into a query encoder network, which produces a feature vector
		- Other is fed into the key encoder, which produces the key vector.
		- Key encoder and query encoder have the same architecture but different params.
		- They key encoders parameters are updated as a moving average of the query encoder's parameters, but with a lag introduced by a momentum term. This slow update helps in maintaining consistency in the representations learned over time.
		- MoCo maintains a dynamically updated dictionary (queue) of keys. This dictionary stores the representations (keys) generated by the key encoder from previous batches.
		- For a given query, its positive key is the one generated from the same image but through the key encoder. Negative keys are all other keys in the dictionary.
		- Use a contrastive loss function to pull the query closer to its positive key while pushing it away from the negative keys. The loss is minimized when the query is similar to its positive key and dissimilar from the negative keys.
		- After processing a batch, the keys generated by the key encoder are added to the dictionary. If the dictionary exceeds its size limit, the oldest keys are removed to make space for the new ones
		- Weakness: Having two separate encoders (query and key encoders) increases the complexity of the model architecture, sensitive to the choice of the momentum coefficient used to update the key encoder, size and management of the dynamic dictionary of keys can significantly impact the model's performance.
- For data imbalance in the fine-tuning COVID dataset, we used an AUC maximization loss function.
	- ROC (Receiver Operating Characteristic) Curve – plot true positive rate against false positive rate for various threshold settings. 
	- A perfectly performing classifier would have AUC = 1, since it would have no false positives at any threshold.
	- AUC is generally a good metric for imbalanced distributions, as it evaluates the model's ability to discriminate between classes rather than its overall correctness. Thus, it makes sense to directly optimize for it during the training process by using it for loss.
- Trustworthiness and explainability – with this many data issues and considering the importance of medical imaging, it's important to verify and quantify these
	- Explainability – attention maps verified by radiologists
	- Trustworthiness – trust score formulated based on confidence + correctness
- Didn't make too many fundamental contributions – more of an engineering task of putting the right pieces together to solve the problem at hand
	- Doing experiments, ablation studies, visualizations, to verify the efficacy of each component

## WATO
- University AV design team
- Motion planning solver module with C++ and ROS 2 to generate the kinematic model of our autonomous vehicle, then solve for the next state based on the current trajectory.
	- Kinematic model: C++ implementation to accurately calculate the vehicle's future state given steering, throttle, and brake inputs.
	- Planning: Use information from perception and SLAM to generate feasible paths from the current location to the destination while avoiding obstacles
		- Trajectory generation with cubic splines – smooth/continuous and low-cost
- Containerized in Docker
- Research projects – multi-modal trajectory prediction of agents, 

## Projects
### SlimeVolleyTeam
- Extension of SlimeVolleyGym project from hardmaru – reinforcement learning/genetic algorithms for slime agents playing volleyball against each other.
- Expanded to 2v2 and 3v3 scenarios – trying to get emergent teamwork behavior, like passing the ball to teammates.
### IRAP-Train 
- Revenue prediction for small businesses (built for NRC Industrial Research Assistance Program). 
- Given company data (number of employees, current revenue, etc), do time-series ML to predict revenue at a given time.
### MAY
- Automatic app generation with LLMs – from prompt, write, debug, and deploy code
- Integrated terminal in web browser
- Community features – share generated applets, comment, review – full-stack stuff
### Kalman Tuner
- Process Noise Covariance $Q$ – represents the uncertainty or "noise" in the process model.
	- Characterizes how much uncertainty we believe exists in our prediction of the system state from one time step to the next, before seeing the next measurement
	- Accounts for the inaccuracies in the model or external factors influencing the system that the model does not capture
	- Higher $Q$ = more uncertainty → filter relies more on new measurements rather than its predictions
- Measurement Noise Covariance $R$ – represents the uncertainty or "noise" in the measurements themselves.
	- Characterizes how much confidence we have in the measurements that we receive. 
	- A higher $R$ indicates less confidence in the measurements, leading the filter to rely more on its model predictions rather than the noisy measurements
- Automate $Q$ and $R$ tuning by iteratively solving for them with an optimizer
	- Use Expectation Maximization to find Q and R 
	- Key Idea: Given an EKF and sensor data, Find $Q$ and $R$ that maximizes the likelihood $p(\mathbf{y}|\Theta) = L(\Theta|\mathbf{y})$ of the sensor data occurring
- Make robot bring-up easier by tuning Kalman Filters automatically using an EM algorithm.  
### STM32 RTOS
- Simple RTOS for STM-32 Cortex M4 microprocessors, written in C.
- Extended version of labs for MTE 241 course
	- Kernel initialization (`osKernelInitialize`)
		- Initialize main stack pointer (MSP), counter for number of running threads
		- Adjusts the priority of the `PendSV` pendable service interrupt to be low to ensure it does not preempt important system operations
	- Thread creation (`osCreatThread`)
		- Allows the creation of new threads by allocating stack space and initializing stack frames with default values and the thread function to be executed
		- It updates global thread management data structures
			- `threadArray` tracking stack pointer and function pointers
			- `numThreadsRunning` tracking the current number of threads that have been successfully created and are managed by the kernel
			- `stackptr` holds the address of the next available stack top if we want to create a new thread
	- Scheduler (`osSched`)
		- Simple round-robin scheduling algorithm that switches context between threads by updating the Program Status Register (PSP) to point to the next thread's stack.
		- Currently working on priority queue scheduler
	- System calls (`runThread`, `osYield`)
		- Facilitates thread execution and yielding control back to the scheduler using software interrupts (SVC).
	- Interrupt Service Routines (`SVC_Handler_Main`)
		- Handles system calls triggered by threads (e.g., starting a thread, yielding control) based on the service call number. 
		- Includes a case for context switching and printing messages for testing and debugging purposes.
	- Assembly instructions
		- 1. Uses inline assembly for critical operations such as triggering system calls (`__asm("SVC #n")`)
		- Modifying the Program Status Register, and performing an immediate system barrier (`__asm("isb")`) to ensure memory operations complete before continuing.


![[Resume Review.png]]