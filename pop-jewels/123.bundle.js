"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[123],{589:function(e,r,i){i.r(r),i.d(r,{default:function(){return d}});var a=i(3),n=i(0),t=i(2),s=i.n(t),l=i(5),o=i.n(l),f=i(185),u=i(186),h=function(e,r){this.pane=void 0,this.name=void 0,this.blade=void 0,this.pane=r,this.name=e,this.blade=r.addBlade({view:"profiler",label:e})},c=function(e){function r(){for(var r,i,a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];return(i=e.call.apply(e,o()(r=[this]).call(r,n))||this).pane=void 0,i.profilerBlades=void 0,i}(0,n.Z)(r,e);var i=r.prototype;return i.configure=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.pane=new f.Pane({title:"Profiler"}),this.profilerBlades={},this.pane.registerPlugin(u);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.measureCode=function(e){var r=e.name,i=e.folder,a=e.callback,n=e.parentName;if(GameCore.Utils.Valid.isFunction(a))if(n){this.profilerBlades[n]&&this.measure(n,r,a)}else{if(!this.profilerBlades[r]){if(!i)return;this.createProfileBlade(r,i)}this.measure(r,r,a)}},i.measure=function(e,r,i){var a=this.profilerBlades[e];a&&a.blade.measure(r,i)},i.createProfileBlade=function(e,r){var i=new h(r,this.pane);this.profilerBlades[e]=i},i.removeFolder=function(e){if(this.profilerBlades[e]){var r=this.profilerBlades[e];this.pane.remove(r.blade),this.profilerBlades[e]=null}},r}(Phaser.Plugins.BasePlugin),d=c}}]);