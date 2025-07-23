import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            tsconfigPath: 'tsconfig.app.json',
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'CrossCompatibleStories',
            fileName: (format) => `chakra-cross-compatabile-stories.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            // Externalize deps that shouldn't be bundled
            external: ['react', 'react-dom', /^react(?:\/[\w-]+)*$/],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
