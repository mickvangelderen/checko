/* eslint-env mocha */
import expectMoreThan from './expectMoreThan'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value >  expected, expectMoreThan)
})
