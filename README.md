# rufio-filter-mustache

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status](https://travis-ci.org/wesleytodd/rufio-filter-mustache.svg?branch=master)](https://travis-ci.org/wesleytodd/rufio-filter-mustache)
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

[npm-image]: https://img.shields.io/npm/v/rufio-filter-mustache.svg
[npm-url]: https://npmjs.org/package/rufio-filter-mustache
[downloads-image]: https://img.shields.io/npm/dm/rufio-filter-mustache.svg
[downloads-url]: https://npmjs.org/package/rufio-filter-mustache

## Install

```
$ npm install --save rufio-filter-mustache
```

## Usage

```javascript
var fs = require('fs');
var mustacheFilter = require('rufio-filter-mustache')();

// Pipe file content to the filter
fs.createReadStream('./file.md')
	.pipe(mustacheFilter())
	.on('data', function (c) {
		// `c` is the rendered mustache template as a buffer
		console.log(c.toString());
	});
```
