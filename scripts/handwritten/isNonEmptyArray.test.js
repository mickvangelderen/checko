/* eslint-env mocha */

import isNonEmptyArray from './isNonEmptyArray'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNonEmptyArray', () => {
  it('should export a function', () => {
    expectFunction(isNonEmptyArray)
  })

  function p(value) { expectTrue(isNonEmptyArray(value)) }
  function n(value) { expectFalse(isNonEmptyArray(value)) }

  it('should work', () => {
    n([])
    p([ 1 ])
    n({})
    n('')
  })
})
