import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths";
import fixReactVirtualized from 'esbuild-plugin-react-virtualized'
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src/"),
  //     shared: `${path.resolve(__dirname, "./src/shared/")}`,

  //   },
  // },
});
