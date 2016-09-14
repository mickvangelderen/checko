/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

const objectToString = Object.prototype.toString


export default Array.isArray
  ? Array.isArray
  :
  /**
   * Returns true if value is a Array, false otherwise.
   * @param value The value.
   * @return  Returns the result of the comparison.
   */
  function isArray(value) {
    return objectToString.call(value) === '[object Array]'
  }
