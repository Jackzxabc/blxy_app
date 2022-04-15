
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/common","pages/index/home","pages/user/login","pages/user/register","pages/user/bindPhone","pages/user/forget","pages/user/protocol","pages/template/editInfo","pages/details/details","pages/details/videoDetails"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#ec706b","backgroundColor":"#ec706b"},"tabBar":{"color":"#444444","selectedColor":"#444444","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/icon_home.png","selectedIconPath":"static/icon_home_c.png"},{"pagePath":"pages/index/home","text":"发视频","iconPath":"static/icon_xiaoxi.png","selectedIconPath":"static/icon_xiaoxi_c.png"},{"pagePath":"pages/index/common","text":"我的","iconPath":"static/icon_wode.png","selectedIconPath":"static/icon_wode_c.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ibms_app","compilerVersion":"3.2.16","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"titleNView":false,"softinputNavBar":"none"}},{"path":"/pages/index/common","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/index/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发视频"}},{"path":"/pages/user/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/user/register","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/user/bindPhone","meta":{},"window":{"navigationBarTitleText":"绑定手机号"}},{"path":"/pages/user/forget","meta":{},"window":{"navigationBarTitleText":"忘记密码"}},{"path":"/pages/user/protocol","meta":{},"window":{"navigationBarTitleText":"协议"}},{"path":"/pages/template/editInfo","meta":{},"window":{"navigationBarTitleText":"个人信息"}},{"path":"/pages/details/details","meta":{},"window":{"navigationBarTitleText":"详情","navigationBarBackgroundColor":"#ec706b","backgroundColor":"#f8f8f8","navigationBarTextStyle":"white","bounce":"none"}},{"path":"/pages/details/videoDetails","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#ec706b","backgroundColor":"#f8f8f8","titleNView":false,"navigationBarTextStyle":"white","bounce":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
