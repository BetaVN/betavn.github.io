"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[543],{596:function(t,n,r){r.r(n);var e=r(3),a=r(0),u=r(2),i=r.n(u),o=r(52),s=r.n(o),c=r(29),f=r.n(c),d=r(28),h=r.n(d),p=r(21),l=r.n(p),m=r(6),v=r.n(m),w=r(603),y=GameCore.Configs.LeadersBoard.LeaderboardId,g=function(){function t(t){this.id=void 0,this.title=void 0,this.contextId=void 0,this.payload=void 0,this.endTime=void 0,this.id=t,this.title=this.id+"'s Tournament",this.contextId="000-"+this.id,this.payload=s()({playerId:"1213456",playerName:"Player",leaderboardId:y});var n=t>7?7:t;this.endTime=Math.round((Date.now()+864e5*n)/1e3)}var n=t.prototype;return n.getID=function(){return this.id},n.getTitle=function(){return this.title},n.getPayload=function(){return this.payload},n.getEndTime=function(){return this.endTime},n.getContextID=function(){return this.contextId},t}(),D=function(t){function n(){var n,r,e,a;return(a=t.call(this)||this).tournaments=void 0,a.tournamentData=void 0,a.tournaments=f()(n=h()(r=new Array(1)).call(r,null)).call(n,(function(t,n){return new g(n+1)})),a.tournamentData={},f()(e=a.tournaments).call(e,(function(t){a.tournamentData[""+t.getID()]=t})),a}(0,a.Z)(n,t);var r=n.prototype;return r.createAsync=function(){var t=(0,e.Z)(i().mark((function t(n){var r=this;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new(l())((function(t){var n=r.tournaments.length+1,e=new g(n);r.tournaments.push(e),r.tournamentData[n]=e,t(e)})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),r.shareAsync=function(){var t=(0,e.Z)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new(l())((function(t){return t()})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),r.joinAsync=function(){var t=(0,e.Z)(i().mark((function t(n){var r=this;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new(l())((function(t,e){n in r.tournamentData?t():e(new Error("Tournament not found"))})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),r.getTournamentsAsync=function(){var t=(0,e.Z)(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=v()(n=[]).call(n,this.tournaments),t.abrupt("return",r);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n}(w.J);n.default=D}}]);