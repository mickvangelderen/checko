/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectDate from './expectDate'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectDate', () => {
  it('should export a function', () => {
    expectFunction(expectDate)
  })

  function p(value) { expectSame(expectDate(value), value) }
  function n(value) { expectToThrow(expectDate, null, [ value ]) }

  it('should work', () => {
    p(new Date())
    n({})
  })
})
