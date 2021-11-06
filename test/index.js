// import sleep from '@tadashi/sleep'
import test from 'ava'
import createLogger from '../src/graylog.js'

const logger = createLogger('unit_test')
logger
	.on('error', () => {
		process.stdout.write('error...')
	})

const _log = data => {
	const {
		level = 'info',
		message,
		...obj
	} = data

	const m = logger?.[level] ?? logger.info
	m.bind(logger)(obj, message)
}

test.serial('logger', async t => {
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

	// await sleep(3)

	t.pass('ok')
})
