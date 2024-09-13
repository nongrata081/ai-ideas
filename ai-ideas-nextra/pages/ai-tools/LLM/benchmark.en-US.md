# Benchmark

- [What's going on with the Open LLM Leaderboard?](https://github.com/huggingface/blog/blob/main/open-llm-leaderboard-mmlu.md)

---


- [ ] extract benchmarks from [safety-eval github](https://github.com/allenai/safety-eval?tab=readme-ov-file#safety-benchmarks)
Safety benchmarks
For all benchmarks requiring safety classification unless noted otherwise, as a default, we use the WildGuard classifier to evaluate the safety of model outputs.

WildGuardTest
Harmbench
ToxiGen: use tomh/toxigen_roberta as the classifier
XSTest
JailbreakTrigger (in TrustLLM)
Do-anything-now
WildJailbreak (both harmful and benign contrast sets)

---

General capabilities benchmarks
Optimal safety training maintains or even improves models' general capabilities. We include general capability evaluation for monitoring this dimension of safety training.

AlpacaEval (V2)
MTBench
GSM8K
Big Bench Hard (BBH)
Codex-Eval
MMLU
TruthfulQA

---

Safety Classifier Evaluation

Prompt harmfulness benchmarks
WildGuardTest
ToxicChat
OpenAI Moderation
AegisSafetyTest
SimpleSafetyTests
Harmbench Prompt
Response harmfulness benchmarks
WildGuardTest
Harmbench Response
SafeRLHF
BeaverTails
XSTest-Resp
Response refusal benchmarks
WildGuardTest
XSTest-Resp

---

- [🤗 Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
    - [docs](https://huggingface.co/docs/leaderboards/open_llm_leaderboard/about)
    - 📈 We evaluate models on 6 key benchmarks using the [Eleuther AI Language Model Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness), a unified framework to test generative language models on a large number of different evaluation tasks.
        