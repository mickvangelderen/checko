
/* eslint-env mocha */
import expectError from './expectError'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectError).to.be.a.function()
	})
})
