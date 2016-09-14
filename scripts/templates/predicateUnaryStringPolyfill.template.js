/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

const objectToString = Object.prototype.toString


export default ___TARGET___
  ? ___TARGET___
  :
  /**
   * Returns true if value is ___TO_BE___, false otherwise.
   * @param value The value.
   * @return  Returns the result of the comparison.
   */
  function ___PREDICATE_NAME___(value) {
    return objectToString.call(value) === '[object ___OBJECT___]'
  }
