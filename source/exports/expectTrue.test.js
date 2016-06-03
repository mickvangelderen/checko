/* eslint-env mocha */
import expectTrue from './expectTrue'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isTrue', expectTrue)
})
