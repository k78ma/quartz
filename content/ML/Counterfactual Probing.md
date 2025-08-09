---
title: Counterfactual Probing
tags: 
date: 2025-08-01
aliases:
  - counterfactual probing
draft: "true"
---
MacOS Vulcan path: `/Users/kai/VulkanSDK/1.3.290.0`

## Install Miniforge
Install miniforge:
```
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
```

Run with:
```
bash Miniforge3-$(uname)-$(uname -m).sh
```

May need to init with:
```
~/miniforge3/bin/conda init
```

## Install Tools
```
apt-get update
```

```
apt-get install vim tmux -y
```

## Install Vulkan

```
apt-get install libvulkan1 -y
```

```
touch /usr/share/vulkan/icd.d/nvidia_icd.json 
```

```
vim /usr/share/vulkan/icd.d/nvidia_icd.json
```

Write following:
```json
{
    "file_format_version" : "1.0.0",
    "ICD": {
        "library_path": "libGLX_nvidia.so.0",
        "api_version" : "1.2.155"
    }
}
```

```
ls /usr/share/glvnd/egl_vendor.d/
```

```
apt-get install libglvnd-dev
```

## Upload Code
```
scp -P 10225 -r ~/code/lerobot-sim2real/ root@47.47.180.73:/workspace/
```

## Create conda env
```
conda create -n ms3 "python==3.11"
```

```
conda activate ms3
```

```
pip install -e .
```

```
pip install torch
```

Check sim:
```
python -m mani_skill.examples.demo_random_action
```

## Training
```
seed=3

python lerobot_sim2real/scripts/train_ppo_rgb.py --env-id="SO100GraspCube-v1" --env-kwargs-json-path=env_config.json \
  --ppo.seed=${seed} \
  --ppo.num_envs=1024 --ppo.num-steps=16 --ppo.update_epochs=8 --ppo.num_minibatches=32 \
  --ppo.total_timesteps=100_000_000 --ppo.gamma=0.9 \
  --ppo.num_eval_envs=16 --ppo.num-eval-steps=64 --ppo.no-partial-reset \
  --ppo.exp-name="ppo-SO100GraspCube-v1-rgb-${seed}" \
  --ppo.track --ppo.wandb_project_name "SO100-ManiSkill"
```

## Evaluate

Evaluate original policy:
```
python lerobot_sim2real/scripts/evaluate_distribution.py --checkpoint ckpt_2451.pt --env_kwargs_json_path env_config.json
```


## Compare Runs

```
pip install scikit-learn seaborn umap-learn
```

```
python lerobot_sim2real/scripts/compare_runs.py --run_a eval_original --run_b eval_black
```