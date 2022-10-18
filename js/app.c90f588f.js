(function(t){function e(e){for(var a,o,l=e[0],c=e[1],s=e[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);v&&v(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8bb7a2b2"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(t);var s=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var v=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-main",[n("div",{attrs:{id:"router"}},[n("router-view")],1)]),n("v-footer",{staticClass:"font-weight-medium",attrs:{padless:""}},[n("v-col",{staticClass:"text-center",staticStyle:{"font-size":"14px"},attrs:{cols:"12"}},[t._v(" © 2019 - "+t._s((new Date).getFullYear())+" Copyright "),n("a",{attrs:{href:"https://littlechin.tw"}},[t._v("littlechin.tw")]),t._v(". All rights reserved. ")])],1)],1)],1)},i=[],o={name:"App",components:{},data:function(){return{}}},l=o,c=(n("034f"),n("2877")),s=n("6544"),u=n.n(s),v=n("7496"),d=n("62ad"),f=n("553a"),p=n("f6c4"),h=Object(c["a"])(l,r,i,!1,null,null,null),m=h.exports;u()(h,{VApp:v["a"],VCol:d["a"],VFooter:f["a"],VMain:p["a"]});n("d3b7"),n("3ca3"),n("ddb0");var b=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"left-block"},[n("Intro")],1),n("div",{staticClass:"right-block"},[n("Experience"),n("Volunteer"),n("Works"),n("br")],1)])},g=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{staticClass:"mx-auto"},[n("v-card-text",[n("img",{staticStyle:{"border-radius":"20%"},attrs:{src:"https://www.gravatar.com/avatar/c87cbee0a4a96655bd7366b56be7a18a"}}),n("h1",[t._v("littlechin")]),n("br"),n("v-divider"),n("br"),n("h3",{staticStyle:{"text-align":"left"}},[t._v(" 我是"),n("strong",[t._v("小群")]),t._v("，是個攝影師與程式設計師。除了熱愛創造新事物，也喜歡在城市與程式間穿梭，希望讓更多人能夠看見世界，也可以讓更多人使用我所創造出的工具。 ")]),n("br"),n("v-divider"),n("br"),n("v-card",{attrs:{elevation:"0"}},t._l(t.links,(function(e){return n("v-btn",{key:e,attrs:{text:"",icon:"",target:"_blank",href:e.link}},[n("v-icon",[t._v("mdi-"+t._s(e.category))])],1)})),1)],1)],1)],1)},y=[],x={name:"Intro",components:{},data:function(){return{links:[{link:"https://www.linkedin.com/in/littlechin",category:"linkedin"},{link:"https://github.com/littlechintw",category:"github"},{link:"https://medium.com/@littlechintw",category:"alpha-m-box"},{link:"https://www.facebook.com/littlechinright",category:"facebook"},{link:"https://www.instagram.com/littlechintw",category:"instagram"},{link:"https://t.me/littlechin/",category:"send"},{link:"mailto:littlechintw+page@gmail.com",category:"email"}]}}},C=x,k=n("8336"),T=n("b0af"),V=n("99d9"),O=n("a523"),S=n("ce7e"),P=n("132d"),j=Object(c["a"])(C,w,y,!1,null,null,null),I=j.exports;u()(j,{VBtn:k["a"],VCard:T["a"],VCardText:V["a"],VContainer:O["a"],VDivider:S["a"],VIcon:P["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-text",{staticStyle:{"text-align":"left","line-height":"30px"}},[n("h1",[t._v("Experience")]),n("v-divider"),n("br"),n("v-timeline",{attrs:{reverse:t.reverse,dense:""}},t._l(t.experience_list,(function(e){return n("v-timeline-item",{key:e,attrs:{"fill-dot":"",small:"",color:t.activeColor(e.active)}},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h5"},[t._v(t._s(e.title))]),n("v-card-text",[t._v(" "+t._s(e.date)+" ")])],1)],1)})),1)],1)],1)],1)},N=[],E={name:"Intro",components:{},data:function(){return{experience_list:[{title:"HP Inc. - Software Testing Intern",date:"2022/07 ~ 2023/07",active:!0},{title:"行政院公共數位創新空間 PDIS Ray 5.0 見習生",date:"2021/07 ~ 2021/08",active:!1},{title:"110 年 行政院國家資通安全網路攻防演練 攻擊手",date:"2021",active:!1},{title:"第21屆 國立臺北大學 三峽校區學生會 NTPU Student Union 資訊部部長",date:"2020/07 ~ 2021/06",active:!1},{title:"109 年 行政院國家資通安全網路攻防演練 攻擊手",date:"2020",active:!1},{title:"第20屆 國立臺北大學 三峽校區學生會 NTPU Student Union 資訊部副部長",date:"2019/07 ~ 2020/06",active:!1},{title:"Google DSC NTPU Lead 2019-2020",date:"2019/07 ~ 2020/06",active:!1},{title:"南一中小工具 作者",date:"2019 ~ Now",active:!0},{title:"第五屆臺南一中機器人社 教學長",date:"2017/08 ~ 2018/06",active:!1}]}},methods:{activeColor:function(t){return t?"#4DBB3B":"#D3D3D3"}}},U=E,B=n("8414"),A=n("1e06"),$=Object(c["a"])(U,D,N,!1,null,null,null),H=$.exports;u()($,{VCard:T["a"],VCardText:V["a"],VCardTitle:V["b"],VContainer:O["a"],VDivider:S["a"],VTimeline:B["a"],VTimelineItem:A["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-text",{staticStyle:{"text-align":"left","line-height":"30px"}},[n("h1",[t._v("Volunteer")]),n("v-divider"),n("br"),n("v-timeline",{attrs:{reverse:t.reverse,dense:""}},t._l(t.volunteer_list,(function(e){return n("v-timeline-item",{key:e,attrs:{"fill-dot":"",small:"",color:t.activeColor(e.active)}},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h5"},[t._v(t._s(e.title))]),n("v-card-text",[t._v(" "+t._s(e.date)+" ")])],1)],1)})),1)],1)],1)],1)},L=[],W={name:"Intro",components:{},data:function(){return{volunteer_list:[{title:"SITCON 2022 紀錄組 組長",date:"2021/12 ~ 2022/09",active:!1},{title:"HITCON 2022 攝影組 組員",date:"2022/05 ~ 2022/08",active:!1},{title:"COSCUP 2022 紀錄組 組員",date:"2022/03 ~ 2022/08",active:!1},{title:"HITCON 2021 平面攝影組 組員",date:"2021/05 ~ 2021/11",active:!1},{title:"COSCUP 2021 紀錄組 組員",date:"2021/03 ~ 2021/07",active:!1},{title:"SITCON 2021 攝影組 組員",date:"2020/11 ~ 2021/09",active:!1},{title:"SITCON 2020 場務組 組員",date:"2019/10 ~ 2020/08",active:!1}]}},methods:{activeColor:function(t){return t?"#4DBB3B":"#D3D3D3"}}},F=W,G=Object(c["a"])(F,M,L,!1,null,null,null),J=G.exports;u()(G,{VCard:T["a"],VCardText:V["a"],VCardTitle:V["b"],VContainer:O["a"],VDivider:S["a"],VTimeline:B["a"],VTimelineItem:A["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-text",{staticStyle:{"text-align":"left","line-height":"30px"}},[n("h1",[t._v("Works")]),n("v-divider"),n("br"),t._l(t.works_list,(function(e){return n("a",{key:e,attrs:{target:"_blank",href:e.href}},[t._v(" "+t._s(e.title)+" "),n("br")])}))],2)],1)],1)},z=[],R={name:"Intro",components:{},data:function(){return{works_list:[{title:"Short Text Tool",href:"https://s.littlechin.tw/"},{title:"NTPU 課程試排",href:"https://ntpu-timetable.littlechin.tw/"},{title:"NTPU Notifications (Telegram Channel)",href:"https://t.me/ntpu_notifications"},{title:"NTPU Tool",href:"https://ntpu-tool.netlify.app/"},{title:"NTPU All Star Game 2020",href:"https://allstar.ntpu.org/"},{title:"我的作品集",href:"https://littlechin.tw/My_Project_Box"}]}}},Y=R,K=Object(c["a"])(Y,q,z,!1,null,null,null),Q=K.exports;u()(K,{VCard:T["a"],VCardText:V["a"],VContainer:O["a"],VDivider:S["a"]});var X={name:"Home",components:{Intro:I,Experience:H,Volunteer:J,Works:Q},data:function(){return{}}},Z=X,tt=(n("cccb"),Object(c["a"])(Z,_,g,!1,null,null,null)),et=tt.exports;a["a"].use(b["a"]);var nt=[{path:"/",name:"Home",component:et},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],at=new b["a"]({mode:"history",base:"/",routes:nt}),rt=at,it=n("2f62");a["a"].use(it["a"]);var ot=new it["a"].Store({state:{},mutations:{},actions:{},modules:{}}),lt=n("f309");a["a"].use(lt["a"]);var ct=new lt["a"]({}),st=n("a584");a["a"].config.productionTip=!1;var ut=new b["a"]({routes:[{name:"Home",path:"/"}]});a["a"].use(st["a"],{config:{id:"UA-128753148-1"}},ut),new a["a"]({router:rt,store:ot,vuetify:ct,render:function(t){return t(m)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.c90f588f.js.map