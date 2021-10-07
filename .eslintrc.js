const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  extends: ['react-app', 'plugin:security/recommended'],
  plugins: ['security'],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'max-params': 'error',
    'security/detect-object-injection': 'off',
    'array-callback-return': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-console': isDev ? 'off' : 'error',
    'no-debugger': isDev ? 'off' : 'error',
  },
}
