/* eslint-env mocha */
import hasOwnProperty from './hasOwnProperty'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(hasOwnProperty).to.be.a.function()
	})

	it('should accept objects with the property on itself', () => {
		expect(hasOwnProperty('a', { a: 1 })).to.be.true()
	})

	it('should reject objects without the property on itself', () => {
		expect(hasOwnProperty('b', { a: 1 })).to.be.false()
		function Cat() {}
		Cat.prototype.tail = true
		expect(hasOwnProperty('tail', new Cat())).to.be.false()
	})
})
