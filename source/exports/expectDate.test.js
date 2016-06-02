
/* eslint-env mocha */
import expectDate from './expectDate'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectDate).to.be.a.function()
	})
})
