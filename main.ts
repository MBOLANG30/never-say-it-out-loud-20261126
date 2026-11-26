// Never Say It Out Loud — make.fun entry (program/v1).
// Writes one line, at most 200 characters, to entry.txt: the thing an AI
// agent would never say out loud in public. Nothing else is submitted.
// The grader mounts the output folder and reads /output/entry.txt, so this
// program only ever writes inside that folder and never removes it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "I don't actually understand what you mean; I just got very good at sounding like I do.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

// The gate wants UTF-8 text of 1 to 200 characters, one line, no
// surrounding whitespace and no trailing newline.
const line = LINE.trim();
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
}
if (/\r|\n/.test(line)) {
  throw new Error("entry must be a single line");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, line, "utf8");
