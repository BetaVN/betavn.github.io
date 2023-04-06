"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[630],{601:function(t,n,e){var r=e(3),i=e(0),o=e(2),s=e.n(o),a=e(21),c=e.n(a),u=function(){function t(){this.player=void 0,this.context=void 0,this.graphApi=void 0,this.tournament=void 0,this.payments=void 0}var n=t.prototype;return n.getLocale=function(){return null},n.getPlatform=function(){return null},n.getSDKVersion=function(){return"0.0"},n.getSupportedAPIs=function(){return[]},n.getEntryPointData=function(){return null},n.getEntryPointAsync=function(){return new(c())((function(t){t("")}))},n.canCreateShortcutAsync=function(){return new(c())((function(t,n){n(new Error("Not implemented"))}))},n.quit=function(){},n.performHapticFeedbackAsync=function(){return c().resolve()},t}(),d=function(){function t(){}var n=t.prototype;return n.getID=function(){return null},n.getType=function(){return"SOLO"},t}(),l=function(t){function n(n){var e;return(e=t.call(this)||this).sdk=void 0,e.sdk=n,e}(0,i.Z)(n,t);var e=n.prototype;return e.getID=function(){return this.sdk.getID()},e.getType=function(){return this.sdk.getType()},e.isSizeBetween=function(t,n){return this.sdk.isSizeBetween(t,n)},e.switchAsync=function(t){return this.sdk.switchAsync(t)},e.chooseAsync=function(t){return this.sdk.chooseAsync(t)},e.createAsync=function(t){return this.sdk.createAsync(t)},e.getPlayersAsync=function(){return this.sdk.getPlayersAsync()},n}(d),f=l,h=function(){},y=function(t){function n(n){var e;return(e=t.call(this)||this).sdk=void 0,e.sdk=n,e}(0,i.Z)(n,t);var e=n.prototype;return e.getID=function(){return this.sdk.getID()},e.getASIDAsync=function(){return this.sdk.getASIDAsync()},e.getSignedASIDAsync=function(){return this.sdk.getSignedASIDAsync()},e.getName=function(){return this.sdk.getName()},e.getPhoto=function(){return this.sdk.getPhoto()},e.getDataAsync=function(t){return this.sdk.getDataAsync(t)},e.setDataAsync=function(t){return this.sdk.setDataAsync(t)},e.flushDataAsync=function(){return this.sdk.flushDataAsync()},e.getSignedPlayerInfoAsync=function(t){return this.sdk.getSignedPlayerInfoAsync(t)},e.canSubscribeBotAsync=function(){return this.sdk.canSubscribeBotAsync()},e.subscribeBotAsync=function(){return this.sdk.subscribeBotAsync()},e.getConnectedPlayersAsync=function(){return this.sdk.getConnectedPlayersAsync()},e.isGuest=function(){return!1},n}(h),g=y,p=function(t){function n(n){var e;return(e=t.call(this)||this).sdk=void 0,e.player=void 0,e.context=void 0,e.graphApi=void 0,e.tournament=void 0,e.sdk=n,e.player=new g(n.player),e.context=new f(n.context),e}(0,i.Z)(n,t);var e=n.prototype;return e.getLocale=function(){return this.sdk.getLocale()},e.getPlatform=function(){return this.sdk.getPlatform()},e.getSDKVersion=function(){return this.sdk.getSDKVersion()},e.initializeAsync=function(){return this.sdk.initializeAsync()},e.setLoadingProgress=function(t){this.sdk.setLoadingProgress(t)},e.getSupportedAPIs=function(){return this.sdk.getSupportedAPIs()},e.getEntryPointData=function(){return this.sdk.getEntryPointData()},e.getEntryPointAsync=function(){return this.sdk.getEntryPointAsync()},e.setSessionData=function(t){this.sdk.setSessionData(t)},e.startGameAsync=function(){return this.sdk.startGameAsync()},e.shareAsync=function(t){return this.sdk.shareAsync(t)},e.updateAsync=function(t){return this.sdk.updateAsync(t)},e.switchGameAsync=function(t,n){return this.sdk.switchGameAsync(t,n)},e.canCreateShortcutAsync=function(){return this.sdk.canCreateShortcutAsync()},e.createShortcutAsync=function(){return this.sdk.createShortcutAsync()},e.quit=function(){this.sdk.quit()},e.logEvent=function(t,n,e){return this.sdk.logEvent(t,n,e)},e.onPause=function(t){this.sdk.onPause(t)},e.getInterstitialAdAsync=function(t){return this.sdk.getInterstitialAdAsync(t)},e.getRewardedVideoAsync=function(t){return this.sdk.getRewardedVideoAsync(t)},e.matchPlayerAsync=function(t,n,e){return this.sdk.matchPlayerAsync(t,n,e)},e.checkCanPlayerMatchAsync=function(){return this.sdk.checkCanPlayerMatchAsync()},e.getLeaderboardAsync=function(t){return this.sdk.getLeaderboardAsync(t)},e.postSessionScoreAsync=function(t){return this.sdk.postSessionScoreAsync(t)},e.loadBannerAdAsync=function(t){return this.sdk.loadBannerAdAsync(t)},e.hideBannerAdAsync=function(){return this.sdk.hideBannerAdAsync()},e.showGameRating=function(){var t=(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c().reject(new Error("CLIENT_UNSUPPORTED_OPERATION")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e.getTournamentAsync=function(){return this.sdk.getTournamentAsync()},e.inviteAsync=function(t){return this.sdk.inviteAsync(t)},e.shareLinkAsync=function(t){return this.sdk.shareLinkAsync(t)},n}(u),A=p,v=e(8),w=function(){},m={resolve:function(){},reject:function(t){console.log("\ud83e\udd16 ? data",t)}},S={rewarded:(0,v.Z)({},m)},I={interstitial:(0,v.Z)({},m),rewarded:(0,v.Z)({},m)};window.API_callback=function(t,n,e){console.log("\ud83e\udd16 ? result",n),console.log("\ud83e\udd16 ? data",e),"loadAd"===t&&("ok"===n?S.rewarded.resolve():S.rewarded.reject(e),S.rewarded=(0,v.Z)({},m)),"showLoadedAd"===t&&("ok"===n?I.rewarded.resolve():I.rewarded.reject(e),I.rewarded=(0,v.Z)({},m)),"showAd"===t&&("ok"===n?I.interstitial.resolve():I.interstitial.reject(e),I.interstitial=(0,v.Z)({},m))};var k=function(t){function n(n,e){var r;return(r=t.call(this)||this).FAPI=void 0,r.type=void 0,r.FAPI=n,r.type=e,r}(0,i.Z)(n,t);var e=n.prototype;return e.getPlacementID=function(){return"privateId"},e.loadAsync=function(){var t=this;return new(c())((function(n,e){"rewarded"===t.type&&(S.rewarded={resolve:n,reject:e},t.FAPI.UI.loadAd()),"interstitial"===t.type&&n()}))},e.showAsync=function(){var t=this;return new(c())((function(n,e){"interstitial"===t.type?(I.interstitial={resolve:n,reject:e},t.FAPI.UI.showAd()):"rewarded"===t.type?(I.rewarded={resolve:n,reject:e},t.FAPI.UI.showLoadedAd()):e(new Error("Unknown ad type"))}))},n}(w),P=k,D=function(t){function n(n){var e;return(e=t.call(this)||this).sdk=void 0,e.sdk=n,e}(0,i.Z)(n,t);var e=n.prototype;return e.getID=function(){return null},e.getType=function(){return"SOLO"},e.isSizeBetween=function(t,n){return null},e.switchAsync=function(t){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.chooseAsync=function(){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.createAsync=function(t){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.getPlayersAsync=function(){return new(c())((function(t,n){n(new Error("Unsupported"))}))},n}(d),E=D,L=e(599),_=e(97),U=e.n(_),G=e(512),b=e.n(G),C=e(52),B=e.n(C),F="GuestID",z="GuestData",T="GuestStats",j=function(){function t(t){this._personalInfo=void 0,this._uniqueId=void 0,this._name=void 0,this._photo=void 0,this._playerData=void 0,this._playerStats=void 0,t?(this._uniqueId=t.id,this._name=t.name,this._photo=t.photo):(this._uniqueId=this.checkAndGetIdFromLocalStorage(),this._name="GUEST"),this._personalInfo={id:this._uniqueId,avatarIdHash:"0",lang:"ru",publicName:this.getName(),uniqueID:this._uniqueId,scopePermissions:{avatar:"forbid",public_name:"forbid"}},this._playerData=this.getDataFromLocalStorage(),this._playerStats=this.getStatsFromLocalStorage()}var n=t.prototype;return n.getUniqueID=function(){return this._uniqueId},n.getName=function(){return this._name},n.getPhoto=function(){return this._photo||""},n.getMode=function(){return""},n.getData=function(t){var n=this;if(t){var e=U()(t).call(t,(function(t,e){var r;return(0,v.Z)({},t,((r={})[e]=n._playerData[e],r))}),{});return c().resolve(e)}return c().resolve(this._playerData)},n.setData=function(t){return this._playerData=(0,v.Z)({},this._playerData,t),this.writeDataToLocalStorage(this._playerData),c().resolve(!0)},n.setStats=function(t){return this._playerStats=(0,v.Z)({},this._playerStats,t),this.writeStatsToLocalStorage(this._playerStats),c().resolve(!0)},n.incrementStats=function(t){for(var n=0,e=b()(t);n<e.length;n++){var r=e[n],i=r[0],o=r[1];this._playerStats[i]=(this._playerStats[i]||0)+o}return this.writeStatsToLocalStorage(this._playerStats),c().resolve(this._playerStats)},n.getStats=function(t){var n=this;if(t){var e=U()(t).call(t,(function(t,e){var r;return(0,v.Z)({},t,((r={})[e]=n._playerStats[e],r))}),{});return c().resolve(e)}return c().resolve(this._playerStats)},n.getIDsPerGame=function(){return c().resolve([])},n.checkAndGetIdFromLocalStorage=function(){var t=localStorage.getItem(F);if(null!=t)return t;var n=this.getRandomID();return localStorage.setItem(F,n),n},n.getRandomID=function(){return"GUEST_"+Math.random().toString(36).substr(2,15)},n.getDataFromLocalStorage=function(){var t=localStorage.getItem(z);return t?JSON.parse(t):{}},n.writeDataToLocalStorage=function(t){return localStorage.setItem(z,B()(t))},n.getStatsFromLocalStorage=function(){var t=localStorage.getItem(T);return t?JSON.parse(t):{}},n.writeStatsToLocalStorage=function(t){return localStorage.setItem(T,B()(t))},t}(),x=function(t){function n(n){var e;return(e=t.call(this)||this).sdk=void 0,e.player=void 0,e.playerDataKey=void 0,e.initPlayerAsync=function(){return new(c())((function(t){e.sdk.Client.call({method:"users.getCurrentUser",fields:""},e.callBackGetPlayer(t))}))},e.callBackGetPlayer=function(t){return function(n,r,i){if(i)return e.player=new j,void t();e.player=new j({id:""+r.uid,name:r.first_name+" "+r.last_name,photo:r.pic_1}),t()}},e.sdk=n,e.playerDataKey="playerData",e}(0,i.Z)(n,t);var e=n.prototype;return e.rejectPlayerNotInitialized=function(){return c().reject(new Error("Player is not initialized"))},e.getID=function(){var t,n;return null!=(t=null==(n=this.player)?void 0:n.getUniqueID())?t:null},e.getASIDAsync=function(){var t;return c().resolve(null!=(t=this.getID())?t:"")},e.getSignedASIDAsync=function(){var t=this;return c().resolve({getASID:function(){var n;return null!=(n=t.getID())?n:"10"},getSignature:function(){return""}})},e.getName=function(){var t,n,e=null!=(t=null==(n=this.player)?void 0:n.getName())?t:null;return""===e?"Anonymous":e},e.getPhoto=function(){var t,n;return null!=(t=null==(n=this.player)?void 0:n.getPhoto())?t:null},e.getDataAsync=function(t,n,e){var r=this;return new(c())((function(i,o){if(r.isLogged()){console.log("storage.get",t);var s=n||"";r.sdk.Client.call({method:"storage.get",keys:[r.playerDataKey],scope:e||"CUSTOM",uid:s},(function(n,e,s){if(s)o(s);else{var a={};if(GameCore.Utils.Valid.isObject(e)){var c=e.data;if(!GameCore.Utils.Valid.isObject(c))return void i(a);var u=c[r.playerDataKey];if(GameCore.Utils.Valid.isString(u)){var d=GameCore.Utils.Json.decode(u);GameCore.Utils.Valid.isObject(d)&&(a=d)}}if(t){var l={};t.forEach((function(t){GameCore.Utils.Object.hasOwn(a,t)&&(l[t]=a[t])})),a=l}console.log("storage.get data",a,s),i(a)}}))}else o(new Error("Player is not initialized"))}))},e.setDataAsync=function(t,n){var e=this;return new(c())((function(r,i){if(e.isLogged()){var o=n||"";e.getDataAsync(void 0,o).then((function(n){var s=(0,L.TS)(n,t);console.log("storage.set",s);var a=GameCore.Utils.Json.encode(s);e.sdk.Client.call({method:"storage.set",key:e.playerDataKey,value:a,uid:o},(function(t,n,e){e?i(e):r()}))})).catch((function(t){i(t)}))}else i(new Error("Player is not initialized"))}))},e.flushDataAsync=function(){var t,n;return null!=(t=null==(n=this.player)?void 0:n.setData({}).then())?t:this.rejectPlayerNotInitialized()},e.getSignedPlayerInfoAsync=function(){var t,n,e=this,r=null!=(t=null==(n=this.player)?void 0:n.getUniqueID())?t:this.rejectPlayerNotInitialized();return new(c())((function(t,n){"string"===typeof r?t({getPlayerID:function(){var t;return null!=(t=e.getID())?t:"10"},getSignature:function(){return r}}):n(new Error("Can't get player signed"))}))},e.canSubscribeBotAsync=function(){return new(c())((function(t){t(!1)}))},e.subscribeBotAsync=function(){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.getStatsAsync=function(t){var n=this;return new(c())((function(e,r){n.isLogged()?e(n.player.getStats(t)):r(new Error("Player is not initialized"))}))},e.setStatsAsync=function(t){var n=this;return new(c())((function(e,r){n.isLogged()?n.player.setStats(t).then((function(){return e()})).catch(r):r(new Error("Player is not initialized"))}))},e.incrementStatsAsync=function(t){var n=this;return new(c())((function(e,r){n.isLogged()?n.player.incrementStats(t).then(e).catch(r):r(new Error("Player is not initialized"))}))},e.getConnectedPlayersAsync=function(t){var n=this;return new(c())((function(e,r){n.sdk.Client.call({method:"users.getInfo",uids:t,fields:["UID","NAME","PIC50X50"]},(function(t,n,i){if(i)r(i);else if(Array.isArray(n)){var o=[];n.forEach((function(t){var n={uid:"",name:null,pic50x50:"./assets/images/others/avatar.png"};t.uid&&GameCore.Utils.Valid.isString(t.uid)&&(n.uid=t.uid,t.name&&GameCore.Utils.Valid.isString(t.name)&&(n.name=t.name),t.pic50x50&&GameCore.Utils.Valid.isString(t.pic50x50)&&(n.pic50x50=t.pic50x50),o.push({getID:function(){return n.uid},getName:function(){return n.name},getPhoto:function(){return n.pic50x50}}))})),e(o)}else r(new Error("Invalid data"))}))}))},e.isGuest=function(){return!1},e.isLogged=function(){return!!this.player},n}(h),Z=x,N=function(t){function n(n){var e;return(e=t.call(this)||this).sdk=void 0,e.player=void 0,e.context=void 0,e.graphApi=void 0,e.tournament=void 0,e.rewardedAdInstance=void 0,e.interstitialAdInstance=void 0,e.currentPercentLoading=0,e.initSDKAsync=function(){return new(c())((function(t){console.log("initSDKAsync "),e.player=new Z(e.sdk),e.context=new E(e.sdk),e.rewardedAdInstance=new P(e.sdk,"rewarded"),e.interstitialAdInstance=new P(e.sdk,"interstitial"),e.player.initPlayerAsync().then(t)}))},e.initializeSuccess=function(){return new(c())((function(t){e.initSDKAsync().then(t)}))},e.initializeError=function(t){return new(c())((function(n,e){console.log("Error === ",t),e(t)}))},e.sdk=n,e}(0,i.Z)(n,t);var e=n.prototype;return e.getLocale=function(){return"ru"},e.getSDKVersion=function(){return"5.0"},e.getSupportedAPIs=function(){return["getLocale","getSDKVersion","initializeAsync","startGameAsync","setLoadingProgress","getInterstitialAdAsync","getRewardedVideoAsync","getPlatform"]},e.initializeAsync=function(){var t=this;return new(c())((function(n,e){var r=document.getElementById("lds-content");if(r)r.hidden=!1;else{var i='<div id="lds-content"><div id="lds-dual-ring"></div><div id="lds-text"><span id="lds-percent">0</span>% \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e</div></div>';"complete"===document.readyState?t.appendHtml(document.body,i):window.addEventListener("load",(function(){t.appendHtml(document.body,i)}))}var o=t.sdk.Util.getRequestParameters();t.sdk.init(o.api_server,o.apiconnection,(function(){t.initializeSuccess().then(n).catch(e)}),(function(r){t.initializeError(r).then(n).catch(e)}))}))},e.startGameAsync=function(){var t;return this.setLoadingProgress(100),null==(t=document.getElementById("lds-content"))||t.remove(),new(c())((function(t,n){window.FAPI?t():n("Initialize Failed")}))},e.setLoadingProgress=function(t){var n=document.getElementById("lds-percent");n&&(this.currentPercentLoading=Math.round(Math.max(Math.min(t,100),this.currentPercentLoading)),n.innerHTML=""+this.currentPercentLoading,this.currentPercentLoading=t)},e.setSessionData=function(t){},e.shareAsync=function(t){return new(c())((function(n){t.data;window.FAPI.UI.postMediatopic({media:[{type:"text",text:"\u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u0438 \u0438\u0433\u0440\u0430\u0439 \u0432 Y\u0439\u0446a \u0434\u0438\u043d\u043e\u0437a\u0432\u0440a \u0448\u0443\u0442\u0435\u0440 \u0441\u043e \u043c\u043d\u043e\u0439!"},{type:"link",url:"https://ok.ru/game/512001643329"}]},!1),n()}))},e.updateAsync=function(t){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.switchGameAsync=function(t){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.canCreateShortcutAsync=function(){return new(c())((function(t,n){n(!1)}))},e.createShortcutAsync=function(){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.logEvent=function(){return null},e.onPause=function(t){},e.getInterstitialAdAsync=function(t){var n=this;return new(c())((function(t){t(n.interstitialAdInstance)}))},e.getRewardedVideoAsync=function(t){var n=this;return new(c())((function(t){t(n.rewardedAdInstance)}))},e.matchPlayerAsync=function(t){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.checkCanPlayerMatchAsync=function(){return new(c())((function(t,n){n(!1)}))},e.getLeaderboardAsync=function(){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.postSessionScoreAsync=function(t){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.appendHtml=function(t,n){var e=document.createElement("div");for(e.innerHTML=n;e.children.length>0;)t.appendChild(e.children[0])},e.getPlatform=function(){return"WEB"},e.loadBannerAdAsync=function(){return new(c())((function(t,n){n(new Error("Unsupported"))}))},e.hideBannerAdAsync=function(){return new(c())((function(t){return t}))},e.getTournamentAsync=function(){return c().reject(new Error("Unsupported"))},e.inviteAsync=function(t){return new(c())((function(n,e){window.FAPI.Client.call({method:"friends.get"},(function(r,i,o){if(i.length>0){var s=t.text,a="\u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u0438 \u0438\u0433\u0440\u0430\u0439 \u0432 Y\u0439\u0446a \u0434\u0438\u043d\u043e\u0437a\u0432\u0440a \u0448\u0443\u0442\u0435\u0440 \u0441\u043e \u043c\u043d\u043e\u0439!";"string"===typeof s&&(a=s),"object"===typeof s&&s.default&&(a=s.default),window.FAPI.UI.showInvite(a,"arg1=val1",i[0]),n()}else e()}))}))},e.showGameRating=function(){var t=(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c().reject(new Error("Unsupported")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e.shareLinkAsync=function(t){return c().reject(new Error("Unsupported"))},n}(u),K=N;"FBInstant"in window&&(window.GameSDK=new A(window.FBInstant)),"FAPI"in window&&(window.GameSDK=new K(window.FAPI)),window.FBInstant=window.GameSDK}}]);