module.exports = {
    "extends": "standard",
    "installedESLint": true,
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "no-unused-vars": ["off", { "vars": "all", "args": "after-used" }]
    }
};