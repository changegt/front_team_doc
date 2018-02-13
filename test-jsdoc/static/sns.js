//@charset "utf-8";

var $body = $('body');
var $window = $(window);

/**
 * @namespace
 * @description 目前社区基于jQuery扩展的工具库。宗旨是提高开发效率，让开发不再重复s
 */
var SNS = function(){};

SNS.prototype = {
    version: "1.0.5",

    /**
     * @function
     */
    strToObject : function(str){
        var args = {};

        if(typeof str == "undefined" ||  str.indexOf('=') == -1 ){
            return args;
        }
        var pairs = str.split("&");
        for(var i = 0, len = pairs.length; i < len; i++){
            var pos = pairs[i].indexOf('=');
            var argsName = pairs[i].substring(0, pos);
            var value = pairs[i].substring(pos + 1);
            args[argsName] = value;
        }
        return args;
    },

    /**
     * @function
     */
    isString : function(val) {
        return toString.call(val) === '[object String]';
    },

    /**
     * @function
     */
    isObject : function(val) {
        return val === Object(val);
    },

    /**
     * <pre>
     * var defauts = {
     *      "type": "success",//normal,error,info
     *      "fadaTime": 1000,
     *      "tipContent": "操作成功",
     *      "timeOur": 2000
     *  }
     *  </pre>
     * @summary 参数配置
     */
    alertBox: function(settings, callback){
        var timeOut;
        var defauts = {
            "type": "success",//normal,error,info
            "fadaTime": 1000,
            "tipContent": "操作成功",
            "timeOur": 2000
        };
        var options = $.extend({}, defauts, settings);
        var alertTpl = '<div id="J_Alert" class="dialogtip"><div class="dialogtip-text"><span class="dialogtip-content dialogtip-text-large"></span></div></div>';
        var $JAlert = $('#J_Alert');
        if(!$JAlert.length){
            $('body').append(alertTpl);

            $JAlert = $('#J_Alert');
        } else {
            timeOut && clearTimeout(timeOut);
        }
        $JAlert.hide().stop(true, true);
        var $JAlertTextTipContent =  $JAlert.find('.dialogtip-content');

        function removeClass(){
            $JAlert.removeClass('dialogtip-normal');
            $JAlert.removeClass('dialogtip-success');
            $JAlert.removeClass('dialogtip-error');
            $JAlert.removeClass('dialogtip-info');
        }

        if(!!options.type){
            removeClass();
            $JAlert.addClass('dialogtip-'+options.type);
        }else{
            removeClass();
            $JAlert.addClass('dialogtip-success');
        }
        
        
        $JAlertTextTipContent.html(options.tipContent);
        setVerticalCenter($JAlert, 10000);
        timeOut = setTimeout(function(){

            if($.isFunction(callback)){
                $JAlert.fadeOut(options.fadaTime, callback);
            } else {
                $JAlert.fadeOut(options.fadaTime);
            }
            timeOut && clearTimeout(timeOut);

        }, options.timeOur);

        $window.bind('scroll', function(){
            timeOut && clearTimeout(timeOut);  
            $JAlert.stop(true, true).hide();   
            //$window.unbind('scroll');
        });
    }
};

String.prototype.alphaAddOne = function(){
    var _this = this;
    if( $.trim(_this) === '' ){
        _this = '(0)';
    }
    return _this.replace(/\d+/, function(matchs){
        if(typeof matchs == 'undefined'){
            matchs = '';
        }
        return parseInt(matchs) + 1; 
    });
};

var toString = Object.prototype.toString;
var AP = Array.prototype;

    


