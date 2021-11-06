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
		const level = bunyan.nameFromLevel[data.level] ?? 'info'
		const _log = console[level] ?? console.log
		const _color = pc[colorMap?.[level] ?? 'blue']
		_log(
			'[%s] %s: %s',
			_color(data.time.toISOString()),
			_color(level),
			JSON.stringify(data, undefined, '  '),
		)
	}
}

export default ConsoleStream
