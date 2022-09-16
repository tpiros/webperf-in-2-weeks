import strip from '@rollup/plugin-strip';
import { terser } from 'rollup-plugin-terser';
export default {
  input: './src/app.js',
  output: {
    file: './dist/bundle.js',
    format: 'esm',
  },
  // plugins: [strip({ functions: ['console.*'] })],
  plugins: [strip({ functions: ['console.*'] }), terser()],
  // treeshake: false,
};
