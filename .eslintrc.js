module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
  },
  'extends': [
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': '2020',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "react/prop-types": "off"

  },
};
