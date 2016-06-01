
/* eslint-env mocha */
import expectUint8ClampedArray from './expectUint8ClampedArray'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUint8ClampedArray).to.be.a.function()
	})
})
