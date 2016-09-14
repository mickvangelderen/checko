/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectRegExp from './expectRegExp'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectRegExp', () => {
  it('should export a function', () => {
    expectFunction(expectRegExp)
  })

  function p(value) { expectSame(expectRegExp(value), value) }
  function n(value) { expectToThrow(expectRegExp, null, [ value ]) }

  it('should work', () => {
    p(new RegExp())
    n({})
  })
})
