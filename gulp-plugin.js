'use strict'

var Transform = require('stream').Transform
var less = require('./index')

module.exports = function (options) {
	return new Transform({
		objectMode: true,
		transform: function (file, enc, next) {

			if (file.isNull()) {
				// do nothing
			} else if (file.isBuffer()) {
				file.contents = less(file.contents, options)
			} else if (file.isStream()) {
				file.contents = less(file.contents, options)
			} else {
				// do nothing
			}
			this.push(file)
			return next()
		}
	})
}
