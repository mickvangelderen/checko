/* eslint-env mocha */
import expectArrayBuffer from './expectArrayBuffer'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeArrayBuffer', expectArrayBuffer)
})
