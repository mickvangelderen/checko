
/* eslint-env mocha */
import expectUint16Array from './expectUint16Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUint16Array).to.be.a.function()
	})
})
