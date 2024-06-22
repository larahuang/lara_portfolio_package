import{d as B,r as u,a as v,s as b,o as l,c as t,b as e,F as i,e as p,t as c,u as _,w as k,v as w,n as x,f as $,g as A,h as y}from"./index-02aec7bb.js";const V=B("web",()=>{const h=u([{name:"動物園教學網站",href:"https://zoo-eosin.vercel.app/",url:"https://lara-portfolio-all.vercel.app/img/web/web-zoo.png",notBook:[{name:"Vite fullcalendar安裝與事件",href:"https://blog-lara.vercel.app/2022/12/15/vitecalendar/"},{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"},{name:"Pinia Composition API",href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}]},{name:"享麵購物車",href:"https://portfolio-gamma-puce-70.vercel.app/noodle/#/index",url:"https://lara-portfolio-all.vercel.app/img/web/web-shop.png",notBook:[{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"},{name:"Vue Google Sheet Api",href:"https://blog-lara.vercel.app/2022/12/01/googlesheet/"},{name:"Pinia Composition API",href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}]},{name:"聊天室",href:"https://portfolio-gamma-puce-70.vercel.app/chatroom/#/",url:"https://lara-portfolio-all.vercel.app/img/web/web-chart.jpg",notBook:[{name:"Vue & Firebase Realtime",href:"https://blog-lara.vercel.app/2022/12/02/firebasevue/"}]},{name:"設備檢測",href:"https://portfolio-gamma-puce-70.vercel.app/device/#/",url:"https://lara-portfolio-all.vercel.app/img/web/web-develop.png"},{name:"天氣Api響應式網站",href:"https://portfolio-gamma-puce-70.vercel.app/weather/#/",url:"https://lara-portfolio-all.vercel.app/img/web/web-weather.png",notBook:[{name:"Vue 天氣Api",href:"https://blog-lara.vercel.app/2022/12/01/weather/"}]},{name:"智慧足部掃描系統",href:"https://system-footer.vercel.app",url:"https://lara-portfolio-all.vercel.app/img/web/web-footer.png"},{name:"發那科官網",href:"https://www.fanuctaiwan.com.tw",url:"https://lara-portfolio-all.vercel.app/img/web/web-fanuc.png",notBook:[{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"}]},{name:"Php購物網站",href:"https://www.kycfashions.com",url:"https://lara-portfolio-all.vercel.app/img/web/web-kyc.png"}]),s=u([{name:"Node MongoDB Evaluate Resful Api",img:"https://lara-portfolio-all.vercel.app/img/skill/Mongodb.png",url:"https://api-quiz-project.vercel.app/swagger/",web:"https://i.imgur.com/liusfop.png",weburl:"https://quiz-web-lara.vercel.app",title:"Vite",notBook:[{name:"Node",href:"https://blog-lara.vercel.app/2022/12/02/node/"},{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"},{name:"Pinia Composition API",href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}]},{name:"Node MongoDB Games Cart Resful Api",img:"https://lara-portfolio-all.vercel.app/img/skill/Mongodb.png",url:"https://api-game-project.vercel.app/swagger/",web:"",weburl:"https://game-web-sage.vercel.app",title:"",notBook:[{name:"Node",href:"https://blog-lara.vercel.app/2022/12/02/node/"},{name:"Vite",href:"https://blog-lara.vercel.app/vue/index.html"},{name:"Pinia Composition API",href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}]}]);return{webDesign:h,resfulApi:s}}),N={class:"web"},P=e("div",{class:"web_title"},"Web Design",-1),S={class:"web-content"},C={class:"in"},D=["href"],M=["src"],j={class:"name"},z=e("div",{class:"note_title"},"筆記本",-1),R={class:"notBook"},q=["href"],F=v({__name:"Web",setup(h){const s=V(),{webDesign:n}=b(s);return(m,d)=>(l(),t("div",N,[P,e("div",S,[e("ul",C,[(l(!0),t(i,null,p(_(n),(o,f)=>(l(),t("li",{key:f},[e("a",{href:o.href,target:"_blank"},[e("img",{src:o.url},null,8,M)],8,D),e("div",j,c(o.name),1),z,e("ul",R,[(l(!0),t(i,null,p(o.notBook,(g,a)=>(l(),t("li",{key:a},[e("a",{href:g.href,target:"_blank"},c(g.name),9,q)]))),128))])]))),128))])])]))}}),I={class:"restfulApi"},T=e("div",{class:"restful_title"},[e("b",null,"ResfulApi")],-1),H={class:"restful-content"},W=["href"],E=["src"],G={class:"name"},J=["href"],L={class:"webimg"},K=["src"],O={key:0,class:"skill_title"},Q=e("div",{class:"not_title"},"筆記本",-1),U={key:1,class:"notBook"},X=["href"],Y=v({__name:"resfulApi",setup(h){const s=V(),{resfulApi:n}=b(s);return(m,d)=>(l(),t("div",I,[T,e("ul",H,[(l(!0),t(i,null,p(_(n),(o,f)=>{var g;return l(),t("li",{key:f},[e("a",{class:"box",href:o.url,target:"_blank"},[e("img",{src:o.img},null,8,E),e("div",G,c(o.name),1)],8,W),k(e("a",{href:o.weburl,target:"_blank"},[e("div",L,[k(e("img",{class:x({hidden:o.web!=""}),src:o.web},null,10,K),[[w,o.web!=""]])])],8,J),[[w,o.weburl!=""]]),o.title!=""?(l(),t("div",O,"前端"+c(o.title),1)):$("",!0),Q,((g=o.notBook)==null?void 0:g.length)!=0?(l(),t("div",U,[(l(!0),t(i,null,p(o.notBook,(a,r)=>(l(),t("div",{class:"list",key:r},[e("a",{href:a.href,target:"_blank"},c(a.name),9,X)]))),128))])):$("",!0)])}),128))])]))}}),Z=B("aboutme",()=>{const h=u(["通訊地址：台中市西區","銘傳大學商品設計學系畢","行動電話：0918 329245"]),s=u([{skill:"Vite",img:"https://lara-portfolio-all.vercel.app/img/skill/vite.png"},{skill:"Pinina",img:"https://lara-portfolio-all.vercel.app/img/skill/pinina.svg"},{skill:"Vue",img:"https://lara-portfolio-all.vercel.app/img/skill/vuelogo.png"},{skill:"Nuxt",img:"https://lara-portfolio-all.vercel.app/img/skill/nuxt.png"},{skill:"JavaScript",img:"https://lara-portfolio-all.vercel.app/img/skill/js.png"},{skill:"Jquery",img:"https://lara-portfolio-all.vercel.app/img/skill/jquery.png"},{skill:"TypeScript",img:"https://lara-portfolio-all.vercel.app/img/skill/Typescript.svg"},{skill:"Scss",img:"https://lara-portfolio-all.vercel.app/img/skill/scss.png"}]),n=u([{skill:"Node",img:"https://lara-portfolio-all.vercel.app/img/skill/node.png"},{skill:"Firebase",img:"https://lara-portfolio-all.vercel.app/img/skill/firebase.png"},{skill:"Mongodb",img:"https://lara-portfolio-all.vercel.app/img/skill/Mongodb.png"}]),m=u([{url:"https://codepen.io/lara1105huang/pens/public",img:"https://lara-portfolio-all.vercel.app/img/tool/codepel-logo.png"},{url:"",img:"https://lara-portfolio-all.vercel.app/img/tool/git-logo.png"},{url:"",img:"https://lara-portfolio-all.vercel.app/img/tool/posman.png"},{url:"",img:"https://lara-portfolio-all.vercel.app/img/tool/vs-code-logo.png"}]);return{me:h,front_skill:s,back_skill:n,tools:m}}),ee={class:"about_me"},le={class:"about_me_ul"},te={class:"skill"},oe=e("div",null,[e("b",null,"前端技術")],-1),ae={class:"front_skill"},se=["src"],re=e("div",null,[e("b",null,"後端技術")],-1),ie={class:"back_skill"},pe=["src"],ne=e("div",null,[e("b",null,"工具")],-1),ce={class:"tool"},he=["href"],ge=["src"],ue=e("a",{class:"blog",href:"https://blog-lara.vercel.app/",target:"_blank"},"部落格筆記本",-1),me=v({__name:"Home",setup(h){const s=Z(),{me:n,front_skill:m,back_skill:d,tools:o}=b(s);return(f,g)=>(l(),t("div",null,[e("div",ee,[e("h1",null,[A("Hi! 我是黃瑄惠 "),e("ul",le,[(l(!0),t(i,null,p(_(n),(a,r)=>(l(),t("li",{key:r},[e("div",null,c(a),1)]))),128))])]),e("div",te,[oe,e("ul",ae,[(l(!0),t(i,null,p(_(m),(a,r)=>(l(),t("li",{key:r},[e("img",{src:a.img},null,8,se),e("div",null,c(a.skill),1)]))),128))]),re,e("ul",ie,[(l(!0),t(i,null,p(_(d),(a,r)=>(l(),t("li",{key:r},[e("img",{src:a.img},null,8,pe)]))),128))]),ne,e("ul",ce,[(l(!0),t(i,null,p(_(o),(a,r)=>(l(),t("li",{key:r},[e("a",{href:a.url},[e("img",{src:a.img},null,8,ge)],8,he)]))),128))]),ue])]),y(Y,{id:"shop"}),y(F,{id:"webdesign"})]))}});export{me as default};
