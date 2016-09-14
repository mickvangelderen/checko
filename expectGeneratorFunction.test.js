/* eslint-env mocha */

import expectGeneratorFunction from './expectGeneratorFunction'
import expectEqual from './expectEqual'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

function createGeneratorFunction() {
  return eval('"use strict"; (function*() {})')
}

function areGeneratorsSupported() {
  try {
    createGeneratorFunction()
    return true
  } catch (error) {
    return false
  }
}

describe('expectGeneratorFunction', () => {
  it('should export a function', () => {
    expectFunction(expectGeneratorFunction)
  })

  if (areGeneratorsSupported()) {
    it('should work', () => {
      expectToThrow(expectGeneratorFunction, null, [ {} ])

      const value = createGeneratorFunction()
      expectEqual(expectGeneratorFunction(value), value)
    })
  } else {
    it.skip('GeneratorFunction not available', () => {})
  }
})
