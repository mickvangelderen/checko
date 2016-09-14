/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import areLooseInequal from './areLooseInequal'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('areLooseInequal', () => {
  it('should export a function', () => {
    expectFunction(areLooseInequal)
  })

  function p(value, expected) { expectTrue(areLooseInequal(value, expected)) }
  function n(value, expected) { expectFalse(areLooseInequal(value, expected)) }

  it('should work', () => {
    n(1, '1')
    p(1, 2)
  })
})
