/* eslint-env mocha */

import hasOwnPropertySatisfying from './hasOwnPropertySatisfying'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('hasOwnPropertySatisfying', () => {
  it('should export a function', () => {
    expectFunction(hasOwnPropertySatisfying)
  })

  function p(value, expected, predicate) { expectTrue(hasOwnPropertySatisfying(value, expected, predicate)) }
  function n(value, expected, predicate) { expectFalse(hasOwnPropertySatisfying(value, expected, predicate)) }

  it('should work', () => {
    p({ tail: true }, 'tail', value => value === true)
    n({ tail: true }, 'tail', () => false)
    n(Object.create({ tail: true }), 'tail', () => true)
  })
})
