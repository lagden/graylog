import process from 'node:process'
import bunyan from 'bunyan'
import {cyan, yellow, red, grey} from 'kleur/colors'

const colorMap = {
	info: cyan,
	warn: yellow,
	fatal: red,
	error: red,
}

class ConsoleStream {
	write(data) {
		const level = bunyan.nameFromLevel[data?.level] ?? 'info'
		const _color = colorMap?.[level] ?? grey
		const _error = new Set(['fatal', 'error'])
		process[_error.has(level) ? 'stderr' : 'stdout']
			.write(`[${_color(data?.time?.toISOString() ?? new Date().toISOString())}] ${_color(level)}: ${JSON.stringify(data, undefined, '  ')}\n`)
	}
}

export default ConsoleStream
