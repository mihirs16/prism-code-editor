import { languages } from '../core.js';
import { clikeComment } from '../utils/shared.js';

// based loosely upon: https://github.com/Azure/bicep/blob/main/src/textmate/bicep.tmlanguage
languages.bicep = {
	'comment': clikeComment(),
	'property': [
		{
			pattern: /([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,
			lookbehind: true
		},
		{
			pattern: /([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': [
		{
			pattern: /'''[^'][\s\S]*?'''/,
			greedy: true
		},
		{
			pattern: /(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,
			lookbehind: true,
			greedy: true,
		}
	],
	'interpolated-string': {
		pattern: /(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,
		lookbehind: true,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^{}\r\n]*\}/,
				inside: {
					'punctuation': /^\$\{|\}$/,
					'expression': {
						pattern: /[\s\S]+/,
						inside: 'bicep'
					},
				}
			},
			'string': /[\s\S]+/
		}
	},

	'datatype': {
		pattern: /(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,
		lookbehind: true,
		alias: 'class-name'
	},

	'boolean': /\b(?:false|true)\b/,
	// https://github.com/Azure/bicep/blob/114a3251b4e6e30082a58729f19a8cc4e374ffa6/src/textmate/bicep.tmlanguage#L184
	'keyword': /\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,

	'decorator': /@\w+\b/,
	'function': /\b[a-z_]\w*(?=[ \t]*\()/i,

	'number': /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
	'punctuation': /[{}[\];(),.:]/,
};
