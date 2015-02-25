'use strict'

var semi = require('semi')
var Readable = require('stream').Readable

module.exports = semicolonless

function semicolonless(source, options) {
	if (typeof source === 'string') return semi.remove(source, {leading: true})
	if (source instanceof Readable) {
		var result = new Readable()
		result._read = function noop() {}
		var sourceStr = ''
		source.setEncoding('utf-8')
		source.on('data', function (chunk) {
			sourceStr += chunk
		})
		source.on('end', function () {
			result.push(semi.remove(sourceStr, {leading: true}))
			result.push(null)
		})
		return result
	}
}
