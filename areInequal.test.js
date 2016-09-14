/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import areInequal from './areInequal'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('areInequal', () => {
  it('should export a function', () => {
    expectFunction(areInequal)
  })

  function p(value, expected) { expectTrue(areInequal(value, expected)) }
  function n(value, expected) { expectFalse(areInequal(value, expected)) }

  it('should work', () => {
    n(1, 1)
    p(1, '1')
  })
})
