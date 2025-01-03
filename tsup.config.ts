import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/utils.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  minify: true,
  sourcemap: false,
  clean: true,
  dts: true,
  tsconfig: "tsconfig.build.json",
});
