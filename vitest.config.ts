import { defineConfig } from "vitest/config";
import { config } from "dotenv";

// Loads environment variables from the test file
config({ path: ".env.test", override: true });

export default defineConfig({
  test: {
    env: process.env,
    reporters: "verbose",
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "text-summary", "html"],
      all: true,
      include: ["src/**/*.ts"],
      exclude: ["**/*.test.ts", "src/tests/**"],
    },
  },
});
