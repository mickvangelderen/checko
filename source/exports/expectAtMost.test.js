/* eslint-env mocha */
import expectAtMost from './expectAtMost'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value <= expected, expectAtMost)
})
