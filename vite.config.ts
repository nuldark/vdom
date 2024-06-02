import {viteSWC} from './scripts/vite-swc';
import {defineConfig} from "vite";

export default defineConfig({
    base: "./",
    plugins: [
        viteSWC(),
    ],
    build: {
        outDir: "./build/dist",
        target: 'esnext',
        lib: {
            entry: './src/index.ts',
            name: 'virtual-dom',
            formats: ['es', 'cjs'],
        }
    }
})