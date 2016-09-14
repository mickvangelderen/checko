// This file has been automatically generated.

/* eslint-env mocha */

import isGeneratorFunction from './isGeneratorFunction'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

function createGeneratorFunction() {
  return eval('"use strict"; (function*() {})')
}

function areGeneratorsSupported() {
  try {
    createGeneratorFunction()
  } catch (error) {
    return false
  }
  return true
}

describe('isGeneratorFunction', () => {
  it('should export a function', () => {
    expectFunction(isGeneratorFunction)
  })

  if (areGeneratorsSupported) {
    it('should work', () => {
      expectTrue(isGeneratorFunction(createGeneratorFunction()))
      expectFalse(isGeneratorFunction({}))
    })
  } else {
    it.skip('GeneratorFunction not available', () => {})
  }
})
