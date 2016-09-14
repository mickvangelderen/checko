/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isDate from './isDate'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isDate', () => {
  it('should export a function', () => {
    expectFunction(isDate)
  })

  function p(value) { expectTrue(isDate(value)) }
  function n(value) { expectFalse(isDate(value)) }

  it('should work', () => {
    p(new Date())
    n({})
  })
})
