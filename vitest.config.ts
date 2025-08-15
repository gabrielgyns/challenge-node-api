import { defineConfig } from "vitest/config";
import { config } from "dotenv";

// Loads environment variables from the test file
config({ path: ".env.test", override: true });

export default defineConfig({
  test: {
    env: {
      NODE_ENV: process.env.NODE_ENV,
      DATABASE_URL: process.env.DATABASE_URL,
    },
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
