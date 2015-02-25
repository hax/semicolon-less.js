#!/usr/bin/env node
'use strict'

var fs = require('fs')
var program = require('commander')
var pkg = require('./package.json')
var less = require('./')

program.
	usage('<source> <dest>').
	version(pkg.version).
	parse(process.argv)

if (program.args.length < 1) {
	program.help()
	return
}

try {
	var input = fs.createReadStream(program.args[0])
	var output = program.args.length > 1 ? 
		fs.createWriteStream(program.args[1]) : 
		process.stdout

	less(input).pipe(output)
} catch(e) {
	console.error(e)
}
