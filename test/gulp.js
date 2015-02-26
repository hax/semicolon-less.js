var assert = require('assert')
var util = require('gulp-util')
var less = require('../gulpplugin')

describe('gulpplugin', function () {
	it('should convert file to semicolon-less style', function (done) {

		var testCode = "(function () {\n\t'use strict';\n\tconsole.log('Hello world!');\n})();"

		var fakeFile = new util.File({
			contents: new Buffer(testCode)
		})

		var t = less()
		t.write(fakeFile)

		t.once('data', function (file) {
			assert(file.isBuffer())
			assert.equal(file.contents.toString(), ';' + testCode.replace(/;/g, ''))
			done()
		})

	})
})
