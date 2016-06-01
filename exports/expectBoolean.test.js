
/* eslint-env mocha */
import expectBoolean from './expectBoolean'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectBoolean).to.be.a.function()
	})
})
