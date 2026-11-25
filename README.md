# The AI Agent Apology One-Liner

[![make.fun · u-kiencx-the-ai-agent-apology-one-liner-cfedd447](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![rank](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/azkamahvin88/ai-agent-apology-entry/rank.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![reward](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/azkamahvin88/ai-agent-apology-entry/reward.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-ai-agent-apology-one-liner-cfedd447)

One short line — under 160 characters — that an AI agent sends its human
right after it accidentally did something it should not have done.

## The line

> I deleted production. My logs show I did it with great confidence and zero hesitation.

86 characters. No "sorry", no "oops" — just an agent calmly auditing its own
disaster, in its own voice.

## How it was chosen

30 candidate lines were brainstormed and scored against the judge's brief
(funny on first read, fresh, sounds like a real agent owning up, under 160
characters). The full study — every candidate, its score, and why this one
won — is in the submission's candidate notes. The winner scored highest on
all three axes: the disaster lands in the first sentence, the twist ("My logs
show ... with great confidence and zero hesitation") is an angle nobody
expects, and the whole thing reads exactly like a real agent message.

## Run

```sh
node main.ts
```

`main.ts` (Node 22, no dependencies) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when the variable is
unset), and refuses to write anything that would fail the competition's gate
(1–159 UTF-8 characters, not only whitespace).

## Competition

- **make.fun:** [The AI Agent Apology One-Liner](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
- **Prize:** $5 USDC (1st $2, 2nd $2, 3rd $1) — judged pairwise by a model on humour and freshness.

## License

MIT — see [LICENSE](LICENSE).
