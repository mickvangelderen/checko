
/* eslint-env mocha */
import expectRegExp from './expectRegExp'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectRegExp).to.be.a.function()
	})
})
