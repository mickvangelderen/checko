
/* eslint-env mocha */
import expectLooseEqual from './expectLooseEqual'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectLooseEqual).to.be.a.function()
	})
})
