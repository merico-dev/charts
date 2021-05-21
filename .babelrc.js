const DEV = process.env.NODE_ENV === 'development';

const plugins = [
  'macros',
  ...(DEV ? [['emotion', { sourceMap: true }], 'babel-plugin-react-wrapped-display-name'] : ['emotion']),
  ['@babel/transform-runtime', { corejs: 2 }],
  ['import', { libraryName: 'antd', style: true }],
];

module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/typescript'],
  plugins,
};
