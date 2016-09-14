/* eslint-env mocha */

import expectToMatch from './expectToMatch'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectToMatch', () => {
  it('should export a function', () => {
    expectFunction(expectToMatch)
  })

  function p(value, key) { expectSame(expectToMatch(value, key), value) }
  function n(value, key) { expectToThrow(expectToMatch, null, [ value, key ]) }

  it('should work', () => {
    p('x', /x/)
    n('x', /y/)
  })
})
