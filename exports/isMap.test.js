
/* eslint-env mocha */
import isMap from './isMap'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isMap).to.be.a.function()
	})
})
