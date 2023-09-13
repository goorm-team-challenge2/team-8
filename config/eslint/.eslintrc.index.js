const importSortGroups = [
	['^react', '^prop-types', '^classnames'],
	['^next(?:/w+)?$'],
	['^'],
	['^@goorm-dev'],
	['^\\.\\.(?!/?$)', '^\\.\\./?$'],
	['^\\.(?!/?$)', '^\\./(?=.*/)(?!/?$)', '^\\./?$'],
	['^\\u0000'],
];

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['simple-import-sort', 'prettier'],
	extends: ['./.eslintrc.base.js', './.eslintrc.react.js', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'simple-import-sort/imports': [
			'warn',
			{
				groups: importSortGroups,
			},
		],
		'simple-import-sort/exports': 'warn',
		'prettier/prettier': 'warn',
	},
	ignorePatterns: ['node_modules/', 'public/', 'dist/'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}', 'config/**/*.js', 'config/*.js'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
};
