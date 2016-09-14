/* eslint-env mocha */

import expectToThrow from './expectToThrow'
import expectSame from './expectSame'
import expectFunction from './expectFunction'

describe('expectToThrow', () => {
  it('should export a function', () => {
    expectFunction(expectToThrow)
  })

  function p(value) { expectSame(expectToThrow(value), value) }
  function n(value) { expectToThrow(expectToThrow, null, [ value ]) }

  it('should work', () => {
    p(() => { throw new Error() })
    n(() => {})
  })
})
