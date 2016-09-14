/* eslint-env mocha */

import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectEqual', () => {
  it('should export a function', () => {
    expectFunction(expectSame)
  })

  it('should work', () => {
    expectToThrow(expectSame, null, [ {}, {} ])
    expectToThrow(expectSame, null, [ -0, +0 ])
    expectToThrow(expectSame, null, [ 1, '1' ])

    const value = {}
    expectSame(expectSame(value, value), value)
    expectSame(expectSame(NaN, NaN), NaN)
    expectSame(expectSame(+0, +0), +0)
    expectSame(expectSame(-0, -0), -0)
  })
})
