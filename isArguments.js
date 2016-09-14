/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

const objectToString = Object.prototype.toString

/**
 * Returns true if value is a Arguments, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isArguments(value) {
  return objectToString.call(value) === '[object Arguments]'
}
