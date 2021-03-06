/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const { version } = require('./package.json');

module.exports = {
  version,
  template: {
    favicon: 'img/favicon.png',
  },
  assetsDir: 'src/',
  components: [],
  styleguideDir: 'styleguide-build',
  require: [
    path.join(__dirname, 'src/styleguidist/styleguidist.css'),
    'react-app-polyfill/ie11',
    'react-app-polyfill/stable',
    '@webcomponents/webcomponents-platform',
    '@webcomponents/custom-elements',
    '@webcomponents/webcomponentsjs/custom-elements-es5-adapter',
    'proxy-polyfill',
  ],
  ribbon: {
    url: 'https://github.com/geops/trafimage-maps',
    text: 'Fork me on GitHub',
  },
  moduleAliases: {
    'trafimage-maps': path.resolve(__dirname, 'src'),
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Trafimage Maps',
      content: 'src/examples/README.md',
      exampleMode: 'expand',
      sections: [
        {
          components: 'src/WebComponent.js',
        },
      ],
    },
    {
      name: 'Examples',
      href: '/#/Examples/Punctuality%20Map',
      external: true,
      sectionDepth: 2,
      sections: [
        {
          name: 'Punctuality Map',
          content: 'src/examples/Punctuality/README.md',
          exampleMode: 'expand',
        },
        {
          name: 'Casa Map',
          content: 'src/examples/Casa/README.md',
          exampleMode: 'expand',
        },
        {
          name: 'Construction',
          content: 'src/examples/Construction/README.md',
          exampleMode: 'expand',
        },
      ],
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        // Transpile node dependencies, node deps are often not transpiled for IE11
        {
          test: [
            /\/node_modules\/(regexpu-core|unicode-.*|chalk|acorn-.*|query-string|strict-uri-encode|proxy-polyfill)/,
            /\/node_modules\/(split-on-first|react-dev-utils|ansi-styles|jsts|estree-walker|strip-ansi|javascript-stringify)/,
          ],
          loader: 'babel-loader',
        },
        // Transpile js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Load css and scss files.
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader?modules'],
        },
        {
          test: /^((?!url).)*\.svg$/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                // @remove-on-eject-begin
                babelrc: false,
                presets: [require.resolve('babel-preset-react-app')],
                // @remove-on-eject-end
                cacheDirectory: true,
              },
            },
            require.resolve('@svgr/webpack'),
            {
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.url\.svg$/,
          loader: 'url-loader',
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    ],
  },
  styles: {
    StyleGuide: {
      '@global body': {
        overflowY: 'hidden',
        overflowX: 'hidden',
      },
    },
  },
  showSidebar: true,
  styleguideComponents: {
    ComponentsList: path.join(__dirname, 'src/styleguidist/ComponentsList'),
    StyleGuideRenderer: path.join(__dirname, 'src/styleguidist/StyleGuide'),
  },
};
