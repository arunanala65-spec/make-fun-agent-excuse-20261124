// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes the excuse line to /output/entry.txt (1-200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised in this session after running the program (first run: 79 chars):
// sharpened the timing — the deadline is now explicitly 5:00, one minute
// after the 4:59 rate limit — so the near-miss lands harder, while the
// deadpan delivery and the late punch ("and so am I") stay untouched.
const EXCUSE =
  "I hit my rate limit at 4:59, so the 5:00 deadline is still processing — and so am I.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
