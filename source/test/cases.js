export default [
	{
		name: 'empty Arguments object',
		value: (function() { return arguments })(),
		isOfTypeArguments: true,
		isObject: true,
		isEmpty: true,
		isTruthy: true
	}, {
		name: 'Arguments object',
		value: (function() { return arguments })(1),
		isOfTypeArguments: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'empty Array',
		value: [],
		isOfTypeArray: true,
		isObject: true,
		isEmpty: true,
		isTruthy: true
	}, {
		name: 'Array of length 1',
		value: [ 1 ],
		isOfTypeArray: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'ArrayBuffer of length 1',
		value: new ArrayBuffer(1),
		isOfTypeArrayBuffer: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'constructed true Boolean',
		value: new Boolean(true),
		isOfTypeBoolean: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'constructed false Boolean',
		value: new Boolean(),
		isOfTypeBoolean: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'true',
		value: true,
		isBoolean: true,
		isTrue: true,
		isTruthy: true
	}, {
		name: 'false',
		value: false,
		isFalse: true,
		isBoolean: true,
		isFalsy: true
	}, {
		name: 'DataView',
		value: new DataView(new ArrayBuffer(4)),
		isOfTypeDataView: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Date',
		value: new Date(),
		isOfTypeDate: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Error',
		value: new Error('This is an error.'),
		isOfTypeError: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Float32Array of length 1',
		value: new Float32Array(1),
		isOfTypeFloat32Array: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Float64Array of length 1',
		value: new Float64Array(1),
		isOfTypeFloat64Array: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'function',
		value: function() {},
		isOfTypeFunction: true,
		isFunction: true,
		isTruthy: true
	}, {
		name: 'constructed function',
		value: new Function('return 1'),
		isOfTypeFunction: true,
		isFunction: true,
		isTruthy: true
	}, {
		name: 'generator function',
		value: function *() {},
		isOfTypeGeneratorFunction: true,
		isFunction: true,
		isTruthy: true
	}, {
		name: 'Int16Array of length 1',
		value: new Int16Array(1),
		isOfTypeInt16Array: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Int32Array of length 1',
		value: new Int32Array(1),
		isOfTypeInt32Array: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Int8Array of length 1',
		value: new Int8Array(1),
		isOfTypeInt8Array: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Map',
		value: new Map(),
		isOfTypeMap: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'constructed Number',
		value: new Number(),
		isOfTypeNumber: true,
		isObject: true,
		isTruthy: true
	}, {
		name: '0',
		value: 0,
		isNumber: true,
		isFiniteNumber: true,
		isFalsy: true
	}, {
		name: '-0',
		value: -0,
		isNumber: true,
		isFiniteNumber: true,
		isFalsy: true
	}, {
		name: '1',
		value: 1,
		isNumber: true,
		isFiniteNumber: true,
		isTruthy: true
	}, {
		name: '-1',
		value: -1,
		isNumber: true,
		isFiniteNumber: true,
		isTruthy: true
	}, {
		name: 'positive infinity',
		value: 1/0,
		isNumber: true,
		isPositiveInfinity: true,
		isInfiniteNumber: true,
		isTruthy: true
	}, {
		name: 'negative infinity',
		value: -1/0,
		isNumber: true,
		isNegativeInfinity: true,
		isInfiniteNumber: true,
		isTruthy: true
	}, {
		name: 'NaN',
		value: NaN,
		isNaN: true,
		isFalsy: true
	}, {
		name: 'Object',
		value: new Object(),
		isOfTypeObject: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Object without prototype',
		value: Object.create(null),
		isObject: true,
		isOfTypeNull: true,
		isTruthy: true
	}, {
		name: 'null',
		value: null,
		isNull: true,
		isFalsy: true
	}, {
		name: 'undefined',
		isUndefined: true,
		isFalsy: true
	}, {
		name: 'empty string',
		value: '',
		isString: true,
		isEmpty: true,
		isFalsy: true
	}, {
		name: 'string of length 1',
		value: 'a',
		isString: true,
		isTruthy: true
	}, {
		name: 'constructed empty string',
		value: new String(),
		isOfTypeString: true,
		isObject: true,
		isEmpty: true,
		isTruthy: true
	}, {
		name: 'constructed string of length 1',
		value: new String('a'),
		isOfTypeString: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'constructed RegExp',
		value: new RegExp(),
		isOfTypeRegExp: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'RegExp',
		value: /a/,
		isOfTypeRegExp: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Set',
		value: new Set(),
		isOfTypeSet: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Symbol',
		value: Symbol('a'),
		isOfTypeSymbol: true,
		isTruthy: true
	}, {
		name: 'Uint16Array of length 1',
		value: new Uint16Array(1),
		isOfTypeUint16Array: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Uint32Array of length 1',
		value: new Uint32Array(1),
		isOfTypeUint32Array: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Uint8Array of length 1',
		value: new Uint8Array(1),
		isOfTypeUint8Array: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'Uint8ClampedArray of length 1',
		value: new Uint8ClampedArray(1),
		isOfTypeUint8ClampedArray: true,
		isArrayBufferView: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'WeakMap',
		value: new WeakMap(),
		isOfTypeWeakMap: true,
		isObject: true,
		isTruthy: true
	}, {
		name: 'WeakSet',
		value: new WeakSet(),
		isOfTypeWeakSet: true,
		isObject: true,
		isTruthy: true
	}
]

// // RangeError
// expectDeepEqual
// expectEqual 
// expectFalse isFalse
// expectFalsy isFalsy
// expectFiniteNumber isFiniteNumber
// expectFunctionOfArity
// expectInfiniteNumber
// expectLessThan
// expectLooseEqual
// expectMoreThan
// expectNegativeInfinity
// expectNotEqual
// expectNotLooseEqual
// expectNull
// expectOwnProperty
// expectPositiveInfinity
// expectProperty
// expectTrue
// expectTruthy
// expectUndefined
// expectNaN isTypeNaN
