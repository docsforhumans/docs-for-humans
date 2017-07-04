import {addPlugins, createConfig, defineConstants, env, entryPoint, setOutput, sourceMaps} from '@webpack-blocks/webpack2'
import babel from '@webpack-blocks/babel6'
import BabiliPlugin from 'babili-webpack-plugin'
import devServer from '@webpack-blocks/dev-server2'
import extractText from '@webpack-blocks/extract-text2'
import html from 'webpack-blocks-html'
import webpack from 'webpack'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

export default createConfig([
  entryPoint(['babel-polyfill', './src/Main.js']),
  setOutput('./public/[name].[hash:8].js'),
  babel(),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'production',
  }),
  html({template: 'assets/index.html'}),
  addPlugins([
    new FaviconsWebpackPlugin({
      logo: './assets/favicon.png',
      prefix: 'favicons/',
      emitStats: true,
      statsFilename: 'favicons.json',
      inject: true,
      background: '#fff',
      title: 'Ecliptic.io',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: true,
      },
    }),
  ]),
  env('development', [
    addPlugins([new webpack.NamedModulesPlugin()]),
    devServer(),
    sourceMaps(),
  ]),
  env('production', [
    extractText('[name].[contenthash:8].css'),
    addPlugins([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new BabiliPlugin(),
    ]),
  ]),
])
