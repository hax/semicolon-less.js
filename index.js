'use strict'

var semi = require('semi')
module.exports = semicolonless

function semicolonless(source, options) {
	return semi.remove(source, {leading: true})
}

