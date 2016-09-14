/* eslint-env mocha */

import expectOwnProperty from './expectOwnProperty'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectOwnProperty', () => {
  it('should export a function', () => {
    expectFunction(expectOwnProperty)
  })

  function p(value, key) { expectSame(expectOwnProperty(value, key), value) }
  function n(value, key) { expectToThrow(expectOwnProperty, null, [ value, key ]) }

  it('should work', () => {
    p({ tail: true }, 'tail')
    n(Object.create({ tail: true }), 'tail')
    p(Object.create(null, { tail: { value: true, configurable: true } }), 'tail')
  })
})
