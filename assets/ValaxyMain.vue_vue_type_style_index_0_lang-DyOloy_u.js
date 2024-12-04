import{_ as Xt}from"./YunComment.vue_vue_type_style_index_0_lang-Dl9aa_bW.js";import{I as te,k as Oe,ai as Te,D as he,a2 as j,aj as Gt,ak as De,al as Wt,am as Ge,an as We,ao as ce,ap as Zt,A as at,p as O,y as Kt,aq as rt,ar as Ze,d as ne,r as Jt,o as S,c as G,a as E,e as _,f as ge,w as pe,t as q,g as I,u as He,C as st,as as it,at as de,au as Qt,Q as L,L as Ae,aa as en,l as tn,h as nn,av as on,b as J,U as an,G as rn}from"./app-NMKJvu4A.js";import{_ as sn}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CGKxseVq.js";import{u as ln}from"./post-BAtG_4h6.js";function cn(){const e=te(),t=Oe();Te&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),he(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let s;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;s=o}else s=a;for(const l of Array.from(n))l.scrollHeight>s&&l.classList.add("folded")})}function dn(){if(Te){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,s=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!s)return;const l=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let i="";s.querySelectorAll("span.line:not(.diff.remove)").forEach(f=>i+=`${f.textContent||""}
`),i=i.slice(0,-1),l&&(i=i.replace(/^ *(\$|>) /gm,"").trim()),un(i).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const f=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,f)})}})}}async function un(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ue=function(t){return t.tagName==="IMG"},mn=function(t){return NodeList.prototype.isPrototypeOf(t)},me=function(t){return t&&t.nodeType===1},Ke=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Je=function(t){try{return Array.isArray(t)?t.filter(ue):mn(t)?[].slice.call(t).filter(ue):me(t)?[t].filter(ue):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(ue):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},fn=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},gn=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,s=n.width,l=n.height,i=t.cloneNode(),f=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,h=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=o+f+"px",i.style.left=a+h+"px",i.style.width=s+"px",i.style.height=l+"px",i.style.transform="",i},X=function(t,n){var o=P({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},pn=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(c){function d(){}c(d,d)},a=function(c){var d=c.target;if(d===ie){v();return}k.indexOf(d)!==-1&&D({target:d})},s=function(){if(!(F||!r.original)){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Ve-c)>g.scrollOffset&&setTimeout(v,150)}},l=function(c){var d=c.key||c.keyCode;(d==="Escape"||d==="Esc"||d===27)&&v()},i=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c;if(c.background&&(ie.style.background=c.background),c.container&&c.container instanceof Object&&(d.container=P({},g.container,c.container)),c.template){var p=me(c.template)?c.template:document.querySelector(c.template);d.template=p}return g=P({},g,d),k.forEach(function(b){b.dispatchEvent(X("medium-zoom:update",{detail:{zoom:w}}))}),w},f=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(P({},g,c))},h=function(){for(var c=arguments.length,d=Array(c),p=0;p<c;p++)d[p]=arguments[p];var b=d.reduce(function(u,z){return[].concat(u,Je(z))},[]);return b.filter(function(u){return k.indexOf(u)===-1}).forEach(function(u){k.push(u),u.classList.add("medium-zoom-image")}),se.forEach(function(u){var z=u.type,A=u.listener,V=u.options;b.forEach(function(H){H.addEventListener(z,A,V)})}),w},m=function(){for(var c=arguments.length,d=Array(c),p=0;p<c;p++)d[p]=arguments[p];r.zoomed&&v();var b=d.length>0?d.reduce(function(u,z){return[].concat(u,Je(z))},[]):k;return b.forEach(function(u){u.classList.remove("medium-zoom-image"),u.dispatchEvent(X("medium-zoom:detach",{detail:{zoom:w}}))}),k=k.filter(function(u){return b.indexOf(u)===-1}),w},re=function(c,d){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(b){b.addEventListener("medium-zoom:"+c,d,p)}),se.push({type:"medium-zoom:"+c,listener:d,options:p}),w},y=function(c,d){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(b){b.removeEventListener("medium-zoom:"+c,d,p)}),se=se.filter(function(b){return!(b.type==="medium-zoom:"+c&&b.listener.toString()===d.toString())}),w},x=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target,p=function(){var u={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},z=void 0,A=void 0;if(g.container)if(g.container instanceof Object)u=P({},u,g.container),z=u.width-u.left-u.right-g.margin*2,A=u.height-u.top-u.bottom-g.margin*2;else{var V=me(g.container)?g.container:document.querySelector(g.container),H=V.getBoundingClientRect(),Le=H.width,Ht=H.height,Nt=H.left,Rt=H.top;u=P({},u,{width:Le,height:Ht,left:Nt,top:Rt})}z=z||u.width-g.margin*2,A=A||u.height-g.margin*2;var K=r.zoomedHd||r.original,Yt=Ke(K)?z:K.naturalWidth||z,Pt=Ke(K)?A:K.naturalHeight||A,le=K.getBoundingClientRect(),jt=le.top,qt=le.left,Ce=le.width,ke=le.height,Ut=Math.min(Math.max(Ce,Yt),z)/Ce,Bt=Math.min(Math.max(ke,Pt),A)/ke,xe=Math.min(Ut,Bt),Ft=(-qt+(z-Ce)/2+g.margin+u.left)/xe,Vt=(-jt+(A-ke)/2+g.margin+u.top)/xe,Xe="scale("+xe+") translate3d("+Ft+"px, "+Vt+"px, 0)";r.zoomed.style.transform=Xe,r.zoomedHd&&(r.zoomedHd.style.transform=Xe)};return new o(function(b){if(d&&k.indexOf(d)===-1){b(w);return}var u=function Le(){F=!1,r.zoomed.removeEventListener("transitionend",Le),r.original.dispatchEvent(X("medium-zoom:opened",{detail:{zoom:w}})),b(w)};if(r.zoomed){b(w);return}if(d)r.original=d;else if(k.length>0){var z=k;r.original=z[0]}else{b(w);return}if(r.original.dispatchEvent(X("medium-zoom:open",{detail:{zoom:w}})),Ve=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,F=!0,r.zoomed=gn(r.original),document.body.appendChild(ie),g.template){var A=me(g.template)?g.template:document.querySelector(g.template);r.template=document.createElement("div"),r.template.appendChild(A.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",v),r.zoomed.addEventListener("transitionend",u),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(V),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,p()};var V=setInterval(function(){r.zoomedHd.complete&&(clearInterval(V),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",v),document.body.appendChild(r.zoomedHd),p())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var H=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",H),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",v),document.body.appendChild(r.zoomedHd),p()})}else p()})},v=function(){return new o(function(c){if(F||!r.original){c(w);return}var d=function p(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(ie),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),F=!1,r.zoomed.removeEventListener("transitionend",p),r.original.dispatchEvent(X("medium-zoom:closed",{detail:{zoom:w}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,c(w)};F=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(X("medium-zoom:close",{detail:{zoom:w}})),r.zoomed.addEventListener("transitionend",d)})},D=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target;return r.original?v():x({target:d})},Ee=function(){return g},$e=function(){return k},ze=function(){return r.original},k=[],se=[],F=!1,Ve=0,g=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?g=t:(t||typeof t=="string")&&h(t),g=P({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},g);var ie=fn(g.background);document.addEventListener("click",a),document.addEventListener("keyup",l),document.addEventListener("scroll",s),window.addEventListener("resize",v);var w={open:x,close:v,toggle:D,update:i,clone:f,attach:h,detach:m,on:re,off:y,getOptions:Ee,getImages:$e,getZoomedImage:ze};return w};function vn(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var hn=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";vn(hn);function bn(){const t=te().value.mediumZoom;he(()=>{t.enable&&pn(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function fe(e,t){const n=+j(e)-+j(t);return n<0?-1:n>0?1:n}function _n(e){return Gt(e,Date.now())}function yn(e,t,n){const[o,a]=De(n==null?void 0:n.in,e,t),s=o.getFullYear()-a.getFullYear(),l=o.getMonth()-a.getMonth();return s*12+l}function wn(e){return t=>{const o=(e?Math[e]:Math.trunc)(t);return o===0?0:o}}function lt(e,t){return+j(e)-+j(t)}function En(e,t){const n=j(e,t==null?void 0:t.in);return n.setHours(23,59,59,999),n}function $n(e,t){const n=j(e,t==null?void 0:t.in),o=n.getMonth();return n.setFullYear(n.getFullYear(),o+1,0),n.setHours(23,59,59,999),n}function zn(e,t){const n=j(e,t==null?void 0:t.in);return+En(n,t)==+$n(n,t)}function Ln(e,t,n){const[o,a,s]=De(n==null?void 0:n.in,e,e,t),l=fe(a,s),i=Math.abs(yn(a,s));if(i<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-l*i);let f=fe(a,s)===-l;zn(o)&&i===1&&fe(o,s)===1&&(f=!1);const h=l*(i-+f);return h===0?0:h}function Cn(e,t,n){const o=lt(e,t)/1e3;return wn(n==null?void 0:n.roundingMethod)(o)}function kn(e,t,n){const o=Zt(),a=(n==null?void 0:n.locale)??o.locale??Wt,s=2520,l=fe(e,t);if(isNaN(l))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:l}),[f,h]=De(n==null?void 0:n.in,...l>0?[t,e]:[e,t]),m=Cn(h,f),re=(Ge(h)-Ge(f))/1e3,y=Math.round((m-re)/60);let x;if(y<2)return n!=null&&n.includeSeconds?m<5?a.formatDistance("lessThanXSeconds",5,i):m<10?a.formatDistance("lessThanXSeconds",10,i):m<20?a.formatDistance("lessThanXSeconds",20,i):m<40?a.formatDistance("halfAMinute",0,i):m<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):y===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",y,i);if(y<45)return a.formatDistance("xMinutes",y,i);if(y<90)return a.formatDistance("aboutXHours",1,i);if(y<We){const v=Math.round(y/60);return a.formatDistance("aboutXHours",v,i)}else{if(y<s)return a.formatDistance("xDays",1,i);if(y<ce){const v=Math.round(y/We);return a.formatDistance("xDays",v,i)}else if(y<ce*2)return x=Math.round(y/ce),a.formatDistance("aboutXMonths",x,i)}if(x=Ln(h,f),x<12){const v=Math.round(y/ce);return a.formatDistance("xMonths",v,i)}else{const v=x%12,D=Math.trunc(x/12);return v<3?a.formatDistance("aboutXYears",D,i):v<9?a.formatDistance("overXYears",D,i):a.formatDistance("almostXYears",D+1,i)}}function xn(e,t){return kn(e,_n(e),t)}function ct(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,s=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(s-window.scrollY)>window.innerHeight?window.scrollTo(0,s):window.scrollTo({top:s,behavior:"smooth"})}}function An(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:s,hash:l,target:i}=n,f=window.location,h=s.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&i!=="_blank"&&o===f.protocol&&a===f.hostname&&!(h&&h[0]!==".html")&&s===f.pathname&&(t.preventDefault(),l&&l!==f.hash&&(await e.push({hash:decodeURIComponent(l)}),ct(n,l,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function In(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function Mn(e=document){e.querySelectorAll("table").forEach(t=>{var o;if((o=t.parentElement)!=null&&o.classList.contains("table-container"))return;const n=document.createElement("div");n.className="table-container",In(t,"table-container")})}function Sn(e){const t=at(),n=O(()=>t.path),o=Kt(),a=O(()=>{let i=-1;return o.postList.find((f,h)=>f.path===n.value?(i=h,!0):!1),i}),s=O(()=>a.value-1>=0?o.postList[a.value-1]:null),l=O(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[s,l]}function On(){const e=te(),t=O(()=>e.value.cdn.prefix);rt({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),Ze(`${t.value}aplayer/dist/APlayer.min.js`,()=>{Ze(`${t.value}meting@2/dist/Meting.min.js`)})}function Tn(){rt({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const Dn={class:"post-nav"},Hn={class:"post-nav-item"},Nn={class:"title truncate",text:"sm"},Rn={class:"post-nav-item"},Yn={class:"title truncate",text:"sm"},Pn=ne({__name:"YunPostNav",setup(e){const[t,n]=Sn();return(o,a)=>{const s=Jt("RouterLink");return S(),G("div",Dn,[E("div",Hn,[_(t)?(S(),ge(s,{key:0,class:"post-nav-prev",to:_(t).path||"",title:_(t).title},{default:pe(()=>[a[0]||(a[0]=E("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1)),E("span",Nn,q(_(t).title),1)]),_:1},8,["to","title"])):I("v-if",!0)]),E("div",Rn,[_(n)?(S(),ge(s,{key:0,to:_(n).path||"",title:_(n).title,class:"post-nav-next"},{default:pe(()=>[E("span",Yn,q(_(n).title),1),a[1]||(a[1]=E("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1))]),_:1},8,["to","title"])):I("v-if",!0)])])}}});function jn(){Te&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const s=o.querySelector(".blocks");if(!s)return;const l=Array.from(s.children).find(h=>h.classList.contains("active"));if(!l)return;const i=s.children[a];if(!i||l===i)return;l.classList.remove("active"),i.classList.add("active");const f=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);f==null||f.scrollIntoView({block:"nearest"})}})}const R=typeof window<"u",dt=R&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),ut=R&&window.devicePixelRatio>1,qn={elements_selector:".lazy",container:dt||R?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},mt=e=>Object.assign({},qn,e),Qe=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},Un=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)Qe(e,n);else Qe(e,t)},T="src",Ne="srcset",Re="sizes",ft="poster",oe="llOriginalAttrs",gt="data",Ye="loading",pt="loaded",vt="applied",Bn="entered",Pe="error",ht="native",bt="data-",_t="ll-status",C=(e,t)=>e.getAttribute(bt+t),Fn=(e,t,n)=>{const o=bt+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ae=e=>C(e,_t),B=(e,t)=>Fn(e,_t,t),be=e=>B(e,null),je=e=>ae(e)===null,Vn=e=>ae(e)===Ye,Xn=e=>ae(e)===Pe,qe=e=>ae(e)===ht,Gn=[Ye,pt,vt,Pe],Wn=e=>Gn.indexOf(ae(e))>=0,Y=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},Z=(e,t)=>{R&&t!==""&&e.classList.add(t)},M=(e,t)=>{R&&t!==""&&e.classList.remove(t)},Zn=e=>{e.llTempImage=document.createElement("IMG")},Kn=e=>{delete e.llTempImage},yt=e=>e.llTempImage,_e=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},Jn=e=>{e.disconnect()},Qn=(e,t,n)=>{t.unobserve_entered&&_e(e,n)},Ue=(e,t)=>{e&&(e.loadingCount+=t)},eo=e=>{e&&(e.toLoadCount-=1)},wt=(e,t)=>{e&&(e.toLoadCount=t)},to=e=>e.loadingCount>0,no=e=>e.toLoadCount>0,Et=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Be=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&Et(n).forEach(t)},$t=(e,t)=>{Et(e).forEach(t)},ye=[T],zt=[T,ft],ee=[T,Ne,Re],Lt=[gt],we=e=>!!e[oe],Ct=e=>e[oe],kt=e=>delete e[oe],W=(e,t)=>{if(we(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[oe]=n},oo=e=>{we(e)||(e[oe]={backgroundImage:e.style.backgroundImage})},U=(e,t)=>{if(!we(e))return;const n=Ct(e);t.forEach(o=>{((a,s,l)=>{l?a.setAttribute(s,l):a.removeAttribute(s)})(e,o,n[o])})},ao=e=>{if(!we(e))return;const t=Ct(e);e.style.backgroundImage=t.backgroundImage},xt=(e,t,n)=>{Z(e,t.class_applied),B(e,vt),n&&(t.unobserve_completed&&_e(e,t),Y(t.callback_applied,e,n))},At=(e,t,n)=>{Z(e,t.class_loading),B(e,Ye),n&&(Ue(n,1),Y(t.callback_loading,e,n))},N=(e,t,n)=>{n&&e.setAttribute(t,n)},et=(e,t)=>{N(e,Re,C(e,t.data_sizes)),N(e,Ne,C(e,t.data_srcset)),N(e,T,C(e,t.data_src))},ro=(e,t)=>{Be(e,n=>{W(n,ee),et(n,t)}),W(e,ee),et(e,t)},so=(e,t)=>{W(e,ye),N(e,T,C(e,t.data_src))},io=(e,t)=>{$t(e,n=>{W(n,ye),N(n,T,C(n,t.data_src))}),W(e,zt),N(e,ft,C(e,t.data_poster)),N(e,T,C(e,t.data_src)),e.load()},lo=(e,t)=>{W(e,Lt),N(e,gt,C(e,t.data_src))},co=(e,t,n)=>{const o=C(e,t.data_bg),a=C(e,t.data_bg_hidpi),s=ut&&a?a:o;s&&(e.style.backgroundImage=`url("${s}")`,yt(e).setAttribute(T,s),At(e,t,n))},uo=(e,t,n)=>{const o=C(e,t.data_bg_multi),a=C(e,t.data_bg_multi_hidpi),s=ut&&a?a:o;s&&(e.style.backgroundImage=s,xt(e,t,n))},mo=(e,t,n)=>{const o=C(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(s=>`image-set(${s})`);e.style.backgroundImage=a.join(),xt(e,t,n)},It={IMG:ro,IFRAME:so,VIDEO:io,OBJECT:lo},fo=(e,t)=>{const n=It[e.tagName];n&&n(e,t)},go=(e,t,n)=>{const o=It[e.tagName];o&&(o(e,t),At(e,t,n))},po=["IMG","IFRAME","VIDEO","OBJECT"],vo=e=>po.indexOf(e.tagName)>-1,Mt=(e,t)=>{!t||to(t)||no(t)||Y(e.callback_finish,t)},tt=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},ho=(e,t,n)=>{e.removeEventListener(t,n)},Fe=e=>!!e.llEvLisnrs,bo=(e,t,n)=>{Fe(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";tt(e,o,t),tt(e,"error",n)},Ie=e=>{if(!Fe(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];ho(e,n,o)}delete e.llEvLisnrs},St=(e,t,n)=>{Kn(e),Ue(n,-1),eo(n),M(e,t.class_loading),t.unobserve_completed&&_e(e,n)},_o=(e,t,n,o)=>{const a=qe(t);St(t,n,o),Z(t,n.class_loaded),B(t,pt),Y(n.callback_loaded,t,o),a||Mt(n,o)},yo=(e,t,n,o)=>{const a=qe(t);St(t,n,o),Z(t,n.class_error),B(t,Pe),Y(n.callback_error,t,o),n.restore_on_error&&U(t,ee),a||Mt(n,o)},Me=(e,t,n)=>{const o=yt(e)||e;Fe(o)||bo(o,a=>{_o(0,e,t,n),Ie(o)},a=>{yo(0,e,t,n),Ie(o)})},Se=(e,t,n)=>{vo(e)?((o,a,s)=>{Me(o,a,s),go(o,a,s)})(e,t,n):((o,a,s)=>{Zn(o),Me(o,a,s),oo(o),co(o,a,s),uo(o,a,s),mo(o,a,s)})(e,t,n)},wo=(e,t,n)=>{e.setAttribute("loading","lazy"),Me(e,t,n),fo(e,t),B(e,ht)},nt=e=>{e.removeAttribute(T),e.removeAttribute(Ne),e.removeAttribute(Re)},Eo=e=>{Be(e,t=>{nt(t)}),nt(e)},Ot=e=>{Be(e,t=>{U(t,ee)}),U(e,ee)},$o=e=>{$t(e,t=>{U(t,ye)}),U(e,zt),e.load()},zo=e=>{U(e,ye)},Lo=e=>{U(e,Lt)},Co={IMG:Ot,IFRAME:zo,VIDEO:$o,OBJECT:Lo},ko=(e,t)=>{(n=>{const o=Co[n.tagName];o?o(n):ao(n)})(e),((n,o)=>{je(n)||qe(n)||(M(n,o.class_entered),M(n,o.class_exited),M(n,o.class_applied),M(n,o.class_loading),M(n,o.class_loaded),M(n,o.class_error))})(e,t),be(e),kt(e)},xo=(e,t,n,o)=>{n.cancel_on_exit&&Vn(e)&&e.tagName==="IMG"&&(Ie(e),Eo(e),Ot(e),M(e,n.class_loading),Ue(o,-1),be(e),Y(n.callback_cancel,e,t,o))},Ao=(e,t,n,o)=>{const a=Wn(e);B(e,Bn),Z(e,n.class_entered),M(e,n.class_exited),Qn(e,n,o),Y(n.callback_enter,e,t,o),a||Se(e,n,o)},Io=(e,t,n,o)=>{je(e)||(Z(e,n.class_exited),xo(e,t,n,o),Y(n.callback_exit,e,t,o))},Mo=["IMG","IFRAME","VIDEO"],Tt=e=>e.use_native&&"loading"in HTMLImageElement.prototype,So=(e,t,n)=>{e.forEach(o=>{Mo.indexOf(o.tagName)!==-1&&wo(o,t,n)}),wt(n,0)},Oo=e=>e.isIntersecting||e.intersectionRatio>0,To=(e,t)=>{t.forEach(n=>{e.observe(n)})},Do=(e,t)=>{Jn(e),To(e,t)},Ho=(e,t)=>{Tt(e)||(t._observer=new IntersectionObserver(n=>{((o,a,s)=>{o.forEach(l=>Oo(l)?Ao(l.target,l,a,s):Io(l.target,l,a,s))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},Dt=e=>Array.prototype.slice.call(e),ve=e=>e.container.querySelectorAll(e.elements_selector),No=e=>Dt(e).filter(je),Ro=e=>Xn(e),Yo=e=>Dt(e).filter(Ro),ot=(e,t)=>No(e||ve(t)),Po=(e,t)=>{Yo(ve(e)).forEach(n=>{M(n,e.class_error),be(n)}),t.update()},jo=(e,t)=>{R&&(t._onlineHandler=()=>{Po(e,t)},window.addEventListener("online",t._onlineHandler))},qo=e=>{R&&window.removeEventListener("online",e._onlineHandler)},Q=function(e,t){const n=mt(e);this._settings=n,this.loadingCount=0,Ho(n,this),jo(n,this),this.update(t)};Q.prototype={update:function(e){const t=this._settings,n=ot(e,t);wt(this,n.length),dt?this.loadAll(n):Tt(t)?So(n,t,this):Do(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),qo(this),ve(this._settings).forEach(e=>{kt(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;ot(e,t).forEach(n=>{_e(n,this),Se(n,t,this)})},restoreAll:function(){const e=this._settings;ve(e).forEach(t=>{ko(t,e)})}},Q.load=(e,t)=>{const n=mt(t);Se(e,n)},Q.resetStatus=e=>{be(e)},R&&Un(Q,window.lazyLoadOptions);function Uo(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new Q({elements_selector:".lazy",...e})}function Bo(){const e=te();e.value.vanillaLazyload.enable&&he(()=>{Uo(e.value.vanillaLazyload)})}const Fo={key:0,text:"center"},Vo=["href"],Xo={m:"y-4",class:"end flex justify-center items-center"},Go={p:"x-4",font:"bold",class:"whitespace-nowrap"},Wo=ne({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=He(),o=st();return it(()=>{Mn(o.value)}),he(()=>{de()}),Qt(()=>{de()}),t.frontmatter.aplayer&&On(),t.frontmatter.codepen&&Tn(),dn(),jn(),cn(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&bn(),Bo(),(a,s)=>a.$slots.default?(S(),G("article",{key:0,class:Ae(a.frontmatter.markdownClass||"markdown-body")},[L(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:s[0]||(s[0]=(...l)=>_(de)&&_(de)(...l))}),a.frontmatter.url?(S(),G("div",Fo,[E("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},q(_(n)("post.view_link")),9,Vo)])):I("v-if",!0),a.frontmatter.end!==void 0?L(a.$slots,"end",{key:1},()=>[E("div",Xo,[s[1]||(s[1]=E("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1)),E("span",Go,q(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),s[2]||(s[2]=E("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1))])]):I("v-if",!0)],2)):I("v-if",!0)}}),Zo={key:0,class:"yun-time-warning",op:"80"},Ko=ne({__name:"YunMdTimeWarning",setup(e){const t=Oe(),{t:n,locale:o}=He(),a=O(()=>t.value.updated||t.value.date||new Date),s=st("");en(o,()=>{const i=xn(a.value,{addSuffix:!0});s.value=/^\d/.test(i)?` ${i}`:i},{immediate:!0});const l=O(()=>{const i=lt(new Date,a.value);return typeof t.value.time_warning=="number"?i>t.value.time_warning:t.value.time_warning});return(i,f)=>l.value?(S(),G("blockquote",Zo,q(_(n)("post.time_warning",{ago:s.value})),1)):I("v-if",!0)}}),Jo={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Qo={font:"black",flex:"","items-center":""},ea={op:"90","mt-1":""},ta=ne({__name:"YunAiExcerpt",setup(e){const t=Oe(),{t:n}=He();return(o,a)=>(S(),G("div",Jo,[E("div",Qo,[a[0]||(a[0]=E("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1)),E("div",null,q(_(n)("excerpt.ai")),1)]),E("div",ea,q(_(t).excerpt),1)]))}}),na={class:"yun-main lt-md:w-full",flex:"~ center"},oa={class:"mt-8 mb-4"},aa={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},ca=ne({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=te(),{styles:o,icon:a,color:s}=ln(t.frontmatter.type),l=tn(O(()=>t.frontmatter)),i=O(()=>t.frontmatter.aside!==!1),f=at(),h=nn();return on(()=>{f.hash&&setTimeout(()=>{ct(document.body,f.hash,{smooth:!0})},0)}),it(()=>{An(h)}),(m,re)=>{const y=sn,x=ta,v=Ko,D=Wo,Ee=rn,$e=Pn,ze=Xt;return S(),G("main",na,[L(m.$slots,"main",{},()=>[E("div",{class:Ae(["content w-full md:w-3xl lg:w-2xl xl:w-2xl 2xl:w-4xl",{"no-aside":!i.value}]),flex:"~ col grow",p:"lt-md:0"},[J(Ee,{cover:m.frontmatter.cover,m:"0",class:"relative",style:an(_(o))},{default:pe(()=>[E("div",oa,[L(m.$slots,"main-header",{},()=>[J(y,{title:_(l),icon:m.frontmatter.icon||_(a),color:m.frontmatter.color||_(s),cover:m.frontmatter.cover,"page-title-class":m.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])])]),L(m.$slots,"main-header-after"),E("div",aa,[L(m.$slots,"main-content",{},()=>[I(" <Transition appear> "),J(D,{frontmatter:m.frontmatter},{default:pe(()=>[m.frontmatter.excerpt_type==="ai"&&m.frontmatter.excerpt?(S(),ge(x,{key:0})):I("v-if",!0),J(v),L(m.$slots,"main-content-md"),L(m.$slots,"default")]),_:3},8,["frontmatter"]),I(" </Transition> ")]),L(m.$slots,"main-content-after")])]),_:3},8,["cover","style"]),L(m.$slots,"main-nav-before"),L(m.$slots,"main-nav",{},()=>[m.frontmatter.nav!==!1?(S(),ge($e,{key:0})):I("v-if",!0)]),L(m.$slots,"main-nav-after"),_(n).comment.enable&&m.frontmatter.comment!==!1?L(m.$slots,"comment",{key:0},()=>[J(ze,{class:Ae(m.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):I("v-if",!0),L(m.$slots,"main-footer-before"),L(m.$slots,"main-footer-after")],2)])])}}});export{ca as _};