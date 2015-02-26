'use strict'

var Transform = require('stream').Transform
var less = require('./index')

module.exports = function (options) {
	return new Transform({
		objectMode: true,
		transform: function (file, enc, next) {
			if (file.isBuffer()) {
				file.contents = less(file.contents, options)
			} else if (file.isStream()) {
				file.on('error', this.emit.bind(this, 'error'))
				file.contents = less(file.contents, options)
			}
			this.push(file)
			return next()
		}
	})
}
