"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[638],{516:function(t,e,n){n.r(e);var i=n(0),s=n(5),a=n.n(s),r=n(550),o=n(555),c=function(t){function e(){for(var e,n,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(n=t.call.apply(t,a()(e=[this]).call(e,s))||this).fontName=void 0,n.text=void 0,n.run=function(){},n}(0,i.Z)(e,t);var n=e.prototype;return n.preload=function(){this.events.on("wake",this.run),this.events.once("create",this.run),this.scene.isPaused()},n.create=function(){t.prototype.create.call(this),this.cameras.main.setBackgroundColor(4868682);var e=new o.Z(this);Phaser.Display.Align.In.Center(e,this.gameZone)},n.createTextObject=function(){this.text=this.add.text(0,0,"Text Styler",{fontFamily:this.fontName,fontSize:"50px",color:"#ffffff",stroke:"#000000",strokeThickness:3}),this.text.setHighQuality(),Phaser.Display.Align.In.Center(this.text,this.gameZone)},e}(r.Z);e.default=c}}]);