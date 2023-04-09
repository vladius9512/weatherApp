(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};async function t(e,t){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`),i=await n.json(),a=i.main.temp,d=i.main.temp_min;return{currentTemperature:a,currentFeelsLikeTemperature:i.main.feels_like,wind:i.wind.speed,clouds:i.clouds.all,cityName:i.name,todaysMinimum:d}}async function n(e,t){const n=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`),i=(await n.json()).list,a={};return i.forEach((e=>{const t=e.dt_txt.split(" ")[0];e.dt_txt.endsWith("00:00:00")?a[t]?a[t].nightTemp=e.main.temp:a[t]={nightTemp:e.main.temp}:e.dt_txt.endsWith("15:00:00")&&(a[t]?(a[t].dayTemp=e.main.temp,a[t].dayDescription=e.weather[0].description,a[t].icon=e.weather[0].icon,a[t].date=t):a[t]={dayTemp:e.main.temp,dayDescription:e.weather[0].description,icon:e.weather[0].icon,date:t})})),Object.values(a)}e.d({},{s:()=>N,d:()=>B});const i=document.getElementById("date"),a=document.getElementById("location"),d=document.getElementById("temp"),o=document.getElementById("real-feel"),c=document.getElementById("sky"),r=document.getElementById("wind"),s=document.getElementById("min-temp"),p=document.getElementById("forecast-container"),l=document.getElementById("favorites"),m=document.getElementById("theme"),u=document.body,h=document.getElementById("container");function y(){p.innerHTML=""}function g(e,t){const n=document.createElement(e);return t&&(n.innerText=t),n}function f(e,t,n,i,a){const d=g("div");d.className="day-container";const o=g("div");o.className="weekday";const c=g("div");c.className="forecastDayTemp";const r=g("div");r.className="forecastDayDescription";const s=g("p",e+"°C"),l=g("p",t+"°C"),m=g("img");m.src=`https://openweathermap.org/img/wn/${i}@2x.png`;const u=g("p",n),h=g("p",a);h.className="dayOfWeek";const y=g("div");y.className="sun-temp-container";const f=g("div");f.className="moon-temp-container";const w=g("img");w.className="sunFill",w.src="./images/sun.svg";const C=g("img");C.className="moonFill",C.src="./images/moon.svg",y.append(w,s),f.append(C,l),o.append(h,u),c.append(y,f),r.append(m),d.append(o,r,c),p.appendChild(d)}function w(e,t,n,i,p,l){const m=g("p",e),u=g("p",t+"°C"),h=g("p","Real Feel is "+n+"°C"),y=g("p",p),f=g("p",i+"m/s"),w=g("p",l+"°C");a.firstChild&&a.removeChild(a.firstChild),d.firstChild&&d.removeChild(d.firstChild),o.firstChild&&o.removeChild(o.firstChild),c.firstChild&&c.removeChild(c.firstChild),r.firstChild&&r.removeChild(r.firstChild),s.firstChild&&s.removeChild(s.firstChild),y.innerText=p<=20?"Sky looks bright":p<=60?"Little bit cloudy":"Cloudy day",r.firstChild&&r.removeChild(r.firstChild),a.appendChild(m),d.appendChild(u),o.appendChild(h),s.appendChild(w),c.appendChild(y),r.appendChild(f)}m.addEventListener("change",(()=>{u.style.backgroundImage=`url("../images/${m.value}.jpg")`,"dark"===m.value?h.style.backgroundColor="unset":window.innerWidth>830&&(h.style.backgroundColor="rgba(0, 0, 0, 0.2)")}));const C=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let T=[],b="cluj",v=26.769379,E=43.5899542;const k=document.getElementById("search"),D=document.getElementById("favorite");async function N(e,i){const a=await t(e,i),d=await n(e,i);w(a.cityName,a.currentTemperature,a.currentFeelsLikeTemperature,a.wind,a.clouds,a.todaysMinimum),y(),"nightTemp"in d[0]||(d[0].nightTemp=d[d.length-1].nightTemp,d.pop());let o=(new Date).getDay();d.forEach((e=>{o>6&&(o=0);const t=C[o];o++,f(e.dayTemp,e.nightTemp,e.dayDescription,e.icon,t)}))}function B(e){T=T.filter((t=>t.name!==e))}async function I(){const e=await async function(e,t){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`),i=await n.json();return{currentTemperature:i.main.temp,currentFeelsLikeTemperature:i.main.feels_like,wind:i.wind.speed,clouds:i.clouds.all,cityName:i.name}}(v,E),t=await async function(e,t){const n=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`),i=(await n.json()).list,a={};return i.forEach((e=>{const t=e.dt_txt.split(" ")[0];e.dt_txt.endsWith("00:00:00")?a[t]?a[t].nightTemp=e.main.temp:a[t]={nightTemp:e.main.temp}:e.dt_txt.endsWith("15:00:00")&&(a[t]?(a[t].dayTemp=e.main.temp,a[t].dayDescription=e.weather[0].description,a[t].icon=e.weather[0].icon,a[t].date=t):a[t]={dayTemp:e.main.temp,dayDescription:e.weather[0].description,icon:e.weather[0].icon,date:t})})),Object.values(a)}(v,E);!function(e,t,n,s,p){const l=new Date,m=g("p",l.getDate()+"/"+Number(l.getMonth()+1)+"/"+l.getFullYear()),u=g("p",e),h=g("p",t+"°C"),y=g("p","Real Feel is "+n+"°C"),f=g("p",p);f.innerText=p<=20?"Sky looks bright":p<=60?"Little bit cloudy":"Cloudy day";const w=g("p",s+" m/s");i.appendChild(m),a.appendChild(u),d.appendChild(h),o.appendChild(y),c.appendChild(f),r.appendChild(w)}(e.cityName,e.currentTemperature,e.currentFeelsLikeTemperature,e.wind,e.clouds),"nightTemp"in t[0]||(t[0].nightTemp=t[t.length-1].nightTemp,t.pop());let n=(new Date).getDay();t.forEach((e=>{n>6&&(n=0);const t=C[n];n++,f(e.dayTemp,e.nightTemp,e.dayDescription,e.icon,t)}))}k.addEventListener("keydown",(async e=>{if("Enter"===e.key){const e=k.value;b=k.value,k.value="";const i=await async function(e){const t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=5&appid=5b81f0d11c6be7a51dcf784becbd0145`),n=await t.json();return{latitude:n[0].lat,longitude:n[0].lon}}(e),a=i.latitude,d=i.longitude;v=i.latitude,E=i.longitude;const o=await t(a,d),c=await n(a,d);w(o.cityName,o.currentTemperature,o.currentFeelsLikeTemperature,o.wind,o.clouds,o.todaysMinimum),y(),"nightTemp"in c[0]||(c[0].nightTemp=c[c.length-1].nightTemp,c.pop());let r=(new Date).getDay();c.forEach((e=>{r>6&&(r=0);const t=C[r];r++,f(e.dayTemp,e.nightTemp,e.dayDescription,e.icon,t)}))}})),D.addEventListener("click",(()=>{void 0===T.find((e=>e.name===b))&&(T.push({name:b,latitude:v,longitude:E}),function(e,t,n){const i=g("div");i.className="button-container",i.id=e;const a=g("button");a.className="location-button";const d=g("button");d.className="removeBtn",a.innerText=e,i.append(a,d),a.id=e,l.appendChild(i),a.addEventListener("click",(()=>{N(t,n)})),d.addEventListener("click",(()=>{l.removeChild(l.children[e]),B(e)}))}(b,v,E))})),navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{v=e.coords.latitude,E=e.coords.longitude,I()}),(()=>{I()})):I()})();