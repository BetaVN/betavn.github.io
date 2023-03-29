"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[389],{605:function(e,t,n){n.r(t),n.d(t,{default:function(){return ut}});var a=n(7),i=n(0),s=n(4),r=n.n(s),o=n(56),c=n.n(o),h=n(639),l=n(729),d=n(646),u=n(637),g=n(660),f=n(727),p=n(721),b=n(651),v=n(723),m=n(730),y=n(719),k=n(720),A=n(711),R=n(707),S=n(728),E=n(633),T=n(3),I=n(2),C=n.n(I),w=n(653),P=n(644),L=n(717),x=n(668),D=n(709),N=n(652),Z=n(708),B=n(649),F=n(635),_=n(39),O=n.n(_),H=n(51),M=n.n(H),U=n(63),G=n.n(U),z=n(180),W=n.n(z),K=n(27),Y=n.n(K),V=n(196),j=n.n(V),q=n(26),Q=n.n(q),J=n(16),X=n.n(J),$=n(28),ee=n.n($),te=n(29),ne=n.n(te),ae=n(715),ie=n(618),se=n(706),re=n(710),oe=n(669),ce=function(e){function t(t){var n;return(n=e.call(this,t)||this).message=void 0,n.scene=t,n.createText(),n.setWorldSize(80,36.5),n}(0,i.Z)(t,e);var n=t.prototype;return n.createText=function(){this.message=this.scene.make.text({text:"WIN",style:{fontFamily:B.Z.FONT_FAMILY,fontSize:"25px",color:"#ffffff",stroke:"#000000",strokeThickness:5,fontStyle:"bold",padding:{left:10,right:10}}}),this.message.setHighQuality(),this.message.setShadow(0,10,"#000000",0,!0),this.add(this.message),Phaser.Display.Align.In.Center(this.message,this)},n.updateResult=function(e){var t=e?"WIN":"LOSE";this.message.setText(t)},t}(Phaser.GameObjects.Container),he=d.Z.DEFAULT_8_BIT,le=he.KEY,de=he.FRAME,ue=function(e){function t(t,n){var a;return(a=e.call(this,t)||this).button=void 0,a.matchHistoryResult=void 0,a.avatar=void 0,a.rankIcon=void 0,a.rankText=void 0,a.username=void 0,a.score=void 0,a.scoreText=void 0,a.background=void 0,a.showPopUp=void 0,a.showItems=void 0,a.payload=void 0,a.handleChallengeFriend=(0,T.Z)(C().mark((function e(){var t,n,i;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.payload.playerId,n=a.scene.battle,e.next=4,n.createBattle(t);case 4:i=a.scene.game.globalScene,console.log(n.getStatus()),n.getStatus()===F.Z.STARTED?a.scene.screen.close(u.o4.LEADER_BOARD_SCREEN):i.recalculateBackgroundMask();case 7:case"end":return e.stop()}}),e)}))),a.createBackground(),a.updateSize(),a.createRank(),a.createAvatar(),a.createUsername(),a.createScore(),a.createButton(),a.createMatchHistoryResult(),n&&a.updateInfo(n),a.scene.add.existing((0,w.Z)(a)),a}(0,i.Z)(t,e);var n=t.prototype;return n.updateInfo=function(e){this.payload=(0,a.Z)({scoreRight:!0,isHighlight:!1,isRevenge:e.isRevenge||!1,isHistory:e.isHistory||!1,isInAnimation:e.isInAnimation||!1},e),this.updateBackground(),this.updateAvatar(),this.updateRank(),this.updateButton(),this.updateUsername(),this.updateScore(),this.updateMatchHistoryResult()},n.updatePosition=function(){this.payload.scoreRight?Phaser.Display.Align.To.RightCenter(this.score,this.avatar,120):Phaser.Display.Align.To.RightCenter(this.score,this.avatar,80)},n.createBackground=function(){this.background=this.scene.make.image({key:le,frame:de.LEADERBOARD_BG_DARK}),this.add(this.background),this.updateBackground()},n.updateBackground=function(){var e=this.payload||{},t=e.isHighlight,n=void 0!==t&&t,a=e.isHistory,i=e.isRevenge;a?this.background.setFrame(i?de.LEADERBOARD_BG_LOSE:de.LEADERBOARD_BG_WIN):i?this.background.setFrame(de.LEADERBOARD_BG_LOSE):n?(this.background.setFrame(de.LEADERBOARD_BG_LIGHT),this.background.setWorldSize(313.5,41)):(this.background.setFrame(de.LEADERBOARD_BG_DARK),this.background.setWorldSize(314.5,42))},n.updateSize=function(){var e=this.background,t=e.width,n=e.height;this.setSize(t,n)},n.createAvatar=function(){this.avatar=new oe.Z(this.scene,{size:42,loadDelay:300}),this.add(this.avatar),Phaser.Display.Align.In.LeftCenter(this.avatar,this.rankIcon,-40)},n.updateAvatar=function(){var e=this.payload,t=e.playerId,n=e.photo;this.avatar.loadPhoto(t,n)},n.createRank=function(){this.createRankIcon(),this.createRankText()},n.updateRank=function(){var e=this.payload,t=e.isHistory,n=e.isRevenge;if(t||n)return this.rankIcon.kill(),void this.rankText.kill();var a=this.payload.rank;this.rankIcon.revive(),this.rankText.revive(),this.updateRankIcon(a),this.updateRankText(a)},n.updateButton=function(){var e=this.payload,t=e.isHighlight,n=e.isHistory,a=e.isInAnimation;e.isRevenge&&this.button.setName("Revenge"),n||t?this.button.kill():(this.button.revive(),this.button.setDisabled(a),this.button.alpha=1)},n.enableButtonAfterAnimation=function(){this.button.visible&&this.button.setDisabled(!1)},n.updateMatchHistoryResult=function(){var e=this.payload,t=e.isHistory,n=e.isRevenge;t?(this.matchHistoryResult.revive(),this.matchHistoryResult.updateResult(!n)):this.matchHistoryResult.kill()},n.getRankIconFrame=function(e){var t=null;switch(e){case 1:t=de.LEADERBOARD_RANK_GOLD;break;case 2:t=de.LEADERBOARD_RANK_SILVER;break;case 3:t=de.LEADERBOARD_RANK_COPPER}return t},n.createRankIcon=function(){this.rankIcon=this.scene.make.image({key:le}),this.updateRankIcon(1),this.kill(),this.add(this.rankIcon),Phaser.Display.Align.In.LeftCenter(this.rankIcon,this)},n.updateRankIcon=function(e){var t=this.getRankIconFrame(e);t?(this.rankIcon.revive(),this.rankIcon.setFrame(t),t==de.LEADERBOARD_RANK_GOLD&&this.rankIcon.setWorldSize(39,34.5),t==de.LEADERBOARD_RANK_SILVER&&this.rankIcon.setWorldSize(32.5,32),t==de.LEADERBOARD_RANK_COPPER&&this.rankIcon.setWorldSize(27,35.5)):this.rankIcon.kill()},n.createRankText=function(){this.rankText=this.scene.make.text({text:"0",style:{fontFamily:B.Z.FONT_FAMILY,fontSize:"16px",color:"#ffffff",stroke:"#000000",strokeThickness:3}}),this.rankText.setHighQuality(),this.rankText.kill(),this.add(this.rankText),Phaser.Display.Align.In.Center(this.rankText,this.rankIcon,0,-1)},n.updateRankText=function(e){var t;this.rankText.kill(),e>3&&this.rankText.revive(),null==(t=this.rankText)||t.setText(""+e)},n.getShortName=function(e){var t=e.substring(0,7);return t.split(" ")[0]||t},n.createUsername=function(){this.username=this.scene.make.text({text:"Player",style:{fontFamily:B.Z.SYSTEM_FAMILY_FONT,fontSize:"16px",fontStyle:"bold",color:"#ffffff"}}),this.username.setHighQuality(),Phaser.Display.Align.In.LeftCenter(this.username,this.avatar,-53,-8),this.add(this.username)},n.updateUsername=function(){this.payload.isHistory?Phaser.Display.Align.In.LeftCenter(this.username,this.avatar,-48,0):Phaser.Display.Align.In.LeftCenter(this.username,this.avatar,-53,-8);var e=this.payload.name;this.username.setText(this.getShortName(e))},n.createScore=function(){this.score=this.scene.add.container(),this.scoreText=this.scene.make.text({text:"Level 99999",style:{fontFamily:B.Z.FONT_FAMILY,fontSize:"14px",color:"#ffffff",stroke:"#000000",strokeThickness:2}}),this.scoreText.setHighQuality(),this.score.add(this.scoreText),this.add(this.score),Phaser.Display.Align.In.BottomLeft(this.score,this.username,0,-1)},n.updateScore=function(){if(this.payload.isHistory)this.scoreText.kill();else{this.scoreText.revive();var e=(this.payload||{}).score,t=void 0===e?"0":e;this.scoreText.setText("Level "+t)}},n.createButton=function(){this.button=new x.Z(this.scene,le,de.LEADERBOARD_BUTTON_GREEN,80,36.5),this.button.setName("ChallengeFriend");var e=this.scene.make.image({key:le,frame:de.ICON_BATTLE});e.setWorldSize(23,21),Phaser.Display.Align.In.Center(e,this.button,0,-2),this.button.add(e),Phaser.Display.Align.In.RightCenter(this.button,this,-10),this.add(this.button),this.button.onClick=this.handleChallengeFriend},n.createMatchHistoryResult=function(){this.matchHistoryResult=new ce(this.scene),this.add(this.matchHistoryResult),Phaser.Display.Align.In.RightCenter(this.matchHistoryResult,this,25)},n.runShowPopUpAnimation=function(e,t){this.scene.tweens.killTweensOf(this),this.showPopUp=new re.Z({targets:[this],delay:e,duration:t,props:{y:{start:this.y+70,to:this.y}}}),this.showPopUp.play()},n.runShowItemAnimation=function(e,t){var n=this,a=this.getAll();this.scene.tweens.killTweensOf(a),this.showItems=new se.Z({targets:a,duration:t,delay:this.scene.tweens.stagger(50,{start:e+50}),props:{scale:{duration:1e3,getStart:function(e){return.8*e.scale},getEnd:function(e){return e.scale},ease:Phaser.Math.Easing.Elastic.Out,easeParams:[.1,.45]}},onStart:function(){n.showItems.baseScales=X()(a).call(a,(function(e){return e.scale}))},onStop:function(){a.forEach((function(e,t){e.scale=n.showItems.baseScales[t]}))}}),this.showItems.play()},n.runShowUpAnimation=function(e,t){void 0===e&&(e=0),void 0===t&&(t=300);var n=100*e;this.runShowPopUpAnimation(n,t),this.runShowItemAnimation(n,t)},t}(Phaser.GameObjects.Container);function ge(e,t){var n="undefined"!==typeof M()&&G()(e)||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){var n;if(!e)return;if("string"===typeof e)return fe(e,t);var a=Q()(n=Object.prototype.toString.call(e)).call(n,8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return O()(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return fe(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var pe=GameCore.Configs.LeadersBoard.Limit,be=GameCore.Configs.Battle.RankingDevTest,ve=function(e){function t(t){var n;(n=e.call(this,t)||this).scene=void 0,n.currentPlayerId=void 0,n.scroller=void 0,n.scene=t;var a=n.scene.player;return n.currentPlayerId=a.getPlayerId(),n.createReuseScroller(),n.scene.add.existing((0,w.Z)(n)),n}(0,i.Z)(t,e);var n=t.prototype;return n.createReuseScroller=function(){this.scroller=new ae.Z(this.scene,{classType:ue,listConfigs:[],width:320,height:210,padding:10,marginTop:10,marginBottom:10}),this.scroller.createMask(),this.scroller.setPosition(0,10),this.add(this.scroller)},n.updateData=function(e){var t=W()(e)||[];if(t.length<1){var n=this.scene.screen.get(u.o4.BATTLE_SCREEN);return n.isSwitchable=!0,void n.board.showMessage(!0,this.scene.lang.Text.NO_MATCHES_AVAILABLE)}var a=c()(t).call(t,(function(e,t){return+t.score-+e.score})),i=this.getLeaderDataForScroller(a);this.scroller.updateConfig(i),this.showLeaders()},n.updateBattleRankingBoard=function(e){var t=this,n=W()(e)||[];if(console.log("Ranking data",n),n.length<1){var a=this.scene.screen.get(u.o4.BATTLE_SCREEN);return a.isSwitchable=!0,void a.board.showMessage(!0,this.scene.lang.Text.NO_MATCHES_AVAILABLE)}var i=Y()(n).call(n,(function(e){return null!==e.name})),s=c()(i).call(i,(function(e,t){return+e.rank-+t.rank})),r=j()(s).call(s,(function(e){return e.playerId===t.currentPlayerId}));if(-1!==r){var o=r,h=s.length-r+1,l=[];be?(o>=2&&h>=3&&(l=Q()(s).call(s,r-2,r+4)),o<2&&(l=s.length>6?Q()(s).call(s,0,6):s),h<3&&(l=s.length>h+3?Q()(s).call(s,-(h+3)):s)):(o>=9&&h>=40&&(l=Q()(s).call(s,r-9,r+41)),o<9&&(l=s.length>50?Q()(s).call(s,0,50):s),h<40&&(l=s.length>h+10?Q()(s).call(s,-(h+10)):s));var d=this.getLeaderDataForScroller(l);d.forEach((function(e,t){e.rank=t+1})),this.scroller.updateConfig(d),this.showLeaders()}else this.updateData(e)},n.getLeaderDataForScroller=function(e){for(var t,n=[],a=ge(e);!(t=a()).done;){var i=t.value;if(n.length>=pe)break;var s=i.playerId,r=i.photo,o=i.score,c=i.name,h=i.rank;if(s&&c){var l=this.currentPlayerId===s,d={playerId:s,photo:r||ie.Z.AVATAR.FILE,name:c,rank:h,score:o,scoreRight:!1,isRevenge:!1,isHighlight:l,isInAnimation:!0};n.push(d)}}return n},n.removeLeaders=function(){this.scroller.updateConfig([])},n.getLeaders=function(){return this.scroller.getChildren()},n.showLeaders=function(){var e=this,t=this.getLeaders();if(t.length<1){var n=this.scene.screen.get(u.o4.BATTLE_SCREEN);return n.isSwitchable=!0,void n.board.showMessage(!0,this.scene.lang.Text.NO_MATCHES_AVAILABLE)}for(var a=Math.min(t.length,6),i=0;i<a;i++){var s=t[i];s&&(s.setVisible(!0),s.runShowUpAnimation(i,300))}var r=300+100*a+250;this.scene.time.delayedCall(r,(function(){e.scene.screen.get(u.o4.BATTLE_SCREEN).isSwitchable=!0,t.forEach((function(e){e.enableButtonAfterAnimation()}));for(var n=e.scroller.getConfig(),a=[],i=0;i<n.length;i++){var s=n[i],r={playerId:s.playerId,photo:s.photo,name:s.name,rank:s.rank,score:s.score,scoreRight:s.scoreRight,isRevenge:s.isRevenge,isHighlight:s.isHighlight,isHistory:s.isHistory,isInAnimation:!1};a.push(r)}e.scroller.updateConfig(a),e.scroller.setEnable(!0)}))},n.updateRevengeMatches=function(){var e=(0,T.Z)(C().mark((function e(){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLostOpponentIds();case 2:t=e.sent,this.requestLostOpponentProfiles(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.getLostOpponentIds=function(){var e=(0,T.Z)(C().mark((function e(){var t,n,a,i,s;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.scene.battle.getMatchHistory();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(n=this.currentPlayerId,!((a=Y()(t).call(t,(function(e){var t=e.whitePlayerId===n||e.blackPlayerId===n,a=e.whitePlayerId===n?1===e.blackPlayerLevel:1===e.whitePlayerLevel;return t&&a}))).length<1)){e.next=9;break}return e.abrupt("return",[]);case 9:if(this.recentMatchesTimeSort(a),i=X()(a).call(a,(function(e){return e.whitePlayerId===n?e.blackPlayerId:e.whitePlayerId})),!((s=Y()(i).call(i,(function(e,t,n){return ee()(n).call(n,e)===t}))).length>15)){e.next=14;break}return e.abrupt("return",Q()(s).call(s,0,15));case 14:return e.abrupt("return",s);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.requestLostOpponentProfiles=function(){var e=(0,T.Z)(C().mark((function e(t){var n,a,i,s,r,o,c,h,l,d,u,g,f;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.scene.game.profile,a=GameCore.Configs.Battle.UseMock,0!==t.length){e.next=6;break}return this.scroller.updateConfig([]),this.showLeaders(),e.abrupt("return");case 6:return e.next=8,n.requestProfiles(t);case 8:i=n.getProfiles(),s=[],r=ge(t);case 11:if((o=r()).done){e.next=28;break}if(c=o.value,!a){e.next=17;break}return h={playerId:c,photo:"./assets/images/others/avatar.png",name:"MPlayer",rank:ne()(c)-1e5+1,score:Math.floor(1e5/ne()(c)).toString(),scoreRight:!1,isRevenge:!0,isHighlight:!1,isInAnimation:!0},s.push(h),e.abrupt("continue",26);case 17:if(!(s.length>=pe)){e.next=19;break}return e.abrupt("break",28);case 19:if(i[c]){e.next=21;break}return e.abrupt("continue",26);case 21:if(l=i[c],d=l.name,u=l.photo,g=l.score,d){e.next=24;break}return e.abrupt("continue",26);case 24:f={playerId:c,photo:u||ie.Z.AVATAR.FILE,name:d,rank:0,score:""+g,scoreRight:!1,isRevenge:!0,isHighlight:!1,isInAnimation:!0},s.push(f);case 26:e.next=11;break;case 28:this.scroller.updateConfig(s),this.showLeaders();case 30:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.updateRecentMatches=function(){var e=(0,T.Z)(C().mark((function e(){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRecentMatches();case 2:t=e.sent,this.getRecentMatchOpponents(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.getRecentMatches=function(){var e=(0,T.Z)(C().mark((function e(){var t,n,a;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.scene.battle.getMatchHistory();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(n=this.currentPlayerId,a=Y()(t).call(t,(function(e){return e.whitePlayerId===n||e.blackPlayerId===n})),this.recentMatchesTimeSort(a),!(a.length>15)){e.next=10;break}return e.abrupt("return",Q()(a).call(a,0,15));case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.getRecentMatchOpponents=function(){var e=(0,T.Z)(C().mark((function e(t){var n,a,i,s,r,o,c,h,l,d,u,g,f,p,b,v,m,y,k=this;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.scene.game.profile,a=GameCore.Configs.Battle.UseMock,0!==t.length){e.next=6;break}return this.scroller.updateConfig([]),this.showLeaders(),e.abrupt("return");case 6:return i=X()(t).call(t,(function(e){return e.whitePlayerId===k.currentPlayerId?e.blackPlayerId:e.whitePlayerId})),s=Y()(i).call(i,(function(e,t,n){return ee()(n).call(n,e)===t})),e.next=10,n.requestProfiles(s);case 10:r=n.getProfiles(),o=[],c=ge(t);case 13:if((h=c()).done){e.next=33;break}if(l=h.value,d=l.whitePlayerId===this.currentPlayerId?l.blackPlayerId:l.whitePlayerId,u=l.whitePlayerId===this.currentPlayerId?l.whitePlayerLevel:l.blackPlayerLevel,g=2===u,0!==u){e.next=20;break}return e.abrupt("continue",31);case 20:if(!a){e.next=24;break}return f={playerId:d,photo:"./assets/images/others/avatar.png",name:"MPlayer",rank:ne()(d)-1e5+1,score:Math.floor(1e5/ne()(d)).toString(),scoreRight:!1,isRevenge:g,isHighlight:!1,isHistory:!0,isInAnimation:!0},o.push(f),e.abrupt("continue",31);case 24:if(r[d]){e.next=26;break}return e.abrupt("continue",31);case 26:if(p=r[d],b=p.name,v=p.photo,m=p.score,b){e.next=29;break}return e.abrupt("continue",31);case 29:y={playerId:d,photo:v||ie.Z.AVATAR.FILE,name:b,rank:0,score:""+m,scoreRight:!1,isRevenge:g,isHighlight:!1,isHistory:!0,isInAnimation:!0},o.push(y);case 31:e.next=13;break;case 33:this.scroller.updateConfig(o),this.showLeaders();case 35:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.recentMatchesTimeSort=function(e){c()(e).call(e,(function(e,t){var n=new Date(e.updatedAt.split("T")[0]),a=new Date(t.updatedAt.split("T")[0]);if(n.getTime()!==a.getTime())return n.getTime()>a.getTime()?-1:1;var i=e.updatedAt.split("T")[1].substring(0,8),s=t.updatedAt.split("T")[1].substring(0,8);return 3600*ne()(i.split(":")[0])+60*ne()(i.split(":")[1])+ne()(i.split(":")[2])>3600*ne()(s.split(":")[0])+60*ne()(s.split(":")[1])+ne()(s.split(":")[2])?-1:1}))},t}(Phaser.GameObjects.Container),me=ve,ye=n(34),ke=n(620),Ae=n(665),Re=d.Z.DEFAULT_8_BIT,Se=Re.KEY,Ee=Re.FRAME,Te=function(e){function t(t,n){var a;return(a=e.call(this,t)||this).isSelected=void 0,a.text=void 0,a.line=void 0,a.hitZone=void 0,a.parentName=void 0,a.setName(n),a.createText(n),a.createLine(),a.createHitZone(),a}(0,i.Z)(t,e);var n=t.prototype;return n.setSelected=function(e){this.isSelected!==e&&(e?(this.line.revive(),this.text.setTint(16777215)):(this.line.kill(),this.text.setTint(6073850)),this.isSelected=e)},n.createText=function(e){var t=this.scene.make.text({text:e,style:{fontFamily:B.Z.FONT_FAMILY,fontSize:"14px",color:"#ffffff",stroke:"#000000",strokeThickness:1}});t.setHighQuality(),t.setShadow(-1,5,"#000000",0,!0),Phaser.Display.Align.In.Center(t,this,0,-2),this.add(t),this.text=t},n.createLine=function(){var e=this.scene.make.image({key:Se,frame:Ee.LEADERBOARD_TAB_LINE});e.setWorldSize(57,3.5),Phaser.Display.Align.In.Center(e,this,0,12),this.add(e),this.line=e},n.createHitZone=function(){this.hitZone=this.scene.add.zone(0,0,60,20),this.hitZone.setSize(60,20),this.add(this.hitZone)},n.logButtonEvent=function(){var e=this.getParentName(),t=this.name;this.scene.analytics.event(ke._.BUTTON_CLICK,{button_name:t,screen_name:e})},n.getParentName=function(){if(this.parentName)return this.parentName;for(var e=this.parentContainer;e;){if(e instanceof GameCore.Screen){var t=e;return this.parentName=t.getScreenName(),this.parentName}e=e.parentContainer}return this.parentName=this.scene.getSceneName(),this.parentName},(0,ye.Z)(t,[{key:"onClick",set:function(e){var t=this;this.hitZone.removeAllListeners(),this.hitZone.setInteractive({useHandCursor:!0}),this.hitZone.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,(function(){t.logButtonEvent(),e(),(0,Ae.ZP)(50)}))}}]),t}(Phaser.GameObjects.Container),Ie=function(e){function t(t){var n;return(n=e.call(this,t)||this).scene=void 0,n.tabFriends=void 0,n.tabRevenge=void 0,n.tabRanking=void 0,n.tabHistory=void 0,n.currentlyActiveTab=void 0,n.scene=t,n.createTabFriends(),n.createTabRevenge(),n.createTabRanking(),n.createTabHistory(),n}(0,i.Z)(t,e);var n=t.prototype;return n.selectTabFriends=function(){this.tabFriends.setSelected(!0),this.tabRevenge.setSelected(!1),this.tabRanking.setSelected(!1),this.tabHistory.setSelected(!1),this.currentlyActiveTab=this.tabFriends},n.selectTabRevenge=function(){this.tabRevenge.setSelected(!0),this.tabFriends.setSelected(!1),this.tabRanking.setSelected(!1),this.tabHistory.setSelected(!1),this.currentlyActiveTab=this.tabRevenge},n.selectTabRanking=function(){this.tabRanking.setSelected(!0),this.tabFriends.setSelected(!1),this.tabRevenge.setSelected(!1),this.tabHistory.setSelected(!1),this.currentlyActiveTab=this.tabRanking},n.selectTabHistory=function(){this.tabHistory.setSelected(!0),this.tabFriends.setSelected(!1),this.tabRevenge.setSelected(!1),this.tabRanking.setSelected(!1),this.currentlyActiveTab=this.tabHistory},n.createTabFriends=function(){this.tabFriends=new Te(this.scene,this.scene.lang.Text.FRIENDS),this.tabFriends.setName("FriendsTab"),Phaser.Display.Align.In.Center(this.tabFriends,this,-110),this.add(this.tabFriends)},n.createTabRevenge=function(){this.tabRevenge=new Te(this.scene,this.scene.lang.Text.REVENGE),this.tabRevenge.setName("RevengeTab"),Phaser.Display.Align.In.Center(this.tabRevenge,this,-37),this.add(this.tabRevenge)},n.createTabRanking=function(){this.tabRanking=new Te(this.scene,this.scene.lang.Text.RANKING),this.tabRanking.setName("RankingTab"),Phaser.Display.Align.In.Center(this.tabRanking,this,38),this.add(this.tabRanking)},n.createTabHistory=function(){this.tabHistory=new Te(this.scene,this.scene.lang.Text.HISTORY),this.tabHistory.setName("HistoryTab"),Phaser.Display.Align.In.Center(this.tabHistory,this,110),this.add(this.tabHistory)},t}(Phaser.GameObjects.Container),Ce=d.Z.DEFAULT_8_BIT,we=Ce.KEY,Pe=Ce.FRAME,Le=d.Z.DEFAULT,xe=Le.KEY,De=Le.FRAME,Ne=function(e){function t(t){var n;return(n=e.call(this,t)||this).scene=void 0,n.background=void 0,n.tabs=void 0,n.leaders=void 0,n.loading=void 0,n.message=void 0,n.challengeFriendsBtn=void 0,n.closeBtn=void 0,n.onClose=void 0,n.messageAnimation=void 0,n.handleOnCloseClick=function(){n.onClose&&n.onClose()},n.handleChallengeFriends=(0,T.Z)(C().mark((function e(){var t,a,i,s,r,o,c,h;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.scene,a=t.player,i=t.battle,s=t.facebook,e.next=4,s.chooseAsync();case 4:if(!1!==(r=e.sent)){e.next=7;break}throw new Error("User canceled");case 7:if(GameCore.Utils.Valid.isString(r)){e.next=9;break}throw new Error("No context found");case 9:return o=a.getPlayerId(),e.next=12,s.getContextPlayers(o);case 12:return c=e.sent,h=P.U.playerId,c.length>0&&(h=c[0].playerId),e.next=17,i.createBattle(h);case 17:i.getStatus()===F.Z.STARTED&&n.scene.screen.close(u.o4.BATTLE_SCREEN),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])}))),n.scene=t,n.createBackground(),n.createLoading(),n.createMessage(),n.createContents(),n.createCloseButton(),n.createAnimation(),n.updateSize(),n.scene.add.existing((0,w.Z)(n)),n}(0,i.Z)(t,e);var n=t.prototype;return n.updateSize=function(){var e=this.background,t=e.width,n=e.height;this.setSize(t,n)},n.showLoading=function(e){this.loading.setVisible(e),this.showMessage(!1)},n.showMessage=function(e,t){this.message.setVisible(e),t&&(this.message.setText(t),this.messageAnimation.play())},n.createBackground=function(){this.background=new Z.Z(this.scene,{x:0,y:0,width:332,height:404.5,topInnerCornerStrokeWidth:1,rightInnerCornerStrokeWidth:3,lightY:-80}),this.add(this.background),this.setSize(this.background.width,this.background.height)},n.recalculateLightPosition=function(){this.background&&this.background.recalculateLightPosition()},n.createLoading=function(){this.loading=new N.Z(this.scene),this.loading.setWorldSize(113,113),this.add(this.loading),Phaser.Display.Align.In.Center(this.loading,this.background)},n.createMessage=function(){this.message=this.scene.make.bitmapText({font:B.Z.PRIMARY.KEY,size:this.scene.fontSize(18),origin:{x:.5,y:.5}}),this.add(this.message),Phaser.Display.Align.In.Center(this.message,this.background)},n.createContents=function(){this.createLeaders(),this.createTitle(),this.createTabs(),this.createChallengeFriendsBtn()},n.createLeaders=function(){this.leaders=new me(this.scene),this.add(this.leaders),Phaser.Display.Align.In.Center(this.leaders,this.background,0,0)},n.createTitle=function(){var e=this.scene.add.container(),t=this.scene.make.image({key:xe,frame:De.RIBBON_BLUE});t.setWorldSize(250,75);var n=this.scene.make.bitmapText({font:B.Z.PRIMARY.KEY,size:this.scene.fontSize(25),text:this.scene.lang.Text.BATTLE});Phaser.Display.Align.In.Center(n,t,0,-10),e.add([t,n]),Phaser.Display.Align.In.Center(e,this.background,0,-175),this.add(e)},n.createTabs=function(){var e=this.scene.add.container(),t=this.scene.make.image({key:we,frame:Pe.LEADERBOARD_TAB_BG});t.setWorldSize(328,29),this.tabs=new Ie(this.scene),e.add([t,this.tabs]),Phaser.Display.Align.In.Center(e,this.background,0,-120),this.add(e)},n.createCloseButton=function(){this.closeBtn=new D.Z(this.scene),Phaser.Display.Align.In.TopRight(this.closeBtn,this,10,10),this.add(this.closeBtn),this.closeBtn.onClick=this.handleOnCloseClick},n.createChallengeFriendsBtn=function(){this.challengeFriendsBtn=new x.Z(this.scene,we,Pe.BUTTON_GREEN,144,57),this.add(this.challengeFriendsBtn);var e=this.scene.make.text({text:this.scene.lang.Text.CHALLENGE_FRIENDS,style:{align:"center",fontFamily:B.Z.FONT_FAMILY,fontSize:"17px",stroke:"#000000",strokeThickness:1,padding:{left:10,right:10}}});e.setHighQuality(),e.setOrigin(.5,.5),e.setShadow(-10,4,"#000000",1),this.challengeFriendsBtn.add(e),Phaser.Display.Align.In.Center(e,this.challengeFriendsBtn,18,-3);var t=this.scene.make.image({key:we,frame:Pe.ICON_BATTLE});t.setOrigin(.5,.5),t.setWorldSize(34.5,31.5),this.challengeFriendsBtn.add(t),Phaser.Display.Align.In.Center(t,this.challengeFriendsBtn,-45,-3),Phaser.Display.Align.In.BottomCenter(this.challengeFriendsBtn,this.background,0,-15),this.challengeFriendsBtn.onClick=this.handleChallengeFriends},n.createAnimation=function(){this.messageAnimation=new L.Z({targets:[this.message],duration:60,repeat:2})},t}(Phaser.GameObjects.Container),Ze=n(718),Be=n(712),Fe=n(713),_e=n(662),Oe=n(659),He=n(714),Me=GameCore.Configs.LeadersBoard,Ue=Me.LeaderboardId,Ge=Me.Limit,ze=GameCore.Configs.Battle.RankingDevTest,We=function(e){function t(t,n,a,i){var s;return(s=e.call(this,t,n,a,i)||this).scene=void 0,s.board=void 0,s.tabId=void 0,s.offset=void 0,s.isRequesting=void 0,s.isSwitchable=void 0,s.showPopupAnimation=void 0,s.fadeOutAnimation=void 0,s.handleSelectFriendTab=function(){s.isRequesting||s.isSwitchable&&(s.isSwitchable=!1,s.selectFriendTab())},s.handleSelectRevengeTab=function(){s.isRequesting||s.isSwitchable&&(s.isSwitchable=!1,s.selectRevengeTab())},s.handleSelectRankingTab=function(){s.isRequesting||s.isSwitchable&&(s.isSwitchable=!1,s.selectRankingTab())},s.handleSelectHistoryTab=function(){s.isRequesting||s.isSwitchable&&(s.isSwitchable=!1,s.selectHistoryTab())},s.handleCloseClick=function(){s.runFadeOutAnimation()},s.scene=t,s.background.setAlpha(.7),s.createBoard(),s.registerEvent(),s}(0,i.Z)(t,e);var n=t.prototype;return n.open=function(){e.prototype.open.call(this),this.scene.requestBackgroundMaskUpdate(u.o4.BATTLE_SCREEN,this.background.alpha),this.runPopupAnimation(),this.isRequesting=!1,this.isSwitchable=!1,this.selectFriendTab(!1)},n.close=function(){e.prototype.close.call(this),this.scene.requestBackgroundMaskUpdate(u.o4.BATTLE_SCREEN,0)},n.recalculateLightPosition=function(){this.board&&this.board.recalculateLightPosition()},n.selectFriendTab=function(e){void 0===e&&(e=!0),this.tabId=Be.n,this.offset=0,this.board.showLoading(!0),this.board.leaders.removeLeaders(),this.board.tabs.selectTabFriends(),this.scene.game.storage.dispatch((0,Fe.Fh)(Ue,Be.n,2*Ge,this.offset)),e&&this.scene.audio.playSound(_e.Z.BUTTON_CLICK)},n.selectRevengeTab=function(){this.tabId=Be.C,this.offset=0,this.board.showLoading(!0),this.board.leaders.removeLeaders(),this.board.tabs.selectTabRevenge(),this.scene.game.storage.dispatch((0,Fe.Fh)(Ue,Be.n,2*Ge,this.offset)),this.scene.audio.playSound(_e.Z.BUTTON_CLICK)},n.selectRankingTab=function(){var e=(0,T.Z)(C().mark((function e(){var t,n,a,i;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.tabId=Be.C,t=ze?3:Ge,n=this.scene.game.player.getPlayerId(),e.next=5,(0,He.GA)(n);case 5:a=e.sent,i=a?a.rank:0,console.log("Player rank",i),this.offset=i>t?i-t:0,this.board.showLoading(!0),this.board.leaders.removeLeaders(),this.board.tabs.selectTabRanking(),this.scene.game.storage.dispatch((0,Fe.Fh)(Ue,Be.C,3*t,this.offset)),this.scene.audio.playSound(_e.Z.BUTTON_CLICK);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.selectHistoryTab=function(){this.tabId=Be.n,this.offset=0,this.board.showLoading(!0),this.board.leaders.removeLeaders(),this.board.tabs.selectTabHistory(),this.scene.game.storage.dispatch((0,Fe.Fh)(Ue,Be.n,2*Ge,this.offset)),this.scene.audio.playSound(_e.Z.BUTTON_CLICK)},n.createBoard=function(){this.board=new Ne(this.scene),this.board.onClose=this.handleCloseClick,Phaser.Display.Align.In.Center(this.board,this,0,-20),this.add(this.board),this.board.tabs.tabFriends.onClick=this.handleSelectFriendTab,this.board.tabs.tabRevenge.onClick=this.handleSelectRevengeTab,this.board.tabs.tabRanking.onClick=this.handleSelectRankingTab,this.board.tabs.tabHistory.onClick=this.handleSelectHistoryTab},n.registerEvent=function(){var e=this,t=[{selector:Ze.j0,callback:function(t){if(e.isRequesting=t,e.board.showLoading(t),!1===t){var n=e.board.tabs.currentlyActiveTab;if("RevengeTab"===n.name)return void e.board.leaders.updateRevengeMatches();if("HistoryTab"===n.name)return void e.board.leaders.updateRecentMatches();var a=e.scene.game.storage.getState(),i=(0,Ze.cc)(a);if("RankingTab"===n.name)return void e.board.leaders.updateBattleRankingBoard(i);e.board.leaders.updateData(i)}}}];this.scene.handleStateChange(t)},n.runPopupAnimation=function(){this.showPopupAnimation||(this.showPopupAnimation=new re.Z({targets:[this.board]})),this.showPopupAnimation.play()},n.runFadeOutAnimation=function(){var e=this;this.visible&&(this.fadeOutAnimation||(this.fadeOutAnimation=new Oe.Z({targets:[this.background],duration:200,props:{alpha:{start:.7,from:.7,to:0}},onActive:function(){e.board.kill()},ease:Phaser.Math.Easing.Cubic.Out,onUpdate:function(t,n){e.scene.requestBackgroundMaskUpdate(u.o4.BATTLE_SCREEN,n.alpha)},onComplete:function(){e.background.setAlpha(.7),e.board.revive(),e.scene.requestBackgroundMaskUpdate(u.o4.BATTLE_SCREEN,0),e.scene.screen.close(u.o4.BATTLE_SCREEN)}})),this.fadeOutAnimation.play())},t}(GameCore.Screen),Ke=We,Ye=n(731),Ve=n(657),je=n(676),qe=n(684),Qe=n(685),Je=n(686),Xe=n(687),$e=n(688),et=n(689),tt=n(690),nt=n(691),at=n(692),it=n(693),st=n(694),rt=n(695),ot=n(645),ct=d.Z.UNITS_SPINES,ht=ot.Z.UNIT_SIZE_SCALE,lt=(Phaser.GameObjects.GameObject,{end:function(){},start:function(){},event:function(e,t){},dispose:function(){},complete:function(){},interrupt:function(){}}),dt=function(e){function t(){for(var t,n,a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=e.call.apply(e,r()(t=[this]).call(t,i))||this).fontName=void 0,n.text=void 0,n.run=function(){},n}(0,i.Z)(t,e);var n=t.prototype;return n.preload=function(){this.events.on("wake",this.run),this.events.once("create",this.run),this.fontName="LilitaOne",this.textStyler.addFont({type:"local",fontName:this.fontName,fontType:"truetype"})},n.create=function(){e.prototype.create.call(this),this.addResultScreen()},n.testProjectiles=function(){var e=this,t=ct.RANGED[1].KEY,n=this.add.container(200,400),a=this.add.spine(0,25,t,"idle",!0);a.setScale(.5*ht),n.add(a);var i=this.add.spine(200,200,t);i.setScale(.5*ht),this.addSpineEventListener("finished_attacking",(function(){e.createProjectile({level:1,target:i},n)}),a),this.input.on(Phaser.Input.Events.POINTER_DOWN,(function(e){var t=e.worldX,s=e.worldY;i.setPosition(t,s),n.y<s?a.play("attack_above"):a.play("attack_below"),n.x<t?a.setScale(.5*ht,.5*ht):a.setScale(.5*-ht,.5*ht)}))},n.addSpineEventListener=function(e,t,n){var i=(0,a.Z)({},lt);switch(e){case je.Tz.END:i.end=function(){t()};break;case je.Tz.START:i.start=function(){t()};break;case je.Tz.EVENT:i.event=function(){t()};break;case je.Tz.DISPOSE:i.dispose=function(){t()};break;case je.Tz.COMPLETE:i.complete=function(){t()};break;case je.Tz.INTERRUPT:i.interrupt=function(){t()};break;default:i.event=function(n,a){a.data.name===e&&t()}}n.state.addListener(i)},n.createProjectile=function(e,t){var n=e.level,a=e.speed,i={attacker:t,target:e.target,speed:a};switch(n){case 1:new qe.Z(this,i);break;case 2:new Je.Z(this,i);break;case 3:new Xe.Z(this,i);break;case 4:new $e.Z(this,i);break;case 5:new et.Z(this,i);break;case 6:new tt.Z(this,i);break;case 7:new nt.Z(this,i);break;case 8:new at.Z(this,i);break;case 9:new it.Z(this,i);break;case 10:new st.Z(this,i);break;case 11:new rt.Z(this,i);break;default:new Qe.Z(this,i)}},n.newCoinTest=function(){var e=new E.Z(1e3);console.log("Starting coin: ",e.toString()),console.log("Add 14K coins"),e.add(new E.Z(14,1)),console.log("Current coin: ",e.toString()),console.log("Subtract 5K coins"),e.subtract(new E.Z(5,1)),console.log("Current coin: ",e.toString()),console.log("Multiply coin by 50000"),e.multiply(5e4),console.log("Current coin: ",e.toString()),console.log("Add 2AA coins"),e.add(new E.Z(2,5)),console.log("Current coin: ",e.toString()),console.log("Subtract 1AA coins"),e.subtract(new E.Z(1,5)),console.log("Current coin: ",e.toString()),console.log("Multiply coin by 2AB"),e.multiply(new E.Z(2,6)),console.log("Current coin: ",e.toString()),console.log("Subtract 300AF coins"),e.subtract(new E.Z(300,10)),console.log("Current coin: ",e.toString(),e.baseValue)},n.addResultScreen=function(){var e=this.screen.add(u.o4.RESULT_SCREEN,v.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.open({result:"win",mode:"BATTLE",coinRewarded:new E.Z(842,124)})},n.addBattleScreen=function(){var e=this.screen.add(u.o4.BATTLE_SCREEN,Ke);e.recalculateLightPosition(),e.open()},n.addUnitRewardScreen=function(){var e=this.screen.add(u.o4.UNIT_REWARD_SCREEN,Ye.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.open({unitType:"MELEE"})},n.createTextObject=function(){this.text=this.add.text(0,0,"Text Styler",{fontFamily:this.fontName,fontSize:"50px",color:"#ffffff",stroke:"#000000",strokeThickness:3}),this.text.setHighQuality(),Phaser.Display.Align.In.Center(this.text,this.gameZone)},n.createShiningGraphicsEffect=function(){var e=new p.Z(this,{color:234748,width:{min:4,max:8},radius:{min:180,max:170},lineNumber:18});e.setName("ShiningGraphicsEffect"),Phaser.Display.Align.In.Center(e,this.gameZone)},n.createSpines=function(){for(var e=this,t=this.add.spineContainer(0,0),n=[ct.RANGED[1].KEY,ct.RANGED[4].KEY,ct.RANGED[2].KEY,ct.MELEE[1].KEY,ct.MELEE[2].KEY],a=0;a<4;a++)n.forEach((function(n){var a=e.createSpine(n,n);t.add(a)}));c()(t).call(t,"name",(function(e,t){return e.name.localeCompare(t.name)})),Phaser.Display.Align.In.Center(t,this.gameZone)},n.createSpine=function(e,t){var n=this.add.spine(0,0,t);n.setName(e);var a=n.getAnimationList(),i=Math.floor(Math.random()*a.length);return n.setAnimation(0,a[i],!0),n},n.captureSpineToTexture=function(e){var t=this,n=this.gameZone,a=n.width,i=n.height,s=this.make.renderTexture({});s.setWorldSize(a,i),e.setVisible(!1);var r=0,o=1;this.events.on(Phaser.Scenes.Events.RENDER,(function(){if(r>=60){t.events.off(Phaser.Scenes.Events.RENDER);var n=e.name+"-sprite";return s.saveTexture(n),s.destroy(),void t.createSpriteFromSpine(n,e,60)}e.width,e.height;s.draw(e,200,200),++o>3&&(o=1),r++}))},n.createSpriteFromSpine=function(e,t,n){var a=this.add.image(0,0,e);console.log("\ud83e\udd16 ? img",a),Phaser.Display.Align.In.Center(a,this.gameZone),a.setFlipY(!0)},n.createProgressBar=function(){var e=new l.Z(this,350);Phaser.Display.Align.In.Center(e,this.gameZone),this.add.existing(e),e.setScale(.75),this.game.scene.getScene(h.C.LOAD_SCENE).load.on(Phaser.Loader.Events.PROGRESS,(function(t){e.setProcess(t)}))},n.addNotifyScreen=function(){var e=this.screen.add(u.o4.NOTIFY_SCREEN,b.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.open({title:"Display Ads Failed",message:"Unable to display ads. Please try again later.",duration:0,loading:!1})},n.addSettingsScreen=function(){var e=this.screen.add(u.o4.SETTINGS_SCREEN,R.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.recalculateLightPosition(),e.open()},n.addLoadingScreen=function(){var e=this.screen.add(u.o4.LOADING_SCREEN,S.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.open()},n.addLeaderBoardScreen=function(){var e=this.screen.add(u.o4.LEADER_BOARD_SCREEN,A.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.recalculateLightPosition(),e.open()},n.addOfflineRewardScreen=function(){var e=this.screen.add(u.o4.OFFLINE_REWARD_SCREEN,f.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.recalculateLightPosition(),e.open({rewardValue:1e3})},n.addUnitUnlockScreen=function(){var e=this.screen.add(u.o4.UNIT_UNLOCK_SCREEN,k.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.recalculateLightPosition(),e.open()},n.addUnitScreen=function(){var e=this.screen.add(u.o4.UNITS_SCREEN,y.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.setName("UnitScreen"),e.open()},n.addChallengeLoadingScreen=function(){var e=this.screen.add(u.o4.CHALLENGE_SPLASH_SCREEN,m.Z);Phaser.Display.Align.In.Center(e,this.gameZone),e.setName("ChallengeLoadingScreen"),e.open()},n.createResultWinEffect=function(){var e=this,t=d.Z.GAMEPLAY,n=t.KEY,a=t.FRAME,i=this.add.container(0,0);i.setDepth(Ve.Z.EFFECT);var s=this.make.image({key:n,frame:a.EFFECT_WIN_GLOW});s.setWorldSize(276.5,58.5),i.add(s);var r=this.make.text({text:"WIN",style:{fontSize:"25px",color:"#FFFFFF",fontFamily:B.Z.FONT_FAMILY}});Phaser.Display.Align.In.Center(r,s),i.add(r);var o=this.make.image({key:n,frame:a.EFFECT_WIN_SHAPE_ABOVE});o.setWorldSize(87.5,18.5),i.add(o),Phaser.Display.Align.In.TopCenter(o,s,0,5);var c=this.make.image({key:n,frame:a.EFFECT_WIN_SHAPE_BELOW});c.setWorldSize(147,23.5),i.add(c),Phaser.Display.Align.In.BottomCenter(c,s,0,8),Phaser.Display.Align.In.Center(i,this.gameZone,0,-80),this.time.addEvent({delay:1e3,callback:function(){e.add.tween({targets:[s,r],duration:400,alpha:{start:0,to:1},ease:Phaser.Math.Easing.Quadratic.In}),e.add.tween({targets:[o,c],duration:300,alpha:{start:0,to:1}}),e.add.tween({targets:[o],duration:300,delay:200,y:{start:-10,to:-25},ease:Phaser.Math.Easing.Cubic.InOut}),e.add.tween({targets:[c],duration:300,delay:200,y:{start:10,to:25},ease:Phaser.Math.Easing.Cubic.InOut}),e.add.tween({targets:[i],duration:150,delay:1e3,repeat:3,alpha:{from:0,to:1},ease:Phaser.Math.Easing.Cubic.InOut})}})},t}(g.Z),ut=dt}}]);