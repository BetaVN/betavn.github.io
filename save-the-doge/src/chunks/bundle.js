System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/cjs-loader.mjs",["./rollupPluginModLoBabelHelpers.js"],(function(e){var r,t;return{setters:[function(e){r=e.createClass,t=e.classCallCheck}],execute:function(){e("default",new(function(){function e(){t(this,e),this._registry={},this._moduleCache={}}return r(e,[{key:"define",value:function(e,r,t){this._registry[e]={factory:r,resolveMap:t}}},{key:"require",value:function(e){return this._require(e)}},{key:"throwInvalidWrapper",value:function(e,r){throw new Error("Module '".concat(e,"' imported from '").concat(r,"' is expected be an ESM-wrapped CommonJS module but it doesn't."))}},{key:"_require",value:function(e,r){var t=this._moduleCache[e];if(t)return t.exports;var o={id:e,exports:{}};return this._moduleCache[e]=o,this._tryModuleLoad(o,e),o.exports}},{key:"_resolve",value:function(e,r){return this._resolveFromInfos(e,r)||this._throwUnresolved(e,r)}},{key:"_resolveFromInfos",value:function(e,r){var t,o;return e in cjsInfos?e:r&&null!==(t=null===(o=cjsInfos[r])||void 0===o?void 0:o.resolveCache[e])&&void 0!==t?t:void 0}},{key:"_tryModuleLoad",value:function(e,r){var t=!0;try{this._load(e,r),t=!1}finally{t&&delete this._moduleCache[r]}}},{key:"_load",value:function(e,r){var t=this._loadWrapper(r),o=t.factory,n=t.resolveMap,i=this._createRequire(e),u=n?this._createRequireWithResolveMap("function"==typeof n?n():n,i):i;o(e.exports,u,e)}},{key:"_loadWrapper",value:function(e){return e in this._registry?this._registry[e]:this._loadHostProvidedModules(e)}},{key:"_loadHostProvidedModules",value:function(e){return{factory:function(r,t,o){if("undefined"==typeof require)throw new Error("Current environment does not provide a require() for requiring '".concat(e,"'."));try{o.exports=require(e)}catch(r){throw new Error("Exception thrown when calling host defined require('".concat(e,"')."),{cause:r})}}}}},{key:"_createRequire",value:function(e){var r=this;return function(t){return r._require(t,e)}}},{key:"_createRequireWithResolveMap",value:function(e,r){return function(t){var o=e[t];if(o)return r(o);throw new Error("Unresolved specifier "+t)}}},{key:"_throwUnresolved",value:function(e,r){throw new Error("Unable to resolve ".concat(e," from ").concat(parent,"."))}}]),e}()))}}}));

System.register("chunks:///_virtual/en.json",[],(function(e){return{execute:function(){e("default",{text:{level:"Level",settings:"SETTINGS",music:"Music",sound:"Sound",vibrate:"Vibrate",resume:"CONTINUE",on:"ON",off:"OFF",notification:"Notification",adsNotComplete:"Sorry, No Rewards!\nYou have cancelled the ad!",loadingAds:"Loading ads...",loading:"Loading...",load:"Loading",rewardNotReady:"No ads to display!",next:"NEXT",completed:"COMPLETED",tryAgain:"TRY AGAIN",retry:"RETRY",congratulation:"CONGRATULATION",you_have_pass_all_levels:"You have passed all levels.",please_come_back_later:"Please come back later,\nwe will update soon!",start_over:"START OVER",confirmation:"CONFIRMATION",are_you_sure_to_start_over:"ARE YOU SURE TO START OVER?",you_will_play_the_game_again:"You will play the game again\nfrom the beginning, at level 1.",no:"NO",yes:"YES"},texture:{image:"image"}})}}}));

System.register("chunks:///_virtual/fbinstant.mock.js",["./cjs-loader.mjs"],(function(t,e){var n;return{setters:[function(t){n=t.default}],execute:function(){var r=t("__cjsMetaURL",e.meta.url);n.define(r,(function(t,e,n,r,s){n.exports}),{})}}}));

System.register("chunks:///_virtual/fbinstant.mock.mjs_cjs=&original=.js",["./fbinstant.mock.js","./cjs-loader.mjs"],(function(t,e){var n,s;return{setters:[function(e){n=e.__cjsMetaURL,t("__cjsMetaURL",e.__cjsMetaURL)},function(t){s=t.default}],execute:function(){n||s.throwInvalidWrapper("./fbinstant.mock.js",e.meta.url),s.require(n)}}}));

System.register("chunks:///_virtual/GameCore.js",["./cjs-loader.mjs"],(function(e,t){var r;return{setters:[function(e){r=e.default}],execute:function(){var n=e("__cjsMetaURL",t.meta.url);r.define(n,(function(e,t,r,n,s){r.exports}),{})}}}));

System.register("chunks:///_virtual/GameCore.mjs_cjs=&original=.js",["./GameCore.js","./cjs-loader.mjs"],(function(e,r){var t,s;return{setters:[function(r){t=r.__cjsMetaURL,e("__cjsMetaURL",r.__cjsMetaURL)},function(e){s=e.default}],execute:function(){t||s.throwInvalidWrapper("./GameCore.js",r.meta.url),s.require(t)}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(t){return{execute:function(){function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(e){return(r=t("typeof","function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}))(e)}function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function i(t,e,r){return(e=m(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(e){return(a=t("getPrototypeOf",Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)}))(e)}function u(e,r){return(u=t("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t}))(e,r)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function s(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}function p(){return(p="undefined"!=typeof Reflect&&Reflect.get?t("get",Reflect.get.bind()):t("get",(function(t,e,r){var n=s(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}}))).apply(this,arguments)}function y(t){if(Array.isArray(t))return d(t)}function h(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function v(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function m(t){var e=g(t,"string");return"symbol"==typeof e?e:String(e)}t({applyDecoratedDescriptor:function(t,e,r,n,o){var i={};Object.keys(n).forEach((function(t){i[t]=n[t]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0);i=r.slice().reverse().reduce((function(r,n){return n(t,e,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0);void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null);return i},arrayLikeToArray:d,arrayWithoutHoles:y,assertThisInitialized:f,asyncToGenerator:function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}},classCallCheck:function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass:function(t,e,r){e&&o(t.prototype,e);r&&o(t,r);return Object.defineProperty(t,"prototype",{writable:!1}),t},createForOfIteratorHelper:function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=v(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}},createSuper:function(t){var e=c();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}},defineProperty:i,get:p,getPrototypeOf:a,inherits:function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)},initializerDefineProperty:function(t,e,r,n){if(!r)return;Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})},isNativeReflectConstruct:c,iterableToArray:h,nonIterableSpread:b,objectSpread2:function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t},possibleConstructorReturn:l,regeneratorRuntime:function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t("regeneratorRuntime",(function(){return e}));var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),u=new L(n||[]);return o(a,"_invoke",{value:j(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p={};function y(){}function h(){}function v(){}var d={};f(d,a,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(S([])));g&&g!==r&&n.call(g,a)&&(d=g);var m=v.prototype=y.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=P(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function P(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=v,o(m,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:h,configurable:!0}),h.displayName=f(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},e.awrap=function(t){return{__await:t}},w(O.prototype),f(O.prototype,u,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),f(m,c,"Generator"),f(m,a,(function(){return this})),f(m,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e},setPrototypeOf:u,superPropBase:s,toConsumableArray:function(t){return y(t)||h(t)||v(t)||b()},toPrimitive:g,toPropertyKey:m,typeof:r,unsupportedIterableToArray:v})}}}));

System.register("chunks:///_virtual/ru.json",[],(function(e){return{execute:function(){e("default",{text:{level:"Уровень",settings:"НАСТРОЙКИ",music:"Музыка",sound:"Звук",vibrate:"Вибрация",resume:"ПРОДОЛЖАТЬ",on:"ВКЛ",off:"ВЫКЛ",notification:"Уведомление",adsNotComplete:"Извините, наград нет! Вы \nотменили рекламу!",loadingAds:"Загрузка Рекламы...",loading:"Загрузка...",load:"Загрузка",rewardNotReady:"Нет рекламы для отображения!",next:"СЛЕДУЮЩИЙ",completed:"ЗАВЕРШЕННЫЙ",tryAgain:"ЗАПУСТИТЬ СНОВА",retry:"СНОВА ПРОБОВАТЬ",congratulation:"ПОЗДРАВЛЕНИЕ",you_have_pass_all_levels:"Вы прошли все уровни.",please_come_back_later:"Пожалуйста, зайдите позже,\nмы скоро обновим!",start_over:"НАЧАТЬ СНАЧАЛА",confirmation:"ПОДТВЕРЖДЕНИЕ",are_you_sure_to_start_over:"ВЫ УВЕРЕНЫ, ЧТО НАЧАТЬ СНАЧАЛА?",you_will_play_the_game_again:"Вы снова будете играть в игру\nс самого начала, на уровне 1.",no:"НЕТ",yes:"ДА"},texture:{image:"image"}})}}}));

} }; });