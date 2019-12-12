module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: ['@nuxtjs', 'plugin:vue/essential', 'eslint:recommended'],
    rules: {
        semi: [2, 'always'],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never'
            }
        ],
        'space-before-function-paren': ['error', 'never'],
        indent: ['error', 4],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};
