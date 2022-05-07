module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['huaer', 'plugin:vue/recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: { 'vue/no-v-html': 'off' }
};
