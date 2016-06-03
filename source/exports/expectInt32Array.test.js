/* eslint-env mocha */
import expectInt32Array from './expectInt32Array'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeInt32Array', expectInt32Array)
})
