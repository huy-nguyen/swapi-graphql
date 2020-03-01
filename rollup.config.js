import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: ["graphql", "graphql-relay"],
  plugins: [
    json(),
    resolve(),
    commonjs({
      exclude: 'src/**',
      include: [/node_modules/],
      namedExports: {
        dataloader: ['default'],
        'graphql-relay': [
          'nodeDefinitions',
          'fromGlobalId',
          'connectionDefinitions',
          'connectionArgs',
          'connectionFromArray',
          'globalIdField',
        ],
      },
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
