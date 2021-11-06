import bunyan from 'bunyan'
import pc from 'picocolors'

const colorMap = {
	info: 'blue',
	warn: 'yellow',
	fatal: 'red',
	error: 'red',
}

class ConsoleStream {
	write(data) {
		const level = bunyan.nameFromLevel[data?.level] ?? 'info'
		const _color = pc[colorMap?.[level]]
		const _error = ['fatal', 'error']
		process[_error.includes(level) ? 'stderr' : 'stdout'].write(`[${_color(data?.time?.toISOString() ?? new Date().toISOString())}] ${_color(level)}: ${JSON.stringify(data, undefined, '  ')}\n`)
	}
}

export default ConsoleStream
