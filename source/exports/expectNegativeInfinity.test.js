
/* eslint-env mocha */
import expectNegativeInfinity from './expectNegativeInfinity'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNegativeInfinity).to.be.a.function()
	})
})
