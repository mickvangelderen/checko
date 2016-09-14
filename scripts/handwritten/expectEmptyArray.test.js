/* eslint-env mocha */

import expectEmptyArray from './expectEmptyArray'
import expectFunction from './expectFunction'
import expectSame from './expectSame'
import expectToThrow from './expectToThrow'

describe('expectEmptyArray', () => {
  it('should export a function', () => {
    expectFunction(expectEmptyArray)
  })

  function p(value) { expectSame(expectEmptyArray(value), value) }
  function n(value) { expectToThrow(expectEmptyArray, null, [ value ]) }

  it('should work', () => {
    p([])
    n([ 1 ])
    n({})
    n('')
  })
})
