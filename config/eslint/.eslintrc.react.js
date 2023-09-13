/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	plugins: ['react', 'react-hooks'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-no-constructed-context-values': 'off',
		'react/destructuring-assignment': 'off',
		'react/forbid-prop-types': ['error', { forbid: ['any'] }],
		'react/self-closing-comp': [
			'error',
			{
				html: false,
			},
		],
		'react/no-unstable-nested-components': 'warn',
		'react/no-invalid-html-attribute': 'warn',

		'react-hooks/rules-of-hooks': 'warn', // TODO: 모든 warn 해결 후 error로 변경
		'react-hooks/exhaustive-deps': 'warn',
	},
};
