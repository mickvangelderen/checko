/* eslint-env mocha */

import expectFunctionOfArity from './expectFunctionOfArity'
import expectFunction from './expectFunction'
import expectSame from './expectSame'
import expectToThrow from './expectToThrow'

describe('expectFunctionOfArity', () => {
  it('should export a function', () => {
    expectFunction(expectFunctionOfArity)
  })

  function p(value, arity) { expectSame(expectFunctionOfArity(value, arity), value) }
  function n(value, arity) { expectToThrow(expectFunctionOfArity, null, [ value, arity ]) }

  it('should work', () => {
    p(() => {}, 0)
    n(() => {}, 1)
    p(a => a, 1)
    n(a => a, 0)
    p((a, b) => b, 2)
    n((a, b) => b, 4)
    p((a, b, c) => c, 3)
    n((a, b, c) => c, 2)
  })
})
