"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[716],{601:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var i=n(35),o=n(13),s=n(0),a=n(9),r=n.n(a),l=n(21),u=n.n(l),c=n(508),d=n.n(c),h=function(t){function e(){for(var e,n,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(n=t.call.apply(t,u()(e=[this]).call(e,o))||this).eruda=void 0,n.isEnable=void 0,n.container=void 0,n}(0,s.default)(e,t);var n=e.prototype;return n.configure=function(){var t=(0,o.default)(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.eruda=d(),this.container=document.createElement("div"),this.container.id="eruda-console",document.body.appendChild(this.container),this.isEnable=!0,d().init((0,i.default)({},e,{container:this.container})),this.addToggleButton();case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),n.hide=function(){this.setEnable(!1)},n.show=function(){this.setEnable(!0)},n.toggleEnable=function(){this.setEnable(!this.isEnable)},n.setEnable=function(t){this.isEnable=t,this.container.style.display=t?"block":"none"},n.destroy=function(){this.eruda.destroy()},n.position=function(t){this.eruda.position(t)},n.addToggleButton=function(){var t=document.createElement("div");t.style.position="absolute",t.style.bottom="0",t.style.right="0",t.style.width="50px",t.style.height="50px",t.style.zIndex="100",t.addEventListener("click",this.toggleEnable.bind(this)),document.body.appendChild(t)},e}(Phaser.Plugins.BasePlugin),f=h}}]);