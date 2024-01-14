import { languages } from '../core.js';
import { clikeComment } from '../utils/shared.js';

languages.wgsl = {
	'comment': clikeComment(),
	'builtin-attribute': {
		pattern: /(@)builtin\(.*?\)/,
		lookbehind: true,
		inside: {
			'attribute': {
				pattern: /^builtin/,
				alias: 'attr-name',
			},
			'punctuation': /[(),]/,
			'built-in-values': {
				pattern: /\b(?:frag_depth|front_facing|global_invocation_id|instance_index|local_invocation_id|local_invocation_index|num_workgroups|position|sample_index|sample_mask|vertex_index|workgroup_id)\b/,
				alias: 'attr-value',
			},
		},
	},
	'attributes': {
		pattern: /(@)(?:align|binding|compute|const|fragment|group|id|interpolate|invariant|location|size|vertex|workgroup_size)/i,
		lookbehind: true,
		alias: 'attr-name',
	},
	'functions': {
		pattern: /\b(fn\s+)[_a-zA-Z]\w*(?=[(<])/,
		lookbehind: true,
		alias: 'function',
	},
	'keyword': /\b(?:bitcast|break|case|const|continue|continuing|default|discard|else|enable|fallthrough|fn|for|function|if|let|loop|private|return|storage|struct|switch|type|uniform|var|while|workgroup)\b/,
	'builtin': /\b(?:abs|acos|acosh|all|any|array|asin|asinh|atan|atan2|atanh|atomic|atomicAdd|atomicAnd|atomicCompareExchangeWeak|atomicExchange|atomicLoad|atomicMax|atomicMin|atomicOr|atomicStore|atomicSub|atomicXor|bool|ceil|clamp|cos|cosh|countLeadingZeros|countOneBits|countTrailingZeros|cross|degrees|determinant|distance|dot|dpdx|dpdxCoarse|dpdxFine|dpdy|dpdyCoarse|dpdyFine|exp|exp2|extractBits|f32|f64|faceForward|firstLeadingBit|floor|fma|fract|frexp|fwidth|fwidthCoarse|fwidthFine|i32|i64|insertBits|inverseSqrt|ldexp|length|log|log2|mat[2-4]x[2-4]|max|min|mix|modf|normalize|override|pack2x16float|pack2x16snorm|pack2x16unorm|pack4x8snorm|pack4x8unorm|pow|ptr|quantizeToF16|radians|reflect|refract|reverseBits|round|sampler|sampler_comparison|select|shiftLeft|shiftRight|sign|sin|sinh|smoothstep|sqrt|staticAssert|step|storageBarrier|tan|tanh|textureDimensions|textureGather|textureGatherCompare|textureLoad|textureNumLayers|textureNumLevels|textureNumSamples|textureSample|textureSampleBias|textureSampleCompare|textureSampleCompareLevel|textureSampleGrad|textureSampleLevel|textureStore|texture_1d|texture_2d|texture_2d_array|texture_3d|texture_cube|texture_cube_array|texture_depth_2d|texture_depth_2d_array|texture_depth_cube|texture_depth_cube_array|texture_depth_multisampled_2d|texture_multisampled_2d|texture_storage_1d|texture_storage_2d|texture_storage_2d_array|texture_storage_3d|transpose|trunc|u32|u64|unpack2x16float|unpack2x16snorm|unpack2x16unorm|unpack4x8snorm|unpack4x8unorm|vec[2-4]|workgroupBarrier)\b/,
	'function-calls': {
		pattern: /\b[_a-z]\w*(?=\()/i,
		alias: 'function',
	},
	'class-name': /\b(?:[A-Z][A-Za-z0-9]*)\b/,
	'bool-literal': {
		pattern: /\b(?:false|true)\b/,
		alias: 'boolean',
	},
	'hex-int-literal': {
		pattern: /\b0[xX][0-9a-fA-F]+[iu]?\b(?![.pP])/,
		alias: 'number',
	},
	'hex-float-literal': {
		pattern: /\b0[xX][0-9a-fA-F]*(?:\.[0-9a-fA-F]*)?(?:[pP][+-]?\d+[fh]?)?/,
		alias: 'number'
	},
	'decimal-float-literal': {
		pattern: /(?:(?:\d*\.\d+|\d+\.\d*)(?:[eE][+-]?\d+)?|\d+[eE][+-]?\d+)[fh]?|\b\d+[fh]\b/,
		alias: 'number'
	},
	'int-literal': {
		pattern: /\b\d+[iu]?\b/,
		alias: 'number',
	},
	'operator': /&&|\|\||-[->]|\+\+|>>=?|<<=?|[-+/&%|^*!=]=?|[<>]=|~/,
	'punctuation': /[@(){}[\],;<>:.]/,
};
