/* eslint-env mocha */

import isFunctionOfArity from './isFunctionOfArity'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isFunctionOfArity', () => {
  it('should export a function', () => {
    expectFunction(isFunctionOfArity)
  })

  function p(value, arity) { expectTrue(isFunctionOfArity(value, arity)) }
  function n(value, arity) { expectFalse(isFunctionOfArity(value, arity)) }

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
