import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as h}from"./assets/vendor-BbSUbo7J.js";let n,a,u;const t={input:document.querySelector("#datetime-picker"),start:document.querySelector("button"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};t.start.addEventListener("click",f);t.start.setAttribute("disabled",!0);function f(){t.input.setAttribute("disabled",!0),u=setInterval(()=>{const e=Date.now(),s=n-e,o=p(s);t.days.textContent=r(o.days),t.hours.textContent=r(o.hours),t.minutes.textContent=r(o.minutes),t.seconds.textContent=r(o.seconds),s<1e3&&(clearInterval(u),t.input.removeAttribute("disabled"))},1e3)}const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=Date.now(),n=e[0],a>n&&(t.start.setAttribute("disabled",!0),h.error({title:"Error!",message:"Please choose a date in the future",position:"center"})),a<n&&t.start.removeAttribute("disabled")}};l(t.input,y);function p(e){const i=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:d,seconds:m}}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=timer.js.map
