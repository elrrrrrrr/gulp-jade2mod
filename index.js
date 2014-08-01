var jade = require('jade')

var a = jade.compileClient('h test',{})

eval(a)

console.log(template({}))