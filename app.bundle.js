(()=>{"use strict";var n={548:(n,t,e)=>{e.d(t,{c:()=>c});var i=e(500),o=e.n(i),r=e(312),a=e.n(r)()(o());a.push([n.id,'html,body{\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: grey;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n#footer {\n    margin-bottom: 5px;\n    margin-top: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#footer>span{\n    font-style: italic;\n}\n\na{\n    margin-left: 5px;\n    color: black;\n    text-decoration: none;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #00b859;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n}\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n  \n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 34px;\n}\n  \n  .slider.round:before {\n    border-radius: 50%;\n}\n\n  .content_header {\n    margin-top: 0;\n    margin-bottom: auto;\n    min-width: 100vh;\n    min-height: 10vh;\n    display: flex;\n    justify-content: left;\n    gap: 20px;\n    align-items: center;\n}\n\n.search_form > form{\n\n    display: flex;\n    gap: 10px;\n\n}\n\n.switch_div {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    margin-right: 20px;\n    margin-left: auto;\n}\n\n.header {\n    \n    margin-left: 20px;\n    margin-right: auto;\n}\n\n.content_data{\n    position: relative;\n    padding: 30px;\n    flex: 1;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1.5fr 1fr;\n    justify-items: stretch;\n    align-items: center;\n    gap: 20px;\n    margin: 20px;\n    border: 1px #2196F3 solid;\n}\n\n#city_info,#weather_info{\n    padding: 2px;\n    border: 1px #00b859 solid;\n}\n\n#city_info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.location_info_item{\n}\n\n#city_name {\n    font-size: 45px;\n    font-weight: bolder;\n    margin-bottom: 2px;\n}\n\n#city_country {\n    font-size: 20px;\n    margin-bottom: 30px;\n}\n\n#current_day,#current_time {\n    font-size: 20px;\n}\n\n#weather_info{\n\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    align-items: center;\n    justify-items: center;\n\n}\n\n#condition_div {\n    padding: 20px;\n    grid-area: 1/1/2/2;\n}\n\n#temp_div{\n    grid-area: 1/2/2/3;\n    padding: 20px;\n}\n\n#bottom_div{\n    grid-area: 2/1/3/3;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-row: 1fr 1fr;\n    padding: 20px;\n}\n\n#city_condition{\n    font-size: 40px;\n}\n\n#city_temp{\n    font-size: 25px;\n}\n\n#city_tempFeel{\n    font-size: 15px;\n}\n\n#city_wind{\n    grid-area: 1/1/3/2;\n}\n\n#city_preci{\n    grid-area: 1/2/3/3;\n}\n\n#city_sunRise{\n    grid-area: 1/3/2/4;\n}\n\n#city_sunSet{\n    grid-area: 2/3/3/4;\n}\n\n#hourly_div{\n    grid-area: 2/1/3/3;\n    padding: 30px;\n    padding-left: 100px;\n    padding-right: 100px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 40px;\n    border: 1px solid rgb(129, 167, 47);\n\n}\n\n.hour_div {\n    flex: 1;\n    padding: 30px;\n    border: 1px solid red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.hour_div > .hour_condition {\n    font-size: 20px;\n}\n\n#search_in {\n    position: relative;\n}\n\n#search_div > .active {\n    z-index: 100;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    padding: 5px;\n}\n\n#search_Div > .non-active{\n    display: none;\n}\n\n.search_sugestion:hover {\n    background-color: antiquewhite;\n    cursor: pointer;\n}\n\n#loader {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 1;\n    width: 120px;\n    height: 120px;\n    margin: -76px 0 0 -76px;\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #3498db;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n  }\n  \n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n\n  #error_div {\n    position: absolute;\n    left: 42%;\n    top: 45%;\n    z-index: 1;\n    font-size: 34px;\n  }\n',""]);const c=a},312:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var r={},a=[],c=0;c<n.length;c++){var s=n[c],d=i.base?s[0]+i.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,i);i.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=e(r[a]);t[c].references--}for(var s=i(n,o),d=0;d<r.length;d++){var l=e(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},176:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},808:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},120:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},936:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return n[i](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{const n=function(n,t,e){const i=document.createElement(n);return i.setAttribute(t,e),i},t=function(t){let e=new Date;console.log(e);const i=n("div","id","city_info"),o=n("div","id","city_name");o.setAttribute("class","location_info_item");const r=n("div","id","city_country");r.setAttribute("class","location_info_item");const a=n("div","id","current_day");a.setAttribute("class","location_info_item");const c=n("div","id","current_time");return c.setAttribute("class","location_info_item"),o.textContent=t.location.name,r.textContent=t.location.country,a.textContent=e.toLocaleDateString("en-US",{timeZone:t.location.tz_id}),c.textContent=e.toLocaleTimeString("en-US",{timeZone:t.location.tz_id}),i.appendChild(o),i.appendChild(r),i.appendChild(a),i.appendChild(c),i},i=function(t,e){const i=n("div","id","weather_info"),o=n("div","id","condition_div"),r=n("div","id","temp_div"),a=n("div","id","bottom_div"),c=n("div","id","city_temp");c.setAttribute("class","weather_info_item");const s=n("div","id","city_wind");s.setAttribute("class","weather_info_item");const d=n("div","id","city_condition");d.setAttribute("class","weather_info_item");const l=n("div","id","city_tempFeel");l.setAttribute("class","weather_info_item");const p=n("div","id","city_preci");p.setAttribute("class","weather_info_item");const u=n("div","id","city_tempMax");u.setAttribute("class","weather_info_item");const f=n("div","id","city_tempMin");f.setAttribute("class","weather_info_item");const m=n("div","id","city_sunRise");m.setAttribute("class","weather_info_item");const h=n("div","id","city_sunSet");return h.setAttribute("class","weather_info_item"),d.textContent=t.current.condition.text,p.textContent=`Precip ${t.forecast.forecastday[0].day.daily_chance_of_rain}%`,m.textContent=`Sun Rise at ${t.forecast.forecastday[0].astro.sunrise}`,h.textContent=`Sun Set at ${t.forecast.forecastday[0].astro.sunset}`,e?(c.textContent=`Temp ${t.current.temp_c} C`,s.textContent=`Wind ${t.current.wind_kph} kph`,l.textContent=`Feels like ${t.current.feelslike_c} C`,u.textContent=`Max ${t.forecast.forecastday[0].day.maxtemp_c} C`,f.textContent=`Min ${t.forecast.forecastday[0].day.mintemp_c} C`):(c.textContent=`Temp ${t.current.temp_f} F`,s.textContent=`Wind ${t.current.wind_mph} mph`,l.textContent=`Feels like${t.current.feelslike_f} F`,u.textContent=`Max ${t.forecast.forecastday[0].day.maxtemp_f} F`,f.textContent=`Min ${t.forecast.forecastday[0].day.mintemp_f} F`),o.appendChild(d),o.appendChild(c),r.appendChild(u),r.appendChild(f),o.appendChild(l),a.appendChild(s),a.appendChild(p),a.appendChild(m),a.appendChild(h),i.appendChild(o),i.appendChild(r),i.appendChild(a),i},o=function(t,e){const i=n("div","id","hourly_div"),o=(new Date).getHours();console.log(o);let r,a,c=t.forecast.forecastday[0].hour,s=t.forecast.forecastday[1].hour,d=Number(o),l=Number(o);for(let t=0;t<6;t++){d>=24&&(d=0),0===d?(r=12,a="a.m"):24===d?(r=d-12,a="a.m"):d>12?(r=d-12,a="p.m"):12===d?(r=d,a="p.m"):d<12&&(r=d,a="a.m");const o=n("div","id",`${t}_hour_div`);o.classList.add("hour_div");const p=n("div","class","hour_condition"),u=n("div","class","hour_temp"),f=n("div","class","hour_time");if(l<=23){const n=c[l].condition.text,t=c[l].temp_c;console.log(`${r} ${a} ${n} ${t} j = ${d} k = ${l}`),p.textContent=n,f.textContent=`${r} ${a}`,u.textContent=e?`${c[l].temp_c} C`:`${c[l].temp_f} F`}else if(l>23){let n=l-24;const t=s[n].condition.text,i=s[n].temp_c;console.log(`${r} ${a} ${t} ${i} j = ${d} k = ${l}`),p.textContent=t,f.textContent=`${r} ${a}`,u.textContent=e?`${c[n].temp_c} C`:`${c[n].temp_f} F`}d=++d,l=++l,o.appendChild(f),o.appendChild(p),o.appendChild(u),i.appendChild(o)}return i},r=function(e,r){let a=!1;fetch(`https://api.weatherapi.com/v1/forecast.json?key=44452755b5a14a59aa3221559241002&q=${e}&days=3`,{mode:"cors"}).then((function(n){return a=!!n.ok,n.json()})).then((function(e){a?(console.log(e),function(n,e){const r=document.querySelector(".content_data");r.textContent="",function(n,e,r){n.appendChild(t(e)),n.appendChild(i(e,r)),n.appendChild(o(e,r))}(r,n,e)}(e,r)):(console.log(e.error.message),function(t){const e=document.querySelector(".content_data"),i=n("div","id","error_div");i.textContent="Invalid Input",e.textContent="",e.appendChild(i)}(e.error.message))}))},a=function(n){r("New York",n)};var c=e(596),s=e.n(c),d=e(520),l=e.n(d),p=e(176),u=e.n(p),f=e(120),m=e.n(f),h=e(808),x=e.n(h),v=e(936),y=e.n(v),g=e(548),_={};_.styleTagTransform=y(),_.setAttributes=m(),_.insert=u().bind(null,"head"),_.domAPI=l(),_.insertStyleElement=x(),s()(g.c,_),g.c&&g.c.locals&&g.c.locals,function(){document.getElementById("loader").style.display="none";let t=!0;a(t),function(t){const e=document.querySelector("#search_in");e.addEventListener("input",(()=>{let i=!1;fetch(`http://api.weatherapi.com/v1/search.json?key=44452755b5a14a59aa3221559241002&q=${e.value}`,{mode:"cors"}).then((function(n){return i=!!n.ok,n.json()})).then((function(e){i?(console.log(e),function(t,e){const i=document.querySelector("#search_extra");i.textContent="",t.forEach((t=>{const o=n("div","class","search_sugestion");o.textContent=`${t.name}, ${t.region}, ${t.country}`,o.addEventListener("click",(()=>{document.querySelector("#search_in").value=`${t.name}, ${t.country}`,r(`${t.name}, ${t.country}`,e),i.textContent="",i.classList.remove("active"),i.classList.add("non-active")})),i.classList.remove("non-active"),i.classList.add("active"),i.appendChild(o)}))}(e,t)):console.log(e.error.message)}))}))}(t),document.querySelector("#search_btn").addEventListener("click",(()=>{const n=document.querySelector("#search_in");console.log(n.value),r(n.value,t)})),document.querySelector(".unit_toggle").addEventListener("click",(()=>{const n=document.querySelector("#search_in");console.log(t),t=!1===t,""===n.value?a(t):r(n.value,t)}))}()})()})();