import{k as S,m as K,B as U,l as z}from"./entry.1aeaeb39.js";import{a as M}from"./utils.53ee7b64.js";import{g as N,a as E,e as A,s as W,b as j,w as T,c as H,d as J}from"./query.561463a9.js";import{c as R,p as B}from"./_commonjsHelpers.f8a6f4fc.js";const q=()=>{const n=new Map;return{hasItem(t){return n.has(t)},getItem(t){return n.get(t)||null},setItem(t,e){n.set(t,e)},removeItem(t){n.delete(t)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}};function G(n){return!n||typeof n.then!="function"?Promise.resolve(n):n}function p(n,...t){try{return G(n(...t))}catch(e){return Promise.reject(e)}}function k(n){const t=typeof n;return n===null||t!=="object"&&t!=="function"}function Z(n){return k(n)?n+"":JSON.stringify(n)}const b=()=>{const n=new Map;return{hasItem(t){return n.has(t)},getItem(t){return n.get(t)||null},setItem(t,e){n.set(t,e)},removeItem(t){n.delete(t)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}},F=["hasItem","getItem","setItem","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function Q(n,t){if(t=I(t),!t)return n;const e={...n};for(const a of F)e[a]=(i="",...s)=>n[a](t+i,...s);return e.getKeys=(a="",...i)=>n.getKeys(t+a,...i).then(s=>s.map(o=>o.substr(t.length))),e}function g(n){return n?n.replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function I(n){return n=g(n),n?n+":":""}function V(n={}){const t={mounts:{"":n.driver||b()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},e=r=>{for(const u of t.mountpoints)if(r.startsWith(u))return{relativeKey:r.substring(u.length),driver:t.mounts[u]};return{relativeKey:r,driver:t.mounts[""]}},a=(r,u)=>t.mountpoints.filter(c=>c.startsWith(r)||u&&r.startsWith(c)).map(c=>({relativeBase:r.length>c.length?r.substring(c.length):void 0,mountpoint:c,driver:t.mounts[c]})),i=(r,u)=>{if(!!t.watching){u=g(u);for(const c of t.watchListeners)c(r,u)}},s=async()=>{if(!t.watching){t.watching=!0;for(const r in t.mounts)t.unwatch[r]=await C(t.mounts[r],i,r)}},o=async()=>{if(!!t.watching){for(const r in t.unwatch)await t.unwatch[r]();t.unwatch={},t.watching=!1}},h={hasItem(r){r=g(r);const{relativeKey:u,driver:c}=e(r);return p(c.hasItem,u)},getItem(r){r=g(r);const{relativeKey:u,driver:c}=e(r);return p(c.getItem,u).then(l=>S(l))},async setItem(r,u){if(u===void 0)return h.removeItem(r);r=g(r);const{relativeKey:c,driver:l}=e(r);!l.setItem||(await p(l.setItem,c,Z(u)),l.watch||i("update",r))},async removeItem(r,u=!0){r=g(r);const{relativeKey:c,driver:l}=e(r);!l.removeItem||(await p(l.removeItem,c),u&&await p(l.removeItem,c+"$"),l.watch||i("remove",r))},async getMeta(r,u){r=g(r);const{relativeKey:c,driver:l}=e(r),m=Object.create(null);if(l.getMeta&&Object.assign(m,await p(l.getMeta,c)),!u){const f=await p(l.getItem,c+"$").then(d=>S(d));f&&typeof f=="object"&&(typeof f.atime=="string"&&(f.atime=new Date(f.atime)),typeof f.mtime=="string"&&(f.mtime=new Date(f.mtime)),Object.assign(m,f))}return m},setMeta(r,u){return this.setItem(r+"$",u)},removeMeta(r){return this.removeItem(r+"$")},async getKeys(r){r=I(r);const u=a(r,!0);let c=[];const l=[];for(const m of u){const d=(await p(m.driver.getKeys,m.relativeBase)).map(y=>m.mountpoint+g(y)).filter(y=>!c.find(w=>y.startsWith(w)));l.push(...d),c=[m.mountpoint].concat(c.filter(y=>!y.startsWith(m.mountpoint)))}return r?l.filter(m=>m.startsWith(r)&&!m.endsWith("$")):l.filter(m=>!m.endsWith("$"))},async clear(r){r=I(r),await Promise.all(a(r,!1).map(async u=>{if(u.driver.clear)return p(u.driver.clear);if(u.driver.removeItem){const c=await u.driver.getKeys();return Promise.all(c.map(l=>u.driver.removeItem(l)))}}))},async dispose(){await Promise.all(Object.values(t.mounts).map(r=>x(r)))},async watch(r){return await s(),t.watchListeners.push(r),async()=>{t.watchListeners=t.watchListeners.filter(u=>u!==r),t.watchListeners.length===0&&await o()}},async unwatch(){t.watchListeners=[],await o()},mount(r,u){if(r=I(r),r&&t.mounts[r])throw new Error(`already mounted at ${r}`);return r&&(t.mountpoints.push(r),t.mountpoints.sort((c,l)=>l.length-c.length)),t.mounts[r]=u,t.watching&&Promise.resolve(C(u,i,r)).then(c=>{t.unwatch[r]=c}).catch(console.error),h},async unmount(r,u=!0){r=I(r),!(!r||!t.mounts[r])&&(t.watching&&r in t.unwatch&&(t.unwatch[r](),delete t.unwatch[r]),u&&await x(t.mounts[r]),t.mountpoints=t.mountpoints.filter(c=>c!==r),delete t.mounts[r])}};return h}function C(n,t,e){return n.watch?n.watch((a,i)=>t(a,e+i)):()=>{}}async function x(n){typeof n.dispose=="function"&&await p(n.dispose)}function X(n={}){const t=ee(e,n.operators);function e(a,i){return typeof i!="object"||i instanceof RegExp?t.$eq(a,i):Object.keys(i||{}).every(s=>{const o=i[s];if(s.startsWith("$")&&t[s]){const h=t[s];return typeof h=="function"?h(a,o):!1}return e(N(a,s),o)})}return e}function ee(n,t={}){return{$match:(e,a)=>n(e,a),$eq:(e,a)=>a instanceof RegExp?a.test(e):e===a,$ne:(e,a)=>a instanceof RegExp?!a.test(e):e!==a,$not:(e,a)=>!n(e,a),$and:(e,a)=>(E(a,"$and requires an array as condition"),a.every(i=>n(e,i))),$or:(e,a)=>(E(a,"$or requires an array as condition"),a.some(i=>n(e,i))),$in:(e,a)=>A(a).some(i=>Array.isArray(e)?n(e,{$contains:i}):n(e,i)),$contains:(e,a)=>(e=Array.isArray(e)?e:String(e),A(a).every(i=>e.includes(i))),$icontains:(e,a)=>{if(typeof a!="string")throw new TypeError("$icontains requires a string, use $contains instead");return e=String(e).toLocaleLowerCase(),A(a).every(i=>e.includes(i.toLocaleLowerCase()))},$containsAny:(e,a)=>(E(a,"$containsAny requires an array as condition"),e=Array.isArray(e)?e:String(e),a.some(i=>e.includes(i))),$exists:(e,a)=>a?typeof e<"u":typeof e>"u",$type:(e,a)=>typeof e===String(a),$regex:(e,a)=>{if(!(a instanceof RegExp)){const i=String(a).match(/\/(.*)\/([dgimsuy]*)$/);a=i?new RegExp(i[1],i[2]||""):new RegExp(a)}return a.test(String(e||""))},$lt:(e,a)=>e<a,$lte:(e,a)=>e<=a,$gt:(e,a)=>e>a,$gte:(e,a)=>e>=a,...t||{}}}function P(n){const t=X(),e=(i,{query:s,before:o,after:h})=>{const r=typeof s=="string"?{_path:s}:s,u=i.findIndex(l=>t(l,r));o=o||1,h=h||1;const c=new Array(o+h).fill(null,0);return u===-1?c:c.map((l,m)=>i[u-o+m+Number(m>=o)]||null)},a=[(i,s)=>i.filter(o=>A(s.where).every(h=>t(o,h))),(i,s)=>A(s.sort).forEach(o=>W(i,o)),(i,s)=>s.surround?e(i,s.surround):i,(i,s)=>s.skip?i.slice(s.skip):i,(i,s)=>s.limit?i.slice(0,s.limit):i,(i,s)=>j(T(s.without))(i),(i,s)=>j(H(s.only))(i),(i,s)=>s.first?i[0]:i];return async i=>{const s=await n();return a.reduce((o,h)=>h(o,i.params())||o,s)}}var te={exports:{}};(function(n,t){(function(e,a,i){n.exports=i(),n.exports.default=i()})("slugify",R,function(){var e=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`),a=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');function i(s,o){if(typeof s!="string")throw new Error("slugify: string argument expected");o=typeof o=="string"?{replacement:o}:o||{};var h=a[o.locale]||{},r=o.replacement===void 0?"-":o.replacement,u=o.trim===void 0?!0:o.trim,c=s.normalize().split("").reduce(function(l,m){var f=h[m]||e[m]||m;return f===r&&(f=" "),l+f.replace(o.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return o.strict&&(c=c.replace(/[^A-Za-z0-9\s]/g,"")),u&&(c=c.trim()),c=c.replace(/\s+/g,r),o.lower&&(c=c.toLowerCase()),c}return i.extend=function(s){Object.assign(e,s)},i})})(te);const re=n=>n.split(/[\s-]/g).map(B).join(" ");function ne(n,t){const{navigation:e}=K().content,a=s=>({...ie(["title",...e.fields])(s),...se(s==null?void 0:s.navigation)?s.navigation:{}}),i=n.sort((s,o)=>s._path.localeCompare(o._path)).reduce((s,o)=>{const h=o._path.substring(1).split("/"),r=o._id.split(":").slice(1),u=!!r[r.length-1].match(/([1-9][0-9]*\.)?index.md/g),c=f=>({title:f.title,_path:f._path,_file:f._file,children:[],...a(f),...f._draft?{_draft:!0}:{}}),l=c(o);if(u){const f=t[l._path];if(typeof(f==null?void 0:f.navigation)<"u"&&!(f!=null&&f.navigation))return s;if(o._path!=="/"){const d=c(o);l.children.push(d)}Object.assign(l,a(f))}return h.length===1?(s.push(l),s):(h.slice(0,-1).reduce((f,d,y)=>{const w="/"+h.slice(0,y+1).join("/"),v=t[w];if(typeof(v==null?void 0:v.navigation)<"u"&&!v.navigation)return[];let O=f.find(Y=>Y._path===w);return O||(O={title:re(d),_path:w,_file:o._file,children:[],...a(v)},f.push(O)),O.children},s).push(l),s)},[]);return D(i)}const ae=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function D(n){const t=n.sort((e,a)=>ae.compare(e._file,a._file));for(const e of t)e.children.length?D(e.children):delete e.children,delete e._file;return n}function ie(n){return t=>(t=t||{},n&&n.length?n.filter(e=>typeof t[e]<"u").reduce((e,a)=>Object.assign(e,{[a]:t[a]}),{}):t)}function se(n){return Object.prototype.toString.call(n)==="[object Object]"}const oe=n=>z(n,"/api/"+K().public.content.base),ce=Q(V({driver:q()}),"@content"),L=()=>M("previewToken").value;function ue(n){async function t(){const e=new Set(await n.getKeys("cache:")),a=L();if(a){(await n.getItem(`${a}$`).then(r=>r||{})).ignoreBuiltContents&&e.clear();const o=await n.getKeys(`${a}:`),h=await Promise.all(o.map(r=>n.getItem(r)));for(const r of h)e.delete(`cache:${r._id}`),r.__deleted||e.add(`${a}:${r._id}`)}return await Promise.all(Array.from(e).map(s=>n.getItem(s)))}return{storage:n,fetch:P(t),query:e=>J(P(t),e)}}let _,$;async function le(){return $?await $:_||($=fe(),_=await $),_}async function fe(){const n=U(),{clientDB:t}=K().public.content,e=ue(ce),a=await e.storage.getItem("integrity");if(t.integrity!==+a){const{contents:i,navigation:s}=await $fetch(oe("cache.json"));await Promise.all(i.map(o=>e.storage.setItem(`cache:${o._id}`,o))),await e.storage.setItem("navigation",s),await e.storage.setItem("integrity",t.integrity)}return await n.callHook("content:storage",e.storage),e}async function de(n){const t=await le();if(!L()&&Object.keys(n||{}).length===0)return t.storage.getItem("navigation");const e=await t.query(n).where({_partial:!1,navigation:{$ne:!1}}).find(),i=(await t.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((s,o)=>{o.title.toLowerCase()==="dir"&&(o.title=void 0);const h=o._path.split("/").slice(0,-1).join("/")||"/";return s[h]={...o,...o.body},s},{});return ne(e,i)}export{ce as contentStorage,ue as createDB,de as generateNavigation,L as getPreview,le as useContentDatabase};