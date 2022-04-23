!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function n(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{f(r.next(t))}catch(t){i(t)}}function c(t){try{f(r.throw(t))}catch(t){i(t)}}function f(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}f((r=r.apply(t,n||[])).next())}))}function e(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var r="application/font-woff",o="image/jpeg",i={woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o,jpeg:o,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function u(t){var n=function(t){var n=/\.([^./]*?)$/g.exec(t);return n?n[1]:""}(t).toLowerCase();return i[n]||""}function c(t){return-1!==t.search(/^(data:)/)}function f(t,n){return"data:"+n+";base64,"+t}var a,s=(a=0,function(){return a+=1,"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+a});function l(t){for(var n=[],e=0,r=t.length;e<r;e+=1)n.push(t[e]);return n}function h(t,n){var e=window.getComputedStyle(t).getPropertyValue(n);return parseFloat(e.replace("px",""))}function d(t){return t.toBlob?new Promise((function(n){return t.toBlob(n)})):new Promise((function(n){for(var e=window.atob(t.toDataURL().split(",")[1]),r=e.length,o=new Uint8Array(r),i=0;i<r;i+=1)o[i]=e.charCodeAt(i);n(new Blob([o],{type:"image/png"}))}))}function v(t){return new Promise((function(n,e){var r=new Image;r.onload=function(){return n(r)},r.onerror=e,r.crossOrigin="anonymous",r.decoding="sync",r.src=t}))}function p(t){return n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,"+t}))]}))}))}var g={};function m(t,n){var e=function(t){var n=t.replace(/\?.*/,"");return/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),n}(t);if(null!=g[e])return g[e];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());var r=window.fetch(t).then((function(t){return t.blob().then((function(n){return{blob:n,contentType:t.headers.get("Content-Type")||""}}))})).then((function(t){var n=t.blob,e=t.contentType;return new Promise((function(t,r){var o=new FileReader;o.onloadend=function(){return t({contentType:e,blob:o.result})},o.onerror=r,o.readAsDataURL(n)}))})).then((function(t){var n,e=t.blob;return{contentType:t.contentType,blob:(n=e,n.split(/,/)[1])}})).catch((function(e){var r="";if(n.imagePlaceholder){var o=n.imagePlaceholder.split(/,/);o&&o[1]&&(r=o[1])}var i="Failed to fetch resource: "+t;return e&&(i="string"==typeof e?e:e.message),i&&console.error(i),{blob:r,contentType:""}}));return g[e]=r,r}function w(t,n,e){var r="."+t+":"+n,o=e.cssText?function(t){var n=t.getPropertyValue("content");return t.cssText+" content: '"+n.replace(/'|"/g,"")+"';"}(e):function(t){return l(t).map((function(n){return n+": "+t.getPropertyValue(n)+(t.getPropertyPriority(n)?" !important":"")+";"})).join(" ")}(e);return document.createTextNode(r+"{"+o+"}")}function b(t,n,e){var r=window.getComputedStyle(t,e),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var i=s();try{n.className=n.className+" "+i}catch(t){return}var u=document.createElement("style");u.appendChild(w(i,e,r)),n.appendChild(u)}}function y(t){return n(this,void 0,void 0,(function(){var n;return e(this,(function(e){return"data:,"===(n=t.toDataURL())?[2,Promise.resolve(t.cloneNode(!1))]:[2,v(n)]}))}))}function P(t,r){return n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,Promise.resolve(t.poster).then((function(t){return m(t,r)})).then((function(n){return f(n.blob,u(t.poster)||n.contentType)})).then((function(t){return v(t)}))]}))}))}function S(t,r){return n(this,void 0,void 0,(function(){return e(this,(function(n){return r instanceof Element?[2,Promise.resolve().then((function(){return function(t,n){var e=window.getComputedStyle(t),r=n.style;r&&(e.cssText?r.cssText=e.cssText:l(e).forEach((function(t){r.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))})))}(t,r)})).then((function(){return function(t,n){b(t,n,":before"),b(t,n,":after")}(t,r)})).then((function(){return function(t,n){t instanceof HTMLTextAreaElement&&(n.innerHTML=t.value),t instanceof HTMLInputElement&&n.setAttribute("value",t.value)}(t,r)})).then((function(){return r}))]:[2,Promise.resolve(r)]}))}))}function x(t,r,o){return n(this,void 0,void 0,(function(){return e(this,(function(i){return o||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return n(this,void 0,void 0,(function(){return e(this,(function(n){return t instanceof HTMLCanvasElement?[2,y(t)]:t instanceof HTMLVideoElement&&t.poster?[2,P(t,r)]:[2,Promise.resolve(t.cloneNode(!1))]}))}))}(t,r)})).then((function(o){return function(t,r,o){var i;return n(this,void 0,void 0,(function(){var n;return e(this,(function(e){var u;return 0===(n=null!=(u=t).tagName&&"SLOT"===u.tagName.toUpperCase()&&t.assignedNodes?l(t.assignedNodes()):l((null!==(i=t.shadowRoot)&&void 0!==i?i:t).childNodes)).length||t instanceof HTMLVideoElement?[2,Promise.resolve(r)]:[2,n.reduce((function(t,n){return t.then((function(){return x(n,o)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve()).then((function(){return r}))]}))}))}(t,o,r)})).then((function(n){return S(t,n)}))]:[2,Promise.resolve(null)]}))}))}var E=/url\((['"]?)([^'"]+?)\1\)/g,T=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,C=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function R(t){var n=[];return t.replace(E,(function(t,e,r){return n.push(r),t})),n.filter((function(t){return!c(t)}))}function L(t,n,e,r,o){var i=e?function(t,n){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var e=document.implementation.createHTMLDocument(),r=e.createElement("base"),o=e.createElement("a");return e.head.appendChild(r),e.body.appendChild(o),n&&(r.href=n),o.href=t,o.href}(n,e):n;return Promise.resolve(i).then((function(t){return o?o(t):m(t,r)})).then((function(t){return"string"==typeof t?f(t,u(n)):f(t.blob,u(n)||t.contentType)})).then((function(e){return t.replace((r=n.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp("(url\\(['\"]?)("+r+")(['\"]?\\))","g")),"$1"+e+"$3");var r})).then((function(t){return t}),(function(){return i}))}function N(t){return-1!==t.search(E)}function k(t,r,o){return n(this,void 0,void 0,(function(){var n;return e(this,(function(e){return N(t)?(n=function(t,n){var e=n.preferredFontFormat;return e?t.replace(C,(function(t){for(;;){var n=T.exec(t)||[],r=n[0],o=n[2];if(!o)return"";if(o===e)return"src: "+r+";"}})):t}(t,o),[2,Promise.resolve(n).then(R).then((function(t){return t.reduce((function(t,n){return t.then((function(t){return L(t,n,r,o)}))}),Promise.resolve(n))}))]):[2,Promise.resolve(t)]}))}))}function A(t,r){return n(this,void 0,void 0,(function(){return e(this,(function(o){return t instanceof Element?[2,Promise.resolve(t).then((function(t){return function(t,r){var o;return n(this,void 0,void 0,(function(){var n;return e(this,(function(e){return(n=null===(o=t.style)||void 0===o?void 0:o.getPropertyValue("background"))?[2,Promise.resolve(n).then((function(t){return k(t,null,r)})).then((function(n){return t.style.setProperty("background",n,t.style.getPropertyPriority("background")),t}))]:[2,Promise.resolve(t)]}))}))}(t,r)})).then((function(t){return function(t,r){return n(this,void 0,void 0,(function(){var n;return e(this,(function(e){return t instanceof HTMLImageElement&&!c(t.src)||t instanceof SVGImageElement&&!c(t.href.baseVal)?(n=t instanceof HTMLImageElement?t.src:t.href.baseVal,[2,Promise.resolve(n).then((function(t){return m(t,r)})).then((function(t){return f(t.blob,u(n)||t.contentType)})).then((function(n){return new Promise((function(e,r){t.onload=e,t.onerror=r,t instanceof HTMLImageElement?(t.srcset="",t.src=n):t.href.baseVal=n}))})).then((function(){return t}),(function(){return t}))]):[2,Promise.resolve(t)]}))}))}(t,r)})).then((function(t){return function(t,r){return n(this,void 0,void 0,(function(){var n,o;return e(this,(function(e){return n=l(t.childNodes),o=n.map((function(t){return A(t,r)})),[2,Promise.all(o).then((function(){return t}))]}))}))}(t,r)}))]:[2,Promise.resolve(t)]}))}))}var I={};function M(t){var n=I[t];if(null!=n)return n;var e=window.fetch(t).then((function(n){return{url:t,cssText:n.text()}}));return I[t]=e,e}function D(t){return n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,t.cssText.then((function(n){var e=n,r=/url\(["']?([^"')]+)["']?\)/g,o=(e.match(/url\([^)]+\)/g)||[]).map((function(n){var o=n.replace(r,"$1");return o.startsWith("https://")||(o=new URL(o,t.url).href),window.fetch(o).then((function(t){return t.blob()})).then((function(t){return new Promise((function(r,o){var i=new FileReader;i.onloadend=function(){e=e.replace(n,"url("+i.result+")"),r([n,i.result])},i.onerror=o,i.readAsDataURL(t)}))}))}));return Promise.all(o).then((function(){return e}))}))]}))}))}function V(t){if(null==t)return[];for(var n=[],e=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");;){if(null===(u=r.exec(e)))break;n.push(u[0])}e=e.replace(r,"");for(var o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){var u;if(null===(u=o.exec(e))){if(null===(u=i.exec(e)))break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;n.push(u[0])}return n}function H(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return N(t.style.getPropertyValue("src"))}))}function U(t){return n(this,void 0,void 0,(function(){return e(this,(function(r){return[2,new Promise((function(n,e){null==t.ownerDocument&&e(new Error("Provided element is not within a Document")),n(l(t.ownerDocument.styleSheets))})).then((function(t){return function(t){return n(this,void 0,void 0,(function(){var n,r;return e(this,(function(e){return n=[],r=[],t.forEach((function(n){if("cssRules"in n)try{l(n.cssRules).forEach((function(t,e){if(t.type===CSSRule.IMPORT_RULE){var o=e+1,i=M(t.href).then((function(t){return t?D(t):""})).then((function(t){return V(t).forEach((function(t){try{n.insertRule(t,t.startsWith("@import")?o+=1:n.cssRules.length)}catch(n){console.error("Error inserting rule from remote css",{rule:t,error:n})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));r.push(i)}}))}catch(o){var e=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=n.href&&r.push(M(n.href).then((function(t){return t?D(t):""})).then((function(t){return V(t).forEach((function(t){e.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t.toString())}))),console.error("Error inlining remote css file",o.toString())}})),[2,Promise.all(r).then((function(){return t.forEach((function(t){if("cssRules"in t)try{l(t.cssRules).forEach((function(t){n.push(t)}))}catch(n){console.error("Error while reading CSS rules from "+t.href,n.toString())}})),n}))]}))}))}(t)})).then(H)]}))}))}function j(t,r){return n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,U(t).then((function(t){return Promise.all(t.map((function(t){var n=t.parentStyleSheet?t.parentStyleSheet.href:null;return k(t.cssText,n,r)})))})).then((function(t){return t.join("\n")}))]}))}))}function F(t,n){void 0===n&&(n={});var e=n.width||function(t){var n=h(t,"border-left-width"),e=h(t,"border-right-width");return t.clientWidth+n+e}(t),r=n.height||function(t){var n=h(t,"border-top-width"),e=h(t,"border-bottom-width");return t.clientHeight+n+e}(t);return{width:e,height:r}}function B(t,r){return void 0===r&&(r={}),n(this,void 0,void 0,(function(){var o,i,u;return e(this,(function(c){return o=F(t,r),i=o.width,u=o.height,[2,Promise.resolve(t).then((function(t){return x(t,r,!0)})).then((function(t){return function(t,r){return n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,(null!=r.fontEmbedCSS?Promise.resolve(r.fontEmbedCSS):j(t,r)).then((function(n){var e=document.createElement("style"),r=document.createTextNode(n);return e.appendChild(r),t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),t}))]}))}))}(t,r)})).then((function(t){return A(t,r)})).then((function(t){return function(t,n){var e=t.style;n.backgroundColor&&(e.backgroundColor=n.backgroundColor),n.width&&(e.width=n.width+"px"),n.height&&(e.height=n.height+"px");var r=n.style;return null!=r&&Object.keys(r).forEach((function(t){e[t]=r[t]})),t}(t,r)})).then((function(t){return function(t,r,o){return n(this,void 0,void 0,(function(){var n,i,u;return e(this,(function(e){return n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"svg"),u=document.createElementNS(n,"foreignObject"),i.setAttribute("width",""+r),i.setAttribute("height",""+o),i.setAttribute("viewBox","0 0 "+r+" "+o),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),i.appendChild(u),u.appendChild(t),[2,p(i)]}))}))}(t,i,u)}))]}))}))}var O=16384;function $(t,r){return void 0===r&&(r={}),n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,B(t,r).then(v).then((function(n){var e=document.createElement("canvas"),o=e.getContext("2d"),i=r.pixelRatio||function(){var t,n;try{n=process}catch(t){}var e=n&&n.env?n.env.devicePixelRatio:null;return e&&(t=parseInt(e,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),u=F(t,r),c=u.width,f=u.height,a=r.canvasWidth||c,s=r.canvasHeight||f;return e.width=a*i,e.height=s*i,r.skipAutoScale||function(t){(t.width>O||t.height>O)&&(t.width>O&&t.height>O?t.width>t.height?(t.height*=O/t.width,t.width=O):(t.width*=O/t.height,t.height=O):t.width>O?(t.height*=O/t.width,t.width=O):(t.width*=O/t.height,t.height=O))}(e),e.style.width=""+a,e.style.height=""+s,r.backgroundColor&&(o.fillStyle=r.backgroundColor,o.fillRect(0,0,e.width,e.height)),o.drawImage(n,0,0,e.width,e.height),e}))]}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,j(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,$(t,r).then(d)]}))}))},t.toCanvas=$,t.toJpeg=function(t,r){return void 0===r&&(r={}),n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,$(t,r).then((function(t){return t.toDataURL("image/jpeg",r.quality||1)}))]}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),n(this,void 0,void 0,(function(){var n,o,i;return e(this,(function(e){return n=F(t,r),o=n.width,i=n.height,[2,$(t,r).then((function(t){return t.getContext("2d").getImageData(0,0,o,i).data}))]}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),n(this,void 0,void 0,(function(){return e(this,(function(n){return[2,$(t,r).then((function(t){return t.toDataURL()}))]}))}))},t.toSvg=B,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=html-to-image.js.map