"use strict";(self.webpackChunkmaltsev_space=self.webpackChunkmaltsev_space||[]).push([[835],{4020:function(e){var t="%[a-f0-9]{2}",n=new RegExp("("+t+")|([^%]+?)","gi"),r=new RegExp("("+t+")+","gi");function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch(s){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function s(e){try{return decodeURIComponent(e)}catch(s){for(var t=e.match(n)||[],r=1;r<t.length;r++)t=(e=i(t,r).join("")).match(n)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},i=r.exec(e);i;){try{n[i[0]]=decodeURIComponent(i[0])}catch(t){var o=s(i[0]);o!==i[0]&&(n[i[0]]=o)}i=r.exec(e)}n["%C2"]="�";for(var a=Object.keys(n),c=0;c<a.length;c++){var u=a[c];e=e.replace(new RegExp(u,"g"),n[u])}return e}(e)}}},7187:function(e){var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,s),r(n)}function s(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}m(e,t,s,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&m(e,"error",t,n)}(e,i,{once:!0})}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,n,r){var i,s,o,u;if(a(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount;else if("function"==typeof o?o=s[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(i=c(e))>0&&o.length>i&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=o.length,u=l,console&&console.warn&&console.warn(u)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=l.bind(r);return i.listener=n,r.wrapFn=i,i}function p(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):v(i,i.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function m(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(s){r.once&&e.removeEventListener(t,i),n(s)}))}}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,s=this._events;if(void 0!==s)i=i&&void 0===s.error;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=s[e];if(void 0===c)return!1;if("function"==typeof c)r(c,this,t);else{var u=c.length,l=v(c,u);for(n=0;n<u;++n)r(l[n],this,t)}return!0},s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,s,o;if(a(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,i=s;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,s=Object.keys(n);for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},s.prototype.listeners=function(e){return p(this,e,!0)},s.prototype.rawListeners=function(e){return p(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},s.prototype.listenerCount=d,s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},2806:function(e){e.exports=function(e,t){for(var n={},r=Object.keys(e),i=Array.isArray(t),s=0;s<r.length;s++){var o=r[s],a=e[o];(i?-1!==t.indexOf(o):t(o,a,e))&&(n[o]=a)}return n}},3466:function(e,t,n){n.r(t),n.d(t,{Head:function(){return L},default:function(){return k}});var r=n(8032),i=n(7294),s=n(5638);const o="Left",a="Right",c="Up",u="Down",l={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},f={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},p="mousemove",d="mouseup",v="touchend",m="touchmove",h="touchstart";function g(e,t){if(0===t)return e;const n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function y(e,t){const n=t=>{const n="touches"in t;n&&t.touches.length>1||e(((e,i)=>{i.trackMouse&&!n&&(document.addEventListener(p,r),document.addEventListener(d,s));const{clientX:o,clientY:a}=n?t.touches[0]:t,c=g([o,a],i.rotationAngle);return i.onTouchStartOrOnMouseDown&&i.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),f),{initial:c.slice(),xy:c,start:t.timeStamp||0})}))},r=t=>{e(((e,n)=>{const r="touches"in t;if(r&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;const{clientX:i,clientY:s}=r?t.touches[0]:t,[f,p]=g([i,s],n.rotationAngle),d=f-e.xy[0],v=p-e.xy[1],m=Math.abs(d),h=Math.abs(v),y=(t.timeStamp||0)-e.start,b=Math.sqrt(m*m+h*h)/(y||1),O=[d/(y||1),v/(y||1)],w=function(e,t,n,r){return e>t?n>0?a:o:r>0?u:c}(m,h,d,v),j="number"==typeof n.delta?n.delta:n.delta[w.toLowerCase()]||l.delta;if(m<j&&h<j&&!e.swiping)return e;const E={absX:m,absY:h,deltaX:d,deltaY:v,dir:w,event:t,first:e.first,initial:e.initial,velocity:b,vxvy:O};E.first&&n.onSwipeStart&&n.onSwipeStart(E),n.onSwiping&&n.onSwiping(E);let _=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${w}`])&&(_=!0),_&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:E,swiping:!0})}))},i=t=>{e(((e,n)=>{let r;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){r=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(r);const i=n[`onSwiped${r.dir}`];i&&i(r)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),f),{eventData:r})}))},s=e=>{document.removeEventListener(p,r),document.removeEventListener(d,s),i(e)},y=(e,t)=>{let s=()=>{};if(e&&e.addEventListener){const o=Object.assign(Object.assign({},l.touchEventOptions),t.touchEventOptions),a=[[h,n,o],[m,r,Object.assign(Object.assign({},o),t.preventScrollOnSwipe?{passive:!1}:{})],[v,i,o]];a.forEach((([t,n,r])=>e.addEventListener(t,n,r))),s=()=>a.forEach((([t,n])=>e.removeEventListener(t,n)))}return s},b={ref:t=>{null!==t&&e(((e,n)=>{if(e.el===t)return e;const r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=void 0),n.trackTouch&&t&&(r.cleanUpTouch=y(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),r)}))}};return t.trackMouse&&(b.onMouseDown=n),[b,y]}function b(e){const{trackMouse:t}=e,n=i.useRef(Object.assign({},f)),r=i.useRef(Object.assign({},l)),s=i.useRef(Object.assign({},r.current));let o;for(o in s.current=Object.assign({},r.current),r.current=Object.assign(Object.assign({},l),e),l)void 0===r.current[o]&&(r.current[o]=l[o]);const[a,c]=i.useMemo((()=>y((e=>n.current=e(n.current,r.current)),{trackMouse:t})),[t]);return n.current=function(e,t,n,r){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(n.current,r.current,s.current,c),a}var O="_11ku9v74",w=n(5267);var j=e=>{let{images:t}=e;var{currentImage:n,show:s,hide:o}=(0,i.useContext)(w.p);if(null==n)return null;const a=t&&t.length>1,{0:c,1:u}=(0,i.useState)(a?t.findIndex((e=>e==n)):0);(0,i.useEffect)((()=>{a&&s(t[c])}),[c]);const l=()=>{u(c-1<0?t.length-1:c-1)},f=()=>{u((c+1)%t.length)};var p=b({onSwipedLeft:()=>f(),onSwipedRight:()=>l()});return i.createElement("div",{className:"_11ku9v70"},i.createElement("span",{className:"_11ku9v71",onClick:()=>o()},"×"),i.createElement("div",Object.assign({className:"_11ku9v73"},p),a&&i.createElement("span",{className:O+" _11ku9v75",onClick:()=>l()},"❮"),i.createElement(r.G,{className:"_11ku9v77",alt:"",image:n,objectFit:"contain"}),a&&i.createElement("span",{className:O+" _11ku9v76",onClick:()=>f()},"❯")))};var E=e=>{let{images:t}=e;const{show:n,currentImage:o}=(0,i.useContext)(w.p),[a,c,u,l]=(0,s.useQueryParamString)("image","");(0,i.useEffect)((()=>{if(u){const e=t.find((e=>e.name===a));e&&(n(e.image),c(e.name))}}),[a,u]),(0,i.useEffect)((()=>{if(o){const e=t.find((e=>e.image===o));e&&c(e.name)}else l()}),[o]);const f=(0,i.useMemo)((()=>t.map((e=>e.image))),t);return i.createElement("div",{className:"_12v82x60"},i.createElement(j,{images:f}),t.map((e=>i.createElement("div",{className:"_12v82x61",onClick:()=>n(e.image)},i.createElement(r.G,{alt:e.name,image:e.image})))))},_=n(3147),S=n(4001);n(358);var k=e=>{let{data:t,pageContext:n}=e;const s=t.allFile.nodes.filter((e=>null!=(0,r.c)(e.childImageSharp))).map((e=>({name:e.name,image:e.childImageSharp.gatsbyImageData})));return i.createElement(_.Z,{displayBio:_.x.BeforeContent},i.createElement("div",{className:"_6x0bhr0"},i.createElement("h1",null,n.title),i.createElement("p",null,n.description)),i.createElement(E,{images:s}))};const L=e=>{let{pageContext:t}=e;return i.createElement(S.p,{title:"Art | "+t.title})}},4529:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Subs=t.Subscribe=void 0;class n{static subscribe(e){try{return e()}catch(t){console.error(t)}return()=>{}}static subscribeEvent(e,t,n){return e.addListener(t,n),()=>{e.removeListener(t,n)}}static subscribeDOMEvent(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}static setTimeout(e,t,...n){const r=setTimeout(e,t,n);return()=>clearTimeout(r)}static setInterval(e,t,...n){const r=setInterval(e,t,n);return()=>clearInterval(r)}static unsubAll(e){if(Array.isArray(e))e.forEach((e=>{try{e()}catch(t){console.error(t)}}));else try{e()}catch(t){console.error(t)}}static createCleanup(e){return()=>n.unsubAll(e)}}t.Subscribe=n;t.Subs=class{constructor(e=[]){this.list=e}subscribe(e){const t=n.subscribe(e);return this.push(t),t}subscribeEvent(e,t,r){const i=n.subscribeEvent(e,t,r);return this.push(i),i}subscribeDOMEvent(e,t,r){const i=n.subscribeDOMEvent(e,t,r);return this.push(i),i}setTimeout(e,t,...n){const r=setTimeout(e,t,n),i=()=>clearTimeout(r);return this.push(i),i}setInterval(e,t,...n){const r=setInterval(e,t,n),i=()=>clearInterval(r);return this.push(i),i}push(e){this.list.push(e)}unsubAll(){n.unsubAll(this.list),this.list.splice(0,this.list.length)}createCleanup(){return()=>{this.unsubAll()}}}},1232:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.clearQueryParam=t.setQueryParams=t.getQueryParams=t.useQueryParamString=t.queryParamsEventEmitter=void 0;const a=o(n(7294)),c=s(n(1377)),u=n(7187),l=n(4529);function f(){let e={};return"undefined"!=typeof window&&(e=c.parse(window.location.search)),e}function p(e){if("undefined"!=typeof window){const n=Object.keys(e).length>0?`?${c.stringify(e)}`:"";window.history.replaceState(window.history.state,"",`${window.location.pathname}${n}`),t.queryParamsEventEmitter.emit("update")}}function d(e){const t=f();delete t[e],p(t)}t.queryParamsEventEmitter=new u.EventEmitter,t.queryParamsEventEmitter.setMaxListeners(100),t.useQueryParamString=function(e,n,r=!0){const[i,s]=a.default.useState(!1),[o,c]=a.default.useState(0),[u,v]=a.default.useState(n),m=a.default.useCallback((()=>{d(e)}),[e]),h=a.default.useCallback((t=>{v(t),r&&t===n?m():p(Object.assign(Object.assign({},f()),{[e]:t}))}),[m,r,n,e]),g=a.default.useCallback((()=>{const t=f()[e];v("string"==typeof t?t:n)}),[n,e]);return a.default.useEffect((()=>{i||(g(),s(!0))}),[g,n,i,e]),a.default.useEffect((()=>{o>0&&g()}),[g,o]),a.default.useEffect((()=>{const e=new l.Subs;return e.subscribeEvent(t.queryParamsEventEmitter,"update",(()=>{c(Date.now())})),e.createCleanup()}),[]),[u,h,i,m]},t.getQueryParams=f,t.setQueryParams=p,t.clearQueryParam=d},5638:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(1232),t)},1377:function(e,t,n){const r=n(610),i=n(4020),s=n(500),o=n(2806),a=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function l(e,t){return t.decode?i(e):e}function f(e){return Array.isArray(e)?e.sort():"object"==typeof e?f(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function v(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"colon-list-separator":return(e,n,r)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const i="string"==typeof n&&n.includes(e.arrayFormatSeparator),s="string"==typeof n&&!i&&l(n,e).includes(e.arrayFormatSeparator);n=s?l(n,e):n;const o=i||s?n.split(e.arrayFormatSeparator).map((t=>l(t,e))):null===n?n:l(n,e);r[t]=o};case"bracket-separator":return(t,n,r)=>{const i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i)return void(r[t]=n?l(n,e):n);const s=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>l(t,e)));void 0!==r[t]?r[t]=[].concat(r[t],s):r[t]=s};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const i of e.split("&")){if(""===i)continue;let[e,o]=s(t.decode?i.replace(/\+/g," "):i,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:l(o,t),n(l(e,t),o,r)}for(const i of Object.keys(r)){const e=r[i];if("object"==typeof e&&null!==e)for(const n of Object.keys(e))e[n]=v(e[n],t);else r[i]=v(e,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce(((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=f(n):e[t]=n,e}),Object.create(null))}t.extract=d,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const i=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[u(t,e),"[",i,"]"].join("")]:[...n,[u(t,e),"[",u(i,e),"]=",u(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[u(t,e),"[]"].join("")]:[...n,[u(t,e),"[]=",u(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[u(t,e),":list="].join("")]:[...n,[u(t,e),":list=",u(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:(i=null===i?"":i,0===r.length?[[u(n,e),t,u(i,e)].join("")]:[[r,u(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,u(t,e)]:[...n,[u(t,e),"=",u(r,e)].join("")]}}(t),i={};for(const o of Object.keys(e))n(o)||(i[o]=e[o]);const s=Object.keys(i);return!1!==t.sort&&s.sort(t.sort),s.map((n=>{const i=e[n];return void 0===i?"":null===i?u(n,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?u(n,t)+"[]":i.reduce(r(n),[]).join("&"):u(n,t)+"="+u(i,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=s(e,"#");return Object.assign({url:n.split("?")[0]||"",query:m(d(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:l(r,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0,[a]:!0},n);const r=p(e.url).split("?")[0]||"",i=t.extract(e.url),s=t.parse(i,{sort:!1}),o=Object.assign(s,e.query);let c=t.stringify(o,n);c&&(c=`?${c}`);let l=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(l=`#${n[a]?u(e.fragmentIdentifier,n):e.fragmentIdentifier}`),`${r}${c}${l}`},t.pick=(e,n,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[a]:!1},r);const{url:i,query:s,fragmentIdentifier:c}=t.parseUrl(e,r);return t.stringifyUrl({url:i,query:o(s,n),fragmentIdentifier:c},r)},t.exclude=(e,n,r)=>{const i=Array.isArray(n)?e=>!n.includes(e):(e,t)=>!n(e,t);return t.pick(e,i,r)}},500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---src-templates-art-collection-tsx-2d374da9d5c293f65b83.js.map