/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/constructor/",
    test: {
        environment: "jsdom", // <-- ВАЖНО: обеспечивает DOM в тестах
        globals: true,
    },
    define: {
        "import.meta.vitest": "undefined",
    },
    resolve: {
        tsconfigPaths: true,
    },
});
