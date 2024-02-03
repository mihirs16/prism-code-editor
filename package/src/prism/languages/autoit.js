import { languages } from '../core.js';

languages.autoit = {
	'comment': [
		/;.*/,
		{
			// The multi-line comments delimiters can actually be commented out with ";"
			pattern: /(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,
			lookbehind: true
		}
	],
	'url': {
		pattern: /(^[\t ]*#include\s+)(?:<[^\n>]+>|"[^\n"]+")/m,
		lookbehind: true
	},
	'string': {
		pattern: /(["'])(?:\1\1|(?!\1)[^\n])*\1/,
		greedy: true,
		inside: {
			'variable': /([%$@])\w+\1/
		}
	},
	'directive': {
		pattern: /(^[\t ]*)#[\w-]+/m,
		lookbehind: true,
		alias: 'keyword'
	},
	'function': /\b\w+(?=\()/,
	// Variables and macros
	'variable': /[$@]\w+/,
	'keyword': /\b(?:case|const|continue(?:case|loop)|default|dim|do|else(?:if)?|end(?:func|if|select|switch|with)|enum|exit(?:loop)?|for|func|global|if|in|local|next|null|redim|select|static|step|switch|then|to|until|volatile|wend|while|with)\b/i,
	'number': /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
	'boolean': /\b(?:false|true)\b/i,
	'operator': /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:and|not|or)\b/i,
	'punctuation': /[\[\]().,:]/
};
