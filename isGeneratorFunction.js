// This file has been automatically generated.

const objectToString = Object.prototype.toString
const functionToString = Function.prototype.toString
const generatorFunctionRegex = /^function\*/

/**
 * Returns true if value is a GeneratorFunction, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isGeneratorFunction(value) {
  return objectToString.call(value) === '[object GeneratorFunction]'
    || (
      typeof value === 'function'
      && generatorFunctionRegex.test(functionToString.call(value))
    )
}
