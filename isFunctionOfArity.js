/**
 * Returns true if the passed value is a function of the passed arity, false otherwise.
 * @param  {array}  value The function.
 * @param  {number}  arity The expected arity.
 * @return 
 */
export default function isFunctionOfArity(value, arity) {
	return typeof value === 'function' && value.length === arity
}
