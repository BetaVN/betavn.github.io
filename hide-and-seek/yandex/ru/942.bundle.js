"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[942],{639:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var i=e(45),o=e(24),s=e(2),a=e(21),r=e.n(a),c=e(55),l=e.n(c),u=e(655),d=e.n(u),h=function(t){function n(){for(var n,e,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,l()(n=[this]).call(n,o))||this).eruda=void 0,e.isEnable=void 0,e.container=void 0,e}(0,s.Z)(n,t);var e=n.prototype;return e.configure=function(){var t=(0,o.Z)(r().mark((function t(n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.eruda=d(),this.container=document.createElement("div"),this.container.id="eruda-console",document.body.appendChild(this.container),this.isEnable=!0,d().init((0,i.Z)({},n,{container:this.container})),this.addToggleButton();case 7:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),e.hide=function(){this.setEnable(!1)},e.show=function(){this.setEnable(!0)},e.toggleEnable=function(){this.setEnable(!this.isEnable)},e.setEnable=function(t){this.isEnable=t,this.container.style.display=t?"block":"none"},e.destroy=function(){this.eruda.destroy()},e.position=function(t){this.eruda.position(t)},e.addToggleButton=function(){var t=document.createElement("div");t.style.position="absolute",t.style.bottom="0",t.style.right="0",t.style.width="50px",t.style.height="50px",t.style.zIndex="100",t.addEventListener("click",this.toggleEnable.bind(this)),document.body.appendChild(t)},n}(Phaser.Plugins.BasePlugin),p=h}}]);