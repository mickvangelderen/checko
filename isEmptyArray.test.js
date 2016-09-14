/* eslint-env mocha */

import isEmptyArray from './isEmptyArray'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isEmptyArray', () => {
  it('should export a function', () => {
    expectFunction(isEmptyArray)
  })

  function p(value) { expectTrue(isEmptyArray(value)) }
  function n(value) { expectFalse(isEmptyArray(value)) }

  it('should work', () => {
    p([])
    n([ 1 ])
    n({})
    n('')
  })
})
