import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// Date of the last commit, so re-running a deploy doesn't move "Last updated".
// Falls back to now if there's no git history (e.g. building from a zip).
function lastUpdated() {
  try {
    return execSync("git log -1 --format=%cI", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    return new Date().toISOString();
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  define: { __BUILD_DATE__: JSON.stringify(lastUpdated()) },
});
