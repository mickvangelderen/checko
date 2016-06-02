
/* eslint-env mocha */
import expectString from './expectString'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectString).to.be.a.function()
	})
})
