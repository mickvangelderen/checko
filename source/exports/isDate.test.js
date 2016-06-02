
/* eslint-env mocha */
import isDate from './isDate'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isDate).to.be.a.function()
	})
})
