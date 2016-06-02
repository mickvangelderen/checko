
/* eslint-env mocha */
import expectInt16Array from './expectInt16Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectInt16Array).to.be.a.function()
	})
})
