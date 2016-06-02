
/* eslint-env mocha */
import expectFloat32Array from './expectFloat32Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFloat32Array).to.be.a.function()
	})
})
