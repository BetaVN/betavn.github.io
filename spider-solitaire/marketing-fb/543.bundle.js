"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[543],{518:function(t,n,e){e.r(n);var r=e(1),a=e(0),i=e(2),u=e.n(i),o=e(40),s=e.n(o),c=e(7),d=e.n(c),h=e(38),f=e.n(h),l=e(16),p=e.n(l),m=e(5),v=e.n(m),w=e(527),y=GameCore.Configs.LeadersBoard.LeaderboardId,g=function(){function t(t,n){this.id=void 0,this.title=void 0,this.contextId=void 0,this.payload=void 0,this.endTime=void 0,this.id=t,this.title=this.id+"'s Tournament",this.contextId="000-"+this.id;var e=["one","two","four"],r=["easy","medium","hard"];this.payload=s()({playerId:n||Phaser.Math.Between(1,5),playerName:"Player",leaderboardId:y,suitSize:e[Phaser.Math.Between(0,e.length-1)],difficulty:r[Phaser.Math.Between(0,r.length-1)]}),this.initEndTime(void 0!==n)}var n=t.prototype;return n.initEndTime=function(t){var n=this,e=t||n.id>7?7:n.id;this.endTime=Math.round((Date.now()+864e5*e)/1e3)},n.getID=function(){return this.id},n.getTitle=function(){return this.title},n.getPayload=function(){return this.payload},n.getEndTime=function(){return this.endTime},n.getContextID=function(){return this.contextId},t}(),I=function(t){function n(){var n,e,r,a;return(a=t.call(this)||this).tournaments=void 0,a.tournamentData=void 0,a.tournaments=d()(n=f()(e=new Array(10)).call(e,null)).call(n,(function(t,n){return new g(n+1)})),a.tournamentData={},d()(r=a.tournaments).call(r,(function(t){a.tournamentData[""+t.getID()]=t})),a}(0,a.Z)(n,t);var e=n.prototype;return e.createAsync=function(){var t=(0,r.Z)(u().mark((function t(n){var e=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new(p())((function(t){var r,a=e.tournaments.length+1,i=new g(a,null==(r=n.data)?void 0:r.playerId);e.tournaments.push(i),e.tournamentData[a]=i,t(i)})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),e.shareAsync=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new(p())((function(t){return t()})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),e.joinAsync=function(){var t=(0,r.Z)(u().mark((function t(n){var e=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new(p())((function(t,r){n in e.tournamentData?t():r(new Error("Tournament not found"))})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),e.getTournamentsAsync=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=v()(n=[]).call(n,this.tournaments),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n}(w.J);n.default=I}}]);