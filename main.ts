// Entry for make.fun news-image-20261118: copies the pre-rendered infographic
// entry.png (in this same directory) to $MAKEFUN_OUTPUT_DIR/entry.png.
// Standard library only, synchronous fs, no network, no directory removal.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
