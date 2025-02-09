import{d as hy,r as Ue,a as fd,s as dy,o as pd,b as yA,c as mt,e as Q,w as wn,F as fy,f as py,v as $r,t as gc,u as Kt,g as _t,n as Do,h as co,i as my,j as _y,k as km,l as Nm}from"./index-BfZHO9Ru.js";import{R as IA}from"./index-DE2vYT7c.js";var Dm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(n,e){if(!n)throw ms(e)},ms=function(n){return new Error("Firebase Database ("+gy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(t[d],t[f],t[m],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yy(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new wA;const m=s<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const R=u<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iy=function(n){const e=yy(n);return md.encodeByteArray(e,!0)},Nc=function(n){return Iy(n).replace(/\./g,"")},Dc=function(n){try{return md.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(n){return xo(void 0,n)}function xo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!TA(t)||(n[t]=xo(n[t],e[t]));return n}function TA(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=()=>vy().__FIREBASE_DEFAULTS__,bA=()=>{if(typeof process>"u"||typeof Dm>"u")return;const n=Dm.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},RA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Dc(n[1]);return e&&JSON.parse(e)},_d=()=>{try{return AA()||bA()||RA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wy=()=>{var n;return(n=_d())===null||n===void 0?void 0:n.config},SA=n=>{var e;return(e=_d())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nc(JSON.stringify(t)),Nc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function yd(){var n;const e=(n=_d())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CA(){return typeof window<"u"||Ty()}function Ty(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function PA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ay(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function by(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kA(){return gy.NODE_ADMIN===!0}function Ry(){return!yd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oo(){try{return typeof indexedDB=="object"}catch{return!1}}function NA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="FirebaseError";class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=DA,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yt(i,a,r)}}function xA(n,e){return n.replace(OA,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){return JSON.parse(n)}function Be(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Vo(Dc(s[0])||""),t=Vo(Dc(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},VA=function(n){const e=Sy(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},LA=function(n){const e=Sy(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Xr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function xc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Oc(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Lo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(xm(s)&&xm(o)){if(!Lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function xm(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)r[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):f<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+u+l+d+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Cy(n,e){const t=new FA(n,e);return t.subscribe.bind(t)}class FA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");UA(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Uu),i.error===void 0&&(i.error=Uu),i.complete===void 0&&(i.complete=Uu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uu(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(n,e,t,r){let i;if(r<e?i="at least "+e:r>t&&(i=t===0?"none":"no more than "+t),i){const s=n+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function St(n,e){return`${n} failed: ${e} argument `}function Ge(n,e,t,r){if(!(r&&!t)&&typeof t!="function")throw new Error(St(n,e)+"must be a valid function.")}function Om(n,e,t,r){if(t&&(typeof t!="object"||t===null))throw new Error(St(n,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,V(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ml=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n){return n&&n._delegate?n._delegate:n}class Ct{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Et;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WA(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qA(n){return n===Lr?void 0:n}function WA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=[];var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const Py={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},jA=ne.INFO,$A={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},GA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=$A[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _s{constructor(e){this.name=e,this._logLevel=jA,this._logHandler=GA,this._userLogHandler=null,vd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Py[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}function zA(n){vd.forEach(e=>{e.setLogLevel(n)})}function KA(n,e){for(const t of vd){let r=null;e&&e.level&&(r=Py[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&n({level:ne[s].toLowerCase(),message:a,args:o,type:i.name})}}}const HA=(n,e)=>e.some(t=>n instanceof t);let Vm,Lm;function QA(){return Vm||(Vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YA(){return Lm||(Lm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ky=new WeakMap,uh=new WeakMap,Ny=new WeakMap,Bu=new WeakMap,wd=new WeakMap;function JA(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(nr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ky.set(t,n)}).catch(()=>{}),wd.set(e,n),e}function XA(n){if(uh.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});uh.set(n,e)}let hh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ny.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ZA(n){hh=n(hh)}function eb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qu(this),e,...t);return Ny.set(r,e.sort?e.sort():[e]),nr(r)}:YA().includes(n)?function(...e){return n.apply(qu(this),e),nr(ky.get(this))}:function(...e){return nr(n.apply(qu(this),e))}}function tb(n){return typeof n=="function"?eb(n):(n instanceof IDBTransaction&&XA(n),HA(n,QA())?new Proxy(n,hh):n)}function nr(n){if(n instanceof IDBRequest)return JA(n);if(Bu.has(n))return Bu.get(n);const e=tb(n);return e!==n&&(Bu.set(n,e),wd.set(e,n)),e}const qu=n=>wd.get(n);function nb(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rb=["get","getKey","getAll","getAllKeys","count"],ib=["put","add","delete","clear"],Wu=new Map;function Mm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wu.get(e))return Wu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ib.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rb.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&l.done]))[0]};return Wu.set(e,s),s}ZA(n=>({...n,get:(e,t,r)=>Mm(e,t)||n.get(e,t,r),has:(e,t)=>!!Mm(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ob(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ob(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",dh="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new _s("@firebase/app"),ab="@firebase/app-compat",cb="@firebase/analytics-compat",lb="@firebase/analytics",ub="@firebase/app-check-compat",hb="@firebase/app-check",db="@firebase/auth",fb="@firebase/auth-compat",pb="@firebase/database",mb="@firebase/data-connect",_b="@firebase/database-compat",gb="@firebase/functions",yb="@firebase/functions-compat",Ib="@firebase/installations",vb="@firebase/installations-compat",wb="@firebase/messaging",Eb="@firebase/messaging-compat",Tb="@firebase/performance",Ab="@firebase/performance-compat",bb="@firebase/remote-config",Rb="@firebase/remote-config-compat",Sb="@firebase/storage",Cb="@firebase/storage-compat",Pb="@firebase/firestore",kb="@firebase/vertexai",Nb="@firebase/firestore-compat",Db="firebase",xb="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]",Ob={[Vc]:"fire-core",[ab]:"fire-core-compat",[lb]:"fire-analytics",[cb]:"fire-analytics-compat",[hb]:"fire-app-check",[ub]:"fire-app-check-compat",[db]:"fire-auth",[fb]:"fire-auth-compat",[pb]:"fire-rtdb",[mb]:"fire-data-connect",[_b]:"fire-rtdb-compat",[gb]:"fire-fn",[yb]:"fire-fn-compat",[Ib]:"fire-iid",[vb]:"fire-iid-compat",[wb]:"fire-fcm",[Eb]:"fire-fcm-compat",[Tb]:"fire-perf",[Ab]:"fire-perf-compat",[bb]:"fire-rc",[Rb]:"fire-rc-compat",[Sb]:"fire-gcs",[Cb]:"fire-gcs-compat",[Pb]:"fire-fst",[Nb]:"fire-fst-compat",[kb]:"fire-vertex","fire-js":"fire-js",[Db]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Map,Ki=new Map,Hi=new Map;function Mo(n,e){try{n.container.addComponent(e)}catch(t){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Dy(n,e){n.container.addOrOverwriteComponent(e)}function Pn(n){const e=n.name;if(Hi.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,n);for(const t of hr.values())Mo(t,n);for(const t of Ki.values())Mo(t,n);return!0}function xy(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vb(n,e,t=ur){xy(n,e).clearInstance(t)}function Oy(n){return n.options!==void 0}function ke(n){return n.settings!==void 0}function Lb(){Hi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new fi("app","Firebase",Mb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vy=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb extends Vy{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Ot(Vc,dh,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Td(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Wt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=xb;function Ed(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ur,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(t||(t=wy()),!t)throw Wt.create("no-options");const s=hr.get(i);if(s){if(Lo(t,s.options)&&Lo(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}const o=new Id(i);for(const l of Hi.values())o.addComponent(l);const a=new Vy(t,r,o);return hr.set(i,a),a}function Ub(n,e){if(CA()&&!Ty())throw Wt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Oy(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=u=>[...u].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Wt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Ki.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new Id(s);for(const u of Hi.values())a.addComponent(u);const l=new Fb(t,e,s,a);return Ki.set(s,l),l}function Bb(n=ur){const e=hr.get(n);if(!e&&n===ur&&wy())return Ed();if(!e)throw Wt.create("no-app",{appName:n});return e}function qb(){return Array.from(hr.values())}async function Td(n){let e=!1;const t=n.name;hr.has(t)?(e=!0,hr.delete(t)):Ki.has(t)&&n.decRefCount()<=0&&(Ki.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Ot(n,e,t){var r;let i=(r=Ob[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}Pn(new Ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Ly(n,e){if(n!==null&&typeof n!="function")throw Wt.create("invalid-log-argument");KA(n,e)}function My(n){zA(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="firebase-heartbeat-database",jb=1,Fo="firebase-heartbeat-store";let ju=null;function Fy(){return ju||(ju=nb(Wb,jb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fo)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),ju}async function $b(n){try{const t=(await Fy()).transaction(Fo),r=await t.objectStore(Fo).get(Uy(n));return await t.done,r}catch(e){if(e instanceof yt)Cn.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(t.message)}}}async function Fm(n,e){try{const r=(await Fy()).transaction(Fo,"readwrite");await r.objectStore(Fo).put(e,Uy(n)),await r.done}catch(t){if(t instanceof yt)Cn.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(r.message)}}}function Uy(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=1024,zb=30*24*60*60*1e3;class Kb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Um();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=zb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Um(),{heartbeatsToSend:r,unsentEntries:i}=Hb(this._heartbeatsCache.heartbeats),s=Nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Cn.warn(t),""}}}function Um(){return new Date().toISOString().substring(0,10)}function Hb(n,e=Gb){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bm(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Bm(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Qb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oo()?NA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $b(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bm(n){return Nc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(n){Pn(new Ct("platform-logger",e=>new sb(e),"PRIVATE")),Pn(new Ct("heartbeat",e=>new Kb(e),"PRIVATE")),Ot(Vc,dh,n),Ot(Vc,dh,"esm2017"),Ot("fire-js","")}Yb("");const Jb=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:yt,SDK_VERSION:Vn,_DEFAULT_ENTRY_NAME:ur,_addComponent:Mo,_addOrOverwriteComponent:Dy,_apps:hr,_clearComponents:Lb,_components:Hi,_getProvider:xy,_isFirebaseApp:Oy,_isFirebaseServerApp:ke,_registerComponent:Pn,_removeServiceInstance:Vb,_serverApps:Ki,deleteApp:Td,getApp:Bb,getApps:qb,initializeApp:Ed,initializeServerApp:Ub,onLog:Ly,registerVersion:Ot,setLogLevel:My},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,t){this._delegate=e,this.firebase=t,Mo(e,new Ct("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Td(this._delegate)))}_getService(e,t=ur){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=ur){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Mo(this._delegate,e)}_addOrOverwriteComponent(e){Dy(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},qm=new fi("app-compat","Firebase",Zb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Ot,setLogLevel:My,onLog:Ly,apps:null,SDK_VERSION:Vn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Jb}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||ur,!Vt(e,u))throw qm.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,d={}){const f=Ed(u,d);if(Vt(e,f.name))return e[f.name];const m=new n(f,t);return e[f.name]=m,m}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,f=d.replace("-compat","");if(Pn(u)&&u.type==="PUBLIC"){const m=(y=i())=>{if(typeof y[f]!="function")throw qm.create("invalid-app-argument",{appName:d});return y[f]()};u.serviceProps!==void 0&&xo(m,u.serviceProps),t[f]=m,n.prototype[f]=function(...y){return this._getService.bind(this,d).apply(this,u.multipleInstances?y:[])}}return u.type==="PUBLIC"?t[f]:null}function l(u,d){return d==="serverAuth"?null:d}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){const n=eR(Xb);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:By,extendNamespace:e,createSubscribe:Cy,ErrorFactory:fi,deepExtend:xo});function e(t){xo(n,t)}return n}const tR=By();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new _s("@firebase/app-compat"),nR="@firebase/app-compat",rR="0.2.48";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(n){Ot(nR,rR,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=vy();if(n.firebase!==void 0){Wm.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Wm.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Ye=tR;iR();var sR="firebase",oR="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.registerVersion(sR,oR,"app-compat");function Ad(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Qs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Si={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function qy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cR=aR,lR=qy,Wy=new fi("auth","Firebase",qy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new _s("@firebase/auth");function uR(n,...e){Lc.logLevel<=ne.WARN&&Lc.warn(`Auth (${Vn}): ${n}`,...e)}function yc(n,...e){Lc.logLevel<=ne.ERROR&&Lc.error(`Auth (${Vn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n,...e){throw Rd(n,...e)}function qe(n,...e){return Rd(n,...e)}function bd(n,e,t){const r=Object.assign(Object.assign({},lR()),{[e]:t});return new fi("auth","Firebase",r).create(e,{appName:n.name})}function Qe(n){return bd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gs(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&nt(n,"argument-error"),bd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Wy.create(n,...e)}function O(n,e,...t){if(!n)throw Rd(e,...t)}function sn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yc(e),new Error(e)}function Yt(n,e){n||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Sd(){return jm()==="http:"||jm()==="https:"}function jm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sd()||Ay()||"connection"in navigator)?navigator.onLine:!0}function dR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yt(t>e,"Short delay should be less than long delay!"),this.isMobile=gd()||pl()}get(){return hR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n,e){Yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new da(3e4,6e4);function De(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xe(n,e,t,r,i={}){return $y(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pi(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},s);return PA()||(u.referrerPolicy="no-referrer"),jy.fetch()(Gy(n,n.config.apiHost,t,a),u)})}async function $y(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},fR),e);try{const i=new _R(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw uo(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw uo(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw uo(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bd(n,d,u);nt(n,d)}}catch(i){if(i instanceof yt)throw i;nt(n,"network-request-failed",{message:String(i)})}}async function Ln(n,e,t,r,i={}){const s=await xe(n,e,t,r,i);return"mfaPendingCredential"in s&&nt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Gy(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Cd(n.config,i):`${n.config.apiScheme}://${i}`}function mR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _R{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),pR.get())})}}function uo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=qe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(n){return n!==void 0&&n.getResponse!==void 0}function Gm(n){return n!==void 0&&n.enterprise!==void 0}class zy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(n){return(await xe(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ky(n,e){return xe(n,"GET","/v2/recaptchaConfig",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(n,e){return xe(n,"POST","/v1/accounts:delete",e)}async function IR(n,e){return xe(n,"POST","/v1/accounts:update",e)}async function Hy(n,e){return xe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vR(n,e=!1){const t=j(n),r=await t.getIdToken(e),i=_l(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:go($u(i.auth_time)),issuedAtTime:go($u(i.iat)),expirationTime:go($u(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $u(n){return Number(n)*1e3}function _l(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return yc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dc(t);return i?JSON.parse(i):(yc("Failed to decode base64 JWT payload"),null)}catch(i){return yc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zm(n){const e=_l(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof yt&&wR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(n){var e;const t=n.auth,r=await n.getIdToken(),i=await kn(n,Hy(t,{idToken:r}));O(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qy(s.providerUserInfo):[],a=AR(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function TR(n){const e=j(n);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AR(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qy(n){return n.map(e=>{var{providerId:t}=e,r=Ad(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(n,e){const t=await $y(n,{},async()=>{const r=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Gy(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function RR(n,e){return xe(n,"POST","/v2/accounts:revokeToken",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=zm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await bR(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ui;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ER(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await kn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vR(this,e)}reload(){return TR(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ke(this.auth.app))return Promise.reject(Qe(this.auth));const e=await this.getIdToken();return await kn(this,yR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,u,d;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(a=t.tenantId)!==null&&a!==void 0?a:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,L=(u=t.createdAt)!==null&&u!==void 0?u:void 0,B=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:W,emailVerified:te,isAnonymous:J,providerData:z,stsTokenManager:w}=t;O(W&&w,e,"internal-error");const g=Ui.fromJSON(this.name,w);O(typeof W=="string",e,"internal-error"),zn(f,e.name),zn(m,e.name),O(typeof te=="boolean",e,"internal-error"),O(typeof J=="boolean",e,"internal-error"),zn(y,e.name),zn(R,e.name),zn(N,e.name),zn(P,e.name),zn(L,e.name),zn(B,e.name);const v=new En({uid:W,auth:e,email:m,emailVerified:te,displayName:f,isAnonymous:J,photoURL:R,phoneNumber:y,tenantId:N,stsTokenManager:g,createdAt:L,lastLoginAt:B});return z&&Array.isArray(z)&&(v.providerData=z.map(E=>Object.assign({},E))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ui;i.updateFromServerResponse(t);const s=new En({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bo(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ui;a.updateFromIdToken(r);const l=new En({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Map;function xt(n){Yt(n instanceof Function,"Expected a class definition");let e=Km.get(n);return e?(Yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Km.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yy.type="NONE";const Qi=Yy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n,e,t){return`firebase:${n}:${e}:${t}`}class Bi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Bi(xt(Qi),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||xt(Qi);const o=Qr(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){const f=En._fromJSON(e,d);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tI(e))return"Blackberry";if(nI(e))return"Webos";if(Xy(e))return"Safari";if((e.includes("chrome/")||Zy(e))&&!e.includes("edge/"))return"Chrome";if(fa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jy(n=Re()){return/firefox\//i.test(n)}function Xy(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zy(n=Re()){return/crios\//i.test(n)}function eI(n=Re()){return/iemobile/i.test(n)}function fa(n=Re()){return/android/i.test(n)}function tI(n=Re()){return/blackberry/i.test(n)}function nI(n=Re()){return/webos/i.test(n)}function pa(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function SR(n=Re()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function CR(n=Re()){var e;return pa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PR(){return by()&&document.documentMode===10}function rI(n=Re()){return pa(n)||fa(n)||nI(n)||tI(n)||/windows phone/i.test(n)||eI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(n,e=[]){let t;switch(n){case"Browser":t=Hm(Re());break;case"Worker":t=`${Hm(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(n,e={}){return xe(n,"GET","/v2/passwordPolicy",De(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=6;class xR{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:DR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qm(this),this.idTokenSubscription=new Qm(this),this.beforeStateQueue=new kR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hy(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ke(this.app))return Promise.reject(Qe(this));const t=e?j(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ke(this.app)?Promise.reject(Qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ke(this.app)?Promise.reject(Qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NR(this),t=new xR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await RR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&uR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Se(n){return j(n)}class Qm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cy(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VR(n){ma=n}function Pd(n){return ma.loadJS(n)}function LR(){return ma.recaptchaV2Script}function MR(){return ma.recaptchaEnterpriseScript}function FR(){return ma.gapiScript}function sI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=500,BR=6e4,ac=1e12;class qR{constructor(e){this.auth=e,this.counter=ac,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new $R(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||ac;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||ac;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||ac;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class WR{constructor(){this.enterprise=new jR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $R{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;O(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=GR(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},BR)},UR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function GR(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const zR="recaptcha-enterprise",yo="NO_RECAPTCHA";class oI{constructor(e){this.type=zR,this.auth=Se(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ky(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zy(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Gm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(yo)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WR().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Gm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=MR();l.length!==0&&(l+=a),Pd(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ys(n,e,t,r=!1,i=!1){const s=new oI(n);let o;if(i)o=yo;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function rr(n,e,t,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ys(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ys(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Ys(n,e,t);return r(n,a).catch(async l=>{var u;if(((u=n._getRecaptchaConfig())===null||u===void 0?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const d=await Ys(n,e,t,!1,!0);return r(n,d)}return Promise.reject(l)})}else{const a=await Ys(n,e,t,!1,!0);return r(n,a)}else return Promise.reject(i+" provider is not supported.")}async function KR(n){const e=Se(n),t=await Ky(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new zy(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new oI(e).verify()}function HR(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QR(n,e,t){const r=Se(n);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=aI(e),{host:o,port:a}=YR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||JR()}function aI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function YR(n){const e=aI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ym(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ym(o)}}}function Ym(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function JR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,t){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(n,e){return xe(n,"POST","/v1/accounts:resetPassword",De(n,e))}async function XR(n,e){return xe(n,"POST","/v1/accounts:update",e)}async function ZR(n,e){return xe(n,"POST","/v1/accounts:signUp",e)}async function eS(n,e){return xe(n,"POST","/v1/accounts:update",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(n,e){return Ln(n,"POST","/v1/accounts:signInWithPassword",De(n,e))}async function gl(n,e){return xe(n,"POST","/v1/accounts:sendOobCode",De(n,e))}async function nS(n,e){return gl(n,e)}async function rS(n,e){return gl(n,e)}async function iS(n,e){return gl(n,e)}async function sS(n,e){return gl(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(n,e){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",De(n,e))}async function aS(n,e){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends ys{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new qo(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new qo(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rr(e,t,"signInWithPassword",tS,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oS(e,{email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rr(e,r,"signUpPassword",ZR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return aS(e,{idToken:t,email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(n,e){return Ln(n,"POST","/v1/accounts:signInWithIdp",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="http://localhost";class hn extends ys{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ad(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}buildRequest(){const e={requestUri:cS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(n,e){return xe(n,"POST","/v1/accounts:sendVerificationCode",De(n,e))}async function lS(n,e){return Ln(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,e))}async function uS(n,e){const t=await Ln(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,e));if(t.temporaryProof)throw uo(n,"account-exists-with-different-credential",t);return t}const hS={USER_NOT_FOUND:"user-not-found"};async function dS(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ln(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,t),hS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends ys{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Yr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Yr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return lS(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return uS(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return dS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Yr({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pS(n){const e=Fi(lo(n)).link,t=e?Fi(lo(e)).deep_link_id:null,r=Fi(lo(n)).deep_link_id;return(r?Fi(lo(r)).link:null)||r||t||e||n}class yl{constructor(e){var t,r,i,s,o,a;const l=Fi(lo(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=fS((i=l.mode)!==null&&i!==void 0?i:null);O(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=pS(e);try{return new yl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.providerId=br.PROVIDER_ID}static credential(e,t){return qo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=yl.parseLink(t);return O(r,"argument-error"),qo._fromEmailAndCode(e,r.code,r.tenantId)}}br.PROVIDER_ID="password";br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Mn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class qi extends Is{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return O("providerId"in t&&"signInMethod"in t,"argument-error"),hn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),hn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return qi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return qi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new qi(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Is{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Is{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="http://localhost";class Yi extends ys{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Yi(r,s)}static _create(e,t){return new Yi(e,t)}buildRequest(){return{requestUri:mS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="saml.";class Mc extends Mn{constructor(e){O(e.startsWith(_S),"argument-error"),super(e)}static credentialFromResult(e){return Mc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Mc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Yi.fromJSON(e);return O(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Yi._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Is{constructor(){super("twitter.com")}static credential(e,t){return hn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rn.credential(t,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(n,e){return Ln(n,"POST","/v1/accounts:signUp",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=Xm(r);return new jt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Xm(r);return new jt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Xm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(n){var e;if(ke(n.app))return Promise.reject(Qe(n));const t=Se(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new jt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await lI(t,{returnSecureToken:!0}),i=await jt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends yt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Fc(e,t,r,i)}}function uI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fc._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(n,e){const t=j(n);await Il(!0,t,e);const{providerUserInfo:r}=await IR(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=hI(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function kd(n,e,t=!1){const r=await kn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jt._forOperation(n,"link",r)}async function Il(n,e,t){await Bo(e);const r=hI(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";O(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(n,e,t=!1){const{auth:r}=n;if(ke(r.app))return Promise.reject(Qe(r));const i="reauthenticate";try{const s=await kn(n,uI(r,i,e,n),t);O(s.idToken,r,"internal-error");const o=_l(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(n.uid===a,r,"user-mismatch"),jt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(n,e,t=!1){if(ke(n.app))return Promise.reject(Qe(n));const r="signIn",i=await uI(n,r,e),s=await jt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function vl(n,e){return fI(Se(n),e)}async function pI(n,e){const t=j(n);return await Il(!1,t,e.providerId),kd(t,e)}async function mI(n,e){return dI(j(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(n,e){return Ln(n,"POST","/v1/accounts:signInWithCustomToken",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(n,e){if(ke(n.app))return Promise.reject(Qe(n));const t=Se(n),r=await IS(t,{token:e,returnSecureToken:!0}),i=await jt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Nd._fromServerResponse(e,t):"totpInfo"in t?Dd._fromServerResponse(e,t):nt(e,"internal-error")}}class Nd extends _a{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Nd(t)}}class Dd extends _a{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Dd(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e,t){var r;O(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),O(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(O(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(O(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(n){const e=Se(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wS(n,e,t){const r=Se(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&wl(r,i,t),await rr(r,i,"getOobCode",rS,"EMAIL_PASSWORD_PROVIDER")}async function ES(n,e,t){await cI(j(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xd(n),r})}async function TS(n,e){await eS(j(n),{oobCode:e})}async function _I(n,e){const t=j(n),r=await cI(t,{oobCode:e}),i=r.requestType;switch(O(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,t,"internal-error");default:O(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=_a._fromServerResponse(Se(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function AS(n,e){const{data:t}=await _I(j(n),e);return t.email}async function bS(n,e,t){if(ke(n.app))return Promise.reject(Qe(n));const r=Se(n),o=await rr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lI,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&xd(n),l}),a=await jt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function RS(n,e,t){return ke(n.app)?Promise.reject(Qe(n)):vl(j(n),br.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xd(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(n,e,t){const r=Se(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){O(a.handleCodeInApp,r,"argument-error"),a&&wl(r,o,a)}s(i,t),await rr(r,i,"getOobCode",iS,"EMAIL_PASSWORD_PROVIDER")}function CS(n,e){const t=yl.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function PS(n,e,t){if(ke(n.app))return Promise.reject(Qe(n));const r=j(n),i=br.credentialWithLink(e,t||Uo());return O(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),vl(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(n,e){return xe(n,"POST","/v1/accounts:createAuthUri",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(n,e){const t=Sd()?Uo():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await kS(j(n),r);return i||[]}async function DS(n,e){const t=j(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&wl(t.auth,i,e);const{email:s}=await nS(t.auth,i);s!==n.email&&await n.reload()}async function xS(n,e,t){const r=j(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&wl(r.auth,s,t);const{email:o}=await sS(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(n,e){return xe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=j(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await kn(r,OS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function LS(n,e){const t=j(n);return ke(t.auth.app)?Promise.reject(Qe(t.auth)):gI(t,e,null)}function MS(n,e){return gI(j(n),null,e)}async function gI(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await kn(n,XR(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=_l(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Wi(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new US(s,i);case"github.com":return new BS(s,i);case"google.com":return new qS(s,i);case"twitter.com":return new WS(s,i,n.screenName||null);case"custom":case"anonymous":return new Wi(s,null);default:return new Wi(s,r,i)}}class Wi{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class yI extends Wi{constructor(e,t,r,i){super(e,t,r),this.username=i}}class US extends Wi{constructor(e,t){super(e,"facebook.com",t)}}class BS extends yI{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class qS extends Wi{constructor(e,t){super(e,"google.com",t)}}class WS extends yI{constructor(e,t,r){super(e,"twitter.com",t,r)}}function jS(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:FS(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Gr("enroll",e,t)}static _fromMfaPendingCredential(e){return new Gr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Gr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Gr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Se(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>_a._fromServerResponse(r,a));O(i.mfaPendingCredential,r,"internal-error");const o=Gr._fromMfaPendingCredential(i.mfaPendingCredential);return new Od(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const d=await jt._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return O(t.user,r,"internal-error"),jt._forOperation(t.user,t.operationType,u);default:nt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function $S(n,e){var t;const r=j(n),i=e;return O(e.customData.operationType,r,"argument-error"),O((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Od._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n,e){return xe(n,"POST","/v2/accounts/mfaEnrollment:start",De(n,e))}function GS(n,e){return xe(n,"POST","/v2/accounts/mfaEnrollment:finalize",De(n,e))}function zS(n,e){return xe(n,"POST","/v2/accounts/mfaEnrollment:withdraw",De(n,e))}class Vd{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>_a._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Vd(e)}async getSession(){return Gr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await kn(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await kn(this.user,zS(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Gu=new WeakMap;function KS(n){const e=j(n);return Gu.has(e)||Gu.set(e,Vd._fromUser(e)),Gu.get(e)}const Uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=1e3,QS=10;class vI extends II{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QS):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},HS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vI.type="LOCAL";const Ld=vI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI extends II{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wI.type="SESSION";const Zr=wI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new El(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await YS(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}El.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ga("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function XS(n){Fe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function ZS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tC(){return Md()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="firebaseLocalStorageDb",nC=1,Bc="firebaseLocalStorage",TI="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Tl(n,e){return n.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function rC(){const n=indexedDB.deleteDatabase(EI);return new ya(n).toPromise()}function ph(){const n=indexedDB.open(EI,nC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Bc,{keyPath:TI})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Bc)?e(r):(r.close(),await rC(),e(await ph()))})})}async function e_(n,e,t){const r=Tl(n,!0).put({[TI]:e,value:t});return new ya(r).toPromise()}async function iC(n,e){const t=Tl(n,!1).get(e),r=await new ya(t).toPromise();return r===void 0?null:r.value}function t_(n,e){const t=Tl(n,!0).delete(e);return new ya(t).toPromise()}const sC=800,oC=3;class AI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ph(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>oC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Md()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=El._getInstance(tC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ZS(),!this.activeServiceWorker)return;this.sender=new JS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ph();return await e_(e,Uc,"1"),await t_(e,Uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>e_(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>iC(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>t_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tl(i,!1).getAll();return new ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AI.type="LOCAL";const Wo=AI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n,e){return xe(n,"POST","/v2/accounts/mfaSignIn:start",De(n,e))}function aC(n,e){return xe(n,"POST","/v2/accounts/mfaSignIn:finalize",De(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=sI("rcb"),cC=new da(3e4,6e4);class lC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Fe().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return O(uC(t),e,"argument-error"),this.shouldResolveImmediately(t)&&$m(Fe().grecaptcha)?Promise.resolve(Fe().grecaptcha):new Promise((r,i)=>{const s=Fe().setTimeout(()=>{i(qe(e,"network-request-failed"))},cC.get());Fe()[zu]=()=>{Fe().clearTimeout(s),delete Fe()[zu];const a=Fe().grecaptcha;if(!a||!$m(a)){i(qe(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const f=l(u,d);return this.counter++,f},this.hostLanguage=t,r(a)};const o=`${LR()}?${pi({onload:zu,render:"explicit",hl:t})}`;Pd(o).catch(()=>{clearTimeout(s),i(qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Fe().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function uC(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class hC{async load(e){return new qR(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="recaptcha",dC={theme:"light",type:"image"};let fC=class{constructor(e,t,r=Object.assign({},dC)){this.parameters=r,this.type=Io,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Se(e),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hC:new lC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Fe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(Sd()&&!Md(),this.auth,"internal-error"),await pC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await gR(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function pC(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Yr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function mC(n,e,t){if(ke(n.app))return Promise.reject(Qe(n));const r=Se(n),i=await Al(r,e,j(t));return new Fd(i,s=>vl(r,s))}async function _C(n,e,t){const r=j(n);await Il(!1,r,"phone");const i=await Al(r.auth,e,j(t));return new Fd(i,s=>pI(r,s))}async function gC(n,e,t){const r=j(n);if(ke(r.auth.app))return Promise.reject(Qe(r.auth));const i=await Al(r.auth,e,j(t));return new Fd(i,s=>mI(r,s))}async function Al(n,e,t){var r;if(!n._getRecaptchaConfig())try{await KR(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){O(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await rr(n,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===yo){O((t==null?void 0:t.type)===Io,d,"argument-error");const m=await Ku(d,f,t);return Zm(d,m)}return Zm(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{O(s.type==="signin",n,"internal-error");const o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;O(o,n,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await rr(n,a,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===yo){O((t==null?void 0:t.type)===Io,f,"argument-error");const y=await Ku(f,m,t);return n_(f,y)}return n_(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await rr(n,s,"sendVerificationCode",async(u,d)=>{if(d.captchaResponse===yo){O((t==null?void 0:t.type)===Io,u,"argument-error");const f=await Ku(u,d,t);return Jm(u,f)}return Jm(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{t==null||t._reset()}}async function yC(n,e){const t=j(n);if(ke(t.auth.app))return Promise.reject(Qe(t.auth));await kd(t,e)}async function Ku(n,e,t){O(t.type===Io,n,"argument-error");const r=await t.verify();O(typeof r=="string",n,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=class Ic{constructor(e){this.providerId=Ic.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return Al(this.auth,e,j(t))}static credential(e,t){return Yr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ic.credentialFromTaggedObject(t)}static credentialFromError(e){return Ic.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Yr._fromTokenResponse(t,r):null}};ei.PROVIDER_ID="phone";ei.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,e){return e?xt(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends ys{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IC(n){return fI(n.auth,new Ud(n),n.bypassAuthState)}function vC(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),dI(t,new Ud(n),n.bypassAuthState)}async function wC(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),kd(t,new Ud(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IC;case"linkViaPopup":case"linkViaRedirect":return wC;case"reauthViaPopup":case"reauthViaRedirect":return vC;default:nt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=new da(2e3,1e4);async function TC(n,e,t){if(ke(n.app))return Promise.reject(qe(n,"operation-not-supported-in-this-environment"));const r=Se(n);gs(n,e,Mn);const i=mi(r,t);return new Tn(r,"signInViaPopup",e,i).executeNotNull()}async function AC(n,e,t){const r=j(n);if(ke(r.auth.app))return Promise.reject(qe(r.auth,"operation-not-supported-in-this-environment"));gs(r.auth,e,Mn);const i=mi(r.auth,t);return new Tn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function bC(n,e,t){const r=j(n);gs(r.auth,e,Mn);const i=mi(r.auth,t);return new Tn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Tn extends bI{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EC.get())};e()}}Tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="pendingRedirect",vo=new Map;class SC extends bI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await CC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CC(n,e){const t=SI(e),r=RI(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Bd(n,e){return RI(n)._set(SI(e),"true")}function PC(){vo.clear()}function qd(n,e){vo.set(n._key(),e)}function RI(n){return xt(n._redirectPersistence)}function SI(n){return Qr(RC,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(n,e,t){return NC(n,e,t)}async function NC(n,e,t){if(ke(n.app))return Promise.reject(Qe(n));const r=Se(n);gs(n,e,Mn),await r._initializationPromise;const i=mi(r,t);return await Bd(i,r),i._openRedirect(r,e,"signInViaRedirect")}function DC(n,e,t){return xC(n,e,t)}async function xC(n,e,t){const r=j(n);if(gs(r.auth,e,Mn),ke(r.auth.app))return Promise.reject(Qe(r.auth));await r.auth._initializationPromise;const i=mi(r.auth,t);await Bd(i,r.auth);const s=await CI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function OC(n,e,t){return VC(n,e,t)}async function VC(n,e,t){const r=j(n);gs(r.auth,e,Mn),await r.auth._initializationPromise;const i=mi(r.auth,t);await Il(!1,r,e.providerId),await Bd(i,r.auth);const s=await CI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function LC(n,e){return await Se(n)._initializationPromise,bl(n,e,!1)}async function bl(n,e,t=!1){if(ke(n.app))return Promise.reject(Qe(n));const r=Se(n),i=mi(r,e),o=await new SC(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function CI(n){const e=ga(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=10*60*1e3;class PI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!kI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MC&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(n,e={}){return xe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BC=/^https?/;async function qC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await NI(n);for(const t of e)try{if(WC(t))return}catch{}nt(n,"unauthorized-domain")}function WC(n){const e=Uo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!BC.test(t))return!1;if(UC.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new da(3e4,6e4);function i_(){const n=Fe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $C(n){return new Promise((e,t)=>{var r,i,s;function o(){i_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i_(),t(qe(n,"network-request-failed"))},timeout:jC.get()})}if(!((i=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Fe().gapi)===null||s===void 0)&&s.load)o();else{const a=sI("iframefcb");return Fe()[a]=()=>{gapi.load?o():t(qe(n,"network-request-failed"))},Pd(`${FR()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw vc=null,e})}let vc=null;function GC(n){return vc=vc||$C(n),vc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new da(5e3,15e3),KC="__/auth/iframe",HC="emulator/auth/iframe",QC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JC(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cd(e,HC):`https://${n.config.authDomain}/${KC}`,r={apiKey:e.apiKey,appName:n.name,v:Vn},i=YC.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${pi(r).slice(1)}`}async function XC(n){const e=await GC(n),t=Fe().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:JC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qe(n,"network-request-failed"),a=Fe().setTimeout(()=>{s(o)},zC.get());function l(){Fe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eP=500,tP=600,nP="_blank",rP="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iP(n,e,t,r=eP,i=tP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();t&&(a=Zy(u)?nP:t),Jy(u)&&(e=e||rP,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,R])=>`${m}${y}=${R},`,"");if(CR(u)&&a!=="_self")return sP(e||"",a),new s_(null);const f=window.open(e||"",a,d);O(f,n,"popup-blocked");try{f.focus()}catch{}return new s_(f)}function sP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="__/auth/handler",aP="emulator/auth/handler",cP=encodeURIComponent("fac");async function mh(n,e,t,r,i,s){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vn,eventId:i};if(e instanceof Mn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",xc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Is){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),u=l?`#${cP}=${encodeURIComponent(l)}`:"";return`${lP(n)}?${pi(a).slice(1)}${u}`}function lP({config:n}){return n.emulator?Cd(n,aP):`https://${n.authDomain}/${oP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="webStorageSupport";class uP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zr,this._completeRedirectFn=bl,this._overrideRedirectResult=qd}async _openPopup(e,t,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mh(e,t,r,Uo(),i);return iP(e,o,ga())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await mh(e,t,r,Uo(),i);return XS(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await XC(e),r=new PI(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hu,{type:Hu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hu];o!==void 0&&t(!!o),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rI()||Xy()||pa()}}const hP=uP;class dP{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return sn("unexpected MultiFactorSessionType")}}}class Wd extends dP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wd(e)}_finalizeEnroll(e,t,r){return GS(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return aC(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class DI{constructor(){}static assertion(e){return Wd._fromCredential(e)}}DI.FACTOR_ID="phone";var o_="@firebase/auth",a_="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mP(n){Pn(new Ct("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iI(n)},u=new OR(r,i,s,l);return HR(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new Ct("auth-internal",e=>{const t=Se(e.getProvider("auth").getImmediate());return(r=>new fP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(o_,a_,pP(n)),Ot(o_,a_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=5*60;SA("authIdTokenMaxAge");function gP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}VR({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",gP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mP("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=2e3;async function IP(n,e,t){var r;const{BuildInfo:i}=ti();Yt(e.sessionId,"AuthEvent did not contain a session ID");const s=await AP(e.sessionId),o={};return pa()?o.ibi=i.packageName:fa()?o.apn=i.packageName:nt(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,mh(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function vP(n){const{BuildInfo:e}=ti(),t={};pa()?t.iosBundleId=e.packageName:fa()?t.androidPackageName=e.packageName:nt(n,"operation-not-supported-in-this-environment"),await NI(n,t)}function wP(n){const{cordova:e}=ti();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,SR()?"_blank":"_system","location=yes"),t(i)})})}async function EP(n,e,t){const{cordova:r}=ti();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(qe(n,"redirect-cancelled-by-user"))},yP))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),fa()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function TP(n){var e,t,r,i,s,o,a,l,u,d;const f=ti();O(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((t=f==null?void 0:f.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((d=(u=f==null?void 0:f.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function AP(n){const e=bP(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function bP(n){if(Yt(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=20;class SP extends PI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function CP(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:NP(),postBody:null,tenantId:n.tenantId,error:qe(n,"no-auth-event")}}function PP(n,e){return _h()._set(gh(n),e)}async function c_(n){const e=await _h()._get(gh(n));return e&&await _h()._remove(gh(n)),e}function kP(n,e){var t,r;const i=xP(e);if(i.includes("/__/auth/callback")){const s=wc(i),o=s.firebaseError?DP(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],l=a?qe(a):null;return l?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function NP(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<RP;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function _h(){return xt(Ld)}function gh(n){return Qr("authEvent",n.config.apiKey,n.name)}function DP(n){try{return JSON.parse(n)}catch{return null}}function xP(n){const e=wc(n),t=e.link?decodeURIComponent(e.link):void 0,r=wc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return wc(i).link||i||r||t||n}function wc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Fi(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=500;class VP{constructor(){this._redirectPersistence=Zr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=bl,this._overrideRedirectResult=qd}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new SP(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){nt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){TP(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),PC(),await this._originValidation(e);const o=CP(e,r,i);await PP(e,o);const a=await IP(e,o,t),l=await wP(a);return EP(e,s,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vP(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ti(),o=setTimeout(async()=>{await c_(e),t.onEvent(l_())},OP),a=async d=>{clearTimeout(o);const f=await c_(e);let m=null;f&&(d!=null&&d.url)&&(m=kP(f,d.url)),t.onEvent(m||l_())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;ti().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const LP=VP;function l_(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:qe("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(n,e){Se(n)._logFramework(e)}var FP="@firebase/auth-compat",UP="0.5.17";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=1e3;function wo(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function qP(){return wo()==="http:"||wo()==="https:"}function xI(n=Re()){return!!((wo()==="file:"||wo()==="ionic:"||wo()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function WP(){return pl()||yd()}function jP(){return by()&&(document==null?void 0:document.documentMode)===11}function $P(n=Re()){return/Edge\/\d+/.test(n)}function GP(n=Re()){return jP()||$P(n)}function OI(){try{const n=self.localStorage,e=ga();if(n)return n.setItem(e,"1"),n.removeItem(e),GP()?Oo():!0}catch{return jd()&&Oo()}return!1}function jd(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Qu(){return(qP()||Ay()||xI())&&!WP()&&OI()&&!jd()}function VI(){return xI()&&typeof document<"u"}async function zP(){return VI()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},BP);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function KP(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt={LOCAL:"local",NONE:"none",SESSION:"session"},Js=O,LI="persistence";function HP(n,e){if(Js(Object.values(Nt).includes(e),n,"invalid-persistence-type"),pl()){Js(e!==Nt.SESSION,n,"unsupported-persistence-type");return}if(yd()){Js(e===Nt.NONE,n,"unsupported-persistence-type");return}if(jd()){Js(e===Nt.NONE||e===Nt.LOCAL&&Oo(),n,"unsupported-persistence-type");return}Js(e===Nt.NONE||OI(),n,"unsupported-persistence-type")}async function yh(n){await n._initializationPromise;const e=MI(),t=Qr(LI,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function QP(n,e){const t=MI();if(!t)return[];const r=Qr(LI,n,e);switch(t.getItem(r)){case Nt.NONE:return[Qi];case Nt.LOCAL:return[Wo,Zr];case Nt.SESSION:return[Zr];default:return[]}}function MI(){var n;try{return((n=KP())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=O;class Xn{constructor(){this.browserResolver=xt(hP),this.cordovaResolver=xt(LP),this.underlyingResolver=null,this._redirectPersistence=Zr,this._completeRedirectFn=bl,this._overrideRedirectResult=qd}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return VI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return YP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await zP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n){return n.unwrap()}function JP(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(n){return UI(n)}function ZP(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new ek(n,$S(n,e))}else if(r){const i=UI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function UI(n){const{_tokenResponse:e}=n instanceof yt?n.customData:n;if(!e)return null;if(!(n instanceof yt)&&"temporaryProof"in e&&"phoneNumber"in e)return ei.credentialFromResult(n);const t=e.providerId;if(!t||t===Qs.PASSWORD)return null;let r;switch(t){case Qs.GOOGLE:r=tn;break;case Qs.FACEBOOK:r=en;break;case Qs.GITHUB:r=nn;break;case Qs.TWITTER:r=rn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Yi._create(t,a):hn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new qi(t).credential({idToken:i,accessToken:s,rawNonce:l})}return n instanceof yt?r.credentialFromError(n):r.credentialFromResult(n)}function wt(n,e){return e.catch(t=>{throw t instanceof yt&&ZP(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:XP(t),additionalUserInfo:jS(t),user:Rl.getOrCreate(i)}})}async function Ih(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>wt(n,t.confirm(r))}}class ek{constructor(e,t){this.resolver=t,this.auth=JP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return wt(FI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl=class ho{constructor(e){this._delegate=e,this.multiFactor=KS(e)}static getOrCreate(e){return ho.USER_MAP.has(e)||ho.USER_MAP.set(e,new ho(e)),ho.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return wt(this.auth,pI(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ih(this.auth,_C(this._delegate,e,t))}async linkWithPopup(e){return wt(this.auth,bC(this._delegate,e,Xn))}async linkWithRedirect(e){return await yh(Se(this.auth)),OC(this._delegate,e,Xn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return wt(this.auth,mI(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ih(this.auth,gC(this._delegate,e,t))}reauthenticateWithPopup(e){return wt(this.auth,AC(this._delegate,e,Xn))}async reauthenticateWithRedirect(e){return await yh(Se(this.auth)),DC(this._delegate,e,Xn)}sendEmailVerification(e){return DS(this._delegate,e)}async unlink(e){return await yS(this._delegate,e),this}updateEmail(e){return LS(this._delegate,e)}updatePassword(e){return MS(this._delegate,e)}updatePhoneNumber(e){return yC(this._delegate,e)}updateProfile(e){return VS(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return xS(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Rl.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=O;class vh{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Xs(r,"invalid-api-key",{appName:e.name}),Xs(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Xn:void 0;this._delegate=t.initialize({options:{persistence:tk(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(cR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Rl.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){QR(this._delegate,e,t)}applyActionCode(e){return TS(this._delegate,e)}checkActionCode(e){return _I(this._delegate,e)}confirmPasswordReset(e,t){return ES(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return wt(this._delegate,bS(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return NS(this._delegate,e)}isSignInWithEmailLink(e){return CS(this._delegate,e)}async getRedirectResult(){Xs(Qu(),this._delegate,"operation-not-supported-in-this-environment");const e=await LC(this._delegate,Xn);return e?wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){MP(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=u_(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=u_(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return SS(this._delegate,e,t)}sendPasswordResetEmail(e,t){return wS(this._delegate,e,t||void 0)}async setPersistence(e){HP(this._delegate,e);let t;switch(e){case Nt.SESSION:t=Zr;break;case Nt.LOCAL:t=await xt(Wo)._isAvailable()?Wo:Ld;break;case Nt.NONE:t=Qi;break;default:return nt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return wt(this._delegate,gS(this._delegate))}signInWithCredential(e){return wt(this._delegate,vl(this._delegate,e))}signInWithCustomToken(e){return wt(this._delegate,vS(this._delegate,e))}signInWithEmailAndPassword(e,t){return wt(this._delegate,RS(this._delegate,e,t))}signInWithEmailLink(e,t){return wt(this._delegate,PS(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ih(this._delegate,mC(this._delegate,e,t))}async signInWithPopup(e){return Xs(Qu(),this._delegate,"operation-not-supported-in-this-environment"),wt(this._delegate,TC(this._delegate,e,Xn))}async signInWithRedirect(e){return Xs(Qu(),this._delegate,"operation-not-supported-in-this-environment"),await yh(this._delegate),kC(this._delegate,e,Xn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return AS(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}vh.Persistence=Nt;function u_(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Rl.getOrCreate(o)),error:e,complete:t}}function tk(n,e){const t=QP(n,e);if(typeof self<"u"&&!t.includes(Wo)&&t.push(Wo),typeof window<"u")for(const r of[Ld,Zr])t.includes(r)||t.push(r);return t.includes(Qi)||t.push(Qi),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{static credential(e,t){return ei.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new ei(FI(Ye.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}$d.PHONE_SIGN_IN_METHOD=ei.PHONE_SIGN_IN_METHOD;$d.PROVIDER_ID=ei.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=O;class rk{constructor(e,t,r=Ye.app()){var i;nk((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new fC(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="auth-compat";function sk(n){n.INTERNAL.registerComponent(new Ct(ik,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new vh(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Si.EMAIL_SIGNIN,PASSWORD_RESET:Si.PASSWORD_RESET,RECOVER_EMAIL:Si.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Si.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Si.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Si.VERIFY_EMAIL}},EmailAuthProvider:br,FacebookAuthProvider:en,GithubAuthProvider:nn,GoogleAuthProvider:tn,OAuthProvider:qi,SAMLAuthProvider:Mc,PhoneAuthProvider:$d,PhoneMultiFactorGenerator:DI,RecaptchaVerifier:rk,TwitterAuthProvider:rn,Auth:vh,AuthCredential:ys,Error:yt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(FP,UP)}sk(Ye);var h_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ir,BI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,T,S){for(var I=Array(arguments.length-2),gn=2;gn<arguments.length;gn++)I[gn-2]=arguments[gn];return g.prototype[T].apply(E,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)E[T]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(T=0;16>T;++T)E[T]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],T=w.g[2];var S=w.g[3],I=g+(S^v&(T^S))+E[0]+3614090360&4294967295;g=v+(I<<7&4294967295|I>>>25),I=S+(T^g&(v^T))+E[1]+3905402710&4294967295,S=g+(I<<12&4294967295|I>>>20),I=T+(v^S&(g^v))+E[2]+606105819&4294967295,T=S+(I<<17&4294967295|I>>>15),I=v+(g^T&(S^g))+E[3]+3250441966&4294967295,v=T+(I<<22&4294967295|I>>>10),I=g+(S^v&(T^S))+E[4]+4118548399&4294967295,g=v+(I<<7&4294967295|I>>>25),I=S+(T^g&(v^T))+E[5]+1200080426&4294967295,S=g+(I<<12&4294967295|I>>>20),I=T+(v^S&(g^v))+E[6]+2821735955&4294967295,T=S+(I<<17&4294967295|I>>>15),I=v+(g^T&(S^g))+E[7]+4249261313&4294967295,v=T+(I<<22&4294967295|I>>>10),I=g+(S^v&(T^S))+E[8]+1770035416&4294967295,g=v+(I<<7&4294967295|I>>>25),I=S+(T^g&(v^T))+E[9]+2336552879&4294967295,S=g+(I<<12&4294967295|I>>>20),I=T+(v^S&(g^v))+E[10]+4294925233&4294967295,T=S+(I<<17&4294967295|I>>>15),I=v+(g^T&(S^g))+E[11]+2304563134&4294967295,v=T+(I<<22&4294967295|I>>>10),I=g+(S^v&(T^S))+E[12]+1804603682&4294967295,g=v+(I<<7&4294967295|I>>>25),I=S+(T^g&(v^T))+E[13]+4254626195&4294967295,S=g+(I<<12&4294967295|I>>>20),I=T+(v^S&(g^v))+E[14]+2792965006&4294967295,T=S+(I<<17&4294967295|I>>>15),I=v+(g^T&(S^g))+E[15]+1236535329&4294967295,v=T+(I<<22&4294967295|I>>>10),I=g+(T^S&(v^T))+E[1]+4129170786&4294967295,g=v+(I<<5&4294967295|I>>>27),I=S+(v^T&(g^v))+E[6]+3225465664&4294967295,S=g+(I<<9&4294967295|I>>>23),I=T+(g^v&(S^g))+E[11]+643717713&4294967295,T=S+(I<<14&4294967295|I>>>18),I=v+(S^g&(T^S))+E[0]+3921069994&4294967295,v=T+(I<<20&4294967295|I>>>12),I=g+(T^S&(v^T))+E[5]+3593408605&4294967295,g=v+(I<<5&4294967295|I>>>27),I=S+(v^T&(g^v))+E[10]+38016083&4294967295,S=g+(I<<9&4294967295|I>>>23),I=T+(g^v&(S^g))+E[15]+3634488961&4294967295,T=S+(I<<14&4294967295|I>>>18),I=v+(S^g&(T^S))+E[4]+3889429448&4294967295,v=T+(I<<20&4294967295|I>>>12),I=g+(T^S&(v^T))+E[9]+568446438&4294967295,g=v+(I<<5&4294967295|I>>>27),I=S+(v^T&(g^v))+E[14]+3275163606&4294967295,S=g+(I<<9&4294967295|I>>>23),I=T+(g^v&(S^g))+E[3]+4107603335&4294967295,T=S+(I<<14&4294967295|I>>>18),I=v+(S^g&(T^S))+E[8]+1163531501&4294967295,v=T+(I<<20&4294967295|I>>>12),I=g+(T^S&(v^T))+E[13]+2850285829&4294967295,g=v+(I<<5&4294967295|I>>>27),I=S+(v^T&(g^v))+E[2]+4243563512&4294967295,S=g+(I<<9&4294967295|I>>>23),I=T+(g^v&(S^g))+E[7]+1735328473&4294967295,T=S+(I<<14&4294967295|I>>>18),I=v+(S^g&(T^S))+E[12]+2368359562&4294967295,v=T+(I<<20&4294967295|I>>>12),I=g+(v^T^S)+E[5]+4294588738&4294967295,g=v+(I<<4&4294967295|I>>>28),I=S+(g^v^T)+E[8]+2272392833&4294967295,S=g+(I<<11&4294967295|I>>>21),I=T+(S^g^v)+E[11]+1839030562&4294967295,T=S+(I<<16&4294967295|I>>>16),I=v+(T^S^g)+E[14]+4259657740&4294967295,v=T+(I<<23&4294967295|I>>>9),I=g+(v^T^S)+E[1]+2763975236&4294967295,g=v+(I<<4&4294967295|I>>>28),I=S+(g^v^T)+E[4]+1272893353&4294967295,S=g+(I<<11&4294967295|I>>>21),I=T+(S^g^v)+E[7]+4139469664&4294967295,T=S+(I<<16&4294967295|I>>>16),I=v+(T^S^g)+E[10]+3200236656&4294967295,v=T+(I<<23&4294967295|I>>>9),I=g+(v^T^S)+E[13]+681279174&4294967295,g=v+(I<<4&4294967295|I>>>28),I=S+(g^v^T)+E[0]+3936430074&4294967295,S=g+(I<<11&4294967295|I>>>21),I=T+(S^g^v)+E[3]+3572445317&4294967295,T=S+(I<<16&4294967295|I>>>16),I=v+(T^S^g)+E[6]+76029189&4294967295,v=T+(I<<23&4294967295|I>>>9),I=g+(v^T^S)+E[9]+3654602809&4294967295,g=v+(I<<4&4294967295|I>>>28),I=S+(g^v^T)+E[12]+3873151461&4294967295,S=g+(I<<11&4294967295|I>>>21),I=T+(S^g^v)+E[15]+530742520&4294967295,T=S+(I<<16&4294967295|I>>>16),I=v+(T^S^g)+E[2]+3299628645&4294967295,v=T+(I<<23&4294967295|I>>>9),I=g+(T^(v|~S))+E[0]+4096336452&4294967295,g=v+(I<<6&4294967295|I>>>26),I=S+(v^(g|~T))+E[7]+1126891415&4294967295,S=g+(I<<10&4294967295|I>>>22),I=T+(g^(S|~v))+E[14]+2878612391&4294967295,T=S+(I<<15&4294967295|I>>>17),I=v+(S^(T|~g))+E[5]+4237533241&4294967295,v=T+(I<<21&4294967295|I>>>11),I=g+(T^(v|~S))+E[12]+1700485571&4294967295,g=v+(I<<6&4294967295|I>>>26),I=S+(v^(g|~T))+E[3]+2399980690&4294967295,S=g+(I<<10&4294967295|I>>>22),I=T+(g^(S|~v))+E[10]+4293915773&4294967295,T=S+(I<<15&4294967295|I>>>17),I=v+(S^(T|~g))+E[1]+2240044497&4294967295,v=T+(I<<21&4294967295|I>>>11),I=g+(T^(v|~S))+E[8]+1873313359&4294967295,g=v+(I<<6&4294967295|I>>>26),I=S+(v^(g|~T))+E[15]+4264355552&4294967295,S=g+(I<<10&4294967295|I>>>22),I=T+(g^(S|~v))+E[6]+2734768916&4294967295,T=S+(I<<15&4294967295|I>>>17),I=v+(S^(T|~g))+E[13]+1309151649&4294967295,v=T+(I<<21&4294967295|I>>>11),I=g+(T^(v|~S))+E[4]+4149444226&4294967295,g=v+(I<<6&4294967295|I>>>26),I=S+(v^(g|~T))+E[11]+3174756917&4294967295,S=g+(I<<10&4294967295|I>>>22),I=T+(g^(S|~v))+E[2]+718787259&4294967295,T=S+(I<<15&4294967295|I>>>17),I=v+(S^(T|~g))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,E=this.B,T=this.h,S=0;S<g;){if(T==0)for(;S<=v;)i(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<g;)if(E[T++]=w.charCodeAt(S++),T==this.blockSize){i(this,E),T=0;break}}else for(;S<g;)if(E[T++]=w[S++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)w[v++]=this.g[g]>>>E&255;return w};function s(w,g){var v=a;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function o(w,g){this.h=g;for(var v=[],E=!0,T=w.length-1;0<=T;T--){var S=w[T]|0;E&&S==g||(v[T]=S,E=!1)}this.g=v}var a={};function l(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return P(u(-w));for(var g=[],v=1,E=0;w>=v;E++)g[E]=w/v|0,v*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return P(d(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(g,8)),E=f,T=0;T<w.length;T+=8){var S=Math.min(8,w.length-T),I=parseInt(w.substring(T,T+S),g);8>S?(S=u(Math.pow(g,S)),E=E.j(S).add(u(I))):(E=E.j(v),E=E.add(u(I)))}return E}var f=l(0),m=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(N(this))return-P(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(N(this))return"-"+P(this).toString(w);for(var g=u(Math.pow(w,6)),v=this,E="";;){var T=te(v,g).g;v=L(v,T.j(g));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=T,R(v))return S+E;for(;6>S.length;)S="0"+S;E=S+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=L(this,w),N(w)?-1:R(w)?0:1};function P(w){for(var g=w.g.length,v=[],E=0;E<g;E++)v[E]=~w.g[E];return new o(v,~w.h).add(m)}n.abs=function(){return N(this)?P(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],E=0,T=0;T<=g;T++){var S=E+(this.i(T)&65535)+(w.i(T)&65535),I=(S>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);E=I>>>16,S&=65535,I&=65535,v[T]=I<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function L(w,g){return w.add(P(g))}n.j=function(w){if(R(this)||R(w))return f;if(N(this))return N(w)?P(this).j(P(w)):P(P(this).j(w));if(N(w))return P(this.j(P(w)));if(0>this.l(y)&&0>w.l(y))return u(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<w.g.length;T++){var S=this.i(E)>>>16,I=this.i(E)&65535,gn=w.i(T)>>>16,Ds=w.i(T)&65535;v[2*E+2*T]+=I*Ds,B(v,2*E+2*T),v[2*E+2*T+1]+=S*Ds,B(v,2*E+2*T+1),v[2*E+2*T+1]+=I*gn,B(v,2*E+2*T+1),v[2*E+2*T+2]+=S*gn,B(v,2*E+2*T+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new o(v,0)};function B(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function W(w,g){this.g=w,this.h=g}function te(w,g){if(R(g))throw Error("division by zero");if(R(w))return new W(f,f);if(N(w))return g=te(P(w),g),new W(P(g.g),P(g.h));if(N(g))return g=te(w,P(g)),new W(P(g.g),g.h);if(30<w.g.length){if(N(w)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=g;0>=E.l(w);)v=J(v),E=J(E);var T=z(v,1),S=z(E,1);for(E=z(E,2),v=z(v,2);!R(E);){var I=S.add(E);0>=I.l(w)&&(T=T.add(v),S=I),E=z(E,1),v=z(v,1)}return g=L(w,T.j(g)),new W(T,g)}for(T=f;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),S=u(v),I=S.j(g);N(I)||0<I.l(w);)v-=E,S=u(v),I=S.j(g);R(S)&&(S=m),T=T.add(S),w=L(w,I)}return new W(T,w)}n.A=function(w){return te(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&w.i(E);return new o(v,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|w.i(E);return new o(v,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^w.i(E);return new o(v,this.h^w.h)};function J(w){for(var g=w.g.length+1,v=[],E=0;E<g;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(v,w.h)}function z(w,g){var v=g>>5;g%=32;for(var E=w.g.length-v,T=[],S=0;S<E;S++)T[S]=0<g?w.i(S+v)>>>g|w.i(S+v+1)<<32-g:w.i(S+v);return new o(T,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,BI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ir=o}).apply(typeof h_<"u"?h_:typeof self<"u"?self:typeof window<"u"?window:{});var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qI,fo,WI,Ec,wh,jI,$I,GI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,h,p){return c==Array.prototype||c==Object.prototype||(c[h]=p.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof cc=="object"&&cc];for(var h=0;h<c.length;++h){var p=c[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(c,h){if(h)e:{var p=r;c=c.split(".");for(var _=0;_<c.length-1;_++){var b=c[_];if(!(b in p))break e;p=p[b]}c=c[c.length-1],_=p[c],h=h(_),h!=_&&h!=null&&e(p,c,{configurable:!0,writable:!0,value:h})}}function s(c,h){c instanceof String&&(c+="");var p=0,_=!1,b={next:function(){if(!_&&p<c.length){var k=p++;return{value:h(k,c[k]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(c){return c||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var h=typeof c;return h=h!="object"?h:c?Array.isArray(c)?"array":h:"null",h=="array"||h=="object"&&typeof c.length=="number"}function u(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function d(c,h,p){return c.call.apply(c.bind,arguments)}function f(c,h,p){if(!c)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),c.apply(h,b)}}return function(){return c.apply(h,arguments)}}function m(c,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function y(c,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function R(c,h){function p(){}p.prototype=h.prototype,c.aa=h.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(_,b,k){for(var M=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)M[fe-2]=arguments[fe];return h.prototype[b].apply(_,M)}}function N(c){const h=c.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=c[_];return p}return[]}function P(c,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const b=c.length||0,k=_.length||0;c.length=b+k;for(let M=0;M<k;M++)c[b+M]=_[M]}else c.push(_)}}class L{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function B(c){return/^[\s\xa0]*$/.test(c)}function W(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function te(c){return te[" "](c),c}te[" "]=function(){};var J=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function z(c,h,p){for(const _ in c)h.call(p,c[_],_,c)}function w(c,h){for(const p in c)h.call(void 0,c[p],p,c)}function g(c){const h={};for(const p in c)h[p]=c[p];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(c,h){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)c[p]=_[p];for(let k=0;k<v.length;k++)p=v[k],Object.prototype.hasOwnProperty.call(_,p)&&(c[p]=_[p])}}function T(c){var h=1;c=c.split(":");const p=[];for(;0<h&&c.length;)p.push(c.shift()),h--;return c.length&&p.push(c.join(":")),p}function S(c){a.setTimeout(()=>{throw c},0)}function I(){var c=mu;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class gn{constructor(){this.h=this.g=null}add(h,p){const _=Ds.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Ds=new L(()=>new MT,c=>c.reset());class MT{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let xs,Os=!1,mu=new gn,kp=()=>{const c=a.Promise.resolve(void 0);xs=()=>{c.then(FT)}};var FT=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(p){S(p)}var h=Ds;h.j(c),100>h.h&&(h.h++,c.next=h.g,h.g=c)}Os=!1};function Wn(){this.s=this.s,this.C=this.C}Wn.prototype.s=!1,Wn.prototype.ma=function(){this.s||(this.s=!0,this.N())},Wn.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function rt(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var UT=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return c}();function Vs(c,h){if(rt.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget){if(J){e:{try{te(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else p=="mouseover"?h=c.fromElement:p=="mouseout"&&(h=c.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:BT[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Vs.aa.h.call(this)}}R(Vs,rt);var BT={2:"touch",3:"pen",4:"mouse"};Vs.prototype.h=function(){Vs.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Wa="closure_listenable_"+(1e6*Math.random()|0),qT=0;function WT(c,h,p,_,b){this.listener=c,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=b,this.key=++qT,this.da=this.fa=!1}function ja(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function $a(c){this.src=c,this.g={},this.h=0}$a.prototype.add=function(c,h,p,_,b){var k=c.toString();c=this.g[k],c||(c=this.g[k]=[],this.h++);var M=gu(c,h,_,b);return-1<M?(h=c[M],p||(h.fa=!1)):(h=new WT(h,this.src,k,!!_,b),h.fa=p,c.push(h)),h};function _u(c,h){var p=h.type;if(p in c.g){var _=c.g[p],b=Array.prototype.indexOf.call(_,h,void 0),k;(k=0<=b)&&Array.prototype.splice.call(_,b,1),k&&(ja(h),c.g[p].length==0&&(delete c.g[p],c.h--))}}function gu(c,h,p,_){for(var b=0;b<c.length;++b){var k=c[b];if(!k.da&&k.listener==h&&k.capture==!!p&&k.ha==_)return b}return-1}var yu="closure_lm_"+(1e6*Math.random()|0),Iu={};function Np(c,h,p,_,b){if(Array.isArray(h)){for(var k=0;k<h.length;k++)Np(c,h[k],p,_,b);return null}return p=Op(p),c&&c[Wa]?c.K(h,p,u(_)?!!_.capture:!1,b):jT(c,h,p,!1,_,b)}function jT(c,h,p,_,b,k){if(!h)throw Error("Invalid event type");var M=u(b)?!!b.capture:!!b,fe=wu(c);if(fe||(c[yu]=fe=new $a(c)),p=fe.add(h,p,_,M,k),p.proxy)return p;if(_=$T(),p.proxy=_,_.src=c,_.listener=p,c.addEventListener)UT||(b=M),b===void 0&&(b=!1),c.addEventListener(h.toString(),_,b);else if(c.attachEvent)c.attachEvent(xp(h.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function $T(){function c(p){return h.call(c.src,c.listener,p)}const h=GT;return c}function Dp(c,h,p,_,b){if(Array.isArray(h))for(var k=0;k<h.length;k++)Dp(c,h[k],p,_,b);else _=u(_)?!!_.capture:!!_,p=Op(p),c&&c[Wa]?(c=c.i,h=String(h).toString(),h in c.g&&(k=c.g[h],p=gu(k,p,_,b),-1<p&&(ja(k[p]),Array.prototype.splice.call(k,p,1),k.length==0&&(delete c.g[h],c.h--)))):c&&(c=wu(c))&&(h=c.g[h.toString()],c=-1,h&&(c=gu(h,p,_,b)),(p=-1<c?h[c]:null)&&vu(p))}function vu(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[Wa])_u(h.i,c);else{var p=c.type,_=c.proxy;h.removeEventListener?h.removeEventListener(p,_,c.capture):h.detachEvent?h.detachEvent(xp(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=wu(h))?(_u(p,c),p.h==0&&(p.src=null,h[yu]=null)):ja(c)}}}function xp(c){return c in Iu?Iu[c]:Iu[c]="on"+c}function GT(c,h){if(c.da)c=!0;else{h=new Vs(h,this);var p=c.listener,_=c.ha||c.src;c.fa&&vu(c),c=p.call(_,h)}return c}function wu(c){return c=c[yu],c instanceof $a?c:null}var Eu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Op(c){return typeof c=="function"?c:(c[Eu]||(c[Eu]=function(h){return c.handleEvent(h)}),c[Eu])}function it(){Wn.call(this),this.i=new $a(this),this.M=this,this.F=null}R(it,Wn),it.prototype[Wa]=!0,it.prototype.removeEventListener=function(c,h,p,_){Dp(this,c,h,p,_)};function dt(c,h){var p,_=c.F;if(_)for(p=[];_;_=_.F)p.push(_);if(c=c.M,_=h.type||h,typeof h=="string")h=new rt(h,c);else if(h instanceof rt)h.target=h.target||c;else{var b=h;h=new rt(_,c),E(h,b)}if(b=!0,p)for(var k=p.length-1;0<=k;k--){var M=h.g=p[k];b=Ga(M,_,!0,h)&&b}if(M=h.g=c,b=Ga(M,_,!0,h)&&b,b=Ga(M,_,!1,h)&&b,p)for(k=0;k<p.length;k++)M=h.g=p[k],b=Ga(M,_,!1,h)&&b}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var c=this.i,h;for(h in c.g){for(var p=c.g[h],_=0;_<p.length;_++)ja(p[_]);delete c.g[h],c.h--}}this.F=null},it.prototype.K=function(c,h,p,_){return this.i.add(String(c),h,!1,p,_)},it.prototype.L=function(c,h,p,_){return this.i.add(String(c),h,!0,p,_)};function Ga(c,h,p,_){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,k=0;k<h.length;++k){var M=h[k];if(M&&!M.da&&M.capture==p){var fe=M.listener,Xe=M.ha||M.src;M.fa&&_u(c.i,M),b=fe.call(Xe,_)!==!1&&b}}return b&&!_.defaultPrevented}function Vp(c,h,p){if(typeof c=="function")p&&(c=m(c,p));else if(c&&typeof c.handleEvent=="function")c=m(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(c,h||0)}function Lp(c){c.g=Vp(()=>{c.g=null,c.i&&(c.i=!1,Lp(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class zT extends Wn{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Lp(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(c){Wn.call(this),this.h=c,this.g={}}R(Ls,Wn);var Mp=[];function Fp(c){z(c.g,function(h,p){this.g.hasOwnProperty(p)&&vu(h)},c),c.g={}}Ls.prototype.N=function(){Ls.aa.N.call(this),Fp(this)},Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tu=a.JSON.stringify,KT=a.JSON.parse,HT=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Au(){}Au.prototype.h=null;function Up(c){return c.h||(c.h=c.i())}function Bp(){}var Ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bu(){rt.call(this,"d")}R(bu,rt);function Ru(){rt.call(this,"c")}R(Ru,rt);var Nr={},qp=null;function za(){return qp=qp||new it}Nr.La="serverreachability";function Wp(c){rt.call(this,Nr.La,c)}R(Wp,rt);function Fs(c){const h=za();dt(h,new Wp(h))}Nr.STAT_EVENT="statevent";function jp(c,h){rt.call(this,Nr.STAT_EVENT,c),this.stat=h}R(jp,rt);function ft(c){const h=za();dt(h,new jp(h,c))}Nr.Ma="timingevent";function $p(c,h){rt.call(this,Nr.Ma,c),this.size=h}R($p,rt);function Us(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function Bs(){this.g=!0}Bs.prototype.xa=function(){this.g=!1};function QT(c,h,p,_,b,k){c.info(function(){if(c.g)if(k)for(var M="",fe=k.split("&"),Xe=0;Xe<fe.length;Xe++){var ae=fe[Xe].split("=");if(1<ae.length){var st=ae[0];ae=ae[1];var ot=st.split("_");M=2<=ot.length&&ot[1]=="type"?M+(st+"="+ae+"&"):M+(st+"=redacted&")}}else M=null;else M=k;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+p+`
`+M})}function YT(c,h,p,_,b,k,M){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+p+`
`+k+" "+M})}function Ti(c,h,p,_){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+XT(c,p)+(_?" "+_:"")})}function JT(c,h){c.info(function(){return"TIMEOUT: "+h})}Bs.prototype.info=function(){};function XT(c,h){if(!c.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var _=p[c];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var k=b[0];if(k!="noop"&&k!="stop"&&k!="close")for(var M=1;M<b.length;M++)b[M]=""}}}}return Tu(p)}catch{return h}}var Ka={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Su;function Ha(){}R(Ha,Au),Ha.prototype.g=function(){return new XMLHttpRequest},Ha.prototype.i=function(){return{}},Su=new Ha;function jn(c,h,p,_){this.j=c,this.i=h,this.l=p,this.R=_||1,this.U=new Ls(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zp}function zp(){this.i=null,this.g="",this.h=!1}var Kp={},Cu={};function Pu(c,h,p){c.L=1,c.v=Xa(yn(h)),c.m=p,c.P=!0,Hp(c,null)}function Hp(c,h){c.F=Date.now(),Qa(c),c.A=yn(c.v);var p=c.A,_=c.R;Array.isArray(_)||(_=[String(_)]),cm(p.i,"t",_),c.C=0,p=c.j.J,c.h=new zp,c.g=Rm(c.j,p?h:null,!c.m),0<c.O&&(c.M=new zT(m(c.Y,c,c.g),c.O)),h=c.U,p=c.g,_=c.ca;var b="readystatechange";Array.isArray(b)||(b&&(Mp[0]=b.toString()),b=Mp);for(var k=0;k<b.length;k++){var M=Np(p,b[k],_||h.handleEvent,!1,h.h||h);if(!M)break;h.g[M.key]=M}h=c.H?g(c.H):{},c.m?(c.u||(c.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,h)):(c.u="GET",c.g.ea(c.A,c.u,null,h)),Fs(),QT(c.i,c.u,c.A,c.l,c.R,c.m)}jn.prototype.ca=function(c){c=c.target;const h=this.M;h&&In(c)==3?h.j():this.Y(c)},jn.prototype.Y=function(c){try{if(c==this.g)e:{const ot=In(this.g);var h=this.g.Ba();const Ri=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||mm(this.g)))){this.J||ot!=4||h==7||(h==8||0>=Ri?Fs(3):Fs(2)),ku(this);var p=this.g.Z();this.X=p;t:if(Qp(this)){var _=mm(this.g);c="";var b=_.length,k=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),qs(this);var M="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,c+=this.h.i.decode(_[h],{stream:!(k&&h==b-1)});_.length=0,this.h.g+=c,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=p==200,YT(this.i,this.u,this.A,this.l,this.R,ot,p),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Xe=this.g;if((fe=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(fe)){var ae=fe;break t}}ae=null}if(p=ae)Ti(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nu(this,p);else{this.o=!1,this.s=3,ft(12),Dr(this),qs(this);break e}}if(this.P){p=!0;let Gt;for(;!this.J&&this.C<M.length;)if(Gt=ZT(this,M),Gt==Cu){ot==4&&(this.s=4,ft(14),p=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Kp){this.s=4,ft(15),Ti(this.i,this.l,M,"[Invalid Chunk]"),p=!1;break}else Ti(this.i,this.l,Gt,null),Nu(this,Gt);if(Qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||M.length!=0||this.h.h||(this.s=1,ft(16),p=!1),this.o=this.o&&p,!p)Ti(this.i,this.l,M,"[Invalid Chunked Response]"),Dr(this),qs(this);else if(0<M.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Mu(st),st.M=!0,ft(11))}}else Ti(this.i,this.l,M,null),Nu(this,M);ot==4&&Dr(this),this.o&&!this.J&&(ot==4?Em(this.j,this):(this.o=!1,Qa(this)))}else _A(this.g),p==400&&0<M.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Dr(this),qs(this)}}}catch{}finally{}};function Qp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ZT(c,h){var p=c.C,_=h.indexOf(`
`,p);return _==-1?Cu:(p=Number(h.substring(p,_)),isNaN(p)?Kp:(_+=1,_+p>h.length?Cu:(h=h.slice(_,_+p),c.C=_+p,h)))}jn.prototype.cancel=function(){this.J=!0,Dr(this)};function Qa(c){c.S=Date.now()+c.I,Yp(c,c.I)}function Yp(c,h){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Us(m(c.ba,c),h)}function ku(c){c.B&&(a.clearTimeout(c.B),c.B=null)}jn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(JT(this.i,this.A),this.L!=2&&(Fs(),ft(17)),Dr(this),this.s=2,qs(this)):Yp(this,this.S-c)};function qs(c){c.j.G==0||c.J||Em(c.j,c)}function Dr(c){ku(c);var h=c.M;h&&typeof h.ma=="function"&&h.ma(),c.M=null,Fp(c.U),c.g&&(h=c.g,c.g=null,h.abort(),h.ma())}function Nu(c,h){try{var p=c.j;if(p.G!=0&&(p.g==c||Du(p.h,c))){if(!c.K&&Du(p.h,c)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)ic(p),nc(p);else break e;Lu(p),ft(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=Us(m(p.Za,p),6e3));if(1>=Zp(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Or(p,11)}else if((c.K||p.g==c)&&ic(p),!B(h))for(b=p.Da.g.parse(h),h=0;h<b.length;h++){let ae=b[h];if(p.T=ae[0],ae=ae[1],p.G==2)if(ae[0]=="c"){p.K=ae[1],p.ia=ae[2];const st=ae[3];st!=null&&(p.la=st,p.j.info("VER="+p.la));const ot=ae[4];ot!=null&&(p.Aa=ot,p.j.info("SVER="+p.Aa));const Ri=ae[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(_=1.5*Ri,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Gt=c.g;if(Gt){const oc=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oc){var k=_.h;k.g||oc.indexOf("spdy")==-1&&oc.indexOf("quic")==-1&&oc.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(xu(k,k.h),k.h=null))}if(_.D){const Fu=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fu&&(_.ya=Fu,ge(_.I,_.D,Fu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var M=c;if(_.qa=bm(_,_.J?_.ia:null,_.W),M.K){em(_.h,M);var fe=M,Xe=_.L;Xe&&(fe.I=Xe),fe.B&&(ku(fe),Qa(fe)),_.g=M}else vm(_);0<p.i.length&&rc(p)}else ae[0]!="stop"&&ae[0]!="close"||Or(p,7);else p.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Or(p,7):Vu(p):ae[0]!="noop"&&p.l&&p.l.ta(ae),p.v=0)}}Fs(4)}catch{}}var eA=class{constructor(c,h){this.g=c,this.map=h}};function Jp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Zp(c){return c.h?1:c.g?c.g.size:0}function Du(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function xu(c,h){c.g?c.g.add(h):c.h=h}function em(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Jp.prototype.cancel=function(){if(this.i=tm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function tm(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const p of c.g.values())h=h.concat(p.D);return h}return N(c.i)}function tA(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var h=[],p=c.length,_=0;_<p;_++)h.push(c[_]);return h}h=[],p=0;for(_ in c)h[p++]=c[_];return h}function nA(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var h=[];c=c.length;for(var p=0;p<c;p++)h.push(p);return h}h=[],p=0;for(const _ in c)h[p++]=_;return h}}}function nm(c,h){if(c.forEach&&typeof c.forEach=="function")c.forEach(h,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,h,void 0);else for(var p=nA(c),_=tA(c),b=_.length,k=0;k<b;k++)h.call(void 0,_[k],p&&p[k],c)}var rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rA(c,h){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var _=c[p].indexOf("="),b=null;if(0<=_){var k=c[p].substring(0,_);b=c[p].substring(_+1)}else k=c[p];h(k,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function xr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof xr){this.h=c.h,Ya(this,c.j),this.o=c.o,this.g=c.g,Ja(this,c.s),this.l=c.l;var h=c.i,p=new $s;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),im(this,p),this.m=c.m}else c&&(h=String(c).match(rm))?(this.h=!1,Ya(this,h[1]||"",!0),this.o=Ws(h[2]||""),this.g=Ws(h[3]||"",!0),Ja(this,h[4]),this.l=Ws(h[5]||"",!0),im(this,h[6]||"",!0),this.m=Ws(h[7]||"")):(this.h=!1,this.i=new $s(null,this.h))}xr.prototype.toString=function(){var c=[],h=this.j;h&&c.push(js(h,sm,!0),":");var p=this.g;return(p||h=="file")&&(c.push("//"),(h=this.o)&&c.push(js(h,sm,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(js(p,p.charAt(0)=="/"?oA:sA,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",js(p,cA)),c.join("")};function yn(c){return new xr(c)}function Ya(c,h,p){c.j=p?Ws(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function Ja(c,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);c.s=h}else c.s=null}function im(c,h,p){h instanceof $s?(c.i=h,lA(c.i,c.h)):(p||(h=js(h,aA)),c.i=new $s(h,c.h))}function ge(c,h,p){c.i.set(h,p)}function Xa(c){return ge(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ws(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function js(c,h,p){return typeof c=="string"?(c=encodeURI(c).replace(h,iA),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function iA(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var sm=/[#\/\?@]/g,sA=/[#\?:]/g,oA=/[#\?]/g,aA=/[#\?@]/g,cA=/#/g;function $s(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function $n(c){c.g||(c.g=new Map,c.h=0,c.i&&rA(c.i,function(h,p){c.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=$s.prototype,n.add=function(c,h){$n(this),this.i=null,c=Ai(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(h),this.h+=1,this};function om(c,h){$n(c),h=Ai(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function am(c,h){return $n(c),h=Ai(c,h),c.g.has(h)}n.forEach=function(c,h){$n(this),this.g.forEach(function(p,_){p.forEach(function(b){c.call(h,b,_,this)},this)},this)},n.na=function(){$n(this);const c=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const b=c[_];for(let k=0;k<b.length;k++)p.push(h[_])}return p},n.V=function(c){$n(this);let h=[];if(typeof c=="string")am(this,c)&&(h=h.concat(this.g.get(Ai(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)h=h.concat(c[p])}return h},n.set=function(c,h){return $n(this),this.i=null,c=Ai(this,c),am(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},n.get=function(c,h){return c?(c=this.V(c),0<c.length?String(c[0]):h):h};function cm(c,h,p){om(c,h),0<p.length&&(c.i=null,c.g.set(Ai(c,h),N(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const k=encodeURIComponent(String(_)),M=this.V(_);for(_=0;_<M.length;_++){var b=k;M[_]!==""&&(b+="="+encodeURIComponent(String(M[_]))),c.push(b)}}return this.i=c.join("&")};function Ai(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function lA(c,h){h&&!c.j&&($n(c),c.i=null,c.g.forEach(function(p,_){var b=_.toLowerCase();_!=b&&(om(this,_),cm(this,b,p))},c)),c.j=h}function uA(c,h){const p=new Bs;if(a.Image){const _=new Image;_.onload=y(Gn,p,"TestLoadImage: loaded",!0,h,_),_.onerror=y(Gn,p,"TestLoadImage: error",!1,h,_),_.onabort=y(Gn,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=y(Gn,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else h(!1)}function hA(c,h){const p=new Bs,_=new AbortController,b=setTimeout(()=>{_.abort(),Gn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:_.signal}).then(k=>{clearTimeout(b),k.ok?Gn(p,"TestPingServer: ok",!0,h):Gn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Gn(p,"TestPingServer: error",!1,h)})}function Gn(c,h,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function dA(){this.g=new HT}function fA(c,h,p){const _=p||"";try{nm(c,function(b,k){let M=b;u(b)&&(M=Tu(b)),h.push(_+k+"="+encodeURIComponent(M))})}catch(b){throw h.push(_+"type="+encodeURIComponent("_badmap")),b}}function Za(c){this.l=c.Ub||null,this.j=c.eb||!1}R(Za,Au),Za.prototype.g=function(){return new ec(this.l,this.j)},Za.prototype.i=function(c){return function(){return c}}({});function ec(c,h){it.call(this),this.D=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ec,it),n=ec.prototype,n.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=h,this.readyState=1,zs(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(h.body=c),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lm(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function lm(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?Gs(this):zs(this),this.readyState==3&&lm(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Gs(this))},n.Qa=function(c){this.g&&(this.response=c,Gs(this))},n.ga=function(){this.g&&Gs(this)};function Gs(c){c.readyState=4,c.l=null,c.j=null,c.v=null,zs(c)}n.setRequestHeader=function(c,h){this.u.append(c,h)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=h.next();return c.join(`\r
`)};function zs(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function um(c){let h="";return z(c,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Ou(c,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=um(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):ge(c,h,p))}function Pe(c){it.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Pe,it);var pA=/^https?$/i,mA=["POST","PUT"];n=Pe.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Su.g(),this.v=this.o?Up(this.o):Up(Su),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(k){hm(this,k);return}if(c=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const k of _.keys())p.set(k,_.get(k));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),b=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(mA,h,void 0))||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,M]of p)this.g.setRequestHeader(k,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pm(this),this.u=!0,this.g.send(c),this.u=!1}catch(k){hm(this,k)}};function hm(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.m=5,dm(c),tc(c)}function dm(c){c.A||(c.A=!0,dt(c,"complete"),dt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,dt(this,"complete"),dt(this,"abort"),tc(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tc(this,!0)),Pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fm(this):this.bb())},n.bb=function(){fm(this)};function fm(c){if(c.h&&typeof o<"u"&&(!c.v[1]||In(c)!=4||c.Z()!=2)){if(c.u&&In(c)==4)Vp(c.Ea,0,c);else if(dt(c,"readystatechange"),In(c)==4){c.h=!1;try{const M=c.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=M===0){var b=String(c.D).match(rm)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),_=!pA.test(b?b.toLowerCase():"")}p=_}if(p)dt(c,"complete"),dt(c,"success");else{c.m=6;try{var k=2<In(c)?c.g.statusText:""}catch{k=""}c.l=k+" ["+c.Z()+"]",dm(c)}}finally{tc(c)}}}}function tc(c,h){if(c.g){pm(c);const p=c.g,_=c.v[0]?()=>{}:null;c.g=null,c.v=null,h||dt(c,"ready");try{p.onreadystatechange=_}catch{}}}function pm(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function In(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),KT(h)}};function mm(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function _A(c){const h={};c=(c.g&&2<=In(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(B(c[_]))continue;var p=T(c[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=h[b]||[];h[b]=k,k.push(p)}w(h,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(c,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||h}function _m(c){this.Aa=0,this.i=[],this.j=new Bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,c),this.cb=Ks("retryDelaySeedMs",1e4,c),this.Wa=Ks("forwardChannelMaxRetries",2,c),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Jp(c&&c.concurrentRequestLimit),this.Da=new dA,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_m.prototype,n.la=8,n.G=1,n.connect=function(c,h,p,_){ft(0),this.W=c,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=bm(this,null,this.W),rc(this)};function Vu(c){if(gm(c),c.G==3){var h=c.U++,p=yn(c.I);if(ge(p,"SID",c.K),ge(p,"RID",h),ge(p,"TYPE","terminate"),Hs(c,p),h=new jn(c,c.j,h),h.L=2,h.v=Xa(yn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Rm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Qa(h)}Am(c)}function nc(c){c.g&&(Mu(c),c.g.cancel(),c.g=null)}function gm(c){nc(c),c.u&&(a.clearTimeout(c.u),c.u=null),ic(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function rc(c){if(!Xp(c.h)&&!c.s){c.s=!0;var h=c.Ga;xs||kp(),Os||(xs(),Os=!0),mu.add(h,c),c.B=0}}function gA(c,h){return Zp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=h.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Us(m(c.Ga,c,h),Tm(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const b=new jn(this,this.j,c);let k=this.o;if(this.S&&(k?(k=g(k),E(k,this.S)):k=this.S),this.m!==null||this.O||(b.H=k,k=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Im(this,b,h),p=yn(this.I),ge(p,"RID",c),ge(p,"CVER",22),this.D&&ge(p,"X-HTTP-Session-Id",this.D),Hs(this,p),k&&(this.O?h="headers="+encodeURIComponent(String(um(k)))+"&"+h:this.m&&Ou(p,this.m,k)),xu(this.h,b),this.Ua&&ge(p,"TYPE","init"),this.P?(ge(p,"$req",h),ge(p,"SID","null"),b.T=!0,Pu(b,p,null)):Pu(b,p,h),this.G=2}}else this.G==3&&(c?ym(this,c):this.i.length==0||Xp(this.h)||ym(this))};function ym(c,h){var p;h?p=h.l:p=c.U++;const _=yn(c.I);ge(_,"SID",c.K),ge(_,"RID",p),ge(_,"AID",c.T),Hs(c,_),c.m&&c.o&&Ou(_,c.m,c.o),p=new jn(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),h&&(c.i=h.D.concat(c.i)),h=Im(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),xu(c.h,p),Pu(p,_,h)}function Hs(c,h){c.H&&z(c.H,function(p,_){ge(h,_,p)}),c.l&&nm({},function(p,_){ge(h,_,p)})}function Im(c,h,p){p=Math.min(c.i.length,p);var _=c.l?m(c.l.Na,c.l,c):null;e:{var b=c.i;let k=-1;for(;;){const M=["count="+p];k==-1?0<p?(k=b[0].g,M.push("ofs="+k)):k=0:M.push("ofs="+k);let fe=!0;for(let Xe=0;Xe<p;Xe++){let ae=b[Xe].g;const st=b[Xe].map;if(ae-=k,0>ae)k=Math.max(0,b[Xe].g-100),fe=!1;else try{fA(st,M,"req"+ae+"_")}catch{_&&_(st)}}if(fe){_=M.join("&");break e}}}return c=c.i.splice(0,p),h.D=c,_}function vm(c){if(!c.g&&!c.u){c.Y=1;var h=c.Fa;xs||kp(),Os||(xs(),Os=!0),mu.add(h,c),c.v=0}}function Lu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Us(m(c.Fa,c),Tm(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,wm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Us(m(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),nc(this),wm(this))};function Mu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function wm(c){c.g=new jn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var h=yn(c.qa);ge(h,"RID","rpc"),ge(h,"SID",c.K),ge(h,"AID",c.T),ge(h,"CI",c.F?"0":"1"),!c.F&&c.ja&&ge(h,"TO",c.ja),ge(h,"TYPE","xmlhttp"),Hs(c,h),c.m&&c.o&&Ou(h,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=Xa(yn(h)),p.m=null,p.P=!0,Hp(p,c)}n.Za=function(){this.C!=null&&(this.C=null,nc(this),Lu(this),ft(19))};function ic(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Em(c,h){var p=null;if(c.g==h){ic(c),Mu(c),c.g=null;var _=2}else if(Du(c.h,h))p=h.D,em(c.h,h),_=1;else return;if(c.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var b=c.B;_=za(),dt(_,new $p(_,p)),rc(c)}else vm(c);else if(b=h.s,b==3||b==0&&0<h.X||!(_==1&&gA(c,h)||_==2&&Lu(c)))switch(p&&0<p.length&&(h=c.h,h.i=h.i.concat(p)),b){case 1:Or(c,5);break;case 4:Or(c,10);break;case 3:Or(c,6);break;default:Or(c,2)}}}function Tm(c,h){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*h}function Or(c,h){if(c.j.info("Error code "+h),h==2){var p=m(c.fb,c),_=c.Xa;const b=!_;_=new xr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ya(_,"https"),Xa(_),b?uA(_.toString(),p):hA(_.toString(),p)}else ft(2);c.G=0,c.l&&c.l.sa(h),Am(c),gm(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Am(c){if(c.G=0,c.ka=[],c.l){const h=tm(c.h);(h.length!=0||c.i.length!=0)&&(P(c.ka,h),P(c.ka,c.i),c.h.i.length=0,N(c.i),c.i.length=0),c.l.ra()}}function bm(c,h,p){var _=p instanceof xr?yn(p):new xr(p);if(_.g!="")h&&(_.g=h+"."+_.g),Ja(_,_.s);else{var b=a.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var k=new xr(null);_&&Ya(k,_),h&&(k.g=h),b&&Ja(k,b),p&&(k.l=p),_=k}return p=c.D,h=c.ya,p&&h&&ge(_,p,h),ge(_,"VER",c.la),Hs(c,_),_}function Rm(c,h,p){if(h&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Ca&&!c.pa?new Pe(new Za({eb:p})):new Pe(c.pa),h.Ha(c.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sm(){}n=Sm.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sc(){}sc.prototype.g=function(c,h){return new kt(c,h)};function kt(c,h){it.call(this),this.g=new _m(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(c?c["X-WebChannel-Client-Profile"]=h.va:c={"X-WebChannel-Client-Profile":h.va}),this.g.S=c,(c=h&&h.Sb)&&!B(c)&&(this.g.m=c),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!B(h)&&(this.g.D=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new bi(this)}R(kt,it),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Vu(this.g)},kt.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=Tu(c),c=p);h.i.push(new eA(h.Ya++,c)),h.G==3&&rc(h)},kt.prototype.N=function(){this.g.l=null,delete this.j,Vu(this.g),delete this.g,kt.aa.N.call(this)};function Cm(c){bu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const p in h){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}R(Cm,bu);function Pm(){Ru.call(this),this.status=1}R(Pm,Ru);function bi(c){this.g=c}R(bi,Sm),bi.prototype.ua=function(){dt(this.g,"a")},bi.prototype.ta=function(c){dt(this.g,new Cm(c))},bi.prototype.sa=function(c){dt(this.g,new Pm)},bi.prototype.ra=function(){dt(this.g,"b")},sc.prototype.createWebChannel=sc.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,GI=function(){return new sc},$I=function(){return za()},jI=Nr,wh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ka.NO_ERROR=0,Ka.TIMEOUT=8,Ka.HTTP_ERROR=6,Ec=Ka,Gp.COMPLETE="complete",WI=Gp,Bp.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",it.prototype.listen=it.prototype.K,fo=Bp,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,qI=Pe}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});const d_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new _s("@firebase/firestore");function xi(){return dr.logLevel}function ok(n){dr.setLogLevel(n)}function x(n,...e){if(dr.logLevel<=ne.DEBUG){const t=e.map(Gd);dr.debug(`Firestore (${vs}): ${n}`,...t)}}function Oe(n,...e){if(dr.logLevel<=ne.ERROR){const t=e.map(Gd);dr.error(`Firestore (${vs}): ${n}`,...t)}}function dn(n,...e){if(dr.logLevel<=ne.WARN){const t=e.map(Gd);dr.warn(`Firestore (${vs}): ${n}`,...t)}}function Gd(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+n;throw Oe(e),new Error(e)}function $(n,e){n||q()}function ak(n,e){n||q()}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ze.UNAUTHENTICATED))}shutdown(){}}class lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uk{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new zI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new ze(e)}}class hk{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class dk{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new hk(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){$(this.o===void 0);const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($(typeof t.token=="string"),this.R=t.token,new fk(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Ji(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function HI(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new Te(0,0))}static max(){return new G(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(),r===void 0?r=e.length-t:r>e.length-t&&q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Zt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Zt.isNumericId(e),i=Zt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Zt.extractNumericId(e).compare(Zt.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ir.fromString(e.substring(4,e.length-2))}}class ie extends Zt{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const _k=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends Zt{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return _k.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ie.fromString(e))}static fromName(e){return new F(ie.fromString(e).popFirst(5))}static empty(){return new F(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ie(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Eh(n){return n.fields.find(e=>e.kind===2)}function Mr(n){return n.fields.filter(e=>e.kind!==2)}qc.UNKNOWN_ID=-1;class Tc{constructor(e,t){this.fieldPath=e,this.kind=t}}class jo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new jo(0,Lt.min())}}function QI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Te(t+1,0):new Te(t,r));return new Lt(i,F.empty(),e)}function YI(n){return new Lt(n.readTime,n.key,-1)}class Lt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Lt(G.min(),F.empty(),-1)}static max(){return new Lt(G.max(),F.empty(),-1)}}function zd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==JI)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,r)=>{t(e)})}static reject(e){return new A((t,r)=>{r(e)})}static waitFor(e){return new A((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=A.resolve(!1);for(const r of e)t=t.next(i=>i?A.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new A((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{static open(e,t,r,i){try{return new Sl(t,e.transaction(i,r))}catch(s){throw new Eo(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Eo(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Kd(r.target.error);this.V.reject(new Eo(e,i))}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new yk(t)}}class cn{static delete(e){return x("SimpleDb","Removing database:",e),Ur(window.indexedDB.deleteDatabase(e)).toPromise()}static p(){if(!Oo())return!1;if(cn.S())return!0;const e=Re(),t=cn.D(e),r=0<t&&t<10,i=ZI(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static S(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static C(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.F=r,cn.D(Re())===12.2&&Oe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Eo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new D(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new D(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Eo(e,o))},i.onupgradeneeded=s=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.F.O(o,i.transaction,s.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}B(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Sl.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),A.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ZI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class gk{constructor(e){this.L=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.L=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ur(this.L.delete())}}class Eo extends D{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Sr(n){return n.name==="IndexedDbTransactionError"}class yk{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ur(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),Ur(this.store.add(e))}get(e){return Ur(this.store.get(e)).next(t=>(t===void 0&&(t=null),x("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),Ur(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),Ur(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new A((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new A((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new A((r,i)=>{t.onerror=s=>{const o=Kd(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new gk(a),u=t(a.primaryKey,a.value,l);if(u instanceof A){const d=u.catch(f=>(l.done(),A.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>A.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ur(n){return new A((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Kd(r.target.error);t(i)}})}let f_=!1;function Kd(n){const e=cn.D(Re());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return f_||(f_=!0,setTimeout(()=>{throw r},0)),r}}return n}class Ik{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){x("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Sr(t)?x("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Rr(t)}await this.X(6e4)})}}class vk{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(x("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=YI(s);zd(o,r)>0&&(r=o)}),new Lt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Tt.oe=-1;function Ia(n){return n==null}function $o(n){return n===0&&1/n==-1/0}function ev(n){return typeof n=="number"&&Number.isInteger(n)&&!$o(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=p_(e)),e=wk(n.get(t),e);return p_(e)}function wk(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function p_(n){return n+""}function on(n){const e=n.length;if($(e>=2),e===2)return $(n.charAt(0)===""&&n.charAt(1)===""),ie.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&q(),n.charAt(o+1)){case"":const a=n.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:q()}s=o+2}return new ie(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e){return[n,lt(e)]}function tv(n,e,t){return[n,lt(e),t]}const Ek={},Tk=["prefixPath","collectionGroup","readTime","documentId"],Ak=["prefixPath","collectionGroup","documentId"],bk=["collectionGroup","readTime","prefixPath","documentId"],Rk=["canonicalId","targetId"],Sk=["targetId","path"],Ck=["path","targetId"],Pk=["collectionId","parent"],kk=["indexId","uid"],Nk=["uid","sequenceNumber"],Dk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xk=["indexId","uid","orderedDocumentKey"],Ok=["userId","collectionPath","documentId"],Vk=["userId","collectionPath","largestBatchId"],Lk=["userId","collectionGroup","largestBatchId"],nv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Mk=[...nv,"documentOverlays"],rv=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],iv=rv,Hd=[...iv,"indexConfiguration","indexState","indexEntries"],Fk=Hd,Uk=[...Hd,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends XI{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function We(n,e){const t=U(n);return cn.C(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Cr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce=class Ah{constructor(e,t){this.comparator=e,this.root=t||sr.EMPTY}insert(e,t){return new Ah(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,sr.BLACK,null,null))}remove(e){return new Ah(this.comparator,this.root.remove(e,this.comparator).copy(null,null,sr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lc(this.root,e,this.comparator,!0)}},lc=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},sr=class vn{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??vn.RED,this.left=i??vn.EMPTY,this.right=s??vn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new vn(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return vn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}};sr.EMPTY=null,sr.RED=!0,sr.BLACK=!1;sr.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,r,i,s){return this}insert(e,t,r){return new sr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new g_(this.data.getIterator())}getIteratorFrom(e){return new g_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class g_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ci(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new At([])}unionWith(e){let t=new de(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new At(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ov("Invalid base64 string: "+s):s}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const qk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(n){if($(!!n),typeof n=="string"){let e=0;const t=qk.exec(n);if($(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dn(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Pl(n){const e=n.mapValue.fields.__previous_value__;return Cl(e)?Pl(e):e}function Go(n){const e=Nn(n.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,t,r,i,s,o,a,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class fr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},bc={nullValue:"NULL_VALUE"};function pr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cl(n)?4:av(n)?9007199254740991:kl(n)?10:11:q()}function fn(n,e){if(n===e)return!0;const t=pr(n);if(t!==pr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Go(n).isEqual(Go(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nn(i.timestampValue),a=Nn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Dn(i.bytesValue).isEqual(Dn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),a=Ie(s.doubleValue);return o===a?$o(o)===$o(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Ji(n.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(__(o)!==__(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!fn(o[l],a[l])))return!1;return!0}(n,e);default:return q()}}function zo(n,e){return(n.values||[]).find(t=>fn(t,e))!==void 0}function mr(n,e){if(n===e)return 0;const t=pr(n),r=pr(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ie(s.integerValue||s.doubleValue),l=Ie(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return y_(n.timestampValue,e.timestampValue);case 4:return y_(Go(n),Go(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Dn(s),l=Dn(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=Y(a[u],l[u]);if(d!==0)return d}return Y(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Y(Ie(s.latitude),Ie(o.latitude));return a!==0?a:Y(Ie(s.longitude),Ie(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return I_(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,u,d;const f=s.fields||{},m=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,N=Y(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:I_(y,R)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Zn.mapValue&&o===Zn.mapValue)return 0;if(s===Zn.mapValue)return 1;if(o===Zn.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=Y(l[f],d[f]);if(m!==0)return m;const y=mr(a[l[f]],u[d[f]]);if(y!==0)return y}return Y(l.length,d.length)}(n.mapValue,e.mapValue);default:throw q()}}function y_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Nn(n),r=Nn(e),i=Y(t.seconds,r.seconds);return i!==0?i:Y(t.nanos,r.nanos)}function I_(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=mr(t[i],r[i]);if(s)return s}return Y(t.length,r.length)}function Xi(n){return bh(n)}function bh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Nn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Dn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=bh(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${bh(t.fields[o])}`;return i+"}"}(n.mapValue):q()}function Rc(n){switch(pr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pl(n);return e?16+Rc(e):16;case 5:return 2*n.stringValue.length;case 6:return Dn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Rc(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Cr(r.fields,(s,o)=>{i+=s.length+Rc(o)}),i}(n.mapValue);default:throw q()}}function ni(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Rh(n){return!!n&&"integerValue"in n}function Ko(n){return!!n&&"arrayValue"in n}function v_(n){return!!n&&"nullValue"in n}function w_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sc(n){return!!n&&"mapValue"in n}function kl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function To(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Cr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=To(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=To(n.arrayValue.values[t]);return e}return Object.assign({},n)}function av(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const cv={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function jk(n){return"nullValue"in n?bc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ni(fr.empty(),F.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?kl(n)?cv:{mapValue:{}}:q()}function $k(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ni(fr.empty(),F.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?cv:"mapValue"in n?kl(n)?{mapValue:{}}:Zn:q()}function E_(n,e){const t=mr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function T_(n,e){const t=mr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=To(t)}setAll(e){let t=ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=To(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Sc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Cr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new et(To(this.value))}}function lv(n){const e=[];return Cr(n.fields,(t,r)=>{const i=new ve([t]);if(Sc(r)){const s=lv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ye(e,0,G.min(),G.min(),G.min(),et.empty(),0)}static newFoundDocument(e,t,r,i){return new ye(e,1,t,G.min(),r,i,0)}static newNoDocument(e,t){return new ye(e,2,t,G.min(),G.min(),et.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,G.min(),G.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){this.position=e,this.inclusive=t}}function A_(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),t.key):r=mr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function b_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{}class se extends uv{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new zk(e,t,r):t==="array-contains"?new Qk(e,r):t==="in"?new _v(e,r):t==="not-in"?new Yk(e,r):t==="array-contains-any"?new Jk(e,r):new se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Kk(e,r):new Hk(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(mr(t,this.value)):t!==null&&pr(this.value)===pr(t)&&this.matchesComparison(mr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends uv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new he(e,t)}matches(e){return Zi(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zi(n){return n.op==="and"}function Sh(n){return n.op==="or"}function Qd(n){return hv(n)&&Zi(n)}function hv(n){for(const e of n.filters)if(e instanceof he)return!1;return!0}function Ch(n){if(n instanceof se)return n.field.canonicalString()+n.op.toString()+Xi(n.value);if(Qd(n))return n.filters.map(e=>Ch(e)).join(",");{const e=n.filters.map(t=>Ch(t)).join(",");return`${n.op}(${e})`}}function dv(n,e){return n instanceof se?function(r,i){return i instanceof se&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(n,e):n instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&dv(o,i.filters[a]),!0):!1}(n,e):void q()}function fv(n,e){const t=n.filters.concat(e);return he.create(t,n.op)}function pv(n){return n instanceof se?function(t){return`${t.field.canonicalString()} ${t.op} ${Xi(t.value)}`}(n):n instanceof he?function(t){return t.op.toString()+" {"+t.getFilters().map(pv).join(" ,")+"}"}(n):"Filter"}class zk extends se{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kk extends se{constructor(e,t){super(e,"in",t),this.keys=mv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Hk extends se{constructor(e,t){super(e,"not-in",t),this.keys=mv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class Qk extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ko(t)&&zo(t.arrayValue,this.value)}}class _v extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zo(this.value.arrayValue,t)}}class Yk extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zo(this.value.arrayValue,t)}}class Jk extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ko(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ph(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Xk(n,e,t,r,i,s,o)}function ri(n){const e=U(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ch(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ia(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xi(r)).join(",")),e.ue=t}return e.ue}function va(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!b_(n.startAt,e.startAt)&&b_(n.endAt,e.endAt)}function Wc(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function jc(n,e){return n.filters.filter(t=>t instanceof se&&t.field.isEqual(e))}function R_(n,e,t){let r=bc,i=!0;for(const s of jc(n,e)){let o=bc,a=!0;switch(s.op){case"<":case"<=":o=jk(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=bc}E_({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];E_({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function S_(n,e,t){let r=Zn,i=!0;for(const s of jc(n,e)){let o=Zn,a=!0;switch(s.op){case">=":case">":o=$k(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Zn}T_({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];T_({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gv(n,e,t,r,i,s,o,a){return new Fn(n,e,t,r,i,s,o,a)}function ws(n){return new Fn(n)}function C_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Yd(n){return n.collectionGroup!==null}function ji(n){const e=U(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new de(ve.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ho(s,r))}),t.has(ve.keyField().canonicalString())||e.ce.push(new Ho(ve.keyField(),r))}return e.ce}function It(n){const e=U(n);return e.le||(e.le=Zk(e,ji(n))),e.le}function Zk(n,e){if(n.limitType==="F")return Ph(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ho(i.field,s)});const t=n.endAt?new _r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _r(n.startAt.position,n.startAt.inclusive):null;return Ph(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function kh(n,e){const t=n.filters.concat([e]);return new Fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $c(n,e,t){return new Fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function wa(n,e){return va(It(n),It(e))&&n.limitType===e.limitType}function yv(n){return`${ri(It(n))}|lt:${n.limitType}`}function Oi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>pv(i)).join(", ")}]`),Ia(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Xi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Xi(i)).join(",")),`Target(${r})`}(It(n))}; limitType=${n.limitType})`}function Ea(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ji(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=A_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ji(r),i)||r.endAt&&!function(o,a,l){const u=A_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ji(r),i))}(n,e)}function Iv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vv(n){return(e,t)=>{let r=!1;for(const i of ji(n)){const s=eN(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eN(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?mr(l,u):q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return sv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=new Ce(F.comparator);function bt(){return tN}const wv=new Ce(F.comparator);function po(...n){let e=wv;for(const t of n)e=e.insert(t.key,t);return e}function Ev(n){let e=wv;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function an(){return Ao()}function Tv(){return Ao()}function Ao(){return new Un(n=>n.toString(),(n,e)=>n.isEqual(e))}const nN=new Ce(F.comparator),rN=new de(F.comparator);function X(...n){let e=rN;for(const t of n)e=e.add(t);return e}const iN=new de(Y);function Jd(){return iN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$o(e)?"-0":e}}function Av(n){return{integerValue:""+n}}function bv(n,e){return ev(e)?Av(e):Xd(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this._=void 0}}function sN(n,e,t){return n instanceof es?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cl(s)&&(s=Pl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof ii?Sv(n,e):n instanceof si?Cv(n,e):function(i,s){const o=Rv(i,s),a=P_(o)+P_(i.Pe);return Rh(o)&&Rh(i.Pe)?Av(a):Xd(i.serializer,a)}(n,e)}function oN(n,e,t){return n instanceof ii?Sv(n,e):n instanceof si?Cv(n,e):t}function Rv(n,e){return n instanceof ts?function(r){return Rh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class es extends Nl{}class ii extends Nl{constructor(e){super(),this.elements=e}}function Sv(n,e){const t=Pv(e);for(const r of n.elements)t.some(i=>fn(i,r))||t.push(r);return{arrayValue:{values:t}}}class si extends Nl{constructor(e){super(),this.elements=e}}function Cv(n,e){let t=Pv(e);for(const r of n.elements)t=t.filter(i=>!fn(i,r));return{arrayValue:{values:t}}}class ts extends Nl{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function P_(n){return Ie(n.integerValue||n.doubleValue)}function Pv(n){return Ko(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.field=e,this.transform=t}}function aN(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ii&&i instanceof ii||r instanceof si&&i instanceof si?Ji(r.elements,i.elements,fn):r instanceof ts&&i instanceof ts?fn(r.Pe,i.Pe):r instanceof es&&i instanceof es}(n.transform,e.transform)}class cN{constructor(e,t){this.version=e,this.transformResults=t}}class we{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new we}static exists(e){return new we(void 0,e)}static updateTime(e){return new we(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Dl{}function kv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ts(n.key,we.none()):new Es(n.key,n.data,we.none());{const t=n.data,r=et.empty();let i=new de(ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bn(n.key,r,new At(i.toArray()),we.none())}}function lN(n,e,t){n instanceof Es?function(i,s,o){const a=i.value.clone(),l=N_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Bn?function(i,s,o){if(!Cc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=N_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Nv(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function bo(n,e,t,r){return n instanceof Es?function(s,o,a,l){if(!Cc(s.precondition,o))return a;const u=s.value.clone(),d=D_(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof Bn?function(s,o,a,l){if(!Cc(s.precondition,o))return a;const u=D_(s.fieldTransforms,l,o),d=o.data;return d.setAll(Nv(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,a){return Cc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function uN(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Rv(r.transform,i||null);s!=null&&(t===null&&(t=et.empty()),t.set(r.field,s))}return t||null}function k_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ji(r,i,(s,o)=>aN(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Es extends Dl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bn extends Dl{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Nv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function N_(n,e,t){const r=new Map;$(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,oN(o,a,t[i]))}return r}function D_(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,sN(s,o,e))}return r}class Ts extends Dl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zd extends Dl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lN(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=bo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=bo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Tv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=kv(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(t,r)=>k_(t,r))&&Ji(this.baseMutations,e.baseMutations,(t,r)=>k_(t,r))}}class tf{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){$(e.mutations.length===r.length);let i=function(){return nN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tf(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,oe;function Dv(n){switch(n){default:return q();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function xv(n){if(n===void 0)return Oe("GRPC error has no .code"),C.UNKNOWN;switch(n){case Me.OK:return C.OK;case Me.CANCELLED:return C.CANCELLED;case Me.UNKNOWN:return C.UNKNOWN;case Me.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Me.INTERNAL:return C.INTERNAL;case Me.UNAVAILABLE:return C.UNAVAILABLE;case Me.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Me.NOT_FOUND:return C.NOT_FOUND;case Me.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Me.ABORTED:return C.ABORTED;case Me.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Me.DATA_LOSS:return C.DATA_LOSS;default:return q()}}(oe=Me||(Me={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=new ir([4294967295,4294967295],0);function x_(n){const e=Ov().encode(n),t=new BI;return t.update(e),new Uint8Array(t.digest())}function O_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ir([t,r],0),new ir([i,s],0)]}class rf{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new mo(`Invalid padding: ${t}`);if(r<0)throw new mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new mo(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ir.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(ir.fromNumber(r)));return i.compare(dN)===1&&(i=new ir([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=x_(e),[r,i]=O_(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ee(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rf(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=x_(e),[r,i]=O_(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ba.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Aa(G.min(),i,new Ce(Y),bt(),X())}}class ba{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ba(r,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Vv{constructor(e,t){this.targetId=e,this.me=t}}class Lv{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class V_{constructor(){this.fe=0,this.ge=L_(),this.pe=Ne.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),r=X();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:q()}}),new ba(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=L_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fN{constructor(e){this.Be=e,this.Le=new Map,this.ke=bt(),this.qe=uc(),this.Qe=uc(),this.Ke=new Ce(Y)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(Wc(s))if(r===0){const o=new F(s.path);this.We(t,o,ye.newNoDocument(o,G.min()))}else $(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Dn(r).toUint8Array()}catch(l){if(l instanceof ov)return dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new rf(o,i,s)}catch(l){return dn(l instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Le.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Wc(a.target)){const l=new F(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,ye.newNoDocument(l,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=X();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Aa(e,t,this.Ke,this.ke,r);return this.ke=bt(),this.qe=uc(),this.Qe=uc(),this.Ke=new Ce(Y),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new V_,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new de(Y),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new de(Y),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new V_),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function uc(){return new Ce(F.comparator)}function L_(){return new Ce(F.comparator)}const pN={asc:"ASCENDING",desc:"DESCENDING"},mN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_N={and:"AND",or:"OR"};class gN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nh(n,e){return n.useProto3Json||Ia(e)?e:{value:e}}function ns(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yN(n,e){return ns(n,e.toTimestamp())}function Ve(n){return $(!!n),G.fromTimestamp(function(t){const r=Nn(t);return new Te(r.seconds,r.nanos)}(n))}function sf(n,e){return Dh(n,e).canonicalString()}function Dh(n,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Fv(n){const e=ie.fromString(n);return $(Hv(e)),e}function Qo(n,e){return sf(n.databaseId,e.path)}function ln(n,e){const t=Fv(e);if(t.get(1)!==n.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(qv(t))}function Uv(n,e){return sf(n.databaseId,e)}function Bv(n){const e=Fv(n);return e.length===4?ie.emptyPath():qv(e)}function xh(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qv(n){return $(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function M_(n,e,t){return{name:Qo(n,e),fields:t.value.mapValue.fields}}function Wv(n,e,t){const r=ln(n,e.name),i=Ve(e.updateTime),s=e.createTime?Ve(e.createTime):G.min(),o=new et({mapValue:{fields:e.fields}}),a=ye.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function IN(n,e){return"found"in e?function(r,i){$(!!i.found),i.found.name,i.found.updateTime;const s=ln(r,i.found.name),o=Ve(i.found.updateTime),a=i.found.createTime?Ve(i.found.createTime):G.min(),l=new et({mapValue:{fields:i.found.fields}});return ye.newFoundDocument(s,o,a,l)}(n,e):"missing"in e?function(r,i){$(!!i.missing),$(!!i.readTime);const s=ln(r,i.missing),o=Ve(i.readTime);return ye.newNoDocument(s,o)}(n,e):q()}function vN(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?($(d===void 0||typeof d=="string"),Ne.fromBase64String(d||"")):($(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ne.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?C.UNKNOWN:xv(u.code);return new D(d,u.message||"")}(o);t=new Lv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ln(n,r.document.name),s=Ve(r.document.updateTime),o=r.document.createTime?Ve(r.document.createTime):G.min(),a=new et({mapValue:{fields:r.document.fields}}),l=ye.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Pc(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ln(n,r.document),s=r.readTime?Ve(r.readTime):G.min(),o=ye.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Pc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ln(n,r.document),s=r.removedTargetIds||[];t=new Pc([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hN(i,s),a=r.targetId;t=new Vv(a,o)}}return t}function Yo(n,e){let t;if(e instanceof Es)t={update:M_(n,e.key,e.value)};else if(e instanceof Ts)t={delete:Qo(n,e.key)};else if(e instanceof Bn)t={update:M_(n,e.key,e.data),updateMask:RN(e.fieldMask)};else{if(!(e instanceof Zd))return q();t={verify:Qo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof es)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ts)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,e.precondition)),t}function Oh(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?we.updateTime(Ve(s.updateTime)):s.exists!==void 0?we.exists(s.exists):we.none()}(e.currentDocument):we.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)$(a.setToServerValue==="REQUEST_TIME"),l=new es;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new ii(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new si(d)}else"increment"in a?l=new ts(o,a.increment):q();const u=ve.fromServerFormat(a.fieldPath);return new Ta(u,l)}(n,i)):[];if(e.update){e.update.name;const i=ln(n,e.update.name),s=new et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new At(u.map(d=>ve.fromServerFormat(d)))}(e.updateMask);return new Bn(i,s,o,t,r)}return new Es(i,s,t,r)}if(e.delete){const i=ln(n,e.delete);return new Ts(i,t)}if(e.verify){const i=ln(n,e.verify);return new Zd(i,t)}return q()}function wN(n,e){return n&&n.length>0?($(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Ve(i.updateTime):Ve(s);return o.isEqual(G.min())&&(o=Ve(s)),new cN(o,i.transformResults||[])}(t,e))):[]}function jv(n,e){return{documents:[Uv(n,e.path)]}}function $v(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Uv(n,i);const s=function(u){if(u.length!==0)return Kv(he.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Vi(m.field),direction:TN(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Nh(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:i}}function Gv(n){let e=Bv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){$(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(f){const m=zv(f);return m instanceof he&&Qd(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(R){return new Ho(Li(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Ia(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(f){const m=!!f.before,y=f.values||[];return new _r(y,m)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const m=!f.before,y=f.values||[];return new _r(y,m)}(t.endAt)),gv(e,i,o,s,a,"F",l,u)}function EN(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zv(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Li(t.unaryFilter.field);return se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Li(t.unaryFilter.field);return se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Li(t.unaryFilter.field);return se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Li(t.unaryFilter.field);return se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(t){return se.create(Li(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return he.create(t.compositeFilter.filters.map(r=>zv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(n):q()}function TN(n){return pN[n]}function AN(n){return mN[n]}function bN(n){return _N[n]}function Vi(n){return{fieldPath:n.canonicalString()}}function Li(n){return ve.fromServerFormat(n.fieldPath)}function Kv(n){return n instanceof se?function(t){if(t.op==="=="){if(w_(t.value))return{unaryFilter:{field:Vi(t.field),op:"IS_NAN"}};if(v_(t.value))return{unaryFilter:{field:Vi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(w_(t.value))return{unaryFilter:{field:Vi(t.field),op:"IS_NOT_NAN"}};if(v_(t.value))return{unaryFilter:{field:Vi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(t.field),op:AN(t.op),value:t.value}}}(n):n instanceof he?function(t){const r=t.getFilters().map(i=>Kv(i));return r.length===1?r[0]:{compositeFilter:{op:bN(t.op),filters:r}}}(n):q()}function RN(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,r,i,s=G.min(),o=G.min(),a=Ne.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new An(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.ht=e}}function SN(n,e){let t;if(e.document)t=Wv(n.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=F.fromSegments(e.noDocument.path),i=ai(e.noDocument.readTime);t=ye.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const r=F.fromSegments(e.unknownDocument.path),i=ai(e.unknownDocument.version);t=ye.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Te(i[0],i[1]);return G.fromTimestamp(s)}(e.readTime)),t}function F_(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Gc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Qo(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ns(s,o.version.toTimestamp()),createTime:ns(s,o.createTime.toTimestamp())}}(n.ht,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:oi(e.version)};else{if(!e.isUnknownDocument())return q();r.unknownDocument={path:t.path.toArray(),version:oi(e.version)}}return r}function Gc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function oi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ai(n){const e=new Te(n.seconds,n.nanoseconds);return G.fromTimestamp(e)}function Br(n,e){const t=(e.baseMutations||[]).map(s=>Oh(n.ht,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Oh(n.ht,s)),i=Te.fromMillis(e.localWriteTimeMs);return new ef(e.batchId,i,t,r)}function _o(n){const e=ai(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ai(n.lastLimboFreeSnapshotVersion):G.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return $(s.documents.length===1),It(ws(Bv(s.documents[0])))}(n.query):function(s){return It(Gv(s))}(n.query),new An(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ne.fromBase64String(n.resumeToken))}function Yv(n,e){const t=oi(e.snapshotVersion),r=oi(e.lastLimboFreeSnapshotVersion);let i;i=Wc(e.target)?jv(n.ht,e.target):$v(n.ht,e.target).ct;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ri(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function of(n){const e=Gv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$c(e,e.limit,"L"):e}function Yu(n,e){return new nf(e.largestBatchId,Oh(n.ht,e.overlayMutation))}function U_(n,e){const t=e.path.lastSegment();return[n,lt(e.path.popLast()),t]}function B_(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:oi(r.readTime),documentKey:lt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{getBundleMetadata(e,t){return q_(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ai(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return q_(e).put(function(i){return{bundleId:i.id,createTime:oi(Ve(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return W_(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:of(s.bundledQuery),readTime:ai(s.readTime)}}(r)})}saveNamedQuery(e,t){return W_(e).put(function(i){return{name:i.name,readTime:oi(Ve(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function q_(n){return We(n,"bundles")}function W_(n){return We(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const r=t.uid||"";return new xl(e,r)}getOverlay(e,t){return Zs(e).get(U_(this.userId,t)).next(r=>r?Yu(this.serializer,r):null)}getOverlays(e,t){const r=an();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new nf(t,o);i.push(this.Tt(e,a))}),A.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(lt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Zs(e).j("collectionPathOverlayIndex",a))}),A.waitFor(s)}getOverlaysForCollection(e,t,r){const i=an(),s=lt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Zs(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Yu(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=an();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Zs(e).J({index:"collectionGroupOverlayIndex",range:a},(l,u,d)=>{const f=Yu(this.serializer,u);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}Tt(e,t){return Zs(e).put(function(i,s,o){const[a,l,u]=U_(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Yo(i.ht,o.mutation)}}(this.serializer,this.userId,t))}}function Zs(n){return We(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{It(e){return We(e,"globals")}getSessionToken(e){return this.It(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ne.fromUint8Array(r):Ne.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.It(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(Ie(e.integerValue));else if("doubleValue"in e){const r=Ie(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),$o(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),typeof r=="string"&&(r=Nn(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(Dn(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?av(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):kl(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):q()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){const r=e.fields||{};this.Rt(t,55);for(const i of Object.keys(r))this.gt(i,t),this.Et(r[i],t)}bt(e,t){var r,i;const s=e.fields||{};this.Rt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(Ie(a)),this.gt(o,t),this.Et(s[o],t)}vt(e,t){const r=e.values||[];this.Rt(t,50);for(const i of r)this.Et(i,t)}St(e,t){this.Rt(t,37),F.fromName(e).path.forEach(r=>{this.Rt(t,60),this.Ct(r,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}qr.Ft=new qr;function kN(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function j_(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=kN(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class NN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.xt(r.value),r=t.next();this.Ot()}Nt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Bt(r.value),r=t.next();this.Lt()}kt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.xt(r);else if(r<2048)this.xt(960|r>>>6),this.xt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|r>>>12),this.xt(128|63&r>>>6),this.xt(128|63&r);else{const i=t.codePointAt(0);this.xt(240|i>>>18),this.xt(128|63&i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i)}}this.Ot()}qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Bt(r);else if(r<2048)this.Bt(960|r>>>6),this.Bt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Bt(480|r>>>12),this.Bt(128|63&r>>>6),this.Bt(128|63&r);else{const i=t.codePointAt(0);this.Bt(240|i>>>18),this.Bt(128|63&i>>>12),this.Bt(128|63&i>>>6),this.Bt(128|63&i)}}this.Lt()}Qt(e){const t=this.Kt(e),r=j_(t);this.$t(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ut(e){const t=this.Kt(e),r=j_(t);this.$t(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(e){this.$t(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ht(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}xt(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Bt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===255?(this.jt(255),this.jt(0)):this.jt(e)}Ot(){this.Gt(0),this.Gt(1)}Lt(){this.jt(0),this.jt(1)}Gt(e){this.$t(1),this.buffer[this.position++]=e}jt(e){this.$t(1),this.buffer[this.position++]=~e}$t(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class DN{constructor(e){this.Jt=e}wt(e){this.Jt.Mt(e)}ft(e){this.Jt.kt(e)}Vt(e){this.Jt.Qt(e)}At(){this.Jt.Wt()}}class xN{constructor(e){this.Jt=e}wt(e){this.Jt.Nt(e)}ft(e){this.Jt.qt(e)}Vt(e){this.Jt.Ut(e)}At(){this.Jt.zt()}}class eo{constructor(){this.Jt=new NN,this.Yt=new DN(this.Jt),this.Zt=new xN(this.Jt)}seed(e){this.Jt.seed(e)}Xt(e){return e===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}en(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Wr(this.indexId,this.documentKey,this.arrayValue,r)}}function Kn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=$_(n.arrayValue,e.arrayValue),t!==0?t:(t=$_(n.directionalValue,e.directionalValue),t!==0?t:F.comparator(n.documentKey,e.documentKey)))}function $_(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.tn=new de((t,r)=>ve.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.nn=e.orderBy,this.rn=[];for(const t of e.filters){const r=t;r.isInequality()?this.tn=this.tn.add(r):this.rn.push(r)}}get sn(){return this.tn.size>1}on(e){if($(e.collectionGroup===this.collectionId),this.sn)return!1;const t=Eh(e);if(t!==void 0&&!this._n(t))return!1;const r=Mr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this._n(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.tn.size>0){const a=this.tn.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.an(a,l)||!this.un(this.nn[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.nn.length||!this.un(this.nn[o++],a))return!1}return!0}cn(){if(this.sn)return null;let e=new de(ve.comparator);const t=[];for(const r of this.rn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Tc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Tc(r.field,0))}for(const r of this.nn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Tc(r.field,r.dir==="asc"?0:1)));return new qc(qc.UNKNOWN_ID,this.collectionId,t,jo.empty())}_n(e){for(const t of this.rn)if(this.an(t,e))return!0;return!1}an(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}un(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(n){var e,t;if($(n instanceof se||n instanceof he),n instanceof se){if(n instanceof _v){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>se.create(n.field,"==",s)))||[];return he.create(i,"or")}return n}const r=n.filters.map(i=>Jv(i));return he.create(r,n.op)}function ON(n){if(n.getFilters().length===0)return[];const e=Mh(Jv(n));return $(Xv(e)),Vh(e)||Lh(e)?[e]:e.getFilters()}function Vh(n){return n instanceof se}function Lh(n){return n instanceof he&&Qd(n)}function Xv(n){return Vh(n)||Lh(n)||function(t){if(t instanceof he&&Sh(t)){for(const r of t.getFilters())if(!Vh(r)&&!Lh(r))return!1;return!0}return!1}(n)}function Mh(n){if($(n instanceof se||n instanceof he),n instanceof se)return n;if(n.filters.length===1)return Mh(n.filters[0]);const e=n.filters.map(r=>Mh(r));let t=he.create(e,n.op);return t=zc(t),Xv(t)?t:($(t instanceof he),$(Zi(t)),$(t.filters.length>1),t.filters.reduce((r,i)=>af(r,i)))}function af(n,e){let t;return $(n instanceof se||n instanceof he),$(e instanceof se||e instanceof he),t=n instanceof se?e instanceof se?function(i,s){return he.create([i,s],"and")}(n,e):z_(n,e):e instanceof se?z_(e,n):function(i,s){if($(i.filters.length>0&&s.filters.length>0),Zi(i)&&Zi(s))return fv(i,s.getFilters());const o=Sh(i)?i:s,a=Sh(i)?s:i,l=o.filters.map(u=>af(u,a));return he.create(l,"or")}(n,e),zc(t)}function z_(n,e){if(Zi(e))return fv(e,n.getFilters());{const t=e.filters.map(r=>af(n,r));return he.create(t,"or")}}function zc(n){if($(n instanceof se||n instanceof he),n instanceof se)return n;const e=n.getFilters();if(e.length===1)return zc(e[0]);if(hv(n))return n;const t=e.map(i=>zc(i)),r=[];return t.forEach(i=>{i instanceof se?r.push(i):i instanceof he&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(){this.ln=new cf}addToCollectionParentIndex(e,t){return this.ln.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Lt.min())}updateCollectionGroup(e,t,r){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class cf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new de(ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new de(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Uint8Array(0);class LN{constructor(e,t){this.databaseId=t,this.hn=new cf,this.Pn=new Un(r=>ri(r),(r,i)=>va(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.hn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.hn.add(t)});const s={collectionId:r,parent:lt(i)};return K_(e).put(s)}return A.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[HI(t),""],!1,!0);return K_(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(on(o.parent))}return r})}addFieldIndex(e,t){const r=to(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ki(e);return s.next(a=>{o.put(B_(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=to(e),i=ki(e),s=Pi(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=to(e),r=Pi(e),i=ki(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return A.forEach(this.Tn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new G_(r).cn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=Pi(e);let i=!0;const s=new Map;return A.forEach(this.Tn(t),o=>this.In(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=X();const a=[];return A.forEach(s,(l,u)=>{x("IndexedDbIndexManager",`Using index ${function(W){return`id=${W.indexId}|cg=${W.collectionGroup}|f=${W.fields.map(te=>`${te.fieldPath}:${te.kind}`).join(",")}`}(l)} to execute ${ri(t)}`);const d=function(W,te){const J=Eh(te);if(J===void 0)return null;for(const z of jc(W,J.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(u,l),f=function(W,te){const J=new Map;for(const z of Mr(te))for(const w of jc(W,z.fieldPath))switch(w.op){case"==":case"in":J.set(z.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return J.set(z.fieldPath.canonicalString(),w.value),Array.from(J.values())}return null}(u,l),m=function(W,te){const J=[];let z=!0;for(const w of Mr(te)){const g=w.kind===0?R_(W,w.fieldPath,W.startAt):S_(W,w.fieldPath,W.startAt);J.push(g.value),z&&(z=g.inclusive)}return new _r(J,z)}(u,l),y=function(W,te){const J=[];let z=!0;for(const w of Mr(te)){const g=w.kind===0?S_(W,w.fieldPath,W.endAt):R_(W,w.fieldPath,W.endAt);J.push(g.value),z&&(z=g.inclusive)}return new _r(J,z)}(u,l),R=this.dn(l,u,m),N=this.dn(l,u,y),P=this.En(l,u,f),L=this.An(l.indexId,d,R,m.inclusive,N,y.inclusive,P);return A.forEach(L,B=>r.G(B,t.limit).next(W=>{W.forEach(te=>{const J=F.fromSegments(te.documentKey);o.has(J)||(o=o.add(J),a.push(J))})}))}).next(()=>a)}return A.resolve(null)})}Tn(e){let t=this.Pn.get(e);return t||(e.filters.length===0?t=[e]:t=ON(he.create(e.filters,"and")).map(r=>Ph(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Pn.set(e,t),t)}An(e,t,r,i,s,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,s.length),u=l/(t!=null?t.length:1),d=[];for(let f=0;f<l;++f){const m=t?this.Rn(t[f/u]):hc,y=this.Vn(e,m,r[f%u],i),R=this.mn(e,m,s[f%u],o),N=a.map(P=>this.Vn(e,m,P,!0));d.push(...this.createRange(y,R,N))}return d}Vn(e,t,r,i){const s=new Wr(e,F.empty(),t,r);return i?s:s.en()}mn(e,t,r,i){const s=new Wr(e,F.empty(),t,r);return i?s.en():s}In(e,t){const r=new G_(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.on(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.Tn(t);return A.forEach(i,s=>this.In(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new de(ve.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(u=u.add(f.field));return u.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}fn(e,t){const r=new eo;for(const i of Mr(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Xt(i.kind);qr.Ft.dt(s,o)}return r.Ht()}Rn(e){const t=new eo;return qr.Ft.dt(e,t.Xt(0)),t.Ht()}gn(e,t){const r=new eo;return qr.Ft.dt(ni(this.databaseId,t),r.Xt(function(s){const o=Mr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ht()}En(e,t,r){if(r===null)return[];let i=[];i.push(new eo);let s=0;for(const o of Mr(e)){const a=r[s++];for(const l of i)if(this.pn(t,o.fieldPath)&&Ko(a))i=this.yn(i,o,a);else{const u=l.Xt(o.kind);qr.Ft.dt(a,u)}}return this.wn(i)}dn(e,t,r){return this.En(e,t,r.position)}wn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Ht();return t}yn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new eo;l.seed(a.Ht()),qr.Ft.dt(o,l.Xt(t.kind)),s.push(l)}return s}pn(e,t){return!!e.filters.find(r=>r instanceof se&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=to(e),i=ki(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return A.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const m=f?new jo(f.sequenceNumber,new Lt(ai(f.readTime),new F(on(f.documentKey)),f.largestBatchId)):jo.empty(),y=d.fields.map(([R,N])=>new Tc(ve.fromServerFormat(R),N));return new qc(d.indexId,d.collectionGroup,y,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Y(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=to(e),s=ki(e);return this.Sn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>A.forEach(a,l=>s.put(B_(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return A.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),A.forEach(a,l=>this.bn(e,i,l).next(u=>{const d=this.Dn(s,l);return u.isEqual(d)?A.resolve():this.vn(e,s,l,u,d)}))))})}Cn(e,t,r,i){return Pi(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Fn(e,t,r,i){return Pi(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}bn(e,t,r){const i=Pi(e);let s=new de(Kn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new Wr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Dn(e,t){let r=new de(Kn);const i=this.fn(t,e);if(i==null)return r;const s=Eh(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Ko(o))for(const a of o.arrayValue.values||[])r=r.add(new Wr(t.indexId,e.key,this.Rn(a),i))}else r=r.add(new Wr(t.indexId,e.key,hc,i));return r}vn(e,t,r,i,s){x("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,u,d,f,m){const y=l.getIterator(),R=u.getIterator();let N=Ci(y),P=Ci(R);for(;N||P;){let L=!1,B=!1;if(N&&P){const W=d(N,P);W<0?B=!0:W>0&&(L=!0)}else N!=null?B=!0:L=!0;L?(f(P),P=Ci(R)):B?(m(N),N=Ci(y)):(N=Ci(y),P=Ci(R))}}(i,s,Kn,a=>{o.push(this.Cn(e,t,r,a))},a=>{o.push(this.Fn(e,t,r,a))}),A.waitFor(o)}Sn(e){let t=1;return ki(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Kn(o,a)).filter((o,a,l)=>!a||Kn(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Kn(o,e),l=Kn(o,t);if(a===0)i[0]=e.en();else if(a>0&&l<0)i.push(o),i.push(o.en());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Mn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,hc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,hc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Mn(e,t){return Kn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(H_)}getMinOffset(e,t){return A.mapArray(this.Tn(t),r=>this.In(e,r).next(i=>i||q())).next(H_)}}function K_(n){return We(n,"collectionParents")}function Pi(n){return We(n,"indexEntries")}function to(n){return We(n,"indexConfiguration")}function ki(n){return We(n,"indexState")}function H_(n){$(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;zd(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Lt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(l.next(()=>{$(a===1)}));const u=[];for(const d of t.mutations){const f=tv(e,d.key.path,t.batchId);s.push(i.delete(f)),u.push(d.key)}return A.waitFor(s).next(()=>u)}function Kc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw q();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(41943040,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);class Ol{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.xn={}}static Pt(e,t,r,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ol(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Hn(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Mi(e),o=Hn(e);return o.add({}).next(a=>{$(typeof a=="number");const l=new ef(a,t,r,i),u=function(y,R,N){const P=N.baseMutations.map(B=>Yo(y.ht,B)),L=N.mutations.map(B=>Yo(y.ht,B));return{userId:R,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:P,mutations:L}}(this.serializer,this.userId,l),d=[];let f=new de((m,y)=>Y(m.canonicalString(),y.canonicalString()));for(const m of i){const y=tv(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(u)),d.push(s.put(y,Ek))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.xn[a]=l.keys()}),A.waitFor(d).next(()=>l)})}lookupMutationBatch(e,t){return Hn(e).get(t).next(r=>r?($(r.userId===this.userId),Br(this.serializer,r)):null)}On(e,t){return this.xn[t]?A.resolve(this.xn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.xn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Hn(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&($(a.batchId>=r),s=Br(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Hn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Hn(e).U("userMutationsIndex",t).next(r=>r.map(i=>Br(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ac(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Mi(e).J({range:i},(o,a,l)=>{const[u,d,f]=o,m=on(d);if(u===this.userId&&t.path.isEqual(m))return Hn(e).get(f).next(y=>{if(!y)throw q();$(y.userId===this.userId),s.push(Br(this.serializer,y))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(Y);const i=[];return t.forEach(s=>{const o=Ac(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Mi(e).J({range:a},(u,d,f)=>{const[m,y,R]=u,N=on(y);m===this.userId&&s.path.isEqual(N)?r=r.add(R):f.done()});i.push(l)}),A.waitFor(i).next(()=>this.Nn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Ac(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new de(Y);return Mi(e).J({range:o},(l,u,d)=>{const[f,m,y]=l,R=on(m);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(y)):d.done()}).next(()=>this.Nn(e,a))}Nn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Hn(e).get(s).next(o=>{if(o===null)throw q();$(o.userId===this.userId),r.push(Br(this.serializer,o))}))}),A.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Zv(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Bn(t.batchId)}),A.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Bn(e){delete this.xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Mi(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=on(s[1]);i.push(l)}else a.done()}).next(()=>{$(i.length===0)})})}containsKey(e,t){return ew(e,this.userId,t)}Ln(e){return tw(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ew(n,e,t){const r=Ac(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Mi(n).J({range:s,H:!0},(a,l,u)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),u.done()}).next(()=>o)}function Hn(n){return We(n,"mutations")}function Mi(n){return We(n,"documentMutations")}function tw(n){return We(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ci(0)}static Qn(){return new ci(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Kn(e).next(t=>{const r=new ci(t.highestTargetId);return t.highestTargetId=r.next(),this.$n(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Kn(e).next(t=>G.fromTimestamp(new Te(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Kn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.$n(e,i)))}addTargetData(e,t){return this.Un(e,t).next(()=>this.Kn(e).next(r=>(r.targetCount+=1,this.Wn(t,r),this.$n(e,r))))}updateTargetData(e,t){return this.Un(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ni(e).delete(t.targetId)).next(()=>this.Kn(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.$n(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Ni(e).J((o,a)=>{const l=_o(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Ni(e).J((r,i)=>{const s=_o(i);t(s)})}Kn(e){return Y_(e).get("targetGlobalKey").next(t=>($(t!==null),t))}$n(e,t){return Y_(e).put("targetGlobalKey",t)}Un(e,t){return Ni(e).put(Yv(this.serializer,t))}Wn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Kn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=ri(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ni(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=_o(a);va(t,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Yn(e);return t.forEach(o=>{const a=lt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),A.waitFor(i)}removeMatchingKeys(e,t,r){const i=Yn(e);return A.forEach(t,s=>{const o=lt(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Yn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Yn(e);let s=X();return i.J({range:r,H:!0},(o,a,l)=>{const u=on(o[1]),d=new F(u);s=s.add(d)}).next(()=>s)}containsKey(e,t){const r=lt(t.path),i=IDBKeyRange.bound([r],[HI(r)],!1,!0);let s=0;return Yn(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(e,t){return Ni(e).get(t).next(r=>r?_o(r):null)}}function Ni(n){return We(n,"targets")}function Y_(n){return We(n,"targetGlobal")}function Yn(n){return We(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_([n,e],[t,r]){const i=Y(n,t);return i===0?Y(e,r):i}class FN{constructor(e){this.Gn=e,this.buffer=new de(J_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();J_(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Sr(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Rr(t)}await this.Yn(3e5)})}}class UN{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Tt.oe);const r=new FN(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Q_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Q_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,o,a,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),xi()<=ne.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function rw(n,e){return new UN(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,t){this.db=e,this.garbageCollector=rw(this,t)}Xn(e){const t=this.nr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}er(e,t){return this.rr(e,(r,i)=>t(i))}addReference(e,t,r){return dc(e,r)}removeReference(e,t,r){return dc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return dc(e,t)}ir(e,t){return function(i,s){let o=!1;return tw(i).Y(a=>ew(i,a,s).next(l=>(l&&(o=!0),A.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.rr(e,(o,a)=>{if(a<=t){const l=this.ir(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,G.min()),Yn(e).delete(function(f){return[0,lt(f.path)]}(o))))});i.push(l)}}).next(()=>A.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return dc(e,t)}rr(e,t){const r=Yn(e);let i,s=Tt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Tt.oe&&t(new F(on(i)),s),s=u,i=l):s=Tt.oe}).next(()=>{s!==Tt.oe&&t(new F(on(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function dc(n,e){return Yn(n).put(function(r,i){return{targetId:0,path:lt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.changes=new Un(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?A.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Vr(e).put(r)}removeEntry(e,t,r){return Vr(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Gc(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.sr(e,r)))}getEntry(e,t){let r=ye.newInvalidDocument(t);return Vr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(no(t))},(i,s)=>{r=this._r(t,s)}).next(()=>r)}ar(e,t){let r={size:0,document:ye.newInvalidDocument(t)};return Vr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(no(t))},(i,s)=>{r={document:this._r(t,s),size:Kc(s)}}).next(()=>r)}getEntries(e,t){let r=bt();return this.ur(e,t,(i,s)=>{const o=this._r(i,s);r=r.insert(i,o)}).next(()=>r)}cr(e,t){let r=bt(),i=new Ce(F.comparator);return this.ur(e,t,(s,o)=>{const a=this._r(s,o);r=r.insert(s,a),i=i.insert(s,Kc(o))}).next(()=>({documents:r,lr:i}))}ur(e,t,r){if(t.isEmpty())return A.resolve();let i=new de(eg);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(no(i.first()),no(i.last())),o=i.getIterator();let a=o.getNext();return Vr(e).J({index:"documentKeyIndex",range:s},(l,u,d)=>{const f=F.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&eg(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?d.$(no(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Gc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vr(e).U(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let d=bt();for(const f of u){const m=this._r(F.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Ea(t,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,i){let s=bt();const o=Z_(t,r),a=Z_(t,Lt.max());return Vr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,d)=>{const f=this._r(F.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new WN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return X_(e).get("remoteDocumentGlobalKey").next(t=>($(!!t),t))}sr(e,t){return X_(e).put("remoteDocumentGlobalKey",t)}_r(e,t){if(t){const r=SN(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(G.min())))return r}return ye.newInvalidDocument(e)}}function sw(n){return new qN(n)}class WN extends iw{constructor(e,t){super(),this.hr=e,this.trackRemovals=t,this.Pr=new Un(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new de((s,o)=>Y(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Pr.get(s);if(t.push(this.hr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=F_(this.hr.serializer,o);i=i.add(s.path.popLast());const u=Kc(l);r+=u-a.size,t.push(this.hr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=F_(this.hr.serializer,o.convertToNoDocument(G.min()));t.push(this.hr.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.hr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.hr.updateMetadata(e,r)),A.waitFor(t)}getFromCache(e,t){return this.hr.ar(e,t).next(r=>(this.Pr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.hr.cr(e,t).next(({documents:r,lr:i})=>(i.forEach((s,o)=>{this.Pr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function X_(n){return We(n,"remoteDocumentGlobal")}function Vr(n){return We(n,"remoteDocumentsV14")}function no(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Z_(n,e){const t=e.documentKey.path.toArray();return[n,Gc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function eg(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=Y(t[s],r[s]),i)return i;return i=Y(t.length,r.length),i||(i=Y(t[t.length-2],r[r.length-2]),i||Y(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&bo(r.mutation,i,At.empty(),Te.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const i=an();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=po();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=an();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=bt();const o=Ao(),a=function(){return Ao()}();return t.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Bn)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),bo(d.mutation,u,d.mutation.getFieldMask(),Te.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var f;return a.set(u,new jN(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Ao();let i=new Ce((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||At.empty();d=a.applyToLocalView(u,d),r.set(l,d);const f=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=Tv();d.forEach(m=>{if(!s.has(m)){const y=kv(t.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Yd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):A.resolve(an());let a=-1,l=s;return o.next(u=>A.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?A.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,X())).next(d=>({batchId:a,changes:Ev(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let i=po();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=po();return this.indexManager.getCollectionParents(e,s).next(a=>A.forEach(a,l=>{const u=function(f,m){return new Fn(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ye.newInvalidDocument(d)))});let a=po();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&bo(d.mutation,u,At.empty(),Te.now()),Ea(t,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return A.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ve(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:of(i.bundledQuery),readTime:Ve(i.readTime)}}(t)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.overlays=new Ce(F.comparator),this.dr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const r=an();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),A.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.dr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.dr.delete(r)),A.resolve()}getOverlaysForCollection(e,t,r){const i=an(),s=t.length+1,o=new F(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ce((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=an(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=an(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return A.resolve(a)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.dr.get(i.largestBatchId).delete(r.key);this.dr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nf(t,r));let s=this.dr.get(t);s===void 0&&(s=X(),this.dr.set(t,s)),this.dr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.Er=new de($e.Ar),this.Rr=new de($e.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new $e(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new $e(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new F(new ie([])),r=new $e(t,e),i=new $e(t,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new F(new ie([])),r=new $e(t,e),i=new $e(t,e+1);let s=X();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new $e(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return F.comparator(e.key,t.key)||Y(e.br,t.br)}static Vr(e,t){return Y(e.br,t.br)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new de($e.Ar)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ef(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),i=new $e(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const a=this.Cr(o.br);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(Y);return t.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{r=r.add(a.br)})}),A.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new $e(new F(s),0);let a=new de(Y);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.br)),!0)},o),A.resolve(this.Mr(a))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){$(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return A.forEach(t.mutations,i=>{const s=new $e(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new $e(t,0),i=this.vr.firstAfterOrEqual(r);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.Nr=e,this.docs=function(){return new Ce(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return A.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=bt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ye.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=bt();const o=t.path,a=new F(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zd(YI(d),r)<=0||(i.has(d.key)||Ea(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,r,i){q()}Br(e,t){return A.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new QN(this)}getSize(e){return A.resolve(this.size)}}class QN extends iw{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),A.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.persistence=e,this.Lr=new Un(t=>ri(t),va),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.kr=0,this.qr=new lf,this.targetCount=0,this.Qr=ci.qn()}forEachTarget(e,t){return this.Lr.forEach((r,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),A.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ci(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Un(t),A.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Lr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Lr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return A.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),A.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return A.resolve(r)}containsKey(e,t){return A.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Tt(0),this.Ur=!1,this.Ur=!0,this.Wr=new zN,this.referenceDelegate=e(this),this.Gr=new YN(this),this.indexManager=new VN,this.remoteDocumentCache=function(i){return new HN(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Qv(t),this.jr=new $N(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new KN(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const i=new JN(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return A.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class JN extends XI{constructor(e){super(),this.currentSequenceNumber=e}}class Vl{constructor(e){this.persistence=e,this.Zr=new lf,this.Xr=null}static ei(e){return new Vl(e)}get ti(){if(this.Xr)return this.Xr;throw q()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),A.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),A.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.ti,r=>{const i=F.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,G.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return A.or([()=>A.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Hc{constructor(e,t){this.persistence=e,this.ri=new Un(r=>lt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=rw(this,t)}static ei(e,t){return new Hc(e,t)}Hr(){}Jr(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return A.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?A.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Br(e,o=>this.ir(e,o,t).next(a=>{a||(r++,s.removeEntry(o,G.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),A.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),A.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rc(e.data.value)),t}ir(e,t,r){return A.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return A.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Sl("createOrUpgrade",t);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",m_,{unique:!0}),l.createObjectStore("documentMutations")}(e),tg(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),tg(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:G.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",m_,{unique:!0});const f=u.store("mutations"),m=d.map(y=>f.put(y));return A.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ii(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.si(s)))),r<7&&i>=7&&(o=o.next(()=>this.oi(s))),r<8&&i>=8&&(o=o.next(()=>this._i(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ai(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:Ok});u.createIndex("collectionPathOverlayIndex",Vk,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",Lk,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:Tk});u.createIndex("documentKeyIndex",Ak),u.createIndex("collectionGroupIndex",bk)}(e)).next(()=>this.ui(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ci(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:kk}).createIndex("sequenceNumberIndex",Nk,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:Dk}).createIndex("documentKeyIndex",xk,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}si(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Kc(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ii(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>A.forEach(a,l=>{$(l.userId===s.userId);const u=Br(this.serializer,l);return Zv(e,s.userId,u).next(()=>{})}))}))}oi(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new ie(o),u=function(f){return[0,lt(f)]}(l);s.push(t.get(u).next(d=>d?A.resolve():(f=>t.put({targetId:0,path:lt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>A.waitFor(s))})}_i(e,t){e.createObjectStore("collectionParents",{keyPath:Pk});const r=t.store("collectionParents"),i=new cf,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:lt(l)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ie(o);return s(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,l],u)=>{const d=on(a);return s(d.popLast())}))}ai(e){const t=e.store("targets");return t.J((r,i)=>{const s=_o(i),o=Yv(this.serializer,s);return t.put(o)})}ui(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),l=function(f){return f.document?new F(ie.fromString(f.document.name).popFirst(5)):f.noDocument?F.fromSegments(f.noDocument.path):f.unknownDocument?F.fromSegments(f.unknownDocument.path):q()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>A.waitFor(i))}ci(e,t){const r=t.store("mutations"),i=sw(this.serializer),s=new uf(Vl.ei,this.serializer.ht);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var u;let d=(u=a.get(l.userId))!==null&&u!==void 0?u:X();Br(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),A.forEach(a,(l,u)=>{const d=new ze(u),f=xl.Pt(this.serializer,d),m=s.getIndexManager(d),y=Ol.Pt(d,this.serializer,m,s.referenceDelegate);return new ow(i,y,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Th(t,Tt.oe),l).next()})})}}function tg(n){n.createObjectStore("targetDocuments",{keyPath:Sk}).createIndex("documentTargetsIndex",Ck,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Rk,{unique:!0}),n.createObjectStore("targetGlobal")}const Ju="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class hf{constructor(e,t,r,i,s,o,a,l,u,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.li=s,this.window=o,this.document=a,this.hi=u,this.Pi=d,this.Ti=f,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.di=null,this.Ei=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=m=>Promise.resolve(),!hf.p())throw new D(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new BN(this,i),this.Vi=t+"main",this.serializer=new Qv(l),this.mi=new cn(this.Vi,this.Ti,new XN(this.serializer)),this.Wr=new PN,this.Gr=new MN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=sw(this.serializer),this.jr=new CN,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,d===!1&&Oe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(C.FAILED_PRECONDITION,Ju);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Gr.getHighestSequenceNumber(e))}).then(e=>{this.$r=new Tt(e,this.hi)}).then(()=>{this.Ur=!0}).catch(e=>(this.mi&&this.mi.close(),Promise.reject(e)))}Si(e){return this.Ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.mi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>fc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(e).next(t=>{t||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(e)).next(t=>this.isPrimary&&!t?this.vi(e).next(()=>!1):!!t&&this.Ci(e).next(()=>!0))).catch(e=>{if(Sr(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.li.enqueueRetryable(()=>this.Ri(e)),this.isPrimary=e})}bi(e){return ro(e).get("owner").next(t=>A.resolve(this.Fi(t)))}Mi(e){return fc(e).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=We(t,"clientMetadata");return r.U().next(i=>{const s=this.Ni(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return A.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.fi)for(const t of e)this.fi.removeItem(this.Bi(t.clientId))}}wi(){this.Ei=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(e){return!!e&&e.ownerId===this.clientId}Di(e){return this.Pi?A.resolve(!0):ro(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Li(t.ownerId)){if(this.Fi(t)&&this.networkEnabled)return!0;if(!this.Fi(t)){if(!t.allowTabSynchronization)throw new D(C.FAILED_PRECONDITION,Ju);return!1}}return!(!this.networkEnabled||!this.inForeground)||fc(e).U().next(r=>this.Ni(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ur=!1,this.ki(),this.Ei&&(this.Ei.cancel(),this.Ei=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Th(e,Tt.oe);return this.vi(t).next(()=>this.Mi(t))}),this.mi.close(),this.Ki()}Ni(e,t){return e.filter(r=>this.Oi(r.updateTimeMs,t)&&!this.Li(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>fc(e).U().next(t=>this.Ni(t,18e5).map(r=>r.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(e,t){return Ol.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new LN(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return xl.Pt(this.serializer,e)}getBundleCache(){return this.jr}runTransaction(e,t,r){x("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===17?Uk:l===16?Fk:l===15?Hd:l===14?iv:l===13?rv:l===12?Mk:l===11?nv:void q()}(this.Ti);let o;return this.mi.runTransaction(e,i,s,a=>(o=new Th(a,this.$r?this.$r.next():Tt.oe),t==="readwrite-primary"?this.bi(o).next(l=>!!l||this.Di(o)).next(l=>{if(!l)throw Oe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new D(C.FAILED_PRECONDITION,JI);return r(o)}).next(l=>this.Ci(o).next(()=>l)):this.Ui(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ui(e){return ro(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Li(t.ownerId)&&!this.Fi(t)&&!(this.Pi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new D(C.FAILED_PRECONDITION,Ju)})}Ci(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ro(e).put("owner",t)}static p(){return cn.p()}vi(e){const t=ro(e);return t.get("owner").next(r=>this.Fi(r)?(x("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):A.resolve())}Oi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Oe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.di=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.di),this.inForeground=this.document.visibilityState==="visible")}qi(){this.di&&(this.document.removeEventListener("visibilitychange",this.di),this.di=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const t=/(?:Version|Mobile)\/1[456]/;Ry()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Li(e){var t;try{const r=((t=this.fi)===null||t===void 0?void 0:t.getItem(this.Bi(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Oe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Bi(this.clientId),String(Date.now()))}catch(e){Oe("Failed to set zombie client id.",e)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Bi(this.clientId))}catch{}}Bi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ro(n){return We(n,"owner")}function fc(n){return We(n,"clientMetadata")}function df(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=X(),i=X();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ff(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Ry()?8:ZI(Re())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Xi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ZN;return this.ts(e,t,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,t,o,a.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(xi()<=ne.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Oi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),A.resolve()):(xi()<=ne.DEBUG&&x("QueryEngine","Query:",Oi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(xi()<=ne.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Oi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,It(t))):A.resolve())}Xi(e,t){if(C_(t))return A.resolve(null);let r=It(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=$c(t,null,"F"),r=It(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=X(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.rs(t,a);return this.ss(t,u,o,l.readTime)?this.Xi(e,$c(t,null,"F")):this.os(e,u,t,l)}))})))}es(e,t,r,i){return C_(t)||i.isEqual(G.min())?A.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(t,s);return this.ss(t,o,r,i)?A.resolve(null):(xi()<=ne.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oi(t)),this.os(e,o,t,QI(i,-1)).next(a=>a))})}rs(e,t){let r=new de(vv(e));return t.forEach((i,s)=>{Ea(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return xi()<=ne.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Oi(t)),this.Zi.getDocumentsMatchingQuery(e,t,Lt.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new Ce(Y),this.cs=new Un(s=>ri(s),va),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ow(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function cw(n,e,t,r){return new eD(n,e,t,r)}async function lw(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function tD(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const f=u.batch,m=f.keys();let y=A.resolve();return m.forEach(R=>{y=y.next(()=>d.getEntry(l,R)).next(N=>{const P=u.docVersions.get(R);$(P!==null),N.version.compareTo(P)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=X();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function uw(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function nD(n,e){const t=U(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(t.Gr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>t.Gr.addMatchingKeys(s,d.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Ne.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(N,P,L){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,y,d)&&a.push(t.Gr.updateTargetData(s,y))});let l=bt(),u=X();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(hw(s,o,e.documentUpdates).next(d=>{l=d.Is,u=d.ds})),!r.isEqual(G.min())){const d=t.Gr.getLastRemoteSnapshotVersion(s).next(f=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(t.us=i,s))}function hw(n,e,t){let r=X(),i=X();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=bt();return t.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,ds:i}})}function rD(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rs(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):t.Gr.allocateTargetId(r).next(o=>(i=new An(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function is(n,e,t){const r=U(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sr(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Qc(n,e,t){const r=U(n);let i=G.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const f=U(l),m=f.cs.get(d);return m!==void 0?A.resolve(f.us.get(m)):f.Gr.getTargetData(u,d)}(r,o,It(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,t?i:G.min(),t?s:X())).next(a=>(pw(r,Iv(e),a),{documents:a,Es:s})))}function dw(n,e){const t=U(n),r=U(t.Gr),i=t.us.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function fw(n,e){const t=U(n),r=t.ls.get(e)||G.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.hs.getAllFromCollectionGroup(i,e,QI(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(pw(t,e,i),i))}function pw(n,e,t){let r=n.ls.get(e)||G.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}async function iD(n,e,t,r){const i=U(n);let s=X(),o=bt();for(const u of t){const d=e.As(u.metadata.name);u.document&&(s=s.add(d));const f=e.Rs(u);f.setReadTime(e.Vs(u.metadata.readTime)),o=o.insert(d,f)}const a=i.hs.newChangeBuffer({trackRemovals:!0}),l=await rs(i,function(d){return It(ws(ie.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>hw(u,a,o).next(d=>(a.apply(u),d)).next(d=>i.Gr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Gr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,d.Is,d.ds)).next(()=>d.Is)))}async function sD(n,e,t=X()){const r=await rs(n,It(of(e.bundledQuery))),i=U(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ve(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.jr.saveNamedQuery(s,e);const a=r.withResumeToken(Ne.EMPTY_BYTE_STRING,o);return i.us=i.us.insert(a.targetId,a),i.Gr.updateTargetData(s,a).next(()=>i.Gr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Gr.addMatchingKeys(s,t,r.targetId)).next(()=>i.jr.saveNamedQuery(s,e))})}function ng(n,e){return`firestore_clients_${n}_${e}`}function rg(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Xu(n,e){return`firestore_targets_${n}_${e}`}class Yc{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static fs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new D(i.error.code,i.error.message))),o?new Yc(e,t,i.state,s):(Oe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ro{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static fs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new D(r.error.code,r.error.message))),s?new Ro(e,r.state,i):(Oe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static fs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Jd();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=ev(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Jc(e,s):(Oe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class pf{constructor(e,t){this.clientId=e,this.onlineState=t}static fs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new pf(t.clientId,t.onlineState):(Oe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Fh{constructor(){this.activeTargetIds=Jd()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zu{constructor(e,t,r,i,s){this.window=e,this.li=t,this.persistenceKey=r,this.ws=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ss=this.bs.bind(this),this.Ds=new Ce(Y),this.started=!1,this.vs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Cs=ng(this.persistenceKey,this.ws),this.Fs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ds=this.Ds.insert(this.ws,new Fh),this.Ms=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.xs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Os=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ns=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Bs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ss)}static p(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.ws)continue;const i=this.getItem(ng(this.persistenceKey,r));if(i){const s=Jc.fs(r,i);s&&(this.Ds=this.Ds.insert(s.clientId,s))}}this.Ls();const t=this.storage.getItem(this.Ns);if(t){const r=this.ks(t);r&&this.qs(r)}for(const r of this.vs)this.bs(r);this.vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Qs(this.Ds)}isActiveQueryTarget(e){let t=!1;return this.Ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ks(e,"pending")}updateMutationState(e,t,r){this.Ks(e,t,r),this.$s(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Xu(this.persistenceKey,e));if(i){const s=Ro.fs(e,i);s&&(r=s.state)}}return t&&this.Us.ps(e),this.Ls(),r}removeLocalQueryTarget(e){this.Us.ys(e),this.Ls()}isLocalQueryTarget(e){return this.Us.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Xu(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ws(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.$s(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Gs(e)}notifyBundleLoaded(e){this.zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ss),this.removeItem(this.Cs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x("SharedClientState","READ",e,t),t}setItem(e,t){x("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}bs(e){const t=e;if(t.storageArea===this.storage){if(x("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Cs)return void Oe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.li.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ms.test(t.key)){if(t.newValue==null){const r=this.js(t.key);return this.Hs(r,null)}{const r=this.Js(t.key,t.newValue);if(r)return this.Hs(r.clientId,r)}}else if(this.xs.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(this.Os.test(t.key)){if(t.newValue!==null){const r=this.Xs(t.key,t.newValue);if(r)return this.eo(r)}}else if(t.key===this.Ns){if(t.newValue!==null){const r=this.ks(t.newValue);if(r)return this.qs(r)}}else if(t.key===this.Fs){const r=function(s){let o=Tt.oe;if(s!=null)try{const a=JSON.parse(s);$(typeof a=="number"),o=a}catch(a){Oe("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Tt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Bs){const r=this.no(t.newValue);await Promise.all(r.map(i=>this.syncEngine.ro(i)))}}}else this.vs.push(t)})}}get Us(){return this.Ds.get(this.ws)}Ls(){this.setItem(this.Cs,this.Us.gs())}Ks(e,t,r){const i=new Yc(this.currentUser,e,t,r),s=rg(this.persistenceKey,this.currentUser,e);this.setItem(s,i.gs())}$s(e){const t=rg(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Gs(e){const t={clientId:this.ws,onlineState:e};this.storage.setItem(this.Ns,JSON.stringify(t))}Ws(e,t,r){const i=Xu(this.persistenceKey,e),s=new Ro(e,t,r);this.setItem(i,s.gs())}zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Bs,t)}js(e){const t=this.Ms.exec(e);return t?t[1]:null}Js(e,t){const r=this.js(e);return Jc.fs(r,t)}Ys(e,t){const r=this.xs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Yc.fs(new ze(s),i,t)}Xs(e,t){const r=this.Os.exec(e),i=Number(r[1]);return Ro.fs(i,t)}ks(e){return pf.fs(e)}no(e){return JSON.parse(e)}async Zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.io(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}eo(e){return this.syncEngine.so(e.targetId,e.state,e.error)}Hs(e,t){const r=t?this.Ds.insert(e,t):this.Ds.remove(e),i=this.Qs(this.Ds),s=this.Qs(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.oo(o,a).then(()=>{this.Ds=r})}qs(e){this.Ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Qs(e){let t=Jd();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class mw{constructor(){this._o=new Fh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Fh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc=null;function eh(){return pc===null?pc=function(){return 268435456+Math.round(2147483648*Math.random())}():pc++,"0x"+pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class lD extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,o){const a=eh(),l=this.No(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,s,o),this.Lo(t,l,u,i).then(d=>(x("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw dn("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}ko(t,r,i,s,o,a){return this.Oo(t,r,i,s,o)}Bo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}No(t,r){const i=aD[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,i){const s=eh();return new Promise((o,a)=>{const l=new qI;l.setWithCredentials(!0),l.listenOnce(WI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ec.NO_ERROR:const d=l.getResponseJson();x(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ec.TIMEOUT:x(at,`RPC '${e}' ${s} timed out`),a(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ec.HTTP_ERROR:const f=l.getStatus();if(x(at,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const R=function(P){const L=P.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN}(y.status);a(new D(R,y.message))}else a(new D(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(C.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{x(at,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);x(at,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",u,r,15)})}qo(e,t,r){const i=eh(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GI(),a=$I(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=s.join("");x(at,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,y=!1;const R=new cD({Eo:P=>{y?x(at,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(x(at,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),x(at,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},Ao:()=>f.close()}),N=(P,L,B)=>{P.listen(L,W=>{try{B(W)}catch(te){setTimeout(()=>{throw te},0)}})};return N(f,fo.EventType.OPEN,()=>{y||(x(at,`RPC '${e}' stream ${i} transport opened.`),R.So())}),N(f,fo.EventType.CLOSE,()=>{y||(y=!0,x(at,`RPC '${e}' stream ${i} transport closed`),R.Do())}),N(f,fo.EventType.ERROR,P=>{y||(y=!0,dn(at,`RPC '${e}' stream ${i} transport errored:`,P),R.Do(new D(C.UNAVAILABLE,"The operation could not be completed")))}),N(f,fo.EventType.MESSAGE,P=>{var L;if(!y){const B=P.data[0];$(!!B);const W=B,te=(W==null?void 0:W.error)||((L=W[0])===null||L===void 0?void 0:L.error);if(te){x(at,`RPC '${e}' stream ${i} received error:`,te);const J=te.status;let z=function(v){const E=Me[v];if(E!==void 0)return xv(E)}(J),w=te.message;z===void 0&&(z=C.INTERNAL,w="Unknown error status: "+J+" with message "+te.message),y=!0,R.Do(new D(z,w)),f.close()}else x(at,`RPC '${e}' stream ${i} received:`,B),R.vo(B)}}),N(a,jI.STAT_EVENT,P=>{P.stat===wh.PROXY?x(at,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===wh.NOPROXY&&x(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.bo()},0),R}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){return typeof window<"u"?window:null}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n){return new gN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t,r,i,s,o,a,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new mf(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Oe(t.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.d_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uD extends gw{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=vN(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Ve(o.readTime):G.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=xh(this.serializer),t.addTarget=function(s,o){let a;const l=o.target;if(a=Wc(l)?{documents:jv(s,l)}:{query:$v(s,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Mv(s,o.resumeToken);const u=Nh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=ns(s,o.snapshotVersion.toTimestamp());const u=Nh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=EN(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=xh(this.serializer),t.removeTarget=e,this.c_(t)}}class hD extends gw{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return $(!!e.streamToken),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){$(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=wN(e.writeResults,e.commitTime),r=Ve(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=xh(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Yo(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,Dh(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(C.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Dh(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(C.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class fD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Oe(t),this.C_=!1):x("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Pr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=U(l);u.k_.add(4),await As(u),u.K_.set("Unknown"),u.k_.delete(4),await Sa(u)}(this))})}),this.K_=new fD(r,i)}}async function Sa(n){if(Pr(n))for(const e of n.q_)await e(!0)}async function As(n){for(const e of n.q_)await e(!1)}function Ll(n,e){const t=U(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),yf(t)?gf(t):Rs(t).s_()&&_f(t,e))}function ss(n,e){const t=U(n),r=Rs(t);t.L_.delete(e),r.s_()&&yw(t,e),t.L_.size===0&&(r.s_()?r.a_():Pr(t)&&t.K_.set("Unknown"))}function _f(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rs(n).V_(e)}function yw(n,e){n.U_.xe(e),Rs(n).m_(e)}function gf(n){n.U_=new fN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Rs(n).start(),n.K_.F_()}function yf(n){return Pr(n)&&!Rs(n).i_()&&n.L_.size>0}function Pr(n){return U(n).k_.size===0}function Iw(n){n.U_=void 0}async function mD(n){n.K_.set("Online")}async function _D(n){n.L_.forEach((e,t)=>{_f(n,e)})}async function gD(n,e){Iw(n),yf(n)?(n.K_.O_(e),gf(n)):n.K_.set("Unknown")}async function yD(n,e,t){if(n.K_.set("Online"),e instanceof Lv&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.L_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.L_.delete(a),i.U_.removeTarget(a))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xc(n,r)}else if(e instanceof Pc?n.U_.$e(e):e instanceof Vv?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(G.min()))try{const r=await uw(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.L_.get(u);d&&s.L_.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=s.L_.get(l);if(!d)return;s.L_.set(l,d.withResumeToken(Ne.EMPTY_BYTE_STRING,d.snapshotVersion)),yw(s,l);const f=new An(d.target,l,u,d.sequenceNumber);_f(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Xc(n,r)}}async function Xc(n,e,t){if(!Sr(e))throw e;n.k_.add(1),await As(n),n.K_.set("Offline"),t||(t=()=>uw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Sa(n)})}function vw(n,e){return e().catch(t=>Xc(n,t,e))}async function bs(n){const e=U(n),t=gr(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;ID(e);)try{const i=await rD(e.localStore,r);if(i===null){e.B_.length===0&&t.a_();break}r=i.batchId,vD(e,i)}catch(i){await Xc(e,i)}ww(e)&&Ew(e)}function ID(n){return Pr(n)&&n.B_.length<10}function vD(n,e){n.B_.push(e);const t=gr(n);t.s_()&&t.f_&&t.g_(e.mutations)}function ww(n){return Pr(n)&&!gr(n).i_()&&n.B_.length>0}function Ew(n){gr(n).start()}async function wD(n){gr(n).w_()}async function ED(n){const e=gr(n);for(const t of n.B_)e.g_(t.mutations)}async function TD(n,e,t){const r=n.B_.shift(),i=tf.from(r,e,t);await vw(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await bs(n)}async function AD(n,e){e&&gr(n).f_&&await async function(r,i){if(function(o){return Dv(o)&&o!==C.ABORTED}(i.code)){const s=r.B_.shift();gr(r).__(),await vw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bs(r)}}(n,e),ww(n)&&Ew(n)}async function sg(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Pr(t);t.k_.add(3),await As(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Sa(t)}async function Uh(n,e){const t=U(n);e?(t.k_.delete(2),await Sa(t)):e||(t.k_.add(2),await As(t),t.K_.set("Unknown"))}function Rs(n){return n.W_||(n.W_=function(t,r,i){const s=U(t);return s.b_(),new uD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:mD.bind(null,n),mo:_D.bind(null,n),po:gD.bind(null,n),R_:yD.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),yf(n)?gf(n):n.K_.set("Unknown")):(await n.W_.stop(),Iw(n))})),n.W_}function gr(n){return n.G_||(n.G_=function(t,r,i){const s=U(t);return s.b_(),new hD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:wD.bind(null,n),po:AD.bind(null,n),p_:ED.bind(null,n),y_:TD.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await bs(n)):(await n.G_.stop(),n.B_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new If(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ss(n,e){if(Oe("AsyncQueue",`${e}: ${n}`),Sr(n))return new D(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{static emptySet(e){return new $i(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=po(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.z_=new Ce(F.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):q():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class os{constructor(e,t,r,i,s,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new os(e,t,$i.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class RD{constructor(){this.queries=ag(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=U(t),s=i.queries;i.queries=ag(),s.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function ag(){return new Un(n=>yv(n),wa)}async function vf(n,e){const t=U(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new bD,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=Ss(o,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&Ef(t)}async function wf(n,e){const t=U(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function SD(n,e){const t=U(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.J_)a.ta(i)&&(r=!0);o.H_=i}}r&&Ef(t)}function CD(n,e,t){const r=U(n),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(t);r.queries.delete(e)}function Ef(n){n.X_.forEach(e=>{e.next()})}var Bh,cg;(cg=Bh||(Bh={})).na="default",cg.Cache="cache";class Tf{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Bh.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,t){this.ca=e,this.byteLength=t}la(){return"metadata"in this.ca}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.serializer=e}As(e){return ln(this.serializer,e)}Rs(e){return e.metadata.exists?Wv(this.serializer,e.document,!1):ye.newNoDocument(this.As(e.metadata.name),this.Vs(e.metadata.readTime))}Vs(e){return Ve(e)}}class kD{constructor(e,t,r){this.ha=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Tw(e)}Pa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ca.namedQuery)this.queries.push(e.ca.namedQuery);else if(e.ca.documentMetadata){this.documents.push({metadata:e.ca.documentMetadata}),e.ca.documentMetadata.exists||++t;const r=ie.fromString(e.ca.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ca.document&&(this.documents[this.documents.length-1].document=e.ca.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ta(e){const t=new Map,r=new lg(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.As(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||X()).add(s);t.set(o,a)}}return t}async complete(){const e=await iD(this.localStore,new lg(this.serializer),this.documents,this.ha.id),t=this.Ta(this.documents);for(const r of this.queries)await sD(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Ia:this.collectionGroups,da:e}}}function Tw(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.key=e}}class bw{constructor(e){this.key=e}}class Rw{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=X(),this.mutatedKeys=X(),this.Va=vv(e),this.ma=new $i(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new og,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),y=Ea(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;m&&y?m.data.isEqual(y.data)?R!==N&&(r.track({type:3,doc:y}),P=!0):this.ya(m,y)||(r.track({type:2,doc:y}),P=!0,(l&&this.Va(y,l)>0||u&&this.Va(y,u)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),P=!0):m&&!y&&(r.track({type:1,doc:m}),P=!0,(l||u)&&(a=!0)),P&&(y?(o=o.add(y),s=N?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:a,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,f)=>function(y,R){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return N(y)-N(R)}(d.type,f.type)||this.Va(d.doc,f.doc)),this.wa(r),i=i!=null&&i;const a=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new os(this.query,e.ma,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new og,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=X(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new bw(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Aw(r))}),t}va(e){this.Ea=e.Es,this.Ra=X();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return os.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ND{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class DD{constructor(e){this.key=e,this.Fa=!1}}class xD{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Un(a=>yv(a),wa),this.Oa=new Map,this.Na=new Set,this.Ba=new Ce(F.comparator),this.La=new Map,this.ka=new lf,this.qa={},this.Qa=new Map,this.Ka=ci.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function OD(n,e,t=!0){const r=Ml(n);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await Sw(r,e,t,!0),i}async function VD(n,e){const t=Ml(n);await Sw(t,e,!0,!1)}async function Sw(n,e,t,r){const i=await rs(n.localStore,It(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Af(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ll(n.remoteStore,i),a}async function Af(n,e,t,r,i){n.Ua=(f,m,y)=>async function(N,P,L,B){let W=P.view.ga(L);W.ss&&(W=await Qc(N.localStore,P.query,!1).then(({documents:w})=>P.view.ga(w,W)));const te=B&&B.targetChanges.get(P.targetId),J=B&&B.targetMismatches.get(P.targetId)!=null,z=P.view.applyChanges(W,N.isPrimaryClient,te,J);return qh(N,P.targetId,z.ba),z.snapshot}(n,f,m,y);const s=await Qc(n.localStore,e,!0),o=new Rw(e,s.Es),a=o.ga(s.documents),l=ba.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);qh(n,t,u.ba);const d=new ND(e,t,o);return n.xa.set(e,d),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),u.snapshot}async function LD(n,e,t){const r=U(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!wa(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await is(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ss(r.remoteStore,i.targetId),as(r,i.targetId)}).catch(Rr)):(as(r,i.targetId),await is(r.localStore,i.targetId,!0))}async function MD(n,e){const t=U(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ss(t.remoteStore,r.targetId))}async function FD(n,e,t){const r=Cf(n);try{const i=await function(o,a){const l=U(o),u=Te.now(),d=a.reduce((y,R)=>y.add(R.key),X());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=bt(),N=X();return l.hs.getEntries(y,d).next(P=>{R=P,R.forEach((L,B)=>{B.isValidDocument()||(N=N.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,R)).next(P=>{f=P;const L=[];for(const B of a){const W=uN(B,f.get(B.key).overlayedDocument);W!=null&&L.push(new Bn(B.key,W,lv(W.value.mapValue),we.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,L,a)}).next(P=>{m=P;const L=P.applyToLocalDocumentSet(f,N);return l.documentOverlayCache.saveOverlays(y,P.batchId,L)})}).then(()=>({batchId:m.batchId,changes:Ev(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Ce(Y)),u=u.insert(a,l),o.qa[o.currentUser.toKey()]=u}(r,i.batchId,t),await qn(r,i.changes),await bs(r.remoteStore)}catch(i){const s=Ss(i,"Failed to persist write");t.reject(s)}}async function Cw(n,e){const t=U(n);try{const r=await nD(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.La.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?$(o.Fa):i.removedDocuments.size>0&&($(o.Fa),o.Fa=!1))}),await qn(t,r,e)}catch(r){await Rr(r)}}function ug(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=U(o);l.onlineState=a;let u=!1;l.queries.forEach((d,f)=>{for(const m of f.J_)m.ea(a)&&(u=!0)}),u&&Ef(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UD(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.La.get(e),s=i&&i.key;if(s){let o=new Ce(F.comparator);o=o.insert(s,ye.newNoDocument(s,G.min()));const a=X().add(s),l=new Aa(G.min(),new Map,new Ce(Y),o,a);await Cw(r,l),r.Ba=r.Ba.remove(s),r.La.delete(e),Sf(r)}else await is(r.localStore,e,!1).then(()=>as(r,e,t)).catch(Rr)}async function BD(n,e){const t=U(n),r=e.batch.batchId;try{const i=await tD(t.localStore,e);Rf(t,r,null),bf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qn(t,i)}catch(i){await Rr(i)}}async function qD(n,e,t){const r=U(n);try{const i=await function(o,a){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>($(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);Rf(r,e,t),bf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qn(r,i)}catch(i){await Rr(i)}}async function WD(n,e){const t=U(n);Pr(t.remoteStore)||x("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=U(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Qa.get(r)||[];i.push(e),t.Qa.set(r,i)}catch(r){const i=Ss(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function bf(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Rf(n,e,t){const r=U(n);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function as(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Pw(n,r)})}function Pw(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(ss(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Sf(n))}function qh(n,e,t){for(const r of t)r instanceof Aw?(n.ka.addReference(r.key,e),jD(n,r)):r instanceof bw?(x("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Pw(n,r.key)):q()}function jD(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(x("SyncEngine","New document in limbo: "+t),n.Na.add(r),Sf(n))}function Sf(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new F(ie.fromString(e)),r=n.Ka.next();n.La.set(r,new DD(t)),n.Ba=n.Ba.insert(t,r),Ll(n.remoteStore,new An(It(ws(t.path)),r,"TargetPurposeLimboResolution",Tt.oe))}}async function qn(n,e,t){const r=U(n),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){i.push(u);const f=ff.zi(l.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(l,u){const d=U(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>A.forEach(u,m=>A.forEach(m.Wi,y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>A.forEach(m.Gi,y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!Sr(f))throw f;x("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const y=d.us.get(m),R=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(R);d.us=d.us.insert(m,N)}}}(r.localStore,s))}async function $D(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await lw(t.localStore,e);t.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(l=>{l.reject(new D(C.CANCELLED,o))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qn(t,r.Ts)}}function GD(n,e){const t=U(n),r=t.La.get(e);if(r&&r.Fa)return X().add(r.key);{let i=X();const s=t.Oa.get(e);if(!s)return i;for(const o of s){const a=t.xa.get(o);i=i.unionWith(a.view.fa)}return i}}async function zD(n,e){const t=U(n),r=await Qc(t.localStore,e.query,!0),i=e.view.va(r);return t.isPrimaryClient&&qh(t,e.targetId,i.ba),i}async function KD(n,e){const t=U(n);return fw(t.localStore,e).then(r=>qn(t,r))}async function HD(n,e,t,r){const i=U(n),s=await function(a,l){const u=U(a),d=U(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.On(f,l).next(m=>m?u.localDocuments.getDocuments(f,m):A.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await bs(i.remoteStore):t==="acknowledged"||t==="rejected"?(Rf(i,e,r||null),bf(i,e),function(a,l){U(U(a).mutationQueue).Bn(l)}(i.localStore,e)):q(),await qn(i,s)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function QD(n,e){const t=U(n);if(Ml(t),Cf(t),e===!0&&t.$a!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await hg(t,r.toArray());t.$a=!0,await Uh(t.remoteStore,!0);for(const s of i)Ll(t.remoteStore,s)}else if(e===!1&&t.$a!==!1){const r=[];let i=Promise.resolve();t.Oa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(as(t,o),is(t.localStore,o,!0))),ss(t.remoteStore,o)}),await i,await hg(t,r),function(o){const a=U(o);a.La.forEach((l,u)=>{ss(a.remoteStore,u)}),a.ka.wr(),a.La=new Map,a.Ba=new Ce(F.comparator)}(t),t.$a=!1,await Uh(t.remoteStore,!1)}}async function hg(n,e,t){const r=U(n),i=[],s=[];for(const o of e){let a;const l=r.Oa.get(o);if(l&&l.length!==0){a=await rs(r.localStore,It(l[0]));for(const u of l){const d=r.xa.get(u),f=await zD(r,d);f.snapshot&&s.push(f.snapshot)}}else{const u=await dw(r.localStore,o);a=await rs(r.localStore,u),await Af(r,kw(u),o,!1,a.resumeToken)}i.push(a)}return r.Ma.R_(s),i}function kw(n){return gv(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function YD(n){return function(t){return U(U(t).persistence).$i()}(U(n).localStore)}async function JD(n,e,t,r){const i=U(n);if(i.$a)return void x("SyncEngine","Ignoring unexpected query state notification.");const s=i.Oa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await fw(i.localStore,Iv(s[0])),a=Aa.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ne.EMPTY_BYTE_STRING);await qn(i,o,a);break}case"rejected":await is(i.localStore,e,!0),as(i,e,r);break;default:q()}}async function XD(n,e,t){const r=Ml(n);if(r.$a){for(const i of e){if(r.Oa.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){x("SyncEngine","Adding an already active target "+i);continue}const s=await dw(r.localStore,i),o=await rs(r.localStore,s);await Af(r,kw(s),o.targetId,!1,o.resumeToken),Ll(r.remoteStore,o)}for(const i of t)r.Oa.has(i)&&await is(r.localStore,i,!1).then(()=>{ss(r.remoteStore,i),as(r,i)}).catch(Rr)}}function Ml(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UD.bind(null,e),e.Ma.R_=SD.bind(null,e.eventManager),e.Ma.Wa=CD.bind(null,e.eventManager),e}function Cf(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qD.bind(null,e),e}function ZD(n,e,t){const r=U(n);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(y,R){const N=U(y),P=Ve(R.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",L=>N.jr.getBundleMetadata(L,R.id)).then(L=>!!L&&L.createTime.compareTo(P)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(Tw(l));const u=new kD(l,s.localStore,o.serializer);let d=await o.Ga();for(;d;){const m=await u.Pa(d);m&&a._updateProgress(m),d=await o.Ga()}const f=await u.complete();return await qn(s,f.da,void 0),await function(y,R){const N=U(y);return N.persistence.runTransaction("Save bundle","readwrite",P=>N.jr.saveBundleMetadata(P,R))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Ia)}catch(l){return dn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ra(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return cw(this.persistence,new aw,e.initialUser,this.serializer)}ja(e){return new uf(Vl.ei,this.serializer)}za(e){return new mw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jo.provider={build:()=>new Jo};class ex extends Jo{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){$(this.persistence.referenceDelegate instanceof Hc);const r=this.persistence.referenceDelegate.garbageCollector;return new nw(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new uf(r=>Hc.ei(r,t),this.serializer)}}class Nw extends Jo{constructor(e,t,r){super(),this.Za=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Za.initialize(this,e),await Cf(this.Za.syncEngine),await bs(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(e){return cw(this.persistence,new aw,e.initialUser,this.serializer)}Ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new nw(r,e.asyncQueue,t)}Ya(e,t){const r=new vk(t,this.persistence);return new Ik(e.asyncQueue,r)}ja(e){const t=df(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new hf(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,_w(),kc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(e){return new mw}}class tx extends Nw{constructor(e,t){super(e,t,!1),this.Za=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Za.syncEngine;this.sharedClientState instanceof Zu&&(this.sharedClientState.syncEngine={io:HD.bind(null,t),so:JD.bind(null,t),oo:XD.bind(null,t),$i:YD.bind(null,t),ro:KD.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Si(async r=>{await QD(this.Za.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}za(e){const t=_w();if(!Zu.p(t))throw new D(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=df(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Zu(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Xo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ug(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$D.bind(null,this.syncEngine),await Uh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RD}()}createDatastore(e){const t=Ra(e.databaseInfo.databaseId),r=function(s){return new lD(s)}(e.databaseInfo);return function(s,o,a,l){return new dD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new pD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>ug(this.syncEngine,t,0),function(){return ig.p()?new ig:new oD}())}createSyncEngine(e,t){return function(i,s,o,a,l,u,d){const f=new xD(i,s,o,a,l,u);return d&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=U(i);x("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await As(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xo.provider={build:()=>new Xo};function dg(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Oe("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t){this.tu=e,this.serializer=t,this.metadata=new tt,this.buffer=new Uint8Array,this.nu=function(){return new TextDecoder("utf-8")}(),this.ru().then(r=>{r&&r.la()?this.metadata.resolve(r.ca.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ca)}`))},r=>this.metadata.reject(r))}close(){return this.tu.cancel()}async getMetadata(){return this.metadata.promise}async Ga(){return await this.getMetadata(),this.ru()}async ru(){const e=await this.iu();if(e===null)return null;const t=this.nu.decode(e),r=Number(t);isNaN(r)&&this.su(`length string (${t}) is not valid number`);const i=await this.ou(r);return new PD(JSON.parse(i),e.length+r)}_u(){return this.buffer.findIndex(e=>e===123)}async iu(){for(;this._u()<0&&!await this.au(););if(this.buffer.length===0)return null;const e=this._u();e<0&&this.su("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ou(e){for(;this.buffer.length<e;)await this.au()&&this.su("Reached the end of bundle when more is expected.");const t=this.nu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}su(e){throw this.tu.cancel(),new Error(`Invalid bundle format: ${e}`)}async au(){const e=await this.tu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=U(i),a={documents:s.map(f=>Qo(o.serializer,f))},l=await o.ko("BatchGetDocuments",o.serializer.databaseId,ie.emptyPath(),a,s.length),u=new Map;l.forEach(f=>{const m=IN(o.serializer,f);u.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=u.get(f.toString());$(!!m),d.push(m)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ts(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=F.fromPath(r);this.mutations.push(new Zd(i,this.precondition(i)))}),await async function(r,i){const s=U(r),o={writes:i.map(a=>Yo(s.serializer,a))};await s.Oo("Commit",s.serializer.databaseId,ie.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw q();t=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new D(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(G.min())?we.exists(!1):we.updateTime(t):we.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(G.min()))throw new D(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return we.updateTime(t)}return we.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.uu=r.maxAttempts,this.r_=new mf(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{const e=new rx(this.datastore),t=this.hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Pu(i)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{const t=this.updateFunction(e);return!Ia(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Dv(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=KI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ss(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function th(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fg(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Pf(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sg(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>sg(e.remoteStore,i)),n._onlineComponents=e}async function Pf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await th(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;dn("Error using user provided cache. Falling back to memory cache: "+t),await th(n,new Jo)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await th(n,new ex(void 0));return n._offlineComponents}async function Ul(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await fg(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await fg(n,new Xo))),n._onlineComponents}function Dw(n){return Pf(n).then(e=>e.persistence)}function kf(n){return Pf(n).then(e=>e.localStore)}function xw(n){return Ul(n).then(e=>e.remoteStore)}function Nf(n){return Ul(n).then(e=>e.syncEngine)}function ox(n){return Ul(n).then(e=>e.datastore)}async function cs(n){const e=await Ul(n),t=e.eventManager;return t.onListen=OD.bind(null,e.syncEngine),t.onUnlisten=LD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=MD.bind(null,e.syncEngine),t}function ax(n){return n.asyncQueue.enqueue(async()=>{const e=await Dw(n),t=await xw(n);return e.setNetworkEnabled(!0),function(i){const s=U(i);return s.k_.delete(0),Sa(s)}(t)})}function cx(n){return n.asyncQueue.enqueue(async()=>{const e=await Dw(n),t=await xw(n);return e.setNetworkEnabled(!1),async function(i){const s=U(i);s.k_.add(0),await As(s),s.K_.set("Offline")}(t)})}function lx(n,e){const t=new tt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,d){const f=U(u);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new D(C.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Ss(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await kf(n),e,t)),t.promise}function Ow(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new Fl({next:m=>{d.eu(),o.enqueueAndForget(()=>wf(s,f));const y=m.docs.has(a);!y&&m.fromCache?u.reject(new D(C.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new D(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Tf(ws(a.path),d,{includeMetadataChanges:!0,ua:!0});return vf(s,f)}(await cs(n),n.asyncQueue,e,t,r)),r.promise}function ux(n,e){const t=new tt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Qc(i,s,!0),l=new Rw(s,a.Es),u=l.ga(a.documents),d=l.applyChanges(u,!1);o.resolve(d.snapshot)}catch(a){const l=Ss(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await kf(n),e,t)),t.promise}function Vw(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new Fl({next:m=>{d.eu(),o.enqueueAndForget(()=>wf(s,f)),m.fromCache&&l.source==="server"?u.reject(new D(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Tf(a,d,{includeMetadataChanges:!0,ua:!0});return vf(s,f)}(await cs(n),n.asyncQueue,e,t,r)),r.promise}function hx(n,e){const t=new Fl(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){U(i).X_.add(s),s.next()}(await cs(n),t)),()=>{t.eu(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){U(i).X_.delete(s)}(await cs(n),t))}}function dx(n,e,t,r){const i=function(o,a){let l;return l=typeof o=="string"?Ov().encode(o):o,function(d,f){return new nx(d,f)}(function(d,f){if(d instanceof Uint8Array)return dg(d,f);if(d instanceof ArrayBuffer)return dg(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(t,Ra(e));n.asyncQueue.enqueueAndForget(async()=>{ZD(await Nf(n),i,r)})}function fx(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=U(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.jr.getNamedQuery(o,i))}(await kf(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n,e,t){if(!t)throw new D(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Mw(n,e,t,r){if(e===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function mg(n){if(!F.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _g(n){if(F.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bl(n);throw new D(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Fw(n,e){if(e<=0)throw new D(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ca{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ck;switch(r.type){case"firstParty":return new dk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=pg.get(t);r&&(x("ComponentProvider","Removing Datastore"),pg.delete(t),r.terminate())}(this),Promise.resolve()}}function px(n,e,t,r={}){var i;const s=(n=le(n,Ca))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ze.MOCK_USER;else{a=Ey(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ze(u)}n._authCredentials=new lk(new zI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vt=class Uw{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Uw(this.firestore,e,this._query)}},be=class Bw{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bw(this.firestore,e,this._key)}},or=class qw extends vt{constructor(e,t,r){super(e,t,ws(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new F(e))}withConverter(e){return new qw(this.firestore,e,this._path)}};function Ww(n,e,...t){if(n=j(n),Df("collection","path",e),n instanceof Ca){const r=ie.fromString(e,...t);return _g(r),new or(n,null,r)}{if(!(n instanceof be||n instanceof or))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return _g(r),new or(n.firestore,null,r)}}function mx(n,e){if(n=le(n,Ca),Df("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new vt(n,null,function(r){return new Fn(ie.emptyPath(),r)}(e))}function Zc(n,e,...t){if(n=j(n),arguments.length===1&&(e=KI.newId()),Df("doc","path",e),n instanceof Ca){const r=ie.fromString(e,...t);return mg(r),new be(n,null,new F(r))}{if(!(n instanceof be||n instanceof or))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return mg(r),new be(n.firestore,n instanceof or?n.converter:null,new F(r))}}function jw(n,e){return n=j(n),e=j(e),(n instanceof be||n instanceof or)&&(e instanceof be||e instanceof or)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function $w(n,e){return n=j(n),e=j(e),n instanceof vt&&e instanceof vt&&n.firestore===e.firestore&&wa(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new mf(this,"async_queue_retry"),this.fu=()=>{const r=kc();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=kc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=kc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new tt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Sr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Oe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=If.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.Eu.push(i),i}pu(){this.Au&&q()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function Wh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class _x{constructor(){this._progressObserver={},this._taskCompletionResolver=new tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=-1;let Le=class extends Ca{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new yg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yg(e),this._firestoreClient=void 0,await e}}};function ht(n){if(n._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gw(n),n._firestoreClient}function Gw(n){var e,t,r;const i=n._freezeSettings(),s=function(a,l,u,d){return new Wk(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Lw(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new sx(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}function yx(n,e){dn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return zw(n,Xo.provider,{build:r=>new Nw(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Ix(n){dn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();zw(n,Xo.provider,{build:t=>new tx(t,e.cacheSizeBytes)})}function zw(n,e,t){if((n=le(n,Le))._firestoreClient||n._terminated)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new D(C.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},Gw(n)}function vx(n){if(n._initialized&&!n._terminated)throw new D(C.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new tt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!cn.p())return Promise.resolve();const i=r+"main";await cn.delete(i)}(df(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function wx(n){return function(t){const r=new tt;return t.asyncQueue.enqueueAndForget(async()=>WD(await Nf(t),r)),r.promise}(ht(n=le(n,Le)))}function Ex(n){return ax(ht(n=le(n,Le)))}function Tx(n){return cx(ht(n=le(n,Le)))}function Ax(n,e){const t=ht(n=le(n,Le)),r=new _x;return dx(t,n._databaseId,e,r),r}function bx(n,e){return fx(ht(n=le(n,Le)),e).then(t=>t?new vt(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(Ne.fromBase64String(e))}catch(t){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pn(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=/^__.*__$/;class Sx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Bn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Es(e,this.data,t,this.fieldTransforms)}}class Kw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Bn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Wl{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Bu(e),i}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return el(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Hw(this.Mu)&&Rx.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Cx{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ra(e)}$u(e,t,r,i=!1){return new Wl({Mu:e,methodName:t,Ku:r,path:ve.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gi(n){const e=n._freezeSettings(),t=Ra(n._databaseId);return new Cx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jl(n,e,t,r,i,s={}){const o=n.$u(s.merge||s.mergeFields?2:0,e,t,i);Bf("Data must be an object, but it was:",o,r);const a=Jw(r,o);let l,u;if(s.merge)l=new At(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=jh(e,f,t);if(!o.contains(m))throw new D(C.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Zw(d,m)||d.push(m)}l=new At(d),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new Sx(new et(a),l,u)}class Pa extends _i{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pa}}function Qw(n,e,t){return new Wl({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Of extends _i{_toFieldTransform(e){return new Ta(e.path,new es)}isEqual(e){return e instanceof Of}}class Vf extends _i{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=Qw(this,e,!0),r=this.Uu.map(s=>yi(s,t)),i=new ii(r);return new Ta(e.path,i)}isEqual(e){return e instanceof Vf&&Lo(this.Uu,e.Uu)}}class Lf extends _i{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=Qw(this,e,!0),r=this.Uu.map(s=>yi(s,t)),i=new si(r);return new Ta(e.path,i)}isEqual(e){return e instanceof Lf&&Lo(this.Uu,e.Uu)}}class Mf extends _i{constructor(e,t){super(e),this.Wu=t}_toFieldTransform(e){const t=new ts(e.serializer,bv(e.serializer,this.Wu));return new Ta(e.path,t)}isEqual(e){return e instanceof Mf&&this.Wu===e.Wu}}function Ff(n,e,t,r){const i=n.$u(1,e,t);Bf("Data must be an object, but it was:",i,r);const s=[],o=et.empty();Cr(r,(l,u)=>{const d=qf(e,l,t);u=j(u);const f=i.Lu(d);if(u instanceof Pa)s.push(d);else{const m=yi(u,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new At(s);return new Kw(o,a,i.fieldTransforms)}function Uf(n,e,t,r,i,s){const o=n.$u(1,e,t),a=[jh(e,r,t)],l=[i];if(s.length%2!=0)throw new D(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(jh(e,s[m])),l.push(s[m+1]);const u=[],d=et.empty();for(let m=a.length-1;m>=0;--m)if(!Zw(u,a[m])){const y=a[m];let R=l[m];R=j(R);const N=o.Lu(y);if(R instanceof Pa)u.push(y);else{const P=yi(R,N);P!=null&&(u.push(y),d.set(y,P))}}const f=new At(u);return new Kw(d,f,o.fieldTransforms)}function Yw(n,e,t,r=!1){return yi(t,n.$u(r?4:3,e))}function yi(n,e){if(Xw(n=j(n)))return Bf("Unsupported field value:",e,n),Jw(n,e);if(n instanceof _i)return function(r,i){if(!Hw(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=yi(a,i.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=j(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Te.fromDate(r);return{timestampValue:ns(i.serializer,s)}}if(r instanceof Te){const s=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ns(i.serializer,s)}}if(r instanceof ql)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:Mv(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof xf)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return Xd(a.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Bl(r)}`)}(n,e)}function Jw(n,e){const t={};return sv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(n,(r,i)=>{const s=yi(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Xw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Te||n instanceof ql||n instanceof pn||n instanceof be||n instanceof _i||n instanceof xf)}function Bf(n,e,t){if(!Xw(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Bl(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function jh(n,e,t){if((e=j(e))instanceof yr)return e._internalPath;if(typeof e=="string")return qf(n,e);throw el("Field path arguments must be of type string or ",n,!1,void 0,t)}const Px=new RegExp("[~\\*/\\[\\]]");function qf(n,e,t){if(e.search(Px)>=0)throw el(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yr(...e.split("."))._internalPath}catch{throw el(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function el(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(C.INVALID_ARGUMENT,a+n+l)}function Zw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($l("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kx extends Zo{data(){return super.data()}}function $l(n,e){return typeof e=="string"?qf(n,e):e instanceof yr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wf{}let ka=class extends Wf{};function Qn(n,e,...t){let r=[];e instanceof Wf&&r.push(e),r=r.concat(t),function(s){const o=s.filter(l=>l instanceof jf).length,a=s.filter(l=>l instanceof Gl).length;if(o>1||o>0&&a>0)throw new D(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Gl extends ka{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Gl(e,t,r)}_apply(e){const t=this._parse(e);return oE(e._query,t),new vt(e.firestore,e.converter,kh(e._query,t))}_parse(e){const t=gi(e.firestore);return function(s,o,a,l,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new D(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){vg(f,d);const y=[];for(const R of f)y.push(Ig(l,s,R));m={arrayValue:{values:y}}}else m=Ig(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||vg(f,d),m=Yw(a,o,f,d==="in"||d==="not-in");return se.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Nx(n,e,t){const r=e,i=$l("where",n);return Gl._create(i,r,t)}class jf extends Wf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new jf(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:he.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)oE(o,l),o=kh(o,l)}(e._query,t),new vt(e.firestore,e.converter,kh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $f extends ka{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new $f(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ho(s,o)}(e._query,this._field,this._direction);return new vt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fn(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Dx(n,e="asc"){const t=e,r=$l("orderBy",n);return $f._create(r,t)}class zl extends ka{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new zl(e,t,r)}_apply(e){return new vt(e.firestore,e.converter,$c(e._query,this._limit,this._limitType))}}function xx(n){return Fw("limit",n),zl._create("limit",n,"F")}function Ox(n){return Fw("limitToLast",n),zl._create("limitToLast",n,"L")}let tE=class nE extends ka{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new nE(e,t,r)}_apply(e){const t=sE(e,this.type,this._docOrFields,this._inclusive);return new vt(e.firestore,e.converter,function(i,s){return new Fn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}};function Vx(...n){return tE._create("startAt",n,!0)}function Lx(...n){return tE._create("startAfter",n,!1)}let rE=class iE extends ka{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new iE(e,t,r)}_apply(e){const t=sE(e,this.type,this._docOrFields,this._inclusive);return new vt(e.firestore,e.converter,function(i,s){return new Fn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}};function Mx(...n){return rE._create("endBefore",n,!1)}function Fx(...n){return rE._create("endAt",n,!0)}function sE(n,e,t,r){if(t[0]=j(t[0]),t[0]instanceof Zo)return function(s,o,a,l,u){if(!l)throw new D(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of ji(s))if(f.field.isKeyField())d.push(ni(o,l.key));else{const m=l.data.field(f.field);if(Cl(m))throw new D(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=f.field.canonicalString();throw new D(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new _r(d,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=gi(n.firestore);return function(o,a,l,u,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new D(C.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let R=0;R<d.length;R++){const N=d[R];if(m[R].field.isKeyField()){if(typeof N!="string")throw new D(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof N}`);if(!Yd(o)&&N.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${N}' contains a slash.`);const P=o.path.child(ie.fromString(N));if(!F.isDocumentKey(P))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const L=new F(P);y.push(ni(a,L))}else{const P=Yw(l,u,N);y.push(P)}}return new _r(y,f)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Ig(n,e,t){if(typeof(t=j(t))=="string"){if(t==="")throw new D(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yd(e)&&t.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!F.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ni(n,new F(r))}if(t instanceof be)return ni(n,t._key);throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bl(t)}.`)}function vg(n,e){if(!Array.isArray(n)||n.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oE(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Gf{convertValue(e,t="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Cr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ie(o.doubleValue));return new xf(s)}convertGeoPoint(e){return new ql(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Pl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const t=Nn(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);$(Hv(r));const i=new fr(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(t)||Oe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ux extends Gf{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let xn=class extends Zo{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($l("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},So=class extends xn{data(e={}){return super.data(e)}},Ir=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new zr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new So(this._firestore,this._userDataWriter,r.key,r,new zr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new So(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new So(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:Bx(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Bx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function aE(n,e){return n instanceof xn&&e instanceof xn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ir&&e instanceof Ir&&n._firestore===e._firestore&&$w(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(n){n=le(n,be);const e=le(n.firestore,Le);return Ow(ht(e),n._key).then(t=>zf(e,n,t))}class Ii extends Gf{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function Wx(n){n=le(n,be);const e=le(n.firestore,Le),t=ht(e),r=new Ii(e);return lx(t,n._key).then(i=>new xn(e,r,n._key,i,new zr(i!==null&&i.hasLocalMutations,!0),n.converter))}function jx(n){n=le(n,be);const e=le(n.firestore,Le);return Ow(ht(e),n._key,{source:"server"}).then(t=>zf(e,n,t))}function $x(n){n=le(n,vt);const e=le(n.firestore,Le),t=ht(e),r=new Ii(e);return eE(n._query),Vw(t,n._query).then(i=>new Ir(e,r,n,i))}function Gx(n){n=le(n,vt);const e=le(n.firestore,Le),t=ht(e),r=new Ii(e);return ux(t,n._query).then(i=>new Ir(e,r,n,i))}function zx(n){n=le(n,vt);const e=le(n.firestore,Le),t=ht(e),r=new Ii(e);return Vw(t,n._query,{source:"server"}).then(i=>new Ir(e,r,n,i))}function wg(n,e,t){n=le(n,be);const r=le(n.firestore,Le),i=Kl(n.converter,e,t);return Na(r,[jl(gi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,we.none())])}function Eg(n,e,t,...r){n=le(n,be);const i=le(n.firestore,Le),s=gi(i);let o;return o=typeof(e=j(e))=="string"||e instanceof yr?Uf(s,"updateDoc",n._key,e,t,r):Ff(s,"updateDoc",n._key,e),Na(i,[o.toMutation(n._key,we.exists(!0))])}function Kx(n){return Na(le(n.firestore,Le),[new Ts(n._key,we.none())])}function Hx(n,e){const t=le(n.firestore,Le),r=Zc(n),i=Kl(n.converter,e);return Na(t,[jl(gi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,we.exists(!1))]).then(()=>r)}function cE(n,...e){var t,r,i;n=j(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Wh(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Wh(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,u,d;if(n instanceof be)u=le(n.firestore,Le),d=ws(n._key.path),l={next:f=>{e[o]&&e[o](zf(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=le(n,vt);u=le(f.firestore,Le),d=f._query;const m=new Ii(u);l={next:y=>{e[o]&&e[o](new Ir(u,m,f,y))},error:e[o+1],complete:e[o+2]},eE(n._query)}return function(m,y,R,N){const P=new Fl(N),L=new Tf(y,P,R);return m.asyncQueue.enqueueAndForget(async()=>vf(await cs(m),L)),()=>{P.eu(),m.asyncQueue.enqueueAndForget(async()=>wf(await cs(m),L))}}(ht(u),d,a,l)}function Qx(n,e){return hx(ht(n=le(n,Le)),Wh(e)?e:{next:e})}function Na(n,e){return function(r,i){const s=new tt;return r.asyncQueue.enqueueAndForget(async()=>FD(await Nf(r),i,s)),s.promise}(ht(n),e)}function zf(n,e,t){const r=t.docs.get(e._key),i=new Ii(n);return new xn(n,i,e._key,r,new zr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jx=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=gi(e)}set(e,t,r){this._verifyNotCommitted();const i=Jn(e,this._firestore),s=Kl(i.converter,t,r),o=jl(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,we.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Jn(e,this._firestore);let o;return o=typeof(t=j(t))=="string"||t instanceof yr?Uf(this._dataReader,"WriteBatch.update",s._key,t,r,i):Ff(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,we.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Jn(e,this._firestore);return this._mutations=this._mutations.concat(new Ts(t._key,we.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(C.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Jn(n,e){if((n=j(n)).firestore!==e)throw new D(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xx=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=gi(t)}get(t){const r=Jn(t,this._firestore),i=new Ux(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return q();const o=s[0];if(o.isFoundDocument())return new Zo(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Zo(this._firestore,i,r._key,null,r.converter);throw q()})}set(t,r,i){const s=Jn(t,this._firestore),o=Kl(s.converter,r,i),a=jl(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=Jn(t,this._firestore);let a;return a=typeof(r=j(r))=="string"||r instanceof yr?Uf(this._dataReader,"Transaction.update",o._key,r,i,s):Ff(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Jn(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Jn(e,this._firestore),r=new Ii(this._firestore);return super.get(e).then(i=>new xn(this._firestore,r,t._key,i._document,new zr(!1,!1),t.converter))}};function Zx(n,e,t){n=le(n,Le);const r=Object.assign(Object.assign({},Yx),t);return function(s){if(s.maxAttempts<1)throw new D(C.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new tt;return s.asyncQueue.enqueueAndForget(async()=>{const u=await ox(s);new ix(s.asyncQueue,u,a,o,l).cu()}),l.promise}(ht(n),i=>e(new Xx(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(){return new Pa("deleteField")}function tO(){return new Of("serverTimestamp")}function nO(...n){return new Vf("arrayUnion",n)}function rO(...n){return new Lf("arrayRemove",n)}function iO(n){return new Mf("increment",n)}(function(e,t=!0){(function(i){vs=i})(Vn),Pn(new Ct("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Le(new uk(r.getProvider("auth-internal")),new pk(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ot(d_,"4.7.6",e),Ot(d_,"4.7.6","esm2017")})();const sO="@firebase/firestore-compat",oO="0.3.41";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new D("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){if(typeof Uint8Array>"u")throw new D("unimplemented","Uint8Arrays are not available in this environment.")}function Ag(){if(!Bk())throw new D("unimplemented","Blobs are unavailable in Firestore in this environment.")}let lE=class $h{constructor(e){this._delegate=e}static fromBase64String(e){return Ag(),new $h(pn.fromBase64String(e))}static fromUint8Array(e){return Tg(),new $h(pn.fromUint8Array(e))}toBase64(){return Ag(),this._delegate.toBase64()}toUint8Array(){return Tg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){return aO(n,["next","error","complete"])}function aO(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{enableIndexedDbPersistence(e,t){return yx(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Ix(e._delegate)}clearIndexedDbPersistence(e){return vx(e._delegate)}}class uE{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof fr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&dn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){px(this._delegate,e,t,r)}enableNetwork(){return Ex(this._delegate)}disableNetwork(){return Tx(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Mw("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return wx(this._delegate)}onSnapshotsInSync(e){return Qx(this._delegate,e)}get app(){if(!this._appCompat)throw new D("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ls(this,Ww(this._delegate,e))}catch(t){throw pt(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ut(this,Zc(this._delegate,e))}catch(t){throw pt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new na(this,mx(this._delegate,e))}catch(t){throw pt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Zx(this._delegate,t=>e(new hE(this,t)))}batch(){return ht(this._delegate),new dE(new Jx(this._delegate,e=>Na(this._delegate,e)))}loadBundle(e){return Ax(this._delegate,e)}namedQuery(e){return bx(this._delegate,e).then(t=>t?new na(this,t):null)}}class Hl extends Gf{constructor(e){super(),this.firestore=e}convertBytes(e){return new lE(new pn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ut.forKey(t,this.firestore,null)}}function lO(n){ok(n)}class hE{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Hl(e)}get(e){const t=Kr(e);return this._delegate.get(t).then(r=>new ea(this._firestore,new xn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Kr(e);return r?(Kf("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Kr(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Kr(e);return this._delegate.delete(t),this}}class dE{constructor(e){this._delegate=e}set(e,t,r){const i=Kr(e);return r?(Kf("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Kr(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Kr(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class li{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new So(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ta(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=li.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new li(e,new Hl(e),t),i.set(t,s)),s}}li.INSTANCES=new WeakMap;class Ut{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Hl(e)}static forPath(e,t,r){if(e.length%2!==0)throw new D("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ut(t,new be(t._delegate,r,new F(e)))}static forKey(e,t,r){return new Ut(t,new be(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ls(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ls(this.firestore,Ww(this._delegate,e))}catch(t){throw pt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof be?jw(this._delegate,e):!1}set(e,t){t=Kf("DocumentReference.set",t);try{return t?wg(this._delegate,e,t):wg(this._delegate,e)}catch(r){throw pt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Eg(this._delegate,e):Eg(this._delegate,e,t,...r)}catch(i){throw pt(i,"updateDoc()","DocumentReference.update()")}}delete(){return Kx(this._delegate)}onSnapshot(...e){const t=fE(e),r=pE(e,i=>new ea(this.firestore,new xn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return cE(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Wx(this._delegate):(e==null?void 0:e.source)==="server"?t=jx(this._delegate):t=qx(this._delegate),t.then(r=>new ea(this.firestore,new xn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ut(this.firestore,e?this._delegate.withConverter(li.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function pt(n,e,t){return n.message=n.message.replace(e,t),n}function fE(n){for(const e of n)if(typeof e=="object"&&!Gh(e))return e;return{}}function pE(n,e){var t,r;let i;return Gh(n[0])?i=n[0]:Gh(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ea{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ut(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return aE(this._delegate,e._delegate)}}class ta extends ea{data(e){const t=this._delegate.data(e);return this._delegate._converter||ak(t!==void 0),t}}let na=class Xt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Hl(e)}where(e,t,r){try{return new Xt(this.firestore,Qn(this._delegate,Nx(e,t,r)))}catch(i){throw pt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Xt(this.firestore,Qn(this._delegate,Dx(e,t)))}catch(r){throw pt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Xt(this.firestore,Qn(this._delegate,xx(e)))}catch(t){throw pt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Xt(this.firestore,Qn(this._delegate,Ox(e)))}catch(t){throw pt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Xt(this.firestore,Qn(this._delegate,Vx(...e)))}catch(t){throw pt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Xt(this.firestore,Qn(this._delegate,Lx(...e)))}catch(t){throw pt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Xt(this.firestore,Qn(this._delegate,Mx(...e)))}catch(t){throw pt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Xt(this.firestore,Qn(this._delegate,Fx(...e)))}catch(t){throw pt(t,"endAt()","Query.endAt()")}}isEqual(e){return $w(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Gx(this._delegate):(e==null?void 0:e.source)==="server"?t=zx(this._delegate):t=$x(this._delegate),t.then(r=>new zh(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=fE(e),r=pE(e,i=>new zh(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return cE(this._delegate,t,r)}withConverter(e){return new Xt(this.firestore,e?this._delegate.withConverter(li.getInstance(this.firestore,e)):this._delegate.withConverter(null))}};class uO{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ta(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class zh{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new na(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ta(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new uO(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ta(this._firestore,r))})}isEqual(e){return aE(this._delegate,e._delegate)}}class ls extends na{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ut(this.firestore,e):null}doc(e){try{return e===void 0?new Ut(this.firestore,Zc(this._delegate)):new Ut(this.firestore,Zc(this._delegate,e))}catch(t){throw pt(t,"doc()","CollectionReference.doc()")}}add(e){return Hx(this._delegate,e).then(t=>new Ut(this.firestore,t))}isEqual(e){return jw(this._delegate,e._delegate)}withConverter(e){return new ls(this.firestore,e?this._delegate.withConverter(li.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Kr(n){return le(n,be)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(...e){this._delegate=new yr(...e)}static documentId(){return new Hf(ve.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof yr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{static serverTimestamp(){const e=tO();return e._methodName="FieldValue.serverTimestamp",new jr(e)}static delete(){const e=eO();return e._methodName="FieldValue.delete",new jr(e)}static arrayUnion(...e){const t=nO(...e);return t._methodName="FieldValue.arrayUnion",new jr(t)}static arrayRemove(...e){const t=rO(...e);return t._methodName="FieldValue.arrayRemove",new jr(t)}static increment(e){const t=iO(e);return t._methodName="FieldValue.increment",new jr(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO={Firestore:uE,GeoPoint:ql,Timestamp:Te,Blob:lE,Transaction:hE,WriteBatch:dE,DocumentReference:Ut,DocumentSnapshot:ea,Query:na,QueryDocumentSnapshot:ta,QuerySnapshot:zh,CollectionReference:ls,FieldPath:Hf,FieldValue:jr,setLogLevel:lO,CACHE_SIZE_UNLIMITED:gx};function dO(n,e){n.INTERNAL.registerComponent(new Ct("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},hO)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(n){dO(n,(e,t)=>new uE(e,t,new cO)),n.registerVersion(sO,oO)}fO(Ye);var bg={};const Rg="@firebase/database",Sg="1.0.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mE="";function _E(n){mE=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Vo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pO(e)}}catch{}return new mO},Hr=gE("localStorage"),Kh=gE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new _s("@firebase/database"),yE=function(){let n=1;return function(){return n++}}(),IE=function(n){const e=BA(n),t=new MA;t.update(e);const r=t.digest();return md.encodeByteArray(r)},Da=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Da.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let Jr=null,Cg=!0;const vE=function(n,e){V(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Gi.logLevel=ne.VERBOSE,Jr=Gi.log.bind(Gi),e&&Kh.set("logging_enabled",!0)):typeof n=="function"?Jr=n:(Jr=null,Kh.remove("logging_enabled"))},He=function(...n){if(Cg===!0&&(Cg=!1,Jr===null&&Kh.get("logging_enabled")===!0&&vE(!0)),Jr){const e=Da.apply(null,n);Jr(e)}},xa=function(n){return function(...e){He(n,...e)}},Hh=function(...n){const e="FIREBASE INTERNAL ERROR: "+Da(...n);Gi.error(e)},mn=function(...n){const e=`FIREBASE FATAL ERROR: ${Da(...n)}`;throw Gi.error(e),new Error(e)},ut=function(...n){const e="FIREBASE WARNING: "+Da(...n);Gi.warn(e)},_O=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ql=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},gO=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vr="[MIN_NAME]",On="[MAX_NAME]",vi=function(n,e){if(n===e)return 0;if(n===vr||e===On)return-1;if(e===vr||n===On)return 1;{const t=Pg(n),r=Pg(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},yO=function(n,e){return n===e?0:n<e?-1:1},io=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Be(e))},Qf=function(n){if(typeof n!="object"||n===null)return Be(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Be(e[r]),t+=":",t+=Qf(n[e[r]]);return t+="}",t},wE=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Je(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const EE=function(n){V(!Ql(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,l;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},IO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wO(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const EO=new RegExp("^-?(0*)\\d{1,10}$"),TO=-2147483648,AO=2147483647,Pg=function(n){if(EO.test(n)){const e=Number(n);if(e>=TO&&e<=AO)return e}return null},Cs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ut("Exception was thrown by user callback.",t),e},Math.floor(0))}},bO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Co=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class zi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="5",TE="v",AE="s",bE="r",RE="f",SE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,CE="ls",PE="p",Qh="ac",kE="websocket",NE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,t,r,i,s=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function CO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function xE(n,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let r;if(e===kE)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===NE)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CO(n)&&(t.ns=n.namespace);const i=[];return Je(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this.counters_={}}incrementCounter(e,t=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return EA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={},rh={};function Jf(n){const e=n.toString();return nh[e]||(nh[e]=new PO),nh[e]}function kO(n,e){const t=n.toString();return rh[t]||(rh[t]=e()),rh[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Cs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="start",DO="close",xO="pLPCommand",OO="pRTLPCB",OE="id",VE="pw",LE="ser",VO="cb",LO="seg",MO="ts",FO="d",UO="dframe",ME=1870,FE=30,BO=ME-FE,qO=25e3,WO=3e4;class er{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xa(e),this.stats_=Jf(t),this.urlFn=l=>(this.appCheckToken&&(l[Qh]=this.appCheckToken),xE(t,NE,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new NO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WO)),gO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xf((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===kg)this.id=a,this.password=l;else if(o===DO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[kg]="t",r[LE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[VO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[TE]=Yf,this.transportSessionId&&(r[AE]=this.transportSessionId),this.lastSessionId&&(r[CE]=this.lastSessionId),this.applicationId&&(r[PE]=this.applicationId),this.appCheckToken&&(r[Qh]=this.appCheckToken),typeof location<"u"&&location.hostname&&SE.test(location.hostname)&&(r[bE]=RE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){er.forceAllow_=!0}static forceDisallow(){er.forceDisallow_=!0}static isAvailable(){return er.forceAllow_?!0:!er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IO()&&!vO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Iy(t),i=wE(r,BO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[UO]="t",r[OE]=e,r[VE]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xf{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yE(),window[xO+this.uniqueCallbackIdentifier]=e,window[OO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OE]=this.myID,e[VE]=this.myPW,e[LE]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+FE+r.length<=ME;){const o=this.pendingSegs.shift();r=r+"&"+LO+i+"="+o.seg+"&"+MO+i+"="+o.ts+"&"+FO+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(qO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=16384,$O=45e3;let tl=null;typeof MozWebSocket<"u"?tl=MozWebSocket:typeof WebSocket<"u"&&(tl=WebSocket);class Ft{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xa(this.connId),this.stats_=Jf(t),this.connURL=Ft.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[TE]=Yf,typeof location<"u"&&location.hostname&&SE.test(location.hostname)&&(o[bE]=RE),t&&(o[AE]=t),r&&(o[CE]=r),i&&(o[Qh]=i),s&&(o[PE]=s),xE(e,kE,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hr.set("previous_websocket_failure",!0);try{let r;kA(),this.mySock=new tl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&tl!==null&&!Ft.forceDisallow_}static previouslyFailed(){return Hr.isInMemoryStorage||Hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Vo(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=wE(t,jO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($O))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ft.responsesRequiredToBeHealthy=2;Ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static get ALL_TRANSPORTS(){return[er,Ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ft&&Ft.isAvailable();let r=t&&!Ft.previouslyFailed();if(e.webSocketOnly&&(t||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ft];else{const i=this.transports_=[];for(const s of us.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=6e4,zO=5e3,KO=10*1024,HO=100*1024,ih="t",Ng="d",QO="s",Dg="r",YO="e",xg="o",Og="a",Vg="n",Lg="p",JO="h";class XO{constructor(e,t,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xa("c:"+this.id+":"),this.transportManager_=new us(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Co(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ih in e){const t=e[ih];t===Og?this.upgradeIfSecondaryHealthy_():t===Dg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===xg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=io("t",e),r=io("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Og,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=io("t",e),r=io("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=io(ih,e);if(Ng in e){const r=e[Ng];if(t===JO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Vg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===QO?this.onConnectionShutdown_(r):t===Dg?this.onReset_(r):t===YO?Hh("Server Error: "+r):t===xg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Yf!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Co(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Co(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){V(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends BE{static getInstance(){return new nl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=32,Fg=768;class ue{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ce(){return new ue("")}function Z(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function wr(n){return n.pieces_.length-n.pieceNum_}function pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ue(n.pieces_,e)}function Zf(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ZO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ra(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function qE(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ue(e,0)}function Ee(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ue)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new ue(t,0)}function ee(n){return n.pieceNum_>=n.pieces_.length}function gt(n,e){const t=Z(n),r=Z(e);if(t===null)return e;if(t===r)return gt(pe(n),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function eV(n,e){const t=ra(n,0),r=ra(e,0);for(let i=0;i<t.length&&i<r.length;i++){const s=vi(t[i],r[i]);if(s!==0)return s}return t.length===r.length?0:t.length<r.length?-1:1}function ep(n,e){if(wr(n)!==wr(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Bt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(wr(n)>wr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class tV{constructor(e,t){this.errorPrefix_=t,this.parts_=ra(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ml(this.parts_[r]);WE(this)}}function nV(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ml(e),WE(n)}function rV(n){const e=n.parts_.pop();n.byteLength_-=ml(e),n.parts_.length>0&&(n.byteLength_-=1)}function WE(n){if(n.byteLength_>Fg)throw new Error(n.errorPrefix_+"has a key path longer than "+Fg+" bytes ("+n.byteLength_+").");if(n.parts_.length>Mg)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mg+") or object contains a cycle "+Fr(n))}function Fr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends BE{static getInstance(){return new tp}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=1e3,iV=60*5*1e3,Ug=30*1e3,sV=1.3,oV=3e4,aV="server_kill",Bg=3;class Sn extends UE{constructor(e,t,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Sn.nextPersistentConnectionId_++,this.log_=xa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=so,this.maxReconnectDelay_=iV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Be(s)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Et,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Sn.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Vt(e,"w")){const r=Xr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||LA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ug)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=VA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hh("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oV&&(this.reconnectDelay_=so),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new XO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,y=>{ut(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(aV)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ut(f),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xc(this.interruptReasons_)&&(this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Qf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new ue(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){He("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bg&&(this.reconnectDelay_=Ug,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){He("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+mE.replace(/\./g,"-")]=1,gd()?e["framework.cordova"]=1:pl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nl.getInstance().currentlyOnline();return xc(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new re(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new re(vr,e),i=new re(vr,t);return this.compare(r,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;class jE extends Yl{static get __EMPTY_NODE(){return mc}static set __EMPTY_NODE(e){mc=e}compare(e,t){return vi(e.name,t.name)}isDefinedOn(e){throw ms("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return re.MIN}maxPost(){return new re(On,mc)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,mc)}toString(){return".key"}}const un=new jE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ke.RED,this.left=i??Rt.EMPTY_NODE,this.right=s??Rt.EMPTY_NODE}copy(e,t,r,i,s){return new Ke(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class cV{copy(e,t,r,i,s){return this}insert(e,t,r){return new Ke(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,t=Rt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _c(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _c(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _c(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _c(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new cV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(n,e){return vi(n.name,e.name)}function np(n,e){return vi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh;function uV(n){Yh=n}const $E=function(n){return typeof n=="number"?"number:"+EE(n):"string:"+n},GE=function(n){if(n.isLeafNode()){const e=n.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else V(n===Yh||n.isEmpty(),"priority of unexpected type.");V(n===Yh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qg;class je{static set __childrenNodeConstructor(e){qg=e}static get __childrenNodeConstructor(){return qg}constructor(e,t=je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:Z(e)===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Z(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(V(r!==".priority"||wr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,je.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$E(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=EE(this.value_):e+=this.value_,this.lazyHash_=IE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof je.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=je.VALUE_TYPE_ORDER.indexOf(t),s=je.VALUE_TYPE_ORDER.indexOf(r);return V(i>=0,"Unknown leaf type: "+t),V(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zE,KE;function hV(n){zE=n}function dV(n){KE=n}class fV extends Yl{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?vi(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return re.MIN}maxPost(){return new re(On,new je("[PRIORITY-POST]",KE))}makePost(e,t){const r=zE(e);return new re(t,new je("[PRIORITY-POST]",r))}toString(){return".priority"}}const _e=new fV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=Math.log(2);class mV{constructor(e){const t=s=>parseInt(Math.log(s)/pV,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rl=function(n,e,t,r){n.sort(e);const i=function(l,u){const d=u-l;let f,m;if(d===0)return null;if(d===1)return f=n[l],m=t?t(f):f,new Ke(m,f.node,Ke.BLACK,null,null);{const y=parseInt(d/2,10)+l,R=i(l,y),N=i(y+1,u);return f=n[y],m=t?t(f):f,new Ke(m,f.node,Ke.BLACK,R,N)}},s=function(l){let u=null,d=null,f=n.length;const m=function(R,N){const P=f-R,L=f;f-=R;const B=i(P+1,L),W=n[P],te=t?t(W):W;y(new Ke(te,W.node,N,null,B))},y=function(R){u?(u.left=R,u=R):(d=R,u=R)};for(let R=0;R<l.count;++R){const N=l.nextBitIsOne(),P=Math.pow(2,l.count-(R+1));N?m(P,Ke.BLACK):(m(P,Ke.BLACK),m(P,Ke.RED))}return d},o=new mV(n.length),a=s(o);return new Rt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;const Di={};class bn{static get Default(){return V(Di&&_e,"ChildrenNode.ts has not been loaded"),sh=sh||new bn({".priority":Di},{".priority":_e}),sh}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Xr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rt?t:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,t){V(e!==un,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=rl(r,e.getCompare()):a=Di;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new bn(d,u)}addToIndexes(e,t){const r=Oc(this.indexes_,(i,s)=>{const o=Xr(this.indexSet_,s);if(V(o,"Missing index implementation for "+s),i===Di)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(re.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),rl(a,o.getCompare())}else return Di;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new re(e.name,a))),l.insert(e,e.node)}});return new bn(r,this.indexSet_)}removeFromIndexes(e,t){const r=Oc(this.indexes_,i=>{if(i===Di)return i;{const s=t.get(e.name);return s?i.remove(new re(e.name,s)):i}});return new bn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo;class K{static get EMPTY_NODE(){return oo||(oo=new K(new Rt(np),null,bn.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&GE(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oo}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?oo:t}}getChild(e){const t=Z(e);return t===null?this:this.getImmediateChild(t).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new re(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?oo:this.priorityNode_;return new K(i,o,s)}}updateChild(e,t){const r=Z(e);if(r===null)return t;{V(Z(e)!==".priority"||wr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(pe(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(_e,(o,a)=>{t[o]=a.val(e),r++,s&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$E(this.getPriority().val())+":"),this.forEachChild(_e,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":IE(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new re(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new re(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new re(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oa?-1:0}withIndex(e){if(e===un||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===un||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(_e),i=t.getIterator(_e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===un?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _V extends K{constructor(){super(new Rt(np),K.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Oa=new _V;Object.defineProperties(re,{MIN:{value:new re(vr,K.EMPTY_NODE)},MAX:{value:new re(On,Oa)}});jE.__EMPTY_NODE=K.EMPTY_NODE;je.__childrenNodeConstructor=K;uV(Oa);dV(Oa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV=!0;function Ae(n,e=null){if(n===null)return K.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new je(t,Ae(e))}if(!(n instanceof Array)&&gV){const t=[];let r=!1;if(Je(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ae(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new re(o,l)))}}),t.length===0)return K.EMPTY_NODE;const s=rl(t,lV,o=>o.name,np);if(r){const o=rl(t,_e.getCompare());return new K(s,Ae(e),new bn({".priority":o},{".priority":_e}))}else return new K(s,Ae(e),bn.Default)}else{let t=K.EMPTY_NODE;return Je(n,(r,i)=>{if(Vt(n,r)&&r.substring(0,1)!=="."){const s=Ae(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(Ae(e))}}hV(Ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends Yl{constructor(e){super(),this.indexPath_=e,V(!ee(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?vi(e.name,t.name):s}makePost(e,t){const r=Ae(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(t,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Oa);return new re(On,e)}toString(){return ra(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV extends Yl{compare(e,t){const r=e.node.compareTo(t.node);return r===0?vi(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,t){const r=Ae(e);return new re(t,r)}toString(){return".value"}}const ip=new yV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(n){return{type:"value",snapshotNode:n}}function hs(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ia(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function sa(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function IV(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(ia(t,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(hs(t,r)):o.trackChildChange(sa(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,s)=>{t.hasChild(i)||r.trackChildChange(ia(i,s))}),t.isLeafNode()||t.forEachChild(_e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(sa(i,s,o))}else r.trackChildChange(hs(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.indexedFilter_=new sp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=oa.getStartPost_(e),this.endPost_=oa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new re(t,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=K.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const s=this;return t.forEachChild(_e,(o,a)=>{s.matches(new re(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new oa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new re(t,r))||(r=K.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const l=new re(t,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let m=i.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,l);if(d&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(sa(t,r,f)),a.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(ia(t,f));const N=a.updateImmediateChild(t,K.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(hs(m.name,m.node)),N.updateImmediateChild(m.name,m.node)):N}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ia(u.name,u.node)),s.trackChildChange(hs(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(u.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vr}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:On}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Jl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wV(n){return n.loadsAllData()?new sp(n.getIndex()):n.hasLimit()?new vV(n):new oa(n)}function EV(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function TV(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Jh(n,e,t){const r=n.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,t!=null?(r.startNameSet_=!0,r.indexStartName_=t):(r.startNameSet_=!1,r.indexStartName_=""),r}function AV(n,e,t){let r;return n.index_===un||t?r=Jh(n,e,t):r=Jh(n,e,On),r.startAfterSet_=!0,r}function Xh(n,e,t){const r=n.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,t!==void 0?(r.endNameSet_=!0,r.indexEndName_=t):(r.endNameSet_=!1,r.indexEndName_=""),r}function bV(n,e,t){let r;return n.index_===un||t?r=Xh(n,e,t):r=Xh(n,e,vr),r.endBeforeSet_=!0,r}function Xl(n,e){const t=n.copy();return t.index_=e,t}function Wg(n){const e={};if(n.isDefault())return e;let t;if(n.index_===_e?t="$priority":n.index_===ip?t="$value":n.index_===un?t="$key":(V(n.index_ instanceof rp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Be(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Be(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Be(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Be(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Be(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function jg(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==_e&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends UE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xa("p:rest:"),this.listens_={}}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=il.getListenId_(e,r),a={};this.listens_[o]=a;const l=Wg(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),Xr(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,t){const r=il.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Wg(e._queryParams),r=e._path.toString(),i=new Et;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Vo(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){return{value:null,children:new Map}}function Ps(n,e,t){if(ee(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Z(e);n.children.has(r)||n.children.set(r,sl());const i=n.children.get(r);e=pe(e),Ps(i,e,t)}}function Zh(n,e){if(ee(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(_e,(r,i)=>{Ps(n,new ue(r),i)}),Zh(n,e)}}else if(n.children.size>0){const t=Z(e);return e=pe(e),n.children.has(t)&&Zh(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function ed(n,e,t){n.value!==null?t(e,n.value):SV(n,(r,i)=>{const s=new ue(e.toString()+"/"+r);ed(i,s,t)})}function SV(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Je(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=10*1e3,PV=30*1e3,kV=5*60*1e3;class NV{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new CV(e);const r=$g+(PV-$g)*Math.random();Co(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Je(e,(i,s)=>{s>0&&Vt(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),Co(this.reportStats_.bind(this),Math.floor(Math.random()*2*kV))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function op(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ap(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cp(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Ht.ACK_USER_WRITE,this.source=op()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ue(e));return new ol(ce(),t,this.revert)}}else return V(Z(this.path)===e,"operationForChild called for unrelated child."),new ol(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.source=e,this.path=t,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new aa(this.source,ce()):new aa(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Ht.OVERWRITE}operationForChild(e){return ee(this.path)?new ui(this.source,ce(),this.snap.getImmediateChild(e)):new ui(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Ht.MERGE}operationForChild(e){if(ee(this.path)){const t=this.children.subtree(new ue(e));return t.isEmpty()?null:t.value?new ui(this.source,ce(),t.value):new ds(this.source,ce(),t)}else return V(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const t=Z(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xV(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(IV(o.childName,o.snapshotNode))}),ao(n,i,"child_removed",e,r,t),ao(n,i,"child_added",e,r,t),ao(n,i,"child_moved",s,r,t),ao(n,i,"child_changed",e,r,t),ao(n,i,"value",e,r,t),i}function ao(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,l)=>VV(n,a,l)),o.forEach(a=>{const l=OV(n,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function OV(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function VV(n,e,t){if(e.childName==null||t.childName==null)throw ms("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),i=new re(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n,e){return{eventCache:n,serverCache:e}}function Po(n,e,t,r){return Zl(new Er(e,t,r),n.serverCache)}function QE(n,e,t,r){return Zl(n.eventCache,new Er(e,t,r))}function al(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function hi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh;const LV=()=>(oh||(oh=new Rt(yO)),oh);class me{static fromObject(e){let t=new me(null);return Je(e,(r,i)=>{t=t.set(new ue(r),i)}),t}constructor(e,t=LV()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ce(),value:this.value};if(ee(e))return null;{const r=Z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(pe(e),t);return s!=null?{path:Ee(new ue(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const t=Z(e),r=this.children.get(t);return r!==null?r.subtree(pe(e)):new me(null)}}set(e,t){if(ee(e))return new me(t,this.children);{const r=Z(e),s=(this.children.get(r)||new me(null)).set(pe(e),t),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const t=Z(e),r=this.children.get(t);if(r){const i=r.remove(pe(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(ee(e))return this.value;{const t=Z(e),r=this.children.get(t);return r?r.get(pe(e)):null}}setTree(e,t){if(ee(e))return t;{const r=Z(e),s=(this.children.get(r)||new me(null)).setTree(pe(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ee(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ce(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(ee(e))return null;{const s=Z(e),o=this.children.get(s);return o?o.findOnPath_(pe(e),Ee(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ce(),t)}foreachOnPath_(e,t,r){if(ee(e))return this;{this.value&&r(t,this.value);const i=Z(e),s=this.children.get(i);return s?s.foreachOnPath_(pe(e),Ee(t,i),r):new me(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Ee(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new me(null))}}function ko(n,e,t){if(ee(e))return new Qt(new me(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=gt(i,e);return s=s.updateChild(o,t),new Qt(n.writeTree_.set(i,s))}else{const i=new me(t),s=n.writeTree_.setTree(e,i);return new Qt(s)}}}function td(n,e,t){let r=n;return Je(t,(i,s)=>{r=ko(r,Ee(e,i),s)}),r}function Gg(n,e){if(ee(e))return Qt.empty();{const t=n.writeTree_.setTree(e,new me(null));return new Qt(t)}}function nd(n,e){return wi(n,e)!=null}function wi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(gt(t.path,e)):null}function zg(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(_e,(r,i)=>{e.push(new re(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new re(r,i.value))}),e}function ar(n,e){if(ee(e))return n;{const t=wi(n,e);return t!=null?new Qt(new me(t)):new Qt(n.writeTree_.subtree(e))}}function rd(n){return n.writeTree_.isEmpty()}function fs(n,e){return YE(ce(),n.writeTree_,e)}function YE(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(V(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=YE(Ee(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Ee(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n,e){return eT(e,n)}function MV(n,e,t,r,i){V(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=ko(n.visibleWrites,e,t)),n.lastWriteId=r}function FV(n,e,t,r){V(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=td(n.visibleWrites,e,t),n.lastWriteId=r}function UV(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function BV(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&qV(a,r.path)?i=!1:Bt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return WV(n),!0;if(r.snap)n.visibleWrites=Gg(n.visibleWrites,r.path);else{const a=r.children;Je(a,l=>{n.visibleWrites=Gg(n.visibleWrites,Ee(r.path,l))})}return!0}else return!1}function qV(n,e){if(n.snap)return Bt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Bt(Ee(n.path,t),e))return!0;return!1}function WV(n){n.visibleWrites=JE(n.allWrites,jV,ce()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jV(n){return n.visible}function JE(n,e,t){let r=Qt.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)Bt(t,o)?(a=gt(t,o),r=ko(r,a,s.snap)):Bt(o,t)&&(a=gt(o,t),r=ko(r,ce(),s.snap.getChild(a)));else if(s.children){if(Bt(t,o))a=gt(t,o),r=td(r,a,s.children);else if(Bt(o,t))if(a=gt(o,t),ee(a))r=td(r,ce(),s.children);else{const l=Xr(s.children,Z(a));if(l){const u=l.getChild(pe(a));r=ko(r,ce(),u)}}}else throw ms("WriteRecord should have .snap or .children")}}return r}function XE(n,e,t,r,i){if(!r&&!i){const s=wi(n.visibleWrites,e);if(s!=null)return s;{const o=ar(n.visibleWrites,e);if(rd(o))return t;if(t==null&&!nd(o,ce()))return null;{const a=t||K.EMPTY_NODE;return fs(o,a)}}}else{const s=ar(n.visibleWrites,e);if(!i&&rd(s))return t;if(!i&&t==null&&!nd(s,ce()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Bt(u.path,e)||Bt(e,u.path))},a=JE(n.allWrites,o,e),l=t||K.EMPTY_NODE;return fs(a,l)}}}function $V(n,e,t){let r=K.EMPTY_NODE;const i=wi(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=ar(n.visibleWrites,e);return t.forEachChild(_e,(o,a)=>{const l=fs(ar(s,new ue(o)),a);r=r.updateImmediateChild(o,l)}),zg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ar(n.visibleWrites,e);return zg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function GV(n,e,t,r,i){V(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(e,t);if(nd(n.visibleWrites,s))return null;{const o=ar(n.visibleWrites,s);return rd(o)?i.getChild(t):fs(o,i.getChild(t))}}function zV(n,e,t,r){const i=Ee(e,t),s=wi(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=ar(n.visibleWrites,i);return fs(o,r.getNode().getImmediateChild(t))}else return null}function KV(n,e){return wi(n.visibleWrites,e)}function HV(n,e,t,r,i,s,o){let a;const l=ar(n.visibleWrites,e),u=wi(l,ce());if(u!=null)a=u;else if(t!=null)a=fs(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&d.length<i;)f(y,r)!==0&&d.push(y),y=m.getNext();return d}else return[]}function QV(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function cl(n,e,t,r){return XE(n.writeTree,n.treePath,e,t,r)}function lp(n,e){return $V(n.writeTree,n.treePath,e)}function Kg(n,e,t,r){return GV(n.writeTree,n.treePath,e,t,r)}function ll(n,e){return KV(n.writeTree,Ee(n.treePath,e))}function YV(n,e,t,r,i,s){return HV(n.writeTree,n.treePath,e,t,r,i,s)}function up(n,e,t){return zV(n.writeTree,n.treePath,e,t)}function ZE(n,e){return eT(Ee(n.treePath,e),n.writeTree)}function eT(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,sa(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,ia(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,hs(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,sa(r,e.snapshotNode,i.oldSnap));else throw ms("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const tT=new XV;class hp{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return up(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hi(this.viewCache_),s=YV(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(n){return{filter:n}}function e0(n,e){V(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function t0(n,e,t,r,i){const s=new JV;let o,a;if(t.type===Ht.OVERWRITE){const u=t;u.source.fromUser?o=id(n,e,u.path,u.snap,r,i,s):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ee(u.path),o=ul(n,e,u.path,u.snap,r,i,a,s))}else if(t.type===Ht.MERGE){const u=t;u.source.fromUser?o=r0(n,e,u.path,u.children,r,i,s):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=sd(n,e,u.path,u.children,r,i,a,s))}else if(t.type===Ht.ACK_USER_WRITE){const u=t;u.revert?o=o0(n,e,u.path,r,i,s):o=i0(n,e,u.path,u.affectedTree,r,i,s)}else if(t.type===Ht.LISTEN_COMPLETE)o=s0(n,e,t.path,r,s);else throw ms("Unknown operation type: "+t.type);const l=s.getChanges();return n0(e,o,l),{viewCache:o,changes:l}}function n0(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=al(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(HE(al(e)))}}function nT(n,e,t,r,i,s){const o=e.eventCache;if(ll(r,t)!=null)return e;{let a,l;if(ee(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=hi(e),d=u instanceof K?u:K.EMPTY_NODE,f=lp(r,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=cl(r,hi(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Z(t);if(u===".priority"){V(wr(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=Kg(r,t,d,l);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=pe(t);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=Kg(r,t,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(d,m):f=o.getNode().getImmediateChild(u)}else f=up(r,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,d,i,s):a=o.getNode()}}return Po(e,a,o.isFullyInitialized()||ee(t),n.filter.filtersNodes())}}function ul(n,e,t,r,i,s,o,a){const l=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(ee(t))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(t,r);u=d.updateFullNode(l.getNode(),y,null)}else{const y=Z(t);if(!l.isCompleteForPath(t)&&wr(t)>1)return e;const R=pe(t),P=l.getNode().getImmediateChild(y).updateChild(R,r);y===".priority"?u=d.updatePriority(l.getNode(),P):u=d.updateChild(l.getNode(),y,P,R,tT,null)}const f=QE(e,u,l.isFullyInitialized()||ee(t),d.filtersNodes()),m=new hp(i,f,s);return nT(n,f,t,i,m,a)}function id(n,e,t,r,i,s,o){const a=e.eventCache;let l,u;const d=new hp(i,e,s);if(ee(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Po(e,u,!0,n.filter.filtersNodes());else{const f=Z(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),l=Po(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=pe(t),y=a.getNode().getImmediateChild(f);let R;if(ee(m))R=r;else{const N=d.getCompleteChild(f);N!=null?Zf(m)===".priority"&&N.getChild(qE(m)).isEmpty()?R=N:R=N.updateChild(m,r):R=K.EMPTY_NODE}if(y.equals(R))l=e;else{const N=n.filter.updateChild(a.getNode(),f,R,m,d,o);l=Po(e,N,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Hg(n,e){return n.eventCache.isCompleteForChild(e)}function r0(n,e,t,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Ee(t,l);Hg(e,Z(d))&&(a=id(n,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Ee(t,l);Hg(e,Z(d))||(a=id(n,a,d,u,i,s,o))}),a}function Qg(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function sd(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ee(t)?u=r:u=new me(null).setTree(t,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),R=Qg(n,y,m);l=ul(n,l,new ue(f),R,i,s,o,a)}}),u.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!y){const R=e.serverCache.getNode().getImmediateChild(f),N=Qg(n,R,m);l=ul(n,l,new ue(f),N,i,s,o,a)}}),l}function i0(n,e,t,r,i,s,o){if(ll(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ee(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ul(n,e,t,l.getNode().getChild(t),i,s,a,o);if(ee(t)){let u=new me(null);return l.getNode().forEachChild(un,(d,f)=>{u=u.set(new ue(d),f)}),sd(n,e,t,u,i,s,a,o)}else return e}else{let u=new me(null);return r.foreach((d,f)=>{const m=Ee(t,d);l.isCompleteForPath(m)&&(u=u.set(d,l.getNode().getChild(m)))}),sd(n,e,t,u,i,s,a,o)}}function s0(n,e,t,r,i){const s=e.serverCache,o=QE(e,s.getNode(),s.isFullyInitialized()||ee(t),s.isFiltered());return nT(n,o,t,r,tT,i)}function o0(n,e,t,r,i,s){let o;if(ll(r,t)!=null)return e;{const a=new hp(r,e,i),l=e.eventCache.getNode();let u;if(ee(t)||Z(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=cl(r,hi(e));else{const f=e.serverCache.getNode();V(f instanceof K,"serverChildren would be complete if leaf node"),d=lp(r,f)}d=d,u=n.filter.updateFullNode(l,d,s)}else{const d=Z(t);let f=up(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?u=n.filter.updateChild(l,d,f,pe(t),a,s):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(l,d,K.EMPTY_NODE,pe(t),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cl(r,hi(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ll(r,ce())!=null,Po(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new sp(r.getIndex()),s=wV(r);this.processor_=ZV(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(K.EMPTY_NODE,a.getNode(),null),d=new Er(l,o.isFullyInitialized(),i.filtersNodes()),f=new Er(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zl(f,d),this.eventGenerator_=new DV(this.query_)}get query(){return this.query_}}function c0(n){return n.viewCache_.serverCache.getNode()}function l0(n){return al(n.viewCache_)}function u0(n,e){const t=hi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ee(e)&&!t.getImmediateChild(Z(e)).isEmpty())?t.getChild(e):null}function Yg(n){return n.eventRegistrations_.length===0}function h0(n,e){n.eventRegistrations_.push(e)}function Jg(n,e,t){const r=[];if(t){V(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function Xg(n,e,t,r){e.type===Ht.MERGE&&e.source.queryId!==null&&(V(hi(n.viewCache_),"We should always have a full cache before handling merges"),V(al(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=t0(n.processor_,i,e,t,r);return e0(n.processor_,s.viewCache),V(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,rT(n,s.changes,s.viewCache.eventCache.getNode(),null)}function d0(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(_e,(s,o)=>{r.push(hs(s,o))}),t.isFullyInitialized()&&r.push(HE(t.getNode())),rT(n,r,t.getNode(),e)}function rT(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return xV(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;class iT{constructor(){this.views=new Map}}function f0(n){V(!hl,"__referenceConstructor has already been defined"),hl=n}function p0(){return V(hl,"Reference.ts has not been loaded"),hl}function m0(n){return n.views.size===0}function dp(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return V(s!=null,"SyncTree gave us an op for an invalid query."),Xg(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(Xg(o,e,t,r));return s}}function sT(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=cl(t,i?r:null),l=!1;a?l=!0:r instanceof K?(a=lp(t,r),l=!1):(a=K.EMPTY_NODE,l=!1);const u=Zl(new Er(a,l,!1),new Er(r,i,!1));return new a0(e,u)}return o}function _0(n,e,t,r,i,s){const o=sT(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),h0(o,t),d0(o,t)}function g0(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=Tr(n);if(i==="default")for(const[l,u]of n.views.entries())o=o.concat(Jg(u,t,r)),Yg(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=n.views.get(i);l&&(o=o.concat(Jg(l,t,r)),Yg(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Tr(n)&&s.push(new(p0())(e._repo,e._path)),{removed:s,events:o}}function oT(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function cr(n,e){let t=null;for(const r of n.views.values())t=t||u0(r,e);return t}function aT(n,e){if(e._queryParams.loadsAllData())return tu(n);{const r=e._queryIdentifier;return n.views.get(r)}}function cT(n,e){return aT(n,e)!=null}function Tr(n){return tu(n)!=null}function tu(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;function y0(n){V(!dl,"__referenceConstructor has already been defined"),dl=n}function I0(){return V(dl,"Reference.ts has not been loaded"),dl}let v0=1;class Zg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=QV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fp(n,e,t,r,i){return MV(n.pendingWriteTree_,e,t,r,i),i?ks(n,new ui(op(),e,t)):[]}function w0(n,e,t,r){FV(n.pendingWriteTree_,e,t,r);const i=me.fromObject(t);return ks(n,new ds(op(),e,i))}function tr(n,e,t=!1){const r=UV(n.pendingWriteTree_,e);if(BV(n.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(ce(),!0):Je(r.children,o=>{s=s.set(new ue(o),!0)}),ks(n,new ol(r.path,s,t))}else return[]}function Va(n,e,t){return ks(n,new ui(ap(),e,t))}function E0(n,e,t){const r=me.fromObject(t);return ks(n,new ds(ap(),e,r))}function T0(n,e){return ks(n,new aa(ap(),e))}function A0(n,e,t){const r=pp(n,t);if(r){const i=mp(r),s=i.path,o=i.queryId,a=gt(s,e),l=new aa(cp(o),a);return _p(n,s,l)}else return[]}function fl(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||cT(o,e))){const l=g0(o,e,t,r);m0(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(s,(m,y)=>Tr(y));if(d&&!f){const m=n.syncPointTree_.subtree(s);if(!m.isEmpty()){const y=S0(m);for(let R=0;R<y.length;++R){const N=y[R],P=N.query,L=dT(n,N);n.listenProvider_.startListening(No(P),ca(n,P),L.hashFn,L.onComplete)}}}!f&&u.length>0&&!r&&(d?n.listenProvider_.stopListening(No(e),null):u.forEach(m=>{const y=n.queryToTagMap.get(ru(m));n.listenProvider_.stopListening(No(m),y)}))}C0(n,u)}return a}function lT(n,e,t,r){const i=pp(n,r);if(i!=null){const s=mp(i),o=s.path,a=s.queryId,l=gt(o,e),u=new ui(cp(a),l,t);return _p(n,o,u)}else return[]}function b0(n,e,t,r){const i=pp(n,r);if(i){const s=mp(i),o=s.path,a=s.queryId,l=gt(o,e),u=me.fromObject(t),d=new ds(cp(a),l,u);return _p(n,o,d)}else return[]}function od(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(m,y)=>{const R=gt(m,i);s=s||cr(y,R),o=o||Tr(y)});let a=n.syncPointTree_.get(i);a?(o=o||Tr(a),s=s||cr(a,ce())):(a=new iT,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=K.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((y,R)=>{const N=cr(R,ce());N&&(s=s.updateImmediateChild(y,N))}));const u=cT(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=ru(e);V(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=P0();n.queryToTagMap.set(m,y),n.tagToQueryMap.set(y,m)}const d=eu(n.pendingWriteTree_,i);let f=_0(a,e,t,d,s,l);if(!u&&!o&&!r){const m=aT(a,e);f=f.concat(k0(n,e,m))}return f}function nu(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=gt(o,e),u=cr(a,l);if(u)return u});return XE(i,e,s,t,!0)}function R0(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(u,d)=>{const f=gt(u,t);r=r||cr(d,f)});let i=n.syncPointTree_.get(t);i?r=r||cr(i,ce()):(i=new iT,n.syncPointTree_=n.syncPointTree_.set(t,i));const s=r!=null,o=s?new Er(r,!0,!1):null,a=eu(n.pendingWriteTree_,e._path),l=sT(i,e,a,s?o.getNode():K.EMPTY_NODE,s);return l0(l)}function ks(n,e){return uT(e,n.syncPointTree_,null,eu(n.pendingWriteTree_,ce()))}function uT(n,e,t,r){if(ee(n.path))return hT(n,e,t,r);{const i=e.get(ce());t==null&&i!=null&&(t=cr(i,ce()));let s=[];const o=Z(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,d=ZE(r,o);s=s.concat(uT(a,l,u,d))}return i&&(s=s.concat(dp(i,n,r,t))),s}}function hT(n,e,t,r){const i=e.get(ce());t==null&&i!=null&&(t=cr(i,ce()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=ZE(r,o),d=n.operationForChild(o);d&&(s=s.concat(hT(d,a,l,u)))}),i&&(s=s.concat(dp(i,n,r,t))),s}function dT(n,e){const t=e.query,r=ca(n,t);return{hashFn:()=>(c0(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?A0(n,t._path,r):T0(n,t._path);{const s=wO(i,t);return fl(n,t,null,s)}}}}function ca(n,e){const t=ru(e);return n.queryToTagMap.get(t)}function ru(n){return n._path.toString()+"$"+n._queryIdentifier}function pp(n,e){return n.tagToQueryMap.get(e)}function mp(n){const e=n.indexOf("$");return V(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ue(n.substr(0,e))}}function _p(n,e,t){const r=n.syncPointTree_.get(e);V(r,"Missing sync point for query tag that we're tracking");const i=eu(n.pendingWriteTree_,e);return dp(r,t,i,null)}function S0(n){return n.fold((e,t,r)=>{if(t&&Tr(t))return[tu(t)];{let i=[];return t&&(i=oT(t)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function No(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(I0())(n._repo,n._path):n}function C0(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=ru(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function P0(){return v0++}function k0(n,e,t){const r=e._path,i=ca(n,e),s=dT(n,t),o=n.listenProvider_.startListening(No(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)V(!Tr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,f)=>{if(!ee(u)&&d&&Tr(d))return[tu(d).query];{let m=[];return d&&(m=m.concat(oT(d).map(y=>y.query))),Je(f,(y,R)=>{m=m.concat(R)}),m}});for(let u=0;u<l.length;++u){const d=l[u];n.listenProvider_.stopListening(No(d),ca(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gp(t)}node(){return this.node_}}class yp{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ee(this.path_,e);return new yp(this.syncTree_,t)}node(){return nu(this.syncTree_,this.path_)}}const N0=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ey=function(n,e,t){if(!n||typeof n!="object")return n;if(V(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return D0(n[".sv"],e,t);if(typeof n[".sv"]=="object")return x0(n[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},D0=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+n)}},x0=function(n,e,t){n.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&V(!1,"Unexpected increment value: "+r);const i=e.node();if(V(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},fT=function(n,e,t,r){return vp(e,new yp(t,n),r)},Ip=function(n,e,t){return vp(n,new gp(e),t)};function vp(n,e,t){const r=n.getPriority().val(),i=ey(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=ey(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new je(a,Ae(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new je(i))),o.forEachChild(_e,(a,l)=>{const u=vp(l,e.getImmediateChild(a),t);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function iu(n,e){let t=e instanceof ue?e:new ue(e),r=n,i=Z(t);for(;i!==null;){const s=Xr(r.node.children,i)||{children:{},childCount:0};r=new wp(i,r,s),t=pe(t),i=Z(t)}return r}function Ei(n){return n.node.value}function Ep(n,e){n.node.value=e,ad(n)}function pT(n){return n.node.childCount>0}function O0(n){return Ei(n)===void 0&&!pT(n)}function su(n,e){Je(n.node.children,(t,r)=>{e(new wp(t,n,r))})}function mT(n,e,t,r){t&&e(n),su(n,i=>{mT(i,e,!0)})}function V0(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function La(n){return new ue(n.parent===null?n.name:La(n.parent)+"/"+n.name)}function ad(n){n.parent!==null&&L0(n.parent,n.name,n)}function L0(n,e,t){const r=O0(t),i=Vt(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,ad(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ad(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=/[\[\].#$\/\u0000-\u001F\u007F]/,F0=/[\[\].#$\u0000-\u001F\u007F]/,ah=10*1024*1024,ou=function(n){return typeof n=="string"&&n.length!==0&&!M0.test(n)},_T=function(n){return typeof n=="string"&&n.length!==0&&!F0.test(n)},U0=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_T(n)},la=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ql(n)||n&&typeof n=="object"&&Vt(n,".sv")},_n=function(n,e,t,r){r&&e===void 0||Ma(St(n,"value"),e,t)},Ma=function(n,e,t){const r=t instanceof ue?new tV(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Fr(r));if(typeof e=="function")throw new Error(n+"contains a function "+Fr(r)+" with contents = "+e.toString());if(Ql(e))throw new Error(n+"contains "+e.toString()+" "+Fr(r));if(typeof e=="string"&&e.length>ah/3&&ml(e)>ah)throw new Error(n+"contains a string greater than "+ah+" utf8 bytes "+Fr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ou(o)))throw new Error(n+" contains an invalid key ("+o+") "+Fr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nV(r,o),Ma(n,a,r),rV(r)}),i&&s)throw new Error(n+' contains ".value" child '+Fr(r)+" in addition to actual children.")}},B0=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const s=ra(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ou(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eV);let i=null;for(t=0;t<e.length;t++){if(r=e[t],i!==null&&Bt(i,r))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},gT=function(n,e,t,r){const i=St(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Je(e,(o,a)=>{const l=new ue(o);if(Ma(i,a,Ee(t,l)),Zf(l)===".priority"&&!la(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),B0(i,s)},Tp=function(n,e,t){if(Ql(e))throw new Error(St(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!la(e))throw new Error(St(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Fa=function(n,e,t,r){if(t!==void 0&&!ou(t))throw new Error(St(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ua=function(n,e,t,r){if(!_T(t))throw new Error(St(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},q0=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ua(n,e,t)},qt=function(n,e){if(Z(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},yT=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ou(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!U0(t))throw new Error(St(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function au(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!ep(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function IT(n,e,t){au(n,t),vT(n,r=>ep(r,e))}function Mt(n,e,t){au(n,t),vT(n,r=>Bt(r,e)||Bt(e,r))}function vT(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(j0(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function j0(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Jr&&He("event: "+t.toString()),Cs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="repo_interrupt",$0=25;class G0{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new W0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sl(),this.transactionQueueTree_=new wp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function z0(n,e,t){if(n.stats_=Jf(n.repoInfo_),n.forceRestClient_||bO())n.server_=new il(n.repoInfo_,(r,i,s,o)=>{ty(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ny(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Sn(n.repoInfo_,e,(r,i,s,o)=>{ty(n,r,i,s,o)},r=>{ny(n,r)},r=>{K0(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=kO(n.repoInfo_,()=>new NV(n.stats_,n.server_)),n.infoData_=new RV,n.infoSyncTree_=new Zg({startListening:(r,i,s,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=Va(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ap(n,"connected",!1),n.serverSyncTree_=new Zg({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Mt(n.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function ET(n){const t=n.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ua(n){return N0({timestamp:ET(n)})}function ty(n,e,t,r,i){n.dataUpdateCount++;const s=new ue(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const l=Oc(t,u=>Ae(u));o=b0(n.serverSyncTree_,s,l,i)}else{const l=Ae(t);o=lT(n.serverSyncTree_,s,l,i)}else if(r){const l=Oc(t,u=>Ae(u));o=E0(n.serverSyncTree_,s,l)}else{const l=Ae(t);o=Va(n.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ps(n,s)),Mt(n.eventQueue_,a,o)}function ny(n,e){Ap(n,"connected",e),e===!1&&Y0(n)}function K0(n,e){Je(e,(t,r)=>{Ap(n,t,r)})}function Ap(n,e,t){const r=new ue("/.info/"+e),i=Ae(t);n.infoData_.updateSnapshot(r,i);const s=Va(n.infoSyncTree_,r,i);Mt(n.eventQueue_,r,s)}function cu(n){return n.nextWriteId_++}function H0(n,e,t){const r=R0(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(i=>{const s=Ae(i).withIndex(e._queryParams.getIndex());od(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Va(n.serverSyncTree_,e._path,s);else{const a=ca(n.serverSyncTree_,e);o=lT(n.serverSyncTree_,e._path,s,a)}return Mt(n.eventQueue_,e._path,o),fl(n.serverSyncTree_,e,t,null,!0),s},i=>(Ns(n,"get for query "+Be(e)+" failed: "+i),Promise.reject(new Error(i))))}function bp(n,e,t,r,i){Ns(n,"set",{path:e.toString(),value:t,priority:r});const s=Ua(n),o=Ae(t,r),a=nu(n.serverSyncTree_,e),l=Ip(o,a,s),u=cu(n),d=fp(n.serverSyncTree_,e,l,u,!0);au(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(m,y)=>{const R=m==="ok";R||ut("set at "+e+" failed: "+m);const N=tr(n.serverSyncTree_,u,!R);Mt(n.eventQueue_,e,N),Ar(n,i,m,y)});const f=Sp(n,e);ps(n,f),Mt(n.eventQueue_,f,[])}function Q0(n,e,t,r){Ns(n,"update",{path:e.toString(),value:t});let i=!0;const s=Ua(n),o={};if(Je(t,(a,l)=>{i=!1,o[a]=fT(Ee(e,a),Ae(l),n.serverSyncTree_,s)}),i)He("update() called with empty data.  Don't do anything."),Ar(n,r,"ok",void 0);else{const a=cu(n),l=w0(n.serverSyncTree_,e,o,a);au(n.eventQueue_,l),n.server_.merge(e.toString(),t,(u,d)=>{const f=u==="ok";f||ut("update at "+e+" failed: "+u);const m=tr(n.serverSyncTree_,a,!f),y=m.length>0?ps(n,e):e;Mt(n.eventQueue_,y,m),Ar(n,r,u,d)}),Je(t,u=>{const d=Sp(n,Ee(e,u));ps(n,d)}),Mt(n.eventQueue_,e,[])}}function Y0(n){Ns(n,"onDisconnectEvents");const e=Ua(n),t=sl();ed(n.onDisconnect_,ce(),(i,s)=>{const o=fT(i,s,n.serverSyncTree_,e);Ps(t,i,o)});let r=[];ed(t,ce(),(i,s)=>{r=r.concat(Va(n.serverSyncTree_,i,s));const o=Sp(n,i);ps(n,o)}),n.onDisconnect_=sl(),Mt(n.eventQueue_,ce(),r)}function J0(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Zh(n.onDisconnect_,e),Ar(n,t,r,i)})}function ry(n,e,t,r){const i=Ae(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ps(n.onDisconnect_,e,i),Ar(n,r,s,o)})}function X0(n,e,t,r,i){const s=Ae(t,r);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ps(n.onDisconnect_,e,s),Ar(n,i,o,a)})}function Z0(n,e,t,r){if(xc(t)){He("onDisconnect().update() called with empty data.  Don't do anything."),Ar(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,s)=>{i==="ok"&&Je(t,(o,a)=>{const l=Ae(a);Ps(n.onDisconnect_,Ee(e,o),l)}),Ar(n,r,i,s)})}function eL(n,e,t){let r;Z(e._path)===".info"?r=od(n.infoSyncTree_,e,t):r=od(n.serverSyncTree_,e,t),IT(n.eventQueue_,e._path,r)}function cd(n,e,t){let r;Z(e._path)===".info"?r=fl(n.infoSyncTree_,e,t):r=fl(n.serverSyncTree_,e,t),IT(n.eventQueue_,e._path,r)}function TT(n){n.persistentConnection_&&n.persistentConnection_.interrupt(wT)}function tL(n){n.persistentConnection_&&n.persistentConnection_.resume(wT)}function Ns(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),He(t,...e)}function Ar(n,e,t,r){e&&Cs(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function nL(n,e,t,r,i,s){Ns(n,"transaction on "+e);const o={path:e,update:t,onComplete:r,status:null,order:yE(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Rp(n,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ma("transaction failed: Data returned ",l,o.path),o.status=0;const u=iu(n.transactionQueueTree_,e),d=Ei(u)||[];d.push(o),Ep(u,d);let f;typeof l=="object"&&l!==null&&Vt(l,".priority")?(f=Xr(l,".priority"),V(la(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):f=(nu(n.serverSyncTree_,e)||K.EMPTY_NODE).getPriority().val();const m=Ua(n),y=Ae(l,f),R=Ip(y,a,m);o.currentOutputSnapshotRaw=y,o.currentOutputSnapshotResolved=R,o.currentWriteId=cu(n);const N=fp(n.serverSyncTree_,e,R,o.currentWriteId,o.applyLocally);Mt(n.eventQueue_,e,N),lu(n,n.transactionQueueTree_)}}function Rp(n,e,t){return nu(n.serverSyncTree_,e,t)||K.EMPTY_NODE}function lu(n,e=n.transactionQueueTree_){if(e||uu(n,e),Ei(e)){const t=bT(n,e);V(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&rL(n,La(e),t)}else pT(e)&&su(e,t=>{lu(n,t)})}function rL(n,e,t){const r=t.map(u=>u.currentWriteId),i=Rp(n,e,r);let s=i;const o=i.hash();for(let u=0;u<t.length;u++){const d=t[u];V(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=gt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;n.server_.put(l.toString(),a,u=>{Ns(n,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let m=0;m<t.length;m++)t[m].status=2,d=d.concat(tr(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&f.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();uu(n,iu(n.transactionQueueTree_,e)),lu(n,n.transactionQueueTree_),Mt(n.eventQueue_,e,d);for(let m=0;m<f.length;m++)Cs(f[m])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{ut("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}ps(n,e)}},o)}function ps(n,e){const t=AT(n,e),r=La(t),i=bT(n,t);return iL(n,i,r),r}function iL(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=gt(t,l.path);let d=!1,f;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,i=i.concat(tr(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$0)d=!0,f="maxretry",i=i.concat(tr(n.serverSyncTree_,l.currentWriteId,!0));else{const m=Rp(n,l.path,o);l.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){Ma("transaction failed: Data returned ",y,l.path);let R=Ae(y);typeof y=="object"&&y!=null&&Vt(y,".priority")||(R=R.updatePriority(m.getPriority()));const P=l.currentWriteId,L=Ua(n),B=Ip(R,m,L);l.currentOutputSnapshotRaw=R,l.currentOutputSnapshotResolved=B,l.currentWriteId=cu(n),o.splice(o.indexOf(P),1),i=i.concat(fp(n.serverSyncTree_,l.path,B,l.currentWriteId,l.applyLocally)),i=i.concat(tr(n.serverSyncTree_,P,!0))}else d=!0,f="nodata",i=i.concat(tr(n.serverSyncTree_,l.currentWriteId,!0))}Mt(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}uu(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)Cs(r[a]);lu(n,n.transactionQueueTree_)}function AT(n,e){let t,r=n.transactionQueueTree_;for(t=Z(e);t!==null&&Ei(r)===void 0;)r=iu(r,t),e=pe(e),t=Z(e);return r}function bT(n,e){const t=[];return RT(n,e,t),t.sort((r,i)=>r.order-i.order),t}function RT(n,e,t){const r=Ei(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);su(e,i=>{RT(n,i,t)})}function uu(n,e){const t=Ei(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,Ep(e,t.length>0?t:void 0)}su(e,r=>{uu(n,r)})}function Sp(n,e){const t=La(AT(n,e)),r=iu(n.transactionQueueTree_,e);return V0(r,i=>{ch(n,i)}),ch(n,r),mT(r,i=>{ch(n,i)}),t}function ch(n,e){const t=Ei(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(V(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(V(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(tr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ep(e,void 0):t.length=s+1,Mt(n.eventQueue_,La(e),i);for(let o=0;o<r.length;o++)Cs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function oL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${t}' in query '${n}'`)}return e}const ld=function(n,e){const t=aL(n),r=t.namespace;t.domain==="firebase.com"&&mn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||_O();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new DE(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new ue(t.pathString)}},aL=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(i=sL(n.substring(d,f)));const m=oL(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const R=e.indexOf(".");r=e.substring(0,R).toLowerCase(),t=e.substring(R+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",cL=function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=iy.charAt(t%64),t=Math.floor(t/64);V(t===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=iy.charAt(e[i]);return V(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class CT{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lL=class{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Et;return J0(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){qt("OnDisconnect.remove",this._path);const e=new Et;return ry(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){qt("OnDisconnect.set",this._path),_n("OnDisconnect.set",e,this._path,!1);const t=new Et;return ry(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){qt("OnDisconnect.setWithPriority",this._path),_n("OnDisconnect.setWithPriority",e,this._path,!1),Tp("OnDisconnect.setWithPriority",t);const r=new Et;return X0(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){qt("OnDisconnect.update",this._path),gT("OnDisconnect.update",e,this._path);const t=new Et;return Z0(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return ee(this._path)?null:Zf(this._path)}get ref(){return new $t(this._repo,this._path)}get _queryIdentifier(){const e=jg(this._queryParams),t=Qf(e);return t==="{}"?"default":t}get _queryObject(){return jg(this._queryParams)}isEqual(e){if(e=j(e),!(e instanceof Pt))return!1;const t=this._repo===e._repo,r=ep(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZO(this._path)}}function hu(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function kr(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===un){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==vr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==On)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===_e){if(e!=null&&!la(e)||t!=null&&!la(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(V(n.getIndex()instanceof rp||n.getIndex()===ip,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function du(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class $t extends Pt{constructor(e,t){super(e,t,new Jl,!1)}get parent(){const e=qE(this._path);return e===null?null:new $t(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let fu=class ud{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ue(e),r=di(this.ref,e);return new ud(this._node.getChild(t),r,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ud(i,di(this.ref,r),_e)))}hasChild(e){const t=new ue(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function PT(n,e){return n=j(n),n._checkNotDeleted("ref"),e!==void 0?di(n._root,e):n._root}function sy(n,e){n=j(n),n._checkNotDeleted("refFromURL");const t=ld(e,n._repo.repoInfo_.nodeAdmin);yT("refFromURL",t);const r=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&r.host!==n._repo.repoInfo_.host&&mn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+n._repo.repoInfo_.host+")"),PT(n,t.path.toString())}function di(n,e){return n=j(n),Z(n._path)===null?q0("child","path",e):ua("child","path",e),new $t(n._repo,Ee(n._path,e))}function uL(n,e){n=j(n),qt("push",n._path),_n("push",e,n._path,!0);const t=ET(n._repo),r=cL(t),i=di(n,r),s=di(n,r);let o;return e!=null?o=Pp(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hL(n){return qt("remove",n._path),Pp(n,null)}function Pp(n,e){n=j(n),qt("set",n._path),_n("set",e,n._path,!1);const t=new Et;return bp(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function dL(n,e){n=j(n),qt("setPriority",n._path),Tp("setPriority",e);const t=new Et;return bp(n._repo,Ee(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function fL(n,e,t){if(qt("setWithPriority",n._path),_n("setWithPriority",e,n._path,!1),Tp("setWithPriority",t),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const r=new Et;return bp(n._repo,n._path,e,t,r.wrapCallback(()=>{})),r.promise}function pL(n,e){gT("update",e,n._path);const t=new Et;return Q0(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function mL(n){n=j(n);const e=new Cp(()=>{}),t=new Ba(e);return H0(n._repo,n,t).then(r=>new fu(r,new $t(n._repo,n._path),n._queryParams.getIndex()))}class Ba{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new ST("value",this,new fu(e.snapshotNode,new $t(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new CT(this,e,t):null}matches(e){return e instanceof Ba?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class pu{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new CT(this,e,t):null}createEvent(e,t){V(e.childName!=null,"Child events should have a childName.");const r=di(new $t(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ST(e.type,this,new fu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof pu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function qa(n,e,t,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=t,u=(d,f)=>{cd(n._repo,n,a),l(d,f)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new Cp(t,s||void 0),a=e==="value"?new Ba(o):new pu(e,o);return eL(n._repo,n,a),()=>cd(n._repo,n,a)}function hd(n,e,t,r){return qa(n,"value",e,t,r)}function oy(n,e,t,r){return qa(n,"child_added",e,t,r)}function ay(n,e,t,r){return qa(n,"child_changed",e,t,r)}function cy(n,e,t,r){return qa(n,"child_moved",e,t,r)}function ly(n,e,t,r){return qa(n,"child_removed",e,t,r)}function uy(n,e,t){let r=null;const i=t?new Cp(t):null;e==="value"?r=new Ba(i):e&&(r=new pu(e,i)),cd(n._repo,n,r)}class Jt{}class kT extends Jt{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){_n("endAt",this._value,e._path,!0);const t=Xh(e._queryParams,this._value,this._key);if(du(t),kr(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Pt(e._repo,e._path,t,e._orderByCalled)}}function _L(n,e){return Fa("endAt","key",e),new kT(n,e)}class gL extends Jt{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){_n("endBefore",this._value,e._path,!1);const t=bV(e._queryParams,this._value,this._key);if(du(t),kr(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Pt(e._repo,e._path,t,e._orderByCalled)}}function yL(n,e){return Fa("endBefore","key",e),new gL(n,e)}class NT extends Jt{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){_n("startAt",this._value,e._path,!0);const t=Jh(e._queryParams,this._value,this._key);if(du(t),kr(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Pt(e._repo,e._path,t,e._orderByCalled)}}function IL(n=null,e){return Fa("startAt","key",e),new NT(n,e)}class vL extends Jt{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){_n("startAfter",this._value,e._path,!1);const t=AV(e._queryParams,this._value,this._key);if(du(t),kr(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Pt(e._repo,e._path,t,e._orderByCalled)}}function wL(n,e){return Fa("startAfter","key",e),new vL(n,e)}class EL extends Jt{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Pt(e._repo,e._path,EV(e._queryParams,this._limit),e._orderByCalled)}}function TL(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new EL(n)}class AL extends Jt{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Pt(e._repo,e._path,TV(e._queryParams,this._limit),e._orderByCalled)}}function bL(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new AL(n)}class RL extends Jt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){hu(e,"orderByChild");const t=new ue(this._path);if(ee(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new rp(t),i=Xl(e._queryParams,r);return kr(i),new Pt(e._repo,e._path,i,!0)}}function SL(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ua("orderByChild","path",n),new RL(n)}class CL extends Jt{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){hu(e,"orderByKey");const t=Xl(e._queryParams,un);return kr(t),new Pt(e._repo,e._path,t,!0)}}function PL(){return new CL}class kL extends Jt{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){hu(e,"orderByPriority");const t=Xl(e._queryParams,_e);return kr(t),new Pt(e._repo,e._path,t,!0)}}function NL(){return new kL}class DL extends Jt{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){hu(e,"orderByValue");const t=Xl(e._queryParams,ip);return kr(t),new Pt(e._repo,e._path,t,!0)}}function xL(){return new DL}class OL extends Jt{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(_n("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new kT(this._value,this._key)._apply(new NT(this._value,this._key)._apply(e))}}function VL(n,e){return Fa("equalTo","key",e),new OL(n,e)}function zt(n,...e){let t=j(n);for(const r of e)t=r._apply(t);return t}f0($t);y0($t);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL="FIREBASE_DATABASE_EMULATOR_HOST",dd={};let ML=!1;function FL(n,e,t,r){n.repoInfo_=new DE(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function DT(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ld(s,i),a=o.repoInfo,l,u;typeof process<"u"&&bg&&(u=bg[LL]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=ld(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new zi(zi.OWNER):new SO(n.name,n.options,e);yT("Invalid Firebase Database URL",o),ee(o.path)||mn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=BL(a,n,d,new RO(n.name,t));return new qL(f,n)}function UL(n,e){const t=dd[e];(!t||t[n.key]!==n)&&mn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),TT(n),delete t[n.key]}function BL(n,e,t,r){let i=dd[e.name];i||(i={},dd[e.name]=i);let s=i[n.toURLString()];return s&&mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new G0(n,ML,t,r),i[n.toURLString()]=s,s}let qL=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(z0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $t(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mn("Cannot call "+e+" on a deleted database.")}};function xT(){us.IS_TRANSPORT_INITIALIZED&&ut("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function WL(){xT(),er.forceDisallow()}function jL(){xT(),Ft.forceDisallow(),er.forceAllow()}function $L(n,e,t,r={}){n=j(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&mn("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new zi(zi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ey(r.mockUserToken,n.app.options.projectId);s=new zi(o)}FL(i,e,t,s)}function GL(n){n=j(n),n._checkNotDeleted("goOffline"),TT(n._repo)}function zL(n){n=j(n),n._checkNotDeleted("goOnline"),tL(n._repo)}function KL(n,e){vE(n,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(n){_E(Vn),Pn(new Ct("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return DT(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Ot(Rg,Sg,n),Ot(Rg,Sg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL={".sv":"timestamp"};function YL(){return QL}function JL(n){return{".sv":{increment:n}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XL=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function ZL(n,e,t){var r;if(n=j(n),qt("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(r=t==null?void 0:t.applyLocally)!==null&&r!==void 0?r:!0,s=new Et,o=(l,u,d)=>{let f=null;l?s.reject(l):(f=new fu(d,new $t(n._repo,n._path),_e),s.resolve(new XL(u,f)))},a=hd(n,()=>{});return nL(n._repo,n._path,e,o,a,i),s.promise}Sn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Sn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};HL();const eM="@firebase/database-compat",tM="2.0.2";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=new _s("@firebase/database-compat"),OT=function(n){const e="FIREBASE WARNING: "+n;nM.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=function(n,e,t,r){if(t!==void 0&&typeof t!="boolean")throw new Error(St(n,e)+"must be a boolean.")},iM=function(n,e,t){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(St(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this._delegate=e}cancel(e){H("OnDisconnect.cancel",0,1,arguments.length),Ge("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),r=>e(r)),t}remove(e){H("OnDisconnect.remove",0,1,arguments.length),Ge("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),r=>e(r)),t}set(e,t){H("OnDisconnect.set",1,2,arguments.length),Ge("OnDisconnect.set","onComplete",t,!0);const r=this._delegate.set(e);return t&&r.then(()=>t(null),i=>t(i)),r}setWithPriority(e,t,r){H("OnDisconnect.setWithPriority",2,3,arguments.length),Ge("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,t);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,t){if(H("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,OT("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ge("OnDisconnect.update","onComplete",t,!0);const r=this._delegate.update(e);return t&&r.then(()=>t(null),i=>t(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return H("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this._database=e,this._delegate=t}val(){return H("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return H("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return H("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return H("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return H("DataSnapshot.child",0,1,arguments.length),e=String(e),ua("DataSnapshot.child","path",e),new lr(this._database,this._delegate.child(e))}hasChild(e){return H("DataSnapshot.hasChild",1,1,arguments.length),ua("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return H("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return H("DataSnapshot.forEach",1,1,arguments.length),Ge("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new lr(this._database,t)))}hasChildren(){return H("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return H("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return H("DataSnapshot.ref",0,0,arguments.length),new Dt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ze{constructor(e,t){this.database=e,this._delegate=t}on(e,t,r,i){var s;H("Query.on",2,4,arguments.length),Ge("Query.on","callback",t,!1);const o=Ze.getCancelAndContextArgs_("Query.on",r,i),a=(u,d)=>{t.call(o.context,new lr(this.database,u),d)};a.userCallback=t,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return hd(this._delegate,a,l),t;case"child_added":return oy(this._delegate,a,l),t;case"child_removed":return ly(this._delegate,a,l),t;case"child_changed":return ay(this._delegate,a,l),t;case"child_moved":return cy(this._delegate,a,l),t;default:throw new Error(St("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,r){if(H("Query.off",0,3,arguments.length),iM("Query.off",e),Ge("Query.off","callback",t,!0),Om("Query.off","context",r),t){const i=()=>{};i.userCallback=t,i.context=r,uy(this._delegate,e,i)}else uy(this._delegate,e)}get(){return mL(this._delegate).then(e=>new lr(this.database,e))}once(e,t,r,i){H("Query.once",1,4,arguments.length),Ge("Query.once","callback",t,!0);const s=Ze.getCancelAndContextArgs_("Query.once",r,i),o=new Et,a=(u,d)=>{const f=new lr(this.database,u);t&&t.call(s.context,f,d),o.resolve(f)};a.userCallback=t,a.context=s.context;const l=u=>{s.cancel&&s.cancel.call(s.context,u),o.reject(u)};switch(e){case"value":hd(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":oy(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":ly(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":ay(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":cy(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(St("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return H("Query.limitToFirst",1,1,arguments.length),new Ze(this.database,zt(this._delegate,TL(e)))}limitToLast(e){return H("Query.limitToLast",1,1,arguments.length),new Ze(this.database,zt(this._delegate,bL(e)))}orderByChild(e){return H("Query.orderByChild",1,1,arguments.length),new Ze(this.database,zt(this._delegate,SL(e)))}orderByKey(){return H("Query.orderByKey",0,0,arguments.length),new Ze(this.database,zt(this._delegate,PL()))}orderByPriority(){return H("Query.orderByPriority",0,0,arguments.length),new Ze(this.database,zt(this._delegate,NL()))}orderByValue(){return H("Query.orderByValue",0,0,arguments.length),new Ze(this.database,zt(this._delegate,xL()))}startAt(e=null,t){return H("Query.startAt",0,2,arguments.length),new Ze(this.database,zt(this._delegate,IL(e,t)))}startAfter(e=null,t){return H("Query.startAfter",0,2,arguments.length),new Ze(this.database,zt(this._delegate,wL(e,t)))}endAt(e=null,t){return H("Query.endAt",0,2,arguments.length),new Ze(this.database,zt(this._delegate,_L(e,t)))}endBefore(e=null,t){return H("Query.endBefore",0,2,arguments.length),new Ze(this.database,zt(this._delegate,yL(e,t)))}equalTo(e,t){return H("Query.equalTo",1,2,arguments.length),new Ze(this.database,zt(this._delegate,VL(e,t)))}toString(){return H("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return H("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(H("Query.isEqual",1,1,arguments.length),!(e instanceof Ze)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,r){const i={cancel:void 0,context:void 0};if(t&&r)i.cancel=t,Ge(e,"cancel",i.cancel,!0),i.context=r,Om(e,"context",i.context);else if(t)if(typeof t=="object"&&t!==null)i.context=t;else if(typeof t=="function")i.cancel=t;else throw new Error(St(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Dt(this.database,new $t(this._delegate._repo,this._delegate._path))}}class Dt extends Ze{constructor(e,t){super(e,new Pt(t._repo,t._path,new Jl,!1)),this.database=e,this._delegate=t}getKey(){return H("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return H("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Dt(this.database,di(this._delegate,e))}getParent(){H("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Dt(this.database,e):null}getRoot(){return H("Reference.root",0,0,arguments.length),new Dt(this.database,this._delegate.root)}set(e,t){H("Reference.set",1,2,arguments.length),Ge("Reference.set","onComplete",t,!0);const r=Pp(this._delegate,e);return t&&r.then(()=>t(null),i=>t(i)),r}update(e,t){if(H("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,OT("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}qt("Reference.update",this._delegate._path),Ge("Reference.update","onComplete",t,!0);const r=pL(this._delegate,e);return t&&r.then(()=>t(null),i=>t(i)),r}setWithPriority(e,t,r){H("Reference.setWithPriority",2,3,arguments.length),Ge("Reference.setWithPriority","onComplete",r,!0);const i=fL(this._delegate,e,t);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){H("Reference.remove",0,1,arguments.length),Ge("Reference.remove","onComplete",e,!0);const t=hL(this._delegate);return e&&t.then(()=>e(null),r=>e(r)),t}transaction(e,t,r){H("Reference.transaction",1,3,arguments.length),Ge("Reference.transaction","transactionUpdate",e,!1),Ge("Reference.transaction","onComplete",t,!0),rM("Reference.transaction","applyLocally",r);const i=ZL(this._delegate,e,{applyLocally:r}).then(s=>new oM(s.committed,new lr(this.database,s.snapshot)));return t&&i.then(s=>t(null,s.committed,s.snapshot),s=>t(s,!1,null)),i}setPriority(e,t){H("Reference.setPriority",1,2,arguments.length),Ge("Reference.setPriority","onComplete",t,!0);const r=dL(this._delegate,e);return t&&r.then(()=>t(null),i=>t(i)),r}push(e,t){H("Reference.push",0,2,arguments.length),Ge("Reference.push","onComplete",t,!0);const r=uL(this._delegate,e),i=r.then(o=>new Dt(this.database,o));t&&i.then(()=>t(null),o=>t(o));const s=new Dt(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return qt("Reference.onDisconnect",this._delegate._path),new sM(new lL(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:WL,forceLongPolling:jL}}useEmulator(e,t,r={}){$L(this._delegate,e,t,r)}ref(e){if(H("database.ref",0,1,arguments.length),e instanceof Dt){const t=sy(this._delegate,e.toString());return new Dt(this,t)}else{const t=PT(this._delegate,e);return new Dt(this,t)}}refFromURL(e){H("database.refFromURL",1,1,arguments.length);const r=sy(this._delegate,e);return new Dt(this,r)}goOffline(){return H("database.goOffline",0,0,arguments.length),GL(this._delegate)}goOnline(){return H("database.goOnline",0,0,arguments.length),zL(this._delegate)}}ha.ServerValue={TIMESTAMP:YL(),increment:n=>JL(n)};function aM({app:n,url:e,version:t,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){_E(t);const a=new Id("database-standalone"),l=new lh("auth-internal",a);l.setComponent(new Ct("auth-internal",()=>r,"PRIVATE"));let u;return i&&(u=new lh("app-check-internal",a),u.setComponent(new Ct("app-check-internal",()=>i,"PRIVATE"))),{instance:new ha(DT(n,l,u,e,o),n),namespace:s}}var cM=Object.freeze({__proto__:null,initStandalone:aM});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=ha.ServerValue;function uM(n){n.INTERNAL.registerComponent(new Ct("database-compat",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new ha(i,r)},"PUBLIC").setServiceProps({Reference:Dt,Query:Ze,Database:ha,DataSnapshot:lr,enableLogging:KL,INTERNAL:cM,ServerValue:lM}).setMultipleInstances(!0)),n.registerVersion(eM,tM)}uM(Ye);const hM={apiKey:"AIzaSyDMP2Wa-AjDhVWFP7xz9oPu-Pu3drwrBII",authDomain:"test-84100.firebaseapp.com",databaseURL:"https://test-84100-default-rtdb.firebaseio.com",projectId:"test-84100",storageBucket:"test-84100.appspot.com",messagingSenderId:"980740124352",appId:"1:980740124352:web:6b0c01febb553ad0230725"};Ye.initializeApp(hM);Ye.apps.length||Ye.initializeApp(firebaseConfig);Ye.database().ref();Ye.auth;Ye.database();Ye.firestore();const VT=hy("device",()=>{const n=document.querySelector(".chat-body"),e=()=>{/iPhone|iPad|Android/i.test(navigator.userAgent)&&n&&(n.style.maxHeight=window.innerHeight-207+"px")};return Ue(0),{navigatorDevice:e,crollTop:()=>{document.querySelector(".chat-body").scrollTo({top:44e3,behavior:"smooth"})}}}),dM=Ye.database().ref("/message/"),LT=hy("recorder",()=>{const n=Ue(null),e=()=>{let u={sampleBits:16,sampleRate:48e3,numChannels:1,compiling:!1};n.value=new IA(u)},t=Ue(!0),r=Ue(!1),i=()=>{t.value=!0,r.value=!0,n.value.start(),n.value.percentage=0,a.value.push(n.value),l()},s=()=>{t.value=!1,n.value.pausePlay()},o=()=>{n.value.play()},a=Ue([]),l=()=>{for(const u of a.value){console.log("voiceList.value",a.value),console.log(u.duration.toFixed(0));const d=u.getWAVBlob(),f=new Blob([d],{type:"audio/ogg; codecs=opus"}),m=window.URL.createObjectURL(f);console.log("audioURL",m),dM.push({userName:new Date().getTime(),type:"audio",url:m,timeStamp:new Date})}};return{initRecorder:e,isVolume:r,isStartRecorder:t,startRecorder:i,endRecorder:s,playRecorder:o}}),fM={ref:"chatBody",class:"chat-body"},pM={class:"chat-item"},mM={class:"message-name"},_M=["src"],gM=["src"],yM={key:2,class:"message-text"},IM={key:3,class:"message-text"},vM={class:"upload-img"},wM=["value"],EM=fd({__name:"ChatBody",props:{messages:{type:Object},isUpload:{type:Boolean},progress:{type:Number},userName:{type:String}},setup(n){Ye.database().ref("/message/");const e=LT(),{isVolume:t}=dy(e),{playRecorder:r}=e,i=VT(),{navigatorDevice:s,crollTop:o}=i;return pd(()=>{s(),o()}),yA(()=>{o()}),(a,l)=>(_t(),mt("div",fM,[Q("div",pM,[(_t(!0),mt(fy,null,py(n.messages,u=>(_t(),mt("div",{key:u.id,class:Do([{"is-selfuser":u.userName===n.userName},"message-box"])},[Q("div",mM,gc(u.userName),1),u.type==="sticker"?(_t(),mt("img",{key:0,src:u.url,class:"message-sticker"},null,8,_M)):co("",!0),u.type==="image"?(_t(),mt("img",{key:1,src:u.url,class:"message-image"},null,8,gM)):co("",!0),u.type==="text"?(_t(),mt("div",yM,gc(u.message),1)):co("",!0),u.type==="audio"?(_t(),mt("div",IM,[wn(Q("i",{onClick:l[0]||(l[0]=(...d)=>Kt(r)&&Kt(r)(...d)),class:"fa-solid fa-volume-high"},null,512),[[$r,Kt(t)]])])):co("",!0)],2))),128)),wn(Q("div",vM,[Q("progress",{class:"progress is-primary",value:n.progress,max:"100"},gc(n.progress),9,wM)],512),[[$r,n.isUpload]]),wn(Q("i",{onClick:l[1]||(l[1]=(...u)=>Kt(r)&&Kt(r)(...u)),class:"fa-solid fa-volume-high"},null,512),[[$r,Kt(t)]])])],512))}}),TM=""+new URL("icon-upload-img-BvV6Awr7.png",import.meta.url).href,AM=""+new URL("icon-smile-27_Zoy-S.png",import.meta.url).href,bM=""+new URL("icon-send-C6CD8CjG.png",import.meta.url).href,RM={class:"chat-footer"},SM={class:"footer"},CM={class:"content"},PM={class:"level is-mobile"},kM={class:"level-left"},NM={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},DM={class:"dropdown-content"},xM={class:"columns is-mobile is-multiline"},OM=["src","onClick"],VM={class:"level-item user-message"},LM={class:"level-right"},MM={class:"level-right"},FM=fd({__name:"ChatFooter",props:{userName:{type:String}},emits:["sendOnFileChange"],setup(n,{emit:e}){const t=Ye.database().ref("/message/"),r=n,i=LT(),{isStartRecorder:s}=dy(i),{initRecorder:o,startRecorder:a,endRecorder:l,playRecorder:u}=i,d=Ue(""),f=Ue(!1);Ue("");const m=P=>{if(P.shiftKey||P.keyCode===229)return!1;if(d.value.length<=1&&d.value.trim()=="")return P.preventDefault(),!1;let L={userName:r.userName,type:"text",message:d.value,timeStamp:new Date};t.push(L),d.value="",P.preventDefault()},y=P=>{t.push({userName:r.userName,type:"sticker",url:"https://portfolio-gamma-puce-70.vercel.app/img/sticker-"+P+".png",timeStamp:new Date}),f.value=!1},R=e,N=P=>{const L=P.target.files[0];console.log(P.target.files[0]);const B=P.target.files[0].name;console.log(B),R("sendOnFileChange",{progress:0,isUpload:!0}),Ye.storage().ref(B).put(L)};return pd(()=>{if(!navigator.mediaDevices){alert("您的劉覽器不支持獲取用戶設備");return}if(!window.MediaRecorder){alert("您的劉覽器不支持錄音");return}o()}),(P,L)=>(_t(),mt("div",RM,[Q("footer",SM,[Q("div",CM,[Q("nav",PM,[Q("div",kM,[Q("img",{class:Do(["level-item icon-uploadImg",{}]),style:{display:"none"},src:TM,onClick:L[0]||(L[0]=B=>P.$refs.uploadImg.click())}),Q("input",{class:"uploadInput",style:{display:"none"},type:"file",ref:"uploadImg",onChange:L[1]||(L[1]=B=>N(B)),accept:"image/jpeg,image/jpg,image/png"},null,544),Q("div",{class:Do(["dropdown is-up",{"is-active":f.value}])},[Q("div",{class:"dropdown-trigger",onClick:L[2]||(L[2]=B=>f.value=!f.value),onBlur:L[3]||(L[3]=B=>f.value=!1)},L[9]||(L[9]=[Q("img",{class:"level-item icon-sticker",src:AM,"aria-haspopup":"true","aria-controls":"dropdown-menu"},null,-1)]),32),Q("div",NM,[Q("div",DM,[Q("div",xM,[(_t(),mt(fy,null,py(9,B=>Q("div",{key:B,class:"column is-one-third-desktop is-half-mobile"},[Q("img",{src:"https://portfolio-gamma-puce-70.vercel.app/img/sticker-"+B+".png",class:"dropdown-item sticker-item",onClick:W=>y(B)},null,8,OM)])),64))])])])],2)]),Q("div",VM,[wn(Q("textarea",{class:"textarea","onUpdate:modelValue":L[4]||(L[4]=B=>d.value=B),onKeypress:L[5]||(L[5]=_y(B=>m(B),["enter"])),rows:"1"},null,544),[[my,d.value,void 0,{trim:!0}]])]),Q("div",LM,[Q("img",{class:"level-item icon-submit",src:bM,onClick:L[6]||(L[6]=B=>m(B))})]),Q("div",MM,[Kt(s)?(_t(),mt("i",{key:0,onClick:L[7]||(L[7]=(...B)=>Kt(a)&&Kt(a)(...B)),class:"fa-solid fa-microphone"})):(_t(),mt("i",{key:1,onClick:L[8]||(L[8]=(...B)=>Kt(l)&&Kt(l)(...B)),class:"fa-solid fa-microphone-slash"}))])])])]),L[10]||(L[10]=Q("div",null,"lara Design",-1))]))}}),UM={class:"chatroom"},BM={class:"container"},qM={class:"modal is-active"},WM={class:"modal-content"},jM={class:"field"},$M={class:"field"},GM={class:"chatbox"},zM={class:"chat-header"},KM={class:"notice"},HM={class:"notice-text"},_F=fd({__name:"Home",setup(n){const e=Ye.database().ref("/message/"),t=VT(),{crollTop:r}=t,i=Ue(!0),s=Ue(""),o=Ue([]),a=Ue(!1),l=Ue(0),u=J=>{if(J.shiftKey||J.keyCode===229)return!1;if(s.value.length<=1&&s.value.trim()=="")return J.preventDefault(),!1;r(),i.value=!1},d=J=>{l.value=J.progress,a.value=J.isUpload},f=()=>{e.on("value",function(J){o.value=J.val()})},m=Ue(!1),y=Ue(!1),R=Ue(!1),N=Ue(!1),P=Ue("width:600px;height:600px"),L=()=>{m.value?(m.value=!1,y.value=!1,R.value=!1,B()):(m.value=!0,te())},B=()=>{W.value.srcObject.getTracks().forEach(z=>{z.stop(),m.value=!1}),W.value.srcObject=null},W=Ue(null),te=async()=>{N.value=!0;const J={audio:!0,video:!0};await navigator.mediaDevices.getUserMedia(J).then(z=>{N.value=!1,W.value.srcObject=z,console.log("MediaStream",z),console.log("video.value.srcObject",W.value.srcObject),screen.width===820?P.value="width:100%;height:auto":(screen.width===414||screen.width<414)&&(P.value="width:80vw;height:auto")}).catch(z=>{console.log("error",z),N.value=!1,alert("檢查是否有攝影機設備或瀏覽器不支持。")})};return pd(()=>{f()}),(J,z)=>(_t(),mt("div",UM,[Q("div",BM,[wn(Q("div",qM,[z[4]||(z[4]=Q("div",{class:"modal-background"},null,-1)),Q("div",WM,[z[3]||(z[3]=Q("h1",null,"輸入姓名",-1)),Q("div",jM,[wn(Q("input",{class:"input",type:"text","onUpdate:modelValue":z[0]||(z[0]=w=>s.value=w),onKeydown:z[1]||(z[1]=_y(w=>u(w),["enter"]))},null,544),[[my,s.value,void 0,{trim:!0}]])]),Q("div",$M,[Q("button",{class:"button",onClick:z[2]||(z[2]=w=>u(w))},"送出")])])],512),[[$r,i.value]]),m.value?wn((_t(),mt("div",{key:0,class:Do(["camera-box",{flash:R.value}])},[Q("div",{class:Do(["camera-shutter",{flash:R.value}])},null,2),wn(Q("video",{ref_key:"video",ref:W,style:km(P.value),autoplay:""},null,4),[[$r,!y.value]]),wn(Q("canvas",{id:"photoTaken",ref:"canvas",style:km(P.value)},null,4),[[$r,y.value]])],2)),[[$r,!N.value]]):co("",!0),Q("div",GM,[Q("div",zM,[z[5]||(z[5]=Q("nav",{class:"level is-mobile"},[Q("div",{class:"level-center"},[Q("div",{class:"level-item"},[Q("h1",null,"Chatroom")])])],-1)),Q("div",KM,[Q("div",HM,[Q("h1",null,gc(s.value),1)]),m.value?(_t(),mt("i",{key:1,onClick:B,class:"fa-solid fa-video-slash"})):(_t(),mt("i",{key:0,onClick:L,class:"fa-solid fa-video"}))])]),Nm(EM,{messages:o.value,isUpload:a.value,progress:l.value,userName:s.value},null,8,["messages","isUpload","progress","userName"]),Nm(FM,{userName:s.value,onSendOnFileChange:d},null,8,["userName"])])])]))}});export{_F as default};
