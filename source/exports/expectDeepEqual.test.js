/* eslint-env mocha */
// THIS IS ESSENTIALLY A COPY OF THE isDeepEqual TESTS
import expectDeepEqual from './expectDeepEqual'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectDeepEqual).to.be.a.function()
	})

	it('should work for dates', () => {
		expectDeepEqual(new Date('2016-06-02'), new Date('2016-06-02'))
		expect(() => expectDeepEqual(new Date('2016-06-01'), new Date('2016-06-02'))).to.throw()
	})

	it('should work for regular expressions', () => {
		expectDeepEqual(/^a|b/gm, /^a|b/gm)
		expect(() => expectDeepEqual(/^a|b/gi, /^a|b/gm)).to.throw()
	})

	it('should work for arrays', () => {
		expectDeepEqual(
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ],
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ]
		)
		expect(() => expectDeepEqual(
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ],
			[ 1, { a: 1, b: [ 'a', 2 ] }, 3 ]
		)).to.throw()
	})

	it('should care about constructors', () => {
		function Dog(name) { this.name = name }
		function Cat(name) { this.name = name }
		expectDeepEqual(new Dog('brian'), new Dog('brian'))
		expect(() => expectDeepEqual(new Dog('brian'), new Cat('brian'))).to.throw()
	})

	it('should care about functions', () => {
		function f1() {}
		f1.cool = true
		function f2() {}
		f2.cool = true
		expectDeepEqual(f1, f1)
		expect(() => expectDeepEqual(f1, f2)).to.throw()
	})

	it('should work for nested structures', () => {
		expectDeepEqual(
			{ a: { b: [ 1, 2, 3 ] } },
			{ a: { b: [ 1, 2, 3 ] } }
		)
		expect(() => expectDeepEqual(
			{ a: { b: [ 1, 2, 3 ] } },
			{ a: { b: [ 1, 3, 3 ] } }
		)).to.throw()
	})

	it('should work for recursive structures', () => {
		function createRecursiveStructure() {
			const node = { name: 'node' }
			node.node = node
			return node
		}
		expectDeepEqual(
			createRecursiveStructure(),
			createRecursiveStructure()
		)
		expect(() => expectDeepEqual(
			createRecursiveStructure(),
			(() => {
				const node = createRecursiveStructure()
				node.node = createRecursiveStructure()
			})()
		)).to.throw()
	})

	it('should use the equal(a, b) function if defined on the contructor', () => {
		function Person(name) { this.name = name }
		Person.equal = function equal(l, r) {
			return l.name.toLowerCase() === r.name.toLowerCase()
		}
		expectDeepEqual(
			new Person('Mick'), 
			new Person('mick')
		)
		expect(() => expectDeepEqual(
			new Person('Mick'), 
			new Person('Brian')
		)).to.throw()
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
		expectDeepEqual(
			new Person('Mick'), 
			new Person('mick')
		)
		expect(() => expectDeepEqual(
			new Person('Mick'), 
			new Person('Brian')
		)).to.throw()
	})
})
