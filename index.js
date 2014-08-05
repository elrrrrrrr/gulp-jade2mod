var jade = require('jade')
var fs = require('fs')

var text = fs.readFileSync('test.jade','utf8')

var a = jade.compileClient(text,{})

eval(a)

fs.writeFile('build.js', a, function (err) {
  if (err) throw err;
});

module.exports = exports 