import { join } from 'path'
import { statSync } from 'fs'
import { writeFileSync } from 'fs'

// Complete tests.
;[
	{
		name: 'Arguments'
	}, {
		name: 'Array'
	}, {
		name: 'ArrayBuffer'
	}, {
		name: 'Boolean',
		predicatePrefix: 'is'
	}, {
		name: 'DataView'
	}, {
		name: 'Date'
	}, {
		name: 'Error'
	}, {
		name: 'Float32Array'
	}, {
		name: 'Float64Array'
	}, {
		name: 'Function',
		predicatePrefix: 'is'
	}, {
		name: 'GeneratorFunction'
	}, {
		name: 'Int16Array'
	}, {
		name: 'Int32Array'
	}, {
		name: 'Int8Array'
	}, {
		name: 'Map'
	}, {
		name: 'Number',
		predicatePrefix: 'is'
	}, {
		name: 'Object',
		predicatePrefix: 'is'
	}, {
		name: 'RegExp'
	}, {
		name: 'Set'
	}, {
		name: 'String',
		predicatePrefix: 'is'
	}, {
		name: 'Symbol'
	}, {
		name: 'Uint16Array'
	}, {
		name: 'Uint32Array'
	}, {
		name: 'Uint8Array'
	}, {
		name: 'Uint8ClampedArray'
	}, {
		name: 'WeakMap'
	}, {
		name: 'WeakSet'
	}, {
		name: 'FiniteNumber',
		predicatePrefix: 'is'
	}, {
		name: 'InfiniteNumber',
		predicatePrefix: 'is'
	}, {
		name: 'NegativeInfinity',
		predicatePrefix: 'is'
	}, {
		name: 'PositiveInfinity',
		predicatePrefix: 'is'
	}, {
		name: 'NaN',
		predicatePrefix: 'is'
	}, {
		name: 'Null',
		types: [ 'expect' ],
		predicatePrefix: 'is'
	}, {
		name: 'Undefined',
		predicatePrefix: 'is'
	}, {
		name: 'Falsy',
		types: [ 'expect' ],
		predicatePrefix: 'is'
	}, {
		name: 'Truthy',
		types: [ 'expect' ],
		predicatePrefix: 'is'
	}, {
		name: 'False',
		types: [ 'expect' ],
		predicatePrefix: 'is'
	}, {
		name: 'True',
		types: [ 'expect' ],
		predicatePrefix: 'is'
	}
].forEach(({ name, types = [ 'expect', 'is' ], predicatePrefix = 'isOfType' }) => {
	types.forEach(type => {
		const exportName = `${type}${name}`
		const predicate = `${predicatePrefix}${name}`
		return writeFileSync(join(__dirname, `../exports/${exportName}.test.js`),
`/* eslint-env mocha */
// THIS IS A GENERATED TEST, DO NOT MODIFY THIS FILE DIRECTLY.
import ${exportName} from './${exportName}'
import relativePath from '../test/relativePath'
import ${type}TypeTest from '../test/${type}TypeTest'

describe(relativePath(__filename), () => {
	${type}TypeTest('${predicate}', ${exportName})
})
`)
	})
})

// Comparisons
;[
	{ name: 'AtLeast', comparison: '>=' },
	{ name: 'AtMost', comparison: '<=' },
	{ name: 'Equal', comparison: '===' },
	{ name: 'LessThan', comparison: '< ' },
	{ name: 'LooseEqual', comparison: '==' },
	{ name: 'MoreThan', comparison: '> ' },
	{ name: 'NotEqual', comparison: '!==' },
	{ name: 'NotLooseEqual', comparison: '!=' }
].forEach(({ name, comparison }) => {
	const exportName = `expect${name}`
	writeFileSync(join(__dirname, `../exports/${exportName}.test.js`),
`/* eslint-env mocha */
// THIS IS A GENERATED TEST, DO NOT MODIFY THIS FILE DIRECTLY.
import ${exportName} from './${exportName}'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value ${comparison} expected, ${exportName})
})
`)
})

;[
	'expectDeepEqual', 
	'expectOwnProperty', 
	'expectProperty', 
	'hasOwnProperty', 
	'inspect', 
	'isDeepEqual'
].forEach(name => {
	const path = join(__dirname, `../exports/${name}.test.js`)
	try {
		statSync(path)
		return
	} catch (error) {
		if (!error || error.code !== 'ENOENT') return
	}
	writeFileSync(path,
`/* eslint-env mocha */
import ${name} from './${name}'
import expect from 'must'
import relativePath from '../test/relativePath'

describe.skip(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(${name}).to.be.a.function()
	})

})
`
	)
})
