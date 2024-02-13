(()=>{"use strict";var t={548:(t,e,n)=>{n.d(e,{c:()=>s});var r=n(500),a=n.n(r),o=n(312),i=n.n(o)()(a());i.push([t.id,'html,body{\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: grey;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n#footer {\n    margin-bottom: 5px;\n    margin-top: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#footer>span{\n    font-style: italic;\n}\n\na{\n    margin-left: 5px;\n    color: black;\n    text-decoration: none;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #00b859;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n}\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n  \n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 34px;\n}\n  \n  .slider.round:before {\n    border-radius: 50%;\n}\n\n  .content_header {\n    margin-top: 0;\n    margin-bottom: auto;\n    min-width: 100vh;\n    min-height: 10vh;\n    display: flex;\n    justify-content: left;\n    gap: 20px;\n    align-items: center;\n}\n\n.search_form > form{\n\n    display: flex;\n    gap: 10px;\n\n}\n\n.switch_div {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    margin-right: 20px;\n    margin-left: auto;\n}\n\n.header {\n    \n    margin-left: 20px;\n    margin-right: auto;\n}\n\n.content_data{\n    position: relative;\n    padding: 30px;\n    flex: 1;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr;\n    justify-items: stretch;\n    align-items: center;\n    gap: 20px;\n    margin: 20px;\n    border: 1px #2196F3 solid;\n}\n\n#city_info,#weather_info{\n    padding: 2px;\n    border: 1px #00b859 solid;\n}\n\n#city_info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.location_info_item{\n}\n\n#city_name {\n    font-size: 45px;\n    font-weight: bolder;\n    margin-bottom: 2px;\n}\n\n#city_country {\n    font-size: 20px;\n    margin-bottom: 30px;\n}\n\n#current_day,#current_time {\n    font-size: 20px;\n}\n\n#weather_info{\n\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    align-items: center;\n    justify-items: center;\n\n}\n\n#condition_div {\n    padding: 20px;\n    grid-area: 1/1/2/2;\n}\n\n#temp_div{\n    grid-area: 1/2/2/3;\n    padding: 20px;\n}\n\n#bottom_div{\n    grid-area: 2/1/3/3;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 1fr 1fr;\n    padding: 20px;\n}\n\n#city_condition{\n    font-size: 40px;\n}\n\n#city_temp{\n    font-size: 25px;\n}\n\n#city_tempFeel{\n    font-size: 15px;\n}\n\n#city_wind{\n    grid-area: 1/1/3/2;\n}\n\n#city_preci{\n    grid-area: 1/2/3/3;\n}\n\n#city_sunRise{\n    grid-area: 1/3/2/4;\n}\n\n#city_sunSet{\n    grid-area: 2/3/3/4;\n}\n\n',""]);const s=i},312:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},500:t=>{t.exports=function(t){return t[1]}},596:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var f=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},176:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},808:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},120:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},520:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},936:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t=function(t,e,n){const r=document.createElement(t);return r.setAttribute(e,n),r},e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const a={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function i(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const s={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:i({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:i({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:i({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:i({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:i({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function c(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const u={ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(d.matchPattern);if(!n)return null;const r=n[0],a=t.match(d.parsePattern);if(!a)return null;let o=d.valueCallback?d.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var d;const l={code:"en-US",formatDistance:(t,n,r)=>{let a;const o=e[t];return a="string"==typeof o?o:1===n?o.one:o.other.replace("{{count}}",n.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a},formatLong:a,formatRelative:(t,e,n,r)=>o[t],localize:s,match:u,options:{weekStartsOn:0,firstWeekContainsDate:1}};let f={};function h(){return f}Math.pow(10,8);const m=6048e5,g=864e5;function p(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function w(t){const e=p(t);return e.setHours(0,0,0,0),e}function y(t){const e=p(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function b(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function v(t){const e=p(t);return function(t,e){const n=w(t),r=w(e),a=+n-y(n),o=+r-y(r);return Math.round((a-o)/g)}(e,function(t){const e=p(t),n=b(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function x(t,e){const n=h(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=p(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function M(t){return x(t,{weekStartsOn:1})}function _(t){const e=p(t),n=e.getFullYear(),r=b(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=M(r),o=b(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=M(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function k(t){const e=p(t),n=+M(e)-+function(t){const e=_(t),n=b(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),M(n)}(e);return Math.round(n/m)+1}function C(t,e){const n=p(t),r=n.getFullYear(),a=h(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=b(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=x(i,e),c=b(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=x(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function S(t,e){const n=p(t),r=+x(n,e)-+function(t,e){const n=h(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=C(t,e),o=b(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),x(o,e)}(n,e);return Math.round(r/m)+1}function P(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const T={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return P("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):P(n+1,2)},d:(t,e)=>P(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>P(t.getHours()%12||12,e.length),H:(t,e)=>P(t.getHours(),e.length),m:(t,e)=>P(t.getMinutes(),e.length),s:(t,e)=>P(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return P(Math.trunc(r*Math.pow(10,n-3)),e.length)}},D={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return T.y(t,e)},Y:function(t,e,n,r){const a=C(t,r),o=a>0?a:1-a;return"YY"===e?P(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):P(o,e.length)},R:function(t,e){return P(_(t),e.length)},u:function(t,e){return P(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return P(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return P(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return P(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=S(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):P(a,e.length)},I:function(t,e,n){const r=k(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):P(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,n){const r=v(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):P(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return P(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return P(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return P(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return T.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):P(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):P(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return F(r);case"XXXX":case"XX":return q(r);default:return q(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return F(r);case"xxxx":case"xx":return q(r);default:return q(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+W(r,":");default:return"GMT"+q(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+W(r,":");default:return"GMT"+q(r,":")}},t:function(t,e,n){return P(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return P(t.getTime(),e.length)}};function W(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+P(o,2)}function F(t,e){return t%60==0?(t>0?"-":"+")+P(Math.abs(t)/60,2):q(t,e)}function q(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+P(Math.trunc(r/60),2)+e+P(r%60,2)}const N=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Y=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},j={p:Y,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return N(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",N(r,e)).replace("{{time}}",Y(a,e))}},O=/^D+$/,A=/^Y+$/,$=["D","DD","YY","YYYY"];function E(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=p(t);return!isNaN(Number(n))}const H=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,L=/^'([^]*?)'?$/,X=/''/g,Q=/[a-zA-Z]/;function G(t){const e=t.match(L);return e?e[1].replace(X,"'"):t}const B=function(e){const n=new Date;console.log(n);const r=t("div","id","city_info"),a=t("div","id","city_name");a.setAttribute("class","location_info_item");const o=t("div","id","city_country");o.setAttribute("class","location_info_item");const i=t("div","id","current_day");i.setAttribute("class","location_info_item");const s=t("div","id","current_time");return s.setAttribute("class","location_info_item"),a.textContent=e.location.name,o.textContent=e.location.country,i.textContent=function(t,e,n){const r=h(),a=n?.locale??r.locale??l,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=p(t);if(!E(s))throw new RangeError("Invalid time value");let c=e.match(z).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,j[e])(t,a.formatLong):t})).join("").match(H).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:G(t)};if(D[e])return{isToken:!0,value:t};if(e.match(Q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return A.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return O.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),$.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,D[o[0]])(s,o,a.localize,u)})).join("")}(n,"yyyy-MM-dd"),s.textContent=n.toLocaleTimeString(),r.appendChild(a),r.appendChild(o),r.appendChild(i),r.appendChild(s),r},I=function(e,n){const r=t("div","id","weather_info"),a=t("div","id","condition_div"),o=t("div","id","temp_div"),i=t("div","id","bottom_div"),s=t("div","id","city_temp");s.setAttribute("class","weather_info_item");const c=t("div","id","city_wind");c.setAttribute("class","weather_info_item");const u=t("div","id","city_condition");u.setAttribute("class","weather_info_item");const d=t("div","id","city_tempFeel");d.setAttribute("class","weather_info_item");const l=t("div","id","city_preci");l.setAttribute("class","weather_info_item");const f=t("div","id","city_tempMax");f.setAttribute("class","weather_info_item");const h=t("div","id","city_tempMin");h.setAttribute("class","weather_info_item");const m=t("div","id","city_sunRise");m.setAttribute("class","weather_info_item");const g=t("div","id","city_sunSet");return g.setAttribute("class","weather_info_item"),u.textContent=e.current.condition.text,l.textContent=`Precip ${e.forecast.forecastday[0].day.daily_chance_of_rain}%`,m.textContent=`Sun Rise at ${e.forecast.forecastday[0].astro.sunrise}`,g.textContent=`Sun Set at ${e.forecast.forecastday[0].astro.sunset}`,n?(s.textContent=`Temp ${e.current.temp_c} C`,c.textContent=`Wind ${e.current.wind_kph} kph`,d.textContent=`Feels like ${e.current.feelslike_c} C`,f.textContent=`Max ${e.forecast.forecastday[0].day.maxtemp_c} C`,h.textContent=`Min ${e.forecast.forecastday[0].day.mintemp_c} C`):(s.textContent=`Temp ${e.current.temp_f} F`,c.textContent=`Wind ${e.current.wind_mph} mph`,d.textContent=`Feels like${e.current.feelslike_f} F`,f.textContent=`Max ${e.forecast.forecastday[0].day.maxtemp_f} F`,h.textContent=`Min ${e.forecast.forecastday[0].day.mintemp_f} F`),a.appendChild(u),a.appendChild(s),o.appendChild(f),o.appendChild(h),a.appendChild(d),i.appendChild(c),i.appendChild(l),i.appendChild(m),i.appendChild(g),r.appendChild(a),r.appendChild(o),r.appendChild(i),r},R=function(e){const n=t("div","id","hourly_div");new Date,console.log(22);let r,a,o=e.forecast.forecastday[0].hour,i=e.forecast.forecastday[1].hour,s=Number(22),c=Number(22);for(let t=0;t<6;t++){if(s>=24&&(s=0),0===s?(r=12,a="a.m"):24===s?(r=s-12,a="a.m"):s>12?(r=s-12,a="p.m"):12===s?(r=s,a="p.m"):s<12&&(r=s,a="a.m"),c<=23){const t=o[c].condition.text,e=o[c].temp_c;console.log(`${r} ${a} ${t} ${e} j = ${s} k = ${c}`)}else if(c>23){let t=c-24;const e=i[t].condition.text,n=i[t].temp_c;console.log(`${r} ${a} ${e} ${n} j = ${s} k = ${c}`)}s=++s,c=++c}return n},J=function(t,e){let n=!1;fetch(`https://api.weatherapi.com/v1/forecast.json?key=44452755b5a14a59aa3221559241002&q=${t}&days=3`,{mode:"cors"}).then((function(t){return n=!!t.ok,t.json()})).then((function(t){n?(console.log(t),function(t,e){const n=document.querySelector(".content_data");n.textContent="",function(t,e,n){t.appendChild(B(e)),t.appendChild(I(e,n)),R(e)}(n,t,e)}(t,e)):(console.log(t.error.message),function(t){document.querySelector(".content_data").textContent=t}(t.error.message))}))},U=function(t){J("New York",t)};var V=n(596),K=n.n(V),Z=n(520),tt=n.n(Z),et=n(176),nt=n.n(et),rt=n(120),at=n.n(rt),ot=n(808),it=n.n(ot),st=n(936),ct=n.n(st),ut=n(548),dt={};dt.styleTagTransform=ct(),dt.setAttributes=at(),dt.insert=nt().bind(null,"head"),dt.domAPI=tt(),dt.insertStyleElement=it(),K()(ut.c,dt),ut.c&&ut.c.locals&&ut.c.locals,function(){let t=!0;U(t),document.querySelector("#search_btn").addEventListener("click",(()=>{const e=document.querySelector("#search_in");console.log(e.value),J(e.value,t)})),document.querySelector(".unit_toggle").addEventListener("click",(()=>{const e=document.querySelector("#search_in");console.log(t),t=!1===t,""===e.value?U(t):J(e.value,t)}))}()})()})();