/* eslint-disable no-restricted-syntax */
const { exec } = require('child_process');

const EXTENSION_IDENTIFIERS = {
	eslint: 'dbaeumer.vscode-eslint',
	prettier: 'esbenp.prettier-vscode',
};

const VSCODE_INSTALL_EXTENSION_SCRIPT = 'code --install-extension';

for (const [extension, identifier] of Object.entries(EXTENSION_IDENTIFIERS)) {
	exec(`${VSCODE_INSTALL_EXTENSION_SCRIPT} ${identifier}`, (err, stdout) => {
		if (err) console.log(err);

		console.log(`🚀 ${extension} 🚀`);
		console.log(stdout);
	});
}
