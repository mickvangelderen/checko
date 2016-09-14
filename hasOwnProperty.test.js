/* eslint-env mocha */

import hasOwnProperty from './hasOwnProperty'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('hasOwnProperty', () => {
  it('should export a function', () => {
    expectFunction(hasOwnProperty)
  })

  function p(value, expected) { expectTrue(hasOwnProperty(value, expected)) }
  function n(value, expected) { expectFalse(hasOwnProperty(value, expected)) }

  it('should work', () => {
    p({ tail: true }, 'tail')
    n(Object.create({ tail: true }), 'tail')
    p(Object.create(null, { tail: { value: true, configurable: true } }), 'tail')
  })
})
