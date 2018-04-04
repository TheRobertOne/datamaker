/**
 * @param {String} errorMessage  错误信息
 * @param {String} scriptURI   出错的文件
 * @param {Long}  lineNumber   出错代码的行号
 * @param {Long}  columnNumber  出错代码的列号
 * @param {Object} errorObj    错误的详细信息，Anything
 */
(function(window, document){
    function createHttpRequest()
    {
        if(window.ActiveXObject){
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        else if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }
    }
    function AliLogTracker(host,project,logstore)
    {
        this.uri_ = 'http://' + project + '.' + host + '/logstores/' + logstore + '/track?APIVersion=0.6.0';
        this.params_=new Array();
        this.httpRequest_ = createHttpRequest();
    }
    AliLogTracker.prototype = {
        push: function(key,value) {
            if(!key || !value) {
                return;
            }
            this.params_.push(key);
            this.params_.push(value);
        },
        logger: function()
        {
            var url = this.uri_;
            var k = 0;
            while(this.params_.length > 0)
            {
                if(k % 2 == 0)
                {
                    url += '&' + encodeURIComponent(this.params_.shift());
                }
                else
                {
                    url += '=' + encodeURIComponent(this.params_.shift());
                }
                ++k;
            }
            try
            {
                this.httpRequest_.open("GET",url,true);
                this.httpRequest_.send(null);
            }
            catch (ex)
            {
                if (window && window.console && typeof window.console.log === 'function')
                {
                    console.log("Failed to log to ali log service because of this exception:\n" + ex);
                    console.log("Failed log data:", url);
                }
            }

        }
    };
    window.Tracker = AliLogTracker;
})(window, document);
function aliyun_log(key,val){
    var logger = new window.Tracker('cn-beijing.log.aliyuncs.com','firstleap-tv-classware','firstleap-tv');
    logger.push(key,val)
    logger.logger();
}
document.getElementById('btn_load').style.display = "none";
function show_reload(is_show,onerr){
    var divM = document.getElementById("loader");
    var divM1 = document.getElementById("reload");
    if(is_show == undefined){
        console.log('显示');
        divM.style.display = "block";
        // divM1.style.display = "block";
    }else if( is_show === false){
        console.log('隐藏');
        divM.style.display = "none";
        divM1.style.display = "none";
    }
}
show_reload();
setTimeout(function(){
    document.getElementById("reload_btn").innerHTML = 'If long time no response , please click this button.';
    document.getElementById('btn_load').style.display = "inline-block";
    document.getElementById("btn_load").addEventListener('click',function(){
        window.location.reload();
    });
},30000);
//日志
//    var websocket = new WebSocket('ws://dev.firstleap.cn:8886/ws');
//    function send_log(msg){
//        if(websocket.readyState){
//            if(typeof(msg) == 'string'){
//                websocket.send(msg);
//            }else{
//                websocket.send(JSON.stringify(msg));
//            }
//
//        }
//    }
window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
    console.log("错误信息：" , errorMessage);
    console.log("出错文件：" , scriptURI);
    console.log("出错行号：" , lineNumber);
    console.log("出错列号：" , columnNumber);
    console.log("错误详情：" , errorObj);
    aliyun_log("err","错误信息"+errorMessage+"出错文件"+scriptURI+"出错行号"+columnNumber+"错误详情"+errorObj)
    document.getElementById("reload_btn").innerHTML = 'If long time no response , please click this button.';
    document.getElementById('btn_load').style.display = "inline-block";
    document.getElementById("btn_load").addEventListener('click',function(){
        window.location.reload();
    });
}




function log(msg,pre){
               // if (!document.getElementById("sdk_log")) {
               //     var logContainer = document.createElement("div");
               //     logContainer.id = "sdk_log";
               //     document.body.appendChild(logContainer);
               // }
               // var pi = document.createElement("p");
               // var text = typeof(msg);
               // if(pre != undefined){
               //     text += "|"+pre+"|";
               // }
               // if(typeof(msg)  == "string"){
               //     pi.innerHTML = text+msg;
               // }else{
               //     pi.innerHTML = text+JSON.stringify(msg);
               //
               // }
               // var logContainer = document.getElementById("sdk_log");
               // logContainer.insertBefore(pi, logContainer.firstChild);
}
//        window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
//            log("错误信息：" , errorMessage);
//            log("出错文件：" , scriptURI);
//            log("出错行号：" , lineNumber);
//            log("出错列号：" , columnNumber);
//            log("错误详情：" , errorObj);
//      }


window.onload = function () {
    gameManager.init(WCRDocSDK,game);
}