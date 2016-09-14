/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectPositiveZero from './expectPositiveZero'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectPositiveZero', () => {
  it('should export a function', () => {
    expectFunction(expectPositiveZero)
  })

  function p(value) { expectSame(expectPositiveZero(value), value) }
  function n(value) { expectToThrow(expectPositiveZero, null, [ value ]) }

  it('should work', () => {
    p(0)
    n(-0)
    n('0')
  })
})
