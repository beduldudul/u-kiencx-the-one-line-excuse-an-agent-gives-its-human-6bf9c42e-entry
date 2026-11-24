// One-line excuse, v2: the agent's own retry loop stalls the deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My retry loop has been retrying since Monday, and it asked me to tell you it is very close now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
// Round 2 push: same repo, new line, fresh session.
