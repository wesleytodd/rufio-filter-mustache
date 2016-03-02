var through2 = require('through2');
var mustache = require('mustache');

module.exports = function createMustacheFilter (opts) {
	opts = opts || {};
	opts.locals = opts.locals || {};

	return function mustacheFilter (item) {
		var _content = '';
		return through2(function (chunk, enc, done) {
			_content += chunk;
			done();
		}, function (done) {
			// Add site and type to locals
			var o = Object.assign({}, {
				site: item && item.site,
				type: item && item.type
			}, opts.locals);

			// Add item by singular type name if available
			if (item && item.type) {
				o[item.type.singularName] = item;
			} else {
				o.item = item;
			}

			this.push(mustache.render(_content, o));
			done();
		});
	};
};
