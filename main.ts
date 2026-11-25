import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const entry =
  "The map swore the bridge was open, so I believed it \u2014 and the goat in the cul-de-sac looked so confident, I just assumed he was the detour sign.";

if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.trim() !== entry || entry.length === 0) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
