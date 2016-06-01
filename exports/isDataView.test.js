
/* eslint-env mocha */
import isDataView from './isDataView'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isDataView).to.be.a.function()
	})
})
