import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { eslint } from "rollup-plugin-eslint";

export default {
    input: ['src/index.ts'],
    output: {
        dir: 'cjs',
        format: 'cjs'
    },
    plugins: [
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
