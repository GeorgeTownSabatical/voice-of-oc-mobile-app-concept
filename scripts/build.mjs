import { copyFile, mkdir, rm } from "node:fs/promises";

const files = ["index.html", "styles.css", "script.js", "README.md"];

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await mkdir("dist/outputs", { recursive: true });

for (const file of files) {
  await copyFile(file, `dist/${file}`);
}

await copyFile(
  "outputs/voice-of-oc-mobile-app-design-document.md",
  "dist/outputs/voice-of-oc-mobile-app-design-document.md"
);

console.log("Built static prototype into dist/");
