---
title: W2024 Polymath
tags:
  - mte220
date: 2023-12-14
aliases:
---
### ML
#### Training
- Finish training pipeline
#### Deployment
- Local deployment as a ROS node/package with checkpoint onboard
- Cloud deployment
	- Remote ROS node running on Paperspace with rosmaster URL
	- REST API endpoint – Azure, AWS, Cerebrium
		- Message schema and passing mechanism to mapping system
- Multiple deployment methods?
- Basically I want deployment to be robust AND easy to use but local and cloud deployment methods each have flaws
	- Local: Different hardware for inference, CUDA…
	- Cloud: Access to internet? (Boat, Kodama)
#### Bring-up
- Entire ML pipeline should have a clearly defined and smooth bring-up process, eventually become a part of Polymath's general bring-up
	- Maybe separate the parts we need from the big MMDet3D repo
- Is it easier for me to create in-house tools for collection/labeling?
- Data collection → Labeling → Training → Deployment

### Other
#### Automatic Kalman Filter
- Thought it might be interesting to pick up some work in this area, Alex doesn't seem to have too much time to play around with it but I'm also not too sure what needs to be done
- Good opportunity for me to learn more about EKF + MLE

#### Robots/General Engineering
- Be more involved in core autonomy development for clients, robot bring-up
- Will is gone so maybe pick up some slack on his projects