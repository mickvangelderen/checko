import inspect from './inspect'

const NO_ARGUMENTS = []

/**
 * Throws an exception when the provided function does not throw an exception.
 * @param  {function} function_ The function that should throw.
 * @param  {object} [this_=this] Optional this reference to call the function with.
 * @param  {Array} [arguments_=[]] Optional arguments to call the function with.
 * @return {function}
 */
export default function expectToThrow(function_, this_ = this, arguments_ = NO_ARGUMENTS) {
  try {
    function_.apply(this_, arguments_)
  } catch (error) {
    return function_
  }
  throw new Error(`Expected ${inspect(function_)} to throw when called on ${inspect(this_)} with arguments ${inspect(arguments_)} but it didn't.`)
}
