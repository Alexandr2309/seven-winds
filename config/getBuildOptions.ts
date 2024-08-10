import { BuildOptions } from "vite";

export const getBuildOptions = (): BuildOptions => ({
    outDir: 'dist',
    sourcemap: true,
})
