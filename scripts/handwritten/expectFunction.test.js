/* eslint-env mocha */

import expectFunction from './expectFunction'
import expectSame from './expectSame'
import expectToThrow from './expectToThrow'

describe('expectFunction', () => {
  it('should export a function', () => {
    expectFunction(expectFunction)
  })

  function p(value) { expectSame(expectFunction(value), value) }
  function n(value) { expectToThrow(expectFunction, null, [ value ]) }

  it('should work', () => {
    p(function() {})
    n({})
  })
})
