/*! For license information please see 7343.2a321cf3.chunk.js.LICENSE.txt */
(self.webpackChunkfunever_front=self.webpackChunkfunever_front||[]).push([[7343],{44866:(e,t,r)=>{"use strict";var n,i=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,c=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,u=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let i of l(t))s.call(e,i)||i===r||o(e,i,{get:()=>t[i],enumerable:!(n=a(t,i))||n.enumerable});return e},f=(e,t,r)=>(r=null!=e?i(c(e)):{},u(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{addKeypairToEnvFile:()=>S,airdropIfRequired:()=>k,confirmTransaction:()=>O,getCustomErrorMessage:()=>E,getExplorerLink:()=>A,getKeypairFromEnvironment:()=>x,getKeypairFromFile:()=>T,getLogs:()=>P,getSimulationComputeUnits:()=>z,initializeKeypair:()=>C,keypairToSecretKeyJSON:()=>w,makeKeypairs:()=>F}),e.exports=(n=d,u(o({},"__esModule",{value:!0}),n));var h=r(58449),m=f(r(70689)),p=f(r(3133)),g=r(79980),b=1*h.LAMPORTS_PER_SOL,v=.5*h.LAMPORTS_PER_SOL,y="PRIVATE_KEY",_=e=>{const t=e.value.err;if(t){if("object"===typeof t){const e=Object.keys(t);if(1===e.length){if("InstructionError"!==e[0])throw new Error("Unknown RPC error: ".concat(t));const r=t.InstructionError;throw new Error("Error in transaction: instruction index ".concat(r[0],", custom program error ").concat(r[1].Custom))}}throw Error(t.toString())}},w=e=>JSON.stringify(Array.from(e.secretKey)),E=(e,t)=>{var r;let n=/.*custom program error: 0x(?<errorNumber>[0-9abcdef]+)/.exec(t);const i=null===n||void 0===n||null===(r=n.groups)||void 0===r?void 0:r.errorNumber;if(!i)return null;return e[parseInt(i,16)]||null},A=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mainnet-beta";const n={};"mainnet-beta"!==r&&("localnet"===r?(n.cluster="custom",n.customUrl="http://localhost:8899"):n.cluster=r);let i="";return"address"===e&&(i="https://explorer.solana.com/address/".concat(t)),"transaction"!==e&&"tx"!==e||(i="https://explorer.solana.com/tx/".concat(t)),"block"===e&&(i="https://explorer.solana.com/block/".concat(t)),((e,t)=>{const r=new URL(e);return r.search=new URLSearchParams(t).toString(),r.toString()})(i,n)},T=async e=>{if(e||(e="~/.config/solana/id.json"),"~"===e[0]){const t={NODE_ENV:"production",PUBLIC_URL:"/dapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_RPC_HOST:"https://rpc.ankr.com/solana/065967d9d04edf636a3cb316318e2cd2d32fc242857c761b08eb966bd96e7089"}.HOME||null;t&&(e=p.default.join(t,e.slice(1)))}let t,r;try{t=(await(0,g.readFile)(e)).toString()}catch(n){throw new Error("Could not read keypair from file at '".concat(e,"'"))}try{r=Uint8Array.from(JSON.parse(t))}catch(i){const t=i;if(!t.message.includes("Unexpected token"))throw t;throw new Error("Invalid secret key file at '".concat(e,"'!"))}return h.Keypair.fromSecretKey(r)},x=e=>{const t={NODE_ENV:"production",PUBLIC_URL:"/dapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_RPC_HOST:"https://rpc.ankr.com/solana/065967d9d04edf636a3cb316318e2cd2d32fc242857c761b08eb966bd96e7089"}[e];if(!t)throw new Error("Please set '".concat(e,"' in environment."));let r;try{return r=m.default.decode(t),h.Keypair.fromSecretKey(r)}catch(n){if(!n.message.includes("Non-base58 character"))throw new Error("Invalid secret key in environment variable '".concat(e,"'!"))}try{r=Uint8Array.from(JSON.parse(t))}catch(i){throw new Error("Invalid secret key in environment variable '".concat(e,"'!"))}return h.Keypair.fromSecretKey(r)},S=async(e,t,r)=>{r||(r=".env");if({NODE_ENV:"production",PUBLIC_URL:"/dapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_RPC_HOST:"https://rpc.ankr.com/solana/065967d9d04edf636a3cb316318e2cd2d32fc242857c761b08eb966bd96e7089"}[t])throw new Error("'".concat(t,"' already exists in env file."));const n=w(e);await(0,g.appendFile)(r,"\n# Solana Address: ".concat(e.publicKey.toBase58(),"\n").concat(t,"=").concat(n))},C=async(e,t)=>{let r,{keypairPath:n,envFileName:i,envVariableName:o=y,airdropAmount:a=b,minimumBalance:l=v}=t||{};return n?r=await T(n):!{NODE_ENV:"production",PUBLIC_URL:"/dapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_RPC_HOST:"https://rpc.ankr.com/solana/065967d9d04edf636a3cb316318e2cd2d32fc242857c761b08eb966bd96e7089"}[o]?(r=h.Keypair.generate(),await S(r,o,i)):r=x(o),a&&await k(e,r.publicKey,a,l),r},k=async(e,t,r,n)=>{const i=await e.getBalance(t,"confirmed");return i<n?(async(e,t,r)=>{const n=await e.requestAirdrop(t,r),i=await e.getLatestBlockhash();return await e.confirmTransaction({blockhash:i.blockhash,lastValidBlockHeight:i.lastValidBlockHeight,signature:n},"finalized"),e.getBalance(t,"finalized")})(e,t,r):i},O=async(e,t)=>{const r=await e.getLatestBlockhash(),n=await e.confirmTransaction({signature:t,...r},"confirmed");return _(n),t},F=e=>Array.from({length:e},(()=>h.Keypair.generate())),P=async(e,t)=>{var r;await O(e,t);const n=await e.getTransaction(t,{maxSupportedTransactionVersion:0,commitment:"confirmed"});return(null===n||void 0===n||null===(r=n.meta)||void 0===r?void 0:r.logMessages)||[]},z=async(e,t,r,n)=>{const i=[h.ComputeBudgetProgram.setComputeUnitLimit({units:14e5}),...t],o=new h.VersionedTransaction(new h.TransactionMessage({instructions:i,payerKey:r,recentBlockhash:h.PublicKey.default.toString()}).compileToV0Message(n)),a=await e.simulateTransaction(o,{replaceRecentBlockhash:!0,sigVerify:!1});return _(a),a.value.unitsConsumed||null}},35857:function(e,t,r){var n,i;n=function(){var e,t,r="2.0.6",n={},i={},o={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},a={currentLocale:o.currentLocale,zeroFormat:o.zeroFormat,nullFormat:o.nullFormat,defaultFormat:o.defaultFormat,scalePercentBy100:o.scalePercentBy100};function l(e,t){this._input=e,this._value=t}return(e=function(r){var i,o,c,s;if(e.isNumeral(r))i=r.value();else if(0===r||"undefined"===typeof r)i=0;else if(null===r||t.isNaN(r))i=null;else if("string"===typeof r)if(a.zeroFormat&&r===a.zeroFormat)i=0;else if(a.nullFormat&&r===a.nullFormat||!r.replace(/[^0-9]+/g,"").length)i=null;else{for(o in n)if((s="function"===typeof n[o].regexps.unformat?n[o].regexps.unformat():n[o].regexps.unformat)&&r.match(s)){c=n[o].unformat;break}i=(c=c||e._.stringToNumber)(r)}else i=Number(r)||null;return new l(r,i)}).version=r,e.isNumeral=function(e){return e instanceof l},e._=t={numberToFormat:function(t,r,n){var o,a,l,c,s,u,f,d=i[e.options.currentLocale],h=!1,m=!1,p=0,g="",b=1e12,v=1e9,y=1e6,_=1e3,w="",E=!1;if(t=t||0,a=Math.abs(t),e._.includes(r,"(")?(h=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(s=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(o=!!(o=r.match(/a(k|m|b|t)?/))&&o[1],e._.includes(r," a")&&(g=" "),r=r.replace(new RegExp(g+"a[kmbt]?"),""),a>=b&&!o||"t"===o?(g+=d.abbreviations.trillion,t/=b):a<b&&a>=v&&!o||"b"===o?(g+=d.abbreviations.billion,t/=v):a<v&&a>=y&&!o||"m"===o?(g+=d.abbreviations.million,t/=y):(a<y&&a>=_&&!o||"k"===o)&&(g+=d.abbreviations.thousand,t/=_)),e._.includes(r,"[.]")&&(m=!0,r=r.replace("[.]",".")),l=t.toString().split(".")[0],c=r.split(".")[1],u=r.indexOf(","),p=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,c?(e._.includes(c,"[")?(c=(c=c.replace("]","")).split("["),w=e._.toFixed(t,c[0].length+c[1].length,n,c[1].length)):w=e._.toFixed(t,c.length,n),l=w.split(".")[0],w=e._.includes(w,".")?d.delimiters.decimal+w.split(".")[1]:"",m&&0===Number(w.slice(1))&&(w="")):l=e._.toFixed(t,0,n),g&&!o&&Number(l)>=1e3&&g!==d.abbreviations.trillion)switch(l=String(Number(l)/1e3),g){case d.abbreviations.thousand:g=d.abbreviations.million;break;case d.abbreviations.million:g=d.abbreviations.billion;break;case d.abbreviations.billion:g=d.abbreviations.trillion}if(e._.includes(l,"-")&&(l=l.slice(1),E=!0),l.length<p)for(var A=p-l.length;A>0;A--)l="0"+l;return u>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===r.indexOf(".")&&(l=""),f=l+w+(g||""),h?f=(h&&E?"(":"")+f+(h&&E?")":""):s>=0?f=0===s?(E?"-":"+")+f:f+(E?"-":"+"):E&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,o=i[a.currentLocale],l=e,c={thousand:3,million:6,billion:9,trillion:12};if(a.zeroFormat&&e===a.zeroFormat)r=0;else if(a.nullFormat&&e===a.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),c)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),l.match(n)){r*=Math.pow(10,c[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"===typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),i=n.length>>>0,o=0;if(3===arguments.length)r=arguments[2];else{for(;o<i&&!(o in n);)o++;if(o>=i)throw new TypeError("Reduce of empty array with no initial value");r=n[o++]}for(;o<i;o++)o in n&&(r=t(r,n[o],o,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var i,o,a,l,c=e.toString().split("."),s=t-(n||0);return i=2===c.length?Math.min(Math.max(c[1].length,s),t):s,a=Math.pow(10,i),l=(r(e+"e+"+i)/a).toFixed(i),n>t-i&&(o=new RegExp("\\.?0{1,"+(n-(t-i))+"}$"),l=l.replace(o,"")),l}},e.options=a,e.formats=n,e.locales=i,e.locale=function(e){return e&&(a.currentLocale=e.toLowerCase()),a.currentLocale},e.localeData=function(e){if(!e)return i[a.currentLocale];if(e=e.toLowerCase(),!i[e])throw new Error("Unknown locale : "+e);return i[e]},e.reset=function(){for(var e in o)a[e]=o[e]},e.zeroFormat=function(e){a.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){a.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){a.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,i,o,a,l,c,s,u;if("string"!==typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{s=e.localeData(r)}catch(f){s=e.localeData(e.locale())}return o=s.currency.symbol,l=s.abbreviations,n=s.delimiters.decimal,i="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(u=t.match(/^[^\d]+/))||(t=t.substr(1),u[0]===o))&&(null===(u=t.match(/[^\d]+$/))||(t=t.slice(0,-1),u[0]===l.thousand||u[0]===l.million||u[0]===l.billion||u[0]===l.trillion))&&(c=new RegExp(i+"{2}"),!t.match(/[^\d.,]/g)&&!((a=t.split(n)).length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(c):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(c)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(c)&&!!a[1].match(/^\d+$/)))},e.fn=l.prototype={clone:function(){return e(this)},format:function(t,r){var i,o,l,c=this._value,s=t||a.defaultFormat;if(r=r||Math.round,0===c&&null!==a.zeroFormat)o=a.zeroFormat;else if(null===c&&null!==a.nullFormat)o=a.nullFormat;else{for(i in n)if(s.match(n[i].regexps.format)){l=n[i].format;break}o=(l=l||e._.numberToFormat)(c,s,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,i){return e+Math.round(r*t)}return this._value=t.reduce([this._value,e],n,0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,i){return e-Math.round(r*t)}return this._value=t.reduce([e],n,Math.round(this._value*r))/r,this},multiply:function(e){function r(e,r,n,i){var o=t.correctionFactor(e,r);return Math.round(e*o)*Math.round(r*o)/Math.round(o*o)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,i){var o=t.correctionFactor(e,r);return Math.round(e*o)/Math.round(r*o)}return this._value=t.reduce([this._value,e],r),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var i,o=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"BPS"),i=i.join("")):i=i+o+"BPS",i},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=t.suffixes.concat(r.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))).join("|");n="("+n.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(n,i,o){var a,l,c,s=e._.includes(i,"ib")?r:t,u=e._.includes(i," b")||e._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),a=0;a<=s.suffixes.length;a++)if(l=Math.pow(s.base,a),c=Math.pow(s.base,a+1),null===n||0===n||n>=l&&n<c){u+=s.suffixes[a],l>0&&(n/=l);break}return e._.numberToFormat(n,i,o)+u},unformat:function(n){var i,o,a=e._.stringToNumber(n);if(a){for(i=t.suffixes.length-1;i>=0;i--){if(e._.includes(n,t.suffixes[i])){o=Math.pow(t.base,i);break}if(e._.includes(n,r.suffixes[i])){o=Math.pow(r.base,i);break}}a*=o||1}return a}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var i,o,a=e.locales[e.options.currentLocale],l={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),i=e._.numberToFormat(t,r,n),t>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),o=0;o<l.before.length;o++)switch(l.before[o]){case"$":i=e._.insert(i,a.currency.symbol,o);break;case" ":i=e._.insert(i," ",o+a.currency.symbol.length-1)}for(o=l.after.length-1;o>=0;o--)switch(l.after[o]){case"$":i=o===l.after.length-1?i+a.currency.symbol:e._.insert(i,a.currency.symbol,-(l.after.length-(1+o)));break;case" ":i=o===l.after.length-1?i+" ":e._.insert(i," ",-(l.after.length-(1+o)+a.currency.symbol.length-1))}return i}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var i=("number"!==typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(i[0]),r,n)+"e"+i[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),i=Number(r[1]);function o(t,r,n,i){var o=e._.correctionFactor(t,r);return t*o*(r*o)/(o*o)}return i=e._.includes(t,"e-")?i*=-1:i,e._.reduce([n,Math.pow(10,i)],o,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var i=e.locales[e.options.currentLocale],o=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),o+=i.ordinal(t),e._.numberToFormat(t,r,n)+o}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var i,o=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",i},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),i=Math.floor((e-60*n*60)/60),o=Math.round(e-60*n*60-60*i);return n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e},void 0===(i="function"===typeof n?n.call(t,r,t,e):n)||(e.exports=i)},3133:e=>{"use strict";function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",i=0,o=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l);else{if(47===r)break;r=47}if(47===r){if(o===l-1||1===a);else if(o!==l-1&&2===a){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",i=0):i=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),o=l,a=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=l,a=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,l):n=e.slice(o+1,l),i=l-o-1;o=l,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var n={resolve:function(){for(var e,n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a;o>=0?a=arguments[o]:(void 0===e&&(e=process.cwd()),a=e),t(a),0!==a.length&&(n=a+"/"+n,i=47===a.charCodeAt(0))}return n=r(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,a=o-i,l=1;l<r.length&&47===r.charCodeAt(l);++l);for(var c=r.length-l,s=a<c?a:c,u=-1,f=0;f<=s;++f){if(f===s){if(c>s){if(47===r.charCodeAt(l+f))return r.slice(l+f+1);if(0===f)return r.slice(l+f)}else a>s&&(47===e.charCodeAt(i+f)?u=f:0===f&&(u=0));break}var d=e.charCodeAt(i+f);if(d!==r.charCodeAt(l+f))break;47===d&&(u=f)}var h="";for(f=i+u+1;f<=o;++f)f!==o&&47!==e.charCodeAt(f)||(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(l+u):(l+=u,47===r.charCodeAt(l)&&++l,r.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!o){i=a;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,i=0,o=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var l=r.length-1,c=-1;for(n=e.length-1;n>=0;--n){var s=e.charCodeAt(n);if(47===s){if(!a){i=n+1;break}}else-1===c&&(a=!1,c=n+1),l>=0&&(s===r.charCodeAt(l)?-1===--l&&(o=n):(l=-1,o=c))}return i===o?o=c:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){i=n+1;break}}else-1===o&&(a=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,o=!0,a=0,l=e.length-1;l>=0;--l){var c=e.charCodeAt(l);if(47!==c)-1===i&&(o=!1,i=l+1),46===c?-1===r?r=l:1!==a&&(a=1):-1!==r&&(a=-1);else if(!o){n=l+1;break}}return-1===r||-1===i||0===a||1===a&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var a=-1,l=0,c=-1,s=!0,u=e.length-1,f=0;u>=n;--u)if(47!==(i=e.charCodeAt(u)))-1===c&&(s=!1,c=u+1),46===i?-1===a?a=u:1!==f&&(f=1):-1!==a&&(f=-1);else if(!s){l=u+1;break}return-1===a||-1===c||0===f||1===f&&a===c-1&&a===l+1?-1!==c&&(r.base=r.name=0===l&&o?e.slice(1,c):e.slice(l,c)):(0===l&&o?(r.name=e.slice(1,a),r.base=e.slice(1,c)):(r.name=e.slice(l,a),r.base=e.slice(l,c)),r.ext=e.slice(a,c)),l>0?r.dir=e.slice(0,l-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n},53894:(e,t,r)=>{"use strict";r.d(t,{lc:()=>s,jE:()=>f,_l:()=>c});var n=r(22707),i=r(73006);const o=e=>({decode:e.decode.bind(e),encode:e.encode.bind(e)}),a=e=>t=>{const r=(0,n.av)(e,t),{encode:a,decode:l}=o(r),c=r;return c.decode=(e,t)=>{const r=l(e,t);return(0,i.k5)(Buffer.from(r))},c.encode=(t,r,n)=>{const o=(0,i.Bq)(t,e);return a(o,r,n)},c},l=e=>t=>{const r=(0,n.av)(e,t),{encode:a,decode:l}=o(r),c=r;return c.decode=(e,t)=>{const r=l(e,t);return(0,i.cI)(Buffer.from(r))},c.encode=(t,r,n)=>{const o=(0,i.zy)(t,e);return a(o,r,n)},c},c=a(8);l(8),a(16),l(16),a(24),l(24),a(32),l(32);new(r(80554).A)("1e+18");const s=e=>{const t=(0,n.u8)(e),{encode:r,decode:i}=o(t),a=t;return a.decode=(e,t)=>!!i(e,t),a.encode=(e,t,n)=>{const i=Number(e);return r(i,t,n)},a};var u=r(58449);const f=e=>{const t=(0,n.av)(32,e),{encode:r,decode:i}=o(t),a=t;return a.decode=(e,t)=>{const r=i(e,t);return new u.PublicKey(r)},a.encode=(e,t,n)=>{const i=e.toBuffer();return r(i,t,n)},a}},11619:(e,t,r)=>{"use strict";r.d(t,{bY:()=>a,ce:()=>o,kD:()=>i,lu:()=>c,vd:()=>l});class n extends Error{constructor(e){super(e)}}class i extends n{constructor(){super(...arguments),this.name="TokenAccountNotFoundError"}}class o extends n{constructor(){super(...arguments),this.name="TokenInvalidAccountError"}}class a extends n{constructor(){super(...arguments),this.name="TokenInvalidAccountOwnerError"}}class l extends n{constructor(){super(...arguments),this.name="TokenInvalidAccountSizeError"}}class c extends n{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}},75230:(e,t,r)=>{"use strict";r.d(t,{C3:()=>s});var n,i=r(22707),o=r(53894),a=r(58449),l=r(96527);!function(e){e[e.InitializeMint=0]="InitializeMint",e[e.InitializeAccount=1]="InitializeAccount",e[e.InitializeMultisig=2]="InitializeMultisig",e[e.Transfer=3]="Transfer",e[e.Approve=4]="Approve",e[e.Revoke=5]="Revoke",e[e.SetAuthority=6]="SetAuthority",e[e.MintTo=7]="MintTo",e[e.Burn=8]="Burn",e[e.CloseAccount=9]="CloseAccount",e[e.FreezeAccount=10]="FreezeAccount",e[e.ThawAccount=11]="ThawAccount",e[e.TransferChecked=12]="TransferChecked",e[e.ApproveChecked=13]="ApproveChecked",e[e.MintToChecked=14]="MintToChecked",e[e.BurnChecked=15]="BurnChecked",e[e.InitializeAccount2=16]="InitializeAccount2",e[e.SyncNative=17]="SyncNative",e[e.InitializeAccount3=18]="InitializeAccount3",e[e.InitializeMultisig2=19]="InitializeMultisig2",e[e.InitializeMint2=20]="InitializeMint2",e[e.GetAccountDataSize=21]="GetAccountDataSize",e[e.InitializeImmutableOwner=22]="InitializeImmutableOwner",e[e.AmountToUiAmount=23]="AmountToUiAmount",e[e.UiAmountToAmount=24]="UiAmountToAmount",e[e.InitializeMintCloseAuthority=25]="InitializeMintCloseAuthority",e[e.TransferFeeExtension=26]="TransferFeeExtension",e[e.ConfidentialTransferExtension=27]="ConfidentialTransferExtension",e[e.DefaultAccountStateExtension=28]="DefaultAccountStateExtension",e[e.Reallocate=29]="Reallocate",e[e.MemoTransferExtension=30]="MemoTransferExtension",e[e.CreateNativeMint=31]="CreateNativeMint",e[e.InitializeNonTransferableMint=32]="InitializeNonTransferableMint",e[e.InterestBearingMintExtension=33]="InterestBearingMintExtension",e[e.CpiGuardExtension=34]="CpiGuardExtension",e[e.InitializePermanentDelegate=35]="InitializePermanentDelegate",e[e.TransferHookExtension=36]="TransferHookExtension",e[e.MetadataPointerExtension=39]="MetadataPointerExtension",e[e.GroupPointerExtension=40]="GroupPointerExtension",e[e.GroupMemberPointerExtension=41]="GroupMemberPointerExtension"}(n||(n={}));const c=(0,i.w3)([(0,i.u8)("instruction"),(0,o._l)("amount")]);function s(e,t,r,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:l.x5;const u=function(e,t,r){if(r.length){e.push({pubkey:t,isSigner:!1,isWritable:!1});for(const t of r)e.push({pubkey:t instanceof a.PublicKey?t:t.publicKey,isSigner:!0,isWritable:!1})}else e.push({pubkey:t,isSigner:!0,isWritable:!1});return e}([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],r,o),f=Buffer.alloc(c.span);return c.encode({instruction:n.Transfer,amount:BigInt(i)},f),new a.TransactionInstruction({keys:u,programId:s,data:f})}},41179:(e,t,r)=>{"use strict";r.d(t,{sU:()=>m});var n,i=r(22707),o=r(53894),a=r(96527),l=r(11619);!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Mint=1]="Mint",e[e.Account=2]="Account"}(n||(n={}));const c=1,s=(0,i.w3)([(0,i.u8)("m"),(0,i.u8)("n"),(0,o.lc)("isInitialized"),(0,o.jE)("signer1"),(0,o.jE)("signer2"),(0,o.jE)("signer3"),(0,o.jE)("signer4"),(0,o.jE)("signer5"),(0,o.jE)("signer6"),(0,o.jE)("signer7"),(0,o.jE)("signer8"),(0,o.jE)("signer9"),(0,o.jE)("signer10"),(0,o.jE)("signer11")]),u=s.span;var f;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initialized=1]="Initialized",e[e.Frozen=2]="Frozen"}(f||(f={}));const d=(0,i.w3)([(0,o.jE)("mint"),(0,o.jE)("owner"),(0,o._l)("amount"),(0,i.DH)("delegateOption"),(0,o.jE)("delegate"),(0,i.u8)("state"),(0,i.DH)("isNativeOption"),(0,o._l)("isNative"),(0,o._l)("delegatedAmount"),(0,i.DH)("closeAuthorityOption"),(0,o.jE)("closeAuthority")]),h=d.span;async function m(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.x5;return p(t,await e.getAccountInfo(t,r),n)}function p(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.x5;if(!t)throw new l.kD;if(!t.owner.equals(r))throw new l.bY;if(t.data.length<h)throw new l.vd;const i=d.decode(t.data.slice(0,h));let o=Buffer.alloc(0);if(t.data.length>h){if(t.data.length===u)throw new l.vd;if(t.data[h]!=n.Account)throw new l.ce;o=t.data.slice(h+c)}return{address:e,mint:i.mint,owner:i.owner,amount:i.amount,delegate:i.delegateOption?i.delegate:null,delegatedAmount:i.delegatedAmount,isInitialized:i.state!==f.Uninitialized,isFrozen:i.state===f.Frozen,isNative:!!i.isNativeOption,rentExemptReserve:i.isNativeOption?i.isNative:null,closeAuthority:i.closeAuthorityOption?i.closeAuthority:null,tlvData:o}}},69418:(e,t,r)=>{"use strict";r.d(t,{Ob:()=>s});var n=r(22707),i=r(53894),o=r(58449),a=r(96527),l=r(11619);const c=(0,n.w3)([(0,n.DH)("mintAuthorityOption"),(0,i.jE)("mintAuthority"),(0,i._l)("supply"),(0,n.u8)("decimals"),(0,i.lc)("isInitialized"),(0,n.DH)("freezeAuthorityOption"),(0,i.jE)("freezeAuthority")]);c.span;async function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.x5,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a.EK;if(!r&&!o.PublicKey.isOnCurve(t.toBuffer()))throw new l.lu;const[c]=await o.PublicKey.findProgramAddress([t.toBuffer(),n.toBuffer(),e.toBuffer()],i);return c}},22790:(e,t,r)=>{"use strict";function n(e,t){var r;if(!e)return void t(void 0);t({width:e.offsetWidth,height:e.offsetHeight});const n=new(null!==(r=e.ownerDocument.defaultView)&&void 0!==r?r:window).ResizeObserver((r=>{if(!Array.isArray(r)||!r.length)return;const[n]=r;let i,o;if("borderBoxSize"in n){const e=n.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,o=t.blockSize}else i=e.offsetWidth,o=e.offsetHeight;t({width:i,height:o})}));return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}r.d(t,{R:()=>n})}}]);