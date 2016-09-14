/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isZero from './isZero'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isZero', () => {
  it('should export a function', () => {
    expectFunction(isZero)
  })

  function p(value) { expectTrue(isZero(value)) }
  function n(value) { expectFalse(isZero(value)) }

  it('should work', () => {
    p(0)
    p(-0)
    n('0')
    n('-0')
  })
})
