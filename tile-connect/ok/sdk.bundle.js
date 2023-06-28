"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[630],{593:function(n,t,e){var r=e(3),i=e(0),o=e(2),a=e.n(o),s=e(23),c=e.n(s),u=function(){function n(){this.player=void 0,this.context=void 0,this.graphApi=void 0,this.tournament=void 0,this.payments=void 0}var t=n.prototype;return t.getLocale=function(){return null},t.getPlatform=function(){return null},t.getSDKVersion=function(){return"0.0"},t.getSupportedAPIs=function(){return[]},t.getEntryPointData=function(){return null},t.getEntryPointAsync=function(){return new(c())((function(n){n("")}))},t.canCreateShortcutAsync=function(){return new(c())((function(n,t){t(new Error("Not implemented"))}))},t.quit=function(){},t.performHapticFeedbackAsync=function(){return c().resolve()},n}(),d=function(){function n(){}var t=n.prototype;return t.getID=function(){return null},t.getType=function(){return"SOLO"},n}(),l=function(n){function t(t){var e;return(e=n.call(this)||this).sdk=void 0,e.sdk=t,e}(0,i.Z)(t,n);var e=t.prototype;return e.getID=function(){return this.sdk.getID()},e.getType=function(){return this.sdk.getType()},e.isSizeBetween=function(n,t){return this.sdk.isSizeBetween(n,t)},e.switchAsync=function(n){return this.sdk.switchAsync(n)},e.chooseAsync=function(n){return this.sdk.chooseAsync(n)},e.createAsync=function(n){return this.sdk.createAsync(n)},e.getPlayersAsync=function(){return this.sdk.getPlayersAsync()},t}(d),f=l,h=function(){},y=function(n){function t(t){var e;return(e=n.call(this)||this).sdk=void 0,e.sdk=t,e}(0,i.Z)(t,n);var e=t.prototype;return e.getID=function(){return this.sdk.getID()},e.getASIDAsync=function(){return this.sdk.getASIDAsync()},e.getSignedASIDAsync=function(){return this.sdk.getSignedASIDAsync()},e.getName=function(){return this.sdk.getName()},e.getPhoto=function(){return this.sdk.getPhoto()},e.getDataAsync=function(n){return this.sdk.getDataAsync(n)},e.setDataAsync=function(n){return this.sdk.setDataAsync(n)},e.flushDataAsync=function(){return this.sdk.flushDataAsync()},e.getSignedPlayerInfoAsync=function(n){return this.sdk.getSignedPlayerInfoAsync(n)},e.canSubscribeBotAsync=function(){return this.sdk.canSubscribeBotAsync()},e.subscribeBotAsync=function(){return this.sdk.subscribeBotAsync()},e.getConnectedPlayersAsync=function(){return this.sdk.getConnectedPlayersAsync()},e.isGuest=function(){return!1},t}(h),g=y,w=function(n){function t(t){var e;return(e=n.call(this)||this).sdk=void 0,e.player=void 0,e.context=void 0,e.graphApi=void 0,e.tournament=void 0,e.sdk=t,e.player=new g(t.player),e.context=new f(t.context),e}(0,i.Z)(t,n);var e=t.prototype;return e.getLocale=function(){return this.sdk.getLocale()},e.getPlatform=function(){return this.sdk.getPlatform()},e.getSDKVersion=function(){return this.sdk.getSDKVersion()},e.initializeAsync=function(){return this.sdk.initializeAsync()},e.setLoadingProgress=function(n){this.sdk.setLoadingProgress(n)},e.getSupportedAPIs=function(){return this.sdk.getSupportedAPIs()},e.getEntryPointData=function(){return this.sdk.getEntryPointData()},e.getEntryPointAsync=function(){return this.sdk.getEntryPointAsync()},e.setSessionData=function(n){this.sdk.setSessionData(n)},e.startGameAsync=function(){return this.sdk.startGameAsync()},e.shareAsync=function(n){return this.sdk.shareAsync(n)},e.updateAsync=function(n){return this.sdk.updateAsync(n)},e.switchGameAsync=function(n,t){return this.sdk.switchGameAsync(n,t)},e.canCreateShortcutAsync=function(){return this.sdk.canCreateShortcutAsync()},e.createShortcutAsync=function(){return this.sdk.createShortcutAsync()},e.quit=function(){this.sdk.quit()},e.logEvent=function(n,t,e){return this.sdk.logEvent(n,t,e)},e.onPause=function(n){this.sdk.onPause(n)},e.getInterstitialAdAsync=function(n){return this.sdk.getInterstitialAdAsync(n)},e.getRewardedVideoAsync=function(n){return this.sdk.getRewardedVideoAsync(n)},e.matchPlayerAsync=function(n,t,e){return this.sdk.matchPlayerAsync(n,t,e)},e.checkCanPlayerMatchAsync=function(){return this.sdk.checkCanPlayerMatchAsync()},e.getLeaderboardAsync=function(n){return this.sdk.getLeaderboardAsync(n)},e.postSessionScoreAsync=function(n){return this.sdk.postSessionScoreAsync(n)},e.loadBannerAdAsync=function(n){return this.sdk.loadBannerAdAsync(n)},e.hideBannerAdAsync=function(){return this.sdk.hideBannerAdAsync()},e.showGameRating=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c().reject(new Error("CLIENT_UNSUPPORTED_OPERATION")));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e.getTournamentAsync=function(){return this.sdk.getTournamentAsync()},e.inviteAsync=function(n){return this.sdk.inviteAsync(n)},e.shareLinkAsync=function(n){return this.sdk.shareLinkAsync(n)},t}(u),A=w,p=e(18),v=function(){},k={resolve:function(){},reject:function(n){console.log("\ud83e\udd16 ? data",n)}},m={rewarded:(0,p.Z)({},k)},S={interstitial:(0,p.Z)({},k),rewarded:(0,p.Z)({},k)},I=function(n){function t(t,e){var r;return(r=n.call(this)||this).FAPI=void 0,r.type=void 0,r.FAPI=t,r.type=e,window.API_callbacks.push((function(n,t,e){"loadAd"===n&&("ok"===t?m.rewarded.resolve():m.rewarded.reject(e),m.rewarded=(0,p.Z)({},k)),"showLoadedAd"===n&&("ok"===t?S.rewarded.resolve():S.rewarded.reject(e),S.rewarded=(0,p.Z)({},k)),"showAd"===n&&("ok"===t?"ad_shown"===e&&(S.interstitial.resolve(),S.interstitial=(0,p.Z)({},k)):(S.interstitial.reject(e),S.interstitial=(0,p.Z)({},k)))})),r}(0,i.Z)(t,n);var e=t.prototype;return e.getPlacementID=function(){return"privateId"},e.loadAsync=function(){var n=this;return new(c())((function(t,e){"rewarded"===n.type&&(m.rewarded={resolve:t,reject:e},n.FAPI.UI.loadAd()),"interstitial"===n.type&&t()}))},e.showAsync=function(){var n=this;return new(c())((function(t,e){"interstitial"===n.type?(S.interstitial={resolve:t,reject:e},n.FAPI.UI.showAd()):"rewarded"===n.type?(S.rewarded={resolve:t,reject:e},n.FAPI.UI.showLoadedAd()):e(new Error("Unknown ad type"))}))},t}(v),b=I,P=e(24),D=e.n(P),B="undefined"==typeof window?"":window.navigator.userAgent.toLowerCase(),E=function(n){return-1!==D()(B).call(B,n)},_={windows:function(){return E("windows")},blackberry:function(){return E("blackberry")||E("bb10")||E("rim")},fxos:function(){return(E("(mobile")||E("(tablet"))&&E(" rv:")},androidPhone:function(){return _.android()&&E("mobile")},androidTablet:function(){return _.android()&&!E("mobile")},blackberryPhone:function(){return _.blackberry()&&!E("tablet")},blackberryTablet:function(){return _.blackberry()&&E("tablet")},fxosPhone:function(){return _.fxos()&&E("mobile")},fxosTablet:function(){return _.fxos()&&E("tablet")},iphone:function(){return!_.windows()&&E("iphone")},ipad:function(){return E("ipad")},ipod:function(){return E("ipod")},meego:function(){return E("meego")},windowsPhone:function(){return _.windows()&&E("phone")},windowsTablet:function(){return _.windows()&&E("touch")&&!_.windowsPhone()},android:function(){return!_.windows()&&E("android")},ios:function(){return _.iphone()||_.ipod()||_.ipad()},mobile:function(){return _.androidPhone()||_.iphone()||_.ipod()||_.windowsPhone()||_.blackberryPhone()||_.fxosPhone()||_.meego()},tablet:function(){return _.ipad()||_.androidTablet()||_.blackberryTablet()||_.windowsTablet()||_.fxosTablet()}},L=function(n){function t(t){var e;return(e=n.call(this)||this).sdk=void 0,e.sdk=t,e}(0,i.Z)(t,n);var e=t.prototype;return e.getID=function(){return null},e.getType=function(){return"SOLO"},e.isSizeBetween=function(n,t){return null},e.switchAsync=function(n){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.chooseAsync=function(){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.createAsync=function(n){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.getPlayersAsync=function(){return new(c())((function(n,t){t(new Error("Unsupported"))}))},t}(d),C=L,U=e(591),G=e(179),T=e.n(G),j=e(506),z=e.n(j),Z=e(52),x=e.n(Z),N="GuestID",q="GuestData",F="GuestStats",M=function(){function n(n){this._personalInfo=void 0,this._uniqueId=void 0,this._name=void 0,this._photo=void 0,this._playerData=void 0,this._playerStats=void 0,n?(this._uniqueId=n.id,this._name=n.name,this._photo=n.photo):(this._uniqueId=this.checkAndGetIdFromLocalStorage(),this._name="GUEST"),this._personalInfo={id:this._uniqueId,avatarIdHash:"0",lang:"ru",publicName:this.getName(),uniqueID:this._uniqueId,scopePermissions:{avatar:"forbid",public_name:"forbid"}},this._playerData=this.getDataFromLocalStorage(),this._playerStats=this.getStatsFromLocalStorage()}var t=n.prototype;return t.getUniqueID=function(){return this._uniqueId},t.getName=function(){return this._name},t.getPhoto=function(){return this._photo||""},t.getMode=function(){return""},t.getData=function(n){var t=this;if(n){var e=T()(n).call(n,(function(n,e){var r;return(0,p.Z)({},n,((r={})[e]=t._playerData[e],r))}),{});return c().resolve(e)}return c().resolve(this._playerData)},t.setData=function(n){return this._playerData=(0,p.Z)({},this._playerData,n),this.writeDataToLocalStorage(this._playerData),c().resolve(!0)},t.setStats=function(n){return this._playerStats=(0,p.Z)({},this._playerStats,n),this.writeStatsToLocalStorage(this._playerStats),c().resolve(!0)},t.incrementStats=function(n){for(var t=0,e=z()(n);t<e.length;t++){var r=e[t],i=r[0],o=r[1];this._playerStats[i]=(this._playerStats[i]||0)+o}return this.writeStatsToLocalStorage(this._playerStats),c().resolve(this._playerStats)},t.getStats=function(n){var t=this;if(n){var e=T()(n).call(n,(function(n,e){var r;return(0,p.Z)({},n,((r={})[e]=t._playerStats[e],r))}),{});return c().resolve(e)}return c().resolve(this._playerStats)},t.getIDsPerGame=function(){return c().resolve([])},t.checkAndGetIdFromLocalStorage=function(){var n=localStorage.getItem(N);if(null!=n)return n;var t=this.getRandomID();return localStorage.setItem(N,t),t},t.getRandomID=function(){return"GUEST_"+Math.random().toString(36).substr(2,15)},t.getDataFromLocalStorage=function(){var n=localStorage.getItem(q);return n?JSON.parse(n):{}},t.writeDataToLocalStorage=function(n){return localStorage.setItem(q,x()(n))},t.getStatsFromLocalStorage=function(){var n=localStorage.getItem(F);return n?JSON.parse(n):{}},t.writeStatsToLocalStorage=function(n){return localStorage.setItem(F,x()(n))},n}(),O=function(n){function t(t){var e;return(e=n.call(this)||this).sdk=void 0,e.player=void 0,e.playerDataKey=void 0,e.initPlayerAsync=function(){return new(c())((function(n){e.sdk.Client.call({method:"users.getCurrentUser",fields:""},e.callBackGetPlayer(n))}))},e.callBackGetPlayer=function(n){return function(t,r,i){if(i)return e.player=new M,void n();e.player=new M({id:""+r.uid,name:r.first_name+" "+r.last_name,photo:r.pic_1}),n()}},e.sdk=t,e.playerDataKey="playerData",e}(0,i.Z)(t,n);var e=t.prototype;return e.rejectPlayerNotInitialized=function(){return c().reject(new Error("Player is not initialized"))},e.getID=function(){var n,t;return null!=(n=null==(t=this.player)?void 0:t.getUniqueID())?n:null},e.getASIDAsync=function(){var n;return c().resolve(null!=(n=this.getID())?n:"")},e.getSignedASIDAsync=function(){var n=this;return c().resolve({getASID:function(){var t;return null!=(t=n.getID())?t:"10"},getSignature:function(){return""}})},e.getName=function(){var n,t,e=null!=(n=null==(t=this.player)?void 0:t.getName())?n:null;return""===e?"Anonymous":e},e.getPhoto=function(){var n,t;return null!=(n=null==(t=this.player)?void 0:t.getPhoto())?n:null},e.getDataAsync=function(n,t,e){var r=this;return new(c())((function(i,o){if(r.isLogged()){console.log("storage.get",n);var a=t||"";r.sdk.Client.call({method:"storage.get",keys:[r.playerDataKey],scope:e||"CUSTOM",uid:a},(function(t,e,a){if(a)o(a);else{var s={};if(GameCore.Utils.Valid.isObject(e)){var c=e.data;if(!GameCore.Utils.Valid.isObject(c))return void i(s);var u=c[r.playerDataKey];if(GameCore.Utils.Valid.isString(u)){var d=GameCore.Utils.Json.decode(u);GameCore.Utils.Valid.isObject(d)&&(s=d)}}if(n){var l={};n.forEach((function(n){GameCore.Utils.Object.hasOwn(s,n)&&(l[n]=s[n])})),s=l}console.log("storage.get data",s,a),i(s)}}))}else o(new Error("Player is not initialized"))}))},e.setDataAsync=function(n,t){var e=this;return new(c())((function(r,i){if(e.isLogged()){var o=t||"";e.getDataAsync(void 0,o).then((function(t){var a=(0,U.TS)(t,n);console.log("storage.set",a);var s=GameCore.Utils.Json.encode(a);e.sdk.Client.call({method:"storage.set",key:e.playerDataKey,value:s,uid:o},(function(n,t,e){e?i(e):r()}))})).catch((function(n){i(n)}))}else i(new Error("Player is not initialized"))}))},e.flushDataAsync=function(){var n,t;return null!=(n=null==(t=this.player)?void 0:t.setData({}).then())?n:this.rejectPlayerNotInitialized()},e.getSignedPlayerInfoAsync=function(){var n,t,e=this,r=null!=(n=null==(t=this.player)?void 0:t.getUniqueID())?n:this.rejectPlayerNotInitialized();return new(c())((function(n,t){"string"===typeof r?n({getPlayerID:function(){var n;return null!=(n=e.getID())?n:"10"},getSignature:function(){return r}}):t(new Error("Can't get player signed"))}))},e.canSubscribeBotAsync=function(){return new(c())((function(n){n(!1)}))},e.subscribeBotAsync=function(){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.getStatsAsync=function(n){var t=this;return new(c())((function(e,r){t.isLogged()?e(t.player.getStats(n)):r(new Error("Player is not initialized"))}))},e.setStatsAsync=function(n){var t=this;return new(c())((function(e,r){t.isLogged()?t.player.setStats(n).then((function(){return e()})).catch(r):r(new Error("Player is not initialized"))}))},e.incrementStatsAsync=function(n){var t=this;return new(c())((function(e,r){t.isLogged()?t.player.incrementStats(n).then(e).catch(r):r(new Error("Player is not initialized"))}))},e.getConnectedPlayersAsync=function(n){var t=this;return new(c())((function(e,r){t.sdk.Client.call({method:"users.getInfo",uids:n,fields:["UID","NAME","PIC50X50"]},(function(n,t,i){if(i)r(i);else if(Array.isArray(t)){var o=[];t.forEach((function(n){o.push({getID:function(){return n.uid},getName:function(){return n.name},getPhoto:function(){return n.pic50x50||"./assets/images/others/avatar.png"}})})),e(o)}else r(new Error("Invalid data"))}))}))},e.isGuest=function(){return!1},e.isLogged=function(){return!!this.player},t}(h),K=O;window.API_callbacks=[],window.API_callback=function(n,t,e){console.log("\ud83e\udd16 ? method",n),console.log("\ud83e\udd16 ? result",t),console.log("\ud83e\udd16 ? data",e),window.API_callbacks.forEach((function(r){r(n,t,e)}))};var V={resolve:function(){},reject:function(n){}},R=function(n){function t(t){var e;return(e=n.call(this)||this).sdk=void 0,e.player=void 0,e.context=void 0,e.graphApi=void 0,e.tournament=void 0,e.rewardedAdInstance=void 0,e.interstitialAdInstance=void 0,e.currentPercentLoading=0,e.bannerCallback={requestBannerAds:V,showBannerAds:V,hideBannerAds:V},e.isShowingBannerAds=!1,e.initSDKAsync=function(){return new(c())((function(n){console.log("initSDKAsync "),window.API_callbacks.push((function(n,t,r){if("getPageInfo"===n){var i=JSON.parse(r),o=Math.max(101,Math.min(759,Number(i.innerWidth)||0)),a=Math.max(101,Math.min(3999,Number(i.innerHeight)||0));e.sdk.UI.setWindowSize(o,.95*a)}})),e.player=new K(e.sdk),e.context=new C(e.sdk),e.rewardedAdInstance=new b(e.sdk,"rewarded"),e.interstitialAdInstance=new b(e.sdk,"interstitial"),e.initCallbackBanner(),e.player.initPlayerAsync().then(n),e.resizeWindow()}))},e.initializeSuccess=function(){return new(c())((function(n){e.initSDKAsync().then(n)}))},e.initializeError=function(n){return new(c())((function(t,e){console.log("Error === ",n),e(n)}))},e.sdk=t,e}(0,i.Z)(t,n);var e=t.prototype;return e.resizeWindow=function(){this.sdk.UI.getPageInfo()},e.getLocale=function(){return"ru"},e.getSDKVersion=function(){return"5.0"},e.getSupportedAPIs=function(){return["getLocale","getSDKVersion","initializeAsync","startGameAsync","setLoadingProgress","getInterstitialAdAsync","getRewardedVideoAsync","getPlatform"]},e.initializeAsync=function(){var n=this;return new(c())((function(t,e){var r=document.getElementById("lds-content");if(r)r.hidden=!1;else{var i='<div id="lds-content"><div id="lds-dual-ring"></div><div id="lds-text"><span id="lds-percent">0</span>% \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e</div></div>';"complete"===document.readyState?n.appendHtml(document.body,i):window.addEventListener("load",(function(){n.appendHtml(document.body,i)}))}var o=n.sdk.Util.getRequestParameters();n.sdk.init(o.api_server,o.apiconnection,(function(){n.initializeSuccess().then(t).catch(e)}),(function(r){n.initializeError(r).then(t).catch(e)}))}))},e.startGameAsync=function(){var n;return this.setLoadingProgress(100),null==(n=document.getElementById("lds-content"))||n.remove(),new(c())((function(n,t){window.FAPI?n():t("Initialize Failed")}))},e.setLoadingProgress=function(n){var t=document.getElementById("lds-percent");t&&(this.currentPercentLoading=Math.round(Math.max(Math.min(n,100),this.currentPercentLoading)),t.innerHTML=""+this.currentPercentLoading,this.currentPercentLoading=n)},e.setSessionData=function(n){},e.shareAsync=function(n){return new(c())((function(t){n.data;window.FAPI.UI.postMediatopic({media:[{type:"text",text:"Play game wood block journey with me!"},{type:"link",url:"https://ok.ru/game/tile-connect"}]},!1),t()}))},e.updateAsync=function(n){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.switchGameAsync=function(n){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.canCreateShortcutAsync=function(){return new(c())((function(n,t){t(!1)}))},e.createShortcutAsync=function(){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.logEvent=function(){return null},e.onPause=function(n){},e.getInterstitialAdAsync=function(n){var t=this;return new(c())((function(n){n(t.interstitialAdInstance)}))},e.getRewardedVideoAsync=function(n){var t=this;return new(c())((function(n){n(t.rewardedAdInstance)}))},e.matchPlayerAsync=function(n){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.checkCanPlayerMatchAsync=function(){return new(c())((function(n,t){t(!1)}))},e.getLeaderboardAsync=function(){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.postSessionScoreAsync=function(n){return new(c())((function(n,t){t(new Error("Unsupported"))}))},e.appendHtml=function(n,t){var e=document.createElement("div");for(e.innerHTML=t;e.children.length>0;)n.appendChild(e.children[0])},e.getPlatform=function(){if(_.ios())return"IOS";if(_.android())return"ANDROID";var n=_.mobile(),t=_.tablet();return n||t?"MOBILE_WEB":"WEB"},e.initCallbackBanner=function(){var n=this;window.API_callbacks.push((function(t,e,r){if("requestBannerAds"===t){var i=n.bannerCallback.requestBannerAds,o=i.reject,a=i.resolve;if("ok"===e)a(),n.bannerCallback.requestBannerAds=(0,p.Z)({},V);else if("error"===e)if("hidden_by_user"===r)setTimeout((function(){n.isShowingBannerAds&&n.loadBannerAdAsync()}),35e3);else setTimeout((function(){n.isShowingBannerAds&&n.loadBannerAdAsync()}),35e3),o(r),n.bannerCallback.requestBannerAds=(0,p.Z)({},V)}"showBannerAds"===t&&("ok"===e?n.bannerCallback.showBannerAds.resolve():n.bannerCallback.showBannerAds.reject(r),n.bannerCallback.showBannerAds=(0,p.Z)({},V)),"hideBannerAds"===t&&("ok"===e?n.bannerCallback.hideBannerAds.resolve():n.bannerCallback.hideBannerAds.reject(r),n.bannerCallback.hideBannerAds=(0,p.Z)({},V))}))},e.loadBannerAdAsync=function(){var n=this;return this.isShowingBannerAds=!0,new(c())((function(t,e){new(c())((function(t,e){n.bannerCallback.requestBannerAds={resolve:t,reject:e},n.sdk.invokeUIMethod("requestBannerAds")})).then((function(){new(c())((function(t,e){n.bannerCallback.showBannerAds={resolve:t,reject:e},n.sdk.invokeUIMethod("showBannerAds","bottom")})).then(t).catch(e)})).catch(e)}))},e.hideBannerAdAsync=function(){var n=this;return this.isShowingBannerAds=!1,new(c())((function(t,e){n.bannerCallback.hideBannerAds={resolve:t,reject:e},n.sdk.invokeUIMethod("hideBannerAds")}))},e.getTournamentAsync=function(){return c().reject(new Error("Unsupported"))},e.inviteAsync=function(n){return new(c())((function(t,e){var r=n.text,i="\u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u0438 \u0438\u0433\u0440\u0430\u0439 \u0432 \u041c\u0430\u0442\u0447 \u041f\u043b\u0438\u0442\u043a\u0438 \u0441\u043e \u043c\u043d\u043e\u0439!";"string"===typeof r&&(i=r),"object"===typeof r&&r.default&&(i=r.default),window.FAPI.UI.showInvite(i),t()}))},e.shareLinkAsync=function(n){return c().reject(new Error("Unsupported"))},e.showGameRating=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c().reject(new Error("Unsupported")));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),t}(u),H=R;"FBInstant"in window&&(window.GameSDK=new A(window.FBInstant)),"FAPI"in window&&(window.GameSDK=new H(window.FAPI)),window.FBInstant=window.GameSDK}}]);