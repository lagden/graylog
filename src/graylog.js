import process from 'node:process'
import bunyan from 'bunyan'
import gelfy from 'gelfy'
import ConsoleStream from './console.js'

const {
	TADASHI_GRAYLOG = 1,
} = process.env

function createLogger(name, options = {}) {
	const streams = [{
		type: 'raw',
		stream: new ConsoleStream(),
		reemitErrorEvents: true,
	}]

	if (Number(TADASHI_GRAYLOG) === 1) {
		streams.push({
			type: 'raw',
			stream: gelfy.createBunyanStream(options),
			reemitErrorEvents: true,
		})
	}

	const logger = bunyan.createLogger({
		name,
		streams,
	})

	return logger
}

export default createLogger
