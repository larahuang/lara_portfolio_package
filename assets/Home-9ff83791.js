import{d as V,r as u,a as v,s as b,o as l,c as t,b as e,F as p,e as i,t as c,u as _,w as k,v as w,n as x,f as $,g as P,h as y}from"./index-a2a7c22c.js";const B=V("web",()=>{const h=u([{name:"動物園教學網站",href:"https://zoo-eosin.vercel.app/",url:"https://lara-portfolio-all.vercel.app/img/web/web-zoo.png",notBook:[{name:"Vite fullcalendar安裝與事件",href:"https://blog-lara.vercel.app/2022/12/15/vitecalendar/"},{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"},{name:"Pinia Composition API",href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}]},{name:"享麵購物車",href:"https://portfolio-gamma-puce-70.vercel.app/noodle/#/index",url:"https://lara-portfolio-all.vercel.app/img/web/web-shop.png",notBook:[{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"},{name:"Vue Google Sheet Api",href:"https://blog-lara.vercel.app/2022/12/01/googlesheet/"},{name:"Pinia Composition API",href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}]},{name:"聊天室",href:"https://portfolio-gamma-puce-70.vercel.app/chatroom/#/",url:"https://lara-portfolio-all.vercel.app/img/web/web-chart.jpg",notBook:[{name:"Vue & Firebase Realtime",href:"https://blog-lara.vercel.app/2022/12/02/firebasevue/"}]},{name:"設備檢測",href:"https://portfolio-gamma-puce-70.vercel.app/device/#/",url:"https://lara-portfolio-all.vercel.app/img/web/web-develop.png"},{name:"智慧足部掃描系統",href:"https://system-footer.vercel.app",url:"https://lara-portfolio-all.vercel.app/img/web/web-footer.png"},{name:"發那科官網",href:"https://www.fanuctaiwan.com.tw",url:"https://lara-portfolio-all.vercel.app/img/web/web-fanuc.png",notBook:[{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"}]},{name:"Php購物網站",href:"https://www.kycfashions.com",url:"https://lara-portfolio-all.vercel.app/img/web/web-kyc.png"},{name:"保田久富官網",href:"https://jbtb.com.tw",url:"https://lara-portfolio-all.vercel.app/img/web/web-build.png"}]),s=u([{name:"Node MongoDB Evaluate Resful Api",img:"https://lara-portfolio-kappa.vercel.app/Mongod_white.png",url:"https://api-quiz-project.vercel.app/swagger/",web:"https://lara-portfolio-kappa.vercel.app/web-addend.png",weburl:"https://web-check-project.vercel.app",title:"Vite",notBook:[{name:"js定位與範圍",href:"https://blog-lara.vercel.app/2024/04/12/js_geollcation/"},{name:"Vite出勤系統",href:"https://blog-lara.vercel.app/2024/04/13/vite_work_check/"},{name:"Vite 分頁邏輯與搜尋功能(語法糖)",href:"https://blog-lara.vercel.app/2024/04/09/vite_pagination/"}]},{name:"Node MongoDB Evaluate Resful Api",img:"https://lara-portfolio-kappa.vercel.app/Mongod_white.png",url:"https://api-quiz-project.vercel.app/swagger/",web:"https://lara-portfolio-kappa.vercel.app/web-quiz.png",weburl:"https://quiz-web-lara.vercel.app",title:"Vite",notBook:[{name:"Node",href:"https://blog-lara.vercel.app/2022/12/02/node/"},{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"},{name:"Pinia Composition API",href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}]}]);return{webDesign:h,resfulApi:s}}),A={class:"web"},S=e("div",{class:"web_title"},"Web Design",-1),j={class:"web-content"},N={class:"in"},M=["href"],z=["src"],D={class:"name"},q=e("div",{class:"note_title"},"筆記本",-1),C={class:"notBook"},F=["href"],H=v({__name:"Web",setup(h){const s=B(),{webDesign:n}=b(s);return(m,d)=>(l(),t("div",A,[S,e("div",j,[e("ul",N,[(l(!0),t(p,null,i(_(n),(o,f)=>(l(),t("li",{key:f},[e("a",{href:o.href,target:"_blank"},[e("img",{src:o.url},null,8,z)],8,M),e("div",D,c(o.name),1),q,e("ul",C,[(l(!0),t(p,null,i(o.notBook,(g,a)=>(l(),t("li",{key:a},[e("a",{href:g.href,target:"_blank"},c(g.name),9,F)]))),128))])]))),128))])])]))}}),R={class:"restfulApi"},T=e("div",{class:"restful_title"},[e("b",null,"前後端分離")],-1),E={class:"restful-content"},I=["href"],W=["src"],J={class:"name"},L=["href"],Q={class:"webimg"},G=["src"],K={key:0,class:"skill_title"},O=e("div",{class:"not_title"},"筆記本",-1),U={key:1,class:"notBook"},X=["href"],Y=v({__name:"resfulApi",setup(h){const s=B(),{resfulApi:n}=b(s);return(m,d)=>(l(),t("div",R,[T,e("ul",E,[(l(!0),t(p,null,i(_(n),(o,f)=>{var g;return l(),t("li",{key:f},[e("a",{class:"box",href:o.url,target:"_blank"},[e("img",{src:o.img},null,8,W),e("div",J,c(o.name),1)],8,I),k(e("a",{href:o.weburl,target:"_blank"},[e("div",Q,[k(e("img",{class:x({hidden:o.web!=""}),src:o.web},null,10,G),[[w,o.web!=""]])])],8,L),[[w,o.weburl!=""]]),o.title!=""?(l(),t("div",K,"前端"+c(o.title),1)):$("",!0),O,((g=o.notBook)==null?void 0:g.length)!=0?(l(),t("div",U,[(l(!0),t(p,null,i(o.notBook,(a,r)=>(l(),t("div",{class:"list",key:r},[e("a",{href:a.href,target:"_blank"},c(a.name),9,X)]))),128))])):$("",!0)])}),128))])]))}}),Z=V("aboutme",()=>{const h=u(["通訊地址：台北市","銘傳大學商品設計學系畢","行動電話：0918 329245"]),s=u([{skill:"Vite",img:"https://lara-portfolio-all.vercel.app/img/skill/vite.png"},{skill:"Pinina",img:"https://lara-portfolio-all.vercel.app/img/skill/pinina.svg"},{skill:"Vue",img:"https://lara-portfolio-all.vercel.app/img/skill/vuelogo.png"},{skill:"Nuxt",img:"https://lara-portfolio-all.vercel.app/img/skill/nuxt.png"},{skill:"JavaScript",img:"https://lara-portfolio-all.vercel.app/img/skill/js.png"},{skill:"Jquery",img:"https://lara-portfolio-all.vercel.app/img/skill/jquery.png"},{skill:"TypeScript",img:"https://lara-portfolio-all.vercel.app/img/skill/Typescript.svg"},{skill:"Scss",img:"https://lara-portfolio-all.vercel.app/img/skill/scss.png"}]),n=u([{skill:"Node",img:"https://lara-portfolio-kappa.vercel.app/node_white.png"},{skill:"Firebase",img:"https://lara-portfolio-kappa.vercel.app/firebase_white.png"},{skill:"Mongodb",img:"https://lara-portfolio-kappa.vercel.app/Mongod_white.png"},{skill:"PHP",img:"https://lara-portfolio-kappa.vercel.app/PHP-logo.png"},{skill:"MySQl",img:"https://lara-portfolio-kappa.vercel.app/MySQL_white.png"}]),m=u([{url:"https://codepen.io/lara1105huang/pens/public",img:"https://lara-portfolio-all.vercel.app/img/tool/codepel-logo.png"},{url:"",img:"https://lara-portfolio-all.vercel.app/img/tool/git-logo.png"},{url:"",img:"https://lara-portfolio-all.vercel.app/img/tool/posman.png"},{url:"",img:"https://lara-portfolio-all.vercel.app/img/tool/vs-code-logo.png"}]);return{me:h,front_skill:s,back_skill:n,tools:m}}),ee={class:"about_me"},le={class:"about_me_ul"},te={class:"skill"},oe=e("div",null,[e("b",null,"前端技術")],-1),ae={class:"front_skill"},se=["src"],re=e("div",null,[e("b",null,"後端技術")],-1),pe={class:"back_skill"},ie=["src"],ne=e("div",null,[e("b",null,"工具")],-1),ce={class:"tool"},he=["href"],ge=["src"],ue=e("a",{class:"blog",href:"https://blog-lara.vercel.app/",target:"_blank"},"部落格筆記本",-1),me=v({__name:"Home",setup(h){const s=Z(),{me:n,front_skill:m,back_skill:d,tools:o}=b(s);return(f,g)=>(l(),t("div",null,[e("div",ee,[e("h1",null,[P("Hi! 我是黃瑄惠 "),e("ul",le,[(l(!0),t(p,null,i(_(n),(a,r)=>(l(),t("li",{key:r},[e("div",null,c(a),1)]))),128))])]),e("div",te,[oe,e("ul",ae,[(l(!0),t(p,null,i(_(m),(a,r)=>(l(),t("li",{key:r},[e("img",{src:a.img},null,8,se),e("div",null,c(a.skill),1)]))),128))]),re,e("ul",pe,[(l(!0),t(p,null,i(_(d),(a,r)=>(l(),t("li",{key:r},[e("img",{src:a.img},null,8,ie)]))),128))]),ne,e("ul",ce,[(l(!0),t(p,null,i(_(o),(a,r)=>(l(),t("li",{key:r},[e("a",{href:a.url},[e("img",{src:a.img},null,8,ge)],8,he)]))),128))]),ue])]),y(Y,{id:"shop"}),y(H,{id:"webdesign"})]))}});export{me as default};
