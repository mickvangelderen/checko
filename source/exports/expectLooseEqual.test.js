/* eslint-env mocha */
import expectLooseEqual from './expectLooseEqual'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value == expected, expectLooseEqual)
})
