import inspect from './inspect'
import isGeneratorFunction from './isGeneratorFunction'

/**
 * Throws an exception when value is not a GeneratorFunction.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectGeneratorFunction(value) {
  if (isGeneratorFunction(value)) return value
  throw new Error(`Expected ${inspect(value)} to be a generator function.`)
}
