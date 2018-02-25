import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

//环境
const sendType = true;

//接口访问域名
const sendUrl = sendType ? "https://www.letsfreego.com/" : "http://39.108.164.18/";
//const sendUrl = "http://192.168.1.243/php/Witty/index.php/";

//ajax请求
const ajax = (options, callback) => {
	if(options.loading) base.loading();

	let method = options.method || "POST", //请求方式
		_url = options.url, //请求url
		params = options.data || {}, //请求参数
		openRs = options.openRs; //是否拦截请求结果（默认拦截:false）

	if(_url.indexOf("http") < 0) {
		_url = sendUrl + _url;
	}

	if(base.userObject != null) {
		params.token = base.userObject.token;
		params.uid = base.userObject.uid;
	}
	
	axios({
			url: _url,
			method: method,
			transformRequest: [params => {return qs.stringify(params)}],
			data: params,
			tiemout: 5000
		})
		.then(
			function(rs) {
				if(options.loading) base.loading(true);
				
				let data = rs.data;
				if(data.code == 110) {
					layer.open({
						content: data.msg,
						btn: '确定',
						shadeClose: false,
						yes(index) {
							layer.close(index);
							if(window.__wxjs_environment === 'miniprogram'){
								//小程序进入的页面，不重新登陆
								return;
							}
							window.localStorage.removeItem("g-userObject")
							base.userObject = null;
							base.login();
						}
					});
					return;
				}
				
				if(data.code == 201){
					//无答题卡，进入充值
					window.location.replace("#/recharge");
					return;
				}

				if(data.code != 0 && !openRs) {
					base.toast({
						"content": data.msg
					});
					return;
				}

				if(callback) callback(data);
			},
			function(err) {
				if(options.loading) base.loading(true);
				base.toast({
					"content": "服务器响应失败"
				});
			}
		)
};

//加载动画
const loading = (isClose) => {
	if(isClose) {
		layer.closeAll();
		return;
	}
	layer.open({
		"type": 2
	});
};

//toast弹窗
const toast = (options) => {
	layer.open({
		"content": options.content,
		"skin": options.skin || "msg",
		"time": options.time || 1.5
	});
};

const getUrlName = (name) => {
	let search = "";
	let locations = window.location;
	let hash = locations.hash;
	
	if(hash != ""){
		search = hash.split("?");
	}else{
		search = locations.search.split("?");
	}
	
	if(search.length <= 1){
		return "";
	}
	
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	let r = search[1].match(reg);
	if(r != null) {
		return unescape(r[2])
	}
	return ""
};

//微信环境
const isWeixin = () => {
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true
	} else {
		return false
	}
};

//用户登陆
const login = (page) => {
	if(isWeixin()){
		let locations = window.location,
			wxLoginAppId = "wx15041dd3ed6ac804",
			callbackPath = encodeURIComponent(encodeURIComponent(locations.hash.substr(1))),
			wxUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
			'appid=' + wxLoginAppId +
			'&redirect_uri=' + locations.origin + '/wxLogin.html' +
			'&response_type=code' +
			'&scope=snsapi_userinfo' +
			'&state=' + callbackPath +
			'#wechat_redirect';
		window.location.replace(wxUrl);
	}else{
		let locationPage = "#/phoneLogin?callbackUrl=" + decodeURI(page || window.location.href);
		window.location.replace(locationPage);
	}
};

//用户对象信息
const userObject = () => {
	let userInfo = JSON.parse(window.localStorage.getItem("g-userObject"));
	let userInfoPramas = getUrlName("userInfo");
	
	if(userInfoPramas != "" && userInfoPramas != null){
		//URL 参数检测到用户对象
		userInfoPramas = JSON.parse(decodeURI(userInfoPramas));
		
		//以下，重新缓存用户信息
		if(userInfo == null){
			window.localStorage.setItem("g-userObject",JSON.stringify(userInfoPramas));
		}else if(userInfo.token != userInfoPramas.token){
			window.localStorage.setItem("g-userObject",JSON.stringify(userInfoPramas));
		}
		
		return userInfoPramas;
	}else{
		return userInfo;
	}
};

//获取浏览器滚动条相关信息
const contextHeight = {
	"availHeight": window.innerHeight + 100,
	"clientHeight": function() {
		return document.body.clientHeight
	},
	"scrollY": function() {
		return window.scrollY
	}
};

//app 下载
const downApp = () => {
	let u = navigator.userAgent;
	
	if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
		//android终端
		window.location.href = "http://wxz.myapp.com/16891/832D07EAC02CD9B73A67BBD969AA8D2C.apk";
	}else if(u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
		//ios
		layer.open({
			content:"IOS暂未上线，是否体验H5",
			btn:["确定","离开"],
			yes(index){
				layer.close(index);
				window.location.href = "#/home";
			}
		});
	}else{
		window.location.href = "#/home";
	}
}

//IOS审核中标识
const isReview = getUrlName("isReview");

const base = {
	sendType,
	ajax,
	loading,
	toast,
	getUrlName,
	isWeixin,
	login,
	contextHeight,
	isReview,
	downApp,
	userObject: userObject()
};

export default base;