/* eslint-env mocha */
import * as exported from './index'
import expect from 'must'
import relativePath from '../test/relativePath'
import { basename } from 'path'
import { readdirSync } from 'fs'

describe(relativePath(__filename), () => {
	it('should export all files', () => {
		expect(exported).to.be.an.object()
		readdirSync(__dirname)
		.filter(file => !/\.test\.js$/.test(file))
		.map(file => basename(file, '.js'))
		.filter(name => name !== 'index')
		.forEach(name => {
			expect(exported).to.have.ownProperty(name, require(`./${name}`).default)
		})
	})
})
