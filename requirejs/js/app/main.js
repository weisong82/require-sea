//good one ,
define(['jquery','jquerymd5'],function($){
    console.log($("#pp").text() );
    console.log($.md5("I'm Persian."));

    return {
        title:function(title) {
            console.log("title called");
            alert("good")
            return "title";
        }
    }
} );

//define(function(){
//    return function (test){
//        alert("obj test");
//    }
//});