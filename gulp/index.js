var map = require("map-stream");
var engine = require("../index");

module.exports = function(options){
    return map(function(file,cb){
        file.contents = new Buffer(engine());
        file.path = file.path + '.js';
        cb(null, file);
    });
}