
/* eslint-env mocha */
import expectDataView from './expectDataView'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectDataView).to.be.a.function()
	})
})
