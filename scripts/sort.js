import createFileTransformerSync from './lib/createFileTransformerSync'
import createJsonTransformer from './lib/createJsonTransformer'
import glob from 'glob'
import sortObject from 'sort-object-circular'
import { join } from 'path'

// Sort groups of non-empty lines.
function sortLines(input) {
	const groups = [
		[]
	]
	let groupIndex = 0
	let groupEmpty = true
	const regex = /([^\r\n]*)(\r?\n|\r)/g
	let match = null
	while(match = regex.exec(input)) { // eslint-disable-line no-cond-assign
		const [ , line, ending ] = match
		if ((line === '') !== groupEmpty) {
			groups[++groupIndex] = []
			groupEmpty = !groupEmpty
		}
		groups[groupIndex].push({ line, ending })
	}
	return groups
	.map((parts, index) =>
		(
			index % 2 === 0
				? parts
					.map(({ ending }) => ending)
				: parts
					.sort((l, r) => l.line > r.line)
					.map(({ line, ending }) => line + ending)
		)
		.join('')
	)
	.join('')
}

const workingDirectoryPath = join(__dirname, '..')

const jsonResults = glob.sync('**/{.babelrc,*.json}', {
	cwd: workingDirectoryPath,
	ignore: [
		'**/node_modules/**',
		'build/**'
	]
}).map(filePath => {
	return createFileTransformerSync(
		createJsonTransformer(sortObject)
	)({
		workingDirectoryPath,
		inputFilePath: filePath,
		outputFilePath: filePath
	})
})

const linesResults = glob.sync('**/{.gitignore,.npmignore}', {
	cwd: workingDirectoryPath,
	ignore: [
		'**/node_modules/**',
		'build/**'
	]
}).map(filePath => {
	return createFileTransformerSync(
		buffer => sortLines(buffer.toString())
	)({
		workingDirectoryPath,
		inputFilePath: filePath,
		outputFilePath: filePath
	})
})

export default [ ...jsonResults, ...linesResults ]
