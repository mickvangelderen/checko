
/* eslint-env mocha */
import expectUint8Array from './expectUint8Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUint8Array).to.be.a.function()
	})
})
