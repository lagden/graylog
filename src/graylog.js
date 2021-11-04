import process from 'node:process'
import gelfy from 'gelfy'
import bunyan from 'bunyan'
import pc from 'picocolors'

const {
	TADASHI_CONSOLE_LOG = 1,
} = process.env

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

function createLogger(name, options = {}) {
	const bunyanStream = gelfy.createBunyanStream(options)
	const logger = bunyan.createLogger({
		name,
		streams: [
			{
				type: 'raw',
				stream: TADASHI_CONSOLE_LOG === 1 ? new ConsoleStream() : bunyanStream,
			},
		],
	})

	return logger
}

export default createLogger
