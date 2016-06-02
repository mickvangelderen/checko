
/* eslint-env mocha */
import isFiniteNumber from './isFiniteNumber'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isFiniteNumber).to.be.a.function()
	})
})
