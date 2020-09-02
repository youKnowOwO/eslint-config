export const config = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module"
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/indent": [
            "warn",
            4
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/quotes": [
            "warn",
            "double",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/semi": [
            "warn",
            "always"
        ],
        "@typescript-eslint/no-misused-promises": "warn",
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    "signature",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "instance-field",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",
                    "constructor",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",
                    "instance-method",
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "static-field",
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "static-method"
                ]
            }
        ],
        "no-undef": "error",
        "prefer-template": "warn",
        "complexity": "off",
        "constructor-super": "warn",
        "dot-notation": "warn",
        "import/order": "off",
        "max-classes-per-file": [
            "warn",
            3
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "warn",
        "no-debugger": "warn",
        "no-empty": "warn",
        "no-eval": "warn",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-new-wrappers": "error",
        "no-shadow": [
            "off",
            {
                "hoist": "all"
            }
        ],
        "no-var": "warn",
        "no-alert": "error",
        "no-extra-label": "warn",
        "no-extra-parens": "off",
        "no-extra-semi": "warn",
        "no-throw-literal": "error",
        "no-const-assign": "error",
        "no-useless-return": "warn",
        "no-unreachable": "warn",
        "no-trailing-spaces": "warn",
        "no-undef-init": "error",
        "no-underscore-dangle": "warn",
        "no-unsafe-finally": "warn",
        "no-unused-expressions": "warn",
        "no-unused-labels": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "error",
            "never"
        ],
        "radix": "off",
        "spaced-comment": "warn",
        "use-isnan": "warn",
        "valid-typeof": "off"
    }
};

module.exports = config;
export default config;