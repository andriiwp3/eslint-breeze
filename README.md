# eslint-plugin-breeze

> An ESLint plugin with some useful rules

## Install

```sh
npm install --save-dev eslint eslint-plugin-breeze
```

## Usage (`eslint.config.js`)

**Requires ESLint `>=8.56.0`.**

### ES Module (Recommended)

```js
import eslintPluginBreeze from 'eslint-plugin-breeze';
import globals from 'globals';

export default [
	{
        // ...
		plugins: {
			breeze: eslintPluginBreeze,
		},
		rules: {
			'breeze/require-data-cy': 'error',
		},
	},
];
```

### CommonJS

```js
const eslintPluginBreeze = require('eslint-plugin-breeze');

module.exports = [
	{
		// ...
		plugins: {
			breeze: eslintPluginBreeze,
		},
		rules: {
			'breeze/require-data-cy': 'error',
		},
	},
];
```

## Usage (legacy: `.eslintrc.*` or `package.json`)

```json
{
	"name": "space-project",
	"eslintConfig": {
		// ...
		"plugins": [
			"breeze"
		],
		"rules": {
			"breeze/require-data-cy": "error"
		}
	}
}
```

## Maintainers

- [Andrii Herchykov](https://github.com/andriiwp3)
