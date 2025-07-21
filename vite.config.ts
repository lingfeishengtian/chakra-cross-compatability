import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Adjust entry point as needed
      name: 'MyLibrary',
      fileName: (format) => `my-library.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', '@chakra-ui/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@chakra-ui/react': 'ChakraUI',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json'),
      rollupTypes: true,
      bundledPackages: ['chakra-ts-compatability-layer'], // Include bundled packages
    }),
  ],
})
