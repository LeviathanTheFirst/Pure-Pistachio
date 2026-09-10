// Remove studio backdrops from pistachio JPEGs -> transparent PNGs.
//
// Method: choose a background color per image as the median of the four
// corner samples (studio backdrops are uniform at the edges). Then flood-fill
// outward from the border: a pixel is "background" when it is close to that
// backdrop color AND adjacent to the already-grown region. Everything else is
// the subject (kept opaque). The hard mask is feathered with a small gaussian
// blur and joined as the alpha channel so no dark/light halo ring appears.
import sharp from "sharp";
import path from "path";

const dir = path.resolve("public/images/pistachios");
const files = ["pA_1", "pA_2", "pA_3", "pA_4", "pB_1", "pB_2", "pB_3", "pB_4"];
const TOL = 52; // max RGB euclidean distance still considered backdrop

const dist2 = (a, b) => {
  const dr = a[0] - b[0], dg = a[1] - b[1], db = a[2] - b[2];
  return dr * dr + dg * dg + db * db;
};

async function process(file) {
  const input = path.join(dir, file + ".jpeg");
  const out = path.join(dir, file + ".png");
  const { data, info } = await sharp(input)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info; // C === 3

  const px = (i) => [data[i], data[i + 1], data[i + 2]];

  // Background estimate = per-channel median of the four corner pixels.
  const cornerIdx = [0, (W - 1) * 3, (H - 1) * W * 3, (H * W - 1) * 3];
  const bg = [0, 0, 0];
  for (let k = 0; k < 3; k++) {
    const vals = cornerIdx.map((i) => data[i + k]).sort((a, b) => a - b);
    bg[k] = vals[1];
  }

  const tol2 = TOL * TOL;
  const seen = new Uint8Array(W * H); // 1 = visited/background
  const q = [];

  const visit = (i) => {
    if (!seen[i] && dist2(px(i * 3), bg) <= tol2) {
      seen[i] = 1;
      q.push(i);
    }
  };

  // Seed with border pixels that match the backdrop.
  for (let x = 0; x < W; x++) { visit(x); visit((H - 1) * W + x); }
  for (let y = 0; y < H; y++) { visit(y * W); visit(y * W + W - 1); }

  // Flood fill (4-connected) through backdrop-colored pixels.
  while (q.length) {
    const i = q.pop();
    const x = i % W, y = (i / W) | 0;
    if (x > 0) visit(i - 1);
    if (x < W - 1) visit(i + 1);
    if (y > 0) visit(i - W);
    if (y < H - 1) visit(i + W);
  }

  // Build alpha: background -> 0, subject -> 255.
  const alpha = Buffer.alloc(W * H);
  for (let i = 0; i < W * H; i++) alpha[i] = seen[i] ? 0 : 255;

  // Feather the hard mask with a small gaussian blur -> smooth alpha edge.
  const feathered = await sharp(alpha, { raw: { width: W, height: H, channels: 1 } })
    .blur(1.6)
    .raw()
    .toBuffer();

  // Assemble RGBA (RGB from original, A from feathered mask) and encode PNG.
  const rgba = Buffer.alloc(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    rgba[i * 4 + 3] = feathered[i];
  }

  await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(out);

  console.log(`wrote ${file}.png`);
}

for (const f of files) await process(f);
console.log("done");
