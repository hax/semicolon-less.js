# ;-less.js // Make your JavaScript Code Semicolon-less

## Rationale
### You don't need semicolons in most cases

### Write semicolons in *ONLY* 5 cases

	* `;-less	// line starts with unary - operator`
	* `;+less	// line starts with unary + opeartor`
	* `;/less/	// line starts with regexp literal`
	* `;[less]	// line starts with array initializer`
	* `;(less)	// line starts with grouping operator, such as IIFE`
 
 NOTE: In real-world, only the last case are common.

## Usage

### Install
```sh
npm install -g semicolon-less
```

### CLI
```sh
semicolon-less src/*.js
```

```sh
-less src/*.js
```

### API
```js
var less = require('semicolon-less')

// source can be a string or buffer or stream which contains the source code
var source = require('fs').readFileSync('source.js')

// less() return transformed source
var semicolonlessSource = less(source)
```

### Gulp friendly
```js
var gulp = require('gulp')
var less = require('semicolon-less')

gulp.src('*.js').pipe(less)

```

## I don't agree with you; semicolons are REQUIRED!

Ok; 
You must use Issac's awesome [semicolons](https://www.npmjs.org/package/semicolons) package;
> Ensure that all JavaScript programs have the maximum amount of safety;
> when you require("semicolons"), THEY ARE REQUIRED;
