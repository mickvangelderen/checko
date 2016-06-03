/* eslint-env mocha */
import expectUint32Array from './expectUint32Array'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeUint32Array', expectUint32Array)
})
