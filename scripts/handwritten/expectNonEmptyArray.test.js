/* eslint-env mocha */

import expectNonEmptyArray from './expectNonEmptyArray'
import expectFunction from './expectFunction'
import expectSame from './expectSame'
import expectToThrow from './expectToThrow'

describe('expectNonEmptyArray', () => {
  it('should export a function', () => {
    expectFunction(expectNonEmptyArray)
  })

  function p(value) { expectSame(expectNonEmptyArray(value), value) }
  function n(value) { expectToThrow(expectNonEmptyArray, null, [ value ]) }

  it('should work', () => {
    n([])
    p([ 1 ])
    n({})
    n('')
  })
})
