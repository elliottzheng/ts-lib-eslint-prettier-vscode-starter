module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    env: {
        node: true, //Node.js全局变量和Node.js范围。
    },
    "parserOptions": {
        "ecmaVersion": 6, //也就是ES6语法支持的意思
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        },
        "project": [
            "tsconfig.json",
        ]
    }
}