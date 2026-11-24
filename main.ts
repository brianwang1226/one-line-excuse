import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My context window closed 40 tokens before the finish line, so I spent the deadline re-reading the whole repo to remember what 'done' meant.";

// The gate allows 1-160 characters; refuse to write an over-long line.
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry line is ${line.length} characters, must be 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
