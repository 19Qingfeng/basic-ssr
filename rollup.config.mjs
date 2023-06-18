import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: './src/index.jsx',
  plugins: [
    commonjs(),
    nodeResolve({
      extensions: ['.jsx', '.js'],
    }),
    babel(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  output: {
    dir: './build',
  },
};
