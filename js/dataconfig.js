/***
 * 
 * author: Sytm
 * createtime: 2017/09/18
 * 
 * This file is to set config info,include the url and global method
 * 
 * 
 */


window.sytm = (function(window) {
        var Sytm = function() {

        }

        Sytm.prototype = {
            setKey: function(key) {
                plus.storage.setItem("userKey",key);
            },
            getKey:function(){
            	return plus.storage.getItem("userKey"); 
            },
            setUserInfo:function(userinfo){
            	plus.storage.setItem("userInfo",JSON.stringify(userinfo));
            },
            getUserInfo:function(){
            	return JSON.parse(plus.storage.getItem("userInfo"));
            },
            checkConnect:function(){
            	if (plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
				    return false;
				} else {
				    return true;
				}
            },
            getUrl:function(key){
            	return this.urlMap[key];
            },
            printStr:function(str,df){
            	if(str==null)return df==null?"":df;
            	return str;
            },
            urlMap:{
            	global:'http://www5.mozetec.com/mobile/ajax.php',
            	sms:'http://www5.mozetec.com/mobile/sms.php'
            }
        }
        
        document.addEventListener("netchange", 
	        function() {
			    if (plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
			        mui.toast("网络异常，请检查网络设置！");
			
			    } else {
			        mui.toast("网络正常");
			    }
			}
	        , false);
        

        return new Sytm();
    })();
