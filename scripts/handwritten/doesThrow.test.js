/* eslint-env mocha */

import doesThrow from './doesThrow'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('doesThrow', () => {
  it('should export a function', () => {
    expectFunction(doesThrow)
  })

  function p(value, expected) { expectTrue(doesThrow(value, expected)) }
  function n(value, expected) { expectFalse(doesThrow(value, expected)) }

  it('should work', () => {
    p(() => { throw new Error() })
    n(() => {})
  })
})
