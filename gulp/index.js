var map = require("map-stream");
var engine = require("../index");

module.exports = function(options){
    return map(function(file,cb){
        file.contents = new Buffer(engine(options,file));
        file.path = file.path.slice(0, -5) + '.js';
        cb(null, file);
    });
}