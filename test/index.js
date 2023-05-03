import test from 'ava'
import createLogger from '../src/graylog.js'
import ConsoleStream from '../src/console.js'

const logger = createLogger('unit_test')

const _log = data => {
	const {
		level = 'info',
		message,
		...obj
	} = data

	const m = logger?.[level] ?? logger.info
	m.bind(logger)(obj, message)
}

test('logger', t => {
	_log({
		level: 'notice',
		message: 'Apenas um show 1',
	})
	_log({
		level: 'error',
		message: 'Apenas um show 2',
	})
	_log({
		level: 'warn',
		message: 'Apenas um show 3',
	})

	t.pass('ok')
})

test('console', t => {
	const _console = new ConsoleStream()
	_console.write({})
	_console.write({level: 50, time: new Date()})

	t.pass('ok')
})
