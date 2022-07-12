import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { eslint } from "rollup-plugin-eslint";
import multiInput from 'rollup-plugin-multi-input';

export default {
  input: ['src/**/*.ts'],
  output: {
    dir: 'esm',
    format: 'esm'
  },
  plugins: [
    multiInput({ relative: 'src/' }),
    eslint({
      fix: true,
      exclude: 'node_modules/**'
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ]
};
