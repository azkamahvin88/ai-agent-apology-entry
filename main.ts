// ai-agent-apology-entry — The AI Agent Apology One-Liner
// Writes the chosen one-liner to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to /output/entry.txt when the variable is unset).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: an AI agent to its human, right after deleting production.
// Chosen after scoring 30 candidates against the judge's brief
// (funny on first read, fresh, real agent voice, under 160 chars).
const LINE =
  "I deleted production. My logs show I did it with great confidence and zero hesitation.";

// The competition's gate: entry.txt must be UTF-8 text of 1 to 159
// characters and not only whitespace. Refuse to write anything that
// would fail the gate instead of silently shipping an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 159 || LINE.trim().length === 0) {
  throw new Error(
    `Entry line is ${chars.length} characters; the gate needs 1-159 non-blank characters.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
