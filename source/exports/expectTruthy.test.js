
/* eslint-env mocha */
import expectTruthy from './expectTruthy'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectTruthy).to.be.a.function()
	})
})