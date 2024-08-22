import { resolve } from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const RE_RAW = /raw/
const RE_NON_RAW = /^((?!raw).)*$/

const config = {
  mode: 'development',
  entry: {
    main: resolve(import.meta.dirname, 'src/main.ts'),
  },
  module: {
    rules: [
      {
        resourceQuery: RE_RAW,
        type: 'asset/source',
      },
      {
        resourceQuery: RE_NON_RAW,
        test: /\.[jt]sx?$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', ['@babel/preset-typescript', { isTSX: true, allExtensions: true }]],
              plugins: ['@vue/babel-plugin-jsx', '@emotion'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(import.meta.dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
  output: {
    filename: '[name].[contenthash].js',
  },
  performance: {
    maxEntrypointSize: 1024 * 1024,
    maxAssetSize: 1024 * 1024,
  },
}

export default function defineConfig(env) {
  return config
}
