/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isSet from './isSet'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isSet', () => {
  it('should export a function', () => {
    expectFunction(isSet)
  })

  function p(value) { expectTrue(isSet(value)) }
  function n(value) { expectFalse(isSet(value)) }

  if (Set) {
    it('should work', () => {
      p(new Set())
      n({})
    })
  } else {
    it.skip('Set not available', () => {})
  }
})
