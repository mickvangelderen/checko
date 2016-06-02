
/* eslint-env mocha */
import expectEqual from './expectEqual'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectEqual).to.be.a.function()
	})
})
