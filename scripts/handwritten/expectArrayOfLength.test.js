/* eslint-env mocha */

import expectArrayOfLength from './expectArrayOfLength'
import expectFunction from './expectFunction'
import expectSame from './expectSame'
import expectToThrow from './expectToThrow'

describe('expectArrayOfLength', () => {
  it('should export a function', () => {
    expectFunction(expectArrayOfLength)
  })

  function p(value, length) { expectSame(expectArrayOfLength(value, length), value) }
  function n(value, length) { expectToThrow(expectArrayOfLength, null, [ value, length ]) }

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
