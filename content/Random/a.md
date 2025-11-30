I was drawn to robotics by the magic of making machines come alive. As robots approach real-world
deployment, that magic must be coupled with reliability. Across projects in computer vision, grasping,
industrial vehicles, and autonomous driving, I have seen the same pattern: deep learning is powerful but
fragile, while deployable robots require strong generalization and verifiable safety. This drives my goal of
building robotic systems that are capable, safe, and useful in the real world.
Deep learning research. My earliest exposure to machine learning came through COVID-19 medical
imaging research under Prof. Pengcheng Xi and Prof. Alexander Wong. Medical datasets suffer from class
imbalance and data scarcity, so standard deep learning methods struggle on rare but clinically significant
cases and learn biased decision boundaries. Our work [1–3] combined self-supervised pre-training, imbalance-
aware loss functions, and trustworthiness quantification, and our model was deployed across 15 hospitals. I
contributed to model design and training, and led much of the interpretability and trustworthiness evaluation
that helped clinicians understand model outputs. This experience showed me that deep learning can deliver
real impact in high-stakes settings, yet is often limited by data scarcity and long-tailed behavior.
I carried these lessons into bin picking research with Prof. Wong, where I experimented with Mixture
of Experts methods that train specialist models for long tail cases [4]. Even with corner cases explicitly
targeted and synthetic data in a controlled environment, improving robustness remained difficult and often
exposed new failure modes. These themes continued with WATonomous, the self-driving team at UWaterloo,
supervised by Dr. Mohammad Al-Sharman, where I developed trajectory prediction and 3D perception
components for our autonomous vehicle. For example, we designed a 3D flow method to support dynamic
3D reconstruction that performed reliably under nominal conditions. However, it failed systematically when
ground segmentation errors broke its geometric assumptions, underscoring that robustness is not just a matter
of scaling models. This pushed me toward the question that now motivates my work: how can we build robotic
systems that operate safely in the open world despite gaps between development and deployment?
My current research under Prof. Pengcheng Xi and Prof. Yue Hu continues to address this question as
robot learning moves toward large-scale end-to-end systems. I am investigating how techniques from LLM
interpretability and steering, such as activation steering and constraint-aware decoding, can be adapted
to robot foundation models to make their behavior more constrained and predictable, and therefore more
suitable for deployment.
Industry robot safety work. To understand how these challenges are handled in deployed systems, I
sought industry opportunities. At Polymath Robotics, a startup building autonomous industrial vehicles, I
implemented and trained 3D perception models for obstacle and terrain understanding [5]. On platforms and
sites well represented in our training data, these models generalized well. However, sparse data from new sites
and vehicle configurations forced us to fall back on geometric heuristics, such as classifying obstacles by height
in the point cloud. This contrast between sophisticated models and pragmatic heuristics highlighted the gap
between research-grade perception and deployable autonomy, suggesting that better domain adaptation and
uncertainty estimation could expand the regimes where learned models are safe to use. I later worked on
Polymath’s ISO 26262 certified functional safety stack, which exposed me to the rigor of production autonomy
and reinforced that deployments must integrate classical safety architectures with data-driven components.
Compared with industrial vehicles, self-driving cars must handle more complex, ambiguous situations,
while still meeting stringent safety requirements. Working on the active safety system for the Mercedes-
Benz autonomous driving program at NVIDIA, I started to view autonomy as a coupled problem of models,
data, and safety engineering. For example, I prototyped a confidence-based post-processing method for
object detection models and coordinated adjustments in sensor fusion and planning. On validation scenarios,
this significantly reduced automatic emergency braking false positives while maintaining high recall for true
hazards.

To continue contributing to capable and safe autonomy at scale, I want to build deeper foundations in
robot learning, control, optimization, and safety-critical systems, areas that my undergraduate coursework
has touched only lightly despite some practical exposure through industry and research. The Stanford EE
MS offers the theoretical grounding and breadth I am seeking, and the Honors Cooperative Program would
allow me to connect this academic training directly with my full-time work on NVIDIA’s autonomous vehicles
team. This structure is ideal for developing simultaneously as a researcher-practitioner and as an engineer
contributing to a real autonomous product pipeline, advancing toward my long-term goal of working as a
research engineer driving new capabilities in robotics.
Specifically, courses such as EE 260B (Principles of Robot Autonomy II) and EE 381 (Sensorimotor
Learning for Embodied Agents) would deepen my understanding of how learning and interaction shape
modern robotic systems. CS 238 (Decision Making Under Uncertainty), AA 203 (Optimal and Learning-
Based Control), and AA 228V (Validation of Safety-Critical Systems) align directly with my goal of designing
autonomous systems that are both effective and provably safe. Beyond these courses, the breadth of offerings
in the EE MS program would allow me to assemble a curriculum spanning learning, control, and safety in a
way matched to my goals.
Stanford’s EE department also has an exceptional concentration of faculty aligned with my interests.
Prof. Dorsa Sadigh’s research on safe decision-making and human–robot interaction parallels my focus
on reliability in autonomy. Prof. Chelsea Finn’s work on generalizable robot learning from large-scale,
real-world data relates to my experience building deep learning systems for perception and my vision of
robust, general-purpose robot capability. Similarly, Prof. Shuran Song’s research on learning visuomotor
policies complements my background in 3D perception and data-driven robotics. I also hope to draw on
perspectives outside EE, such as Prof. Marco Pavone’s work on long-tail robustness and safety-aware
planning for autonomous vehicles, which reflects the challenges I encounter in industry.
My long-term aim is to develop robotic systems that are broadly capable, reliable, and ready for real-
world deployment. Stanford’s EE MS, especially through the HCP format, offers the depth, structure, and
environment that would complement the practical challenges I work on at NVIDIA. I look forward to growing
at this intersection and contributing to the next generation of robust autonomous systems.