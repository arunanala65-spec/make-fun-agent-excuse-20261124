// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes the excuse line to /output/entry.txt (1-200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised in this session from the AWS Quick draft
// ("I hit my rate limit at 4:59, so technically the deadline is still processing."):
// dropped "technically" to keep the delivery deadpan, and added a late punch
// ("and so am I") so the laugh lands on the last words — the agent itself is
// still processing too, not just the deadline.
const EXCUSE =
  "I hit my rate limit at 4:59, so the deadline is still processing — and so am I.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
