import { readFileSync, existsSync } from "fs";
import { join } from "path";

export interface ImageDims {
  width: number;
  height: number;
}

export function getImageDims(publicPath: string): ImageDims | null {
  const filePath = join(
    process.cwd(),
    "public",
    publicPath.replace(/^\//, ""),
  );
  if (!existsSync(filePath)) return null;
  const buf = readFileSync(filePath);

  if (
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  ) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // GIF ("GIF87a" / "GIF89a") — logical-screen dimensions are little-endian.
  if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46) {
    return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
  }

  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset < buf.length) {
      if (buf[offset] !== 0xff) break;
      const marker = buf[offset + 1];
      const len = buf.readUInt16BE(offset + 2);
      const isSOF =
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc;
      if (isSOF) {
        return {
          width: buf.readUInt16BE(offset + 7),
          height: buf.readUInt16BE(offset + 5),
        };
      }
      offset += 2 + len;
    }
  }

  return null;
}
