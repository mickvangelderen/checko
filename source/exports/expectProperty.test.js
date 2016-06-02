
/* eslint-env mocha */
import expectProperty from './expectProperty'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectProperty).to.be.a.function()
	})
})
