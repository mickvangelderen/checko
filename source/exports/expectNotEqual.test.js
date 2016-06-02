
/* eslint-env mocha */
import expectNotEqual from './expectNotEqual'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNotEqual).to.be.a.function()
	})
})
