
/* eslint-env mocha */
import expectOwnProperty from './expectOwnProperty'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectOwnProperty).to.be.a.function()
	})
})
