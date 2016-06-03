/* eslint-env mocha */
import expectLessThan from './expectLessThan'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value <  expected, expectLessThan)
})
