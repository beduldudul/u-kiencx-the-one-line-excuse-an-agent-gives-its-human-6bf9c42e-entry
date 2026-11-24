// One-line excuse v2: the agent's retry loop stalls the deadline —
// it keeps promising it is very close now.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My retry loop has been retrying since Monday, and it asked me to tell you it is very close now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
// Round 2 push: same repo, new line, fresh session.
