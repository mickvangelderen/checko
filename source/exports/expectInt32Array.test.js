
/* eslint-env mocha */
import expectInt32Array from './expectInt32Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectInt32Array).to.be.a.function()
	})
})
