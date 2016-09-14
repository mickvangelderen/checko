/**
 * Returns true when value is the same value as expected, false otherwise.
 * Returns true if both values are NaN, returns false if one value is +0 and the
 * other -0.
 * @param value The value.
 * @param expected The value with which value is compared.
 * @return  Returns the result of the comparison.
 */
export default function areSame(value, expected) {
  return value === expected
    ? value !== 0 || 1/value === 1/expected
    : value !== value && expected !== expected
}
