!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",(function(){return u})),r.d(t,"Request",(function(){return b})),r.d(t,"Response",(function(){return m})),r.d(t,"DOMException",(function(){return w})),r.d(t,"fetch",(function(){return S}));var o={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(o.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(e){return e&&n.indexOf(Object.prototype.toString.call(e))>-1};function i(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function a(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function c(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function d(e){var t=new FileReader,r=h(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():o.arrayBuffer&&o.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||s(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var e=c(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var e,t,r,o=c(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=h(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=i(e),t=a(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[i(e)]},u.prototype.get=function(e){return e=i(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(i(e))},u.prototype.set=function(e,t){this.map[i(e)]=a(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),l(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),l(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),l(e)},o.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var p=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var r,o,n=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(r=t.method||this.method||"GET",o=r.toUpperCase(),p.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function v(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}})),t}function m(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},f.call(b.prototype),f.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var x=[301,302,303,307,308];m.redirect=function(e,t){if(-1===x.indexOf(t))throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})};var w=self.DOMException;try{new w}catch(e){(w=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function S(e,t){return new Promise((function(r,n){var s=new b(e,t);if(s.signal&&s.signal.aborted)return n(new w("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var e,t,o={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}})),t)};o.url="responseURL"in i?i.responseURL:o.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new m(n,o))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new w("Aborted","AbortError"))},i.open(s.method,s.url,!0),"include"===s.credentials?i.withCredentials=!0:"omit"===s.credentials&&(i.withCredentials=!1),"responseType"in i&&o.blob&&(i.responseType="blob"),s.headers.forEach((function(e,t){i.setRequestHeader(t,e)})),s.signal&&(s.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&s.signal.removeEventListener("abort",a)}),i.send(void 0===s._bodyInit?null:s._bodyInit)}))}S.polyfill=!0,self.fetch||(self.fetch=S,self.Headers=u,self.Request=b,self.Response=m)},function(e,t){class r{constructor(){this.x=0,this.y=0,this.direction="right"}}class o{constructor(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}}class n{constructor(){this.score=0,this.level=1}}const s=new class{constructor(){this.board=document.querySelectorAll("#board div"),this.furry=new r,this.coin=new o,this.result=new n,this.index=function(e,t){return e+10*t}}showFurry(){this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")}showCoin(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")}startGame(){document.querySelector("#score").style.display="block",document.querySelector("#board").style.display="block",document.querySelector("#start").style.display="none",this.idSetInterval=setInterval(()=>{this.moveFurry()},250)}levels(){const e=document.querySelectorAll("#board div");10===this.result.score&&(clearInterval(this.idSetInterval),this.idSetInterval=setInterval(()=>{this.moveFurry()},180),this.result.level++,document.querySelector("#score .level").innerText=this.result.level,document.querySelector("#over .level").innerText=this.result.level,e.forEach(e=>{e.style.boxShadow="0px 0px 5px 1px rgb(0, 4, 250)"})),20===this.result.score&&(clearInterval(this.idSetInterval),this.idSetInterval=setInterval(()=>{this.moveFurry()},130),this.result.level++,document.querySelector("#score .level").innerText=this.result.level,document.querySelector("#over .level").innerText=this.result.level,e.forEach(e=>{e.style.boxShadow="0px 0px 5px 1px rgb(0, 204, 255)"})),30===this.result.score&&(clearInterval(this.idSetInterval),this.idSetInterval=setInterval(()=>{this.moveFurry()},110),this.result.level++,document.querySelector("#score .level").innerText=this.result.level,document.querySelector("#over .level").innerText=this.result.level,e.forEach(e=>{e.style.boxShadow="0px 0px 5px 1px rgb(255, 5, 5)"})),40===this.result.score&&(clearInterval(this.idSetInterval),this.idSetInterval=setInterval(()=>{this.moveFurry()},100),this.result.level++,document.querySelector("#score .level").innerText=this.result.level,document.querySelector("#over .level").innerText=this.result.level,e.forEach(e=>{e.style.boxShadow="0px 0px 5px 1px rgb(13, 255, 5)"})),50===this.result.score&&(clearInterval(this.idSetInterval),this.idSetInterval=setInterval(()=>{this.moveFurry()},80),this.result.level++,document.querySelector("#score .level").innerText=this.result.level,document.querySelector("#over .level").innerText=this.result.level,e.forEach(e=>{e.style.boxShadow="0px 0px 5px 1px rgb(247, 5, 255)"}))}moveFurry(){"right"===this.furry.direction?this.furry.x++:"left"===this.furry.direction?this.furry.x--:"up"===this.furry.direction?this.furry.y--:"down"===this.furry.direction&&this.furry.y++,this.gameOver(),this.hideVisibleFurry(),this.showFurry(),this.checkCoinCollision()}hideVisibleFurry(){this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9?this.furry=new r:document.querySelector(".furry").classList.remove("furry")}turnFurry(e){switch(e.which){case 37:this.furry.direction="left";break;case 39:this.furry.direction="right";break;case 38:this.furry.direction="up";break;case 40:this.furry.direction="down"}}checkCoinCollision(){this.coin.x===this.furry.x&&this.coin.y===this.furry.y&&(document.querySelector(".coin").classList.remove("coin"),this.result.score++,document.querySelector("#score .score").innerText=this.result.score,document.querySelector("#over .score").innerText=this.result.score,document.querySelector("#score .level").innerText=this.result.level,document.querySelector("#over .level").innerText=this.result.level,this.coin=new o,this.showCoin(),this.levels())}gameOver(){if(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)return clearInterval(this.idSetInterval),this.hideVisibleFurry(),document.querySelector("#board").style.display="none",document.querySelector("#score").style.display="none",void(document.querySelector("#over").style.display="flex")}gameReload(){document.querySelectorAll("#board div").forEach(e=>{e.style.boxShadow="1px 1px 5px 1px rgb(255, 188, 5)"}),document.querySelector("#board").style.display="block",document.querySelector("#score").style.display="flex",document.querySelector("#over").style.display="none",this.result=new n,this.furry=new r,document.querySelector("#score .score").innerText=this.result.score,document.querySelector("#over .score").innerText=this.result.score,document.querySelector("#score .level").innerText=this.result.level,document.querySelector("#over .level").innerText=this.result.level,this.showFurry(),this.showCoin(),this.startGame()}};document.querySelector(".start").addEventListener("click",(function(){s.showFurry(),s.showCoin(),s.startGame()})),document.addEventListener("keydown",(function(e){s.turnFurry(e)})),document.querySelector(".end").addEventListener("click",(function(){s.gameReload()}))}]);