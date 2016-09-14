/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectSet from './expectSet'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectSet', () => {
  it('should export a function', () => {
    expectFunction(expectSet)
  })

  function p(value) { expectSame(expectSet(value), value) }
  function n(value) { expectToThrow(expectSet, null, [ value ]) }

  if (Set) {
    it('should work', () => {
      p(new Set())
      n({})
    })
  } else {
    it.skip('Set not available', () => {})
  }
})
