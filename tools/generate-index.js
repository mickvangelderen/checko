import { readdirSync } from 'fs'
import { writeFileSync } from 'fs'
import { basename } from 'path'

const exportStatements = readdirSync('exports/')
.filter(filename => /\.test\.js$/.test(filename) === false)
.map(filename => basename(filename, '.js'))
.filter(name => name !== 'index')
.sort()
.map(name => `exports.${name} = require('./${name}')`)
.join('\n')

writeFileSync('exports/index.js',
`Object.defineProperty(exports, '__esModule', {
	value: true
})

${exportStatements}
`)
