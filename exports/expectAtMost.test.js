
/* eslint-env mocha */
import expectAtMost from './expectAtMost'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectAtMost).to.be.a.function()
	})
})
