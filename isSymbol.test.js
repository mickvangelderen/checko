/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isSymbol from './isSymbol'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isSymbol', () => {
  it('should export a function', () => {
    expectFunction(isSymbol)
  })

  function p(value) { expectTrue(isSymbol(value)) }
  function n(value) { expectFalse(isSymbol(value)) }

  it('should work', () => {
    p(Symbol('x'))
    n('x')
    n({})
  })
})
