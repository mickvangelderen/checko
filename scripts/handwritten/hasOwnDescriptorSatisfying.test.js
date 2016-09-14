/* eslint-env mocha */

import hasOwnDescriptorSatisfying from './hasOwnDescriptorSatisfying'
import areDeepEqual from './areDeepEqual'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('hasOwnDescriptorSatisfying', () => {
  it('should export a function', () => {
    expectFunction(hasOwnDescriptorSatisfying)
  })

  function p(value, expected, predicate) { expectTrue(hasOwnDescriptorSatisfying(value, expected, predicate)) }
  function n(value, expected, predicate) { expectFalse(hasOwnDescriptorSatisfying(value, expected, predicate)) }

  it('should work', () => {
    p({ tail: true }, 'tail', descriptor => areDeepEqual(descriptor, { value: true, enumerable: true, writable: true, configurable: true }))
    n(Object.create({ tail: true }), 'tail', () => true)
    p(Object.create(null, { tail: { value: true, configurable: true } }), 'tail', descriptor => areDeepEqual(descriptor, { value: true, enumerable: false, writable: false, configurable: true }))
  })
})
