/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/


export default Number.isFinite
  ? Number.isFinite
  :
  /**
   * Returns true if value is a finite number, false otherwise.
   * @param value The value.
   * @return  Returns the result of the comparison.
   */
  function isFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value)
  }
