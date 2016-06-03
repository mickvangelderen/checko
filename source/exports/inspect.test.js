/* eslint-env mocha */
import inspect from './inspect'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(inspect).to.be.a.function()
	})

	it('should return a string', () => {
		expect(inspect(inspect)).to.be.a.string()
	})
})
