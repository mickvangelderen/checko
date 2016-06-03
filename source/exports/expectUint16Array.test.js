/* eslint-env mocha */
import expectUint16Array from './expectUint16Array'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeUint16Array', expectUint16Array)
})
