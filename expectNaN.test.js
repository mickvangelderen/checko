/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNaN from './expectNaN'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNaN', () => {
  it('should export a function', () => {
    expectFunction(expectNaN)
  })

  function p(value) { expectSame(expectNaN(value), value) }
  function n(value) { expectToThrow(expectNaN, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    n(1)
    n(4.2)
    n(Infinity)
    p(NaN)
    n('NaN')
  })
})
