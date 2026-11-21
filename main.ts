import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Front page: a bold masthead headline anchors the top above a tidy two-column grid.
// A hero photograph dominates the left, its vivid palette driving a sense of urgency.
// The right rail stacks secondary stories beneath a slim navigation bar.
// A lower band carries a ticker-style strip of breaking-news chyrons.
// Dense typography and high-contrast accents evoke a classic tabloid layout.

function describeOutput(outDir: string, size: number): string {
  return `Copied entry.png (${size} bytes) into ${outDir}`;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const destination = join(outDir, 'entry.png');
copyFileSync(join(here, 'entry.png'), destination);

const size = statSync(destination).size;
process.stderr.write(`${describeOutput(outDir, size)}\n`);
