"use strict";

module.exports = {
	plugins: ["prettier-plugin-ember-template-tag"],
	overrides: [
		{
			files: "*.{js,gjs,ts,gts,mjs,mts,cjs,cts}",
			options: {
				singleQuote: false,
				tabWidth: 4,
				useTabs: true,
				printWidth: 120,
			},
		},
		{
			files: "*.{gjs,gts}",
			options: {
				singleQuote: false,
				templateSingleQuote: false,
				tabWidth: 4,
				useTabs: true,
			},
		},
	],
};
