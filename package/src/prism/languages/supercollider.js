import { languages } from '../core.js';
import { boolean } from '../utils/shared.js';

languages.sclang = languages.supercollider = {
	'comment': {
		pattern: /\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//g,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:[^"\\]|\\[\s\S])*"/g,
		lookbehind: true,
		greedy: true
	},
	'char': {
		pattern: /\$(?:[^\\\n]|\\.)/g,
		greedy: true
	},
	'symbol': {
		pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'|\\\w+/g,
		lookbehind: true,
		greedy: true
	},

	'keyword': /\b(?:_|arg|classvar|const|nil|var|while)\b/,
	'boolean': boolean,

	'label': {
		pattern: /\b[a-z_]\w*(?=\s*:)/,
		alias: 'property'
	},

	'number': /\b(?:inf|pi|0x[0-9a-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(?:pi)?|\d+r[0-9a-zA-Z]+(?:\.[0-9a-zA-Z]+)?|\d+[sb]{1,4}\d*)\b/,
	'class-name': /\b[A-Z]\w*\b/,

	'operator': /\.{2,3}|#(?![[{])|&&|[!=]==?|\+>>|\+{1,3}|-[->]|=>|>>|\?\?|@\|?@|\|(?:@|[!=]=)?\||!\?|<[!=>]|\*{1,2}|<{2,3}\*?|[-!%&/<>?@|=`]/,
	'punctuation': /[{}()[\].:,;]|#[[{]/
};