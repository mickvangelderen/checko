
/* eslint-env mocha */
import hasOwnProperty from './hasOwnProperty'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(hasOwnProperty).to.be.a.function()
	})
})
