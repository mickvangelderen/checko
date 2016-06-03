/* eslint-env mocha */
import isSymbol from './isSymbol'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeSymbol', isSymbol)
})
