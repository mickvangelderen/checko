
/* eslint-env mocha */
import expectUint32Array from './expectUint32Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUint32Array).to.be.a.function()
	})
})
