!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/auto-draw"]=t():e["live/auto-draw"]=t()}(self,(function(){return function(){"use strict";var e,t,n={156:function(e){e.exports=coreApis.observer},569:function(e){e.exports=coreApis.spinQuery}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return n[e](c,c.exports,r),c.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var c=Object.create(null);r.r(c);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},r.d(c,i),c},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){r.d(c,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"liveAutoDraw",displayName:"直播间自动抽奖",description:{"zh-CN":"在当前直播间有抽奖活动时, 自动点击抽奖按钮. 注意只适用于少量抽奖, 那种99+限量抽奖可能跟不上其他人的手速("},tags:[componentsTags.live],entry:async()=>{const{sq:e}=await Promise.resolve().then(r.t.bind(r,569,23)),{childListSubtree:t,attributes:n}=await Promise.resolve().then(r.t.bind(r,156,23)),o=await e((()=>dq(".chat-popups-section")),(e=>null!==e&&null===e.querySelector("chat-draw-area")));o?t(o,(()=>{console.log("draw button = ",dq(".chat-popups-section .draw>span:nth-child(3)"));const e=dq(".chat-popups-section .draw>span:nth-child(3)");if(null===e){const e=dq(".chat-popups-section .function-bar>span:nth-child(3)");if(null!==e){const[t]=n(e,(()=>{"none"!==e.style.display&&(t.disconnect(),e.click())}))}}null!==e&&e.click()})):console.warn("[自动领奖] 未能找到弹窗容器")},urlInclude:e.liveUrls,commitHash:"10382e9b89f6cebe24f0cc3753ae0cfcecdf166f"}}(),c=c.component}()}));