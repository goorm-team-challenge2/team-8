/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	parserOptions: {
		ecmaVersion: 13,
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
		sourceType: 'module',
	},
	env: {
		browser: true,
	},
	plugins: ['import'],
	extends: ['eslint:recommended', 'airbnb'],
	rules: {
		'import/no-cycle': 'warn',
		'consistent-return': 'off',
		'no-tabs': 'off',
		'object-curly-newline': 'off',
		'no-param-reassign': [
			'error',
			{
				ignorePropertyModificationsForRegex: ['^draft.'],
			},
		],
		'no-underscore-dangle': 'off',

		// for prettier
		'operator-linebreak': [
			'error',
			'after',
			{ overrides: { '?': 'before', ':': 'before' } },
		],
		'implicit-arrow-linebreak': 'off',
	},
};
