"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[401],{584:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=n(3),a=n(0),s=n(2),l=n.n(s),o=n(6),r=n.n(o),c=function t(e){var n=e||{},i=n.DisplayMode,a=void 0===i?0:i,s=n.FPS,l=void 0===s||s,o=n.MS,r=void 0===o||o,c=n.MB,d=void 0===c||c,f=0,h=document.createElement("div");function u(t){return h.appendChild(t.dom),t}function p(t){for(var e=0;e<h.children.length;e++)h.children[e].style.display=e===t?"block":"none";f=t}h.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:50",0===a&&h.addEventListener("click",(function(t){t.preventDefault(),p(++f%h.children.length)}),!1);var m=(performance||Date).now(),y=m,b=0;if(l)var v=u(new t.Panel("FPS","#0ff","#002"));if(r)var g=u(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory&&d)var S=u(new t.Panel("MB","#f08","#201"));return 0===a?p(0):function(){for(var t=0;t<h.children.length;t++)h.children[t].style.display="block"}(),{REVISION:16,dom:h,addPanel:u,showPanel:p,begin:function(){m=(performance||Date).now()},end:function(){b++;var t=(performance||Date).now();if(g&&g.update(t-m,200),t>=y+1e3&&(v&&v.update(1e3*b/(t-y),100),y=t,b=0,S)){var e=performance.memory;S.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){m=this.end()},domElement:h,setMode:p}};c.Panel=function(t,e,n){var i=1/0,a=0,s=Math.round,l=s(window.devicePixelRatio||1),o=80*l,r=48*l,c=3*l,d=2*l,f=3*l,h=15*l,u=74*l,p=30*l,m=document.createElement("canvas");m.width=o,m.height=r,m.style.cssText="width:80px;height:48px;display:block;top:0;left:0;transform: translate(0,0)";var y=m.getContext("2d");return y.font="bold "+9*l+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=n,y.fillRect(0,0,o,r),y.fillStyle=e,y.fillText(t,c,d),y.fillRect(f,h,u,p),y.fillStyle=n,y.globalAlpha=.9,y.fillRect(f,h,u,p),{dom:m,update:function(r,b){i=Math.min(i,r),a=Math.max(a,r),y.fillStyle=n,y.globalAlpha=1,y.fillRect(0,0,o,h),y.fillStyle=e,y.fillText(s(r)+" "+t+" ("+s(i)+"-"+s(a)+")",c,d),y.drawImage(m,f+l,h,u-l,p,f,h,u-l,p),y.fillRect(f+u-l,h,l,p),y.fillStyle=n,y.globalAlpha=.9,y.fillRect(f+u-l,h,l,s((1-r/b)*p))}}};var d=c,f=function(){function t(t){this.config=t,this.self=new d(t),this.body=void 0,this.alpha=t.Opacity||.8,this.isEnable=!0,this.initShowStats()}var e=t.prototype;return e.initShowStats=function(){this.self.dom.style.opacity=this.alpha,this.body=document.body.appendChild(this.self.dom),requestAnimationFrame(this.statsAnimate.bind(this))},e.statsAnimate=function(){this.isEnable&&(this.self.begin(),this.self.end(),requestAnimationFrame(this.statsAnimate.bind(this)))},e.getStats=function(){return this.self},e.setAlphaInStats=function(t){this.body.style.opacity=t},e.setEnable=function(t){void 0===t&&(t=!0),this.body&&(this.body.hidden=!t),this.isEnable=t,t&&requestAnimationFrame(this.statsAnimate.bind(this))},t}(),h=function(t){function e(){for(var e,n,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(n=t.call.apply(t,r()(e=[this]).call(e,a))||this).statsMain=void 0,n.isEnable=void 0,n}(0,a.Z)(e,t);var n=e.prototype;return n.configure=function(){var t=(0,i.Z)(l().mark((function t(e){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),this.isEnable=!0,this.statsMain=new f(e),this.addToggleButton();case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),n.getStats=function(){return this.statsMain.getStats()},n.setAlphaInStats=function(t){return this.statsMain.setAlphaInStats(t)},n.hide=function(){this.setEnable(!1)},n.show=function(){this.setEnable(!0)},n.toggleEnable=function(){this.setEnable(!this.isEnable)},n.setEnable=function(t){void 0===t&&(t=!0),this.isEnable=t,this.statsMain.setEnable(t)},n.addToggleButton=function(){var t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="50px",t.style.height="50px",t.style.zIndex="100",t.addEventListener("click",this.toggleEnable.bind(this)),document.body.appendChild(t)},e}(Phaser.Plugins.BasePlugin),u=h}}]);