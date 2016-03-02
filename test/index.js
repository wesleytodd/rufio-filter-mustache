/* global describe, it */
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var filterMustache = require('../')();
var file = path.join(__dirname, 'fixtures', 'item.md');
var renderedFile = '# A Test File\n\nWith a mustache tag.\n';

describe('rufio-filter-mustache', function () {
	it('should load and parse a mustache template from a stream', function (done) {
		fs.createReadStream(file)
			.pipe(filterMustache({
				title: 'tag'
			}))
			.on('data', function (c) {
				assert.equal(c.toString(), renderedFile);
				done();
			});
	});
});
