/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectOne from './expectOne'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectOne', () => {
  it('should export a function', () => {
    expectFunction(expectOne)
  })

  function p(value) { expectSame(expectOne(value), value) }
  function n(value) { expectToThrow(expectOne, null, [ value ]) }

  it('should work', () => {
    p(1)
    n('1')
  })
})
