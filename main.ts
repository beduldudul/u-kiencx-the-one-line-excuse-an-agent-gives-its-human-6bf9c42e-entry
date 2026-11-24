// The one-line excuse an agent gives its human for missing a deadline:
// the work was handed off, and the handoff is still introducing itself.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I delegated the deadline to a subagent. It is still writing its plan.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters.
if (excuse.length < 1 || excuse.length > 160) {
  throw new Error(`excuse must be 1-160 chars, got ${excuse.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");

// One line, no trailing newline: the judge reads the text exactly as written.
