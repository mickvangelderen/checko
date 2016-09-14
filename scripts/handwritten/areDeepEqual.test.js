/* eslint-env mocha */
import areDeepEqual from './areDeepEqual'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('areDeepEqual', () => {
	it('should export a function', () => {
		expectFunction(areDeepEqual)
	})

  function p(value, expected) { expectTrue(areDeepEqual(value, expected)) }
  function n(value, expected) { expectFalse(areDeepEqual(value, expected)) }

	it('should work for dates', () => {
		p(new Date('2016-06-02'), new Date('2016-06-02'))
		n(new Date('2016-06-01'), new Date('2016-06-02'))
	})

	it('should work for regular expressions', () => {
		p(/^a|b/gm, /^a|b/gm)
		n(/^a|b/gi, /^a|b/gm)
	})

	it('should work for arrays', () => {
		p(
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ],
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ]
		)
		n(
			[ 1, { a: 1, b: [ 'a', 1 ] }, 3 ],
			[ 1, { a: 1, b: [ 'a', 2 ] }, 3 ]
		)
	})

	it('should care about constructors', () => {
		function Dog(name) { this.name = name }
		function Cat(name) { this.name = name }
		p(new Dog('brian'), new Dog('brian'))
		n(new Dog('brian'), new Cat('brian'))
	})

	it('should care about functions', () => {
		function f1() {}
		f1.cool = true
		function f2() {}
		f2.cool = true
		p(f1, f1)
		n(f1, f2)
	})

	it('should work for nested structures', () => {
		p(
			{ a: { b: [ 1, 2, 3 ] } },
			{ a: { b: [ 1, 2, 3 ] } }
		)
		n(
			{ a: { b: [ 1, 2, 3 ] } },
			{ a: { b: [ 1, 3, 3 ] } }
		)
	})

	it('should work for recursive structures', () => {
		function createRecursiveStructure() {
			const node = { name: 'node' }
			node.node = node
			return node
		}
		p(
			createRecursiveStructure(),
			createRecursiveStructure()
		)
		n(
			createRecursiveStructure(),
			(() => {
				const node = createRecursiveStructure()
				node.node = createRecursiveStructure()
			})()
		)
	})

	it('should use the equal(a, b) function if defined on the contructor', () => {
		function Person(name) { this.name = name }
		Person.equal = function equal(l, r) {
			return l.name.toLowerCase() === r.name.toLowerCase()
		}
		p(
			new Person('Mick'),
			new Person('mick')
		)
		n(
			new Person('Mick'),
			new Person('Brian')
		)
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
		p(
			new Person('Mick'),
			new Person('mick')
		)
		n(
			new Person('Mick'),
			new Person('Brian')
		)
	})
})
