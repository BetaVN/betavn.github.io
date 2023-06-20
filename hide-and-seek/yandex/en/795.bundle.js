"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[795],{642:function(e,t,i){i.r(t),i.d(t,{default:function(){return R}});var n=i(24),l=i(2),o=i(21),r=i.n(o),s=i(55),a=i.n(s),c=i(115),u=i.n(c),v=i(626),h=i(143),f=i(62),d=i(54),p=i(652),g=i(45),L=i(47),b=i.n(L),w=i(64),m=i.n(w),E=i(149),O=i.n(E),I=function(){function e(e){this.inputLevelText=void 0,this.inputLevelList=void 0,this.inputLevelJSON=void 0,this.currentPositionOffset=void 0,this.currentEndPoint=void 0,this.currentIDOffset=void 0,this.outputLevelObj=void 0,this.outputObjectGroup=void 0,this.outputSymbolLayer=void 0,this.inputLevelText=e,this.inputLevelJSON=[],this.parseLevelList()}var t=e.prototype;return t.parseLevelList=function(){var e=this.inputLevelText.split(" "),t=[];e.forEach((function(e){var i=parseInt(e);t.push(i)})),this.inputLevelList=t},t.buildLevel=function(){var e=(0,n.Z)(r().mark((function e(){var t,i,n,l,o,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInputLevelJSON();case 2:if(!(this.inputLevelJSON.length<1)){e.next=4;break}return e.abrupt("return");case 4:if(this.outputLevelObj=(0,g.Z)({},this.inputLevelJSON[0]),t=this.getLevelObjectGroup(this.outputLevelObj),i=this.getSymbolLayer(this.outputLevelObj),n=this.getLevelGoalObject(this.outputLevelObj),t){e.next=10;break}return e.abrupt("return");case 10:if(i){e.next=12;break}return e.abrupt("return");case 12:if(n){e.next=14;break}return e.abrupt("return");case 14:for(this.outputObjectGroup=t,this.outputSymbolLayer=i,this.currentEndPoint=n,this.currentPositionOffset=this.currentEndPoint.x+this.currentEndPoint.width,this.currentIDOffset=this.outputLevelObj.nextobjectid,this.removeGoalObjectGroup(),l=1;l<this.inputLevelJSON.length;l++)o=!1,l==this.inputLevelJSON.length-1&&(o=!0),this.mergeLevelJSON(this.inputLevelJSON[l],o);return s=b()(this.outputLevelObj),e.abrupt("return",s);case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.getInputLevelJSON=function(){var e=(0,n.Z)(r().mark((function e(){var t,i,n,l,o,s=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],i=0;case 2:if(!(i<this.inputLevelList.length)){e.next=9;break}return n=this.inputLevelList[i],e.next=6,fetch("./assets/jsons/levels/level"+n+".json").then((function(e){t.push(e)})).catch((function(e){}));case 6:i++,e.next=2;break;case 9:l=0;case 10:if(!(l<t.length)){e.next=17;break}return o=t[l],e.next=14,o.json().then((function(e){s.inputLevelJSON.push(e)})).catch((function(e){}));case 14:l++,e.next=10;break;case 17:return e.abrupt("return");case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.mergeLevelJSON=function(e,t){var i=this.getLevelObjectGroup(e),n=this.getSymbolLayer(e),l=this.getLevelGoalObject(e);i&&n&&l&&(this.appendNewObjects(i,t),this.appendNewSymbols(n),this.currentEndPoint=l,this.currentPositionOffset+=this.currentEndPoint.x+this.currentEndPoint.width,this.currentIDOffset+=e.nextobjectid,this.outputLevelObj.width+=e.width)},t.appendNewSymbols=function(e){var t=this;e.objects&&e.objects.forEach((function(e){var i;"start-point"!==e.name&&(e.x+=t.currentPositionOffset,e.id+=t.currentIDOffset,null==(i=t.outputSymbolLayer.objects)||i.push(e))}))},t.appendNewObjects=function(e,t){var i=this;e.layers&&e.layers.forEach((function(e){var n,l=e;if((t||"goal-obj"!==l.name)&&l.objects){var o,r,s=!1;if(null==(n=i.outputObjectGroup.layers)||n.forEach((function(e){e.name===l.name&&(o=e,s=!0)})),s)l.objects.forEach((function(e){var t;if(e.x+=i.currentPositionOffset,e.id+=i.currentIDOffset,e.visible){if(m()(t=l.name).call(t,"interactable-obj")){if(!e.properties)return;e.properties.forEach((function(e){if("triggerID"===e.name){var t=e.value,n=i.triggerIDHandle(t);if(!n)return;e.value=n}}))}o.objects&&o.objects.push(e)}}));else l.objects.forEach((function(e){var t;if(e.x+=i.currentPositionOffset,e.id+=i.currentIDOffset,e.visible&&m()(t=l.name).call(t,"interactable-obj")){if(!e.properties)return;e.properties.forEach((function(e){if("triggerID"===e.name){var t=e.value,n=i.triggerIDHandle(t);if(!n)return;e.value=n}}))}})),null==(r=i.outputObjectGroup.layers)||r.push(l)}}))},t.getLevelObjectGroup=function(e){var t=e.layers[0],i=!1;if(e.layers.forEach((function(e){"objects"===e.name&&(t=e,i=!0)})),i)return t},t.getSymbolLayer=function(e){var t=e.layers[0],i=!1;if(e.layers.forEach((function(e){"symbol"===e.name&&(t=e,i=!0)})),i)return t},t.removeGoalObjectGroup=function(){var e,t,i=-1;(null==(e=this.outputObjectGroup.layers)||e.forEach((function(e,t){"goal-obj"===e.name&&(i=t)})),i>=0)&&(null==(t=this.outputObjectGroup.layers)||O()(t).call(t,i,1))},t.getLevelGoalObject=function(e){var t,i=e.layers[0],n=!1;if(e.layers.forEach((function(e){"objects"===e.name&&(i=e,n=!0)})),n&&i){var l=i,o=!1;if(null==(t=i.layers)||t.forEach((function(e){"goal-obj"===e.name&&(l=e,o=!0)})),o&&l.objects)return l.objects[0]}},t.triggerIDHandle=function(e){var t=this;if("number"!=typeof e&&"string"!=typeof e)return 0;if("number"==typeof e)return e+this.currentIDOffset;var i=e.split(", "),n=[];i.forEach((function(e){var i=parseInt(e)+t.currentIDOffset;n.push(i)}));for(var l="",o=0;o<n.length;o++)l+=n[o],o<n.length-1&&(l+=", ");return l},e}(),M=I,j=i(38),y=i.n(j),S={START:{PATH:"../../../../assets/jsons/logic-level/start.json"},END:{PATH:"../../../../assets/jsons/logic-level/end.json"},TILE_WIDTH:29,EASY_LOGIC:{NUM_EASY:37,DIR:"../../../../assets/jsons/logic-level/easy/",FILENAME:["logic001-w50-level1","logic002-w50-level2","logic003-w45-level2","logic004-w34-level3","logic005-w30-level3","logic006-w40-level4","logic007-w46-level5","logic008-w20-level6","logic009-w14-level7","logic010-w20-level8","logic011-w23-level8","logic012-w50-level8","logic013-w32-level8","logic014-w15-level9","logic015-w20-level9","logic016-w44-level9","logic017-w40-level15","logic018-w35-level16","logic019-w23-level19","logic020-w20-level19","logic021-w50-level20","logic022-w27-level21","logic023-w18-level25","logic024-w20-level25","logic025-w20-level25","logic026-w19-level28","logic027-w18-level28","logic028-w18-level33","logic029-w19-level35","logic030-w55-level38","logic031-w46-level40","logic032-w20-level40","logic033-w25-level46","logic034-w26-level48","logic035-w15-level48","logic036-w29-level56","logic037-w28-level57"]},MEDIUM_LOGIC:{NUM_MEDIUM:33,DIR:"../../../../assets/jsons/logic-level/medium/",FILENAME:["logic001-w35-level4","logic002-w45-level5","logic003-w45-level5","logic004-w30-level7","logic005-w25-level10","logic006-w38-level10","logic007-w33-level11","logic008-w60-level12","logic009-w35-level13","logic010-w45-level17","logic011-w43-level18","logic012-w20-level25","logic013-w30-level27","logic014-w25-level32","logic015-w36-level33","logic016-w22-level39","logic017-w40-level42","logic018-w32-level44","logic019-w25-level44","logic020-w30-level45","logic021-w23-level46","logic022-w55-level52","logic023-w35-level57","logic024-w35-level59","logic025-w30-level59","logic026-w37-level60","logic027-w35-level61","logic028-w40-level63","logic029-w35-level63","logic030-w50-level64","logic031-w37-level65","logic032-w45-level66","logic033-w20-level66"]},HARD_LOGIC:{NUM_HARD:1,DIR:"../../../../assets/jsons/logic-level/hard/",FILENAME:["logic001-w50-level50"]},IDLE_LOGIC:{NUM_IDLE:35,DIR:"../../../../assets/jsons/logic-level/idle/",FILENAME:["logic001-w18-level1","logic002-w18-level3","logic003-w10-level3","logic004-w40-level4","logic005-w42-level6","logic006-w55-level7","logic007-w25-level7","logic008-w13-level8","logic009-w45-level8","logic010-w50-level9","logic011-w20-level9","logic012-w35-level9","logic013-w20-level9","logic014-w20-level9","logic015-w07-level10","logic016-w08-level10","logic017-w17-level10","logic018-w11-level10","logic019-w10-level10","logic020-w22-level12","logic021-w23-level12","logic022-w25-level12","logic023-w23-level17","logic024-w15-level19","logic025-w32-level23","logic026-w20-level35","logic027-w20-level37","logic028-w10-level37","logic029-w7-level45","logic030-w15-level48","logic031-w44-level51","logic032-w15-level56","logic033-w10-level56","logic034-w20-level61","logic035-w19-level64"]}},N=function(e){function t(t){var i;return(i=e.call(this,"")||this).inputLevelIDs=void 0,i.outputName=void 0,i.currentEndPointX=void 0,i.inputLevelIDs=t,i}(0,l.Z)(t,e);var i=t.prototype;return i.parseLevelList=function(){},i.buildLevel=function(){var e=(0,n.Z)(r().mark((function e(){var t,i,n,l,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInputLevelJSON();case 2:if(!(this.inputLevelJSON.length<1)){e.next=4;break}return e.abrupt("return");case 4:if(this.outputLevelObj=(0,g.Z)({},this.inputLevelJSON[0]),t=this.getLevelObjectGroup(this.outputLevelObj),i=this.getSymbolLayer(this.outputLevelObj),t){e.next=9;break}return e.abrupt("return");case 9:if(i){e.next=11;break}return e.abrupt("return");case 11:for(this.outputObjectGroup=t,this.outputSymbolLayer=i,this.currentEndPointX=this.inputLevelJSON[0].tilewidth*this.inputLevelJSON[0].width,this.currentPositionOffset=this.currentEndPointX,this.currentIDOffset=this.outputLevelObj.nextobjectid,this.removeGoalObjectGroup(),n=1;n<this.inputLevelJSON.length;n++)l=!1,n==this.inputLevelJSON.length-1&&(l=!0),this.mergeLevelJSON(this.inputLevelJSON[n],l);return o=b()(this.outputLevelObj),e.abrupt("return",o);case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.getInputLevelJSON=function(){var e=(0,n.Z)(r().mark((function e(){var t,i,n,l,o,s=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],i=0;case 2:if(!(i<this.inputLevelIDs.length)){e.next=9;break}return n=this.inputLevelIDs[i],e.next=6,fetch(n).then((function(e){t.push(e)})).catch((function(e){}));case 6:i++,e.next=2;break;case 9:l=0;case 10:if(!(l<t.length)){e.next=17;break}return o=t[l],e.next=14,o.json().then((function(e){s.inputLevelJSON.push(e)})).catch((function(e){}));case 14:l++,e.next=10;break;case 17:return e.abrupt("return");case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.mergeLevelJSON=function(e,t){var i=this.getLevelObjectGroup(e),n=this.getSymbolLayer(e);i&&n&&(this.appendNewObjects(i,t),this.appendNewSymbols(n),this.currentEndPointX=e.tilewidth*e.width,this.currentPositionOffset+=this.currentEndPointX,this.currentIDOffset+=e.nextobjectid,this.outputLevelObj.width+=Math.ceil(e.tilewidth*e.width/this.outputLevelObj.tilewidth))},t}(M),x=N,D=3,A=7,C=10,G=function(){function e(e){this.easyMaps=void 0,this.mediumMaps=void 0,this.hardMaps=void 0,this.idleMaps=void 0,this.config=void 0,this.config=e,this.easyMaps=this.getLogicLevelEasy(),this.mediumMaps=this.getLogicLevelMedium(),this.hardMaps=this.getLogicLevelHard(),this.idleMaps=this.getLogicLevelIdle()}var t=e.prototype;return t.buildMaps=function(){var e=(0,n.Z)(r().mark((function e(){var t,i,n,l=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],i=r().mark((function e(){var i,n,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.getMapByConfig(),o=new x(i),e.next=4,o.buildLevel().then((function(e){n=e}));case 4:n&&t.push(n);case 5:case"end":return e.stop()}}),e)})),n=1;case 3:if(!(n<=this.config.numOfLevelsGen)){e.next=8;break}return e.delegateYield(i(),"t0",5);case 5:n++,e.next=3;break;case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.getLogicLevelNameByLength=function(e,t){var i=this,n=[],l=/w\d{2}\b/;return S.EASY_LOGIC.FILENAME.forEach((function(o){i.isFileNameSuitable(o,e,t,l)&&n.push(S.EASY_LOGIC.DIR+o)})),S.HARD_LOGIC.FILENAME.forEach((function(o){i.isFileNameSuitable(o,e,t,l)&&n.push(S.HARD_LOGIC.DIR+o)})),S.MEDIUM_LOGIC.FILENAME.forEach((function(o){i.isFileNameSuitable(o,e,t,l)&&n.push(S.MEDIUM_LOGIC.DIR+o)})),S.IDLE_LOGIC.FILENAME.forEach((function(o){i.isFileNameSuitable(o,e,t,l)&&n.push(S.IDLE_LOGIC.DIR+o)})),n},t.getLogicLength=function(e){var t=e.match(/w\d{2}\b/);return t?parseInt(t[0].substring(1))*S.TILE_WIDTH:0},t.isFileNameSuitable=function(e,t,i,n){var l=e.match(n);if(l){var o=parseInt(l[0].substring(1));if(o>=t&&o<=i)return!0}return!1},t.getLogicLevelEasy=function(){var e;return y()(e=S.EASY_LOGIC.FILENAME).call(e,(function(e){return S.EASY_LOGIC.DIR+e}))},t.getLogicLevelMedium=function(){var e;return y()(e=S.MEDIUM_LOGIC.FILENAME).call(e,(function(e){return S.MEDIUM_LOGIC.DIR+e}))},t.getLogicLevelHard=function(){var e;return y()(e=S.HARD_LOGIC.FILENAME).call(e,(function(e){return S.HARD_LOGIC.DIR+e}))},t.getLogicLevelIdle=function(){var e;return y()(e=S.IDLE_LOGIC.FILENAME).call(e,(function(e){return S.IDLE_LOGIC.DIR+e}))},t.getMapByConfig=function(){var e=[];e.push(S.START.PATH);for(var t=0,i=1;t<this.config.maxDistance;)if(Math.random()>1-this.config.idleLogicRatio){var n=Math.floor(Math.random()*S.IDLE_LOGIC.NUM_IDLE);e.push(this.idleMaps[n]+".json"),t+=this.getLogicLength(this.idleMaps[n])}else if(i%this.config.difficulty!==0){var l=Math.floor(Math.random()*S.EASY_LOGIC.NUM_EASY);e.push(this.easyMaps[l]+".json"),t+=this.getLogicLength(this.easyMaps[l]),i++}else{var o=Math.floor(Math.random()*S.MEDIUM_LOGIC.NUM_MEDIUM);e.push(this.mediumMaps[o]+".json"),t+=this.getLogicLength(this.mediumMaps[o]),i=0}return e.push(S.END.PATH),e},t.getEasyMap=function(){var e=[];e.push(S.START.PATH);for(var t=Math.floor(Math.random()*A+D),i=0;i<t;i++)if(Math.random()>.7){var n=Math.floor(Math.random()*S.IDLE_LOGIC.NUM_IDLE);e.push(this.idleMaps[n]+".json")}else{var l=Math.floor(Math.random()*S.EASY_LOGIC.NUM_EASY);e.push(this.easyMaps[l]+".json")}return e.push(S.END.PATH),e},t.getMediumMap=function(){var e=[];e.push(S.START.PATH);for(var t=Math.floor(Math.random()*C+D),i=0;i<t;i++){var n=Math.random();if(n>.7){var l=Math.floor(Math.random()*S.IDLE_LOGIC.NUM_IDLE);e.push(this.idleMaps[l]+".json")}else if(n>.5){var o=Math.floor(Math.random()*S.EASY_LOGIC.NUM_EASY);e.push(this.easyMaps[o]+".json")}else{var r=Math.floor(Math.random()*S.MEDIUM_LOGIC.NUM_MEDIUM);e.push(this.mediumMaps[r]+".json")}}return e.push(S.END.PATH),e},e}(),_=G,k=function(e){function t(){for(var t,i,n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(i=e.call.apply(e,a()(t=[this]).call(t,l))||this).pane=void 0,i.configFolder=void 0,i.mapJSON=void 0,i.mapLevelString=void 0,i.endlessBuildButton=void 0,i.buildButton=void 0,i.saveButton=void 0,i.testButton=void 0,i.levelList=void 0,i.configLogicFolder=void 0,i.logicJsonMaps=[],i.saveLogicButton=void 0,i.testLogicButton=void 0,i.difficulty=void 0,i.ratio=void 0,i.distance=void 0,i}(0,l.Z)(t,e);var i=t.prototype;return i.configure=function(){var e=(0,n.Z)(r().mark((function e(t){var i,n,l,o,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(i=t||{}).Expanded,l=void 0!==n&&n,o=i.AutoRefresh,s=void 0===o||o,this.pane=new p.Pane({title:"Level Builder",expanded:l}),this.levelList="1 2 3",this.mapJSON="",this.mapLevelString="",this.logicJsonMaps=[],this.difficulty=2,this.ratio=.1,this.distance=1e4,this.initConfig(),s&&this.update(),this.isOnMobile()&&(this.pane.expanded=!1);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i.initConfig=function(){var e=this;this.configFolder=this.pane.addFolder({title:"Level Config",expanded:!1});var t={levels:"1 2 3",buildLevel:this.buildLevel.bind(this),saveLevel:this.saveLevel.bind(this),testLevel:this.testLevel.bind(this),buildEndlessLevel:this.endlessLevelBuild.bind(this)};this.configFolder.addInput(t,"levels").on("change",(function(t){e.levelList=""+t.value})),this.buildButton=this.configFolder.addButton({title:"Build Level"}).on("click",t.buildLevel),this.saveButton=this.configFolder.addButton({title:"Save Level"}).on("click",t.saveLevel),this.testButton=this.configFolder.addButton({title:"Test Level"}).on("click",t.testLevel),this.endlessBuildButton=this.configFolder.addButton({title:"Build 50 Endless Level"}).on("click",t.buildEndlessLevel),this.saveButton.disabled=!0,this.testButton.disabled=!0,this.initConfigLogicLevel()},i.initConfigLogicLevel=function(){var e=this;this.configLogicFolder=this.pane.addFolder({title:"Auto Generation Config",expanded:!1});var t={difficulty:2,idleLogicRatio:.1,maxDistance:1e4,generateLevel:this.buildLogicLevel.bind(this),testLevel:this.testLogicLevel.bind(this),saveLevel:this.saveLogicLevel.bind(this),information:"difficulty: number of easy logic until 1 medium logic\nidleLogicRatio: ratio of appearance of idle logic map\nmaxDistance: use px unit\ntestLevel: only can be test if in GameScene"};this.configLogicFolder.addInput(t,"difficulty",{step:1,min:1,max:10}).on("change",(function(t){e.difficulty=t.value})),this.configLogicFolder.addInput(t,"idleLogicRatio",{step:.01,min:0,max:1}).on("change",(function(t){e.ratio=t.value})),this.configLogicFolder.addInput(t,"maxDistance").on("change",(function(t){e.distance=t.value})),this.configLogicFolder.addButton({title:"Generate Level"}).on("click",t.generateLevel),this.testLogicButton=this.configLogicFolder.addButton({title:"Test Level"}).on("click",t.testLevel),this.saveLogicButton=this.configLogicFolder.addButton({title:"Save Level"}).on("click",t.saveLevel),this.configLogicFolder.addMonitor(t,"information",{multiline:!0,lineCount:3}),this.saveLogicButton.disabled=!0,this.testLogicButton.disabled=!0},i.isOnMobile=function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},i.buildLevel=function(){var e=(0,n.Z)(r().mark((function e(){var t,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.saveButton.disabled=!0,this.testButton.disabled=!0,i=new M(this.levelList),e.next=5,i.buildLevel().then((function(e){t=e}));case 5:if(t){e.next=7;break}return e.abrupt("return");case 7:this.saveButton.disabled=!1,this.testButton.disabled=!1,this.mapJSON=t,this.mapLevelString=this.levelList;case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.saveLevel=function(){var e="data:text/json;charset=utf-8,"+encodeURIComponent(this.mapJSON),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","level-merge-"+this.mapLevelString+".json"),document.body.appendChild(t),t.click(),t.remove()},i.testLevel=function(){var e=window.game.scene;if(e.isActive(h.C.GAME_SCENE)){var t=e.getScene(h.C.GAME_SCENE);t.screen.open(f.o4.READY_SCREEN),t.load.once(Phaser.Loader.Events.COMPLETE,(function(){var e=t.bigAssetHandler;t.screen.open(f.o4.READY_SCREEN),e.customMapAssetCheck()})),t.load.once(Phaser.Loader.Events.FILE_LOAD_ERROR,(function(e){(0,d.R0)(new v.Z("Load next map json fail"),{file:null==e?void 0:e.url})}));var i=JSON.parse(this.mapJSON);t.cache.tilemap.exists("level-from-json")&&t.cache.tilemap.remove("level-from-json"),t.load.tilemapTiledJSON({key:"level-from-json",url:i}),t.load.start()}},i.buildLogicLevel=function(){var e=(0,n.Z)(r().mark((function e(){var t,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],this.saveLogicButton.disabled=!0,this.testLogicButton.disabled=!0,i=new _({numOfLevelsGen:1,difficulty:this.difficulty,idleLogicRatio:this.ratio,maxDistance:this.distance}),e.next=6,i.buildMaps().then((function(e){t=e}));case 6:if(t){e.next=8;break}return e.abrupt("return");case 8:this.saveLogicButton.disabled=!1,this.testLogicButton.disabled=!1,this.logicJsonMaps=t;case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.testLogicLevel=function(){var e=window.game.scene;if(e.isActive(h.C.GAME_SCENE)){var t=e.getScene(h.C.GAME_SCENE);t.screen.open(f.o4.READY_SCREEN),t.load.once(Phaser.Loader.Events.COMPLETE,(function(){var e=t.bigAssetHandler;t.screen.open(f.o4.READY_SCREEN),e.customMapAssetCheck()})),t.load.once(Phaser.Loader.Events.FILE_LOAD_ERROR,(function(e){(0,d.R0)(new v.Z("Load next map json fail"),{file:null==e?void 0:e.url})}));var i=JSON.parse(this.logicJsonMaps[0]);t.cache.tilemap.exists("level-from-json")&&t.cache.tilemap.remove("level-from-json"),t.load.tilemapTiledJSON({key:"level-from-json",url:i}),t.load.start()}},i.saveLogicLevel=function(){var e="data:text/json;charset=utf-8,"+encodeURIComponent(this.logicJsonMaps[0]),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","logic-merge.json"),document.body.appendChild(t),t.click(),t.remove()},i.endlessLevelBuild=function(){var e=(0,n.Z)(r().mark((function e(){var t,i,n,l,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],i=1;i<=100;i++)t.push(i);n=r().mark((function e(){var i,n,o,s,a,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i="",u()(t).call(t,(function(){return Math.random()-.5})),n=0;n<50;n++)i+=t[n],n<49&&(i+=" ");return s=new M(i),e.next=6,s.buildLevel().then((function(e){o=e}));case 6:if(o){e.next=8;break}return e.abrupt("return",{v:void 0});case 8:a="data:text/json;charset=utf-8,"+encodeURIComponent(o),(c=document.createElement("a")).setAttribute("href",a),c.setAttribute("download","endless-level-"+l+".json"),document.body.appendChild(c),c.click(),c.remove();case 15:case"end":return e.stop()}}),e)})),l=1;case 4:if(!(l<=50)){e.next=12;break}return e.delegateYield(n(),"t0",6);case 6:if("object"!==typeof(o=e.t0)){e.next=9;break}return e.abrupt("return",o.v);case 9:l++,e.next=4;break;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i.update=function(){this.pane.refresh()},t}(Phaser.Plugins.BasePlugin),R=k}}]);