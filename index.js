module.exports = {
    "extends": "react-app",
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parserOptions": {
        "ecmaFeatures": {
            "legacyDecorators": true
        }
    },
    "rules": {
        "semi": [
            "warn",
            "always"
        ],
        "indent": [
            "warn",
            4,
            {
                "FunctionDeclaration": {
                    "parameters": "off"
                },
                "FunctionExpression": {
                    "parameters": "off"
                },
                "MemberExpression": "off",
                "SwitchCase": 1
            }
        ],
        "comma-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ],
        "quotes": [
            "warn",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": false
            }
        ],
        "object-curly-spacing": [
            "warn",
            "never"
        ],
        "array-bracket-spacing": [
            "warn",
            "never"
        ],
        "radix": "off",
        "no-useless-escape": "off",
        "default-case": "off",
        "import/first": "off",
        "no-extend-native": "off",
        "curly": "warn",
        "react/jsx-tag-spacing": [
            "warn",
            {
                "beforeSelfClosing": "never"
            }
        ],
        "react/jsx-curly-brace-presence": [
            "warn",
            {
                "props": "always",
                "children": "ignore"
            }
        ],
        "react/jsx-boolean-value": [
            "warn",
            "always"
        ],
        "padding-line-between-statements": [
            "warn",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ]
    }
};
