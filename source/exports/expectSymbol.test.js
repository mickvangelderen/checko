/* eslint-env mocha */
import expectSymbol from './expectSymbol'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeSymbol', expectSymbol)
})
