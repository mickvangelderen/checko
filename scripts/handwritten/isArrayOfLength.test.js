/* eslint-env mocha */

import isArrayOfLength from './isArrayOfLength'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isArrayOfLength', () => {
  it('should export a function', () => {
    expectFunction(isArrayOfLength)
  })

  function p(value, length) { expectTrue(isArrayOfLength(value, length)) }
  function n(value, length) { expectFalse(isArrayOfLength(value, length)) }

  it('should work', () => {
    p([], 0)
    n([], 1)
    p([ 1 ], 1)
    n([ 1 ], 0)
    n([ 1 ], 2)
    n({}, 0)
    n('', 0)
  })
})
