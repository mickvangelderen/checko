/* eslint-env mocha */

import areSame from './areSame'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('areSame', () => {
  it('should export a function', () => {
    expectFunction(areSame)
  })

  it('should work', () => {
    const value = {}
    expectTrue(areSame(value, value))
    expectTrue(areSame(NaN, NaN))
    expectTrue(areSame(+0, +0))
    expectTrue(areSame(-0, -0))

    expectFalse(areSame({}, {}))
    expectFalse(areSame(-0, +0))
    expectFalse(areSame(1, '1'))
  })
})
