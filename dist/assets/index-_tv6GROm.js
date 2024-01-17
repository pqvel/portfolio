function Sg(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Eg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mg={exports:{}},pu={},Tg={exports:{}},nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),F0=Symbol.for("react.portal"),O0=Symbol.for("react.fragment"),z0=Symbol.for("react.strict_mode"),k0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),G0=Symbol.for("react.forward_ref"),V0=Symbol.for("react.suspense"),W0=Symbol.for("react.memo"),X0=Symbol.for("react.lazy"),vh=Symbol.iterator;function j0(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,Rg={};function oa(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||wg}oa.prototype.isReactComponent={};oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cg(){}Cg.prototype=oa.prototype;function ld(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||wg}var ud=ld.prototype=new Cg;ud.constructor=ld;Ag(ud,oa.prototype);ud.isPureReactComponent=!0;var _h=Array.isArray,Pg=Object.prototype.hasOwnProperty,cd={current:null},bg={key:!0,ref:!0,__self:!0,__source:!0};function Lg(t,e,n){var i,r={},o=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)Pg.call(e,i)&&!bg.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:_s,type:t,key:o,ref:a,props:r,_owner:cd.current}}function Y0(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function q0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q0(""+t.key):e.toString(36)}function xl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case _s:case F0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Hu(a,0):i,_h(r)?(n="",t!=null&&(n=t.replace(yh,"$&/")+"/"),xl(r,e,n,"",function(u){return u})):r!=null&&(fd(r)&&(r=Y0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(yh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_h(t))for(var s=0;s<t.length;s++){o=t[s];var l=i+Hu(o,s);a+=xl(o,e,n,l,r)}else if(l=j0(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=i+Hu(o,s++),a+=xl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ps(t,e,n){if(t==null)return t;var i=[],r=0;return xl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function $0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Sl={transition:null},K0={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:cd};nt.Children={map:Ps,forEach:function(t,e,n){Ps(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};nt.Component=oa;nt.Fragment=O0;nt.Profiler=k0;nt.PureComponent=ld;nt.StrictMode=z0;nt.Suspense=V0;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;nt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ag({},t.props),r=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=cd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Pg.call(e,l)&&!bg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:_s,type:t.type,key:r,ref:o,props:i,_owner:a}};nt.createContext=function(t){return t={$$typeof:H0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B0,_context:t},t.Consumer=t};nt.createElement=Lg;nt.createFactory=function(t){var e=Lg.bind(null,t);return e.type=t,e};nt.createRef=function(){return{current:null}};nt.forwardRef=function(t){return{$$typeof:G0,render:t}};nt.isValidElement=fd;nt.lazy=function(t){return{$$typeof:X0,_payload:{_status:-1,_result:t},_init:$0}};nt.memo=function(t,e){return{$$typeof:W0,type:t,compare:e===void 0?null:e}};nt.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};nt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};nt.useCallback=function(t,e){return un.current.useCallback(t,e)};nt.useContext=function(t){return un.current.useContext(t)};nt.useDebugValue=function(){};nt.useDeferredValue=function(t){return un.current.useDeferredValue(t)};nt.useEffect=function(t,e){return un.current.useEffect(t,e)};nt.useId=function(){return un.current.useId()};nt.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};nt.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};nt.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};nt.useMemo=function(t,e){return un.current.useMemo(t,e)};nt.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};nt.useRef=function(t){return un.current.useRef(t)};nt.useState=function(t){return un.current.useState(t)};nt.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};nt.useTransition=function(){return un.current.useTransition()};nt.version="18.2.0";Tg.exports=nt;var fe=Tg.exports;const Dg=Eg(fe),Z0=Sg({__proto__:null,default:Dg},[fe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0=fe,J0=Symbol.for("react.element"),ey=Symbol.for("react.fragment"),ty=Object.prototype.hasOwnProperty,ny=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iy={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var i,r={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)ty.call(e,i)&&!iy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:J0,type:t,key:o,ref:a,props:r,_owner:ny.current}}pu.Fragment=ey;pu.jsx=Ug;pu.jsxs=Ug;Mg.exports=pu;var an=Mg.exports,Kc={},Ng={exports:{}},An={},Ig={exports:{}},Fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,B){var W=I.length;I.push(B);e:for(;0<W;){var Q=W-1>>>1,ee=I[Q];if(0<r(ee,B))I[Q]=B,I[W]=ee,W=Q;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var B=I[0],W=I.pop();if(W!==B){I[0]=W;e:for(var Q=0,ee=I.length,q=ee>>>1;Q<q;){var J=2*(Q+1)-1,ge=I[J],Ee=J+1,Ae=I[Ee];if(0>r(ge,W))Ee<ee&&0>r(Ae,ge)?(I[Q]=Ae,I[Ee]=W,Q=Ee):(I[Q]=ge,I[J]=W,Q=J);else if(Ee<ee&&0>r(Ae,W))I[Q]=Ae,I[Ee]=W,Q=Ee;else break e}}return B}function r(I,B){var W=I.sortIndex-B.sortIndex;return W!==0?W:I.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,h=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=I)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(I){if(y=!1,g(I),!_)if(n(l)!==null)_=!0,$(P);else{var B=n(u);B!==null&&Z(E,B.startTime-I)}}function P(I,B){_=!1,y&&(y=!1,f(N),N=-1),m=!0;var W=h;try{for(g(B),d=n(l);d!==null&&(!(d.expirationTime>B)||I&&!k());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,h=d.priorityLevel;var ee=Q(d.expirationTime<=B);B=t.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(l)&&i(l),g(B)}else i(l);d=n(l)}if(d!==null)var q=!0;else{var J=n(u);J!==null&&Z(E,J.startTime-B),q=!1}return q}finally{d=null,h=W,m=!1}}var x=!1,T=null,N=-1,S=5,A=-1;function k(){return!(t.unstable_now()-A<S)}function K(){if(T!==null){var I=t.unstable_now();A=I;var B=!0;try{B=T(!0,I)}finally{B?re():(x=!1,T=null)}}else x=!1}var re;if(typeof v=="function")re=function(){v(K)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,X=U.port2;U.port1.onmessage=K,re=function(){X.postMessage(null)}}else re=function(){p(K,0)};function $(I){T=I,x||(x=!0,re())}function Z(I,B){N=p(function(){I(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,$(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var W=h;h=B;try{return I()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=h;h=I;try{return B()}finally{h=W}},t.unstable_scheduleCallback=function(I,B,W){var Q=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Q+W:Q):W=Q,I){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=W+ee,I={id:c++,callback:B,priorityLevel:I,startTime:W,expirationTime:ee,sortIndex:-1},W>Q?(I.sortIndex=W,e(u,I),n(l)===null&&I===n(u)&&(y?(f(N),N=-1):y=!0,Z(E,W-Q))):(I.sortIndex=ee,e(l,I),_||m||(_=!0,$(P))),I},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(I){var B=h;return function(){var W=h;h=B;try{return I.apply(this,arguments)}finally{h=W}}}})(Fg);Ig.exports=Fg;var ry=Ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og=fe,wn=ry;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,Ka={};function $r(t,e){Yo(t,e),Yo(t+"Capture",e)}function Yo(t,e){for(Ka[t]=e,t=0;t<e.length;t++)zg.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,oy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xh={},Sh={};function ay(t){return Zc.call(Sh,t)?!0:Zc.call(xh,t)?!1:oy.test(t)?Sh[t]=!0:(xh[t]=!0,!1)}function sy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ly(t,e,n,i){if(e===null||typeof e>"u"||sy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dd,hd);jt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dd,hd);jt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dd,hd);jt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function pd(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ly(e,n,r,i)&&(n=null),i||r===null?ay(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=Og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),So=Symbol.for("react.portal"),Eo=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Bg=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),vd=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Hg=Symbol.for("react.offscreen"),Eh=Symbol.iterator;function ha(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Gu;function ba(t){if(Gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+t}var Vu=!1;function Wu(t,e){if(!t||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,s=o.length-1;1<=a&&0<=s&&r[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==o[s]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ba(t):""}function uy(t){switch(t.tag){case 5:return ba(t.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Eo:return"Fragment";case So:return"Portal";case Qc:return"Profiler";case md:return"StrictMode";case Jc:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bg:return(t.displayName||"Context")+".Consumer";case kg:return(t._context.displayName||"Context")+".Provider";case gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vd:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function cy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fy(t){var e=Gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ls(t){t._valueTracker||(t._valueTracker=fy(t))}function Vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wg(t,e){e=e.checked,e!=null&&pd(t,"checked",e,!1)}function rf(t,e){Wg(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?of(t,e.type,n):e.hasOwnProperty("defaultValue")&&of(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function of(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var La=Array.isArray;function zo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(La(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function Xg(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ds,Yg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ds.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dy=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){dy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function $g(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hy=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(hy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function _d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,ko=null,Bo=null;function Rh(t){if(t=Ss(t)){if(typeof ff!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=yu(e),ff(t.stateNode,t.type,e))}}function Kg(t){ko?Bo?Bo.push(t):Bo=[t]:ko=t}function Zg(){if(ko){var t=ko,e=Bo;if(Bo=ko=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function Qg(t,e){return t(e)}function Jg(){}var Xu=!1;function ev(t,e,n){if(Xu)return t(e,n);Xu=!0;try{return Qg(t,e,n)}finally{Xu=!1,(ko!==null||Bo!==null)&&(Jg(),Zg())}}function Qa(t,e){var n=t.stateNode;if(n===null)return null;var i=yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var df=!1;if(wi)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){df=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{df=!1}function py(t,e,n,i,r,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Oa=!1,Fl=null,Ol=!1,hf=null,my={onError:function(t){Oa=!0,Fl=t}};function gy(t,e,n,i,r,o,a,s,l){Oa=!1,Fl=null,py.apply(my,arguments)}function vy(t,e,n,i,r,o,a,s,l){if(gy.apply(this,arguments),Oa){if(Oa){var u=Fl;Oa=!1,Fl=null}else throw Error(ue(198));Ol||(Ol=!0,hf=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(Kr(t)!==t)throw Error(ue(188))}function _y(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Ch(r),t;if(o===i)return Ch(r),e;o=o.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,s=r.child;s;){if(s===n){a=!0,n=r,i=o;break}if(s===i){a=!0,i=r,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,i=r;break}if(s===i){a=!0,i=o,n=r;break}s=s.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function nv(t){return t=_y(t),t!==null?iv(t):null}function iv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iv(t);if(e!==null)return e;t=t.sibling}return null}var rv=wn.unstable_scheduleCallback,Ph=wn.unstable_cancelCallback,yy=wn.unstable_shouldYield,xy=wn.unstable_requestPaint,Ct=wn.unstable_now,Sy=wn.unstable_getCurrentPriorityLevel,yd=wn.unstable_ImmediatePriority,ov=wn.unstable_UserBlockingPriority,zl=wn.unstable_NormalPriority,Ey=wn.unstable_LowPriority,av=wn.unstable_IdlePriority,mu=null,ai=null;function My(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:Ay,Ty=Math.log,wy=Math.LN2;function Ay(t){return t>>>=0,t===0?32:31-(Ty(t)/wy|0)|0}var Us=64,Ns=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~r;s!==0?i=Da(s):(o&=a,o!==0&&(i=Da(o)))}else a=n&~r,a!==0?i=Da(a):o!==0&&(i=Da(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ry(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Zn(o),s=1<<a,l=r[a];l===-1?(!(s&n)||s&i)&&(r[a]=Ry(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sv(){var t=Us;return Us<<=1,!(Us&4194240)&&(Us=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ys(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function Py(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,Sd,cv,fv,dv,mf=!1,Is=[],Qi=null,Ji=null,er=null,Ja=new Map,es=new Map,Xi=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(e.pointerId)}}function ma(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ss(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ly(t,e,n,i,r){switch(e){case"focusin":return Qi=ma(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=ma(Ji,t,e,n,i,r),!0;case"mouseover":return er=ma(er,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ja.set(o,ma(Ja.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,es.set(o,ma(es.get(o)||null,t,e,n,i,r)),!0}return!1}function hv(t){var e=Pr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,dv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cf=i,n.target.dispatchEvent(i),cf=null}else return e=Ss(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lh(t,e,n){El(t)&&n.delete(e)}function Dy(){mf=!1,Qi!==null&&El(Qi)&&(Qi=null),Ji!==null&&El(Ji)&&(Ji=null),er!==null&&El(er)&&(er=null),Ja.forEach(Lh),es.forEach(Lh)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,Dy)))}function ts(t){function e(r){return ga(r,t)}if(0<Is.length){ga(Is[0],t);for(var n=1;n<Is.length;n++){var i=Is[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&ga(Qi,t),Ji!==null&&ga(Ji,t),er!==null&&ga(er,t),Ja.forEach(e),es.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)hv(n),n.blockedOn===null&&Xi.shift()}var Ho=bi.ReactCurrentBatchConfig,Bl=!0;function Uy(t,e,n,i){var r=at,o=Ho.transition;Ho.transition=null;try{at=1,Ed(t,e,n,i)}finally{at=r,Ho.transition=o}}function Ny(t,e,n,i){var r=at,o=Ho.transition;Ho.transition=null;try{at=4,Ed(t,e,n,i)}finally{at=r,Ho.transition=o}}function Ed(t,e,n,i){if(Bl){var r=gf(t,e,n,i);if(r===null)nc(t,e,i,Hl,n),bh(t,i);else if(Ly(r,t,e,n,i))i.stopPropagation();else if(bh(t,i),e&4&&-1<by.indexOf(t)){for(;r!==null;){var o=Ss(r);if(o!==null&&uv(o),o=gf(t,e,n,i),o===null&&nc(t,e,i,Hl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else nc(t,e,i,null,n)}}var Hl=null;function gf(t,e,n,i){if(Hl=null,t=_d(i),t=Pr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sy()){case yd:return 1;case ov:return 4;case zl:case Ey:return 16;case av:return 536870912;default:return 16}default:return 16}}var Yi=null,Md=null,Ml=null;function mv(){if(Ml)return Ml;var t,e=Md,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[o-i];i++);return Ml=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function Dh(){return!1}function Rn(t){function e(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fs:Dh,this.isPropagationStopped=Dh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Td=Rn(aa),xs=_t({},aa,{view:0,detail:0}),Iy=Rn(xs),Yu,qu,va,gu=_t({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Yu=t.screenX-va.screenX,qu=t.screenY-va.screenY):qu=Yu=0,va=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),Uh=Rn(gu),Fy=_t({},gu,{dataTransfer:0}),Oy=Rn(Fy),zy=_t({},xs,{relatedTarget:0}),$u=Rn(zy),ky=_t({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),By=Rn(ky),Hy=_t({},aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gy=Rn(Hy),Vy=_t({},aa,{data:0}),Nh=Rn(Vy),Wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jy[t])?!!e[t]:!1}function wd(){return Yy}var qy=_t({},xs,{key:function(t){if(t.key){var e=Wy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$y=Rn(qy),Ky=_t({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=Rn(Ky),Zy=_t({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),Qy=Rn(Zy),Jy=_t({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=Rn(Jy),tx=_t({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=Rn(tx),ix=[9,13,27,32],Ad=wi&&"CompositionEvent"in window,za=null;wi&&"documentMode"in document&&(za=document.documentMode);var rx=wi&&"TextEvent"in window&&!za,gv=wi&&(!Ad||za&&8<za&&11>=za),Fh=" ",Oh=!1;function vv(t,e){switch(t){case"keyup":return ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mo=!1;function ox(t,e){switch(t){case"compositionend":return _v(e);case"keypress":return e.which!==32?null:(Oh=!0,Fh);case"textInput":return t=e.data,t===Fh&&Oh?null:t;default:return null}}function ax(t,e){if(Mo)return t==="compositionend"||!Ad&&vv(t,e)?(t=mv(),Ml=Md=Yi=null,Mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gv&&e.locale!=="ko"?null:e.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sx[t.type]:e==="textarea"}function yv(t,e,n,i){Kg(i),e=Gl(e,"onChange"),0<e.length&&(n=new Td("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ka=null,ns=null;function lx(t){bv(t,0)}function vu(t){var e=Ao(t);if(Vg(e))return t}function ux(t,e){if(t==="change")return e}var xv=!1;if(wi){var Ku;if(wi){var Zu="oninput"in document;if(!Zu){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),Zu=typeof kh.oninput=="function"}Ku=Zu}else Ku=!1;xv=Ku&&(!document.documentMode||9<document.documentMode)}function Bh(){ka&&(ka.detachEvent("onpropertychange",Sv),ns=ka=null)}function Sv(t){if(t.propertyName==="value"&&vu(ns)){var e=[];yv(e,ns,t,_d(t)),ev(lx,e)}}function cx(t,e,n){t==="focusin"?(Bh(),ka=e,ns=n,ka.attachEvent("onpropertychange",Sv)):t==="focusout"&&Bh()}function fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(ns)}function dx(t,e){if(t==="click")return vu(e)}function hx(t,e){if(t==="input"||t==="change")return vu(e)}function px(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:px;function is(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zc.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gh(t,e){var n=Hh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hh(n)}}function Ev(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ev(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mv(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mx(t){var e=Mv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ev(n.ownerDocument.documentElement,n)){if(i!==null&&Rd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Gh(n,o);var a=Gh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gx=wi&&"documentMode"in document&&11>=document.documentMode,To=null,vf=null,Ba=null,_f=!1;function Vh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||To==null||To!==Il(i)||(i=To,"selectionStart"in i&&Rd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ba&&is(Ba,i)||(Ba=i,i=Gl(vf,"onSelect"),0<i.length&&(e=new Td("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=To)))}function Os(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wo={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},Qu={},Tv={};wi&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function _u(t){if(Qu[t])return Qu[t];if(!wo[t])return t;var e=wo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tv)return Qu[t]=e[n];return t}var wv=_u("animationend"),Av=_u("animationiteration"),Rv=_u("animationstart"),Cv=_u("transitionend"),Pv=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){Pv.set(t,e),$r(e,[t])}for(var Ju=0;Ju<Wh.length;Ju++){var ec=Wh[Ju],vx=ec.toLowerCase(),_x=ec[0].toUpperCase()+ec.slice(1);hr(vx,"on"+_x)}hr(wv,"onAnimationEnd");hr(Av,"onAnimationIteration");hr(Rv,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Cv,"onTransitionEnd");Yo("onMouseEnter",["mouseout","mouseover"]);Yo("onMouseLeave",["mouseout","mouseover"]);Yo("onPointerEnter",["pointerout","pointerover"]);Yo("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Xh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vy(i,e,void 0,t),t.currentTarget=null}function bv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;Xh(r,s,u),o=l}else for(a=0;a<i.length;a++){if(s=i[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;Xh(r,s,u),o=l}}}if(Ol)throw t=hf,Ol=!1,hf=null,t}function ft(t,e){var n=e[Mf];n===void 0&&(n=e[Mf]=new Set);var i=t+"__bubble";n.has(i)||(Lv(e,t,2,!1),n.add(i))}function tc(t,e,n){var i=0;e&&(i|=4),Lv(n,t,i,e)}var zs="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[zs]){t[zs]=!0,zg.forEach(function(n){n!=="selectionchange"&&(yx.has(n)||tc(n,!1,t),tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zs]||(e[zs]=!0,tc("selectionchange",!1,e))}}function Lv(t,e,n,i){switch(pv(e)){case 1:var r=Uy;break;case 4:r=Ny;break;default:r=Ed}n=r.bind(null,e,n,t),r=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;s!==null;){if(a=Pr(s),a===null)return;if(l=a.tag,l===5||l===6){i=o=a;continue e}s=s.parentNode}}i=i.return}ev(function(){var u=o,c=_d(n),d=[];e:{var h=Pv.get(t);if(h!==void 0){var m=Td,_=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":m=$y;break;case"focusin":_="focus",m=$u;break;case"focusout":_="blur",m=$u;break;case"beforeblur":case"afterblur":m=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Qy;break;case wv:case Av:case Rv:m=By;break;case Cv:m=ex;break;case"scroll":m=Iy;break;case"wheel":m=nx;break;case"copy":case"cut":case"paste":m=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ih}var y=(e&4)!==0,p=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var v=u,g;v!==null;){g=v;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,f!==null&&(E=Qa(v,f),E!=null&&y.push(os(v,E,g)))),p)break;v=v.return}0<y.length&&(h=new m(h,_,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==cf&&(_=n.relatedTarget||n.fromElement)&&(Pr(_)||_[Ai]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Pr(_):null,_!==null&&(p=Kr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Uh,E="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ih,E="onPointerLeave",f="onPointerEnter",v="pointer"),p=m==null?h:Ao(m),g=_==null?h:Ao(_),h=new y(E,v+"leave",m,n,c),h.target=p,h.relatedTarget=g,E=null,Pr(c)===u&&(y=new y(f,v+"enter",_,n,c),y.target=g,y.relatedTarget=p,E=y),p=E,m&&_)t:{for(y=m,f=_,v=0,g=y;g;g=Jr(g))v++;for(g=0,E=f;E;E=Jr(E))g++;for(;0<v-g;)y=Jr(y),v--;for(;0<g-v;)f=Jr(f),g--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=Jr(y),f=Jr(f)}y=null}else y=null;m!==null&&jh(d,h,m,y,!1),_!==null&&p!==null&&jh(d,p,_,y,!0)}}e:{if(h=u?Ao(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=ux;else if(zh(h))if(xv)P=hx;else{P=fx;var x=cx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=dx);if(P&&(P=P(t,u))){yv(d,P,n,c);break e}x&&x(t,h,u),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&of(h,"number",h.value)}switch(x=u?Ao(u):window,t){case"focusin":(zh(x)||x.contentEditable==="true")&&(To=x,vf=u,Ba=null);break;case"focusout":Ba=vf=To=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Vh(d,n,c);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Vh(d,n,c)}var T;if(Ad)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Mo?vv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(gv&&n.locale!=="ko"&&(Mo||N!=="onCompositionStart"?N==="onCompositionEnd"&&Mo&&(T=mv()):(Yi=c,Md="value"in Yi?Yi.value:Yi.textContent,Mo=!0)),x=Gl(u,N),0<x.length&&(N=new Nh(N,t,null,n,c),d.push({event:N,listeners:x}),T?N.data=T:(T=_v(n),T!==null&&(N.data=T)))),(T=rx?ox(t,n):ax(t,n))&&(u=Gl(u,"onBeforeInput"),0<u.length&&(c=new Nh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}bv(d,e)})}function os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Qa(t,n),o!=null&&i.unshift(os(t,o,r)),o=Qa(t,e),o!=null&&i.push(os(t,o,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,e,n,i,r){for(var o=e._reactName,a=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=Qa(n,o),l!=null&&a.unshift(os(n,l,s))):r||(l=Qa(n,o),l!=null&&a.push(os(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var xx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(xx,`
`).replace(Sx,"")}function ks(t,e,n){if(e=Yh(e),Yh(t)!==e&&n)throw Error(ue(425))}function Vl(){}var yf=null,xf=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(Tx)}:Ef;function Tx(t){setTimeout(function(){throw t})}function ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ts(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ts(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),oi="__reactFiber$"+sa,as="__reactProps$"+sa,Ai="__reactContainer$"+sa,Mf="__reactEvents$"+sa,wx="__reactListeners$"+sa,Ax="__reactHandles$"+sa;function Pr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[oi])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function Ss(t){return t=t[oi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function yu(t){return t[as]||null}var Tf=[],Ro=-1;function pr(t){return{current:t}}function ht(t){0>Ro||(t.current=Tf[Ro],Tf[Ro]=null,Ro--)}function ct(t,e){Ro++,Tf[Ro]=t.current,t.current=e}var cr={},en=pr(cr),hn=pr(!1),kr=cr;function qo(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Wl(){ht(hn),ht(en)}function Kh(t,e,n){if(en.current!==cr)throw Error(ue(168));ct(en,e),ct(hn,n)}function Dv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,cy(t)||"Unknown",r));return _t({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,kr=en.current,ct(en,t),ct(hn,hn.current),!0}function Zh(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=Dv(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,ht(hn),ht(en),ct(en,t)):ht(hn),ct(hn,n)}var vi=null,xu=!1,rc=!1;function Uv(t){vi===null?vi=[t]:vi.push(t)}function Rx(t){xu=!0,Uv(t)}function mr(){if(!rc&&vi!==null){rc=!0;var t=0,e=at;try{var n=vi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,xu=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),rv(yd,mr),r}finally{at=e,rc=!1}}return null}var Co=[],Po=0,jl=null,Yl=0,Ln=[],Dn=0,Br=null,yi=1,xi="";function Mr(t,e){Co[Po++]=Yl,Co[Po++]=jl,jl=t,Yl=e}function Nv(t,e,n){Ln[Dn++]=yi,Ln[Dn++]=xi,Ln[Dn++]=Br,Br=t;var i=yi;t=xi;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var o=32-Zn(e)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,yi=1<<32-Zn(e)+r|n<<r|i,xi=o+t}else yi=1<<o|n<<r|i,xi=t}function Cd(t){t.return!==null&&(Mr(t,1),Nv(t,1,0))}function Pd(t){for(;t===jl;)jl=Co[--Po],Co[Po]=null,Yl=Co[--Po],Co[Po]=null;for(;t===Br;)Br=Ln[--Dn],Ln[Dn]=null,xi=Ln[--Dn],Ln[Dn]=null,yi=Ln[--Dn],Ln[Dn]=null}var En=null,Sn=null,pt=!1,Yn=null;function Iv(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Sn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:yi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Sn=null,!0):!1;default:return!1}}function wf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if(pt){var e=Sn;if(e){var n=e;if(!Qh(t,e)){if(wf(t))throw Error(ue(418));e=tr(n.nextSibling);var i=En;e&&Qh(t,e)?Iv(i,n):(t.flags=t.flags&-4097|2,pt=!1,En=t)}}else{if(wf(t))throw Error(ue(418));t.flags=t.flags&-4097|2,pt=!1,En=t}}}function Jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Bs(t){if(t!==En)return!1;if(!pt)return Jh(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=Sn)){if(wf(t))throw Fv(),Error(ue(418));for(;e;)Iv(t,e),e=tr(e.nextSibling)}if(Jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=En?tr(t.stateNode.nextSibling):null;return!0}function Fv(){for(var t=Sn;t;)t=tr(t.nextSibling)}function $o(){Sn=En=null,pt=!1}function bd(t){Yn===null?Yn=[t]:Yn.push(t)}var Cx=bi.ReactCurrentBatchConfig;function Wn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ql=pr(null),$l=null,bo=null,Ld=null;function Dd(){Ld=bo=$l=null}function Ud(t){var e=ql.current;ht(ql),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Go(t,e){$l=t,Ld=bo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},bo===null){if($l===null)throw Error(ue(308));bo=t,$l.dependencies={lanes:0,firstContext:t}}else bo=bo.next=t;return e}var br=null;function Nd(t){br===null?br=[t]:br.push(t)}function Ov(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,Nd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}function ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,i){var r=t.updateQueue;Hi=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,m=s.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,y=s;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=_t({},d,h);break e;case 2:Hi=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,a|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Gr|=a,t.lanes=a,t.memoizedState=d}}function tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var kv=new Og.Component().refs;function Cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=rr(t),o=Ei(i,r);o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&(Qn(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=rr(t),o=Ei(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&(Qn(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=rr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Qn(e,t,i,n),wl(e,t,i))}};function np(t,e,n,i,r,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!is(n,i)||!is(r,o):!0}function Bv(t,e,n){var i=!1,r=cr,o=e.contextType;return typeof o=="object"&&o!==null?o=zn(o):(r=pn(e)?kr:en.current,i=e.contextTypes,o=(i=i!=null)?qo(t,r):cr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function Pf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=kv,Id(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=zn(o):(o=pn(e)?kr:en.current,r.context=qo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Cf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Su.enqueueReplaceState(r,r.state,null),Kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=r.refs;s===kv&&(s=r.refs={}),a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Hs(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rp(t){var e=t._init;return e(t._payload)}function Hv(t){function e(f,v){if(t){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=or(f,v),f.index=0,f.sibling=null,f}function o(f,v,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function s(f,v,g,E){return v===null||v.tag!==6?(v=fc(g,f.mode,E),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,E){var P=g.type;return P===Eo?c(f,v,g.props.children,E,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bi&&rp(P)===v.type)?(E=r(v,g.props),E.ref=_a(f,v,g),E.return=f,E):(E=Ll(g.type,g.key,g.props,null,f.mode,E),E.ref=_a(f,v,g),E.return=f,E)}function u(f,v,g,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=dc(g,f.mode,E),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function c(f,v,g,E,P){return v===null||v.tag!==7?(v=Ir(g,f.mode,E,P),v.return=f,v):(v=r(v,g),v.return=f,v)}function d(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fc(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bs:return g=Ll(v.type,v.key,v.props,null,f.mode,g),g.ref=_a(f,null,v),g.return=f,g;case So:return v=dc(v,f.mode,g),v.return=f,v;case Bi:var E=v._init;return d(f,E(v._payload),g)}if(La(v)||ha(v))return v=Ir(v,f.mode,g,null),v.return=f,v;Hs(f,v)}return null}function h(f,v,g,E){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:s(f,v,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bs:return g.key===P?l(f,v,g,E):null;case So:return g.key===P?u(f,v,g,E):null;case Bi:return P=g._init,h(f,v,P(g._payload),E)}if(La(g)||ha(g))return P!==null?null:c(f,v,g,E,null);Hs(f,g)}return null}function m(f,v,g,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(g)||null,s(v,f,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case bs:return f=f.get(E.key===null?g:E.key)||null,l(v,f,E,P);case So:return f=f.get(E.key===null?g:E.key)||null,u(v,f,E,P);case Bi:var x=E._init;return m(f,v,g,x(E._payload),P)}if(La(E)||ha(E))return f=f.get(g)||null,c(v,f,E,P,null);Hs(v,E)}return null}function _(f,v,g,E){for(var P=null,x=null,T=v,N=v=0,S=null;T!==null&&N<g.length;N++){T.index>N?(S=T,T=null):S=T.sibling;var A=h(f,T,g[N],E);if(A===null){T===null&&(T=S);break}t&&T&&A.alternate===null&&e(f,T),v=o(A,v,N),x===null?P=A:x.sibling=A,x=A,T=S}if(N===g.length)return n(f,T),pt&&Mr(f,N),P;if(T===null){for(;N<g.length;N++)T=d(f,g[N],E),T!==null&&(v=o(T,v,N),x===null?P=T:x.sibling=T,x=T);return pt&&Mr(f,N),P}for(T=i(f,T);N<g.length;N++)S=m(T,f,N,g[N],E),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?N:S.key),v=o(S,v,N),x===null?P=S:x.sibling=S,x=S);return t&&T.forEach(function(k){return e(f,k)}),pt&&Mr(f,N),P}function y(f,v,g,E){var P=ha(g);if(typeof P!="function")throw Error(ue(150));if(g=P.call(g),g==null)throw Error(ue(151));for(var x=P=null,T=v,N=v=0,S=null,A=g.next();T!==null&&!A.done;N++,A=g.next()){T.index>N?(S=T,T=null):S=T.sibling;var k=h(f,T,A.value,E);if(k===null){T===null&&(T=S);break}t&&T&&k.alternate===null&&e(f,T),v=o(k,v,N),x===null?P=k:x.sibling=k,x=k,T=S}if(A.done)return n(f,T),pt&&Mr(f,N),P;if(T===null){for(;!A.done;N++,A=g.next())A=d(f,A.value,E),A!==null&&(v=o(A,v,N),x===null?P=A:x.sibling=A,x=A);return pt&&Mr(f,N),P}for(T=i(f,T);!A.done;N++,A=g.next())A=m(T,f,N,A.value,E),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?N:A.key),v=o(A,v,N),x===null?P=A:x.sibling=A,x=A);return t&&T.forEach(function(K){return e(f,K)}),pt&&Mr(f,N),P}function p(f,v,g,E){if(typeof g=="object"&&g!==null&&g.type===Eo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bs:e:{for(var P=g.key,x=v;x!==null;){if(x.key===P){if(P=g.type,P===Eo){if(x.tag===7){n(f,x.sibling),v=r(x,g.props.children),v.return=f,f=v;break e}}else if(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bi&&rp(P)===x.type){n(f,x.sibling),v=r(x,g.props),v.ref=_a(f,x,g),v.return=f,f=v;break e}n(f,x);break}else e(f,x);x=x.sibling}g.type===Eo?(v=Ir(g.props.children,f.mode,E,g.key),v.return=f,f=v):(E=Ll(g.type,g.key,g.props,null,f.mode,E),E.ref=_a(f,v,g),E.return=f,f=E)}return a(f);case So:e:{for(x=g.key;v!==null;){if(v.key===x)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=dc(g,f.mode,E),v.return=f,f=v}return a(f);case Bi:return x=g._init,p(f,v,x(g._payload),E)}if(La(g))return _(f,v,g,E);if(ha(g))return y(f,v,g,E);Hs(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,g),v.return=f,f=v):(n(f,v),v=fc(g,f.mode,E),v.return=f,f=v),a(f)):n(f,v)}return p}var Ko=Hv(!0),Gv=Hv(!1),Es={},si=pr(Es),ss=pr(Es),ls=pr(Es);function Lr(t){if(t===Es)throw Error(ue(174));return t}function Fd(t,e){switch(ct(ls,e),ct(ss,t),ct(si,Es),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}ht(si),ct(si,e)}function Zo(){ht(si),ht(ss),ht(ls)}function Vv(t){Lr(ls.current);var e=Lr(si.current),n=sf(e,t.type);e!==n&&(ct(ss,t),ct(si,n))}function Od(t){ss.current===t&&(ht(si),ht(ss))}var gt=pr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function zd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Al=bi.ReactCurrentDispatcher,ac=bi.ReactCurrentBatchConfig,Hr=0,vt=null,Dt=null,kt=null,Ql=!1,Ha=!1,us=0,Px=0;function qt(){throw Error(ue(321))}function kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Bd(t,e,n,i,r,o){if(Hr=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?Ux:Nx,t=n(i,r),Ha){o=0;do{if(Ha=!1,us=0,25<=o)throw Error(ue(301));o+=1,kt=Dt=null,e.updateQueue=null,Al.current=Ix,t=n(i,r)}while(Ha)}if(Al.current=Jl,e=Dt!==null&&Dt.next!==null,Hr=0,kt=Dt=vt=null,Ql=!1,e)throw Error(ue(300));return t}function Hd(){var t=us!==0;return us=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?vt.memoizedState=kt=t:kt=kt.next=t,kt}function kn(){if(Dt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=kt===null?vt.memoizedState:kt.next;if(e!==null)kt=e,Dt=t;else{if(t===null)throw Error(ue(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},kt===null?vt.memoizedState=kt=t:kt=kt.next=t}return kt}function cs(t,e){return typeof e=="function"?e(t):e}function sc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=i):l=l.next=d,vt.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==o);l===null?a=i:l.next=s,Jn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,Gr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=t(o,a.action),a=a.next;while(a!==r);Jn(o,e.memoizedState)||(dn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Wv(){}function Xv(t,e){var n=vt,i=kn(),r=e(),o=!Jn(i.memoizedState,r);if(o&&(i.memoizedState=r,dn=!0),i=i.queue,Gd(qv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,fs(9,Yv.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ue(349));Hr&30||jv(n,e,r)}return r}function jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yv(t,e,n,i){e.value=n,e.getSnapshot=i,$v(e)&&Kv(t)}function qv(t,e,n){return n(function(){$v(e)&&Kv(t)})}function $v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Kv(t){var e=Ri(t,1);e!==null&&Qn(e,t,1,-1)}function op(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},e.queue=t,t=t.dispatch=Dx.bind(null,vt,t),[e.memoizedState,t]}function fs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Zv(){return kn().memoizedState}function Rl(t,e,n,i){var r=ii();vt.flags|=t,r.memoizedState=fs(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=kn();i=i===void 0?null:i;var o=void 0;if(Dt!==null){var a=Dt.memoizedState;if(o=a.destroy,i!==null&&kd(i,a.deps)){r.memoizedState=fs(e,n,o,i);return}}vt.flags|=t,r.memoizedState=fs(1|e,n,o,i)}function ap(t,e){return Rl(8390656,8,t,e)}function Gd(t,e){return Eu(2048,8,t,e)}function Qv(t,e){return Eu(4,2,t,e)}function Jv(t,e){return Eu(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,e_.bind(null,e,t),n)}function Vd(){}function n_(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function i_(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function r_(t,e,n){return Hr&21?(Jn(n,e)||(n=sv(),vt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function bx(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=ac.transition;ac.transition={};try{t(!1),e()}finally{at=n,ac.transition=i}}function o_(){return kn().memoizedState}function Lx(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},a_(t))s_(e,n);else if(n=Ov(t,e,n,i),n!==null){var r=sn();Qn(n,t,i,r),l_(n,e,i)}}function Dx(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(t))s_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(r.hasEagerState=!0,r.eagerState=s,Jn(s,a)){var l=e.interleaved;l===null?(r.next=r,Nd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ov(t,e,r,i),n!==null&&(r=sn(),Qn(n,t,i,r),l_(n,e,i))}}function a_(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function s_(t,e){Ha=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}var Jl={readContext:zn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},Ux={readContext:zn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Lx.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:op,useDebugValue:Vd,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=op(!1),e=t[0];return t=bx.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ii();if(pt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Bt===null)throw Error(ue(349));Hr&30||jv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,ap(qv.bind(null,i,o,t),[t]),i.flags|=2048,fs(9,Yv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ii(),e=Bt.identifierPrefix;if(pt){var n=xi,i=yi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Px++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Nx={readContext:zn,useCallback:n_,useContext:zn,useEffect:Gd,useImperativeHandle:t_,useInsertionEffect:Qv,useLayoutEffect:Jv,useMemo:i_,useReducer:sc,useRef:Zv,useState:function(){return sc(cs)},useDebugValue:Vd,useDeferredValue:function(t){var e=kn();return r_(e,Dt.memoizedState,t)},useTransition:function(){var t=sc(cs)[0],e=kn().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:Xv,useId:o_,unstable_isNewReconciler:!1},Ix={readContext:zn,useCallback:n_,useContext:zn,useEffect:Gd,useImperativeHandle:t_,useInsertionEffect:Qv,useLayoutEffect:Jv,useMemo:i_,useReducer:lc,useRef:Zv,useState:function(){return lc(cs)},useDebugValue:Vd,useDeferredValue:function(t){var e=kn();return Dt===null?e.memoizedState=t:r_(e,Dt.memoizedState,t)},useTransition:function(){var t=lc(cs)[0],e=kn().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:Xv,useId:o_,unstable_isNewReconciler:!1};function Qo(t,e){try{var n="",i=e;do n+=uy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fx=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tu||(tu=!0,Bf=i),bf(t,e)},n}function c_(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Fx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Kx.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var Ox=bi.ReactCurrentOwner,dn=!1;function rn(t,e,n,i){e.child=t===null?Gv(e,null,n,i):Ko(e,t.child,n,i)}function cp(t,e,n,i,r){n=n.render;var o=e.ref;return Go(e,r),i=Bd(t,e,n,i,o,r),n=Hd(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(pt&&n&&Cd(e),e.flags|=1,rn(t,e,i,r),e.child)}function fp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Zd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,f_(t,e,o,i,r)):(t=Ll(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:is,n(a,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=or(o,i),t.ref=e.ref,t.return=e,e.child=t}function f_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(is(o,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return Lf(t,e,n,i,r)}function d_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Do,xn),xn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Do,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ct(Do,xn),xn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ct(Do,xn),xn|=i;return rn(t,e,r,n),e.child}function h_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,n,i,r){var o=pn(n)?kr:en.current;return o=qo(e,o),Go(e,r),n=Bd(t,e,n,i,o,r),i=Hd(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(pt&&i&&Cd(e),e.flags|=1,rn(t,e,n,r),e.child)}function dp(t,e,n,i,r){if(pn(n)){var o=!0;Xl(e)}else o=!1;if(Go(e,r),e.stateNode===null)Cl(t,e),Bv(e,n,i),Pf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=pn(n)?kr:en.current,u=qo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==i||l!==u)&&ip(e,a,i,u),Hi=!1;var h=e.memoizedState;a.state=h,Kl(e,i,a,r),l=e.memoizedState,s!==i||h!==l||hn.current||Hi?(typeof c=="function"&&(Cf(e,n,c,i),l=e.memoizedState),(s=Hi||np(e,n,s,i,h,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,zv(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Wn(e.type,s),a.props=u,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=pn(n)?kr:en.current,l=qo(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||h!==l)&&ip(e,a,i,l),Hi=!1,h=e.memoizedState,a.state=h,Kl(e,i,a,r);var _=e.memoizedState;s!==d||h!==_||hn.current||Hi?(typeof m=="function"&&(Cf(e,n,m,i),_=e.memoizedState),(u=Hi||np(e,n,u,i,h,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Df(t,e,n,i,o,r)}function Df(t,e,n,i,r,o){h_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Zh(e,n,!1),Ci(t,e,o);i=e.stateNode,Ox.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ko(e,t.child,null,o),e.child=Ko(e,null,s,o)):rn(t,e,s,o),e.memoizedState=i.state,r&&Zh(e,n,!0),e.child}function p_(t){var e=t.stateNode;e.pendingContext?Kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kh(t,e.context,!1),Fd(t,e.containerInfo)}function hp(t,e,n,i,r){return $o(),bd(r),e.flags|=256,rn(t,e,n,i),e.child}var Uf={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function m_(t,e,n){var i=e.pendingProps,r=gt.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(gt,r&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,o?(i=e.mode,o=e.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=wu(a,i,0,null),t=Ir(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Nf(n),e.memoizedState=Uf,t):Wd(e,a));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return zx(t,e,a,i,s,r,n);if(o){o=i.fallback,a=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?o=or(s,o):(o=Ir(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,a=t.child.memoizedState,a=a===null?Nf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=Uf,i}return o=t.child,t=o.sibling,i=or(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wd(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gs(t,e,n,i){return i!==null&&bd(i),Ko(e,t.child,null,n),t=Wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zx(t,e,n,i,r,o,a){if(n)return e.flags&256?(e.flags&=-257,i=uc(Error(ue(422))),Gs(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=wu({mode:"visible",children:i.children},r,0,null),o=Ir(o,r,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ko(e,t.child,null,a),e.child.memoizedState=Nf(a),e.memoizedState=Uf,o);if(!(e.mode&1))return Gs(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,o=Error(ue(419)),i=uc(o,i,void 0),Gs(t,e,a,i)}if(s=(a&t.childLanes)!==0,dn||s){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ri(t,r),Qn(i,t,r,-1))}return Kd(),i=uc(Error(ue(421))),Gs(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Zx.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Sn=tr(r.nextSibling),En=e,pt=!0,Yn=null,t!==null&&(Ln[Dn++]=yi,Ln[Dn++]=xi,Ln[Dn++]=Br,yi=t.id,xi=t.overflow,Br=e),e=Wd(e,i.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rf(t.return,e,n)}function cc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function g_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(rn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cc(e,!0,n,null,o);break;case"together":cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kx(t,e,n){switch(e.tag){case 3:p_(e),$o();break;case 5:Vv(e);break;case 1:pn(e.type)&&Xl(e);break;case 4:Fd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?m_(t,e,n):(ct(gt,gt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);ct(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return g_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,d_(t,e,n)}return Ci(t,e,n)}var v_,If,__,y_;v_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};If=function(){};__=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(si.current);var o=null;switch(n){case"input":r=nf(t,r),i=nf(t,i),o=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),o=[];break;case"textarea":r=af(t,r),i=af(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vl)}lf(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ka.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};y_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ya(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Bx(t,e,n){var i=e.pendingProps;switch(Pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return pn(e.type)&&Wl(),$t(e),null;case 3:return i=e.stateNode,Zo(),ht(hn),ht(en),zd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Vf(Yn),Yn=null))),If(t,e),$t(e),null;case 5:Od(e);var r=Lr(ls.current);if(n=e.type,t!==null&&e.stateNode!=null)__(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return $t(e),null}if(t=Lr(si.current),Bs(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[oi]=e,i[as]=o,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Ua.length;r++)ft(Ua[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Mh(i,o),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ft("invalid",i);break;case"textarea":wh(i,o),ft("invalid",i)}lf(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?i.textContent!==s&&(o.suppressHydrationWarning!==!0&&ks(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ks(i.textContent,s,t),r=["children",""+s]):Ka.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":Ls(i),Th(i,o,!0);break;case"textarea":Ls(i),Ah(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[oi]=e,t[as]=i,v_(t,e,!1,!1),e.stateNode=t;e:{switch(a=uf(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ua.length;r++)ft(Ua[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Mh(t,i),r=nf(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ft("invalid",t);break;case"textarea":wh(t,i),r=af(t,i),ft("invalid",t);break;default:r=i}lf(n,r),s=r;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?$g(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(t,l):typeof l=="number"&&Za(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ka.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ft("scroll",t):l!=null&&pd(t,o,l,a))}switch(n){case"input":Ls(t),Th(t,i,!1);break;case"textarea":Ls(t),Ah(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?zo(t,!!i.multiple,o,!1):i.defaultValue!=null&&zo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)y_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Lr(ls.current),Lr(si.current),Bs(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(o=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:ks(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ks(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return $t(e),null;case 13:if(ht(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Sn!==null&&e.mode&1&&!(e.flags&128))Fv(),$o(),e.flags|=98560,o=!1;else if(o=Bs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ue(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ue(317));o[oi]=e}else $o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),o=!1}else Yn!==null&&(Vf(Yn),Yn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Ut===0&&(Ut=3):Kd())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Zo(),If(t,e),t===null&&rs(e.stateNode.containerInfo),$t(e),null;case 10:return Ud(e.type._context),$t(e),null;case 17:return pn(e.type)&&Wl(),$t(e),null;case 19:if(ht(gt),o=e.memoizedState,o===null)return $t(e),null;if(i=(e.flags&128)!==0,a=o.rendering,a===null)if(i)ya(o,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Zl(t),a!==null){for(e.flags|=128,ya(o,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(gt,gt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ct()>Jo&&(e.flags|=128,i=!0,ya(o,!1),e.lanes=4194304)}else{if(!i)if(t=Zl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!pt)return $t(e),null}else 2*Ct()-o.renderingStartTime>Jo&&n!==1073741824&&(e.flags|=128,i=!0,ya(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ct(),e.sibling=null,n=gt.current,ct(gt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return $d(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Hx(t,e){switch(Pd(e),e.tag){case 1:return pn(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zo(),ht(hn),ht(en),zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Od(e),null;case 13:if(ht(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));$o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(gt),null;case 4:return Zo(),null;case 10:return Ud(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var Vs=!1,Qt=!1,Gx=typeof WeakSet=="function"?WeakSet:Set,we=null;function Lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Ff(t,e,n){try{n()}catch(i){St(t,e,i)}}var mp=!1;function Vx(t,e){if(yf=Bl,t=Mv(),Rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(s=a+r),d!==o||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(s=a),h===o&&++c===i&&(l=a),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xf={focusedElem:t,selectionRange:n},Bl=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wn(e.type,y),p);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(E){St(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return _=mp,mp=!1,_}function Ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Ff(e,n,o)}r=r.next}while(r!==i)}}function Mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x_(t){var e=t.alternate;e!==null&&(t.alternate=null,x_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[as],delete e[Mf],delete e[wx],delete e[Ax])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function S_(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(i!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}var Gt=null,Xn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)E_(t,e,n),n=n.sibling}function E_(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:Qt||Lo(n,e);case 6:var i=Gt,r=Xn;Gt=null,Ui(t,e,n),Gt=i,Xn=r,Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?ic(t.parentNode,n):t.nodeType===1&&ic(t,n),ts(t)):ic(Gt,n.stateNode));break;case 4:i=Gt,r=Xn,Gt=n.stateNode.containerInfo,Xn=!0,Ui(t,e,n),Gt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ff(n,e,a),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Qt&&(Lo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){St(n,e,s)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Ui(t,e,n),Qt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Gx),e.forEach(function(i){var r=Qx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:Gt=s.stateNode,Xn=!1;break e;case 3:Gt=s.stateNode.containerInfo,Xn=!0;break e;case 4:Gt=s.stateNode.containerInfo,Xn=!0;break e}s=s.return}if(Gt===null)throw Error(ue(160));E_(o,a,r),Gt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)M_(e,t),e=e.sibling}function M_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ni(t),i&4){try{Ga(3,t,t.return),Mu(3,t)}catch(y){St(t,t.return,y)}try{Ga(5,t,t.return)}catch(y){St(t,t.return,y)}}break;case 1:Bn(e,t),ni(t),i&512&&n!==null&&Lo(n,n.return);break;case 5:if(Bn(e,t),ni(t),i&512&&n!==null&&Lo(n,n.return),t.flags&32){var r=t.stateNode;try{Za(r,"")}catch(y){St(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Wg(r,o),uf(s,a);var u=uf(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?$g(r,d):c==="dangerouslySetInnerHTML"?Yg(r,d):c==="children"?Za(r,d):pd(r,c,d,u)}switch(s){case"input":rf(r,o);break;case"textarea":Xg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?zo(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?zo(r,!!o.multiple,o.defaultValue,!0):zo(r,!!o.multiple,o.multiple?[]:"",!1))}r[as]=o}catch(y){St(t,t.return,y)}}break;case 6:if(Bn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){St(t,t.return,y)}}break;case 3:if(Bn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ts(e.containerInfo)}catch(y){St(t,t.return,y)}break;case 4:Bn(e,t),ni(t);break;case 13:Bn(e,t),ni(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Yd=Ct())),i&4&&vp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(u=Qt)||c,Bn(e,t),Qt=u):Bn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(we=t,c=t.child;c!==null;){for(d=we=c;we!==null;){switch(h=we,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ga(4,h,h.return);break;case 1:Lo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){St(i,n,y)}}break;case 5:Lo(h,h.return);break;case 22:if(h.memoizedState!==null){yp(d);continue}}m!==null?(m.return=h,we=m):yp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=qg("display",a))}catch(y){St(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){St(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ni(t),i&4&&vp(t);break;case 21:break;default:Bn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(S_(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Za(r,""),i.flags&=-33);var o=gp(t);kf(t,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,s=gp(t);zf(t,s,a);break;default:throw Error(ue(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wx(t,e,n){we=t,T_(t)}function T_(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Vs;if(!a){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Qt;s=Vs;var u=Qt;if(Vs=a,(Qt=l)&&!u)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?xp(r):l!==null?(l.return=a,we=l):xp(r);for(;o!==null;)we=o,T_(o),o=o.sibling;we=r,Vs=s,Qt=u}_p(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,we=o):_p(t)}}function _p(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Mu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&tp(e,o,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tp(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ts(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Qt||e.flags&512&&Of(e)}catch(h){St(e,e.return,h)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function yp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function xp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var o=e.return;try{Of(e)}catch(l){St(e,o,l)}break;case 5:var a=e.return;try{Of(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){we=null;break}var s=e.sibling;if(s!==null){s.return=e.return,we=s;break}we=e.return}}var Xx=Math.ceil,eu=bi.ReactCurrentDispatcher,Xd=bi.ReactCurrentOwner,On=bi.ReactCurrentBatchConfig,it=0,Bt=null,Lt=null,Xt=0,xn=0,Do=pr(0),Ut=0,ds=null,Gr=0,Tu=0,jd=0,Va=null,fn=null,Yd=0,Jo=1/0,gi=null,tu=!1,Bf=null,ir=null,Ws=!1,qi=null,nu=0,Wa=0,Hf=null,Pl=-1,bl=0;function sn(){return it&6?Ct():Pl!==-1?Pl:Pl=Ct()}function rr(t){return t.mode&1?it&2&&Xt!==0?Xt&-Xt:Cx.transition!==null?(bl===0&&(bl=sv()),bl):(t=at,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function Qn(t,e,n,i){if(50<Wa)throw Wa=0,Hf=null,Error(ue(185));ys(t,n,i),(!(it&2)||t!==Bt)&&(t===Bt&&(!(it&2)&&(Tu|=n),Ut===4&&ji(t,Xt)),mn(t,i),n===1&&it===0&&!(e.mode&1)&&(Jo=Ct()+500,xu&&mr()))}function mn(t,e){var n=t.callbackNode;Cy(t,e);var i=kl(t,t===Bt?Xt:0);if(i===0)n!==null&&Ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ph(n),e===1)t.tag===0?Rx(Sp.bind(null,t)):Uv(Sp.bind(null,t)),Mx(function(){!(it&6)&&mr()}),n=null;else{switch(lv(i)){case 1:n=yd;break;case 4:n=ov;break;case 16:n=zl;break;case 536870912:n=av;break;default:n=zl}n=D_(n,w_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w_(t,e){if(Pl=-1,bl=0,it&6)throw Error(ue(327));var n=t.callbackNode;if(Vo()&&t.callbackNode!==n)return null;var i=kl(t,t===Bt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=iu(t,i);else{e=i;var r=it;it|=2;var o=R_();(Bt!==t||Xt!==e)&&(gi=null,Jo=Ct()+500,Nr(t,e));do try{qx();break}catch(s){A_(t,s)}while(!0);Dd(),eu.current=o,it=r,Lt!==null?e=0:(Bt=null,Xt=0,e=Ut)}if(e!==0){if(e===2&&(r=pf(t),r!==0&&(i=r,e=Gf(t,r))),e===1)throw n=ds,Nr(t,0),ji(t,i),mn(t,Ct()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!jx(r)&&(e=iu(t,i),e===2&&(o=pf(t),o!==0&&(i=o,e=Gf(t,o))),e===1))throw n=ds,Nr(t,0),ji(t,i),mn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Tr(t,fn,gi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=Yd+500-Ct(),10<e)){if(kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ef(Tr.bind(null,t,fn,gi),e);break}Tr(t,fn,gi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);o=1<<a,a=e[a],a>r&&(r=a),i&=~o}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xx(i/1960))-i,10<i){t.timeoutHandle=Ef(Tr.bind(null,t,fn,gi),i);break}Tr(t,fn,gi);break;case 5:Tr(t,fn,gi);break;default:throw Error(ue(329))}}}return mn(t,Ct()),t.callbackNode===n?w_.bind(null,t):null}function Gf(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=iu(t,e),t!==2&&(e=fn,fn=n,e!==null&&Vf(e)),t}function Vf(t){fn===null?fn=t:fn.push.apply(fn,t)}function jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Jn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~jd,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Sp(t){if(it&6)throw Error(ue(327));Vo();var e=kl(t,0);if(!(e&1))return mn(t,Ct()),null;var n=iu(t,e);if(t.tag!==0&&n===2){var i=pf(t);i!==0&&(e=i,n=Gf(t,i))}if(n===1)throw n=ds,Nr(t,0),ji(t,e),mn(t,Ct()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,fn,gi),mn(t,Ct()),null}function qd(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(Jo=Ct()+500,xu&&mr())}}function Vr(t){qi!==null&&qi.tag===0&&!(it&6)&&Vo();var e=it;it|=1;var n=On.transition,i=at;try{if(On.transition=null,at=1,t)return t()}finally{at=i,On.transition=n,it=e,!(it&6)&&mr()}}function $d(){xn=Do.current,ht(Do)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ex(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Pd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wl();break;case 3:Zo(),ht(hn),ht(en),zd();break;case 5:Od(i);break;case 4:Zo();break;case 13:ht(gt);break;case 19:ht(gt);break;case 10:Ud(i.type._context);break;case 22:case 23:$d()}n=n.return}if(Bt=t,Lt=t=or(t.current,null),Xt=xn=e,Ut=0,ds=null,jd=Tu=Gr=0,fn=Va=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}n.pending=i}br=null}return t}function A_(t,e){do{var n=Lt;try{if(Dd(),Al.current=Jl,Ql){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Hr=0,kt=Dt=vt=null,Ha=!1,us=0,Xd.current=null,n===null||n.return===null){Ut=1,ds=e,Lt=null;break}e:{var o=t,a=n.return,s=n,l=e;if(e=Xt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=lp(a);if(m!==null){m.flags&=-257,up(m,a,s,o,e),m.mode&1&&sp(o,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){sp(o,u,e),Kd();break e}l=Error(ue(426))}}else if(pt&&s.mode&1){var p=lp(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),up(p,a,s,o,e),bd(Qo(l,s));break e}}o=l=Qo(l,s),Ut!==4&&(Ut=2),Va===null?Va=[o]:Va.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=u_(o,l,e);ep(o,f);break e;case 1:s=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ir===null||!ir.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=c_(o,s,e);ep(o,E);break e}}o=o.return}while(o!==null)}P_(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function R_(){var t=eu.current;return eu.current=Jl,t===null?Jl:t}function Kd(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Bt===null||!(Gr&268435455)&&!(Tu&268435455)||ji(Bt,Xt)}function iu(t,e){var n=it;it|=2;var i=R_();(Bt!==t||Xt!==e)&&(gi=null,Nr(t,e));do try{Yx();break}catch(r){A_(t,r)}while(!0);if(Dd(),it=n,eu.current=i,Lt!==null)throw Error(ue(261));return Bt=null,Xt=0,Ut}function Yx(){for(;Lt!==null;)C_(Lt)}function qx(){for(;Lt!==null&&!yy();)C_(Lt)}function C_(t){var e=L_(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?P_(t):Lt=e,Xd.current=null}function P_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hx(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=Bx(n,e,xn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Tr(t,e,n){var i=at,r=On.transition;try{On.transition=null,at=1,$x(t,e,n,i)}finally{On.transition=r,at=i}return null}function $x(t,e,n,i){do Vo();while(qi!==null);if(it&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Py(t,o),t===Bt&&(Lt=Bt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ws||(Ws=!0,D_(zl,function(){return Vo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=On.transition,On.transition=null;var a=at;at=1;var s=it;it|=4,Xd.current=null,Vx(t,n),M_(n,t),mx(xf),Bl=!!yf,xf=yf=null,t.current=n,Wx(n),xy(),it=s,at=a,On.transition=o}else t.current=n;if(Ws&&(Ws=!1,qi=t,nu=r),o=t.pendingLanes,o===0&&(ir=null),My(n.stateNode),mn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tu)throw tu=!1,t=Bf,Bf=null,t;return nu&1&&t.tag!==0&&Vo(),o=t.pendingLanes,o&1?t===Hf?Wa++:(Wa=0,Hf=t):Wa=0,mr(),null}function Vo(){if(qi!==null){var t=lv(nu),e=On.transition,n=at;try{if(On.transition=null,at=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,nu=0,it&6)throw Error(ue(331));var r=it;for(it|=4,we=t.current;we!==null;){var o=we,a=o.child;if(we.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(we=u;we!==null;){var c=we;switch(c.tag){case 0:case 11:case 15:Ga(8,c,o)}var d=c.child;if(d!==null)d.return=c,we=d;else for(;we!==null;){c=we;var h=c.sibling,m=c.return;if(x_(c),c===u){we=null;break}if(h!==null){h.return=m,we=h;break}we=m}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}we=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,we=a;else e:for(;we!==null;){if(o=we,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ga(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,we=f;break e}we=o.return}}var v=t.current;for(we=v;we!==null;){a=we;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,we=g;else e:for(a=v;we!==null;){if(s=we,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Mu(9,s)}}catch(P){St(s,s.return,P)}if(s===a){we=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,we=E;break e}we=s.return}}if(it=r,mr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(mu,t)}catch{}i=!0}return i}finally{at=n,On.transition=e}}return!1}function Ep(t,e,n){e=Qo(n,e),e=u_(t,e,1),t=nr(t,e,1),e=sn(),t!==null&&(ys(t,1,e),mn(t,e))}function St(t,e,n){if(t.tag===3)Ep(t,t,n);else for(;e!==null;){if(e.tag===3){Ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Qo(n,t),t=c_(e,t,1),e=nr(e,t,1),t=sn(),e!==null&&(ys(e,1,t),mn(e,t));break}}e=e.return}}function Kx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Xt&n)===n&&(Ut===4||Ut===3&&(Xt&130023424)===Xt&&500>Ct()-Yd?Nr(t,0):jd|=n),mn(t,e)}function b_(t,e){e===0&&(t.mode&1?(e=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):e=1);var n=sn();t=Ri(t,e),t!==null&&(ys(t,e,n),mn(t,n))}function Zx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b_(t,n)}function Qx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),b_(t,n)}var L_;L_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,kx(t,e,n);dn=!!(t.flags&131072)}else dn=!1,pt&&e.flags&1048576&&Nv(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cl(t,e),t=e.pendingProps;var r=qo(e,en.current);Go(e,n),r=Bd(null,e,i,t,r,n);var o=Hd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(o=!0,Xl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Id(e),r.updater=Su,e.stateNode=r,r._reactInternals=e,Pf(e,i,t,n),e=Df(null,e,i,!0,o,n)):(e.tag=0,pt&&o&&Cd(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eS(i),t=Wn(i,t),r){case 0:e=Lf(null,e,i,t,n);break e;case 1:e=dp(null,e,i,t,n);break e;case 11:e=cp(null,e,i,t,n);break e;case 14:e=fp(null,e,i,Wn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Lf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),dp(t,e,i,r,n);case 3:e:{if(p_(e),t===null)throw Error(ue(387));i=e.pendingProps,o=e.memoizedState,r=o.element,zv(t,e),Kl(e,i,null,n);var a=e.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Qo(Error(ue(423)),e),e=hp(t,e,i,n,r);break e}else if(i!==r){r=Qo(Error(ue(424)),e),e=hp(t,e,i,n,r);break e}else for(Sn=tr(e.stateNode.containerInfo.firstChild),En=e,pt=!0,Yn=null,n=Gv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),i===r){e=Ci(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return Vv(e),t===null&&Af(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,a=r.children,Sf(i,r)?a=null:o!==null&&Sf(i,o)&&(e.flags|=32),h_(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&Af(e),null;case 13:return m_(t,e,n);case 4:return Fd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ko(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),cp(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,a=r.value,ct(ql,i._currentValue),i._currentValue=a,o!==null)if(Jn(o.value,a)){if(o.children===r.children&&!hn.current){e=Ci(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rf(o.return,n,e),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(ue(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Rf(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Go(e,n),r=zn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),fp(t,e,i,r,n);case 15:return f_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Cl(t,e),e.tag=1,pn(i)?(t=!0,Xl(e)):t=!1,Go(e,n),Bv(e,i,r),Pf(e,i,r,n),Df(null,e,i,!0,t,n);case 19:return g_(t,e,n);case 22:return d_(t,e,n)}throw Error(ue(156,e.tag))};function D_(t,e){return rv(t,e)}function Jx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new Jx(t,e,n,i)}function Zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eS(t){if(typeof t=="function")return Zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gd)return 11;if(t===vd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,i,r,o){var a=2;if(i=t,typeof t=="function")Zd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Eo:return Ir(n.children,r,o,e);case md:a=8,r|=8;break;case Qc:return t=Fn(12,n,e,r|2),t.elementType=Qc,t.lanes=o,t;case Jc:return t=Fn(13,n,e,r),t.elementType=Jc,t.lanes=o,t;case ef:return t=Fn(19,n,e,r),t.elementType=ef,t.lanes=o,t;case Hg:return wu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kg:a=10;break e;case Bg:a=9;break e;case gd:a=11;break e;case vd:a=14;break e;case Bi:a=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=Fn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Ir(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function wu(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Hg,t.lanes=n,t.stateNode={isHidden:!1},t}function fc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function dc(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qd(t,e,n,i,r,o,a,s,l){return t=new tS(t,e,n,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Fn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(o),t}function nS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:So,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function U_(t){if(!t)return cr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(pn(n))return Dv(t,n,e)}return e}function N_(t,e,n,i,r,o,a,s,l){return t=Qd(n,i,!0,t,r,o,a,s,l),t.context=U_(null),n=t.current,i=sn(),r=rr(n),o=Ei(i,r),o.callback=e??null,nr(n,o,r),t.current.lanes=r,ys(t,r,i),mn(t,i),t}function Au(t,e,n,i){var r=e.current,o=sn(),a=rr(r);return n=U_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(o,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,a),t!==null&&(Qn(t,r,a,o),wl(t,r,a)),a}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jd(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function iS(){return null}var I_=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}Ru.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));Au(t,e,null,null)};Ru.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Au(null,t,null,null)}),e[Ai]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&hv(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function rS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=ru(a);o.call(u)}}var a=N_(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=a,t[Ai]=a.current,rs(t.nodeType===8?t.parentNode:t),Vr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var u=ru(l);s.call(u)}}var l=Qd(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[Ai]=l.current,rs(t.nodeType===8?t.parentNode:t),Vr(function(){Au(e,l,n,i)}),l}function Pu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var s=r;r=function(){var l=ru(a);s.call(l)}}Au(e,a,t,r)}else a=rS(n,e,t,r,i);return ru(a)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(xd(e,n|1),mn(e,Ct()),!(it&6)&&(Jo=Ct()+500,mr()))}break;case 13:Vr(function(){var i=Ri(t,1);if(i!==null){var r=sn();Qn(i,t,1,r)}}),Jd(t,1)}};Sd=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=sn();Qn(e,t,134217728,n)}Jd(t,134217728)}};cv=function(t){if(t.tag===13){var e=rr(t),n=Ri(t,e);if(n!==null){var i=sn();Qn(n,t,e,i)}Jd(t,e)}};fv=function(){return at};dv=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};ff=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yu(i);if(!r)throw Error(ue(90));Vg(i),rf(i,r)}}}break;case"textarea":Xg(t,n);break;case"select":e=n.value,e!=null&&zo(t,!!n.multiple,e,!1)}};Qg=qd;Jg=Vr;var oS={usingClientEntryPoint:!1,Events:[Ss,Ao,yu,Kg,Zg,qd]},xa={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aS={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xs.isDisabled&&Xs.supportsFiber)try{mu=Xs.inject(aS),ai=Xs}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(ue(200));return nS(t,e,null,n)};An.createRoot=function(t,e){if(!th(t))throw Error(ue(299));var n=!1,i="",r=I_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qd(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,rs(t.nodeType===8?t.parentNode:t),new eh(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Vr(t)};An.hydrate=function(t,e,n){if(!Cu(e))throw Error(ue(200));return Pu(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!th(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",a=I_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=N_(e,null,t,1,n??null,r,!1,o,a),t[Ai]=e.current,rs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ru(e)};An.render=function(t,e,n){if(!Cu(e))throw Error(ue(200));return Pu(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(ue(40));return t._reactRootContainer?(Vr(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};An.unstable_batchedUpdates=qd;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cu(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Pu(t,e,n,!1,i)};An.version="18.2.0-next-9e3b772b8-20220608";function F_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F_)}catch(t){console.error(t)}}F_(),Ng.exports=An;var nh=Ng.exports;const sS=Eg(nh),lS=Sg({__proto__:null,default:sS},[nh]);var wp=nh;Kc.createRoot=wp.createRoot,Kc.hydrateRoot=wp.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Et(){return Et=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Et.apply(this,arguments)}var Rt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rt||(Rt={}));const Ap="popstate";function uS(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:a,hash:s}=i.location;return hs("",{pathname:o,search:a,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Xr(r)}return fS(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cS(){return Math.random().toString(36).substr(2,8)}function Rp(t,e){return{usr:t.state,key:t.key,idx:e}}function hs(t,e,n,i){return n===void 0&&(n=null),Et({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Li(e):e,{state:n,key:e&&e.key||i||cS()})}function Xr(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Li(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function fS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,a=r.history,s=Rt.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Et({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){s=Rt.Pop;let p=c(),f=p==null?null:p-u;u=p,l&&l({action:s,location:y.location,delta:f})}function h(p,f){s=Rt.Push;let v=hs(y.location,p,f);n&&n(v,p),u=c()+1;let g=Rp(v,u),E=y.createHref(v);try{a.pushState(g,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(E)}o&&l&&l({action:s,location:y.location,delta:1})}function m(p,f){s=Rt.Replace;let v=hs(y.location,p,f);n&&n(v,p),u=c();let g=Rp(v,u),E=y.createHref(v);a.replaceState(g,"",E),o&&l&&l({action:s,location:y.location,delta:0})}function _(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Xr(p);return Ze(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let y={get action(){return s},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Ap,d),l=p,()=>{r.removeEventListener(Ap,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let f=_(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return a.go(p)}};return y}var xt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xt||(xt={}));const dS=new Set(["lazy","caseSensitive","path","id","index","children"]);function hS(t){return t.index===!0}function Wf(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,o)=>{let a=[...n,o],s=typeof r.id=="string"?r.id:a.join("-");if(Ze(r.index!==!0||!r.children,"Cannot specify children on an index route"),Ze(!i[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),hS(r)){let l=Et({},r,e(r),{id:s});return i[s]=l,l}else{let l=Et({},r,e(r),{id:s,children:void 0});return i[s]=l,r.children&&(l.children=Wf(r.children,e,a,i)),l}})}function Uo(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Li(e):e,r=fr(i.pathname||"/",n);if(r==null)return null;let o=O_(t);mS(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=TS(o[s],AS(r));return a}function pS(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function O_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Mi([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),O_(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:ES(u,o.index),routesMeta:c})};return t.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))r(o,a);else for(let l of z_(o.path))r(o,a,l)}),e}function z_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let a=z_(i.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),r&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function mS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const gS=/^:[\w-]+$/,vS=3,_S=2,yS=1,xS=10,SS=-2,Cp=t=>t==="*";function ES(t,e){let n=t.split("/"),i=n.length;return n.some(Cp)&&(i+=SS),e&&(i+=_S),n.filter(r=>!Cp(r)).reduce((r,o)=>r+(gS.test(o)?vS:o===""?yS:xS),i)}function MS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function TS(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=Xf({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=s.route;o.push({params:i,pathname:Mi([r,c.pathname]),pathnameBase:bS(Mi([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=Mi([r,c.pathnameBase]))}return o}function Xf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=wS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],a=o.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((u,c,d)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let y=s[d]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const _=s[d];return m&&!_?u[h]=void 0:u[h]=RS(_||"",h),u},{}),pathname:o,pathnameBase:a,pattern:t}}function wS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(i.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function AS(t){try{return decodeURI(t)}catch(e){return Wr(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function RS(t,e){try{return decodeURIComponent(t)}catch(n){return Wr(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function fr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function CS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Li(t):t;return{pathname:n?n.startsWith("/")?n:PS(n,e):e,search:LS(i),hash:DS(r)}}function PS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function hc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ih(t,e){let n=k_(t);return e?n.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function rh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Li(t):(r=Et({},t),Ze(!r.pathname||!r.pathname.includes("?"),hc("?","pathname","search",r)),Ze(!r.pathname||!r.pathname.includes("#"),hc("#","pathname","hash",r)),Ze(!r.search||!r.search.includes("#"),hc("#","search","hash",r)));let o=t===""||r.pathname==="",a=o?"/":r.pathname,s;if(a==null)s=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}s=d>=0?e[d]:"/"}let l=CS(r,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Mi=t=>t.join("/").replace(/\/\/+/g,"/"),bS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class oh{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function B_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const H_=["post","put","patch","delete"],US=new Set(H_),NS=["get",...H_],IS=new Set(NS),FS=new Set([301,302,303,307,308]),OS=new Set([307,308]),pc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},zS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Sa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},G_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kS=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),V_="remix-router-transitions";function BS(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!n;Ze(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(t.mapRouteProperties)r=t.mapRouteProperties;else if(t.detectErrorBoundary){let C=t.detectErrorBoundary;r=D=>({hasErrorBoundary:C(D)})}else r=kS;let o={},a=Wf(t.routes,r,void 0,o),s,l=t.basename||"/",u=Et({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,h=null,m=null,_=null,y=t.hydrationData!=null,p=Uo(a,t.history.location,l),f=null;if(p==null){let C=bn(404,{pathname:t.history.location.pathname}),{matches:D,route:F}=Fp(a);p=D,f={[F.id]:C}}let v,g=p.some(C=>C.route.lazy),E=p.some(C=>C.route.loader);if(g)v=!1;else if(!E)v=!0;else if(u.v7_partialHydration){let C=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null;v=p.every(F=>F.route.loader&&F.route.loader.hydrate!==!0&&(C&&C[F.route.id]!==void 0||D&&D[F.route.id]!==void 0))}else v=t.hydrationData!=null;let P,x={historyAction:t.history.action,location:t.history.location,matches:p,initialized:v,navigation:pc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||f,fetchers:new Map,blockers:new Map},T=Rt.Pop,N=!1,S,A=!1,k=new Map,K=null,re=!1,U=!1,X=[],$=[],Z=new Map,I=0,B=-1,W=new Map,Q=new Set,ee=new Map,q=new Map,J=new Set,ge=new Map,Ee=new Map,Ae=!1;function ke(){if(c=t.history.listen(C=>{let{action:D,location:F,delta:te}=C;if(Ae){Ae=!1;return}Wr(Ee.size===0||te!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=be({currentLocation:x.location,nextLocation:F,historyAction:D});if(ce&&te!=null){Ae=!0,t.history.go(te*-1),le(ce,{state:"blocked",location:F,proceed(){le(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),t.history.go(te)},reset(){let Le=new Map(x.blockers);Le.set(ce,Sa),ze({blockers:Le})}});return}return Ne(D,F)}),n){ZS(e,k);let C=()=>QS(e,k);e.addEventListener("pagehide",C),K=()=>e.removeEventListener("pagehide",C)}return x.initialized||Ne(Rt.Pop,x.location,{initialHydration:!0}),P}function He(){c&&c(),K&&K(),d.clear(),S&&S.abort(),x.fetchers.forEach((C,D)=>Me(D)),x.blockers.forEach((C,D)=>he(D))}function Ie(C){return d.add(C),()=>d.delete(C)}function ze(C,D){D===void 0&&(D={}),x=Et({},x,C);let F=[],te=[];u.v7_fetcherPersist&&x.fetchers.forEach((ce,Le)=>{ce.state==="idle"&&(J.has(Le)?te.push(Le):F.push(Le))}),[...d].forEach(ce=>ce(x,{deletedFetchers:te,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),u.v7_fetcherPersist&&(F.forEach(ce=>x.fetchers.delete(ce)),te.forEach(ce=>Me(ce)))}function H(C,D,F){var te,ce;let{flushSync:Le}=F===void 0?{}:F,Ce=x.actionData!=null&&x.navigation.formMethod!=null&&jn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((te=C.state)==null?void 0:te._isRedirect)!==!0,ye;D.actionData?Object.keys(D.actionData).length>0?ye=D.actionData:ye=null:Ce?ye=x.actionData:ye=null;let Te=D.loaderData?Ip(x.loaderData,D.loaderData,D.matches||[],D.errors):x.loaderData,Be=x.blockers;Be.size>0&&(Be=new Map(Be),Be.forEach((rt,Pt)=>Be.set(Pt,Sa)));let Tt=N===!0||x.navigation.formMethod!=null&&jn(x.navigation.formMethod)&&((ce=C.state)==null?void 0:ce._isRedirect)!==!0;s&&(a=s,s=void 0),re||T===Rt.Pop||(T===Rt.Push?t.history.push(C,C.state):T===Rt.Replace&&t.history.replace(C,C.state));let Ye;if(T===Rt.Pop){let rt=k.get(x.location.pathname);rt&&rt.has(C.pathname)?Ye={currentLocation:x.location,nextLocation:C}:k.has(C.pathname)&&(Ye={currentLocation:C,nextLocation:x.location})}else if(A){let rt=k.get(x.location.pathname);rt?rt.add(C.pathname):(rt=new Set([C.pathname]),k.set(x.location.pathname,rt)),Ye={currentLocation:x.location,nextLocation:C}}ze(Et({},D,{actionData:ye,loaderData:Te,historyAction:T,location:C,initialized:!0,navigation:pc,revalidation:"idle",restoreScrollPosition:L(C,D.matches||x.matches),preventScrollReset:Tt,blockers:Be}),{viewTransitionOpts:Ye,flushSync:Le===!0}),T=Rt.Pop,N=!1,A=!1,re=!1,U=!1,X=[],$=[]}async function Mt(C,D){if(typeof C=="number"){t.history.go(C);return}let F=jf(x.location,x.matches,l,u.v7_prependBasename,C,u.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:te,submission:ce,error:Le}=Pp(u.v7_normalizeFormMethod,!1,F,D),Ce=x.location,ye=hs(x.location,te,D&&D.state);ye=Et({},ye,t.history.encodeLocation(ye));let Te=D&&D.replace!=null?D.replace:void 0,Be=Rt.Push;Te===!0?Be=Rt.Replace:Te===!1||ce!=null&&jn(ce.formMethod)&&ce.formAction===x.location.pathname+x.location.search&&(Be=Rt.Replace);let Tt=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,Ye=(D&&D.unstable_flushSync)===!0,rt=be({currentLocation:Ce,nextLocation:ye,historyAction:Be});if(rt){le(rt,{state:"blocked",location:ye,proceed(){le(rt,{state:"proceeding",proceed:void 0,reset:void 0,location:ye}),Mt(C,D)},reset(){let Pt=new Map(x.blockers);Pt.set(rt,Sa),ze({blockers:Pt})}});return}return await Ne(Be,ye,{submission:ce,pendingError:Le,preventScrollReset:Tt,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:Ye})}function Ue(){if(oe(),ze({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Ne(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Ne(T||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Ne(C,D,F){S&&S.abort(),S=null,T=C,re=(F&&F.startUninterruptedRevalidation)===!0,pe(x.location,x.matches),N=(F&&F.preventScrollReset)===!0,A=(F&&F.enableViewTransition)===!0;let te=s||a,ce=F&&F.overrideNavigation,Le=Uo(te,D,l),Ce=(F&&F.flushSync)===!0;if(!Le){let Pt=bn(404,{pathname:D.pathname}),{matches:Ht,route:wt}=Fp(te);Xe(),H(D,{matches:Ht,loaderData:{},errors:{[wt.id]:Pt}},{flushSync:Ce});return}if(x.initialized&&!U&&XS(x.location,D)&&!(F&&F.submission&&jn(F.submission.formMethod))){H(D,{matches:Le},{flushSync:Ce});return}S=new AbortController;let ye=Ma(t.history,D,S.signal,F&&F.submission),Te,Be;if(F&&F.pendingError)Be={[Xa(Le).route.id]:F.pendingError};else if(F&&F.submission&&jn(F.submission.formMethod)){let Pt=await Pe(ye,D,F.submission,Le,{replace:F.replace,flushSync:Ce});if(Pt.shortCircuited)return;Te=Pt.pendingActionData,Be=Pt.pendingActionError,ce=mc(D,F.submission),Ce=!1,ye=new Request(ye.url,{signal:ye.signal})}let{shortCircuited:Tt,loaderData:Ye,errors:rt}=await lt(ye,D,Le,ce,F&&F.submission,F&&F.fetcherSubmission,F&&F.replace,F&&F.initialHydration===!0,Ce,Te,Be);Tt||(S=null,H(D,Et({matches:Le},Te?{actionData:Te}:{},{loaderData:Ye,errors:rt})))}async function Pe(C,D,F,te,ce){ce===void 0&&(ce={}),oe();let Le=$S(D,F);ze({navigation:Le},{flushSync:ce.flushSync===!0});let Ce,ye=qf(te,D);if(!ye.route.action&&!ye.route.lazy)Ce={type:xt.error,error:bn(405,{method:C.method,pathname:D.pathname,routeId:ye.route.id})};else if(Ce=await Ea("action",C,ye,te,o,r,l,u.v7_relativeSplatPath),C.signal.aborted)return{shortCircuited:!0};if(Ur(Ce)){let Te;return ce&&ce.replace!=null?Te=ce.replace:Te=Ce.location===x.location.pathname+x.location.search,await G(x,Ce,{submission:F,replace:Te}),{shortCircuited:!0}}if(No(Ce)){let Te=Xa(te,ye.route.id);return(ce&&ce.replace)!==!0&&(T=Rt.Push),{pendingActionData:{},pendingActionError:{[Te.route.id]:Ce.error}}}if(Dr(Ce))throw bn(400,{type:"defer-action"});return{pendingActionData:{[ye.route.id]:Ce.data}}}async function lt(C,D,F,te,ce,Le,Ce,ye,Te,Be,Tt){let Ye=te||mc(D,ce),rt=ce||Le||kp(Ye),Pt=s||a,[Ht,wt]=bp(t.history,x,F,rt,D,u.v7_partialHydration&&ye===!0,U,X,$,J,ee,Q,Pt,l,Be,Tt);if(Xe(me=>!(F&&F.some(xe=>xe.route.id===me))||Ht&&Ht.some(xe=>xe.route.id===me)),B=++I,Ht.length===0&&wt.length===0){let me=Qe();return H(D,Et({matches:F,loaderData:{},errors:Tt||null},Be?{actionData:Be}:{},me?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Te}),{shortCircuited:!0}}if(!re&&(!u.v7_partialHydration||!ye)){wt.forEach(xe=>{let De=x.fetchers.get(xe.key),Ve=Ta(void 0,De?De.data:void 0);x.fetchers.set(xe.key,Ve)});let me=Be||x.actionData;ze(Et({navigation:Ye},me?Object.keys(me).length===0?{actionData:null}:{actionData:me}:{},wt.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Te})}wt.forEach(me=>{Z.has(me.key)&&Oe(me.key),me.controller&&Z.set(me.key,me.controller)});let li=()=>wt.forEach(me=>Oe(me.key));S&&S.signal.addEventListener("abort",li);let{results:fa,loaderResults:Di,fetcherResults:ti}=await se(x.matches,F,Ht,wt,C);if(C.signal.aborted)return{shortCircuited:!0};S&&S.signal.removeEventListener("abort",li),wt.forEach(me=>Z.delete(me.key));let w=Op(fa);if(w){if(w.idx>=Ht.length){let me=wt[w.idx-Ht.length].key;Q.add(me)}return await G(x,w.result,{replace:Ce}),{shortCircuited:!0}}let{loaderData:O,errors:j}=Np(x,F,Ht,Di,Tt,wt,ti,ge);ge.forEach((me,xe)=>{me.subscribe(De=>{(De||me.done)&&ge.delete(xe)})});let Y=Qe(),V=b(B),Se=Y||V||wt.length>0;return Et({loaderData:O,errors:j},Se?{fetchers:new Map(x.fetchers)}:{})}function Ge(C,D,F,te){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Z.has(C)&&Oe(C);let ce=(te&&te.unstable_flushSync)===!0,Le=s||a,Ce=jf(x.location,x.matches,l,u.v7_prependBasename,F,u.v7_relativeSplatPath,D,te==null?void 0:te.relative),ye=Uo(Le,Ce,l);if(!ye){Re(C,D,bn(404,{pathname:Ce}),{flushSync:ce});return}let{path:Te,submission:Be,error:Tt}=Pp(u.v7_normalizeFormMethod,!0,Ce,te);if(Tt){Re(C,D,Tt,{flushSync:ce});return}let Ye=qf(ye,Te);if(N=(te&&te.preventScrollReset)===!0,Be&&jn(Be.formMethod)){R(C,D,Te,Ye,ye,ce,Be);return}ee.set(C,{routeId:D,path:Te}),M(C,D,Te,Ye,ye,ce,Be)}async function R(C,D,F,te,ce,Le,Ce){if(oe(),ee.delete(C),!te.route.action&&!te.route.lazy){let xe=bn(405,{method:Ce.formMethod,pathname:F,routeId:D});Re(C,D,xe,{flushSync:Le});return}let ye=x.fetchers.get(C);ne(C,KS(Ce,ye),{flushSync:Le});let Te=new AbortController,Be=Ma(t.history,F,Te.signal,Ce);Z.set(C,Te);let Tt=I,Ye=await Ea("action",Be,te,ce,o,r,l,u.v7_relativeSplatPath);if(Be.signal.aborted){Z.get(C)===Te&&Z.delete(C);return}if(u.v7_fetcherPersist&&J.has(C)){if(Ur(Ye)||No(Ye)){ne(C,ki(void 0));return}}else{if(Ur(Ye))if(Z.delete(C),B>Tt){ne(C,ki(void 0));return}else return Q.add(C),ne(C,Ta(Ce)),G(x,Ye,{fetcherSubmission:Ce});if(No(Ye)){Re(C,D,Ye.error);return}}if(Dr(Ye))throw bn(400,{type:"defer-action"});let rt=x.navigation.location||x.location,Pt=Ma(t.history,rt,Te.signal),Ht=s||a,wt=x.navigation.state!=="idle"?Uo(Ht,x.navigation.location,l):x.matches;Ze(wt,"Didn't find any matches after fetcher action");let li=++I;W.set(C,li);let fa=Ta(Ce,Ye.data);x.fetchers.set(C,fa);let[Di,ti]=bp(t.history,x,wt,Ce,rt,!1,U,X,$,J,ee,Q,Ht,l,{[te.route.id]:Ye.data},void 0);ti.filter(xe=>xe.key!==C).forEach(xe=>{let De=xe.key,Ve=x.fetchers.get(De),We=Ta(void 0,Ve?Ve.data:void 0);x.fetchers.set(De,We),Z.has(De)&&Oe(De),xe.controller&&Z.set(De,xe.controller)}),ze({fetchers:new Map(x.fetchers)});let w=()=>ti.forEach(xe=>Oe(xe.key));Te.signal.addEventListener("abort",w);let{results:O,loaderResults:j,fetcherResults:Y}=await se(x.matches,wt,Di,ti,Pt);if(Te.signal.aborted)return;Te.signal.removeEventListener("abort",w),W.delete(C),Z.delete(C),ti.forEach(xe=>Z.delete(xe.key));let V=Op(O);if(V){if(V.idx>=Di.length){let xe=ti[V.idx-Di.length].key;Q.add(xe)}return G(x,V.result)}let{loaderData:Se,errors:me}=Np(x,x.matches,Di,j,void 0,ti,Y,ge);if(x.fetchers.has(C)){let xe=ki(Ye.data);x.fetchers.set(C,xe)}b(li),x.navigation.state==="loading"&&li>B?(Ze(T,"Expected pending action"),S&&S.abort(),H(x.navigation.location,{matches:wt,loaderData:Se,errors:me,fetchers:new Map(x.fetchers)})):(ze({errors:me,loaderData:Ip(x.loaderData,Se,wt,me),fetchers:new Map(x.fetchers)}),U=!1)}async function M(C,D,F,te,ce,Le,Ce){let ye=x.fetchers.get(C);ne(C,Ta(Ce,ye?ye.data:void 0),{flushSync:Le});let Te=new AbortController,Be=Ma(t.history,F,Te.signal);Z.set(C,Te);let Tt=I,Ye=await Ea("loader",Be,te,ce,o,r,l,u.v7_relativeSplatPath);if(Dr(Ye)&&(Ye=await j_(Ye,Be.signal,!0)||Ye),Z.get(C)===Te&&Z.delete(C),!Be.signal.aborted){if(J.has(C)){ne(C,ki(void 0));return}if(Ur(Ye))if(B>Tt){ne(C,ki(void 0));return}else{Q.add(C),await G(x,Ye);return}if(No(Ye)){Re(C,D,Ye.error);return}Ze(!Dr(Ye),"Unhandled fetcher deferred data"),ne(C,ki(Ye.data))}}async function G(C,D,F){let{submission:te,fetcherSubmission:ce,replace:Le}=F===void 0?{}:F;D.revalidate&&(U=!0);let Ce=hs(C.location,D.location,{_isRedirect:!0});if(Ze(Ce,"Expected a location on the redirect navigation"),n){let rt=!1;if(D.reloadDocument)rt=!0;else if(G_.test(D.location)){const Pt=t.history.createURL(D.location);rt=Pt.origin!==e.location.origin||fr(Pt.pathname,l)==null}if(rt){Le?e.location.replace(D.location):e.location.assign(D.location);return}}S=null;let ye=Le===!0?Rt.Replace:Rt.Push,{formMethod:Te,formAction:Be,formEncType:Tt}=C.navigation;!te&&!ce&&Te&&Be&&Tt&&(te=kp(C.navigation));let Ye=te||ce;if(OS.has(D.status)&&Ye&&jn(Ye.formMethod))await Ne(ye,Ce,{submission:Et({},Ye,{formAction:D.location}),preventScrollReset:N});else{let rt=mc(Ce,te);await Ne(ye,Ce,{overrideNavigation:rt,fetcherSubmission:ce,preventScrollReset:N})}}async function se(C,D,F,te,ce){let Le=await Promise.all([...F.map(Te=>Ea("loader",ce,Te,D,o,r,l,u.v7_relativeSplatPath)),...te.map(Te=>Te.matches&&Te.match&&Te.controller?Ea("loader",Ma(t.history,Te.path,Te.controller.signal),Te.match,Te.matches,o,r,l,u.v7_relativeSplatPath):{type:xt.error,error:bn(404,{pathname:Te.path})})]),Ce=Le.slice(0,F.length),ye=Le.slice(F.length);return await Promise.all([zp(C,F,Ce,Ce.map(()=>ce.signal),!1,x.loaderData),zp(C,te.map(Te=>Te.match),ye,te.map(Te=>Te.controller?Te.controller.signal:null),!0)]),{results:Le,loaderResults:Ce,fetcherResults:ye}}function oe(){U=!0,X.push(...Xe()),ee.forEach((C,D)=>{Z.has(D)&&($.push(D),Oe(D))})}function ne(C,D,F){F===void 0&&(F={}),x.fetchers.set(C,D),ze({fetchers:new Map(x.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function Re(C,D,F,te){te===void 0&&(te={});let ce=Xa(x.matches,D);Me(C),ze({errors:{[ce.route.id]:F},fetchers:new Map(x.fetchers)},{flushSync:(te&&te.flushSync)===!0})}function _e(C){return u.v7_fetcherPersist&&(q.set(C,(q.get(C)||0)+1),J.has(C)&&J.delete(C)),x.fetchers.get(C)||zS}function Me(C){let D=x.fetchers.get(C);Z.has(C)&&!(D&&D.state==="loading"&&W.has(C))&&Oe(C),ee.delete(C),W.delete(C),Q.delete(C),J.delete(C),x.fetchers.delete(C)}function Fe(C){if(u.v7_fetcherPersist){let D=(q.get(C)||0)-1;D<=0?(q.delete(C),J.add(C)):q.set(C,D)}else Me(C);ze({fetchers:new Map(x.fetchers)})}function Oe(C){let D=Z.get(C);Ze(D,"Expected fetch controller: "+C),D.abort(),Z.delete(C)}function ae(C){for(let D of C){let F=_e(D),te=ki(F.data);x.fetchers.set(D,te)}}function Qe(){let C=[],D=!1;for(let F of Q){let te=x.fetchers.get(F);Ze(te,"Expected fetcher: "+F),te.state==="loading"&&(Q.delete(F),C.push(F),D=!0)}return ae(C),D}function b(C){let D=[];for(let[F,te]of W)if(te<C){let ce=x.fetchers.get(F);Ze(ce,"Expected fetcher: "+F),ce.state==="loading"&&(Oe(F),W.delete(F),D.push(F))}return ae(D),D.length>0}function ie(C,D){let F=x.blockers.get(C)||Sa;return Ee.get(C)!==D&&Ee.set(C,D),F}function he(C){x.blockers.delete(C),Ee.delete(C)}function le(C,D){let F=x.blockers.get(C)||Sa;Ze(F.state==="unblocked"&&D.state==="blocked"||F.state==="blocked"&&D.state==="blocked"||F.state==="blocked"&&D.state==="proceeding"||F.state==="blocked"&&D.state==="unblocked"||F.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+F.state+" -> "+D.state);let te=new Map(x.blockers);te.set(C,D),ze({blockers:te})}function be(C){let{currentLocation:D,nextLocation:F,historyAction:te}=C;if(Ee.size===0)return;Ee.size>1&&Wr(!1,"A router only supports one blocker at a time");let ce=Array.from(Ee.entries()),[Le,Ce]=ce[ce.length-1],ye=x.blockers.get(Le);if(!(ye&&ye.state==="proceeding")&&Ce({currentLocation:D,nextLocation:F,historyAction:te}))return Le}function Xe(C){let D=[];return ge.forEach((F,te)=>{(!C||C(te))&&(F.cancel(),D.push(te),ge.delete(te))}),D}function tt(C,D,F){if(h=C,_=D,m=F||null,!y&&x.navigation===pc){y=!0;let te=L(x.location,x.matches);te!=null&&ze({restoreScrollPosition:te})}return()=>{h=null,_=null,m=null}}function je(C,D){return m&&m(C,D.map(te=>pS(te,x.loaderData)))||C.key}function pe(C,D){if(h&&_){let F=je(C,D);h[F]=_()}}function L(C,D){if(h){let F=je(C,D),te=h[F];if(typeof te=="number")return te}return null}function de(C){o={},s=Wf(C,r,void 0,o)}return P={get basename(){return l},get future(){return u},get state(){return x},get routes(){return a},get window(){return e},initialize:ke,subscribe:Ie,enableScrollRestoration:tt,navigate:Mt,fetch:Ge,revalidate:Ue,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:_e,deleteFetcher:Fe,dispose:He,getBlocker:ie,deleteBlocker:he,_internalFetchControllers:Z,_internalActiveDeferreds:ge,_internalSetRoutes:de},P}function HS(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function jf(t,e,n,i,r,o,a,s){let l,u;if(a){l=[];for(let d of e)if(l.push(d),d.route.id===a){u=d;break}}else l=e,u=e[e.length-1];let c=rh(r||".",ih(l,o),fr(t.pathname,n)||t.pathname,s==="path");return r==null&&(c.search=t.search,c.hash=t.hash),(r==null||r===""||r===".")&&u&&u.route.index&&!ah(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Mi([n,c.pathname])),Xr(c)}function Pp(t,e,n,i){if(!i||!HS(i))return{path:n};if(i.formMethod&&!qS(i.formMethod))return{path:n,error:bn(405,{method:i.formMethod})};let r=()=>({path:n,error:bn(400,{type:"invalid-body"})}),o=i.formMethod||"get",a=t?o.toUpperCase():o.toLowerCase(),s=X_(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!jn(a))return r();let h=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((m,_)=>{let[y,p]=_;return""+m+y+"="+p+`
`},""):String(i.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:i.formEncType,formData:void 0,json:void 0,text:h}}}else if(i.formEncType==="application/json"){if(!jn(a))return r();try{let h=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:i.formEncType,formData:void 0,json:h,text:void 0}}}catch{return r()}}}Ze(typeof FormData=="function","FormData is not available in this environment");let l,u;if(i.formData)l=Yf(i.formData),u=i.formData;else if(i.body instanceof FormData)l=Yf(i.body),u=i.body;else if(i.body instanceof URLSearchParams)l=i.body,u=Up(l);else if(i.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(i.body),u=Up(l)}catch{return r()}let c={formMethod:a,formAction:s,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(jn(c.formMethod))return{path:n,submission:c};let d=Li(n);return e&&d.search&&ah(d.search)&&l.append("index",""),d.search="?"+l,{path:Xr(d),submission:c}}function GS(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function bp(t,e,n,i,r,o,a,s,l,u,c,d,h,m,_,y){let p=y?Object.values(y)[0]:_?Object.values(_)[0]:void 0,f=t.createURL(e.location),v=t.createURL(r),g=y?Object.keys(y)[0]:void 0,P=GS(n,g).filter((T,N)=>{let{route:S}=T;if(S.lazy)return!0;if(S.loader==null)return!1;if(o)return S.loader.hydrate?!0:e.loaderData[S.id]===void 0&&(!e.errors||e.errors[S.id]===void 0);if(VS(e.loaderData,e.matches[N],T)||s.some(K=>K===T.route.id))return!0;let A=e.matches[N],k=T;return Lp(T,Et({currentUrl:f,currentParams:A.params,nextUrl:v,nextParams:k.params},i,{actionResult:p,defaultShouldRevalidate:a||f.pathname+f.search===v.pathname+v.search||f.search!==v.search||W_(A,k)}))}),x=[];return c.forEach((T,N)=>{if(o||!n.some(re=>re.route.id===T.routeId)||u.has(N))return;let S=Uo(h,T.path,m);if(!S){x.push({key:N,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(N),k=qf(S,T.path),K=!1;d.has(N)?K=!1:l.includes(N)?K=!0:A&&A.state!=="idle"&&A.data===void 0?K=a:K=Lp(k,Et({currentUrl:f,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},i,{actionResult:p,defaultShouldRevalidate:a})),K&&x.push({key:N,routeId:T.routeId,path:T.path,matches:S,match:k,controller:new AbortController})}),[P,x]}function VS(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function W_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Lp(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Dp(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];Ze(r,"No route found in manifest");let o={};for(let a in i){let l=r[a]!==void 0&&a!=="hasErrorBoundary";Wr(!l,'Route "'+r.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!dS.has(a)&&(o[a]=i[a])}Object.assign(r,o),Object.assign(r,Et({},e(r),{lazy:void 0}))}async function Ea(t,e,n,i,r,o,a,s,l){l===void 0&&(l={});let u,c,d,h=y=>{let p,f=new Promise((v,g)=>p=g);return d=()=>p(),e.signal.addEventListener("abort",d),Promise.race([y({request:e,params:n.params,context:l.requestContext}),f])};try{let y=n.route[t];if(n.route.lazy)if(y){let p,f=await Promise.all([h(y).catch(v=>{p=v}),Dp(n.route,o,r)]);if(p)throw p;c=f[0]}else if(await Dp(n.route,o,r),y=n.route[t],y)c=await h(y);else if(t==="action"){let p=new URL(e.url),f=p.pathname+p.search;throw bn(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:xt.data,data:void 0};else if(y)c=await h(y);else{let p=new URL(e.url),f=p.pathname+p.search;throw bn(404,{pathname:f})}Ze(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){u=xt.error,c=y}finally{d&&e.signal.removeEventListener("abort",d)}if(YS(c)){let y=c.status;if(FS.has(y)){let f=c.headers.get("Location");if(Ze(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!G_.test(f))f=jf(new URL(e.url),i.slice(0,i.indexOf(n)+1),a,!0,f,s);else if(!l.isStaticRequest){let v=new URL(e.url),g=f.startsWith("//")?new URL(v.protocol+f):new URL(f),E=fr(g.pathname,a)!=null;g.origin===v.origin&&E&&(f=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw c.headers.set("Location",f),c;return{type:xt.redirect,status:y,location:f,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===xt.error?xt.error:xt.data,response:c};let p;try{let f=c.headers.get("Content-Type");f&&/\bapplication\/json\b/.test(f)?c.body==null?p=null:p=await c.json():p=await c.text()}catch(f){return{type:xt.error,error:f}}return u===xt.error?{type:u,error:new oh(y,c.statusText,p),headers:c.headers}:{type:xt.data,data:p,statusCode:c.status,headers:c.headers}}if(u===xt.error)return{type:u,error:c};if(jS(c)){var m,_;return{type:xt.deferred,deferredData:c,statusCode:(m=c.init)==null?void 0:m.status,headers:((_=c.init)==null?void 0:_.headers)&&new Headers(c.init.headers)}}return{type:xt.data,data:c}}function Ma(t,e,n,i){let r=t.createURL(X_(e)).toString(),o={signal:n};if(i&&jn(i.formMethod)){let{formMethod:a,formEncType:s}=i;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(i.json)):s==="text/plain"?o.body=i.text:s==="application/x-www-form-urlencoded"&&i.formData?o.body=Yf(i.formData):o.body=i.formData}return new Request(r,o)}function Yf(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function Up(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function WS(t,e,n,i,r){let o={},a=null,s,l=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(Ze(!Ur(c),"Cannot handle redirect results in processLoaderData"),No(c)){let m=Xa(t,h),_=c.error;i&&(_=Object.values(i)[0],i=void 0),a=a||{},a[m.route.id]==null&&(a[m.route.id]=_),o[h]=void 0,l||(l=!0,s=B_(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else Dr(c)?(r.set(h,c.deferredData),o[h]=c.deferredData.data):o[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[h]=c.headers)}),i&&(a=i,o[Object.keys(i)[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:u}}function Np(t,e,n,i,r,o,a,s){let{loaderData:l,errors:u}=WS(e,n,i,r,s);for(let c=0;c<o.length;c++){let{key:d,match:h,controller:m}=o[c];Ze(a!==void 0&&a[c]!==void 0,"Did not find corresponding fetcher result");let _=a[c];if(!(m&&m.signal.aborted))if(No(_)){let y=Xa(t.matches,h==null?void 0:h.route.id);u&&u[y.route.id]||(u=Et({},u,{[y.route.id]:_.error})),t.fetchers.delete(d)}else if(Ur(_))Ze(!1,"Unhandled fetcher revalidation redirect");else if(Dr(_))Ze(!1,"Unhandled fetcher deferred data");else{let y=ki(_.data);t.fetchers.set(d,y)}}return{loaderData:l,errors:u}}function Ip(t,e,n,i){let r=Et({},e);for(let o of n){let a=o.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(r[a]=e[a]):t[a]!==void 0&&o.route.loader&&(r[a]=t[a]),i&&i.hasOwnProperty(a))break}return r}function Xa(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function Fp(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function bn(t,e){let{pathname:n,routeId:i,method:r,type:o}=e===void 0?{}:e,a="Unknown Server Error",s="Unknown @remix-run/router error";return t===400?(a="Bad Request",r&&n&&i?s="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):t===403?(a="Forbidden",s='Route "'+i+'" does not match URL "'+n+'"'):t===404?(a="Not Found",s='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",r&&n&&i?s="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(s='Invalid request method "'+r.toUpperCase()+'"')),new oh(t||500,a,new Error(s),!0)}function Op(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ur(n))return{result:n,idx:e}}}function X_(t){let e=typeof t=="string"?Li(t):t;return Xr(Et({},e,{hash:""}))}function XS(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Dr(t){return t.type===xt.deferred}function No(t){return t.type===xt.error}function Ur(t){return(t&&t.type)===xt.redirect}function jS(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function YS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function qS(t){return IS.has(t.toLowerCase())}function jn(t){return US.has(t.toLowerCase())}async function zp(t,e,n,i,r,o){for(let a=0;a<n.length;a++){let s=n[a],l=e[a];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!W_(u,l)&&(o&&o[l.route.id])!==void 0;if(Dr(s)&&(r||c)){let d=i[a];Ze(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await j_(s,d,r).then(h=>{h&&(n[a]=h||n[a])})}}}async function j_(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:xt.data,data:t.deferredData.unwrappedData}}catch(r){return{type:xt.error,error:r}}return{type:xt.data,data:t.deferredData.data}}}function ah(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function qf(t,e){let n=typeof e=="string"?Li(e).search:e.search;if(t[t.length-1].route.index&&ah(n||""))return t[t.length-1];let i=k_(t);return i[i.length-1]}function kp(t){let{formMethod:e,formAction:n,formEncType:i,text:r,formData:o,json:a}=t;if(!(!e||!n||!i)){if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(o!=null)return{formMethod:e,formAction:n,formEncType:i,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:a,text:void 0}}}function mc(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function $S(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ta(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function KS(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function ki(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ZS(t,e){try{let n=t.sessionStorage.getItem(V_);if(n){let i=JSON.parse(n);for(let[r,o]of Object.entries(i||{}))o&&Array.isArray(o)&&e.set(r,new Set(o||[]))}}catch{}}function QS(t,e){if(e.size>0){let n={};for(let[i,r]of e)n[i]=[...r];try{t.sessionStorage.setItem(V_,JSON.stringify(n))}catch(i){Wr(!1,"Failed to save applied view transitions in sessionStorage ("+i+").")}}}/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ps.apply(this,arguments)}const Ms=fe.createContext(null),sh=fe.createContext(null),gr=fe.createContext(null),bu=fe.createContext(null),Zr=fe.createContext({outlet:null,matches:[],isDataRoute:!1}),Y_=fe.createContext(null);function JS(t,e){let{relative:n}=e===void 0?{}:e;Ts()||Ze(!1);let{basename:i,navigator:r}=fe.useContext(gr),{hash:o,pathname:a,search:s}=Lu(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Mi([i,a])),r.createHref({pathname:l,search:s,hash:o})}function Ts(){return fe.useContext(bu)!=null}function ws(){return Ts()||Ze(!1),fe.useContext(bu).location}function q_(t){fe.useContext(gr).static||fe.useLayoutEffect(t)}function eE(){let{isDataRoute:t}=fe.useContext(Zr);return t?dE():tE()}function tE(){Ts()||Ze(!1);let t=fe.useContext(Ms),{basename:e,future:n,navigator:i}=fe.useContext(gr),{matches:r}=fe.useContext(Zr),{pathname:o}=ws(),a=JSON.stringify(ih(r,n.v7_relativeSplatPath)),s=fe.useRef(!1);return q_(()=>{s.current=!0}),fe.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){i.go(u);return}let d=rh(u,JSON.parse(a),o,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Mi([e,d.pathname])),(c.replace?i.replace:i.push)(d,c.state,c)},[e,i,a,o,t])}function Lu(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=fe.useContext(gr),{matches:r}=fe.useContext(Zr),{pathname:o}=ws(),a=JSON.stringify(ih(r,i.v7_relativeSplatPath));return fe.useMemo(()=>rh(t,JSON.parse(a),o,n==="path"),[t,a,o,n])}function nE(t,e,n,i){Ts()||Ze(!1);let{navigator:r}=fe.useContext(gr),{matches:o}=fe.useContext(Zr),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=ws(),c;if(e){var d;let p=typeof e=="string"?Li(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Ze(!1),c=p}else c=u;let h=c.pathname||"/",m=l==="/"?h:h.slice(l.length)||"/",_=Uo(t,{pathname:m}),y=sE(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:Mi([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Mi([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,i);return e&&y?fe.createElement(bu.Provider,{value:{location:ps({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Rt.Pop}},y):y}function iE(){let t=fE(),e=B_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),n?fe.createElement("pre",{style:r},n):null,null)}const rE=fe.createElement(iE,null);class oE extends fe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?fe.createElement(Zr.Provider,{value:this.props.routeContext},fe.createElement(Y_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aE(t){let{routeContext:e,match:n,children:i}=t,r=fe.useContext(Ms);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),fe.createElement(Zr.Provider,{value:e},i)}function sE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let a=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let c=a.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id]));c>=0||Ze(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:m}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,h)=>{let m,_=!1,y=null,p=null;n&&(m=s&&d.route.id?s[d.route.id]:void 0,y=d.route.errorElement||rE,l&&(u<0&&h===0?(hE("route-fallback",!1),_=!0,p=null):u===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let f=e.concat(a.slice(0,h+1)),v=()=>{let g;return m?g=y:_?g=p:d.route.Component?g=fe.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,fe.createElement(aE,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?fe.createElement(oE,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var $_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($_||{}),ou=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ou||{});function lE(t){let e=fe.useContext(Ms);return e||Ze(!1),e}function uE(t){let e=fe.useContext(sh);return e||Ze(!1),e}function cE(t){let e=fe.useContext(Zr);return e||Ze(!1),e}function K_(t){let e=cE(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function fE(){var t;let e=fe.useContext(Y_),n=uE(ou.UseRouteError),i=K_(ou.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function dE(){let{router:t}=lE($_.UseNavigateStable),e=K_(ou.UseNavigateStable),n=fe.useRef(!1);return q_(()=>{n.current=!0}),fe.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ps({fromRouteId:e},o)))},[t,e])}const Bp={};function hE(t,e,n){!e&&!Bp[t]&&(Bp[t]=!0)}function pE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Rt.Pop,navigator:o,static:a=!1,future:s}=t;Ts()&&Ze(!1);let l=e.replace(/^\/*/,"/"),u=fe.useMemo(()=>({basename:l,navigator:o,static:a,future:ps({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof i=="string"&&(i=Li(i));let{pathname:c="/",search:d="",hash:h="",state:m=null,key:_="default"}=i,y=fe.useMemo(()=>{let p=fr(c,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:_},navigationType:r}},[l,c,d,h,m,_,r]);return y==null?null:fe.createElement(gr.Provider,{value:u},fe.createElement(bu.Provider,{children:n,value:y}))}new Promise(()=>{});function mE(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:fe.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:fe.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:fe.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ea.apply(this,arguments)}function Z_(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function gE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vE(t,e){return t.button===0&&(!e||e==="_self")&&!gE(t)}const _E=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],yE=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function xE(t,e){return BS({basename:e==null?void 0:e.basename,future:ea({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:uS({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||SE(),routes:t,mapRouteProperties:mE,window:e==null?void 0:e.window}).initialize()}function SE(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ea({},e,{errors:EE(e.errors)})),e}function EE(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new oh(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let o=window[r.__subType];if(typeof o=="function")try{let a=new o(r.message);a.stack="",n[i]=a}catch{}}if(n[i]==null){let o=new Error(r.message);o.stack="",n[i]=o}}else n[i]=r;return n}const Q_=fe.createContext({isTransitioning:!1}),ME=fe.createContext(new Map),TE="startTransition",Hp=Z0[TE],wE="flushSync",Gp=lS[wE];function AE(t){Hp?Hp(t):t()}function wa(t){Gp?Gp(t):t()}class RE{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",e(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}}function CE(t){let{fallbackElement:e,router:n,future:i}=t,[r,o]=fe.useState(n.state),[a,s]=fe.useState(),[l,u]=fe.useState({isTransitioning:!1}),[c,d]=fe.useState(),[h,m]=fe.useState(),[_,y]=fe.useState(),p=fe.useRef(new Map),{v7_startTransition:f}=i||{},v=fe.useCallback(T=>{f?AE(T):T()},[f]),g=fe.useCallback((T,N)=>{let{deletedFetchers:S,unstable_flushSync:A,unstable_viewTransitionOpts:k}=N;S.forEach(re=>p.current.delete(re)),T.fetchers.forEach((re,U)=>{re.data!==void 0&&p.current.set(U,re.data)});let K=n.window==null||typeof n.window.document.startViewTransition!="function";if(!k||K){A?wa(()=>o(T)):v(()=>o(T));return}if(A){wa(()=>{h&&(c&&c.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:k.currentLocation,nextLocation:k.nextLocation})});let re=n.window.document.startViewTransition(()=>{wa(()=>o(T))});re.finished.finally(()=>{wa(()=>{d(void 0),m(void 0),s(void 0),u({isTransitioning:!1})})}),wa(()=>m(re));return}h?(c&&c.resolve(),h.skipTransition(),y({state:T,currentLocation:k.currentLocation,nextLocation:k.nextLocation})):(s(T),u({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}))},[n.window,h,c,p,v]);fe.useLayoutEffect(()=>n.subscribe(g),[n,g]),fe.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new RE)},[l]),fe.useEffect(()=>{if(c&&a&&n.window){let T=a,N=c.promise,S=n.window.document.startViewTransition(async()=>{v(()=>o(T)),await N});S.finished.finally(()=>{d(void 0),m(void 0),s(void 0),u({isTransitioning:!1})}),m(S)}},[v,a,c,n.window]),fe.useEffect(()=>{c&&a&&r.location.key===a.location.key&&c.resolve()},[c,h,r.location,a]),fe.useEffect(()=>{!l.isTransitioning&&_&&(s(_.state),u({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),y(void 0))},[l.isTransitioning,_]),fe.useEffect(()=>{},[]);let E=fe.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:T=>n.navigate(T),push:(T,N,S)=>n.navigate(T,{state:N,preventScrollReset:S==null?void 0:S.preventScrollReset}),replace:(T,N,S)=>n.navigate(T,{replace:!0,state:N,preventScrollReset:S==null?void 0:S.preventScrollReset})}),[n]),P=n.basename||"/",x=fe.useMemo(()=>({router:n,navigator:E,static:!1,basename:P}),[n,E,P]);return fe.createElement(fe.Fragment,null,fe.createElement(Ms.Provider,{value:x},fe.createElement(sh.Provider,{value:r},fe.createElement(ME.Provider,{value:p.current},fe.createElement(Q_.Provider,{value:l},fe.createElement(pE,{basename:P,location:r.location,navigationType:r.historyAction,navigator:E,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},r.initialized||n.future.v7_partialHydration?fe.createElement(PE,{routes:n.routes,future:n.future,state:r}):e))))),null)}function PE(t){let{routes:e,future:n,state:i}=t;return nE(e,void 0,i,n)}const bE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DE=fe.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=Z_(e,_E),{basename:m}=fe.useContext(gr),_,y=!1;if(typeof u=="string"&&LE.test(u)&&(_=u,bE))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=fr(E.pathname,m);E.origin===g.origin&&P!=null?u=P+E.search+E.hash:y=!0}catch{}let p=JS(u,{relative:r}),f=NE(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:r,unstable_viewTransition:d});function v(g){i&&i(g),g.defaultPrevented||f(g)}return fe.createElement("a",ea({},h,{href:_||p,onClick:y||o?i:v,ref:n,target:l}))}),gc=fe.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:o="",end:a=!1,style:s,to:l,unstable_viewTransition:u,children:c}=e,d=Z_(e,yE),h=Lu(l,{relative:d.relative}),m=ws(),_=fe.useContext(sh),{navigator:y}=fe.useContext(gr),p=_!=null&&IE(h)&&u===!0,f=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,v=m.pathname,g=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(v=v.toLowerCase(),g=g?g.toLowerCase():null,f=f.toLowerCase());const E=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let P=v===f||!a&&v.startsWith(f)&&v.charAt(E)==="/",x=g!=null&&(g===f||!a&&g.startsWith(f)&&g.charAt(f.length)==="/"),T={isActive:P,isPending:x,isTransitioning:p},N=P?i:void 0,S;typeof o=="function"?S=o(T):S=[o,P?"active":null,x?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let A=typeof s=="function"?s(T):s;return fe.createElement(DE,ea({},d,{"aria-current":N,className:S,ref:n,style:A,to:l,unstable_viewTransition:u}),typeof c=="function"?c(T):c)});var $f;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($f||($f={}));var Vp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vp||(Vp={}));function UE(t){let e=fe.useContext(Ms);return e||Ze(!1),e}function NE(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:a,unstable_viewTransition:s}=e===void 0?{}:e,l=eE(),u=ws(),c=Lu(t,{relative:a});return fe.useCallback(d=>{if(vE(d,n)){d.preventDefault();let h=i!==void 0?i:Xr(u)===Xr(c);l(t,{replace:h,state:r,preventScrollReset:o,relative:a,unstable_viewTransition:s})}},[u,l,c,i,r,n,t,o,a,s])}function IE(t,e){e===void 0&&(e={});let n=fe.useContext(Q_);n==null&&Ze(!1);let{basename:i}=UE($f.useViewTransitionState),r=Lu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=fr(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=fr(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Xf(r.pathname,a)!=null||Xf(r.pathname,o)!=null}const lh=()=>an.jsxs("nav",{className:"flex justify-center  items-center text-5xl text-white gap-4 py-4",children:[an.jsx(gc,{className:({isActive:t})=>t?" bg-white text-black px-4 pt-2 pb-3 rounded-lg":" px-4 pt-2 pb-3 rounded-lg",to:"/",children:"Главная"}),an.jsx(gc,{className:({isActive:t})=>t?" bg-white text-black px-4 pt-2 pb-3 rounded-lg":" px-4 pt-2 pb-3 rounded-lg",to:"/certificates",children:"Сертификаты"}),an.jsx(gc,{className:({isActive:t})=>t?" bg-white text-black px-4 pt-2 pb-3 rounded-lg":" px-4 pt-2 pb-3 rounded-lg",to:"/history",children:"История"})]}),FE=()=>an.jsx(an.Fragment,{children:an.jsx(lh,{})}),OE=()=>an.jsx(an.Fragment,{children:an.jsx(lh,{})}),zE=()=>an.jsx("div",{children:an.jsx(lh,{})}),kE=xE([{path:"/",Component:FE},{path:"/certificates",Component:OE},{path:"/history",Component:zE}]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uh="160",eo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},BE=0,Wp=1,HE=2,J_=1,GE=2,mi=3,dr=0,gn=1,_i=2,ar=0,Wo=1,au=2,Xp=3,jp=4,VE=5,Rr=100,WE=101,XE=102,Yp=103,qp=104,jE=200,YE=201,qE=202,$E=203,Kf=204,Zf=205,KE=206,ZE=207,QE=208,JE=209,eM=210,tM=211,nM=212,iM=213,rM=214,oM=0,aM=1,sM=2,su=3,lM=4,uM=5,cM=6,fM=7,e0=0,dM=1,hM=2,sr=0,pM=1,mM=2,gM=3,vM=4,_M=5,yM=6,t0=300,ta=301,na=302,Qf=303,Jf=304,Du=306,ed=1e3,$n=1001,td=1002,on=1003,$p=1004,vc=1005,Un=1006,xM=1007,ms=1008,lr=1009,SM=1010,EM=1011,ch=1012,n0=1013,$i=1014,Ki=1015,gs=1016,i0=1017,r0=1018,Fr=1020,MM=1021,Kn=1023,TM=1024,wM=1025,Or=1026,ia=1027,AM=1028,o0=1029,RM=1030,a0=1031,s0=1033,_c=33776,yc=33777,xc=33778,Sc=33779,Kp=35840,Zp=35841,Qp=35842,Jp=35843,l0=36196,em=37492,tm=37496,nm=37808,im=37809,rm=37810,om=37811,am=37812,sm=37813,lm=37814,um=37815,cm=37816,fm=37817,dm=37818,hm=37819,pm=37820,mm=37821,Ec=36492,gm=36494,vm=36495,CM=36283,_m=36284,ym=36285,xm=36286,u0=3e3,zr=3001,PM=3200,bM=3201,LM=0,DM=1,In="",Vt="srgb",Pi="srgb-linear",fh="display-p3",Uu="display-p3-linear",lu="linear",dt="srgb",uu="rec709",cu="p3",no=7680,Sm=519,UM=512,NM=513,IM=514,c0=515,FM=516,OM=517,zM=518,kM=519,Em=35044,Mc=35048,Mm="300 es",nd=1035,Si=2e3,fu=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tm=1234567;const ja=Math.PI/180,vs=180/Math.PI;function la(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function dh(t,e){return(t%e+e)%e}function BM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function HM(t,e,n){return t!==e?(n-t)/(e-t):0}function Ya(t,e,n){return(1-n)*t+n*e}function GM(t,e,n,i){return Ya(t,e,1-Math.exp(-n*i))}function VM(t,e=1){return e-Math.abs(dh(t,e*2)-e)}function WM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function XM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function jM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function YM(t,e){return t+Math.random()*(e-t)}function qM(t){return t*(.5-Math.random())}function $M(t){t!==void 0&&(Tm=t);let e=Tm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KM(t){return t*ja}function ZM(t){return t*vs}function id(t){return(t&t-1)===0&&t!==0}function QM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function du(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function JM(t,e,n,i,r){const o=Math.cos,a=Math.sin,s=o(n/2),l=a(n/2),u=o((e+i)/2),c=a((e+i)/2),d=o((e-i)/2),h=a((e-i)/2),m=o((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(s*c,l*d,l*h,s*u);break;case"YZY":t.set(l*h,s*c,l*d,s*u);break;case"ZXZ":t.set(l*d,l*h,s*c,s*u);break;case"XZX":t.set(s*c,l*_,l*m,s*u);break;case"YXY":t.set(l*m,s*c,l*_,s*u);break;case"ZYZ":t.set(l*_,l*m,s*c,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const eT={DEG2RAD:ja,RAD2DEG:vs,generateUUID:la,clamp:Jt,euclideanModulo:dh,mapLinear:BM,inverseLerp:HM,lerp:Ya,damp:GM,pingpong:VM,smoothstep:WM,smootherstep:XM,randInt:jM,randFloat:YM,randFloatSpread:qM,seededRandom:$M,degToRad:KM,radToDeg:ZM,isPowerOfTwo:id,ceilPowerOfTwo:QM,floorPowerOfTwo:du,setQuaternionFromProperEuler:JM,normalize:tn,denormalize:xo};class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,n,i,r,o,a,s,l,u){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u)}set(e,n,i,r,o,a,s,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],m=i[5],_=i[8],y=r[0],p=r[3],f=r[6],v=r[1],g=r[4],E=r[7],P=r[2],x=r[5],T=r[8];return o[0]=a*y+s*v+l*P,o[3]=a*p+s*g+l*x,o[6]=a*f+s*E+l*T,o[1]=u*y+c*v+d*P,o[4]=u*p+c*g+d*x,o[7]=u*f+c*E+d*T,o[2]=h*y+m*v+_*P,o[5]=h*p+m*g+_*x,o[8]=h*f+m*E+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*s*u-i*o*c+i*s*l+r*o*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=c*a-s*u,h=s*l-c*o,m=u*o-a*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(s*i-r*a)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-s*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,s){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*a+u*s)+a+e,-r*u,r*l,-r*(-u*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Tc.makeScale(e,n)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new et;function f0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tT(){const t=hu("canvas");return t.style.display="block",t}const wm={};function qa(t){t in wm||(wm[t]=!0,console.warn(t))}const Am=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rm=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Pi]:{transfer:lu,primaries:uu,toReference:t=>t,fromReference:t=>t},[Vt]:{transfer:dt,primaries:uu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uu]:{transfer:lu,primaries:cu,toReference:t=>t.applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(Am)},[fh]:{transfer:dt,primaries:cu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(Am).convertLinearToSRGB()}},nT=new Set([Pi,Uu]),st={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=js[e].toReference,r=js[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return js[t].primaries},getTransfer:function(t){return t===In?lu:js[t].transfer}};function Xo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let io;class d0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{io===void 0&&(io=hu("canvas")),io.width=e.width,io.height=e.height;const i=io.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=io}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Xo(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xo(n[i]/255)*255):n[i]=Xo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iT=0;class h0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=la(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Ac(r[a].image)):o.push(Ac(r[a]))}else o=Ac(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Ac(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?d0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rT=0;class Mn extends Qr{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=$n,r=$n,o=Un,a=ms,s=Kn,l=lr,u=Mn.DEFAULT_ANISOTROPY,c=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=la(),this.name="",this.source=new h0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===zr?Vt:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?zr:u0}set encoding(e){qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zr?Vt:In}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=t0;Mn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],m=l[5],_=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,E=(m+1)/2,P=(f+1)/2,x=(c+h)/4,T=(d+y)/4,N=(_+p)/4;return g>E&&g>P?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=x/i,o=T/i):E>P?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=x/r,o=N/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=T/o,r=N/o),this.set(i,r,o,n),this}let v=Math.sqrt((p-_)*(p-_)+(d-y)*(d-y)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-y)/v,this.z=(h-c)/v,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oT extends Qr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(qa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zr?Vt:In),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new h0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends oT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class p0 extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aT extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,s){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[a+0],m=o[a+1],_=o[a+2],y=o[a+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(s===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||u!==m||c!==_){let p=1-s;const f=l*h+u*m+c*_+d*y,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const P=Math.sqrt(g),x=Math.atan2(P,f*v);p=Math.sin(p*x)/P,s=Math.sin(s*x)/P}const E=s*v;if(l=l*p+h*E,u=u*p+m*E,c=c*p+_*E,d=d*p+y*E,p===1-s){const P=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=P,u*=P,c*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,a){const s=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[a],h=o[a+1],m=o[a+2],_=o[a+3];return e[n]=s*_+c*d+l*m-u*h,e[n+1]=l*_+c*h+u*d-s*m,e[n+2]=u*_+c*m+s*h-l*d,e[n+3]=c*_-s*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(r/2),d=s(o/2),h=l(i/2),m=l(r/2),_=l(o/2);switch(a){case"XYZ":this._x=h*c*d+u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d-h*m*_;break;case"YXZ":this._x=h*c*d+u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d+h*m*_;break;case"ZXY":this._x=h*c*d-u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d-h*m*_;break;case"ZYX":this._x=h*c*d-u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d+h*m*_;break;case"YZX":this._x=h*c*d+u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d-h*m*_;break;case"XZY":this._x=h*c*d-u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],s=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+s+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(a-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+u)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(o-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(a-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,a=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*s+r*u-o*l,this._y=r*c+a*l+o*s-i*u,this._z=o*c+a*u+i*l-r*s,this._w=a*c-i*s-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,u=2*(a*r-s*i),c=2*(s*n-o*r),d=2*(o*i-a*n);return this.x=n+l*u+a*d-s*c,this.y=i+l*c+s*u-o*d,this.z=r+l*d+o*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new z,Cm=new Yr;class As{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(o,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),qs.subVectors(this.max,Aa),ro.subVectors(e.a,Aa),oo.subVectors(e.b,Aa),ao.subVectors(e.c,Aa),Ni.subVectors(oo,ro),Ii.subVectors(ao,oo),yr.subVectors(ro,ao);let n=[0,-Ni.z,Ni.y,0,-Ii.z,Ii.y,0,-yr.z,yr.y,Ni.z,0,-Ni.x,Ii.z,0,-Ii.x,yr.z,0,-yr.x,-Ni.y,Ni.x,0,-Ii.y,Ii.x,0,-yr.y,yr.x,0];return!Cc(n,ro,oo,ao,qs)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,ro,oo,ao,qs))?!1:($s.crossVectors(Ni,Ii),n=[$s.x,$s.y,$s.z],Cc(n,ro,oo,ao,qs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new z,new z,new z,new z,new z,new z,new z,new z],Hn=new z,Ys=new As,ro=new z,oo=new z,ao=new z,Ni=new z,Ii=new z,yr=new z,Aa=new z,qs=new z,$s=new z,xr=new z;function Cc(t,e,n,i,r){for(let o=0,a=t.length-3;o<=a;o+=3){xr.fromArray(t,o);const s=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),u=n.dot(xr),c=i.dot(xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const sT=new As,Ra=new z,Pc=new z;class Rs{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sT.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Pc)),this.expandByPoint(Ra.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new z,bc=new z,Ks=new z,Fi=new z,Lc=new z,Zs=new z,Dc=new z;class Nu{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bc.copy(e).add(n).multiplyScalar(.5),Ks.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(bc);const o=e.distanceTo(n)*.5,a=-this.direction.dot(Ks),s=Fi.dot(this.direction),l=-Fi.dot(Ks),u=Fi.lengthSq(),c=Math.abs(1-a*a);let d,h,m,_;if(c>0)if(d=a*l-s,h=a*s-l,_=o*c,d>=0)if(h>=-_)if(h<=_){const y=1/c;d*=y,h*=y,m=d*(d+a*h+2*s)+h*(a*d+h+2*l)+u}else h=o,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-a*o+s)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(d=Math.max(0,-(a*o+s)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u);else h=a>0?-o:o,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(bc).addScaledVector(Ks,h),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,s,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,o){Lc.subVectors(n,e),Zs.subVectors(i,e),Dc.crossVectors(Lc,Zs);let a=this.direction.dot(Dc),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Fi.subVectors(this.origin,e);const l=s*this.direction.dot(Zs.crossVectors(Fi,Zs));if(l<0)return null;const u=s*this.direction.dot(Lc.cross(Fi));if(u<0||l+u>a)return null;const c=-s*Fi.dot(Dc);return c<0?null:this.at(c/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,o,a,s,l,u,c,d,h,m,_,y,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u,c,d,h,m,_,y,p)}set(e,n,i,r,o,a,s,l,u,c,d,h,m,_,y,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=a,f[9]=s,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/so.setFromMatrixColumn(e,0).length(),o=1/so.setFromMatrixColumn(e,1).length(),a=1/so.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=a*c,m=a*d,_=s*c,y=s*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=m+_*u,n[5]=h-y*u,n[9]=-s*l,n[2]=y-h*u,n[6]=_+m*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*c,m=l*d,_=u*c,y=u*d;n[0]=h+y*s,n[4]=_*s-m,n[8]=a*u,n[1]=a*d,n[5]=a*c,n[9]=-s,n[2]=m*s-_,n[6]=y+h*s,n[10]=a*l}else if(e.order==="ZXY"){const h=l*c,m=l*d,_=u*c,y=u*d;n[0]=h-y*s,n[4]=-a*d,n[8]=_+m*s,n[1]=m+_*s,n[5]=a*c,n[9]=y-h*s,n[2]=-a*u,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const h=a*c,m=a*d,_=s*c,y=s*d;n[0]=l*c,n[4]=_*u-m,n[8]=h*u+y,n[1]=l*d,n[5]=y*u+h,n[9]=m*u-_,n[2]=-u,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*u,_=s*l,y=s*u;n[0]=l*c,n[4]=y-h*d,n[8]=_*d+m,n[1]=d,n[5]=a*c,n[9]=-s*c,n[2]=-u*c,n[6]=m*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=a*l,m=a*u,_=s*l,y=s*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+y,n[5]=a*c,n[9]=m*d-_,n[2]=_*d-m,n[6]=s*c,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lT,e,uT)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Oi.crossVectors(i,_n),Oi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Oi.crossVectors(i,_n)),Oi.normalize(),Qs.crossVectors(_n,Oi),r[0]=Oi.x,r[4]=Qs.x,r[8]=_n.x,r[1]=Oi.y,r[5]=Qs.y,r[9]=_n.y,r[2]=Oi.z,r[6]=Qs.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],m=i[13],_=i[2],y=i[6],p=i[10],f=i[14],v=i[3],g=i[7],E=i[11],P=i[15],x=r[0],T=r[4],N=r[8],S=r[12],A=r[1],k=r[5],K=r[9],re=r[13],U=r[2],X=r[6],$=r[10],Z=r[14],I=r[3],B=r[7],W=r[11],Q=r[15];return o[0]=a*x+s*A+l*U+u*I,o[4]=a*T+s*k+l*X+u*B,o[8]=a*N+s*K+l*$+u*W,o[12]=a*S+s*re+l*Z+u*Q,o[1]=c*x+d*A+h*U+m*I,o[5]=c*T+d*k+h*X+m*B,o[9]=c*N+d*K+h*$+m*W,o[13]=c*S+d*re+h*Z+m*Q,o[2]=_*x+y*A+p*U+f*I,o[6]=_*T+y*k+p*X+f*B,o[10]=_*N+y*K+p*$+f*W,o[14]=_*S+y*re+p*Z+f*Q,o[3]=v*x+g*A+E*U+P*I,o[7]=v*T+g*k+E*X+P*B,o[11]=v*N+g*K+E*$+P*W,o[15]=v*S+g*re+E*Z+P*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],m=e[14],_=e[3],y=e[7],p=e[11],f=e[15];return _*(+o*l*d-r*u*d-o*s*h+i*u*h+r*s*m-i*l*m)+y*(+n*l*m-n*u*h+o*a*h-r*a*m+r*u*c-o*l*c)+p*(+n*u*d-n*s*m-o*a*d+i*a*m+o*s*c-i*u*c)+f*(-r*s*c-n*l*d+n*s*h+r*a*d-i*a*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],m=e[11],_=e[12],y=e[13],p=e[14],f=e[15],v=d*p*u-y*h*u+y*l*m-s*p*m-d*l*f+s*h*f,g=_*h*u-c*p*u-_*l*m+a*p*m+c*l*f-a*h*f,E=c*y*u-_*d*u+_*s*m-a*y*m-c*s*f+a*d*f,P=_*d*l-c*y*l-_*s*h+a*y*h+c*s*p-a*d*p,x=n*v+i*g+r*E+o*P;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/x;return e[0]=v*T,e[1]=(y*h*o-d*p*o-y*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(s*p*o-y*l*o+y*r*u-i*p*u-s*r*f+i*l*f)*T,e[3]=(d*l*o-s*h*o-d*r*u+i*h*u+s*r*m-i*l*m)*T,e[4]=g*T,e[5]=(c*p*o-_*h*o+_*r*m-n*p*m-c*r*f+n*h*f)*T,e[6]=(_*l*o-a*p*o-_*r*u+n*p*u+a*r*f-n*l*f)*T,e[7]=(a*h*o-c*l*o+c*r*u-n*h*u-a*r*m+n*l*m)*T,e[8]=E*T,e[9]=(_*d*o-c*y*o-_*i*m+n*y*m+c*i*f-n*d*f)*T,e[10]=(a*y*o-_*s*o+_*i*u-n*y*u-a*i*f+n*s*f)*T,e[11]=(c*s*o-a*d*o-c*i*u+n*d*u+a*i*m-n*s*m)*T,e[12]=P*T,e[13]=(c*y*r-_*d*r+_*i*h-n*y*h-c*i*p+n*d*p)*T,e[14]=(_*s*r-a*y*r-_*i*l+n*y*l+a*i*p-n*s*p)*T,e[15]=(a*d*r-c*s*r+c*i*l-n*d*l-a*i*h+n*s*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,s=e.y,l=e.z,u=o*a,c=o*s;return this.set(u*a+i,u*s-r*l,u*l+r*s,0,u*s+r*l,c*s+i,c*l-r*a,0,u*l-r*s,c*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,u=o+o,c=a+a,d=s+s,h=o*u,m=o*c,_=o*d,y=a*c,p=a*d,f=s*d,v=l*u,g=l*c,E=l*d,P=i.x,x=i.y,T=i.z;return r[0]=(1-(y+f))*P,r[1]=(m+E)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(m-E)*x,r[5]=(1-(h+f))*x,r[6]=(p+v)*x,r[7]=0,r[8]=(_+g)*T,r[9]=(p-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=so.set(r[0],r[1],r[2]).length();const a=so.set(r[4],r[5],r[6]).length(),s=so.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const u=1/o,c=1/a,d=1/s;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=c,Gn.elements[5]*=c,Gn.elements[6]*=c,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=s,this}makePerspective(e,n,i,r,o,a,s=Si){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(s===Si)m=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(s===fu)m=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,a,s=Si){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(a-o),h=(n+e)*u,m=(i+r)*c;let _,y;if(s===Si)_=(a+o)*d,y=-2*d;else if(s===fu)_=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const so=new z,Gn=new Nt,lT=new z(0,0,0),uT=new z(1,1,1),Oi=new z,Qs=new z,_n=new z,Pm=new Nt,bm=new Yr;class Iu{constructor(e=0,n=0,i=0,r=Iu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Iu.DEFAULT_ORDER="XYZ";class m0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cT=0;const Lm=new z,lo=new Yr,di=new Nt,Js=new z,Ca=new z,fT=new z,dT=new Yr,Dm=new z(1,0,0),Um=new z(0,1,0),Nm=new z(0,0,1),hT={type:"added"},pT={type:"removed"};class ln extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new z,n=new Iu,i=new Yr,r=new z(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new et}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return lo.setFromAxisAngle(e,n),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,n){return lo.setFromAxisAngle(e,n),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,n){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Js.copy(e):Js.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ca,Js,this.up):di.lookAt(Js,Ca,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),lo.setFromRotationMatrix(di),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,fT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,dT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new z(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new z,hi=new z,Uc=new z,pi=new z,uo=new z,co=new z,Im=new z,Nc=new z,Ic=new z,Fc=new z;let el=!1;class qn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Vn.subVectors(r,n),hi.subVectors(i,n),Uc.subVectors(e,n);const a=Vn.dot(Vn),s=Vn.dot(hi),l=Vn.dot(Uc),u=hi.dot(hi),c=hi.dot(Uc),d=a*u-s*s;if(d===0)return o.set(0,0,0),null;const h=1/d,m=(u*l-s*c)*h,_=(a*c-s*l)*h;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,o,a,s,l){return el===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),el=!0),this.getInterpolation(e,n,i,r,o,a,s,l)}static getInterpolation(e,n,i,r,o,a,s,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(s,pi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),hi.subVectors(e,n),Vn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Vn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return el===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),el=!0),qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let a,s;uo.subVectors(r,i),co.subVectors(o,i),Nc.subVectors(e,i);const l=uo.dot(Nc),u=co.dot(Nc);if(l<=0&&u<=0)return n.copy(i);Ic.subVectors(e,r);const c=uo.dot(Ic),d=co.dot(Ic);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(uo,a);Fc.subVectors(e,o);const m=uo.dot(Fc),_=co.dot(Fc);if(_>=0&&m<=_)return n.copy(o);const y=m*u-l*_;if(y<=0&&u>=0&&_<=0)return s=u/(u-_),n.copy(i).addScaledVector(co,s);const p=c*_-m*d;if(p<=0&&d-c>=0&&m-_>=0)return Im.subVectors(o,r),s=(d-c)/(d-c+(m-_)),n.copy(r).addScaledVector(Im,s);const f=1/(p+y+h);return a=y*f,s=h*f,n.copy(i).addScaledVector(uo,a).addScaledVector(co,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=dh(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Oc(a,o,e+1/3),this.g=Oc(a,o,e),this.b=Oc(a,o,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=Vt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vt){const i=g0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}copyLinearToSRGB(e){return this.r=wc(e.r),this.g=wc(e.g),this.b=wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return st.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Jt(Zt.r*255,0,255))*65536+Math.round(Jt(Zt.g*255,0,255))*256+Math.round(Jt(Zt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,o=Zt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,u;const c=(s+a)/2;if(s===a)l=0,u=0;else{const d=a-s;switch(u=c<=.5?d/(a+s):d/(2-a-s),a){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Vt){st.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Vt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(tl);const i=Ya(zi.h,tl.h,n),r=Ya(zi.s,tl.s,n),o=Ya(zi.l,tl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ot;ot.NAMES=g0;let mT=0;class ua extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Wo,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Zf,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kf&&(i.blendSrc=this.blendSrc),this.blendDst!==Zf&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(i.stencilFail=this.stencilFail),this.stencilZFail!==no&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class v0 extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,nl=new Ke;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Em,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xo(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xo(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xo(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),o=tn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Em&&(e.usage=this.usage),e}}class _0 extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class y0 extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ti extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gT=0;const Pn=new Nt,zc=new ln,fo=new z,yn=new As,Pa=new As,zt=new z;class ei extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f0(e)?y0:_0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new et().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ti(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];yn.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];Pa.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(yn.min,Pa.min),yn.expandByPoint(zt),zt.addVectors(yn.max,Pa.max),yn.expandByPoint(zt)):(yn.expandByPoint(Pa.min),yn.expandByPoint(Pa.max))}yn.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)zt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)zt.fromBufferAttribute(s,u),l&&(fo.fromBufferAttribute(e,u),zt.add(fo)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,a=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<s;A++)u[A]=new z,c[A]=new z;const d=new z,h=new z,m=new z,_=new Ke,y=new Ke,p=new Ke,f=new z,v=new z;function g(A,k,K){d.fromArray(r,A*3),h.fromArray(r,k*3),m.fromArray(r,K*3),_.fromArray(a,A*2),y.fromArray(a,k*2),p.fromArray(a,K*2),h.sub(d),m.sub(d),y.sub(_),p.sub(_);const re=1/(y.x*p.y-p.x*y.y);isFinite(re)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(re),v.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(re),u[A].add(f),u[k].add(f),u[K].add(f),c[A].add(v),c[k].add(v),c[K].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let A=0,k=E.length;A<k;++A){const K=E[A],re=K.start,U=K.count;for(let X=re,$=re+U;X<$;X+=3)g(i[X+0],i[X+1],i[X+2])}const P=new z,x=new z,T=new z,N=new z;function S(A){T.fromArray(o,A*3),N.copy(T);const k=u[A];P.copy(k),P.sub(T.multiplyScalar(T.dot(k))).normalize(),x.crossVectors(N,k);const re=x.dot(c[A])<0?-1:1;l[A*4]=P.x,l[A*4+1]=P.y,l[A*4+2]=P.z,l[A*4+3]=re}for(let A=0,k=E.length;A<k;++A){const K=E[A],re=K.start,U=K.count;for(let X=re,$=re+U;X<$;X+=3)S(i[X+0]),S(i[X+1]),S(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,o=new z,a=new z,s=new z,l=new z,u=new z,c=new z,d=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),c.subVectors(a,o),d.subVectors(r,o),c.cross(d),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),s.add(c),l.add(c),u.add(c),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),c.subVectors(a,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,d=s.normalized,h=new u.constructor(l.length*c);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){s.isInterleavedBufferAttribute?m=l[y]*s.data.stride+s.offset:m=l[y]*c;for(let f=0;f<c;f++)h[_++]=u[m++]}return new Tn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ei,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);n.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const l=[],u=o[s];for(let c=0,d=u.length;c<d;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const u=a[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,m=d.length;h<m;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fm=new Nt,Sr=new Nu,il=new Rs,Om=new z,ho=new z,po=new z,mo=new z,kc=new z,rl=new z,ol=new Ke,al=new Ke,sl=new Ke,zm=new z,km=new z,Bm=new z,ll=new z,ul=new z;class Zi extends ln{constructor(e=new ei,n=new v0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){rl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=s[l],d=o[l];c!==0&&(kc.fromBufferAttribute(d,e),a?rl.addScaledVector(kc,c):rl.addScaledVector(kc.sub(n),c))}n.add(rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(o),Sr.copy(e.ray).recast(e.near),!(il.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(il,Om)===null||Sr.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Fm.copy(o).invert(),Sr.copy(e.ray).applyMatrix4(Fm),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],f=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,P=g;E<P;E+=3){const x=s.getX(E),T=s.getX(E+1),N=s.getX(E+2);r=cl(this,f,e,i,u,c,d,x,T,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(s.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const v=s.getX(p),g=s.getX(p+1),E=s.getX(p+2);r=cl(this,a,e,i,u,c,d,v,g,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],f=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,P=g;E<P;E+=3){const x=E,T=E+1,N=E+2;r=cl(this,f,e,i,u,c,d,x,T,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const v=p,g=p+1,E=p+2;r=cl(this,a,e,i,u,c,d,v,g,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function vT(t,e,n,i,r,o,a,s){let l;if(e.side===gn?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===dr,s),l===null)return null;ul.copy(s),ul.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ul);return u<n.near||u>n.far?null:{distance:u,point:ul.clone(),object:t}}function cl(t,e,n,i,r,o,a,s,l,u){t.getVertexPosition(s,ho),t.getVertexPosition(l,po),t.getVertexPosition(u,mo);const c=vT(t,e,n,i,ho,po,mo,ll);if(c){r&&(ol.fromBufferAttribute(r,s),al.fromBufferAttribute(r,l),sl.fromBufferAttribute(r,u),c.uv=qn.getInterpolation(ll,ho,po,mo,ol,al,sl,new Ke)),o&&(ol.fromBufferAttribute(o,s),al.fromBufferAttribute(o,l),sl.fromBufferAttribute(o,u),c.uv1=qn.getInterpolation(ll,ho,po,mo,ol,al,sl,new Ke),c.uv2=c.uv1),a&&(zm.fromBufferAttribute(a,s),km.fromBufferAttribute(a,l),Bm.fromBufferAttribute(a,u),c.normal=qn.getInterpolation(ll,ho,po,mo,zm,km,Bm,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:s,b:l,c:u,normal:new z,materialIndex:0};qn.getNormal(ho,po,mo,d.normal),c.face=d}return c}class Cs extends ei{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],u=[],c=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,o,0),_("z","y","x",1,-1,i,n,-e,a,o,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ti(u,3)),this.setAttribute("normal",new Ti(c,3)),this.setAttribute("uv",new Ti(d,2));function _(y,p,f,v,g,E,P,x,T,N,S){const A=E/T,k=P/N,K=E/2,re=P/2,U=x/2,X=T+1,$=N+1;let Z=0,I=0;const B=new z;for(let W=0;W<$;W++){const Q=W*k-re;for(let ee=0;ee<X;ee++){const q=ee*A-K;B[y]=q*v,B[p]=Q*g,B[f]=U,u.push(B.x,B.y,B.z),B[y]=0,B[p]=0,B[f]=x>0?1:-1,c.push(B.x,B.y,B.z),d.push(ee/T),d.push(1-W/N),Z+=1}}for(let W=0;W<N;W++)for(let Q=0;Q<T;Q++){const ee=h+Q+X*W,q=h+Q+X*(W+1),J=h+(Q+1)+X*(W+1),ge=h+(Q+1)+X*W;l.push(ee,q,ge),l.push(q,J,ge),I+=6}s.addGroup(m,I,S),m+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=ra(t[n]);for(const r in i)e[r]=i[r]}return e}function _T(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function x0(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const yT={clone:ra,merge:nn};var xT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ST=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xT,this.fragmentShader=ST,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=_T(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class S0 extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends S0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ja*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const go=-90,vo=1;class ET extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(go,vo,e,n);r.layers=this.layers,this.add(r);const o=new Nn(go,vo,e,n);o.layers=this.layers,this.add(o);const a=new Nn(go,vo,e,n);a.layers=this.layers,this.add(a);const s=new Nn(go,vo,e,n);s.layers=this.layers,this.add(s);const l=new Nn(go,vo,e,n);l.layers=this.layers,this.add(l);const u=new Nn(go,vo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,s,l]=n;for(const u of n)this.remove(u);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class E0 extends Mn{constructor(e,n,i,r,o,a,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ta,super(e,n,i,r,o,a,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MT extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(qa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zr?Vt:In),this.texture=new E0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cs(5,5,5),o=new qr({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:ar});o.uniforms.tEquirect.value=n;const a=new Zi(r,o),s=n.minFilter;return n.minFilter===ms&&(n.minFilter=Un),new ET(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}}const Bc=new z,TT=new z,wT=new et;class Gi{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bc.subVectors(i,n).cross(TT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wT.getNormalMatrix(e),r=this.coplanarPoint(Bc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Rs,fl=new z;class M0{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,o=new Gi,a=new Gi){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],m=r[8],_=r[9],y=r[10],p=r[11],f=r[12],v=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-o,h-u,p-m,E-f).normalize(),i[1].setComponents(l+o,h+u,p+m,E+f).normalize(),i[2].setComponents(l+a,h+c,p+_,E+v).normalize(),i[3].setComponents(l-a,h-c,p-_,E-v).normalize(),i[4].setComponents(l-s,h-d,p-y,E-g).normalize(),n===Si)i[5].setComponents(l+s,h+d,p+y,E+g).normalize();else if(n===fu)i[5].setComponents(s,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T0(){let t=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function AT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,d,h),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function o(u,c,d){const h=c.array,m=c._updateRange,_=c.updateRanges;if(t.bindBuffer(d,u),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const f=_[y];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,u,c),d.version=u.version}}return{get:a,remove:s,update:l}}class hh extends ei{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,a=n/2,s=Math.floor(i),l=Math.floor(r),u=s+1,c=l+1,d=e/s,h=n/l,m=[],_=[],y=[],p=[];for(let f=0;f<c;f++){const v=f*h-a;for(let g=0;g<u;g++){const E=g*d-o;_.push(E,-v,0),y.push(0,0,1),p.push(g/s),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<s;v++){const g=v+u*f,E=v+u*(f+1),P=v+1+u*(f+1),x=v+1+u*f;m.push(g,E,x),m.push(E,P,x)}this.setIndex(m),this.setAttribute("position",new Ti(_,3)),this.setAttribute("normal",new Ti(y,3)),this.setAttribute("uv",new Ti(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.width,e.height,e.widthSegments,e.heightSegments)}}var RT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,OT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,KT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iw="gl_FragColor = linearToOutputTexel( gl_FragColor );",rw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ow=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ew=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ww=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Aw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ow=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$w=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,N1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:RT,alphahash_pars_fragment:CT,alphamap_fragment:PT,alphamap_pars_fragment:bT,alphatest_fragment:LT,alphatest_pars_fragment:DT,aomap_fragment:UT,aomap_pars_fragment:NT,batching_pars_vertex:IT,batching_vertex:FT,begin_vertex:OT,beginnormal_vertex:zT,bsdfs:kT,iridescence_fragment:BT,bumpmap_pars_fragment:HT,clipping_planes_fragment:GT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:WT,clipping_planes_vertex:XT,color_fragment:jT,color_pars_fragment:YT,color_pars_vertex:qT,color_vertex:$T,common:KT,cube_uv_reflection_fragment:ZT,defaultnormal_vertex:QT,displacementmap_pars_vertex:JT,displacementmap_vertex:ew,emissivemap_fragment:tw,emissivemap_pars_fragment:nw,colorspace_fragment:iw,colorspace_pars_fragment:rw,envmap_fragment:ow,envmap_common_pars_fragment:aw,envmap_pars_fragment:sw,envmap_pars_vertex:lw,envmap_physical_pars_fragment:xw,envmap_vertex:uw,fog_vertex:cw,fog_pars_vertex:fw,fog_fragment:dw,fog_pars_fragment:hw,gradientmap_pars_fragment:pw,lightmap_fragment:mw,lightmap_pars_fragment:gw,lights_lambert_fragment:vw,lights_lambert_pars_fragment:_w,lights_pars_begin:yw,lights_toon_fragment:Sw,lights_toon_pars_fragment:Ew,lights_phong_fragment:Mw,lights_phong_pars_fragment:Tw,lights_physical_fragment:ww,lights_physical_pars_fragment:Aw,lights_fragment_begin:Rw,lights_fragment_maps:Cw,lights_fragment_end:Pw,logdepthbuf_fragment:bw,logdepthbuf_pars_fragment:Lw,logdepthbuf_pars_vertex:Dw,logdepthbuf_vertex:Uw,map_fragment:Nw,map_pars_fragment:Iw,map_particle_fragment:Fw,map_particle_pars_fragment:Ow,metalnessmap_fragment:zw,metalnessmap_pars_fragment:kw,morphcolor_vertex:Bw,morphnormal_vertex:Hw,morphtarget_pars_vertex:Gw,morphtarget_vertex:Vw,normal_fragment_begin:Ww,normal_fragment_maps:Xw,normal_pars_fragment:jw,normal_pars_vertex:Yw,normal_vertex:qw,normalmap_pars_fragment:$w,clearcoat_normal_fragment_begin:Kw,clearcoat_normal_fragment_maps:Zw,clearcoat_pars_fragment:Qw,iridescence_pars_fragment:Jw,opaque_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:r1,dithering_pars_fragment:o1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:u1,shadowmap_vertex:c1,shadowmask_pars_fragment:f1,skinbase_vertex:d1,skinning_pars_vertex:h1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:v1,tonemapping_fragment:_1,tonemapping_pars_fragment:y1,transmission_fragment:x1,transmission_pars_fragment:S1,uv_pars_fragment:E1,uv_pars_vertex:M1,uv_vertex:T1,worldpos_vertex:w1,background_vert:A1,background_frag:R1,backgroundCube_vert:C1,backgroundCube_frag:P1,cube_vert:b1,cube_frag:L1,depth_vert:D1,depth_frag:U1,distanceRGBA_vert:N1,distanceRGBA_frag:I1,equirect_vert:F1,equirect_frag:O1,linedashed_vert:z1,linedashed_frag:k1,meshbasic_vert:B1,meshbasic_frag:H1,meshlambert_vert:G1,meshlambert_frag:V1,meshmatcap_vert:W1,meshmatcap_frag:X1,meshnormal_vert:j1,meshnormal_frag:Y1,meshphong_vert:q1,meshphong_frag:$1,meshphysical_vert:K1,meshphysical_frag:Z1,meshtoon_vert:Q1,meshtoon_frag:J1,points_vert:eA,points_frag:tA,shadow_vert:nA,shadow_frag:iA,sprite_vert:rA,sprite_frag:oA},ve={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ri={basic:{uniforms:nn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:nn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:nn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:nn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:nn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:nn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:nn([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:nn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:nn([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:nn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:nn([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:nn([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:nn([ve.lights,ve.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ri.physical={uniforms:nn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const dl={r:0,b:0,g:0};function aA(t,e,n,i,r,o,a){const s=new ot(0);let l=o===!0?0:1,u,c,d=null,h=0,m=null;function _(p,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?y(s,l):g&&g.isColor&&(y(g,1),v=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Du)?(c===void 0&&(c=new Zi(new Cs(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:ra(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,x,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=st.getTransfer(g.colorSpace)!==dt,(d!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Zi(new hh(2,2),new qr({name:"BackgroundMaterial",uniforms:ra(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=st.getTransfer(g.colorSpace)!==dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function y(p,f){p.getRGB(dl,x0(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,f,a)}return{getClearColor:function(){return s},setClearColor:function(p,f=1){s.set(p),l=f,y(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(s,l)},render:_}}function sA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||o!==null,s={},l=p(null);let u=l,c=!1;function d(U,X,$,Z,I){let B=!1;if(a){const W=y(Z,$,X);u!==W&&(u=W,m(u.object)),B=f(U,Z,$,I),B&&v(U,Z,$,I)}else{const W=X.wireframe===!0;(u.geometry!==Z.id||u.program!==$.id||u.wireframe!==W)&&(u.geometry=Z.id,u.program=$.id,u.wireframe=W,B=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,N(U,X,$,Z),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(U){return i.isWebGL2?t.bindVertexArray(U):o.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?t.deleteVertexArray(U):o.deleteVertexArrayOES(U)}function y(U,X,$){const Z=$.wireframe===!0;let I=s[U.id];I===void 0&&(I={},s[U.id]=I);let B=I[X.id];B===void 0&&(B={},I[X.id]=B);let W=B[Z];return W===void 0&&(W=p(h()),B[Z]=W),W}function p(U){const X=[],$=[],Z=[];for(let I=0;I<r;I++)X[I]=0,$[I]=0,Z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:$,attributeDivisors:Z,object:U,attributes:{},index:null}}function f(U,X,$,Z){const I=u.attributes,B=X.attributes;let W=0;const Q=$.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const J=I[ee];let ge=B[ee];if(ge===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(ge=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(ge=U.instanceColor)),J===void 0||J.attribute!==ge||ge&&J.data!==ge.data)return!0;W++}return u.attributesNum!==W||u.index!==Z}function v(U,X,$,Z){const I={},B=X.attributes;let W=0;const Q=$.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let J=B[ee];J===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const ge={};ge.attribute=J,J&&J.data&&(ge.data=J.data),I[ee]=ge,W++}u.attributes=I,u.attributesNum=W,u.index=Z}function g(){const U=u.newAttributes;for(let X=0,$=U.length;X<$;X++)U[X]=0}function E(U){P(U,0)}function P(U,X){const $=u.newAttributes,Z=u.enabledAttributes,I=u.attributeDivisors;$[U]=1,Z[U]===0&&(t.enableVertexAttribArray(U),Z[U]=1),I[U]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,X),I[U]=X)}function x(){const U=u.newAttributes,X=u.enabledAttributes;for(let $=0,Z=X.length;$<Z;$++)X[$]!==U[$]&&(t.disableVertexAttribArray($),X[$]=0)}function T(U,X,$,Z,I,B,W){W===!0?t.vertexAttribIPointer(U,X,$,I,B):t.vertexAttribPointer(U,X,$,Z,I,B)}function N(U,X,$,Z){if(i.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=Z.attributes,B=$.getAttributes(),W=X.defaultAttributeValues;for(const Q in B){const ee=B[Q];if(ee.location>=0){let q=I[Q];if(q===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(q=U.instanceColor)),q!==void 0){const J=q.normalized,ge=q.itemSize,Ee=n.get(q);if(Ee===void 0)continue;const Ae=Ee.buffer,ke=Ee.type,He=Ee.bytesPerElement,Ie=i.isWebGL2===!0&&(ke===t.INT||ke===t.UNSIGNED_INT||q.gpuType===n0);if(q.isInterleavedBufferAttribute){const ze=q.data,H=ze.stride,Mt=q.offset;if(ze.isInstancedInterleavedBuffer){for(let Ue=0;Ue<ee.locationSize;Ue++)P(ee.location+Ue,ze.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Ue=0;Ue<ee.locationSize;Ue++)E(ee.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let Ue=0;Ue<ee.locationSize;Ue++)T(ee.location+Ue,ge/ee.locationSize,ke,J,H*He,(Mt+ge/ee.locationSize*Ue)*He,Ie)}else{if(q.isInstancedBufferAttribute){for(let ze=0;ze<ee.locationSize;ze++)P(ee.location+ze,q.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ze=0;ze<ee.locationSize;ze++)E(ee.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let ze=0;ze<ee.locationSize;ze++)T(ee.location+ze,ge/ee.locationSize,ke,J,ge*He,ge/ee.locationSize*ze*He,Ie)}}else if(W!==void 0){const J=W[Q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(ee.location,J);break;case 3:t.vertexAttrib3fv(ee.location,J);break;case 4:t.vertexAttrib4fv(ee.location,J);break;default:t.vertexAttrib1fv(ee.location,J)}}}}x()}function S(){K();for(const U in s){const X=s[U];for(const $ in X){const Z=X[$];for(const I in Z)_(Z[I].object),delete Z[I];delete X[$]}delete s[U]}}function A(U){if(s[U.id]===void 0)return;const X=s[U.id];for(const $ in X){const Z=X[$];for(const I in Z)_(Z[I].object),delete Z[I];delete X[$]}delete s[U.id]}function k(U){for(const X in s){const $=s[X];if($[U.id]===void 0)continue;const Z=$[U.id];for(const I in Z)_(Z[I].object),delete Z[I];delete $[U.id]}}function K(){re(),c=!0,u!==l&&(u=l,m(u.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:re,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:E,disableUnusedAttributes:x}}function lA(t,e,n,i){const r=i.isWebGL2;let o;function a(c){o=c}function s(c,d){t.drawArrays(o,c,d),n.update(d,o,1)}function l(c,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](o,c,d,h),n.update(d,o,h)}function u(c,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(c[_],d[_]);else{m.multiDrawArraysWEBGL(o,c,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];n.update(_,o,1)}}this.setMode=a,this.render=s,this.renderInstances=l,this.renderMultiDraw=u}function uA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=a||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,E=a||e.has("OES_texture_float"),P=g&&E,x=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:x}}function cA(t){const e=this;let n=null,i=0,r=!1,o=!1;const a=new Gi,s=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||o&&!p)o?c(null):u();else{const v=o?0:i,g=v*4;let E=f.clippingState||null;l.value=E,E=c(_,h,g,m);for(let P=0;P!==g;++P)E[P]=n[P];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,m,_){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const f=m+y*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,E=m;g!==y;++g,E+=4)a.copy(d[g]).applyMatrix4(v,s),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function fA(t){let e=new WeakMap;function n(a,s){return s===Qf?a.mapping=ta:s===Jf&&(a.mapping=na),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===Qf||s===Jf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new MT(l.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class dA extends S0{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Io=4,Hm=[.125,.215,.35,.446,.526,.582],Cr=20,Hc=new dA,Gm=new ot;let Gc=null,Vc=0,Wc=0;const wr=(1+Math.sqrt(5))/2,_o=1/wr,Vm=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,wr,_o),new z(0,wr,-_o),new z(_o,0,wr),new z(-_o,0,wr),new z(wr,_o,0),new z(-wr,_o,0)];class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Vc,Wc),e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:gs,format:Kn,colorSpace:Pi,depthBuffer:!1},r=Xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hA(o)),this._blurMaterial=pA(o,e,n)}return r}_compileMaterial(e){const n=new Zi(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,i,r){const s=new Nn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Gm),c.toneMapping=sr,c.autoClear=!1;const m=new v0({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),_=new Zi(new Cs,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Gm),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(s.up.set(0,l[f],0),s.lookAt(u[f],0,0)):v===1?(s.up.set(0,0,l[f]),s.lookAt(0,u[f],0)):(s.up.set(0,l[f],0),s.lookAt(0,0,u[f]));const g=this._cubeSize;hl(r,v*g,f>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,s),c.render(e,s)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ta||e.mapping===na;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Zi(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Hc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vm[(r-1)%Vm.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,s){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Zi(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Cr-1),y=o/_,p=isFinite(o)?1+Math.floor(c*y):Cr;p>Cr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cr}`);const f=[];let v=0;for(let T=0;T<Cr;++T){const N=T/y,S=Math.exp(-N*N/2);f.push(S),T===0?v+=S:T<p&&(v+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const E=this._sizeLods[r],P=3*E*(r>g-Io?r-g+Io:0),x=4*(this._cubeSize-E);hl(n,P,x,3*E,2*E),l.setRenderTarget(n),l.render(d,Hc)}}function hA(t){const e=[],n=[],i=[];let r=t;const o=t-Io+1+Hm.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);n.push(s);let l=1/s;a>t-Io?l=Hm[a-t+Io-1]:a===0&&(l=0),i.push(l);const u=1/(s-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,_=6,y=3,p=2,f=1,v=new Float32Array(y*_*m),g=new Float32Array(p*_*m),E=new Float32Array(f*_*m);for(let x=0;x<m;x++){const T=x%3*2/3-1,N=x>2?0:-1,S=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];v.set(S,y*_*x),g.set(h,p*_*x);const A=[x,x,x,x,x,x];E.set(A,f*_*x)}const P=new ei;P.setAttribute("position",new Tn(v,y)),P.setAttribute("uv",new Tn(g,p)),P.setAttribute("faceIndex",new Tn(E,f)),e.push(P),r>Io&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xm(t,e,n){const i=new jr(t,e,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pA(t,e,n){const i=new Float32Array(Cr),r=new z(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function jm(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Ym(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mA(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Qf||l===Jf,c=l===ta||l===na;if(u||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return n===null&&(n=new Wm(t)),d=u?n.fromEquirectangular(s,d):n.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Wm(t));const h=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",o),h.texture}else return null}}}return s}function r(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function o(s){const l=s.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function gA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vA(t,e,n,i){const r={},o=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,f=y.length;p<f;p++)e.update(y[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,_=d.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let g=0,E=v.length;g<E;g+=3){const P=v[g+0],x=v[g+1],T=v[g+2];h.push(P,x,x,T,T,P)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,E=v.length/3-1;g<E;g+=3){const P=g+0,x=g+1,T=g+2;h.push(P,x,x,T,T,P)}}else return;const p=new(f0(h)?y0:_0)(h,1);p.version=y;const f=o.get(d);f&&e.remove(f),o.set(d,p)}function c(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return o.get(d)}return{get:s,update:l,getWireframeAttribute:c}}function _A(t,e,n,i){const r=i.isWebGL2;let o;function a(m){o=m}let s,l;function u(m){s=m.type,l=m.bytesPerElement}function c(m,_){t.drawElements(o,_,s,m*l),n.update(_,o,1)}function d(m,_,y){if(y===0)return;let p,f;if(r)p=t,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](o,_,s,m*l,y),n.update(_,o,y)}function h(m,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/l,_[f]);else{p.multiDrawElementsWEBGL(o,_,0,s,m,0,y);let f=0;for(let v=0;v<y;v++)f+=_[v];n.update(f,o,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function yA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xA(t,e){return t[0]-e[0]}function SA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function EA(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,a=new Wt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=_!==void 0?_.length:0;let p=o.get(c);if(p===void 0||p.count!==y){let X=function(){re.dispose(),o.delete(c),c.removeEventListener("dispose",X)};var m=X;p!==void 0&&p.texture.dispose();const g=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],N=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),E===!0&&(S=2),P===!0&&(S=3);let A=c.attributes.position.count*S,k=1;A>e.maxTextureSize&&(k=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const K=new Float32Array(A*k*4*y),re=new p0(K,A,k,y);re.type=Ki,re.needsUpdate=!0;const U=S*4;for(let $=0;$<y;$++){const Z=x[$],I=T[$],B=N[$],W=A*k*4*$;for(let Q=0;Q<Z.count;Q++){const ee=Q*U;g===!0&&(a.fromBufferAttribute(Z,Q),K[W+ee+0]=a.x,K[W+ee+1]=a.y,K[W+ee+2]=a.z,K[W+ee+3]=0),E===!0&&(a.fromBufferAttribute(I,Q),K[W+ee+4]=a.x,K[W+ee+5]=a.y,K[W+ee+6]=a.z,K[W+ee+7]=0),P===!0&&(a.fromBufferAttribute(B,Q),K[W+ee+8]=a.x,K[W+ee+9]=a.y,K[W+ee+10]=a.z,K[W+ee+11]=B.itemSize===4?a.w:1)}}p={count:y,texture:re,size:new Ke(A,k)},o.set(c,p),c.addEventListener("dispose",X)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[c.id];if(y===void 0||y.length!==_){y=[];for(let E=0;E<_;E++)y[E]=[E,0];i[c.id]=y}for(let E=0;E<_;E++){const P=y[E];P[0]=E,P[1]=h[E]}y.sort(SA);for(let E=0;E<8;E++)E<_&&y[E][1]?(s[E][0]=y[E][0],s[E][1]=y[E][1]):(s[E][0]=Number.MAX_SAFE_INTEGER,s[E][1]=0);s.sort(xA);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const P=s[E],x=P[0],T=P[1];x!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+E)!==p[x]&&c.setAttribute("morphTarget"+E,p[x]),f&&c.getAttribute("morphNormal"+E)!==f[x]&&c.setAttribute("morphNormal"+E,f[x]),r[E]=T,v+=T):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),f&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),r[E]=0)}const g=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function MA(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}class w0 extends Mn{constructor(e,n,i,r,o,a,s,l,u,c){if(c=c!==void 0?c:Or,c!==Or&&c!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Or&&(i=$i),i===void 0&&c===ia&&(i=Fr),super(null,r,o,a,s,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const A0=new Mn,R0=new w0(1,1);R0.compareFunction=c0;const C0=new p0,P0=new aT,b0=new E0,qm=[],$m=[],Km=new Float32Array(16),Zm=new Float32Array(9),Qm=new Float32Array(4);function ca(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=qm[r];if(o===void 0&&(o=new Float32Array(r),qm[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fu(t,e){let n=$m[e];n===void 0&&(n=new Int32Array(e),$m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function CA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(It(n,i))return;Qm.set(i),t.uniformMatrix2fv(this.addr,!1,Qm),Ft(n,i)}}function PA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(It(n,i))return;Zm.set(i),t.uniformMatrix3fv(this.addr,!1,Zm),Ft(n,i)}}function bA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(It(n,i))return;Km.set(i),t.uniformMatrix4fv(this.addr,!1,Km),Ft(n,i)}}function LA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function IA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function kA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?R0:A0;n.setTexture2D(e||o,r)}function BA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||P0,r)}function HA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b0,r)}function GA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||C0,r)}function VA(t){switch(t){case 5126:return TA;case 35664:return wA;case 35665:return AA;case 35666:return RA;case 35674:return CA;case 35675:return PA;case 35676:return bA;case 5124:case 35670:return LA;case 35667:case 35671:return DA;case 35668:case 35672:return UA;case 35669:case 35673:return NA;case 5125:return IA;case 36294:return FA;case 36295:return OA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}function WA(t,e){t.uniform1fv(this.addr,e)}function XA(t,e){const n=ca(e,this.size,2);t.uniform2fv(this.addr,n)}function jA(t,e){const n=ca(e,this.size,3);t.uniform3fv(this.addr,n)}function YA(t,e){const n=ca(e,this.size,4);t.uniform4fv(this.addr,n)}function qA(t,e){const n=ca(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $A(t,e){const n=ca(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KA(t,e){const n=ca(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZA(t,e){t.uniform1iv(this.addr,e)}function QA(t,e){t.uniform2iv(this.addr,e)}function JA(t,e){t.uniform3iv(this.addr,e)}function eR(t,e){t.uniform4iv(this.addr,e)}function tR(t,e){t.uniform1uiv(this.addr,e)}function nR(t,e){t.uniform2uiv(this.addr,e)}function iR(t,e){t.uniform3uiv(this.addr,e)}function rR(t,e){t.uniform4uiv(this.addr,e)}function oR(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||A0,o[a])}function aR(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||P0,o[a])}function sR(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||b0,o[a])}function lR(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||C0,o[a])}function uR(t){switch(t){case 5126:return WA;case 35664:return XA;case 35665:return jA;case 35666:return YA;case 35674:return qA;case 35675:return $A;case 35676:return KA;case 5124:case 35670:return ZA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return eR;case 5125:return tR;case 36294:return nR;case 36295:return iR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return oR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return lR}}class cR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VA(n.type)}}class fR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uR(n.type)}}class dR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,n[s.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function Jm(t,e){t.seq.push(e),t.map[e.id]=e}function hR(t,e,n){const i=t.name,r=i.length;for(Xc.lastIndex=0;;){const o=Xc.exec(i),a=Xc.lastIndex;let s=o[1];const l=o[2]==="]",u=o[3];if(l&&(s=s|0),u===void 0||u==="["&&a+2===r){Jm(n,u===void 0?new cR(s,t,e):new fR(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new dR(s),Jm(n,d)),n=d}}}class Dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);hR(o,a,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function eg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pR=37297;let mR=0;function gR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return i.join(`
`)}function vR(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===cu&&n===uu?i="LinearDisplayP3ToLinearSRGB":e===uu&&n===cu&&(i="LinearSRGBToLinearDisplayP3"),t){case Pi:case Uu:return[i,"LinearTransferOETF"];case Vt:case fh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function tg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+gR(t.getShaderSource(e),a)}else return r}function _R(t,e){const n=vR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yR(t,e){let n;switch(e){case pM:n="Linear";break;case mM:n="Reinhard";break;case gM:n="OptimizedCineon";break;case vM:n="ACESFilmic";break;case yM:n="AgX";break;case _M:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fo).join(`
`)}function SR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fo).join(`
`)}function ER(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function Fo(t){return t!==""}function ng(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TR=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(t){return t.replace(TR,AR)}const wR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AR(t,e){let n=$e[e];if(n===void 0){const i=wR.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const RR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(t){return t.replace(RR,CR)}function CR(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function og(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===GE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function bR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function DR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case e0:e="ENVMAP_BLENDING_MULTIPLY";break;case dM:e="ENVMAP_BLENDING_MIX";break;case hM:e="ENVMAP_BLENDING_ADD";break}return e}function UR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NR(t,e,n,i){const r=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=PR(n),u=bR(n),c=LR(n),d=DR(n),h=UR(n),m=n.isWebGL2?"":xR(n),_=SR(n),y=ER(o),p=r.createProgram();let f,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Fo).join(`
`),f.length>0&&(f+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(f=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[m,og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?$e.tonemapping_pars_fragment:"",n.toneMapping!==sr?yR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,_R("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),a=rd(a),a=ng(a,n),a=ig(a,n),s=rd(s),s=ng(s,n),s=ig(s,n),a=rg(a),s=rg(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=g+f+a,P=g+v+s,x=eg(r,r.VERTEX_SHADER,E),T=eg(r,r.FRAGMENT_SHADER,P);r.attachShader(p,x),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(K){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(x).trim(),X=r.getShaderInfoLog(T).trim();let $=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,x,T);else{const I=tg(r,x,"vertex"),B=tg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+I+`
`+B)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(U===""||X==="")&&(Z=!1);Z&&(K.diagnostics={runnable:$,programLog:re,vertexShader:{log:U,prefix:f},fragmentShader:{log:X,prefix:v}})}r.deleteShader(x),r.deleteShader(T),S=new Dl(r,p),A=MR(r,p)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(p,pR)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mR++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=T,this}let IR=0;class FR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OR(e),n.set(e,i)),i}}class OR{constructor(e){this.id=IR++,this.code=e,this.usedTimes=0}}function zR(t,e,n,i,r,o,a){const s=new m0,l=new FR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function p(S,A,k,K,re){const U=K.fog,X=re.geometry,$=S.isMeshStandardMaterial?K.environment:null,Z=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),I=Z&&Z.mapping===Du?Z.image.height:null,B=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const W=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=W!==void 0?W.length:0;let ee=0;X.morphAttributes.position!==void 0&&(ee=1),X.morphAttributes.normal!==void 0&&(ee=2),X.morphAttributes.color!==void 0&&(ee=3);let q,J,ge,Ee;if(B){const Ce=ri[B];q=Ce.vertexShader,J=Ce.fragmentShader}else q=S.vertexShader,J=S.fragmentShader,l.update(S),ge=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const Ae=t.getRenderTarget(),ke=re.isInstancedMesh===!0,He=re.isBatchedMesh===!0,Ie=!!S.map,ze=!!S.matcap,H=!!Z,Mt=!!S.aoMap,Ue=!!S.lightMap,Ne=!!S.bumpMap,Pe=!!S.normalMap,lt=!!S.displacementMap,Ge=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,G=S.anisotropy>0,se=S.clearcoat>0,oe=S.iridescence>0,ne=S.sheen>0,Re=S.transmission>0,_e=G&&!!S.anisotropyMap,Me=se&&!!S.clearcoatMap,Fe=se&&!!S.clearcoatNormalMap,Oe=se&&!!S.clearcoatRoughnessMap,ae=oe&&!!S.iridescenceMap,Qe=oe&&!!S.iridescenceThicknessMap,b=ne&&!!S.sheenColorMap,ie=ne&&!!S.sheenRoughnessMap,he=!!S.specularMap,le=!!S.specularColorMap,be=!!S.specularIntensityMap,Xe=Re&&!!S.transmissionMap,tt=Re&&!!S.thicknessMap,je=!!S.gradientMap,pe=!!S.alphaMap,L=S.alphaTest>0,de=!!S.alphaHash,C=!!S.extensions,D=!!X.attributes.uv1,F=!!X.attributes.uv2,te=!!X.attributes.uv3;let ce=sr;return S.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ce=t.toneMapping),{isWebGL2:c,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:J,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:He,instancing:ke,instancingColor:ke&&re.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Pi,map:Ie,matcap:ze,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:I,aoMap:Mt,lightMap:Ue,bumpMap:Ne,normalMap:Pe,displacementMap:h&&lt,emissiveMap:Ge,normalMapObjectSpace:Pe&&S.normalMapType===DM,normalMapTangentSpace:Pe&&S.normalMapType===LM,metalnessMap:R,roughnessMap:M,anisotropy:G,anisotropyMap:_e,clearcoat:se,clearcoatMap:Me,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Oe,iridescence:oe,iridescenceMap:ae,iridescenceThicknessMap:Qe,sheen:ne,sheenColorMap:b,sheenRoughnessMap:ie,specularMap:he,specularColorMap:le,specularIntensityMap:be,transmission:Re,transmissionMap:Xe,thicknessMap:tt,gradientMap:je,opaque:S.transparent===!1&&S.blending===Wo,alphaMap:pe,alphaTest:L,alphaHash:de,combine:S.combine,mapUv:Ie&&y(S.map.channel),aoMapUv:Mt&&y(S.aoMap.channel),lightMapUv:Ue&&y(S.lightMap.channel),bumpMapUv:Ne&&y(S.bumpMap.channel),normalMapUv:Pe&&y(S.normalMap.channel),displacementMapUv:lt&&y(S.displacementMap.channel),emissiveMapUv:Ge&&y(S.emissiveMap.channel),metalnessMapUv:R&&y(S.metalnessMap.channel),roughnessMapUv:M&&y(S.roughnessMap.channel),anisotropyMapUv:_e&&y(S.anisotropyMap.channel),clearcoatMapUv:Me&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:b&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:ie&&y(S.sheenRoughnessMap.channel),specularMapUv:he&&y(S.specularMap.channel),specularColorMapUv:le&&y(S.specularColorMap.channel),specularIntensityMapUv:be&&y(S.specularIntensityMap.channel),transmissionMapUv:Xe&&y(S.transmissionMap.channel),thicknessMapUv:tt&&y(S.thicknessMap.channel),alphaMapUv:pe&&y(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pe||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:D,vertexUv2s:F,vertexUv3s:te,pointsUvs:re.isPoints===!0&&!!X.attributes.uv&&(Ie||pe),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:ce,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_i,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:C&&S.extensions.derivatives===!0,extensionFragDepth:C&&S.extensions.fragDepth===!0,extensionDrawBuffers:C&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:C&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:C&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)A.push(k),A.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(v(A,S),g(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function g(S,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),A.alphaHash&&s.enable(18),A.batching&&s.enable(19),S.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function E(S){const A=_[S.type];let k;if(A){const K=ri[A];k=yT.clone(K.uniforms)}else k=S.uniforms;return k}function P(S,A){let k;for(let K=0,re=u.length;K<re;K++){const U=u[K];if(U.cacheKey===A){k=U,++k.usedTimes;break}}return k===void 0&&(k=new NR(t,A,S,o),u.push(k)),k}function x(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:P,releaseProgram:x,releaseShaderCache:T,programs:u,dispose:N}}function kR(){let t=new WeakMap;function e(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function i(o,a,s){t.get(o)[a]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function BR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ag(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,m,_,y,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:y,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function s(d,h,m,_,y,p){const f=a(d,h,m,_,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,_,y,p){const f=a(d,h,m,_,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||BR),i.length>1&&i.sort(h||ag),r.length>1&&r.sort(h||ag)}function c(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:c,sort:u}}function HR(){let t=new WeakMap;function e(i,r){const o=t.get(i);let a;return o===void 0?(a=new sg,t.set(i,[a])):r>=o.length?(a=new sg,o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function GR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new ot};break;case"SpotLight":n={position:new z,direction:new z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function VR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WR=0;function XR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jR(t,e){const n=new GR,i=VR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new z);const o=new z,a=new Nt,s=new Nt;function l(c,d){let h=0,m=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let y=0,p=0,f=0,v=0,g=0,E=0,P=0,x=0,T=0,N=0,S=0;c.sort(XR);const A=d===!0?Math.PI:1;for(let K=0,re=c.length;K<re;K++){const U=c[K],X=U.color,$=U.intensity,Z=U.distance,I=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=X.r*$*A,m+=X.g*$*A,_+=X.b*$*A;else if(U.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(U.sh.coefficients[B],$);S++}else if(U.isDirectionalLight){const B=n.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity*A),U.castShadow){const W=U.shadow,Q=i.get(U);Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,r.directionalShadow[y]=Q,r.directionalShadowMap[y]=I,r.directionalShadowMatrix[y]=U.shadow.matrix,E++}r.directional[y]=B,y++}else if(U.isSpotLight){const B=n.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(X).multiplyScalar($*A),B.distance=Z,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,r.spot[f]=B;const W=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,W.updateMatrices(U),U.castShadow&&N++),r.spotLightMatrix[f]=W.matrix,U.castShadow){const Q=i.get(U);Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,r.spotShadow[f]=Q,r.spotShadowMap[f]=I,x++}f++}else if(U.isRectAreaLight){const B=n.get(U);B.color.copy(X).multiplyScalar($),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=B,v++}else if(U.isPointLight){const B=n.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity*A),B.distance=U.distance,B.decay=U.decay,U.castShadow){const W=U.shadow,Q=i.get(U);Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,r.pointShadow[p]=Q,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=U.shadow.matrix,P++}r.point[p]=B,p++}else if(U.isHemisphereLight){const B=n.get(U);B.skyColor.copy(U.color).multiplyScalar($*A),B.groundColor.copy(U.groundColor).multiplyScalar($*A),r.hemi[g]=B,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==y||k.pointLength!==p||k.spotLength!==f||k.rectAreaLength!==v||k.hemiLength!==g||k.numDirectionalShadows!==E||k.numPointShadows!==P||k.numSpotShadows!==x||k.numSpotMaps!==T||k.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=x+T-N,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=S,k.directionalLength=y,k.pointLength=p,k.spotLength=f,k.rectAreaLength=v,k.hemiLength=g,k.numDirectionalShadows=E,k.numPointShadows=P,k.numSpotShadows=x,k.numSpotMaps=T,k.numLightProbes=S,r.version=WR++)}function u(c,d){let h=0,m=0,_=0,y=0,p=0;const f=d.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const E=c[v];if(E.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(f),h++}else if(E.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(f),_++}else if(E.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),s.identity(),a.copy(E.matrixWorld),a.premultiply(f),s.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(s),P.halfHeight.applyMatrix4(s),y++}else if(E.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:r}}function lg(t,e){const n=new jR(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function a(d){i.push(d)}function s(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:s}}function YR(t,e){let n=new WeakMap;function i(o,a=0){const s=n.get(o);let l;return s===void 0?(l=new lg(t,e),n.set(o,[l])):a>=s.length?(l=new lg(t,e),s.push(l)):l=s[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class qR extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $R extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QR(t,e,n){let i=new M0;const r=new Ke,o=new Ke,a=new Wt,s=new qR({depthPacking:bM}),l=new $R,u={},c=n.maxTextureSize,d={[dr]:gn,[gn]:dr,[_i]:_i},h=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:KR,fragmentShader:ZR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new ei;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Zi(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let f=this.type;this.render=function(x,T,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const S=t.getRenderTarget(),A=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),K=t.state;K.setBlending(ar),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const re=f!==mi&&this.type===mi,U=f===mi&&this.type!==mi;for(let X=0,$=x.length;X<$;X++){const Z=x[X],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const B=I.getFrameExtents();if(r.multiply(B),o.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/B.x),r.x=o.x*B.x,I.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/B.y),r.y=o.y*B.y,I.mapSize.y=o.y)),I.map===null||re===!0||U===!0){const Q=this.type!==mi?{minFilter:on,magFilter:on}:{};I.map!==null&&I.map.dispose(),I.map=new jr(r.x,r.y,Q),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const W=I.getViewportCount();for(let Q=0;Q<W;Q++){const ee=I.getViewport(Q);a.set(o.x*ee.x,o.y*ee.y,o.x*ee.z,o.y*ee.w),K.viewport(a),I.updateMatrices(Z,Q),i=I.getFrustum(),E(T,N,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===mi&&v(I,N),I.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(S,A,k)};function v(x,T){const N=e.update(y);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new jr(r.x,r.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,t.setRenderTarget(x.mapPass),t.clear(),t.renderBufferDirect(T,null,N,h,y,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,t.setRenderTarget(x.map),t.clear(),t.renderBufferDirect(T,null,N,m,y,null)}function g(x,T,N,S){let A=null;const k=N.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(k!==void 0)A=k;else if(A=N.isPointLight===!0?l:s,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const K=A.uuid,re=T.uuid;let U=u[K];U===void 0&&(U={},u[K]=U);let X=U[re];X===void 0&&(X=A.clone(),U[re]=X,T.addEventListener("dispose",P)),A=X}if(A.visible=T.visible,A.wireframe=T.wireframe,S===mi?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const K=t.properties.get(A);K.light=N}return A}function E(x,T,N,S,A){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===mi)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld);const re=e.update(x),U=x.material;if(Array.isArray(U)){const X=re.groups;for(let $=0,Z=X.length;$<Z;$++){const I=X[$],B=U[I.materialIndex];if(B&&B.visible){const W=g(x,B,S,A);x.onBeforeShadow(t,x,T,N,re,W,I),t.renderBufferDirect(N,null,re,W,x,I),x.onAfterShadow(t,x,T,N,re,W,I)}}}else if(U.visible){const X=g(x,U,S,A);x.onBeforeShadow(t,x,T,N,re,X,null),t.renderBufferDirect(N,null,re,X,x,null),x.onAfterShadow(t,x,T,N,re,X,null)}}const K=x.children;for(let re=0,U=K.length;re<U;re++)E(K[re],T,N,S,A)}function P(x){x.target.removeEventListener("dispose",P);for(const N in u){const S=u[N],A=x.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function JR(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const de=new Wt;let C=null;const D=new Wt(0,0,0,0);return{setMask:function(F){C!==F&&!L&&(t.colorMask(F,F,F,F),C=F)},setLocked:function(F){L=F},setClear:function(F,te,ce,Le,Ce){Ce===!0&&(F*=Le,te*=Le,ce*=Le),de.set(F,te,ce,Le),D.equals(de)===!1&&(t.clearColor(F,te,ce,Le),D.copy(de))},reset:function(){L=!1,C=null,D.set(-1,0,0,0)}}}function o(){let L=!1,de=null,C=null,D=null;return{setTest:function(F){F?He(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(F){de!==F&&!L&&(t.depthMask(F),de=F)},setFunc:function(F){if(C!==F){switch(F){case oM:t.depthFunc(t.NEVER);break;case aM:t.depthFunc(t.ALWAYS);break;case sM:t.depthFunc(t.LESS);break;case su:t.depthFunc(t.LEQUAL);break;case lM:t.depthFunc(t.EQUAL);break;case uM:t.depthFunc(t.GEQUAL);break;case cM:t.depthFunc(t.GREATER);break;case fM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}C=F}},setLocked:function(F){L=F},setClear:function(F){D!==F&&(t.clearDepth(F),D=F)},reset:function(){L=!1,de=null,C=null,D=null}}}function a(){let L=!1,de=null,C=null,D=null,F=null,te=null,ce=null,Le=null,Ce=null;return{setTest:function(ye){L||(ye?He(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(ye){de!==ye&&!L&&(t.stencilMask(ye),de=ye)},setFunc:function(ye,Te,Be){(C!==ye||D!==Te||F!==Be)&&(t.stencilFunc(ye,Te,Be),C=ye,D=Te,F=Be)},setOp:function(ye,Te,Be){(te!==ye||ce!==Te||Le!==Be)&&(t.stencilOp(ye,Te,Be),te=ye,ce=Te,Le=Be)},setLocked:function(ye){L=ye},setClear:function(ye){Ce!==ye&&(t.clearStencil(ye),Ce=ye)},reset:function(){L=!1,de=null,C=null,D=null,F=null,te=null,ce=null,Le=null,Ce=null}}}const s=new r,l=new o,u=new a,c=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,y=[],p=null,f=!1,v=null,g=null,E=null,P=null,x=null,T=null,N=null,S=new ot(0,0,0),A=0,k=!1,K=null,re=null,U=null,X=null,$=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,B=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=B>=2);let Q=null,ee={};const q=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ge=new Wt().fromArray(q),Ee=new Wt().fromArray(J);function Ae(L,de,C,D){const F=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ce=0;ce<C;ce++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,D,0,t.RGBA,t.UNSIGNED_BYTE,F):t.texImage2D(de+ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,F);return te}const ke={};ke[t.TEXTURE_2D]=Ae(t.TEXTURE_2D,t.TEXTURE_2D,1),ke[t.TEXTURE_CUBE_MAP]=Ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ke[t.TEXTURE_2D_ARRAY]=Ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ke[t.TEXTURE_3D]=Ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),He(t.DEPTH_TEST),l.setFunc(su),Ge(!1),R(Wp),He(t.CULL_FACE),Pe(ar);function He(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Ie(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function ze(L,de){return m[L]!==de?(t.bindFramebuffer(L,de),m[L]=de,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function H(L,de){let C=y,D=!1;if(L)if(C=_.get(de),C===void 0&&(C=[],_.set(de,C)),L.isWebGLMultipleRenderTargets){const F=L.texture;if(C.length!==F.length||C[0]!==t.COLOR_ATTACHMENT0){for(let te=0,ce=F.length;te<ce;te++)C[te]=t.COLOR_ATTACHMENT0+te;C.length=F.length,D=!0}}else C[0]!==t.COLOR_ATTACHMENT0&&(C[0]=t.COLOR_ATTACHMENT0,D=!0);else C[0]!==t.BACK&&(C[0]=t.BACK,D=!0);D&&(n.isWebGL2?t.drawBuffers(C):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(C))}function Mt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Ue={[Rr]:t.FUNC_ADD,[WE]:t.FUNC_SUBTRACT,[XE]:t.FUNC_REVERSE_SUBTRACT};if(i)Ue[Yp]=t.MIN,Ue[qp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ue[Yp]=L.MIN_EXT,Ue[qp]=L.MAX_EXT)}const Ne={[jE]:t.ZERO,[YE]:t.ONE,[qE]:t.SRC_COLOR,[Kf]:t.SRC_ALPHA,[eM]:t.SRC_ALPHA_SATURATE,[QE]:t.DST_COLOR,[KE]:t.DST_ALPHA,[$E]:t.ONE_MINUS_SRC_COLOR,[Zf]:t.ONE_MINUS_SRC_ALPHA,[JE]:t.ONE_MINUS_DST_COLOR,[ZE]:t.ONE_MINUS_DST_ALPHA,[tM]:t.CONSTANT_COLOR,[nM]:t.ONE_MINUS_CONSTANT_COLOR,[iM]:t.CONSTANT_ALPHA,[rM]:t.ONE_MINUS_CONSTANT_ALPHA};function Pe(L,de,C,D,F,te,ce,Le,Ce,ye){if(L===ar){f===!0&&(Ie(t.BLEND),f=!1);return}if(f===!1&&(He(t.BLEND),f=!0),L!==VE){if(L!==v||ye!==k){if((g!==Rr||x!==Rr)&&(t.blendEquation(t.FUNC_ADD),g=Rr,x=Rr),ye)switch(L){case Wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case au:t.blendFunc(t.ONE,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case au:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,P=null,T=null,N=null,S.set(0,0,0),A=0,v=L,k=ye}return}F=F||de,te=te||C,ce=ce||D,(de!==g||F!==x)&&(t.blendEquationSeparate(Ue[de],Ue[F]),g=de,x=F),(C!==E||D!==P||te!==T||ce!==N)&&(t.blendFuncSeparate(Ne[C],Ne[D],Ne[te],Ne[ce]),E=C,P=D,T=te,N=ce),(Le.equals(S)===!1||Ce!==A)&&(t.blendColor(Le.r,Le.g,Le.b,Ce),S.copy(Le),A=Ce),v=L,k=!1}function lt(L,de){L.side===_i?Ie(t.CULL_FACE):He(t.CULL_FACE);let C=L.side===gn;de&&(C=!C),Ge(C),L.blending===Wo&&L.transparent===!1?Pe(ar):Pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const D=L.stencilWrite;u.setTest(D),D&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?He(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){K!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),K=L)}function R(L){L!==BE?(He(t.CULL_FACE),L!==re&&(L===Wp?t.cullFace(t.BACK):L===HE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),re=L}function M(L){L!==U&&(I&&t.lineWidth(L),U=L)}function G(L,de,C){L?(He(t.POLYGON_OFFSET_FILL),(X!==de||$!==C)&&(t.polygonOffset(de,C),X=de,$=C)):Ie(t.POLYGON_OFFSET_FILL)}function se(L){L?He(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function oe(L){L===void 0&&(L=t.TEXTURE0+Z-1),Q!==L&&(t.activeTexture(L),Q=L)}function ne(L,de,C){C===void 0&&(Q===null?C=t.TEXTURE0+Z-1:C=Q);let D=ee[C];D===void 0&&(D={type:void 0,texture:void 0},ee[C]=D),(D.type!==L||D.texture!==de)&&(Q!==C&&(t.activeTexture(C),Q=C),t.bindTexture(L,de||ke[L]),D.type=L,D.texture=de)}function Re(){const L=ee[Q];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _e(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){ge.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function Xe(L){Ee.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ee.copy(L))}function tt(L,de){let C=d.get(de);C===void 0&&(C=new WeakMap,d.set(de,C));let D=C.get(L);D===void 0&&(D=t.getUniformBlockIndex(de,L.name),C.set(L,D))}function je(L,de){const D=d.get(de).get(L);c.get(de)!==D&&(t.uniformBlockBinding(de,D,L.__bindingPointIndex),c.set(de,D))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Q=null,ee={},m={},_=new WeakMap,y=[],p=null,f=!1,v=null,g=null,E=null,P=null,x=null,T=null,N=null,S=new ot(0,0,0),A=0,k=!1,K=null,re=null,U=null,X=null,$=null,ge.set(0,0,t.canvas.width,t.canvas.height),Ee.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:He,disable:Ie,bindFramebuffer:ze,drawBuffers:H,useProgram:Mt,setBlending:Pe,setMaterial:lt,setFlipSided:Ge,setCullFace:R,setLineWidth:M,setPolygonOffset:G,setScissorTest:se,activeTexture:oe,bindTexture:ne,unbindTexture:Re,compressedTexImage2D:_e,compressedTexImage3D:Me,texImage2D:he,texImage3D:le,updateUBOMapping:tt,uniformBlockBinding:je,texStorage2D:b,texStorage3D:ie,texSubImage2D:Fe,texSubImage3D:Oe,compressedTexSubImage2D:ae,compressedTexSubImage3D:Qe,scissor:be,viewport:Xe,reset:pe}}function eC(t,e,n,i,r,o,a){const s=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return m?new OffscreenCanvas(R,M):hu("canvas")}function y(R,M,G,se){let oe=1;if((R.width>se||R.height>se)&&(oe=se/Math.max(R.width,R.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ne=M?du:Math.floor,Re=ne(oe*R.width),_e=ne(oe*R.height);d===void 0&&(d=_(Re,_e));const Me=G?_(Re,_e):d;return Me.width=Re,Me.height=_e,Me.getContext("2d").drawImage(R,0,0,Re,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Re+"x"+_e+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return id(R.width)&&id(R.height)}function f(R){return s?!1:R.wrapS!==$n||R.wrapT!==$n||R.minFilter!==on&&R.minFilter!==Un}function v(R,M){return R.generateMipmaps&&M&&R.minFilter!==on&&R.minFilter!==Un}function g(R){t.generateMipmap(R)}function E(R,M,G,se,oe=!1){if(s===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=M;if(M===t.RED&&(G===t.FLOAT&&(ne=t.R32F),G===t.HALF_FLOAT&&(ne=t.R16F),G===t.UNSIGNED_BYTE&&(ne=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.R8UI),G===t.UNSIGNED_SHORT&&(ne=t.R16UI),G===t.UNSIGNED_INT&&(ne=t.R32UI),G===t.BYTE&&(ne=t.R8I),G===t.SHORT&&(ne=t.R16I),G===t.INT&&(ne=t.R32I)),M===t.RG&&(G===t.FLOAT&&(ne=t.RG32F),G===t.HALF_FLOAT&&(ne=t.RG16F),G===t.UNSIGNED_BYTE&&(ne=t.RG8)),M===t.RGBA){const Re=oe?lu:st.getTransfer(se);G===t.FLOAT&&(ne=t.RGBA32F),G===t.HALF_FLOAT&&(ne=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ne=Re===dt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function P(R,M,G){return v(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function x(R){return R===on||R===$p||R===vc?t.NEAREST:t.LINEAR}function T(R){const M=R.target;M.removeEventListener("dispose",T),S(M),M.isVideoTexture&&c.delete(M)}function N(R){const M=R.target;M.removeEventListener("dispose",N),k(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const G=R.source,se=h.get(G);if(se){const oe=se[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&A(R),Object.keys(se).length===0&&h.delete(G)}i.remove(R)}function A(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const G=R.source,se=h.get(G);delete se[M.__cacheKey],a.memory.textures--}function k(R){const M=R.texture,G=i.get(R),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(G.__webglFramebuffer[oe]))for(let ne=0;ne<G.__webglFramebuffer[oe].length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[oe][ne]);else t.deleteFramebuffer(G.__webglFramebuffer[oe]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[oe])}else{if(Array.isArray(G.__webglFramebuffer))for(let oe=0;oe<G.__webglFramebuffer.length;oe++)t.deleteFramebuffer(G.__webglFramebuffer[oe]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let oe=0;oe<G.__webglColorRenderbuffer.length;oe++)G.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[oe]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let oe=0,ne=M.length;oe<ne;oe++){const Re=i.get(M[oe]);Re.__webglTexture&&(t.deleteTexture(Re.__webglTexture),a.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(R)}let K=0;function re(){K=0}function U(){const R=K;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),K+=1,R}function X(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function $(R,M){const G=i.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,R,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ge(G,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function I(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ge(G,R,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function B(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Ee(G,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const W={[ed]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},Q={[on]:t.NEAREST,[$p]:t.NEAREST_MIPMAP_NEAREST,[vc]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[xM]:t.LINEAR_MIPMAP_NEAREST,[ms]:t.LINEAR_MIPMAP_LINEAR},ee={[UM]:t.NEVER,[kM]:t.ALWAYS,[NM]:t.LESS,[c0]:t.LEQUAL,[IM]:t.EQUAL,[zM]:t.GEQUAL,[FM]:t.GREATER,[OM]:t.NOTEQUAL};function q(R,M,G){if(G?(t.texParameteri(R,t.TEXTURE_WRAP_S,W[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,W[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,W[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==$n||M.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,x(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,x(M.minFilter)),M.minFilter!==on&&M.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===on||M.minFilter!==vc&&M.minFilter!==ms||M.type===Ki&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===gs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function J(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));const se=M.source;let oe=h.get(se);oe===void 0&&(oe={},h.set(se,oe));const ne=X(M);if(ne!==R.__cacheKey){oe[ne]===void 0&&(oe[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),oe[ne].usedTimes++;const Re=oe[R.__cacheKey];Re!==void 0&&(oe[R.__cacheKey].usedTimes--,Re.usedTimes===0&&A(M)),R.__cacheKey=ne,R.__webglTexture=oe[ne].texture}return G}function ge(R,M,G){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const oe=J(R,M),ne=M.source;n.bindTexture(se,R.__webglTexture,t.TEXTURE0+G);const Re=i.get(ne);if(ne.version!==Re.__version||oe===!0){n.activeTexture(t.TEXTURE0+G);const _e=st.getPrimaries(st.workingColorSpace),Me=M.colorSpace===In?null:st.getPrimaries(M.colorSpace),Fe=M.colorSpace===In||_e===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Oe=f(M)&&p(M.image)===!1;let ae=y(M.image,Oe,!1,r.maxTextureSize);ae=Ge(M,ae);const Qe=p(ae)||s,b=o.convert(M.format,M.colorSpace);let ie=o.convert(M.type),he=E(M.internalFormat,b,ie,M.colorSpace,M.isVideoTexture);q(se,M,Qe);let le;const be=M.mipmaps,Xe=s&&M.isVideoTexture!==!0&&he!==l0,tt=Re.__version===void 0||oe===!0,je=P(M,ae,Qe);if(M.isDepthTexture)he=t.DEPTH_COMPONENT,s?M.type===Ki?he=t.DEPTH_COMPONENT32F:M.type===$i?he=t.DEPTH_COMPONENT24:M.type===Fr?he=t.DEPTH24_STENCIL8:he=t.DEPTH_COMPONENT16:M.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Or&&he===t.DEPTH_COMPONENT&&M.type!==ch&&M.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$i,ie=o.convert(M.type)),M.format===ia&&he===t.DEPTH_COMPONENT&&(he=t.DEPTH_STENCIL,M.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Fr,ie=o.convert(M.type))),tt&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,he,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,he,ae.width,ae.height,0,b,ie,null));else if(M.isDataTexture)if(be.length>0&&Qe){Xe&&tt&&n.texStorage2D(t.TEXTURE_2D,je,he,be[0].width,be[0].height);for(let pe=0,L=be.length;pe<L;pe++)le=be[pe],Xe?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,le.width,le.height,b,ie,le.data):n.texImage2D(t.TEXTURE_2D,pe,he,le.width,le.height,0,b,ie,le.data);M.generateMipmaps=!1}else Xe?(tt&&n.texStorage2D(t.TEXTURE_2D,je,he,ae.width,ae.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,b,ie,ae.data)):n.texImage2D(t.TEXTURE_2D,0,he,ae.width,ae.height,0,b,ie,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,he,be[0].width,be[0].height,ae.depth);for(let pe=0,L=be.length;pe<L;pe++)le=be[pe],M.format!==Kn?b!==null?Xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,le.width,le.height,ae.depth,b,le.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,he,le.width,le.height,ae.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,le.width,le.height,ae.depth,b,ie,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,he,le.width,le.height,ae.depth,0,b,ie,le.data)}else{Xe&&tt&&n.texStorage2D(t.TEXTURE_2D,je,he,be[0].width,be[0].height);for(let pe=0,L=be.length;pe<L;pe++)le=be[pe],M.format!==Kn?b!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,le.width,le.height,b,le.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,he,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,le.width,le.height,b,ie,le.data):n.texImage2D(t.TEXTURE_2D,pe,he,le.width,le.height,0,b,ie,le.data)}else if(M.isDataArrayTexture)Xe?(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,he,ae.width,ae.height,ae.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,b,ie,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ae.width,ae.height,ae.depth,0,b,ie,ae.data);else if(M.isData3DTexture)Xe?(tt&&n.texStorage3D(t.TEXTURE_3D,je,he,ae.width,ae.height,ae.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,b,ie,ae.data)):n.texImage3D(t.TEXTURE_3D,0,he,ae.width,ae.height,ae.depth,0,b,ie,ae.data);else if(M.isFramebufferTexture){if(tt)if(Xe)n.texStorage2D(t.TEXTURE_2D,je,he,ae.width,ae.height);else{let pe=ae.width,L=ae.height;for(let de=0;de<je;de++)n.texImage2D(t.TEXTURE_2D,de,he,pe,L,0,b,ie,null),pe>>=1,L>>=1}}else if(be.length>0&&Qe){Xe&&tt&&n.texStorage2D(t.TEXTURE_2D,je,he,be[0].width,be[0].height);for(let pe=0,L=be.length;pe<L;pe++)le=be[pe],Xe?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,b,ie,le):n.texImage2D(t.TEXTURE_2D,pe,he,b,ie,le);M.generateMipmaps=!1}else Xe?(tt&&n.texStorage2D(t.TEXTURE_2D,je,he,ae.width,ae.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,b,ie,ae)):n.texImage2D(t.TEXTURE_2D,0,he,b,ie,ae);v(M,Qe)&&g(se),Re.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ee(R,M,G){if(M.image.length!==6)return;const se=J(R,M),oe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const ne=i.get(oe);if(oe.version!==ne.__version||se===!0){n.activeTexture(t.TEXTURE0+G);const Re=st.getPrimaries(st.workingColorSpace),_e=M.colorSpace===In?null:st.getPrimaries(M.colorSpace),Me=M.colorSpace===In||Re===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let pe=0;pe<6;pe++)!Fe&&!Oe?ae[pe]=y(M.image[pe],!1,!0,r.maxCubemapSize):ae[pe]=Oe?M.image[pe].image:M.image[pe],ae[pe]=Ge(M,ae[pe]);const Qe=ae[0],b=p(Qe)||s,ie=o.convert(M.format,M.colorSpace),he=o.convert(M.type),le=E(M.internalFormat,ie,he,M.colorSpace),be=s&&M.isVideoTexture!==!0,Xe=ne.__version===void 0||se===!0;let tt=P(M,Qe,b);q(t.TEXTURE_CUBE_MAP,M,b);let je;if(Fe){be&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,tt,le,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){je=ae[pe].mipmaps;for(let L=0;L<je.length;L++){const de=je[L];M.format!==Kn?ie!==null?be?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,L,0,0,de.width,de.height,ie,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,L,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,L,0,0,de.width,de.height,ie,he,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,L,le,de.width,de.height,0,ie,he,de.data)}}}else{je=M.mipmaps,be&&Xe&&(je.length>0&&tt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,tt,le,ae[0].width,ae[0].height));for(let pe=0;pe<6;pe++)if(Oe){be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ae[pe].width,ae[pe].height,ie,he,ae[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,le,ae[pe].width,ae[pe].height,0,ie,he,ae[pe].data);for(let L=0;L<je.length;L++){const C=je[L].image[pe].image;be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,L+1,0,0,C.width,C.height,ie,he,C.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,L+1,le,C.width,C.height,0,ie,he,C.data)}}else{be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ie,he,ae[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,le,ie,he,ae[pe]);for(let L=0;L<je.length;L++){const de=je[L];be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,L+1,0,0,ie,he,de.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,L+1,le,ie,he,de.image[pe])}}}v(M,b)&&g(t.TEXTURE_CUBE_MAP),ne.__version=oe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ae(R,M,G,se,oe,ne){const Re=o.convert(G.format,G.colorSpace),_e=o.convert(G.type),Me=E(G.internalFormat,Re,_e,G.colorSpace);if(!i.get(M).__hasExternalTextures){const Oe=Math.max(1,M.width>>ne),ae=Math.max(1,M.height>>ne);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ne,Me,Oe,ae,M.depth,0,Re,_e,null):n.texImage2D(oe,ne,Me,Oe,ae,0,Re,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Pe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,oe,i.get(G).__webglTexture,0,Ne(M)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,oe,i.get(G).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(R,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let se=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||Pe(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Ki?se=t.DEPTH_COMPONENT32F:oe.type===$i&&(se=t.DEPTH_COMPONENT24));const ne=Ne(M);Pe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,se,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,se,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const se=Ne(M);G&&Pe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):Pe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<se.length;oe++){const ne=se[oe],Re=o.convert(ne.format,ne.colorSpace),_e=o.convert(ne.type),Me=E(ne.internalFormat,Re,_e,ne.colorSpace),Fe=Ne(M);G&&Pe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Me,M.width,M.height):Pe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,Me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,oe=Ne(M);if(M.depthTexture.format===Or)Pe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===ia)Pe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const M=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");He(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),ke(M.__webglDepthbuffer[se],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ke(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(R,M,G){const se=i.get(R);M!==void 0&&Ae(se.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ie(R)}function H(R){const M=R.texture,G=i.get(R),se=i.get(M);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,a.memory.textures++);const oe=R.isWebGLCubeRenderTarget===!0,ne=R.isWebGLMultipleRenderTargets===!0,Re=p(R)||s;if(oe){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(s&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let Me=0;Me<M.mipmaps.length;Me++)G.__webglFramebuffer[_e][Me]=t.createFramebuffer()}else G.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(s&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)G.__webglFramebuffer[_e]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const _e=R.texture;for(let Me=0,Fe=_e.length;Me<Fe;Me++){const Oe=i.get(_e[Me]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&R.samples>0&&Pe(R)===!1){const _e=ne?M:[M];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Me=0;Me<_e.length;Me++){const Fe=_e[Me];G.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[Me]);const Oe=o.convert(Fe.format,Fe.colorSpace),ae=o.convert(Fe.type),Qe=E(Fe.internalFormat,Oe,ae,Fe.colorSpace,R.isXRRenderTarget===!0),b=Ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,b,Qe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,G.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),q(t.TEXTURE_CUBE_MAP,M,Re);for(let _e=0;_e<6;_e++)if(s&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Ae(G.__webglFramebuffer[_e][Me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else Ae(G.__webglFramebuffer[_e],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(M,Re)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const _e=R.texture;for(let Me=0,Fe=_e.length;Me<Fe;Me++){const Oe=_e[Me],ae=i.get(Oe);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),q(t.TEXTURE_2D,Oe,Re),Ae(G.__webglFramebuffer,R,Oe,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),v(Oe,Re)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(s?_e=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(_e,se.__webglTexture),q(_e,M,Re),s&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Ae(G.__webglFramebuffer[Me],R,M,t.COLOR_ATTACHMENT0,_e,Me);else Ae(G.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,_e,0);v(M,Re)&&g(_e),n.unbindTexture()}R.depthBuffer&&Ie(R)}function Mt(R){const M=p(R)||s,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,oe=G.length;se<oe;se++){const ne=G[se];if(v(ne,M)){const Re=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,_e=i.get(ne).__webglTexture;n.bindTexture(Re,_e),g(Re),n.unbindTexture()}}}function Ue(R){if(s&&R.samples>0&&Pe(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,se=R.height;let oe=t.COLOR_BUFFER_BIT;const ne=[],Re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(R),Me=R.isWebGLMultipleRenderTargets===!0;if(Me)for(let Fe=0;Fe<M.length;Fe++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){ne.push(t.COLOR_ATTACHMENT0+Fe),R.depthBuffer&&ne.push(Re);const Oe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Oe===!1&&(R.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),Me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Fe]),Oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Re]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Re])),Me){const ae=i.get(M[Fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,G,se,0,0,G,se,oe,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Fe=0;Fe<M.length;Fe++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Fe]);const Oe=i.get(M[Fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(r.maxSamples,R.samples)}function Pe(R){const M=i.get(R);return s&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(R){const M=a.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function Ge(R,M){const G=R.colorSpace,se=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===nd||G!==Pi&&G!==In&&(st.getTransfer(G)===dt?s===!1?e.has("EXT_sRGB")===!0&&se===Kn?(R.format=nd,R.minFilter=Un,R.generateMipmaps=!1):M=d0.sRGBToLinear(M):(se!==Kn||oe!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=U,this.resetTextureUnits=re,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=I,this.setTextureCube=B,this.rebindTextures=ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Pe}function tC(t,e,n){const i=n.isWebGL2;function r(o,a=In){let s;const l=st.getTransfer(a);if(o===lr)return t.UNSIGNED_BYTE;if(o===i0)return t.UNSIGNED_SHORT_4_4_4_4;if(o===r0)return t.UNSIGNED_SHORT_5_5_5_1;if(o===SM)return t.BYTE;if(o===EM)return t.SHORT;if(o===ch)return t.UNSIGNED_SHORT;if(o===n0)return t.INT;if(o===$i)return t.UNSIGNED_INT;if(o===Ki)return t.FLOAT;if(o===gs)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===MM)return t.ALPHA;if(o===Kn)return t.RGBA;if(o===TM)return t.LUMINANCE;if(o===wM)return t.LUMINANCE_ALPHA;if(o===Or)return t.DEPTH_COMPONENT;if(o===ia)return t.DEPTH_STENCIL;if(o===nd)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===AM)return t.RED;if(o===o0)return t.RED_INTEGER;if(o===RM)return t.RG;if(o===a0)return t.RG_INTEGER;if(o===s0)return t.RGBA_INTEGER;if(o===_c||o===yc||o===xc||o===Sc)if(l===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Kp||o===Zp||o===Qp||o===Jp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===Kp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Zp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Qp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Jp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===l0)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===em||o===tm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(o===em)return l===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===tm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===nm||o===im||o===rm||o===om||o===am||o===sm||o===lm||o===um||o===cm||o===fm||o===dm||o===hm||o===pm||o===mm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(o===nm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===im)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===rm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===om)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===am)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===sm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===lm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===um)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===cm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===fm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===dm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===hm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===pm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===mm)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ec||o===gm||o===vm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(o===Ec)return l===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===gm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===vm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===CM||o===_m||o===ym||o===xm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(o===Ec)return s.COMPRESSED_RED_RGTC1_EXT;if(o===_m)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ym)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===xm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Fr?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class nC extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Na extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iC={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),f=this._getHandJoint(u,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(iC)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class rC extends Qr{constructor(e,n){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,u=null,c=null,d=null,h=null,m=null,_=null;const y=n.getContextAttributes();let p=null,f=null;const v=[],g=[],E=new Ke;let P=null;const x=new Nn;x.layers.enable(1),x.viewport=new Wt;const T=new Nn;T.layers.enable(2),T.viewport=new Wt;const N=[x,T],S=new nC;S.layers.enable(1),S.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=v[q];return J===void 0&&(J=new jc,v[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=v[q];return J===void 0&&(J=new jc,v[q]=J),J.getGripSpace()},this.getHand=function(q){let J=v[q];return J===void 0&&(J=new jc,v[q]=J),J.getHandSpace()};function K(q){const J=g.indexOf(q.inputSource);if(J===-1)return;const ge=v[J];ge!==void 0&&(ge.update(q.inputSource,q.frame,u||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function re(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",U);for(let q=0;q<v.length;q++){const J=g[q];J!==null&&(g[q]=null,v[q].disconnect(J))}A=null,k=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",re),r.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new jr(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let J=null,ge=null,Ee=null;y.depth&&(Ee=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=y.stencil?ia:Or,ge=y.stencil?Fr:$i);const Ae={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new jr(h.textureWidth,h.textureHeight,{format:Kn,type:lr,depthTexture:new w0(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ke=e.properties.get(f);ke.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(q){for(let J=0;J<q.removed.length;J++){const ge=q.removed[J],Ee=g.indexOf(ge);Ee>=0&&(g[Ee]=null,v[Ee].disconnect(ge))}for(let J=0;J<q.added.length;J++){const ge=q.added[J];let Ee=g.indexOf(ge);if(Ee===-1){for(let ke=0;ke<v.length;ke++)if(ke>=g.length){g.push(ge),Ee=ke;break}else if(g[ke]===null){g[ke]=ge,Ee=ke;break}if(Ee===-1)break}const Ae=v[Ee];Ae&&Ae.connect(ge)}}const X=new z,$=new z;function Z(q,J,ge){X.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(ge.matrixWorld);const Ee=X.distanceTo($),Ae=J.projectionMatrix.elements,ke=ge.projectionMatrix.elements,He=Ae[14]/(Ae[10]-1),Ie=Ae[14]/(Ae[10]+1),ze=(Ae[9]+1)/Ae[5],H=(Ae[9]-1)/Ae[5],Mt=(Ae[8]-1)/Ae[0],Ue=(ke[8]+1)/ke[0],Ne=He*Mt,Pe=He*Ue,lt=Ee/(-Mt+Ue),Ge=lt*-Mt;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ge),q.translateZ(lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const R=He+lt,M=Ie+lt,G=Ne-Ge,se=Pe+(Ee-Ge),oe=ze*Ie/M*R,ne=H*Ie/M*R;q.projectionMatrix.makePerspective(G,se,oe,ne,R,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function I(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=T.near=x.near=q.near,S.far=T.far=x.far=q.far,(A!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,k=S.far);const J=q.parent,ge=S.cameras;I(S,J);for(let Ee=0;Ee<ge.length;Ee++)I(ge[Ee],J);ge.length===2?Z(S,x,T):S.projectionMatrix.copy(x.projectionMatrix),B(q,S,J)};function B(q,J,ge){ge===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let W=null;function Q(q,J){if(c=J.getViewerPose(u||a),_=J,c!==null){const ge=c.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Ee=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let Ae=0;Ae<ge.length;Ae++){const ke=ge[Ae];let He=null;if(m!==null)He=m.getViewport(ke);else{const ze=d.getViewSubImage(h,ke);He=ze.viewport,Ae===0&&(e.setRenderTargetTextures(f,ze.colorTexture,h.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(f))}let Ie=N[Ae];Ie===void 0&&(Ie=new Nn,Ie.layers.enable(Ae),Ie.viewport=new Wt,N[Ae]=Ie),Ie.matrix.fromArray(ke.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ke.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(He.x,He.y,He.width,He.height),Ae===0&&(S.matrix.copy(Ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(Ie)}}for(let ge=0;ge<v.length;ge++){const Ee=g[ge],Ae=v[ge];Ee!==null&&Ae!==void 0&&Ae.update(Ee,J,u||a)}W&&W(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const ee=new T0;ee.setAnimationLoop(Q),this.setAnimationLoop=function(q){W=q},this.dispose=function(){}}}function oC(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,x0(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,v,g,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),d(p,f)):f.isMeshPhongMaterial?(o(p,f),c(p,f)):f.isMeshStandardMaterial?(o(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(o(p,f),_(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),y(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&s(p,f)):f.isPointsMaterial?l(p,f,v,g):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===gn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===gn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function s(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=g*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aC(t,e,n,i){let r={},o={},a=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const E=g.program;i.uniformBlockBinding(v,E)}function u(v,g){let E=r[v.id];E===void 0&&(_(v),E=c(v),r[v.id]=E,v.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(v,P);const x=e.render.frame;o[v.id]!==x&&(h(v),o[v.id]=x)}function c(v){const g=d();v.__bindingPointIndex=g;const E=t.createBuffer(),P=v.__size,x=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function d(){for(let v=0;v<s;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],E=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let x=0,T=E.length;x<T;x++){const N=Array.isArray(E[x])?E[x]:[E[x]];for(let S=0,A=N.length;S<A;S++){const k=N[S];if(m(k,x,S,P)===!0){const K=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let U=0;for(let X=0;X<re.length;X++){const $=re[X],Z=y($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,K+U,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,K,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,E,P){const x=v.value,T=g+"_"+E;if(P[T]===void 0)return typeof x=="number"||typeof x=="boolean"?P[T]=x:P[T]=x.clone(),!0;{const N=P[T];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return P[T]=x,!0}else if(N.equals(x)===!1)return N.copy(x),!0}return!1}function _(v){const g=v.uniforms;let E=0;const P=16;for(let T=0,N=g.length;T<N;T++){const S=Array.isArray(g[T])?g[T]:[g[T]];for(let A=0,k=S.length;A<k;A++){const K=S[A],re=Array.isArray(K.value)?K.value:[K.value];for(let U=0,X=re.length;U<X;U++){const $=re[U],Z=y($),I=E%P;I!==0&&P-I<Z.boundary&&(E+=P-I),K.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=Z.storage}}}const x=E%P;return x>0&&(E+=P-x),v.__size=E,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const E=a.indexOf(g.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},o={}}return{bind:l,update:u,dispose:f}}class L0{constructor(e={}){const{canvas:n=tT(),context:i=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const g=this;let E=!1,P=0,x=0,T=null,N=-1,S=null;const A=new Wt,k=new Wt;let K=null;const re=new ot(0);let U=0,X=n.width,$=n.height,Z=1,I=null,B=null;const W=new Wt(0,0,X,$),Q=new Wt(0,0,X,$);let ee=!1;const q=new M0;let J=!1,ge=!1,Ee=null;const Ae=new Nt,ke=new Ke,He=new z,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return T===null?Z:1}let H=i;function Mt(w,O){for(let j=0;j<w.length;j++){const Y=w[j],V=n.getContext(Y,O);if(V!==null)return V}return null}try{const w={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uh}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",de,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),H=Mt(O,w),H===null)throw Mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ue,Ne,Pe,lt,Ge,R,M,G,se,oe,ne,Re,_e,Me,Fe,Oe,ae,Qe,b,ie,he,le,be,Xe;function tt(){Ue=new gA(H),Ne=new uA(H,Ue,e),Ue.init(Ne),le=new tC(H,Ue,Ne),Pe=new JR(H,Ue,Ne),lt=new yA(H),Ge=new kR,R=new eC(H,Ue,Pe,Ge,Ne,le,lt),M=new fA(g),G=new mA(g),se=new AT(H,Ne),be=new sA(H,Ue,se,Ne),oe=new vA(H,se,lt,be),ne=new MA(H,oe,se,lt),b=new EA(H,Ne,R),Oe=new cA(Ge),Re=new zR(g,M,G,Ue,Ne,be,Oe),_e=new oC(g,Ge),Me=new HR,Fe=new YR(Ue,Ne),Qe=new aA(g,M,G,Pe,ne,h,l),ae=new QR(g,ne,Ne),Xe=new aC(H,lt,Ne,Pe),ie=new lA(H,Ue,lt,Ne),he=new _A(H,Ue,lt,Ne),lt.programs=Re.programs,g.capabilities=Ne,g.extensions=Ue,g.properties=Ge,g.renderLists=Me,g.shadowMap=ae,g.state=Pe,g.info=lt}tt();const je=new rC(g,H);this.xr=je,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(X,$,!1))},this.getSize=function(w){return w.set(X,$)},this.setSize=function(w,O,j=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,$=O,n.width=Math.floor(w*Z),n.height=Math.floor(O*Z),j===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*Z,$*Z).floor()},this.setDrawingBufferSize=function(w,O,j){X=w,$=O,Z=j,n.width=Math.floor(w*j),n.height=Math.floor(O*j),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,O,j,Y){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,O,j,Y),Pe.viewport(A.copy(W).multiplyScalar(Z).floor())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,O,j,Y){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,O,j,Y),Pe.scissor(k.copy(Q).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){Pe.setScissorTest(ee=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(w=!0,O=!0,j=!0){let Y=0;if(w){let V=!1;if(T!==null){const Se=T.texture.format;V=Se===s0||Se===a0||Se===o0}if(V){const Se=T.texture.type,me=Se===lr||Se===$i||Se===ch||Se===Fr||Se===i0||Se===r0,xe=Qe.getClearColor(),De=Qe.getClearAlpha(),Ve=xe.r,We=xe.g,qe=xe.b;me?(m[0]=Ve,m[1]=We,m[2]=qe,m[3]=De,H.clearBufferuiv(H.COLOR,0,m)):(_[0]=Ve,_[1]=We,_[2]=qe,_[3]=De,H.clearBufferiv(H.COLOR,0,_))}else Y|=H.COLOR_BUFFER_BIT}O&&(Y|=H.DEPTH_BUFFER_BIT),j&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",de,!1),Me.dispose(),Fe.dispose(),Ge.dispose(),M.dispose(),G.dispose(),ne.dispose(),be.dispose(),Xe.dispose(),Re.dispose(),je.dispose(),je.removeEventListener("sessionstart",Ce),je.removeEventListener("sessionend",ye),Ee&&(Ee.dispose(),Ee=null),Te.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=lt.autoReset,O=ae.enabled,j=ae.autoUpdate,Y=ae.needsUpdate,V=ae.type;tt(),lt.autoReset=w,ae.enabled=O,ae.autoUpdate=j,ae.needsUpdate=Y,ae.type=V}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function C(w){const O=w.target;O.removeEventListener("dispose",C),D(O)}function D(w){F(w),Ge.remove(w)}function F(w){const O=Ge.get(w).programs;O!==void 0&&(O.forEach(function(j){Re.releaseProgram(j)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,j,Y,V,Se){O===null&&(O=Ie);const me=V.isMesh&&V.matrixWorld.determinant()<0,xe=fa(w,O,j,Y,V);Pe.setMaterial(Y,me);let De=j.index,Ve=1;if(Y.wireframe===!0){if(De=oe.getWireframeAttribute(j),De===void 0)return;Ve=2}const We=j.drawRange,qe=j.attributes.position;let At=We.start*Ve,vn=(We.start+We.count)*Ve;Se!==null&&(At=Math.max(At,Se.start*Ve),vn=Math.min(vn,(Se.start+Se.count)*Ve)),De!==null?(At=Math.max(At,0),vn=Math.min(vn,De.count)):qe!=null&&(At=Math.max(At,0),vn=Math.min(vn,qe.count));const Ot=vn-At;if(Ot<0||Ot===1/0)return;be.setup(V,Y,xe,j,De);let ui,mt=ie;if(De!==null&&(ui=se.get(De),mt=he,mt.setIndex(ui)),V.isMesh)Y.wireframe===!0?(Pe.setLineWidth(Y.wireframeLinewidth*ze()),mt.setMode(H.LINES)):mt.setMode(H.TRIANGLES);else if(V.isLine){let Je=Y.linewidth;Je===void 0&&(Je=1),Pe.setLineWidth(Je*ze()),V.isLineSegments?mt.setMode(H.LINES):V.isLineLoop?mt.setMode(H.LINE_LOOP):mt.setMode(H.LINE_STRIP)}else V.isPoints?mt.setMode(H.POINTS):V.isSprite&&mt.setMode(H.TRIANGLES);if(V.isBatchedMesh)mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)mt.renderInstances(At,Ot,V.count);else if(j.isInstancedBufferGeometry){const Je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ou=Math.min(j.instanceCount,Je);mt.renderInstances(At,Ot,Ou)}else mt.render(At,Ot)};function te(w,O,j){w.transparent===!0&&w.side===_i&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,Ht(w,O,j),w.side=dr,w.needsUpdate=!0,Ht(w,O,j),w.side=_i):Ht(w,O,j)}this.compile=function(w,O,j=null){j===null&&(j=w),p=Fe.get(j),p.init(),v.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==j&&w.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(g._useLegacyLights);const Y=new Set;return w.traverse(function(V){const Se=V.material;if(Se)if(Array.isArray(Se))for(let me=0;me<Se.length;me++){const xe=Se[me];te(xe,j,V),Y.add(xe)}else te(Se,j,V),Y.add(Se)}),v.pop(),p=null,Y},this.compileAsync=function(w,O,j=null){const Y=this.compile(w,O,j);return new Promise(V=>{function Se(){if(Y.forEach(function(me){Ge.get(me).currentProgram.isReady()&&Y.delete(me)}),Y.size===0){V(w);return}setTimeout(Se,10)}Ue.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ce=null;function Le(w){ce&&ce(w)}function Ce(){Te.stop()}function ye(){Te.start()}const Te=new T0;Te.setAnimationLoop(Le),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(w){ce=w,je.setAnimationLoop(w),w===null?Te.stop():Te.start()},je.addEventListener("sessionstart",Ce),je.addEventListener("sessionend",ye),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(O),O=je.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,O,T),p=Fe.get(w,v.length),p.init(),v.push(p),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Ae),ge=this.localClippingEnabled,J=Oe.init(this.clippingPlanes,ge),y=Me.get(w,f.length),y.init(),f.push(y),Be(w,O,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(I,B),this.info.render.frame++,J===!0&&Oe.beginShadows();const j=p.state.shadowsArray;if(ae.render(j,w,O),J===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(y,w),p.setupLights(g._useLegacyLights),O.isArrayCamera){const Y=O.cameras;for(let V=0,Se=Y.length;V<Se;V++){const me=Y[V];Tt(y,w,me,me.viewport)}}else Tt(y,w,O);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(g,w,O),be.resetDefaultState(),N=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Be(w,O,j,Y){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){Y&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const me=ne.update(w),xe=w.material;xe.visible&&y.push(w,me,xe,j,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const me=ne.update(w),xe=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),He.copy(me.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(xe)){const De=me.groups;for(let Ve=0,We=De.length;Ve<We;Ve++){const qe=De[Ve],At=xe[qe.materialIndex];At&&At.visible&&y.push(w,me,At,j,He.z,qe)}}else xe.visible&&y.push(w,me,xe,j,He.z,null)}}const Se=w.children;for(let me=0,xe=Se.length;me<xe;me++)Be(Se[me],O,j,Y)}function Tt(w,O,j,Y){const V=w.opaque,Se=w.transmissive,me=w.transparent;p.setupLightsView(j),J===!0&&Oe.setGlobalState(g.clippingPlanes,j),Se.length>0&&Ye(V,Se,O,j),Y&&Pe.viewport(A.copy(Y)),V.length>0&&rt(V,O,j),Se.length>0&&rt(Se,O,j),me.length>0&&rt(me,O,j),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ye(w,O,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Se=Ne.isWebGL2;Ee===null&&(Ee=new jr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?gs:lr,minFilter:ms,samples:Se?4:0})),g.getDrawingBufferSize(ke),Se?Ee.setSize(ke.x,ke.y):Ee.setSize(du(ke.x),du(ke.y));const me=g.getRenderTarget();g.setRenderTarget(Ee),g.getClearColor(re),U=g.getClearAlpha(),U<1&&g.setClearColor(16777215,.5),g.clear();const xe=g.toneMapping;g.toneMapping=sr,rt(w,j,Y),R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee);let De=!1;for(let Ve=0,We=O.length;Ve<We;Ve++){const qe=O[Ve],At=qe.object,vn=qe.geometry,Ot=qe.material,ui=qe.group;if(Ot.side===_i&&At.layers.test(Y.layers)){const mt=Ot.side;Ot.side=gn,Ot.needsUpdate=!0,Pt(At,j,Y,vn,Ot,ui),Ot.side=mt,Ot.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee)),g.setRenderTarget(me),g.setClearColor(re,U),g.toneMapping=xe}function rt(w,O,j){const Y=O.isScene===!0?O.overrideMaterial:null;for(let V=0,Se=w.length;V<Se;V++){const me=w[V],xe=me.object,De=me.geometry,Ve=Y===null?me.material:Y,We=me.group;xe.layers.test(j.layers)&&Pt(xe,O,j,De,Ve,We)}}function Pt(w,O,j,Y,V,Se){w.onBeforeRender(g,O,j,Y,V,Se),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(g,O,j,Y,w,Se),V.transparent===!0&&V.side===_i&&V.forceSinglePass===!1?(V.side=gn,V.needsUpdate=!0,g.renderBufferDirect(j,O,Y,V,w,Se),V.side=dr,V.needsUpdate=!0,g.renderBufferDirect(j,O,Y,V,w,Se),V.side=_i):g.renderBufferDirect(j,O,Y,V,w,Se),w.onAfterRender(g,O,j,Y,V,Se)}function Ht(w,O,j){O.isScene!==!0&&(O=Ie);const Y=Ge.get(w),V=p.state.lights,Se=p.state.shadowsArray,me=V.state.version,xe=Re.getParameters(w,V.state,Se,O,j),De=Re.getProgramCacheKey(xe);let Ve=Y.programs;Y.environment=w.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(w.isMeshStandardMaterial?G:M).get(w.envMap||Y.environment),Ve===void 0&&(w.addEventListener("dispose",C),Ve=new Map,Y.programs=Ve);let We=Ve.get(De);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===me)return li(w,xe),We}else xe.uniforms=Re.getUniforms(w),w.onBuild(j,xe,g),w.onBeforeCompile(xe,g),We=Re.acquireProgram(xe,De),Ve.set(De,We),Y.uniforms=xe.uniforms;const qe=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=Oe.uniform),li(w,xe),Y.needsLights=ti(w),Y.lightsStateVersion=me,Y.needsLights&&(qe.ambientLightColor.value=V.state.ambient,qe.lightProbe.value=V.state.probe,qe.directionalLights.value=V.state.directional,qe.directionalLightShadows.value=V.state.directionalShadow,qe.spotLights.value=V.state.spot,qe.spotLightShadows.value=V.state.spotShadow,qe.rectAreaLights.value=V.state.rectArea,qe.ltc_1.value=V.state.rectAreaLTC1,qe.ltc_2.value=V.state.rectAreaLTC2,qe.pointLights.value=V.state.point,qe.pointLightShadows.value=V.state.pointShadow,qe.hemisphereLights.value=V.state.hemi,qe.directionalShadowMap.value=V.state.directionalShadowMap,qe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,qe.spotShadowMap.value=V.state.spotShadowMap,qe.spotLightMatrix.value=V.state.spotLightMatrix,qe.spotLightMap.value=V.state.spotLightMap,qe.pointShadowMap.value=V.state.pointShadowMap,qe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=We,Y.uniformsList=null,We}function wt(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Dl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function li(w,O){const j=Ge.get(w);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function fa(w,O,j,Y,V){O.isScene!==!0&&(O=Ie),R.resetTextureUnits();const Se=O.fog,me=Y.isMeshStandardMaterial?O.environment:null,xe=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Pi,De=(Y.isMeshStandardMaterial?G:M).get(Y.envMap||me),Ve=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,We=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qe=!!j.morphAttributes.position,At=!!j.morphAttributes.normal,vn=!!j.morphAttributes.color;let Ot=sr;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ot=g.toneMapping);const ui=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mt=ui!==void 0?ui.length:0,Je=Ge.get(Y),Ou=p.state.lights;if(J===!0&&(ge===!0||w!==S)){const Cn=w===S&&Y.id===N;Oe.setState(Y,w,Cn)}let yt=!1;Y.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ou.state.version||Je.outputColorSpace!==xe||V.isBatchedMesh&&Je.batching===!1||!V.isBatchedMesh&&Je.batching===!0||V.isInstancedMesh&&Je.instancing===!1||!V.isInstancedMesh&&Je.instancing===!0||V.isSkinnedMesh&&Je.skinning===!1||!V.isSkinnedMesh&&Je.skinning===!0||V.isInstancedMesh&&Je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Je.instancingColor===!1&&V.instanceColor!==null||Je.envMap!==De||Y.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Oe.numPlanes||Je.numIntersection!==Oe.numIntersection)||Je.vertexAlphas!==Ve||Je.vertexTangents!==We||Je.morphTargets!==qe||Je.morphNormals!==At||Je.morphColors!==vn||Je.toneMapping!==Ot||Ne.isWebGL2===!0&&Je.morphTargetsCount!==mt)&&(yt=!0):(yt=!0,Je.__version=Y.version);let vr=Je.currentProgram;yt===!0&&(vr=Ht(Y,O,V));let mh=!1,da=!1,zu=!1;const Yt=vr.getUniforms(),_r=Je.uniforms;if(Pe.useProgram(vr.program)&&(mh=!0,da=!0,zu=!0),Y.id!==N&&(N=Y.id,da=!0),mh||S!==w){Yt.setValue(H,"projectionMatrix",w.projectionMatrix),Yt.setValue(H,"viewMatrix",w.matrixWorldInverse);const Cn=Yt.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,He.setFromMatrixPosition(w.matrixWorld)),Ne.logarithmicDepthBuffer&&Yt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Yt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,da=!0,zu=!0)}if(V.isSkinnedMesh){Yt.setOptional(H,V,"bindMatrix"),Yt.setOptional(H,V,"bindMatrixInverse");const Cn=V.skeleton;Cn&&(Ne.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Yt.setValue(H,"boneTexture",Cn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Yt.setOptional(H,V,"batchingTexture"),Yt.setValue(H,"batchingTexture",V._matricesTexture,R));const ku=j.morphAttributes;if((ku.position!==void 0||ku.normal!==void 0||ku.color!==void 0&&Ne.isWebGL2===!0)&&b.update(V,j,vr),(da||Je.receiveShadow!==V.receiveShadow)&&(Je.receiveShadow=V.receiveShadow,Yt.setValue(H,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(_r.envMap.value=De,_r.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),da&&(Yt.setValue(H,"toneMappingExposure",g.toneMappingExposure),Je.needsLights&&Di(_r,zu),Se&&Y.fog===!0&&_e.refreshFogUniforms(_r,Se),_e.refreshMaterialUniforms(_r,Y,Z,$,Ee),Dl.upload(H,wt(Je),_r,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Dl.upload(H,wt(Je),_r,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Yt.setValue(H,"center",V.center),Yt.setValue(H,"modelViewMatrix",V.modelViewMatrix),Yt.setValue(H,"normalMatrix",V.normalMatrix),Yt.setValue(H,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Cn=Y.uniformsGroups;for(let Bu=0,I0=Cn.length;Bu<I0;Bu++)if(Ne.isWebGL2){const gh=Cn[Bu];Xe.update(gh,vr),Xe.bind(gh,vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vr}function Di(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function ti(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,O,j){Ge.get(w.texture).__webglTexture=O,Ge.get(w.depthTexture).__webglTexture=j;const Y=Ge.get(w);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const j=Ge.get(w);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,j=0){T=w,P=O,x=j;let Y=!0,V=null,Se=!1,me=!1;if(w){const De=Ge.get(w);De.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):De.__webglFramebuffer===void 0?R.setupRenderTarget(w):De.__hasExternalTextures&&R.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);const We=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[O])?V=We[O][j]:V=We[O],Se=!0):Ne.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?V=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[j]:V=We,A.copy(w.viewport),k.copy(w.scissor),K=w.scissorTest}else A.copy(W).multiplyScalar(Z).floor(),k.copy(Q).multiplyScalar(Z).floor(),K=ee;if(Pe.bindFramebuffer(H.FRAMEBUFFER,V)&&Ne.drawBuffers&&Y&&Pe.drawBuffers(w,V),Pe.viewport(A),Pe.scissor(k),Pe.setScissorTest(K),Se){const De=Ge.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,j)}else if(me){const De=Ge.get(w.texture),Ve=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.__webglTexture,j||0,Ve)}N=-1},this.readRenderTargetPixels=function(w,O,j,Y,V,Se,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Pe.bindFramebuffer(H.FRAMEBUFFER,xe);try{const De=w.texture,Ve=De.format,We=De.type;if(Ve!==Kn&&le.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===gs&&(Ue.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(We!==lr&&le.convert(We)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===Ki&&(Ne.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Y&&j>=0&&j<=w.height-V&&H.readPixels(O,j,Y,V,le.convert(Ve),le.convert(We),Se)}finally{const De=T!==null?Ge.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(H.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,O,j=0){const Y=Math.pow(2,-j),V=Math.floor(O.image.width*Y),Se=Math.floor(O.image.height*Y);R.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,w.x,w.y,V,Se),Pe.unbindTexture()},this.copyTextureToTexture=function(w,O,j,Y=0){const V=O.image.width,Se=O.image.height,me=le.convert(j.format),xe=le.convert(j.type);R.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,V,Se,me,xe,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,me,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,me,xe,O.image),Y===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,O,j,Y,V=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=w.max.x-w.min.x+1,me=w.max.y-w.min.y+1,xe=w.max.z-w.min.z+1,De=le.convert(Y.format),Ve=le.convert(Y.type);let We;if(Y.isData3DTexture)R.setTexture3D(Y,0),We=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),We=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const qe=H.getParameter(H.UNPACK_ROW_LENGTH),At=H.getParameter(H.UNPACK_IMAGE_HEIGHT),vn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ot=H.getParameter(H.UNPACK_SKIP_ROWS),ui=H.getParameter(H.UNPACK_SKIP_IMAGES),mt=j.isCompressedTexture?j.mipmaps[V]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,w.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,w.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(We,V,O.x,O.y,O.z,Se,me,xe,De,Ve,mt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(We,V,O.x,O.y,O.z,Se,me,xe,De,mt.data)):H.texSubImage3D(We,V,O.x,O.y,O.z,Se,me,xe,De,Ve,mt),H.pixelStorei(H.UNPACK_ROW_LENGTH,qe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At),H.pixelStorei(H.UNPACK_SKIP_PIXELS,vn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ot),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ui),V===0&&Y.generateMipmaps&&H.generateMipmap(We),Pe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){P=0,x=0,T=null,Pe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===fh?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Uu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?zr:u0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zr?Vt:Pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sC extends L0{}sC.prototype.isWebGL1Renderer=!0;class lC extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class D0 extends ua{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ug=new z,cg=new z,fg=new Nt,Yc=new Nu,pl=new Rs;class uC extends ln{constructor(e=new ei,n=new D0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)ug.fromBufferAttribute(n,r-1),cg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ug.distanceTo(cg);e.setAttribute("lineDistance",new Ti(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=o,e.ray.intersectsSphere(pl)===!1)return;fg.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(fg);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=new z,c=new z,d=new z,h=new z,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const f=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let g=f,E=v-1;g<E;g+=m){const P=_.getX(g),x=_.getX(g+1);if(u.fromBufferAttribute(p,P),c.fromBufferAttribute(p,x),Yc.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||n.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let g=f,E=v-1;g<E;g+=m){if(u.fromBufferAttribute(p,g),c.fromBufferAttribute(p,g+1),Yc.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(h);x<e.near||x>e.far||n.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}const dg=new z,hg=new z;class cC extends uC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)dg.fromBufferAttribute(n,r),hg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+dg.distanceTo(hg);e.setAttribute("lineDistance",new Ti(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U0 extends ua{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pg=new Nt,od=new Nu,ml=new Rs,gl=new z;class fC extends ln{constructor(e=new ei,n=new U0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=o,e.ray.intersectsSphere(ml)===!1)return;pg.copy(r).invert(),od.copy(e.ray).applyMatrix4(pg);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=h,y=m;_<y;_++){const p=u.getX(_);gl.fromBufferAttribute(d,p),mg(gl,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=h,y=m;_<y;_++)gl.fromBufferAttribute(d,_),mg(gl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function mg(t,e,n,i,r,o,a){const s=od.distanceSqToPoint(t);if(s<n){const l=new z;od.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class gg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Jt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);const vg={type:"change"},qc={type:"start"},_g={type:"end"},vl=new Nu,yg=new Gi,dC=Math.cos(70*eT.DEG2RAD);class hC extends Qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:eo.ROTATE,MIDDLE:eo.DOLLY,RIGHT:eo.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",ne),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(vg),i.update(),o=r.NONE},this.update=function(){const b=new z,ie=new Yr().setFromUnitVectors(e.up,new z(0,1,0)),he=ie.clone().invert(),le=new z,be=new Yr,Xe=new z,tt=2*Math.PI;return function(pe=null){const L=i.object.position;b.copy(L).sub(i.target),b.applyQuaternion(ie),s.setFromVector3(b),i.autoRotate&&o===r.NONE&&k(S(pe)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let de=i.minAzimuthAngle,C=i.maxAzimuthAngle;isFinite(de)&&isFinite(C)&&(de<-Math.PI?de+=tt:de>Math.PI&&(de-=tt),C<-Math.PI?C+=tt:C>Math.PI&&(C-=tt),de<=C?s.theta=Math.max(de,Math.min(C,s.theta)):s.theta=s.theta>(de+C)/2?Math.max(de,s.theta):Math.min(C,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&x||i.object.isOrthographicCamera?s.radius=B(s.radius):s.radius=B(s.radius*u),b.setFromSpherical(s),b.applyQuaternion(he),L.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let D=!1;if(i.zoomToCursor&&x){let F=null;if(i.object.isPerspectiveCamera){const te=b.length();F=B(te*u);const ce=te-F;i.object.position.addScaledVector(E,ce),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const te=new z(P.x,P.y,0);te.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),D=!0;const ce=new z(P.x,P.y,0);ce.unproject(i.object),i.object.position.sub(ce).add(te),i.object.updateMatrixWorld(),F=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;F!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(F).add(i.object.position):(vl.origin.copy(i.object.position),vl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(vl.direction))<dC?e.lookAt(i.target):(yg.setFromNormalAndCoplanarPoint(i.object.up,i.target),vl.intersectPlane(yg,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),D=!0);return u=1,x=!1,D||le.distanceToSquared(i.object.position)>a||8*(1-be.dot(i.object.quaternion))>a||Xe.distanceToSquared(i.target)>0?(i.dispatchEvent(vg),le.copy(i.object.position),be.copy(i.object.quaternion),Xe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Me),i.domElement.removeEventListener("pointerdown",Ge),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",M),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new gg,l=new gg;let u=1;const c=new z,d=new Ke,h=new Ke,m=new Ke,_=new Ke,y=new Ke,p=new Ke,f=new Ke,v=new Ke,g=new Ke,E=new z,P=new Ke;let x=!1;const T=[],N={};function S(b){return b!==null?2*Math.PI/60*i.autoRotateSpeed*b:2*Math.PI/60/60*i.autoRotateSpeed}function A(b){const ie=Math.abs(b)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ie)}function k(b){l.theta-=b}function K(b){l.phi-=b}const re=function(){const b=new z;return function(he,le){b.setFromMatrixColumn(le,0),b.multiplyScalar(-he),c.add(b)}}(),U=function(){const b=new z;return function(he,le){i.screenSpacePanning===!0?b.setFromMatrixColumn(le,1):(b.setFromMatrixColumn(le,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(he),c.add(b)}}(),X=function(){const b=new z;return function(he,le){const be=i.domElement;if(i.object.isPerspectiveCamera){const Xe=i.object.position;b.copy(Xe).sub(i.target);let tt=b.length();tt*=Math.tan(i.object.fov/2*Math.PI/180),re(2*he*tt/be.clientHeight,i.object.matrix),U(2*le*tt/be.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(re(he*(i.object.right-i.object.left)/i.object.zoom/be.clientWidth,i.object.matrix),U(le*(i.object.top-i.object.bottom)/i.object.zoom/be.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(b,ie){if(!i.zoomToCursor)return;x=!0;const he=i.domElement.getBoundingClientRect(),le=b-he.left,be=ie-he.top,Xe=he.width,tt=he.height;P.x=le/Xe*2-1,P.y=-(be/tt)*2+1,E.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function B(b){return Math.max(i.minDistance,Math.min(i.maxDistance,b))}function W(b){d.set(b.clientX,b.clientY)}function Q(b){I(b.clientX,b.clientX),f.set(b.clientX,b.clientY)}function ee(b){_.set(b.clientX,b.clientY)}function q(b){h.set(b.clientX,b.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;k(2*Math.PI*m.x/ie.clientHeight),K(2*Math.PI*m.y/ie.clientHeight),d.copy(h),i.update()}function J(b){v.set(b.clientX,b.clientY),g.subVectors(v,f),g.y>0?$(A(g.y)):g.y<0&&Z(A(g.y)),f.copy(v),i.update()}function ge(b){y.set(b.clientX,b.clientY),p.subVectors(y,_).multiplyScalar(i.panSpeed),X(p.x,p.y),_.copy(y),i.update()}function Ee(b){I(b.clientX,b.clientY),b.deltaY<0?Z(A(b.deltaY)):b.deltaY>0&&$(A(b.deltaY)),i.update()}function Ae(b){let ie=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),ie=!0;break}ie&&(b.preventDefault(),i.update())}function ke(b){if(T.length===1)d.set(b.pageX,b.pageY);else{const ie=Qe(b),he=.5*(b.pageX+ie.x),le=.5*(b.pageY+ie.y);d.set(he,le)}}function He(b){if(T.length===1)_.set(b.pageX,b.pageY);else{const ie=Qe(b),he=.5*(b.pageX+ie.x),le=.5*(b.pageY+ie.y);_.set(he,le)}}function Ie(b){const ie=Qe(b),he=b.pageX-ie.x,le=b.pageY-ie.y,be=Math.sqrt(he*he+le*le);f.set(0,be)}function ze(b){i.enableZoom&&Ie(b),i.enablePan&&He(b)}function H(b){i.enableZoom&&Ie(b),i.enableRotate&&ke(b)}function Mt(b){if(T.length==1)h.set(b.pageX,b.pageY);else{const he=Qe(b),le=.5*(b.pageX+he.x),be=.5*(b.pageY+he.y);h.set(le,be)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;k(2*Math.PI*m.x/ie.clientHeight),K(2*Math.PI*m.y/ie.clientHeight),d.copy(h)}function Ue(b){if(T.length===1)y.set(b.pageX,b.pageY);else{const ie=Qe(b),he=.5*(b.pageX+ie.x),le=.5*(b.pageY+ie.y);y.set(he,le)}p.subVectors(y,_).multiplyScalar(i.panSpeed),X(p.x,p.y),_.copy(y)}function Ne(b){const ie=Qe(b),he=b.pageX-ie.x,le=b.pageY-ie.y,be=Math.sqrt(he*he+le*le);v.set(0,be),g.set(0,Math.pow(v.y/f.y,i.zoomSpeed)),$(g.y),f.copy(v);const Xe=(b.pageX+ie.x)*.5,tt=(b.pageY+ie.y)*.5;I(Xe,tt)}function Pe(b){i.enableZoom&&Ne(b),i.enablePan&&Ue(b)}function lt(b){i.enableZoom&&Ne(b),i.enableRotate&&Mt(b)}function Ge(b){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",M)),Fe(b),b.pointerType==="touch"?Re(b):G(b))}function R(b){i.enabled!==!1&&(b.pointerType==="touch"?_e(b):se(b))}function M(b){Oe(b),T.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",M)),i.dispatchEvent(_g),o=r.NONE}function G(b){let ie;switch(b.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case eo.DOLLY:if(i.enableZoom===!1)return;Q(b),o=r.DOLLY;break;case eo.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;ee(b),o=r.PAN}else{if(i.enableRotate===!1)return;W(b),o=r.ROTATE}break;case eo.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;W(b),o=r.ROTATE}else{if(i.enablePan===!1)return;ee(b),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(qc)}function se(b){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;q(b);break;case r.DOLLY:if(i.enableZoom===!1)return;J(b);break;case r.PAN:if(i.enablePan===!1)return;ge(b);break}}function oe(b){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(b.preventDefault(),i.dispatchEvent(qc),Ee(b),i.dispatchEvent(_g))}function ne(b){i.enabled===!1||i.enablePan===!1||Ae(b)}function Re(b){switch(ae(b),T.length){case 1:switch(i.touches.ONE){case to.ROTATE:if(i.enableRotate===!1)return;ke(b),o=r.TOUCH_ROTATE;break;case to.PAN:if(i.enablePan===!1)return;He(b),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case to.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(b),o=r.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;H(b),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(qc)}function _e(b){switch(ae(b),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Mt(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ue(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(b),i.update();break;default:o=r.NONE}}function Me(b){i.enabled!==!1&&b.preventDefault()}function Fe(b){T.push(b.pointerId)}function Oe(b){delete N[b.pointerId];for(let ie=0;ie<T.length;ie++)if(T[ie]==b.pointerId){T.splice(ie,1);return}}function ae(b){let ie=N[b.pointerId];ie===void 0&&(ie=new Ke,N[b.pointerId]=ie),ie.set(b.pageX,b.pageY)}function Qe(b){const ie=b.pointerId===T[0]?T[1]:T[0];return N[ie]}i.domElement.addEventListener("contextmenu",Me),i.domElement.addEventListener("pointerdown",Ge),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",oe,{passive:!1}),this.update()}}let Ia,$c;const Ul=[];let jo,ad,Oo,Vi,Wi,_l,sd,ut,$a;const yl=1e3;let Nl=100;const Ar=800,yo=Ar/2,xg={showDots:!0,showLines:!0,minDistance:150,limitConnections:!1,maxConnections:5,particleCount:10};function pC(){$c=document.getElementById("three-js"),jo=new Nn(45,window.innerWidth/window.innerHeight,1,4e3),jo.position.z=800;const t=new hC(jo,$c);t.minDistance=800,t.maxDistance=800,ad=new lC,Ia=new Na,ad.add(Ia);const e=yl*yl;Vi=new Float32Array(e*3),Wi=new Float32Array(e*3);const n=new U0({color:16777215,size:3,blending:au,transparent:!0,sizeAttenuation:!1});_l=new ei,ut=new Float32Array(yl*3);for(let o=0;o<yl;o++){const a=Math.random()*Ar-Ar/2,s=Math.random()*Ar-Ar/2,l=Math.random()*Ar-Ar/2;ut[o*3]=a,ut[o*3+1]=s,ut[o*3+2]=l,Ul.push({velocity:new z(-1+Math.random()*2,-1+Math.random()*2,-1+Math.random()*2),numConnections:0})}_l.setDrawRange(0,Nl),_l.setAttribute("position",new Tn(ut,3).setUsage(Mc)),sd=new fC(_l,n),Ia.add(sd);const i=new ei;i.setAttribute("position",new Tn(Vi,3).setUsage(Mc)),i.setAttribute("color",new Tn(Wi,3).setUsage(Mc)),i.computeBoundingSphere(),i.setDrawRange(0,0);const r=new D0({vertexColors:!0,blending:au,transparent:!0});$a=new cC(i,r),Ia.add($a),Oo=new L0({alpha:!0}),Oo.setPixelRatio(window.devicePixelRatio),Oo.setSize(window.innerWidth,window.innerHeight),$c.appendChild(Oo.domElement),window.addEventListener("resize",mC)}function mC(){jo.aspect=window.innerWidth/window.innerHeight,jo.updateProjectionMatrix(),Oo.setSize(window.innerWidth,window.innerHeight)}function N0(){let t=0,e=0,n=0;for(let i=0;i<Nl;i++)Ul[i].numConnections=0;for(let i=0;i<Nl;i++){const r=Ul[i];ut[i*3]+=r.velocity.x,ut[i*3+1]+=r.velocity.y,ut[i*3+2]+=r.velocity.z,(ut[i*3+1]<-yo||ut[i*3+1]>yo)&&(r.velocity.y=-r.velocity.y),(ut[i*3]<-yo||ut[i*3]>yo)&&(r.velocity.x=-r.velocity.x),(ut[i*3+2]<-yo||ut[i*3+2]>yo)&&(r.velocity.z=-r.velocity.z);for(let o=i+1;o<Nl;o++){const a=Ul[o],s=ut[i*3]-ut[o*3],l=ut[i*3+1]-ut[o*3+1],u=ut[i*3+2]-ut[o*3+2],c=Math.sqrt(s*s+l*l+u*u);if(c<xg.minDistance){r.numConnections++,a.numConnections++;const d=1-c/xg.minDistance;Vi[t++]=ut[i*3],Vi[t++]=ut[i*3+1],Vi[t++]=ut[i*3+2],Vi[t++]=ut[o*3],Vi[t++]=ut[o*3+1],Vi[t++]=ut[o*3+2],Wi[e++]=d,Wi[e++]=d,Wi[e++]=d,Wi[e++]=d,Wi[e++]=d,Wi[e++]=d,n++}}}$a.geometry.setDrawRange(0,n*2),$a.geometry.attributes.position.needsUpdate=!0,$a.geometry.attributes.color.needsUpdate=!0,sd.geometry.attributes.position.needsUpdate=!0,requestAnimationFrame(N0),gC()}function gC(){const t=Date.now()*.001;Ia.rotation.y=t*.1,Oo.render(ad,jo)}pC();N0();const vC=()=>an.jsx(CE,{router:kE});Kc.createRoot(document.getElementById("root")).render(an.jsx(Dg.StrictMode,{children:an.jsx(vC,{})}));
