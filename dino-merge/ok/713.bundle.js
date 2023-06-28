"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[713],{672:function(t,e,i){i.r(e),i.d(e,{default:function(){return pe}});var n=i(1),s=i(41),a=i.n(s),o=i(659),r=o.Z.CONFETTI_HEXAGON,c=r.KEY,h=r.TEXTURE,m=r.FRAME_RATE,l=r.END,u=r.PREFIX,d=r.ZERO_PAD,p=function(t){function e(e){var i={repeat:-1,frameRate:m,frames:e.generateFrameNames(h,{prefix:u,end:l,zeroPad:d}),yoyo:!0,showOnStart:!0};return t.call(this,e,c,i)||this}return(0,n.Z)(e,t),e}(Phaser.Animations.Animation),f=i(2),v=i(474),E=i(489),g=i(39),x={targets:[],duration:400,ease:i(473).Z,props:{scale:"+=0.1"}},y=function(t){function e(e){return t.call(this,x,e)||this}return(0,n.Z)(e,t),e}(g.Z),A={targets:[],duration:600,ease:Phaser.Math.Easing.Back.Out,props:{y:{from:500,to:0}}},T=function(t){function e(e){return t.call(this,A,e)||this}return(0,n.Z)(e,t),e}(g.Z),Z=i(485),S=i(5),w=f.Z.EFFECTS,P=w.KEY,C=w.FRAME,F=function(t){function e(e){var i;return(i=t.call(this,e)||this).halo=void 0,i.star=void 0,i.createStar(),i.createHalo(),i.scene.add.existing((0,S.Z)(i)),i}(0,n.Z)(e,t);var i=e.prototype;return i.run=function(){this.runStarAnimation(),this.runHaloAnimation()},i.createStar=function(){this.star=this.scene.make.image({key:P,frame:C.FX_STAR_YELLOW,visible:!1}),this.star.setWorldSize(35,35),this.add(this.star)},i.createHalo=function(){this.halo=this.scene.make.image({key:P,frame:C.FX_CIRCLE,visible:!1}),this.halo.setWorldSize(162,162),this.add(this.halo)},i.runStarAnimation=function(){var t=this;this.scene.tweens.killTweensOf(this.star),this.star.setVisible(!0);var e=1/this.scene.world.getPixelRatio();this.scene.tweens.add({targets:[this.star],duration:400,ease:Phaser.Math.Easing.Quintic.Out,props:{scaleX:{start:16*e,to:0},scaleY:{start:10*e,to:0}},onComplete:function(){t.star.setVisible(!1)}})},i.runHaloAnimation=function(){var t=this;this.scene.tweens.killTweensOf(this.halo),this.halo.setScale(0),this.halo.setVisible(!0),this.scene.tweens.add({targets:[this.halo],duration:200,ease:Phaser.Math.Easing.Cubic.Out,props:{scale:{from:0,to:8},alpha:{from:1,to:0}},onComplete:function(){t.halo.setVisible(!1)}})},e}(Phaser.GameObjects.Container),k=i(66),b=f.Z.EFFECTS,O=b.KEY,_=b.FRAME,I=function(t){function e(e,i){var n;return(n=t.call(this,e,0,0,O,_.COIN)||this).onUpdate=void 0,n.onComplete=void 0,n.positions=void 0,n.eatAnimation=void 0,n.setWorldSize(16.5,15.5),n.positions=i,n.setDepth(k.Z.PRIORITY),n.createAnimation(),n.scene.add.existing((0,S.Z)(n)),n}(0,n.Z)(e,t);var i=e.prototype;return i.createAnimation=function(){var t=this,e=1/this.scene.world.getPixelRatio(),i=this.positions,n=i.from,s=i.to;this.eatAnimation=this.scene.add.tween({targets:this,duration:1125,ease:"Circ.easeInOut",paused:!0,props:{x:{from:n.x,to:s.x},y:{from:n.y,to:s.y},scale:{from:e,to:e}},onUpdate:function(){"function"===typeof t.onUpdate&&t.onUpdate()},onComplete:function(){t.destroy(),"function"===typeof t.onComplete&&t.onComplete()}})},i.run=function(){this.eatAnimation.play()},e}(Phaser.GameObjects.Image),N=f.Z.EFFECTS,R=N.KEY,B=N.FRAME,M=function(t){function e(e,i,n){var s;return(s=t.call(this,e,R,B.COIN)||this).onUpdate=void 0,s.onComplete=void 0,s.emitter=void 0,s.circle=void 0,s.createEmitters(i,n),s.setActive(!1),s.setVisible(!1),s.scene.add.existing((0,S.Z)(s)),s}(0,n.Z)(e,t);var i=e.prototype;return i.createEmitters=function(t,e){var i=this,n=1/this.scene.world.getPixelRatio();this.emitter=this.createEmitter({on:!1,frame:B.COIN,angle:{min:0,max:360},speed:{min:240,max:340},scale:{start:n,end:n},lifespan:5e3,emitCallback:function(t){t.accelerationX=-t.velocityX/1.2,t.accelerationY=-t.velocityY/1.2},deathCallback:function(n){var s=new I(i.scene,{from:{x:n.x,y:n.y},to:{x:t,y:e}});s.onUpdate=function(){"function"===typeof i.onUpdate&&i.onUpdate()},s.onComplete=function(){"function"===typeof i.onComplete&&i.onComplete()},s.setDepth(k.Z.ON_TOP),s.run()}})},i.explode=function(t,e,i){this.setActive(!0),this.setVisible(!0),this.circle||(this.circle=new Phaser.Geom.Circle(e,i,100)),this.emitter.deathZone=new Phaser.GameObjects.Particles.Zones.DeathZone(this.circle,!1),this.emitter.explode(t,e,i)},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),L=i(631),Y=i(484),X=function(t){function e(e){var i;return(i=t.call(this,e)||this).lastChange=0,i.currentFrame=-1,i.isYoyo=!1,i.confettiAnim=void 0,i.lastChange=0,i.confettiAnim=window.game.anims.get(o.Z.CONFETTI_HEXAGON.KEY),i}return(0,n.Z)(e,t),e.prototype.update=function(e,i,n){var s=t.prototype.update.call(this,e,i,n);return this.lastChange+=e,this.lastChange>=this.confettiAnim.msPerFrame&&(this.isYoyo?this.currentFrame--:this.currentFrame++,this.currentFrame<0&&(this.isYoyo=!1,this.currentFrame=1),this.currentFrame>=this.confettiAnim.frames.length&&(this.isYoyo=!0,this.currentFrame-=2),this.frame=this.confettiAnim.frames[this.currentFrame].frame,this.lastChange-=this.confettiAnim.msPerFrame),s},e}(Phaser.GameObjects.Particles.Particle),K=f.Z.EFFECTS,j=K.KEY,G=K.FRAME,W=function(t){function e(e){var i;return(i=t.call(this,e,j,G.FX_CONFETTI_HEXAGON+"0")||this).emitter=void 0,i.setActive(!1),i.scene.add.existing((0,S.Z)(i)),i}(0,n.Z)(e,t);var i=e.prototype;return i.createEmitters=function(){var t=1/this.scene.world.getPixelRatio(),e={on:!1,particleBringToTop:!0,particleClass:X,tint:[14223402,1021804,5420529,16702052],timeScale:1,reserve:20,frequency:100,maxParticles:2,gravityY:-5,speedX:{min:-100,max:100},speedY:{min:50,max:150},alpha:{start:1,end:.2},rotate:{start:0,end:1080},scale:{min:1*t,max:.3*t},angle:{min:10,max:170},lifespan:{min:8e3,max:12e3}};this.emitter=this.createEmitter(e)},i.run=function(t,e,i){this.setActive(!0),this.stop(),this.reset(),this.emitter.setQuantity(t),this.emitter.setPosition(e,i),this.emitter.start()},i.stop=function(){var t,e;null==(t=this.emitter)||t.killAll(),null==(e=this.emitter)||e.stop()},i.reset=function(){this.createEmitters()},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),z=i(124),D=f.Z.EFFECTS,U=D.KEY,H=D.FRAME,V=function(t){function e(e,i){var n;return(n=t.call(this,e,U,H.BLANK)||this).config=void 0,n.emitter=void 0,n.config=i||{},n.scene.add.existing((0,S.Z)(n)),n}(0,n.Z)(e,t);var i=e.prototype;return i.createEmitters=function(){var t=H.FX_CONFETTI_SMALL_1,e=H.FX_CONFETTI_SMALL_2,i=H.FX_CONFETTI_SMALL_3,n=H.FX_CONFETTI_SMALL_4,s=1/this.scene.world.getPixelRatio(),a={on:!1,particleBringToTop:!0,frame:[t,e,i,n],tint:[14223402,1021804,5420529,16702052],timeScale:1,frequency:300,maxParticles:120,gravityY:-10,speedX:{min:-100,max:100},speedY:{min:80,max:250},alpha:{start:1,end:.8},rotate:{start:0,end:1080},scale:{min:.8*s,max:2*s},angle:{min:20,max:160},lifespan:{min:8e3,max:12e3}},o=(0,z.TS)(a,this.config);this.emitter=this.createEmitter(o)},i.run=function(t,e,i){this.stop(),this.emitter.setQuantity(t),this.emitter.setPosition(e,i),this.emitter.start()},i.explode=function(t,e,i){this.emitter||this.createEmitters(),this.emitter.explode(t,e,i)},i.stop=function(){var t,e,i;null==(t=this.emitter)||t.killAll(),null==(e=this.emitter)||e.stop(),null==(i=this.emitter)||i.remove(),this.createEmitters()},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),Q=f.Z.EFFECTS,q=Q.KEY,J=Q.FRAME,$=function(t){function e(e,i){var n;return(n=t.call(this,e,q,J.BLANK)||this).config=void 0,n.emitter=void 0,n.config=i||{},n.scene.add.existing((0,S.Z)(n)),n}(0,n.Z)(e,t);var i=e.prototype;return i.createEmitters=function(){var t=J.FX_CONFETTI_SMALL_1,e=J.FX_CONFETTI_SMALL_2,i=J.FX_CONFETTI_SMALL_3,n=J.FX_CONFETTI_SMALL_4,s=1/this.scene.world.getPixelRatio(),a={on:!1,particleBringToTop:!0,frame:[t,e,i,n],tint:[14223402,1021804,5420529,16702052],timeScale:1,frequency:300,maxParticles:120,alpha:{start:1,end:.8},scale:{min:.6*s,max:1*s},lifespan:{min:2e3,max:3e3},speedX:{min:-100,max:100},speedY:{min:-20,max:-40},gravityY:50,rotate:{start:-1080,end:0},angle:{min:110,max:145}},o=(0,z.TS)(a,this.config);this.emitter=this.createEmitter(o)},i.run=function(t,e,i){this.stop(),this.emitter.setQuantity(t),this.emitter.setPosition(e,i),this.emitter.start()},i.explode=function(t,e,i){this.emitter||this.createEmitters(),this.emitter.explode(t,e,i)},i.stop=function(){var t,e,i;null==(t=this.emitter)||t.killAll(),null==(e=this.emitter)||e.stop(),null==(i=this.emitter)||i.remove(),this.createEmitters()},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),tt=f.Z.DEFAULT_8_BIT,et=tt.KEY,it=tt.FRAME,nt=function(t){function e(e){var i;return(i=t.call(this,e,et,it.RESULT_SCREEN_SINGLE_COIN_ICON)||this).emitter=void 0,i.createEmitters(),i.setActive(!1),i.setVisible(!1),i.scene.add.existing((0,S.Z)(i)),i}(0,n.Z)(e,t);var i=e.prototype;return i.createEmitters=function(){var t=1/this.scene.world.getPixelRatio();this.emitter=this.createEmitter({on:!1,frame:it.RESULT_SCREEN_SINGLE_COIN_ICON,gravityY:160,angle:{min:-180,max:0},speed:{min:50,max:200},scale:{min:.3*t,max:1*t},alpha:{start:1,end:0,ease:Phaser.Math.Easing.Expo.In},lifespan:1500})},i.explode=function(t,e,i){this.setActive(!0),this.setVisible(!0),this.emitter.explode(t,e,i)},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),st=i(635),at=f.Z.EFFECTS,ot=at.KEY,rt=at.FRAME,ct=function(t){function e(e){var i;return(i=t.call(this,e,ot,rt.FX_SPARK_YELLOW)||this).emitZone=void 0,i.emitter=void 0,i.createEmitZone(),i.createEmitters(),i.scene.add.existing((0,S.Z)(i)),i}(0,n.Z)(e,t);var i=e.prototype;return i.createEmitZone=function(){this.emitZone=new Phaser.Geom.Rectangle},i.createEmitters=function(){var t=1/this.scene.world.getPixelRatio();this.emitter=this.createEmitter({frame:rt.FX_STAR_YELLOW,emitZone:{source:this.emitZone,type:"random"},deathZone:{source:this.emitZone,type:"onLeave"},frequency:200,speedX:{min:-1,max:1},speedY:{min:7,max:11},lifespan:{min:1e3,max:1500},scale:{min:.01,max:.015},emitCallback:function(e){e.setScale({min:t/4,max:t})},particleClass:st.Z})},i.run=function(t,e,i,n,s){this.stop(),this.emitZone.setSize(n,s),this.emitZone.setPosition(e-n/2,i-s/2),this.emitter.setQuantity(t),this.emitter.start()},i.stop=function(){var t,e;null==(t=this.emitter)||t.killAll(),null==(e=this.emitter)||e.stop()},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),ht=f.Z.EFFECTS,mt=ht.KEY,lt=ht.FRAME,ut=function(t){function e(e){var i;return(i=t.call(this,e,mt,lt.FX_SPARK)||this).deathZone=void 0,i.emitter=void 0,i.createDeathZone(),i.createEmitters(),i.setActive(!1),i.setVisible(!1),i.scene.add.existing((0,S.Z)(i)),i}(0,n.Z)(e,t);var i=e.prototype;return i.createDeathZone=function(){this.deathZone=new Phaser.Geom.Circle},i.createEmitters=function(){var t=1/this.scene.world.getPixelRatio();this.emitter=this.createEmitter({on:!1,frame:lt.ANIMATION_STAR_X+"1",speed:{min:85,max:150},alpha:{start:1,end:0},tint:[8443204,2928867,12013036,16376097,15285798],scale:t/2,deathZone:{source:this.deathZone,type:"onLeave"},lifespan:1e3})},i.explode=function(t,e,i,n){this.setActive(!0),this.setVisible(!0),this.deathZone.radius=n,this.deathZone.setPosition(e,i),this.emitter.explode(t,e,i)},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),dt=i(658),pt=i(483),ft=i(632),vt=i(633),Et=f.Z.EFFECTS,gt=Et.KEY,xt=Et.FRAME,yt=function(t){function e(e){var i;return(i=t.call(this,e,gt,xt.FX_STAR_YELLOW)||this).emitZone=void 0,i.timeScaleTween=void 0,i.emitter=void 0,i.scene=e,i.createEmitZone(),i.scene.add.existing((0,S.Z)(i)),i}(0,n.Z)(e,t);var i=e.prototype;return i.createEmitZone=function(){this.emitZone=new Phaser.Geom.Rectangle},i.createEmitters=function(){var t=1/this.scene.world.getPixelRatio();this.emitter=this.createEmitter({on:!1,frame:xt.FX_STAR_YELLOW,tint:[16449272,10471662,16381924,14663817],emitZone:{source:this.emitZone},reserve:3,timeScale:1,frequency:10,maxParticles:300,speedY:{min:-100,max:-350},alpha:{start:.2,end:1},scale:{start:.6*t,end:.1*t},lifespan:{min:5e3,max:1e4}})},i.run=function(t,e,i,n,s){this.stop(),this.reset(),this.emitZone.setSize(n,s),this.emitZone.setPosition(e-n/2,i-s/2),this.emitter.setQuantity(t),this.emitter.start(),this.runTimeScaleAnimation()},i.stop=function(){var t,e,i;null==(t=this.timeScaleTween)||t.stop(),null==(e=this.emitter)||e.killAll(),null==(i=this.emitter)||i.stop()},i.reset=function(){this.createEmitters()},i.runTimeScaleAnimation=function(){this.timeScaleTween?this.timeScaleTween.restart():this.timeScaleTween=this.scene.tweens.add({targets:[this.emitter],duration:2e3,ease:Phaser.Math.Easing.Quartic.In,props:{frequency:{from:1,to:200},timeScale:{from:20,to:1}}})},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),At=i(634),Tt=i(656),Zt=i(665),St=f.Z.EFFECTS,wt=St.KEY,Pt=St.FRAME,Ct=function(t){function e(e){var i;return(i=t.call(this,e,wt,Pt.FX_STAR_YELLOW)||this).emitZone=void 0,i.emitter=void 0,i.scene=e,i.createEmitZone(),i.scene.add.existing((0,S.Z)(i)),i}(0,n.Z)(e,t);var i=e.prototype;return i.createEmitZone=function(){this.emitZone=new Phaser.Geom.Rectangle},i.createEmitters=function(){var t=1/this.scene.world.getPixelRatio();this.emitter=this.createEmitter({on:!1,frame:Pt.FX_STAR_WHITE,emitZone:{source:this.emitZone,type:"random"},timeScale:1,frequency:80,maxParticles:15,scale:{start:0,end:1*t,ease:Phaser.Math.Easing.Bounce.Out},lifespan:400})},i.run=function(t,e,i,n,s){this.stop(),this.reset(),this.emitZone.setSize(n,s),this.emitZone.setPosition(e-n/2,i-s/2),this.emitter.setQuantity(t),this.emitter.start()},i.explode=function(t,e,i,n,s){this.stop(),this.reset(),this.emitZone.setSize(n,s),this.emitZone.setPosition(-n/2,-s/2),this.emitter.explode(t,e,i)},i.stop=function(){var t,e;null==(t=this.emitter)||t.killAll(),null==(e=this.emitter)||e.stop()},i.reset=function(){this.createEmitters()},e}(Phaser.GameObjects.Particles.ParticleEmitterManager),Ft=f.Z.EFFECTS,kt=Ft.KEY,bt=Ft.FRAME,Ot=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation1=void 0,this.animation2=void 0,this.run=function(){var t=new T({targets:[e.scene.source],delay:250,duration:600,ease:"Back.easeInOut",props:{scale:1,y:{from:500,to:200}}});null==t||t.play(),t.next(e.runStarTwinkle),e.animation1=t},this.stop=function(){var t;e.animation1.stop(),null==(t=e.animation2)||t.stop(),e.scene.alignObjects()},this.runStarTwinkle=function(){var t=new Tt.Z(e.scene),i=e.scene.source,n=i.x,s=i.y,a=i.displayWidth,o=i.displayHeight;t.run(1,n,s,a,o),e.animation2=t},this.scene=t,this.name="SlideToTopAnimation"},_t=function(t){var e=this;this.scene=void 0,this.name=void 0,this.confetti1=void 0,this.confetti2=void 0,this.run=function(){var t=e.scene,i=new V(t,{speedX:{min:-20,max:100},rotate:{start:-1080,end:0}}),n=new V(t,{speedX:{min:20,max:-100},rotate:{start:0,end:1080}}),s=t.gameZone.width;i.run(1,0,0),n.run(1,s,0),e.confetti1=i,e.confetti2=n},this.stop=function(){var t,i,n,s;null==(t=e.confetti1)||t.stop(),null==(i=e.confetti2)||i.stop(),null==(n=e.confetti1)||n.kill(),null==(s=e.confetti2)||s.kill()},this.scene=t,this.name="ConfettiSmallAnimation"},It=function(t){var e=this;this.scene=void 0,this.name=void 0,this.confetti=void 0,this.run=function(){var t=e.scene,i=new W(t),n=t.target,s=n.x,a=n.y;i.run(2,s,a),e.confetti=i},this.stop=function(){e.confetti.stop(),e.confetti.kill()},this.scene=t,this.name="ConfettiHexagonAnimation"},Nt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene;e.animation||(e.animation=new ft.Z(t));var i=t.source,n=i.x,s=i.y;e.animation.explode(10,n,s)},this.stop=function(){e.animation.pause(),e.animation.kill()},this.scene=t,this.name="StarExplosive"},Rt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new nt(t);i.explode(20,t.source.x,t.source.y),e.animation=i},this.stop=function(){e.animation.pause(),e.animation.kill()},this.scene=t,this.name="DiamondsExplosive"},Bt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new pt.Z(t);i.explode(100,t.source.x,t.source.y,180),e.animation=i},this.stop=function(){e.animation.pause(),e.animation.kill()},this.scene=t,this.name="SparksExplosive"},Mt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new Tt.Z(t),n=t.source,s=n.x,a=n.y,o=n.displayWidth,r=n.displayHeight;i.run(1,s,a,o,r),e.animation=i},this.stop=function(){e.animation.pause(),e.animation.kill()},this.scene=t,this.name="SparksIdle"},Lt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new Zt.Z(t),n=t.source,s=n.x,a=n.y,o=n.displayWidth,r=n.displayHeight;i.run(1,s,a,o,r),e.animation=i},this.stop=function(){e.animation.pause(),e.animation.kill()},this.scene=t,this.name="StarTwinkleUp"},Yt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new Ct(t),n=t.source,s=n.x,a=n.y,o=n.displayWidth,r=n.displayHeight;i.run(1,s,a,o,r),e.animation=i},this.stop=function(){e.animation.pause(),e.animation.kill()},this.scene=t,this.name="StarWhiteTwinkle"},Xt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new Y.Z(t),n=t.source,s=n.x,a=n.y,o=n.displayWidth,r=n.displayHeight;i.run(1,s,a,o,r),e.animation=i},this.stop=function(){e.animation.pause(),e.animation.kill()},this.scene=t,this.name="CometTwinkle"},Kt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new F(t);Phaser.Display.Align.In.Center(t.source,t.gameZone),Phaser.Display.Align.In.Center(i,t.source),i.run(),e.animation=i},this.stop=function(){e.animation.kill(),e.scene.alignObjects()},this.scene=t,this.name="BigStarExplosive"},jt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new yt(t),n=t.gameZone,s=n.width,a=n.height;i.run(1,s/2,a,s,a),e.animation=i},this.stop=function(){e.animation.stop(),e.animation.kill()},this.scene=t,this.name="StarsFlyUp"},Gt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=new E.Z({targets:[t.source]});i.play(),e.animation=i},this.stop=function(){e.animation.stop(),e.scene.alignObjects()},this.scene=t,this.name="ShakeHorizontal"},Wt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation1=void 0,this.animation2=void 0,this.animation3=void 0,this.run=function(){var t=e.scene,i=t.target,n=i.x,s=i.y,a=t.source,o={x:a.x,y:a.y},r={x:n,y:s};t.objects.setVisible(!1);var c=new Y.Z(t),h=new Z.Z({targets:[t.objects.getChildren()[0]],delay:t.tweens.stagger(80,{}),duration:Phaser.Math.RND.between(1e3,2500),curve:[[o.x,o.y],[o.x-Phaser.Math.RND.between(-250,250),o.y-Phaser.Math.RND.between(-40,40)],[r.x,r.y]],onComplete:function(){t.objects.setVisible(!1),e.run(),e.runSparksExplosive()},onCurveUpdate:function(t){var e=t.x+Phaser.Math.RND.between(-16,16),i=t.y+Phaser.Math.RND.between(-16,16);c.explode(1,e,i)}});h.play(),e.animation1=c,e.animation2=h},this.stop=function(){var t,i,n,s,a;null==(t=e.animation1)||t.stop(),null==(i=e.animation1)||i.kill(),null==(n=e.animation2)||n.stop(),null==(s=e.animation3)||s.pause(),null==(a=e.animation3)||a.kill()},this.runSparksExplosive=function(){var t=e.scene,i=new pt.Z(t);i.explode(100,t.target.x,t.target.y,180),e.animation3=i},this.scene=t,this.name="CurveAnimation"},zt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=e.scene,i=t.make.image({key:kt,frame:bt.FX_CIRCLE_LIGHT});i.setWorldSize(75.5,75),i.setPosition(t.source.x,t.source.y);var n=1/t.world.getPixelRatio(),s=new y({targets:[i],duration:800,ease:Phaser.Math.Easing.Cubic.Out,props:{scale:2*n,alpha:0},onStop:function(){i.kill()}});s.play(),e.animation=s},this.stop=function(){e.animation.stop()},this.scene=t,this.name="StarTouchAnimation"},Dt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){if(!e.animation){var t=e.scene.target,i=t.x,n=t.y;e.animation=new M(e.scene,i,n)}var s=e.scene.source,a=s.x,o=s.y;e.animation.explode(15,a,o)},this.stop=function(){},this.scene=t,this.name="CoinsExplosive"},Ut=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){e.animation||(e.animation=new L.Z(e.scene));var t=e.scene.source,i=t.x,n=t.y,s=e.scene.target,a=s.x,o=s.y;e.animation.explode(15,i,n,a,o)},this.stop=function(){},this.scene=t,this.name="CoinsExplosive2"},Ht=function(t){var e=this;this.scene=void 0,this.name=void 0,this.timer=void 0,this.animation=void 0,this.run=function(){var t;e.animation=new ut(e.scene);var i=Phaser.Math.Between(0,375),n=Phaser.Math.Between(0,620);e.animation.explode(100,i,n,90),null==(t=e.timer)||t.remove(),e.timer=e.scene.time.addEvent({delay:Phaser.Math.Between(100,800),callback:e.run})},this.stop=function(){var t;null==(t=e.timer)||t.remove()},this.scene=t,this.name="PaperFireworkExplosive"},Vt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t;null==(t=e.animation)||t.destroy(),e.animation=new $(e.scene,{speedY:{min:-12,max:-200},rotate:{start:0,end:1080},angle:{min:320,max:355}});var i=e.scene.source,n=i.x,s=i.y;e.animation.explode(100,n,s)},this.stop=function(){},this.scene=t,this.name="ConfettiSmallFly"},Qt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){e.animation||(e.animation=new dt.Z(e.scene)),e.animation.run(0,e.scene.gameZone.height,375,200)},this.stop=function(){},this.scene=t,this.name="PaperFireworksCelebration"},qt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){e.animation||(e.animation=new vt.Z(e.scene));var t=e.scene.source,i=t.x,n=t.y;e.animation.explode(12,i,n)},this.stop=function(){},this.scene=t,this.name="StarsExplosiveSmall"},Jt=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){e.animation||(e.animation=new ct(e.scene));var t=e.scene.target,i=t.x,n=t.y,s=t.displayWidth,a=t.displayHeight;e.animation.run(1,i,n,2*s,a)},this.stop=function(){e.animation.stop()},this.scene=t,this.name="FallingStarSparkle"},$t=function(t){var e=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){e.animation||(e.animation=new At.Z(e.scene));var t=e.scene.target,i=t.x,n=t.y,s=t.displayWidth,a=t.displayHeight;e.animation.run(1,i,n,2*s,a)},this.stop=function(){e.animation.stop()},this.scene=t,this.name="StarSparkle"},te=i(34),ee=function(t){function e(e,i,n,s){var a;return(a=t.call(this,e,i.key,i.button,n,s)||this).payload=void 0,a.payload=i,a.createIcon(),a.createText(),a}(0,n.Z)(e,t);var i=e.prototype;return i.createIcon=function(){var t=this.scene.add.image(0,0,this.payload.key,this.payload.icon);t.setWorldSize(43,43),this.add(t),Phaser.Display.Align.In.LeftCenter(t,this,-25)},i.createText=function(){var t=this.payload.text,e=this.scene.make.bitmapText({font:te.Z.PRIMARY.KEY,size:this.scene.fontSize(24),text:t,origin:{x:.2,y:.5}});this.add(e)},e}(i(58).Z),ie=i(652),ne=i(491),se=f.Z.DEFAULT_8_BIT,ae=se.KEY,oe=se.FRAME,re=function(t){function e(e,i){var n,s=e.textures.exists(i);return(n=t.call(this,e,{key:s?i:ae,frame:s?"":oe.BLANK,width:160,height:120})||this).animationNameStr=void 0,n.animationName=void 0,n.updateSize(),n.createText(s?ae:i||""),n.scene.children.bringToTop((0,S.Z)(n)),!s&&n.loadImage(i),n}(0,n.Z)(e,t);var i=e.prototype;return i.createText=function(t){this.animationNameStr=t;var e=this.scene.make.bitmapText({font:te.Z.PRIMARY.KEY,size:this.scene.fontSize(14),text:this.normalizeText(t),origin:{x:.5,y:0}});e.setPosition(0,this.button.height/2),e.setCenterAlign(),e.setMaxWidth(this.button.width,95),this.animationName=e,this.add([e])},i.normalizeText=function(t){return t.replace(/\.?([A-Z]+)/g,"_$1").replace(/^_/,"")},i.loadImage=function(t){var e=this,i=this.scene.load.image(t,"./assets/animation-thumbnails/"+t+".png");this.scene.load.start(),i.on("filecomplete",(function(i){if(i===t){var n=e.button,s=n.width,a=n.height;e.createButton(i,"",s-6,a-6),e.bringToTop(e.animationName)}}))},i.getName=function(){return this.normalizeText(this.animationNameStr)},e}(ne.Z),ce=function(t){function e(e){var i,n=e.gameZone,s=n.width,a=n.height,o={listConfigs:[],width:s,height:a};(i=t.call(this,e,o)||this).scene=void 0,i.nextItemPos=void 0,i.animationButtons=[],i.openAnimationScrollerButton=void 0,i.currentAnimation=void 0,i.currentAnimationText=void 0,i.background=void 0,i.openScroller=function(){var t;null==(t=i.currentAnimation)||t.stop(),i.revive(),i.currentAnimationText.kill(),i.openAnimationScrollerButton.kill(),i.background.revive()},i.closeScroller=function(){i.background.kill(),i.currentAnimationText.revive(),i.openAnimationScrollerButton.revive(),i.kill()},i.runCurrentAnim=function(){i.currentAnimation&&(i.currentAnimation.stop(),i.currentAnimation.run())},i.scene=e;return i.nextItemPos={x:0,y:-a/2,offsetX:-s/4-5},i.setPosition(187.5,333.5),i.setEnable(!0),i.createBackground(s,a),i.createOpenButton(),i.createCurrentAnimationText(),i.closeScroller(),i}(0,n.Z)(e,t);var i=e.prototype;return i.createBackground=function(t,e){this.background=this.scene.make.image({key:f.Z.DEFAULT_8_BIT.KEY,frame:f.Z.DEFAULT_8_BIT.FRAME.BLANK}),this.background.setOrigin(0,0),this.background.setTint(0),this.background.setWorldSize(t,e),this.scene.children.bringToTop(this),this.background.kill()},i.createOpenButton=function(){var t=f.Z.DEFAULT_8_BIT,e=t.KEY,i=t.FRAME,n=new ee(this.scene,{key:e,button:i.BUTTON_GREEN,icon:i.BLANK,text:"     Menu"},143.5,57);n.setPosition(0,50),n.kill(),this.openAnimationScrollerButton=n,this.openAnimationScrollerButton.onClick=this.openScroller},i.createCurrentAnimationText=function(){this.currentAnimationText=this.scene.make.bitmapText({font:te.Z.PRIMARY.KEY,size:this.scene.fontSize(18),text:"",origin:{x:.5,y:0}},!0),this.currentAnimationText.setMaxWidth(300,95),this.currentAnimationText.setCenterAlign(),Phaser.Display.Align.In.TopCenter(this.currentAnimationText,this.scene.gameZone,0,-50)},i.addButton=function(e){var i=this,n=this.nextItemPos,s=n.x,a=n.y,o=n.offsetX,r=new re(this.scene,e.name);r.setPosition(s+o,a+r.height/2+34),this.nextItemPos.offsetX=-o,o>0&&(this.nextItemPos.y+=r.height+34),this.animationButtons.push(r),r.onClick=function(){var t;i.closeScroller(),null==(t=i.currentAnimation)||t.stop(),e.run(),i.currentAnimation=e,i.currentAnimationText.setText(r.getName())},t.prototype.addItem.call(this,r)},e}(ie.Z),he=ce,me=f.Z.EFFECTS,le=me.KEY,ue=me.FRAME,de=function(t){function e(){for(var e,i,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(i=t.call.apply(t,a()(e=[this]).call(e,s))||this).target=void 0,i.source=void 0,i.objects=void 0,i.scroller=void 0,i}(0,n.Z)(e,t);var i=e.prototype;return i.preload=function(){this.textures.removeKey(f.Z.EFFECTS.KEY),this.load.multiatlas({key:f.Z.ANIMATION_SCENE.KEY,path:f.Z.ANIMATION_SCENE.PATH,atlasURL:f.Z.ANIMATION_SCENE.JSON})},i.create=function(){t.prototype.create.call(this),this.createBackground(le,ue.BLANK,0),this.createTargetObject(),this.createSourceObject(),this.createMultiObjects(),this.createSpriteAnimations(),this.createAnimationScroller(),this.alignObjects();var e=Phaser.Input.Events.POINTER_DOWN;this.gameZone.setInteractive().on(e,this.scroller.runCurrentAnim)},i.createAnimationScroller=function(){var t=new he(this);t.addButton(new Kt(this)),t.addButton(new Dt(this)),t.addButton(new Ut(this)),t.addButton(new Xt(this)),t.addButton(new It(this)),t.addButton(new _t(this)),t.addButton(new Vt(this)),t.addButton(new Wt(this)),t.addButton(new Rt(this)),t.addButton(new Jt(this)),t.addButton(new Ht(this)),t.addButton(new Qt(this)),t.addButton(new Gt(this)),t.addButton(new Ot(this)),t.addButton(new Bt(this)),t.addButton(new Mt(this)),t.addButton(new Nt(this)),t.addButton(new qt(this)),t.addButton(new jt(this)),t.addButton(new $t(this)),t.addButton(new zt(this)),t.addButton(new Lt(this)),t.addButton(new Yt(this)),this.scroller=t},i.createTargetObject=function(){this.target=this.make.image({key:le,frame:ue.BLANK}),this.target.setTint(5162135),this.target.setWorldSize(50,50)},i.createSourceObject=function(){this.source=this.make.image({key:le,frame:ue.BLANK}),this.source.setTint(4824278),this.source.setWorldSize(50,50)},i.createMultiObjects=function(){this.objects=this.make.group({repeat:10,key:le,frame:ue.BLANK,classType:Phaser.GameObjects.Image,createMultipleCallback:function(t){t.forEach((function(t){t.setSize(80,80)}))}}),this.objects.setTint(12433838),this.objects.setVisible(!1)},i.createSpriteAnimations=function(){var t=new p(this.anims);this.anims.add(o.Z.CONFETTI_HEXAGON.KEY,t)},i.alignObjects=function(){Phaser.Display.Align.In.TopCenter(this.target,this.gameZone,0,-100),Phaser.Display.Align.In.BottomCenter(this.source,this.gameZone,0,-150)},e}(v.Z);var pe=de}}]);