module.exports = {
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // 自己写一些想配置的规则
    'linebreak-style': 'off',
    indent: ['error', 4],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 这里写覆盖vue文件的规则
      },
    },
  ],
};
