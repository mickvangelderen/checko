
/* eslint-env mocha */
import expectAtLeast from './expectAtLeast'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectAtLeast).to.be.a.function()
	})
})
