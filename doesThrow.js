const NO_ARGUMENTS = []

/**
 * Returns true if the provided function throws an exception.
 * @param  {function} function_ The function that should throw.
 * @param  {object} [this_=this] Optional this reference to call the function with.
 * @param  {Array} [arguments_=[]] Optional arguments to call the function with.
 * @return 
 */
export default function doesThrow(function_, this_ = this, arguments_ = NO_ARGUMENTS) {
  try {
    function_.apply(this_, arguments_)
  } catch (error) {
    return true
  }
  return false
}
