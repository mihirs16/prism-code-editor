import { languages } from '../core.js';
import { boolean, clikePunctuation } from '../utils/shared.js';

// https://www.openpolicyagent.org/docs/latest/policy-reference/

languages.rego = {
	'comment': /#.*/,
	'property': {
		pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\n])*"|`[^`]*`/,
		lookbehind: true,
		greedy: true
	},

	'keyword': /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,
	'boolean': boolean,

	'function': {
		pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
		inside: {
			'namespace': /\b\w+\b(?=\s*\.)/,
			'punctuation': /\./
		}
	},

	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'operator': /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
	'punctuation': clikePunctuation
};
