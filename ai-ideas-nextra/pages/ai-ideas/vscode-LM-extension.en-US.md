# VSCode LM extension

Develop an extension for VSCode for running tasks like training / evaluating LMs like nx has for task running with Nx Console.

Code example in python:

https://github.com/allenai/OLMo-Eval/tree/main/olmo_eval/tasks/olmes_v0_1#example-usage

```bash
python -m olmo_eval.run_lm_eval --model lm::pretrained=EleutherAI/pythia-1b \
    --task-file olmo_eval/tasks/olmes_v0_1/task_specs_std.jsonl \
    --model-max-length 2048 --max-batch-tokens 4096 \
    --metrics-file metrics.json --full-output-file predictions.jsonl \
    --num-recorded-inputs 3 --model-max-length 2048
```

Possible UI features:

- Play button to run the task
- Selection of the model
- Selection of the task-file
- Selection of the model max length, max batch tokens
- Selection of the metrics file, output file
- Amount of recorded inputs
- etc.

---

Example output of local model evaluation:

```bash
** Combined OLMES-v0.1 scores **
arc_challenge: 31.4  (CF)
arc_easy     : 63.4  (CF)
boolq        : 56.8  (MCF)
csqa         : 50.9  (CF)
hellaswag    : 48.0  (CF)
mmlu         : 31.1  (CF)
openbookqa   : 40.4  (CF)
piqa         : 68.9  (CF)
socialiqa    : 46.4  (CF)
winogrande   : 52.7  (CF)
--------------------------
average      : 49.0
```

- Would be nice to have it in vscode also?
    - Is a generated report for the evaluation needed?
    - With possibility to see as many details as needed?

- [ ] Check https://github.com/allenai/OLMo-Eval/tree/main/olmo_eval/tasks/olmes_v0_1 for analysis