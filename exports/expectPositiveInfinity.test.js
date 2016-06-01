
/* eslint-env mocha */
import expectPositiveInfinity from './expectPositiveInfinity'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectPositiveInfinity).to.be.a.function()
	})
})
