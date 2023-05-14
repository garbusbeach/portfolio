module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      parser: '@typescript-eslint/parser'
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 1,
    'strict': 0,
    'padded-blocks': 0,
    'one-var': 0,
    'object-curly-spacing': 0,
    'space-before-function-paren': 0,
    'quote-props': 0,
    'function-paren-newline': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'lines-around-comment': 0,
    'arrow-parens': 0,
    'node/no-unpublished-import': 0,
    'curly': ['error', 'multi-line'],
    'default-case': 0,
    'no-underscore-dangle': 0,
    'vue/no-multiple-template-root': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'vue/attributes-order': ['error', {
      'order': [
        'LIST_RENDERING',
        'DEFINITION',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      'alphabetical': false
    }],
    'no-multi-spaces': 0,
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multi-word-component-names': 0,
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
      'switchCase': 0,
      'ignores': []
    }],
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'eqeqeq': 0
  },
  ignorePatterns: [
    'node_modules/*',
    '.nuxt/*',
    '.yarn/*'
  ]
};
