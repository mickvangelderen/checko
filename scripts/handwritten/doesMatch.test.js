/* eslint-env mocha */

import doesMatch from './doesMatch'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('doesMatch', () => {
  it('should export a function', () => {
    expectFunction(doesMatch)
  })

  function p(value, expected) { expectTrue(doesMatch(value, expected)) }
  function n(value, expected) { expectFalse(doesMatch(value, expected)) }

  it('should work', () => {
    p('x', /x/)
    n('x', /y/)
  })
})
