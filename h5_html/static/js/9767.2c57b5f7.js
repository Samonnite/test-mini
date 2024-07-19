/*! For license information please see 9767.2c57b5f7.js.LICENSE.txt */
"use strict";(self.webpackChunkfunever_front=self.webpackChunkfunever_front||[]).push([[9767],{28429:(e,t,r)=>{var n;r.d(t,{$P:()=>d,C5:()=>U,Ix:()=>N,KC:()=>b,Rq:()=>c,Zp:()=>y,g:()=>g,jb:()=>u,ph:()=>k,sp:()=>s,sv:()=>D,wE:()=>B,x$:()=>E,zy:()=>v});var o=r(9950),a=r(1018);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const s=o.createContext(null);const c=o.createContext(null);const u=o.createContext(null);const l=o.createContext(null);const f=o.createContext({outlet:null,matches:[],isDataRoute:!1});const h=o.createContext(null);function d(e,t){let{relative:r}=void 0===t?{}:t;p()||(0,a.Oi)(!1);let{basename:n,navigator:i}=o.useContext(u),{hash:s,pathname:c,search:l}=E(e,{relative:r}),f=c;return"/"!==n&&(f="/"===c?n:(0,a.HS)([n,c])),i.createHref({pathname:f,search:l,hash:s})}function p(){return null!=o.useContext(l)}function v(){return p()||(0,a.Oi)(!1),o.useContext(l).location}function m(e){o.useContext(u).static||o.useLayoutEffect(e)}function y(){let{isDataRoute:e}=o.useContext(f);return e?function(){let{router:e}=j(R.UseNavigateStable),t=L(P.UseNavigateStable),r=o.useRef(!1);return m((()=>{r.current=!0})),o.useCallback((function(n,o){void 0===o&&(o={}),r.current&&("number"===typeof n?e.navigate(n):e.navigate(n,i({fromRouteId:t},o)))}),[e,t])}():function(){p()||(0,a.Oi)(!1);let e=o.useContext(s),{basename:t,future:r,navigator:n}=o.useContext(u),{matches:i}=o.useContext(f),{pathname:c}=v(),l=JSON.stringify((0,a.yD)(i,r.v7_relativeSplatPath)),h=o.useRef(!1);return m((()=>{h.current=!0})),o.useCallback((function(r,o){if(void 0===o&&(o={}),!h.current)return;if("number"===typeof r)return void n.go(r);let i=(0,a.Gh)(r,JSON.parse(l),c,"path"===o.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,a.HS)([t,i.pathname])),(o.replace?n.replace:n.push)(i,o.state,o)}),[t,n,l,c,e])}()}const _=o.createContext(null);function b(){return o.useContext(_)}function g(){let{matches:e}=o.useContext(f),t=e[e.length-1];return t?t.params:{}}function E(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=o.useContext(u),{matches:i}=o.useContext(f),{pathname:s}=v(),c=JSON.stringify((0,a.yD)(i,n.v7_relativeSplatPath));return o.useMemo((()=>(0,a.Gh)(e,JSON.parse(c),s,"path"===r)),[e,c,s,r])}function k(e,t,r,n){p()||(0,a.Oi)(!1);let{navigator:s}=o.useContext(u),{matches:c}=o.useContext(f),h=c[c.length-1],d=h?h.params:{},m=(h&&h.pathname,h?h.pathnameBase:"/");h&&h.route;let y,_=v();if(t){var b;let e="string"===typeof t?(0,a.Rr)(t):t;"/"===m||(null==(b=e.pathname)?void 0:b.startsWith(m))||(0,a.Oi)(!1),y=e}else y=_;let g=y.pathname||"/",E=g;if("/"!==m){let e=m.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let k=(0,a.ue)(e,{pathname:E});let x=O(k&&k.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:(0,a.HS)([m,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:(0,a.HS)([m,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,n);return t&&x?o.createElement(l.Provider,{value:{location:i({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:a.rc.Pop}},x):x}function x(){let e=function(){var e;let t=o.useContext(h),r=A(P.UseRouteError),n=L(P.UseRouteError);if(void 0!==t)return t;return null==(e=r.errors)?void 0:e[n]}(),t=(0,a.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:i},r):null,null)}const C=o.createElement(x,null);class w extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?o.createElement(f.Provider,{value:this.props.routeContext},o.createElement(h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S(e){let{routeContext:t,match:r,children:n}=e,a=o.useContext(s);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(f.Provider,{value:t},n)}function O(e,t,r,n){var i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){var s;if(null==(s=r)||!s.errors)return null;e=r.matches}let c=e,u=null==(i=r)?void 0:i.errors;if(null!=u){let e=c.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||(0,a.Oi)(!1),c=c.slice(0,Math.min(c.length,e+1))}let l=!1,f=-1;if(r&&n&&n.v7_partialHydration)for(let o=0;o<c.length;o++){let e=c[o];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(f=o),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){l=!0,c=f>=0?c.slice(0,f+1):[c[0]];break}}}return c.reduceRight(((e,n,a)=>{let i,s=!1,h=null,d=null;var p;r&&(i=u&&n.route.id?u[n.route.id]:void 0,h=n.route.errorElement||C,l&&(f<0&&0===a?(p="route-fallback",!1||$[p]||($[p]=!0),s=!0,d=null):f===a&&(s=!0,d=n.route.hydrateFallbackElement||null)));let v=t.concat(c.slice(0,a+1)),m=()=>{let t;return t=i?h:s?d:n.route.Component?o.createElement(n.route.Component,null):n.route.element?n.route.element:e,o.createElement(S,{match:n,routeContext:{outlet:e,matches:v,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===a)?o.createElement(w,{location:r.location,revalidation:r.revalidation,component:h,error:i,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()}),null)}var R=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(R||{}),P=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(P||{});function j(e){let t=o.useContext(s);return t||(0,a.Oi)(!1),t}function A(e){let t=o.useContext(c);return t||(0,a.Oi)(!1),t}function L(e){let t=function(){let e=o.useContext(f);return e||(0,a.Oi)(!1),e}(),r=t.matches[t.matches.length-1];return r.route.id||(0,a.Oi)(!1),r.route.id}const $={};(n||(n=r.t(o,2))).startTransition;function U(e){let{to:t,replace:r,state:n,relative:i}=e;p()||(0,a.Oi)(!1);let{future:s,static:c}=o.useContext(u),{matches:l}=o.useContext(f),{pathname:h}=v(),d=y(),m=(0,a.Gh)(t,(0,a.yD)(l,s.v7_relativeSplatPath),h,"path"===i),_=JSON.stringify(m);return o.useEffect((()=>d(JSON.parse(_),{replace:r,state:n,relative:i})),[d,_,i,r,n]),null}function D(e){return function(e){let t=o.useContext(f).outlet;return t?o.createElement(_.Provider,{value:e},t):t}(e.context)}function N(e){let{basename:t="/",children:r=null,location:n,navigationType:s=a.rc.Pop,navigator:c,static:f=!1,future:h}=e;p()&&(0,a.Oi)(!1);let d=t.replace(/^\/*/,"/"),v=o.useMemo((()=>({basename:d,navigator:c,static:f,future:i({v7_relativeSplatPath:!1},h)})),[d,h,c,f]);"string"===typeof n&&(n=(0,a.Rr)(n));let{pathname:m="/",search:y="",hash:_="",state:b=null,key:g="default"}=n,E=o.useMemo((()=>{let e=(0,a.pb)(m,d);return null==e?null:{location:{pathname:e,search:y,hash:_,state:b,key:g},navigationType:s}}),[d,m,y,_,b,g,s]);return null==E?null:o.createElement(u.Provider,{value:v},o.createElement(l.Provider,{children:r,value:E}))}new Promise((()=>{}));o.Component;function B(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:o.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:o.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:o.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}},32654:(e,t,r)=>{var n=r(9950),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},32049:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),d=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}function _(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=y.prototype;var g=b.prototype=new _;g.constructor=b,v(g,y.prototype),g.isPureReactComponent=!0;var E=Array.isArray,k=Object.prototype.hasOwnProperty,x={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:x.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function R(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===a?"."+R(c,0):a,E(i)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",E(e))for(var u=0;u<e.length;u++){var l=a+R(s=e[u],u);c+=P(s,t,o,l,i)}else if(l=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"===typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=P(s=s.value,t,o,l=a+R(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function j(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},$={transition:null},U={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:$,ReactCurrentOwner:x};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:j,forEach:function(e,t,r){j(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.act=D,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=v({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)k.call(t,u)&&!C.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,r){return L.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,r){return L.current.useReducer(e,t,r)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return L.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return L.current.useTransition()},t.version="18.3.1"},9950:(e,t,r)=>{e.exports=r(32049)},44414:(e,t,r)=>{e.exports=r(32654)},9936:e=>{var t=Object.prototype.hasOwnProperty,r="~";function n(){}function o(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function a(e,t,n,a,i){if("function"!==typeof n)throw new TypeError("The listener must be a function");var s=new o(n,a||e,i),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function i(e,t){0===--e._eventsCount?e._events=new n:delete e._events[t]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),s.prototype.eventNames=function(){var e,n,o=[];if(0===this._eventsCount)return o;for(n in e=this._events)t.call(e,n)&&o.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,a=n.length,i=new Array(a);o<a;o++)i[o]=n[o].fn;return i},s.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,o,a,i){var s=r?r+e:e;if(!this._events[s])return!1;var c,u,l=this._events[s],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,o),!0;case 5:return l.fn.call(l.context,t,n,o,a),!0;case 6:return l.fn.call(l.context,t,n,o,a,i),!0}for(u=1,c=new Array(f-1);u<f;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var h,d=l.length;for(u=0;u<d;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),f){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,o);break;default:if(!c)for(h=1,c=new Array(f-1);h<f;h++)c[h-1]=arguments[h];l[u].fn.apply(l[u].context,c)}}return!0},s.prototype.on=function(e,t,r){return a(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return a(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,n,o){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return i(this,a),this;var s=this._events[a];if(s.fn)s.fn!==t||o&&!s.once||n&&s.context!==n||i(this,a);else{for(var c=0,u=[],l=s.length;c<l;c++)(s[c].fn!==t||o&&!s[c].once||n&&s[c].context!==n)&&u.push(s[c]);u.length?this._events[a]=1===u.length?u[0]:u:i(this,a)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&i(this,t)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},25064:(e,t,r)=>{r.d(t,{vE:()=>u,kb:()=>s});var n=r(64467),o=r(93325),a=r(9936);var i=class extends a{constructor(e,t,r){super(),(0,n.A)(this,"socket",void 0),this.socket=new window.WebSocket(e,r),this.socket.onopen=()=>this.emit("open"),this.socket.onmessage=e=>this.emit("message",e.data),this.socket.onerror=e=>this.emit("error",e),this.socket.onclose=e=>{this.emit("close",e.code,e.reason)}}send(e,t,r){const n=r||t;try{this.socket.send(e),n()}catch(o){n(o)}}close(e,t){this.socket.close(e,t)}addEventListener(e,t,r){this.socket.addEventListener(e,t,r)}};function s(e,t){return new i(e,t)}var c=class{encode(e){return JSON.stringify(e)}decode(e){return JSON.parse(e)}},u=class extends a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ws://localhost:8080",{autoconnect:r=!0,reconnect:o=!0,reconnect_interval:a=1e3,max_reconnects:i=5,...s}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0;super(),(0,n.A)(this,"address",void 0),(0,n.A)(this,"rpc_id",void 0),(0,n.A)(this,"queue",void 0),(0,n.A)(this,"options",void 0),(0,n.A)(this,"autoconnect",void 0),(0,n.A)(this,"ready",void 0),(0,n.A)(this,"reconnect",void 0),(0,n.A)(this,"reconnect_timer_id",void 0),(0,n.A)(this,"reconnect_interval",void 0),(0,n.A)(this,"max_reconnects",void 0),(0,n.A)(this,"rest_options",void 0),(0,n.A)(this,"current_reconnects",void 0),(0,n.A)(this,"generate_request_id",void 0),(0,n.A)(this,"socket",void 0),(0,n.A)(this,"webSocketFactory",void 0),(0,n.A)(this,"dataPack",void 0),this.webSocketFactory=e,this.queue={},this.rpc_id=0,this.address=t,this.autoconnect=r,this.ready=!1,this.reconnect=o,this.reconnect_timer_id=void 0,this.reconnect_interval=a,this.max_reconnects=i,this.rest_options=s,this.current_reconnects=0,this.generate_request_id=u||(()=>++this.rpc_id),this.dataPack=l||new c,this.autoconnect&&this._connect(this.address,{autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects,...this.rest_options})}connect(){this.socket||this._connect(this.address,{autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects,...this.rest_options})}call(e,t,r,n){return n||"object"!==typeof r||(n=r,r=null),new Promise(((o,a)=>{if(!this.ready)return a(new Error("socket not ready"));const i=this.generate_request_id(e,t),s={jsonrpc:"2.0",method:e,params:t||void 0,id:i};this.socket.send(this.dataPack.encode(s),n,(e=>{if(e)return a(e);this.queue[i]={promise:[o,a]},r&&(this.queue[i].timeout=setTimeout((()=>{delete this.queue[i],a(new Error("reply timeout"))}),r))}))}))}async login(e){const t=await this.call("rpc.login",e);if(!t)throw new Error("authentication failed");return t}async listMethods(){return await this.call("__listMethods")}notify(e,t){return new Promise(((r,n)=>{if(!this.ready)return n(new Error("socket not ready"));const o={jsonrpc:"2.0",method:e,params:t};this.socket.send(this.dataPack.encode(o),(e=>{if(e)return n(e);r()}))}))}async subscribe(e){"string"===typeof e&&(e=[e]);const t=await this.call("rpc.on",e);if("string"===typeof e&&"ok"!==t[e])throw new Error("Failed subscribing to an event '"+e+"' with: "+t[e]);return t}async unsubscribe(e){"string"===typeof e&&(e=[e]);const t=await this.call("rpc.off",e);if("string"===typeof e&&"ok"!==t[e])throw new Error("Failed unsubscribing from an event with: "+t);return t}close(e,t){this.socket.close(e||1e3,t)}setAutoReconnect(e){this.reconnect=e}setReconnectInterval(e){this.reconnect_interval=e}setMaxReconnects(e){this.max_reconnects=e}_connect(e,t){clearTimeout(this.reconnect_timer_id),this.socket=this.webSocketFactory(e,t),this.socket.addEventListener("open",(()=>{this.ready=!0,this.emit("open"),this.current_reconnects=0})),this.socket.addEventListener("message",(e=>{let{data:t}=e;t instanceof ArrayBuffer&&(t=o.Buffer.from(t).toString());try{t=this.dataPack.decode(t)}catch(r){return}if(t.notification&&this.listeners(t.notification).length){if(!Object.keys(t.params).length)return this.emit(t.notification);const e=[t.notification];if(t.params.constructor===Object)e.push(t.params);else for(let r=0;r<t.params.length;r++)e.push(t.params[r]);return Promise.resolve().then((()=>{this.emit.apply(this,e)}))}if(!this.queue[t.id])return t.method?Promise.resolve().then((()=>{var e;this.emit(t.method,null===(e=t)||void 0===e?void 0:e.params)})):void 0;"error"in t==="result"in t&&this.queue[t.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),this.queue[t.id].timeout&&clearTimeout(this.queue[t.id].timeout),t.error?this.queue[t.id].promise[1](t.error):this.queue[t.id].promise[0](t.result),delete this.queue[t.id]})),this.socket.addEventListener("error",(e=>this.emit("error",e))),this.socket.addEventListener("close",(r=>{let{code:n,reason:o}=r;this.ready&&setTimeout((()=>this.emit("close",n,o)),0),this.ready=!1,this.socket=void 0,1e3!==n&&(this.current_reconnects++,this.reconnect&&(this.max_reconnects>this.current_reconnects||0===this.max_reconnects)&&(this.reconnect_timer_id=setTimeout((()=>this._connect(e,t)),this.reconnect_interval)))}))}}}}]);