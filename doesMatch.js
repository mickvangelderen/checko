/**
 * Returns true if the provided string matches the expected regex, false
 * otherwise.
 * @param  {string} value    The value.
 * @param  {regexp} expected The regular expression.
 * @return  Whether or not value matches regex.
 */
export default function doesMatch(value, expected) {
  return expected.test(value)
}
