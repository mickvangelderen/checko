/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/


export default Number.isInteger
  ? Number.isInteger
  :
  /**
   * Returns true if value is an integer number, false otherwise.
   * @param value The value.
   * @return  Returns the result of the comparison.
   */
  function isIntegerNumber(value) {
    return value === Math.floor(value) && isFinite(value)
  }
