/* eslint-env mocha */

import expectOwnDescriptorSatisfying from './expectOwnDescriptorSatisfying'
import expectSame from './expectSame'
import expectDeepEqual from './expectDeepEqual'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectOwnDescriptorSatisfying', () => {
  it('should export a function', () => {
    expectFunction(expectOwnDescriptorSatisfying)
  })

  function p(value, key, assertion) { expectSame(expectOwnDescriptorSatisfying(value, key, assertion ), value) }
  function n(value, key, assertion) { expectToThrow(expectOwnDescriptorSatisfying, null, [ value, key, assertion  ]) }

  it('should work', () => {
    p({ tail: true }, 'tail', descriptor => expectDeepEqual(descriptor, { value: true, enumerable: true, writable: true, configurable: true }))
    n(Object.create({ tail: true }), 'tail', descriptor => descriptor)
    p(Object.create(null, { tail: { value: true, configurable: true } }), 'tail', descriptor => expectDeepEqual(descriptor, { value: true, enumerable: false, writable: false, configurable: true }))
  })
})
