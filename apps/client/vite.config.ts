/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/constructor/",
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./src/shared/configs/vitest-setup.ts",
    },
    define: {
        "import.meta.vitest": "undefined",
    },
    resolve: {
        tsconfigPaths: true,
    },
});
