var jade = require('jade')

function handlerComplie(opt, file){

    var opts = opt || {};

    return CompileJade(file, opts)
    
    function CompileJade(file, opts){

        var prefix = opts.prefix || 'var jade = require("jade-env");\n',
            suffix = opts.suffix || '\nexports.render = template;';

        return prefix + jade.compileClient(String(file.contents), opts) + suffix;
    }
       
}

module.exports = exports = handlerComplie 