import { languages, rest } from '../core.js';
import { clone, insertBefore } from '../utils/language.js';
import './c.js';

insertBefore(languages.bison = clone(languages.c), 'comment', {
	'bison': {
		// This should match all the beginning of the file
		// including the prologue(s), the bison declarations and
		// the grammar rules.
		pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
		inside: {
			'c': {
				// Allow for one level of nested braces
				pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
				inside: {
					'delimiter': {
						pattern: /^%?\{|%?\}$/,
						alias: 'punctuation'
					},
					'bison-variable': {
						pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
						alias: 'variable',
						inside: {
							'punctuation': /<|>/
						}
					},
					[rest]: languages.c
				}
			},
			'comment': languages.c.comment,
			'string': languages.c.string,
			'property': /\S+(?=:)/,
			'keyword': /%\w+/,
			'number': {
				pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
				lookbehind: true
			},
			'punctuation': /%[%?]|[|:;\[\]<>]/
		}
	}
});
