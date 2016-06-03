/* eslint-env mocha */
import isDeepEqual from './isDeepEqual'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isDeepEqual).to.be.a.function()
	})

	it('should work for dates', () => {
		expect(isDeepEqual(new Date('2016-06-02'), new Date('2016-06-02'))).to.be.true()
		expect(isDeepEqual(new Date('2016-06-01'), new Date('2016-06-02'))).to.be.false()
	})

	it('should work for regular expressions', () => {
		expect(isDeepEqual(/^a|b/gm, /^a|b/gm)).to.be.true()
		expect(isDeepEqual(/^a|b/gi, /^a|b/gm)).to.be.false()
	})

	it('should work for arrays', () => {
		expect(isDeepEqual(
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ],
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ]
		)).to.be.true()
		expect(isDeepEqual(
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ],
			[ 1, { a: 1, b: [ 'a', 2 ] }, 3 ]
		)).to.be.false()
	})

	it('should care about constructors', () => {
		function Dog(name) { this.name = name }
		function Cat(name) { this.name = name }
		expect(isDeepEqual(new Dog('brian'), new Dog('brian'))).to.be.true()
		expect(isDeepEqual(new Dog('brian'), new Cat('brian'))).to.be.false()
	})

	it('should care about functions', () => {
		function f1() {}
		f1.cool = true
		function f2() {}
		f2.cool = true
		expect(isDeepEqual(f1, f1)).to.be.true()
		expect(isDeepEqual(f1, f2)).to.be.false()
	})

	it('should work for nested structures', () => {
		expect(isDeepEqual(
			{ a: { b: [ 1, 2, 3 ] } },
			{ a: { b: [ 1, 2, 3 ] } }
		)).to.be.true()
		expect(isDeepEqual(
			{ a: { b: [ 1, 2, 3 ] } },
			{ a: { b: [ 1, 3, 3 ] } }
		)).to.be.false()
	})

	it('should work for recursive structures', () => {
		function createRecursiveStructure() {
			const node = { name: 'node' }
			node.node = node
			return node
		}
		expect(isDeepEqual(
			createRecursiveStructure(),
			createRecursiveStructure()
		)).to.be.true()
		expect(isDeepEqual(
			createRecursiveStructure(),
			(() => {
				const node = createRecursiveStructure()
				node.node = createRecursiveStructure()
			})()
		)).to.be.false()
	})

	it('should use the equal(a, b) function if defined on the contructor', () => {
		function Person(name) { this.name = name }
		Person.equal = function equal(l, r) {
			return l.name.toLowerCase() === r.name.toLowerCase()
		}
		expect(isDeepEqual(
			new Person('Mick'), 
			new Person('mick')
		)).to.be.true()
		expect(isDeepEqual(
			new Person('Mick'), 
			new Person('Brian')
		)).to.be.false()
	})

	it('should use the compare(a, b) function if defined on the contructor', () => {
		function Person(name) { this.name = name }
		Person.compare = function compare(l, r) {
			const ll = l.name.toLowerCase()
			const rl = r.name.toLowerCase()
			return ll < rl
				? -1
				: ll > rl
				? 1
				: 0
		}
		expect(isDeepEqual(
			new Person('Mick'), 
			new Person('mick')
		)).to.be.true()
		expect(isDeepEqual(
			new Person('Mick'), 
			new Person('Brian')
		)).to.be.false()
	})
})