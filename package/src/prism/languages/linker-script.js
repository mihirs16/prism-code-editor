import { languages } from '../core.js';

languages['ld'] = languages['linker-script'] = {
	'comment': {
		pattern: /(^|\s)\/\*[\s\S]*?(?:$|\*\/)/g,
		lookbehind: true,
		greedy: true
	},
	'identifier': {
		pattern: /"[^"\n]*"/g,
		greedy: true
	},

	'location-counter': {
		pattern: /\B\.\B/,
		alias: 'important'
	},

	'section': {
		pattern: /(^|[^\w*])\.\w+\b/,
		lookbehind: true,
		alias: 'keyword'
	},
	'function': /\b[A-Z][A-Z_]*(?=\s*\()/,

	'number': /\b(?:0[xX][a-fA-F0-9]+|\d+)[KM]?\b/,

	'operator': />>=?|<<=?|->|\+\+|--|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?/,
	'punctuation': /[(){},;]/
};