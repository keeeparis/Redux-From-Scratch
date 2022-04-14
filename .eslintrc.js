const trailing = require('os').EOL

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': ['warn', {
            extensions: ['.tsx'],
        }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        indent: ['error', 4],
        'no-tabs': ['error', {
            allowIndentationTabs: true,
        }],
        'linebreak-style': ['error', (trailing === '\r\n' ? 'windows' : 'unix')],
        semi: [2, 'never'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-promise-executor-return': 'off',
        'default-param-last': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    globals: {
        JSX: true,
    },
    overrides: [
        {
            rules: {
                'react/no-array-index-key': 'off',
            },
            files: 'src/components/ColorNumbers/ColorNumbers.tsx',
        },
        {
            rules: {
                'no-unused-vars': 'off',
            },
            files: 'src/components/Tabs/Tabs.tsx',
        },
    ],
}
