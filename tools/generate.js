// [
// 	'Arguments',
// 	// 'Array', Array.isArray
// 	'ArrayBuffer',
// 	// 'Boolean', typeof value === 'boolean'
// 	'DataView',
// 	'Date',
// 	'Error',
// 	'Float32Array',
// 	'Float64Array',
// 	// 'Function', typeof value === 'function'
// 	'GeneratorFunction',
// 	'Int16Array',
// 	'Int32Array',
// 	'Int8Array',
// 	'Map',
// 	// 'Number', typeof value === 'number' && value === value
// 	// 'Object', typeof value === 'object' && value !== null
// 	// 'Promise', isPromise(value) || value && isFunction(value.then)
// 	'RegExp',
// 	'Set',
// 	// 'String', typeof value === 'string'
// 	'Symbol',
// 	'Uint16Array',
// 	'Uint32Array',
// 	'Uint8Array',
// 	'Uint8ClampedArray',
// 	'WeakMap',
// 	'WeakSet'
// ].forEach(name => {
// 	require('fs').writeFileSync(`is${name}.js`, `
// 		const objectToString = Object.prototype.toString

// 		function is${name}(value) {
// 			return objectToString.call(value) === '[object ${name}]'
// 		}

// 		export default is${name}`
// 		.substr(1).split('\n').map(line => line.substr(2)).join('\n') + '\n'
// 	)
// 	require('fs').writeFileSync(`expect${name}.js`, `
// 		import inspect from './inspect'
// 		import is${name} from './is${name}'

// 		function expect${name}(value) {
// 			if (is${name}(value)) return value
// 			throw new TypeError(\`Expected $\{inspect(value)} to be ${/^[aeiou]/i.test(name) ? 'an' : 'a'} ${name}.\`)
// 		}

// 		export default expect${name}`
// 		.substr(1).split('\n').map(line => line.substr(2)).join('\n') + '\n'
// 	)
// })
