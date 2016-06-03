/* eslint-env mocha */
import expectInt16Array from './expectInt16Array'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeInt16Array', expectInt16Array)
})
