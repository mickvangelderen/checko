
/* eslint-env mocha */
import expectLessThan from './expectLessThan'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectLessThan).to.be.a.function()
	})
})