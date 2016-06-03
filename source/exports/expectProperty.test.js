/* eslint-env mocha */
import expectProperty from './expectProperty'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectProperty).to.be.a.function()
	})

	it('should accept objects with the property on the prototype', () => {
		expectProperty('a', { a: 1 })
		function Cat() {}
		Cat.prototype.tail = true
		expectProperty('tail', new Cat())
	})

	it('should reject objects without the property', () => {
		expect(() => expectProperty('b', { a: 1 })).to.throw()
	})
})
