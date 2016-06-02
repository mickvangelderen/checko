
/* eslint-env mocha */
import expectInt8Array from './expectInt8Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectInt8Array).to.be.a.function()
	})
})
