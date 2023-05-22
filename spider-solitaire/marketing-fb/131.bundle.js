"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[131],{517:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(0),i=n(1),o=n(2),a=n.n(o),c=n(16),s=n.n(c),u=n(556),d='<div id="mockads"> <div style="color:#fff;display:flex;align-content:space-between;justify-content:space-between;flex-direction:column;flex-wrap:nowrap;position:absolute;width:100vw;height:100vh;top:0;left:0;font-family:sans-serif;background:#063b4d;background:linear-gradient(0deg,#063b4d 30%,#0e6171 100%)"> <div style="display:flex;height:6vh;background-color:#0b4d5b;flex-direction:row;justify-content:space-between;align-items:center;align-content:center;font-size:larger" id="ad-header"> <div style="width:80px;display:flex;align-items:center;justify-content:center;margin:0 10px;cursor:pointer" id="close-btn"> Close </div> <div style="width:80px;display:flex;align-items:center;justify-content:center;margin:0 10px;cursor:pointer" id="reward-btn"> Reward </div> </div> <div style="display:flex;flex-direction:column;flex-wrap:nowrap;align-content:center;justify-content:center;height:100%;align-items:center" id="ad-content"> <div style="display:flex;width:200px;height:50px;background-color:#1f7888;align-items:center;justify-content:center;border-radius:100vw;margin:10px;text-transform:uppercase"> <span>AD {AD_TYPE}</span> </div> <div style="background-color:#1f7888;display:flex;align-items:center;justify-content:center;width:80vw;border-radius:16px"> <img src="{AD_CONTENT}" style="position:relative;width:inherit;border-radius:6px"/> </div> </div> <div style="display:flex;height:3vh;flex-direction:row;justify-content:flex-start;align-items:center;background-color:#063f51" id="ad-footer"></div> </div> </div>',p=GameCore.Configs.Ads.Mockup,l=p.ErrorRate,f=p.GiphyApiKey,h=function(e){return function(t){t.preventDefault();var n=document.getElementById("popup-ads");null==n||n.remove(),e()}},m=function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new(s())((function(e,n){var r=new Image;r.onload=function(){return e()},r.onerror=function(){return n()},r.src=t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.Z)(a().mark((function e(t,n,r,i){var o,c,s,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=d.markup||d,(c=document.createElement("div")).id="popup-ads",c.innerHTML=o.replace("{AD_TYPE}",t).replace("{AD_CONTENT}",n),document.body.appendChild(c),(s=document.getElementById("close-btn"))&&(t===GameCore.Ads.Types.REWARDED?(s.innerHTML="Skip",s.onclick=h((function(){i({code:"USER_INPUT",message:"Skip ads mock error"})}))):s.onclick=h(r)),(u=document.getElementById("reward-btn"))&&(t===GameCore.Ads.Types.REWARDED?u.onclick=h(r):u.remove());case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),y=function(){function e(e){this.type=void 0,this.adContent=void 0,this.apiAdContent=void 0,this.loadTimer=void 0,this.showTimer=void 0,this.type=e,this.adContent="",this.apiAdContent="https://api.giphy.com/v1/gifs/trending?api_key="+f+"&rate=pg&bundle=low_bandwidth"}var t=e.prototype;return t.loadAsync=function(){var e=(0,i.Z)(a().mark((function e(){var t,n=this;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Phaser.Math.RND.between(0,100)<=l){e.next=7;break}return e.next=4,this.getAdContentAsync();case 4:return this.adContent=e.sent,e.next=7,m(this.adContent);case 7:return e.abrupt("return",new(s())((function(e,r){clearTimeout(n.loadTimer),t?r({code:"NETWORK_FAILURE",message:"Load ads mock error"}):e()})));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.showAsync=function(){var e=(0,i.Z)(a().mark((function e(){var t,n=this;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Phaser.Math.RND.between(0,100)<=l,e.abrupt("return",new(s())((function(e,r){t?r({code:"RATE_LIMITED",message:"Show ads mock error"}):v(n.type,n.adContent,e,r)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t.getPlacementID=function(){return"123"},t.getAdContentAsync=function(){var e=(0,i.Z)(a().mark((function e(){var t,n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.apiAdContent,{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,GameCore.Utils.Valid.isObject(n)){e.next=8;break}return e.abrupt("return","");case 8:return r=n.data,i=Phaser.Math.RND.between(0,r.length-1),e.abrupt("return",r[i].images.downsized.url);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),e}(),w=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.createInstanceByType=function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new y(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}(u.Z),g=w}}]);