/* eslint-env node, mocha */
import { basename } from 'path'
import { readdirSync } from 'fs'
import * as exported from './index'
import expectEqual from './expectEqual'
import expectObject from './expectObject'
import expectOwnPropertySatisfying from './expectOwnPropertySatisfying'

describe('index', () => {
	it('should export all files', () => {
		expectObject(exported)
		readdirSync(__dirname)
		.filter(file => /\.js$/.test(file) && /\.test\.js$/.test(file) === false)
		.map(file => basename(file, '.js'))
		.filter(name => name !== 'index')
		.forEach(name => {
			expectOwnPropertySatisfying(exported, name, value => expectEqual(value, require(`./${name}`).default))
		})
	})
})
