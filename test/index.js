import test from 'ava'
import createLogger from '../src/graylog.js'

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

test.serial('logger', t => {
	_log({
		level: 'info',
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
