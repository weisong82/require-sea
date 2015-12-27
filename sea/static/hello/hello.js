// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    // 通过 require 引入依赖
    var $ = require('jQuery');
    //var jqmd5 = require('jqmd5');

    // 通过 exports 对外提供接口
    exports.title = function(title) {
            console.log("title called");
            alert("title");
        }
    // 或者通过 module.exports 提供整个接口
    module.title2 = function(title) {
        console.log("title2 called");
        alert("title2");
    }
});