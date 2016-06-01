
/* eslint-env mocha */
import expectFunction from './expectFunction'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFunction).to.be.a.function()
	})
})
