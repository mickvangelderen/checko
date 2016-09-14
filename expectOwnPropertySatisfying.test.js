/* eslint-env mocha */

import expectOwnPropertySatisfying from './expectOwnPropertySatisfying'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectOwnPropertySatisfying', () => {
  it('should export a function', () => {
    expectFunction(expectOwnPropertySatisfying)
  })

  function p(value, key, assertion) { expectSame(expectOwnPropertySatisfying(value, key, assertion ), value) }
  function n(value, key, assertion) { expectToThrow(expectOwnPropertySatisfying, null, [ value, key, assertion  ]) }

  it('should work', () => {
    p({ tail: true }, 'tail', value => value === true)
    n({ tail: true }, 'tail', () => false)
    n(Object.create({ tail: true }), 'tail', () => true)
  })
})
