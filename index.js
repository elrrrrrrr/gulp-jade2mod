var jade = require('jade')
var fs = require('fs')



function handlerComplie(opt, file){

    var opts = opt || {};

    return CompileJade(file, opts)
    
    function CompileJade(file, opts){

        var suffix = opts.suffix || '\nexports.render = template;';

        return jade.compileClient(String(file.contents), opts) + suffix;
    }
       
}

module.exports = exports = handlerComplie 