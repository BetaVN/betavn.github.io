import"../bundle/monitor.js";import"../bundle/game.js";import"../bundle/engine.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const L=["INVALID_PARAM","SAME_CONTEXT","NETWORK_FAILURE","PENDING_REQUEST","CLIENT_UNSUPPORTED_OPERATION"];var T=window.location.href,O=T.split("?"),v=O[1].split("&"),K=v[0].split("="),M=v[1].split("="),z=v[2].split("="),H=v[3].split("="),Q=K[1],V=z[1],q=M[1],J=H[1],g=window.gameName,y=null,D=null,_=null,p=null,S=null,W=window.replayEvent;window.replayEvent=function(){if(S){console.log("Leaderboard is open, close it and show replay ad after leaderboard is closed"),window.showGame();var n=S;S=null,n();return}console.log("Leaderboard is not open, show replay ad"),W()};function F(n){var e=window.replayObj.adUnitName,t=window.rewardObj.adUnitName;n.adInstance?.registerCallback("onAdLoadSucceed",r=>{if(console.log("onAdLoadSucceeded Rewarded CALLBACK",r),n.adUnitName===e){if(window.is_replay_noFill=!1,!_){console.warn("replay load resolve is null");return}setTimeout(()=>{_(),_=null},500)}if(n.adUnitName===t){if(window.is_rewarded_noFill=!1,!y){console.warn("reward load resolve is null");return}setTimeout(()=>{y(),y=null},500)}}),n.adInstance?.registerCallback("onAdLoadFailed",r=>{if(console.log("onAdLoadFailed Rewarded CALLBACK",r),n.adUnitName===e){if(window.is_replay_noFill=!0,window.replayInstance=null,!p){console.warn("replay load reject is null");return}setTimeout(()=>{p(),p=null},500)}if(n.adUnitName===t){if(window.is_rewarded_noFill=!0,window.rewardInstance=null,!D){console.warn("reward load reject is null");return}setTimeout(()=>{y(),y=null,D=null},500)}}),n.adInstance?.registerCallback("onAdDisplayed",r=>{console.log("onAdDisplayed Rewarded CALLBACK",r)}),n.adInstance?.registerCallback("onAdClosed",r=>{console.log("onAdClosed Rewarded CALLBACK",r),n.adUnitName==t&&(window.isRewardedAdClosedByUser=!0),A(),window.isRewardGranted=!1,window.isRewardedAdClosedByUser=!1}),n.adInstance?.registerCallback("onAdClicked",r=>{console.log("onAdClicked Rewarded CALLBACK",r)}),n.adInstance?.registerCallback("onRewardsUnlocked",r=>{console.log("onRewardsUnlocked Rewarded CALLBACK",r),n.adUnitName===t&&(window.isRewardGranted=!0)})}function A(){window._triggerReason==="replay"?(window.replayInstance=null,window.handleNextLevel()):window._triggerReason==="reward"&&(window._triggerReason="",window.rewardInstance=null,!window.isRewardGranted&&window.isRewardedAdClosedByUser?window.handleRewardedFail():window.handleRewardedSuccess())}function X(){$("#bannerOverlay").css("display","none")}function Y(n,e){if(y=n,D=e,!window.GlanceGamingAdInterface){y();return}return window.rewardInstance=window.GlanceGamingAdInterface.loadRewardedAd(window.rewardObj,F),window.rewardInstance}function Z(){if(window._triggerReason="reward",!window.GlanceGamingAdInterface){A();return}window.is_rewarded_noFill?A():window.GlanceGamingAdInterface.showRewarededAd(window.rewardInstance)}function j(n,e){if(_=n,p=e,!window.GlanceGamingAdInterface){p();return}return window.replayInstance=window.GlanceGamingAdInterface.loadRewardedAd(window.replayObj,F),window.replayInstance}function ee(){if(window._triggerReason="replay",!window.GlanceGamingAdInterface){A();return}window.is_replay_noFill?A():window.GlanceGamingAdInterface.showRewarededAd(window.replayInstance)}function G(n){return Promise.resolve({isRewarded:n,loadAsync:function(){return new Promise((t,r)=>{this.isRewarded?(console.log("load rewarded ad"),Y(t,r)):(console.log("load replay ad"),j(t,r))})},showAsync:function(){return new Promise((t,r)=>{this.isRewarded?(window.handleRewardedFail=()=>{if(window.GameCore&&!window.isRewardGranted&&window.isRewardedAdClosedByUser){const o=new window.GameCore.Ads.AdError("USER_INPUT","User close rewarded ad");r(o);return}r()},window.handleRewardedSuccess=t,Z()):(window.handleNextLevel=t,ee())})},getPlacementID:function(){return""}})}window.pauseEvent=function(){console.warn("pauseEvent: method is not implemented")};window.resumeEvent=function(){console.warn("resumeEvent: method is not implemented")};window.replayGameEvent=function(){console.warn("replayGameEvent: method is not implemented")};window.gotoHomeEvent=function(){console.warn("gotoHomeEvent: method is not implemented")};window.nextLevelEvent=function(){console.warn("nextLevelEvent: method is not implemented")};window.gotoLevel=function(e){console.warn("gotoLevel: method is not implemented")};window.handleNextLevel=function(){console.warn("handleNextLevel: method is not implemented")};window.handleRewardedFail=function(){console.warn("handleRewardedFail: method is not implemented")};window.handleRewardedSuccess=function(){console.warn("handleRewardedSuccess: method is not implemented")};window.enableSound=function(e){console.warn("enableSound: method is not implemented")};window.getLoadingPerc=function(){console.warn("getLoadingPerc: method is not implemented")};let c=[],b=c.length,E="Default Name",m="1",ne="1",P="",R="1";var x="1",N="1",k="1",C="1";function U(){return L[Math.floor(L.length*Math.random())]}const a={log:function(){},getQueryString:function(){const e={};return location.search&&location.search.substr(1).split("&").forEach(t=>{const r=t.split("="),o=r[0],i=r[1]&&decodeURIComponent(r[1]);(e[o]=e[o]||[]).push(i)}),e},returnAndLog:function(e){return a.log(e),e},returnUserData:function(e){return d.__mockState.initialized?a.returnAndLog(e):(a.log("User Data is not available until startGameAsync has resolved"),null)},getFromLocalStorage:function(e,t){return new Promise(r=>{let o=localStorage.getItem(e);const i={};o&&(o=JSON.parse(o),t.forEach(s=>{o[s]!=="undefined"&&(i[s]=o[s])})),a.log(i),r(i)})},writeToLocalStorage:function(e,t){return new Promise(r=>{const i={...JSON.parse(localStorage.getItem(e)),...t};a.log(JSON.stringify(i)),localStorage.setItem(e,JSON.stringify(i)),r()})}},d={__mockState:{initialized:!1},leaderboardEntry:(n,e,t=!1)=>({getRank:function(){return n},getScore:function(){return e},getExtraData:function(){return JSON.stringify({})},getPlayer:function(){return d.leaderboardPlayer(n,t)},getFormattedScore:function(){return""},getTimestamp:function(){return 0}}),leaderboardPlayer:(n,e,t)=>({getID:function(){return t?d.player.getID():"Rank #"+n},getName:function(){return t?"You":"Rank #"+n},getPhoto:function(){return""}}),player:{getName:function(){return a.returnUserData(E)},getPhoto:function(){return a.returnUserData(P)},getID:function(){return a.returnUserData(m)},getGlanceImpId:function(){return a.returnUserData(x)},getGlanceApiKey:function(){return a.returnUserData(N)},getGlanceId:function(){return a.returnUserData(k)},getGlanceGpId:function(){return a.returnUserData(C)},getASIDAsync:function(){return a.returnUserData(ne)},getDataAsync:function(e){return a.log("player.getDataAsync"),a.getFromLocalStorage("sdkPlayerData."+g,e)},setDataAsync:function(e){return a.log("player.setDataAsync"),a.writeToLocalStorage("sdkPlayerData."+g,e)},getStatsAsync:function(e){return a.log("player.getStatsAsync"),e||(e=[]),a.getFromLocalStorage("sdkPlayerStats."+g,e)},setStatsAsync:function(e){return a.log("player.setStatsAsync"),a.writeToLocalStorage("sdkPlayerStats."+g,e)},incrementStatsAsync:function(e){return new Promise(t=>{a.getFromLocalStorage("sdkPlayerStats."+g,Object.keys(e)).finally(r=>{for(const o in r)r[o]+=e[o];a.writeToLocalStorage("sdkPlayerStats."+g,r).finally(()=>{t()})})})},flushDataAsync:function(){return new Promise(e=>{a.log("player.flushDataAsync"),a.writeToLocalStorage("sdkPlayerData."+g,{}).finally(()=>{e()})})},getConnectedPlayersAsync:function(){return new Promise(e=>{let t=[];if(d.__mockState.initialized)for(let o=0;o<b;o++){const i=c[o],s=i.playerId,l=i.name,u=i.photo;t.push({id:s,name:l,photo:u,getID(){return this.id},getName(){return this.name},getPhoto(){return this.photo}})}else a.log("getConnectedPlayersAsync","Connected players data is not available before startGameAsync resolves");a.log("getConnectedPlayersAsync","players: ",t),e(t)})},getSignedPlayerInfoAsync:function(){return new Promise(e=>{e({getSignature:function(){return R},getPlayerID:function(){return m}})})}},context:{id:a.getQueryString().context_source_id||"",type:a.getQueryString().context_type||"SOLO",getID:function(){return d.context.id},chooseAsync:function(){return new Promise((e,t)=>{const r=f('<div style="z-index: 1000000000; display: flex; align-items: center; height: 100%; width: 56vh;max-width:100vh; background-color: rgba(31, 120, 136, 0.48); position: absolute;margin:auto;left:0;right:0"></div'),o=f('<button style="width:100px;height:70px;cursor:pointer;position:absolute;right: 10px;top:10px">Close</button>');o.onclick=i=>{i.stopPropagation(),i.preventDefault(),t({code:"USER_INPUT",message:"User close popup!"}),r.remove()},r.appendChild(o),a.log("context.chooseAsync"),d.context.id="123456789",d.context.type="THREAD",setTimeout(()=>{if(Math.random()*100<window.GameCore.Configs.MatchMockFailRate){t({code:U(),message:"Random error"});return}document.body.append(r)},500)})},switchAsync:function(e){return new Promise(t=>{a.log("context.switchAsync"),d.context.id=e,d.context.type="THREAD",t(e)})},createAsync:function(){return new Promise((e,t)=>{const r=c.filter(l=>l.playerId!=m)[0],o=f(`<div style="height: 40vh;width: 53vh;max-width: 95vw;position:absolute;background-color: rgba(31, 120, 136, 0.48);border-radius: 2vh;margin: auto;right: 0;left: 0;top: 0;bottom: 0;display: flex;flex-direction:column;justify-content:space-evenly;"><div style="display:flex; justify-content:center; width: 100%"><div style="width: 100px;height: 100px;overflow: hidden;border-radius: 50%;"><img style="height:100%"src="${P}"/></div><div style="width: 100px;height: 100px;overflow: hidden;border-radius: 50%;"><img style="height:100%"src="${r.photo}"/></div></div><p style="color: white;font-size: 21px;text-align: center;margin: 10px 40px 10px 40px;">Send an invitation to play Game<br>through Messenger.</p></div>`),i=f('<button style="border: none;background-color: #1877f2;color: #fff;width: 90%;height: 50px;border-radius: 15px;margin-left: auto;margin-right: auto;font-size: 20px;cursor: pointer;">Play</button>');i.onclick=l=>{l.stopPropagation(),l.preventDefault(),a.log("context.chooseAsync"),d.context.id="123456789",d.context.type="THREAD",e(d.context.id),o.remove()};const s=f('<button style="border: none;background-color: #1877f2;color: #fff;width: 80px;height: 50px;font-size: 20px;cursor: pointer;position:absolute;top:10px;right:10px;border-radius: 10px;">Close</button>');s.onclick=l=>{l.stopPropagation(),l.preventDefault(),t({code:"USER_INPUT",message:"User close popup!"}),o.remove()},o.append(i),o.append(s),setTimeout(()=>{if(Math.random()*100<window.GameCore.Configs.MatchMockFailRate){t({code:U(),message:"Random error"});return}document.body.append(o)},500)})},getType:function(){return a.returnAndLog(d.context.type)},isSizeBetween:function(){return a.returnAndLog(!1)},getPlayersAsync:function(){return new Promise(e=>{const t=c.map(r=>({getID:function(){return r.playerId},getName:function(){return r.name},getPhoto:function(){return r.photo}}));a.log("context.getPlayersAsync","players: ",t),e(t)})}},getLocale:function(){var e=a.getQueryString();let t=window.__GAME_LANGUAGE||"en";return e.hl&&e.hl.length>0&&(t=e.hl[0]),console.log({langCode:t}),t+"_VN"},initializeAsync:function(){window.addLoader();let e=localStorage.getItem("randomUserName");"addLeaderBoard"in window&&(window.addLeaderBoard(),e||(e=window.faker.name.findName(),localStorage.setItem("randomUserName",e))),c=[{name:e,photo:"",playerId:Q,signature:"1",impressionId:V,apiKey:q,glanceId:J,gpID:window.gpID}],window.__glancePlayerData=c[0];var t=0;return b=c.length,E=c[t].name,m=c[t].playerId,P=c[t].photo,R=c[t].signature,x=c[t].impressionId,N=c[t].apiKey,k=c[t].glanceId,C=c[t].gpID,new Promise(function(r){const i=Date.now(),s=setInterval(function(){if(Date.now()-i<5e3){if(!window.isAdSDKLoaded||window.GlanceGamingAdInterface&&(!window.GlanceGamingAdInterface.isLibraryInitialized||!window.GlanceGamingAdInterface.isLibraryInitialized()||!window.GlanceGamingAdInterface.showStickyBannerAd||!window.GlanceGamingAdInterface.loadRewardedAd))return}else console.log("maximum time wait for the ad sdk loading");window.isAdSDKLoaded=!0,a.log("initializeAsync"),d.__mockState.initialized=!0,clearInterval(s),r()})})},setLoadingProgress:function(e){window.progressBar(e)},startGameAsync:function(){return new Promise(e=>{a.log("startGameAsync","Showing game start dialog"),d.__mockState.initialized=!0,e()})},quit:function(){a.log("QUIT was called. At this point the game will exit")},updateAsync:function(e){return re(e.data||{}),new Promise((t,r)=>{a.log("updateAsync"),e.image?t():r()})},getEntryPointData:function(){const e=a.getQueryString();return a.log("getEntryPointData","query string: ",e,"entry point data: ",e.entryPointData),e.entryPointData?JSON.parse(decodeURIComponent(e.entryPointData[0])):null},getEntryPointAsync:function(){return new Promise(e=>{e("admin_message")})},setSessionData:function(e){a.log("setSessionData","Object to be persisted",e,"(Please note, while using the mock SDK, setSessionData will have no effect.)")},getPlatform:function(){return"WEB"},getSDKVersion:function(){return"6.3"},getSupportedAPIs:function(){const e=[];for(let t in d)e.push(t);for(let t in d.player)e.push(`player.${t}`);for(let t in d.context)e.push(`context.${t}`);return e},shareAsync:function(){return!0},switchGameAsync:function(){return Promise.reject(new Error("sdkFakeFBInstant.switchAsync is not available in the Mocked SDK."))},logEvent:function(){return null},onPause:function(e){window.onblur=()=>{a.log("onPause","Interruption event triggered"),e()}},getLeaderboardAsync:function(){return new Promise((e,t)=>{if(!("getLeaderBoardData"in window)){t("getLeaderBoardData is not defined");return}window.getLeaderBoardData(r=>{if(typeof r!="object"){t();return}if(Array.isArray(r)){t();return}const o=Number(String(r.user_current_rank).split("/")[0]),i=Number(r.current_user_max_score.scores__max),s=Number(r.current_user_max_score.scores__max);e({getEntriesAsync:function(u=20,h=0){const I=[];for(let w=h;w<r.score_details.length;w++)I.push(d.leaderboardEntry(w+1,Number(r.score_details[w].scores),w<u+h&&w+1==o));return Promise.resolve(I)},getConnectedPlayerEntriesAsync:function(){return Promise.resolve([])},getPlayerEntryAsync:function(){return Promise.resolve(d.leaderboardEntry(o,i,!0))},setScoreAsync:function(u){return u<=s?Promise.resolve(d.leaderboardEntry(o,s,!0)):new Promise((h,I)=>{window.sendLeaderBoardData(u,w=>{w==="error"?I("error"):h(d.leaderboardEntry(o,u,!0))})})}})})})},postSessionScoreAsync:function(){return Promise.resolve()},loadBannerAdAsync:function(e){clearInterval(this.waitAdInterval),this.waitAdInterval=setInterval(()=>{if(window.GlanceGamingAdInterface&&window.GlanceGamingAdInterface?.isLibraryInitialized())return clearInterval(this.waitAdInterval),console.log("loadBannerAdAsync",window.StickyObj),window.refreshStickyBannerAd(),window.StickyBannerInstance&&window.StickyBannerInstance.destroyAd(),window.StickyBannerInstance=window.GlanceGamingAdInterface.showStickyBannerAd(window.StickyObj,window.bannerCallbacks),window.StickyBannerInstance},100)},hideBannerAdAsync:function(){return X(),!0},showLeaderBoard:function(e,t){return S=t,window.showLeaderBoard(e)},matchPlayerAsync:function(){return Promise.reject()},getRewardedVideoAsync:function(e){return G(!0)},getInterstitialAdAsync:function(e){return G(!1)}};window.FBInstant=d;const te=n=>encodeURIComponent(JSON.stringify(n)),re=n=>{const e=c[0].playerId===m?c[1].playerId:c[0].playerId;console.log(`Link to receive message: 
${document.location.origin+document.location.pathname}?playerId=${e}&context_source_id=123456789&context_type=THREAD&entryPointData=${te(n)}}`)};function f(n){var e=document.createElement("div");return e.innerHTML=n.trim(),e.firstChild}function oe(){let n=1;window.FBInstant.initializeAsync().then(function(){if(window.focus(),window.__GA_CONFIG){const e=window.FBInstant.player.getID();window.FBInstant.getEntryPointAsync().then(function(t){B(e,t)}).catch(function(){B(e,"no_entry")})}else window.__analyticsInitiated=!0;window.__fbInstantInitiated=!0,window.__fbInstantLoadingTimer=setInterval(function(){window.FBInstant.setLoadingProgress(n++),n>=30&&clearInterval(window.__fbInstantLoadingTimer)},80)})}function B(n,e){const t=window.__GA_CONFIG.BUILD_VERSION,r=window.__GA_CONFIG.GA_MEASUREMENT_ID;if(r=="null"){window.__analyticsInitiated=!0;return}const o=window.FBInstant.getEntryPointData()||{},i=o.fbig_ad_id,s=o.fbig_adset_id,l=o.fbig_campaign_id,u=document.createElement("script");u.async=!0,u.src="https://www.googletagmanager.com/gtag/js?id="+r,document.head.appendChild(u),window.gtag("set","client_id",`100.${n}`),window.gtag("set","user_id",n),window.gtag("set","send_page_view",!1),window.gtag("js",new Date),window.gtag("config",r,{cookie_flags:"SameSite=None;Secure",build:t,medium:e,campaign:l,groups:"GA"}),window.gtag("set","user_properties",{user_id:n,traffic_source:e,campaign_id:l,adset_id:s,ad_id:i,glance_imp_id:window.FBInstant.player.getGlanceImpId(),glance_api_key:window.FBInstant.player.getGlanceApiKey(),glance_id:window.FBInstant.player.getGlanceId(),glance_gp_id:window.FBInstant.player.getGlanceGpId()}),window.gtag("event","app_launch",{send_to:"GA"}),window.__analyticsInitiated=!0}oe();
