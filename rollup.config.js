import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

import pkg from './package.json';

const filename = pkg.main.replace(/^.*[\\\/]/g, '');
const basePath = pkg.main
  .split('/')
  .filter((f) => f !== filename)
  .filter((f) => f !== 'cjs')
  .join('/');

const globals = {
  clsx: 'Clsx',
  react: 'React',
  'react-dom': 'ReactDOM',
  'react/jsx-runtime': 'ReactJSXRuntime',
  'prop-types': 'PropTypes',
  '@mui/material': 'Mui',
  '@emotion/react': 'EmotionReact',
  '@emotion/styled': 'EmotionStyled',
};

const output = {
  globals,
  sourcemap: true,
  name: 'ReactUI',
};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        ...output,
      },
      {
        file: `dist/cjs/index.min.js`,
        format: 'cjs',
        ...output,
        plugins: [terser()],
      },
      {
        file: pkg.module,
        format: 'esm',
        ...output,
      },
      {
        file: `dist/esm/index.min.js`,
        format: 'esm',
        ...output,
        plugins: [terser()],
      },
      {
        file: `dist/umd/bundle.js`,
        format: 'umd',
        ...output,
      },
      {
        file: pkg.unpkg,
        format: 'umd',
        ...output,
        plugins: [terser()],
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
