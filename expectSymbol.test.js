/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectSymbol from './expectSymbol'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectSymbol', () => {
  it('should export a function', () => {
    expectFunction(expectSymbol)
  })

  function p(value) { expectSame(expectSymbol(value), value) }
  function n(value) { expectToThrow(expectSymbol, null, [ value ]) }

  it('should work', () => {
    p(Symbol('x'))
    n('x')
    n({})
  })
})
