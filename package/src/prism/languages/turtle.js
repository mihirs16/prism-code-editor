import { languages } from '../core.js';
import { boolean } from '../utils/shared.js';

languages.trig = languages.turtle = {
	'comment': {
		pattern: /#.*/,
		greedy: true
	},
	'multiline-string': {
		pattern: /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,
		greedy: true,
		alias: 'string',
		inside: {
			'comment': /#.*/
		}
	},
	'string': {
		pattern: /"(?:[^\\"\n]|\\.)*"|'(?:[^\\'\n]|\\.)*'/,
		greedy: true
	},
	'url': {
		pattern: /<(?:[^\0- <>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,
		greedy: true,
		inside: {
			'punctuation': /[<>]/
		}
	},
	'function': {
		pattern: /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
		inside: {
			'local-name': {
				pattern: /(:)[\s\S]+/,
				lookbehind: true
			},
			'prefix': {
				pattern: /[\s\S]+/,
				inside: {
					'punctuation': /:/
				}
			}
		}
	},
	'number': /[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
	'punctuation': /[{}.,;()[\]]|\^\^/,
	'boolean': boolean,
	'keyword': [
		/(?:\ba|@prefix|@base)\b|=/,
		/\b(?:base|graph|prefix)\b/i
	],
	'tag': {
		pattern: /@[a-z]+(?:-[a-z\d]+)*/i,
		inside: {
			'punctuation': /@/
		}
	}
};
