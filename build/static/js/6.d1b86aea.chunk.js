(this["webpackJsonpmon-portfolio-react"]=this["webpackJsonpmon-portfolio-react"]||[]).push([[6],{170:function(e,n,t){"use strict";t.r(n);var a,s,o,i,c,r,l,d,m=t(5),u=t(0),p=t.n(u),f=t(55),v=t(68),b=t(70),x=t(71),L=t(6),h=t(85),g=t.n(h),y=Object(L.c)(f.a.div)(a||(a=Object(m.a)(["\n  color: ",";\n  border: 2.5px solid ",";\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(2px);\n"])),(function(e){return e.theme.gray}),(function(e){return e.theme.gray})),E=t(163),k=Object(L.c)(E.a)(s||(s=Object(m.a)(["\n  background-color: "," !important;\n  text-transform: none !important;\n  color:  ",' !important;\n  font-family: "Maven Pro" !important;\n'])),(function(e){return e.theme.gray}),(function(e){return e.theme.white})),w=function(e){var n=e.topIcon,t=e.contactMean,a=e.contactRef,s=e.btnText,o=e.btnIcon,i=e.link,c=e.delay;return p.a.createElement(f.a.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0,transition:{duration:2,type:"spring",stiffness:150,delay:c}},exit:{opacity:0,y:50,transition:{duration:.09,delay:c}}},p.a.createElement(g.a,{id:"Tilt",style:{width:"100%"}},p.a.createElement(y,null,p.a.createElement("div",{className:"text-center fs-3"},p.a.createElement("i",{className:n})),p.a.createElement("div",{className:"text-center fs-5"},t),p.a.createElement("div",{className:"text-center fs-7 fw-bold"},a),p.a.createElement("div",{className:"text-center py-3"},p.a.createElement(k,{variant:"contained",size:"small",endIcon:p.a.createElement("i",{className:o}),target:"_blank",href:i},s)))))},j=[{id:1,topIcon:"fa-brands fa-whatsapp",contactMean:"Whatsapp",contactRef:"+225 0565100029",btnText:"Me joindre",btnIcon:"fa-duotone fa-comments-question-check",link:"https://api.whatsapp.com/send?phone=2250565100029&text=%5BBr%C3%A8ve+pr%C3%A9sentation+%2B+Objet+de+contact...%5D",delay:0},{id:2,topIcon:"fa-duotone fa-mailbox",contactMean:"E-mail",contactRef:"kevinkouakou113@gmail.com",btnText:"Me joindre",btnIcon:"fa-duotone fa-comments-question-check",link:"mailto:kevinkouakou113@gmail.com",delay:.25},{id:3,topIcon:"fa-brands fa-telegram",contactMean:"Telegram",contactRef:"@JUST_KEVIN_225",btnText:"Me joindre",btnIcon:"fa-duotone fa-comments-question-check",link:"https://t.me/JUST_KEVIN_225",delay:.5}],N=t(19),O=t(84),S=t.n(O),I=t(165),M=t(107),K=t(168),T=t(166),z=t(164),q=Object(L.c)(E.a)(o||(o=Object(m.a)(["\n  background-color: "," !important;\n  text-transform: none !important;\n  color: ",' !important;\n  font-family: "Maven Pro" !important;\n  z-index: 10 !important;\n  margin: 0 auto;\n'])),(function(e){return e.theme.gray}),(function(e){return e.theme.white})),P=Object(L.c)(I.a)(i||(i=Object(m.a)(["\n  background-color: "," !important;\n  text-transform: none !important;\n  color: ",' !important;\n  font-family: "Maven Pro" !important;\n  z-index: 100 !important;\n  margin: 0 auto;\n'])),(function(e){return e.theme.gray}),(function(e){return e.theme.white})),C=L.c.form(c||(c=Object(m.a)(["\n  position: relative;\n  width: 70%;\n  height: 61px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  justify-content: space-between;\n  .Typewriter {\n    display: inline-block !important;\n    span {\n      display: inline;\n    }\n  }\n  .d-Klex {\n    display: flex;\n    align-items: center;\n  }\n\n  .placeholdersContainer {\n    font-size: 0.85rem;\n    z-index: 2;\n    & > span {\n      position: absolute;\n      top: 30px;\n      left: 16.5px;\n      transition: all 0.2s ease-in-out;\n      background-color: transparent;\n      color: #212121;\n      border-radius: 3.5px;\n      margin: 0 3px;\n      width: 97%;\n      height: 30px;\n\n      justify-content: center;\n      cursor: text;\n      label {\n        cursor: text;\n        display: flex;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n      }\n    }\n    span:nth-of-type(3) {\n      height: 50px;\n      top: 23px;\n      left: 22px;\n    }\n    .movePlaceholder {\n      position: relative;\n      left: 0 !important;\n      top: 0 !important;\n      color: #fff;\n      display: inline;\n      background-color: #4d4c4c;\n      padding: 3px 13px;\n      font-size: 0.65rem;\n      &:hover {\n        background-color: #1a1a1a;\n      }\n      cursor: pointer;\n      label {\n        cursor: pointer;\n        display: inline;\n      }\n    }\n  }\n"]))),F=L.c.div.attrs((function(e){return e}))(r||(r=Object(m.a)(["\n  position: relative;\n  border-bottom: 1px solid ",';\n  display: flex;\n  align-items: center;\n  padding: 3px 0%;\n  &:after {\n    content: "";\n    position: absolute;\n    bottom: -1px;\n    height: 1.3px;\n    width: 100%;\n    box-shadow: 0 0 3px 0px ',";\n    background: ",";\n    z-index: 2;\n    transform-origin: center;\n    transform: scaleX(0);\n    animation: ",";\n    @keyframes animFocus {\n      0% {\n        transform: scaleX(0);\n      }\n      100% {\n        transform: scaleX(1);\n      }\n    }\n  }\n\n  input,\n  textarea {\n    position: relative;\n    border: none;\n    outline: none;\n    background: none;\n    margin-left: 6px;\n    resize: none;\n  }\n"])),(function(e){return e.theme.gray}),(function(e){return e.theme.gray}),(function(e){return e.theme.gray}),(function(e){return e.focus&&"animFocus ease-in-out 0.3s forwards"})),H=L.c.div(l||(l=Object(m.a)(["\n  #Snack {\n    position: absolute !important;\n    left: 50% !important;\n    top: 50% !important;\n    transform: translate(-50%, -50%) !important;\n  }\n"]))),_=function(){var e=Object(u.useRef)(),n=p.a.useState(!1),t=Object(N.a)(n,2),a=t[0],s=t[1],o=Object(u.useState)(!1),i=Object(N.a)(o,2),c=i[0],r=i[1],l=Object(u.useState)(!1),d=Object(N.a)(l,2),m=d[0],f=d[1],v=Object(u.useState)(!1),b=Object(N.a)(v,2),x=b[0],L=b[1],h=Object(u.useState)(!1),g=Object(N.a)(h,2),y=g[0],E=g[1],k=Object(u.useState)(!1),w=Object(N.a)(k,2),j=w[0],O=w[1],I=Object(u.useState)(!1),_=Object(N.a)(I,2),B=_[0],R=_[1],A=Object(u.forwardRef)((function(e,n){return p.a.createElement(T.a,Object.assign({elevation:6,ref:n,variant:"filled"},e))})),D=function(e,n){"clickaway"!==n&&s(!1)};return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".nameInput input"),n=document.querySelector(".emailInput input"),t=document.querySelector(".messageInput textarea");e.value="",n.value="",t.value=""})),Object(u.useEffect)((function(){var n=document.querySelector(".name"),t=document.querySelector(".nameInput"),a=document.querySelector(".nameInput input"),o=document.querySelector(".email"),i=document.querySelector(".emailInput"),c=document.querySelector(".emailInput input"),l=document.querySelector(".message"),d=document.querySelector(".messageInput"),m=document.querySelector("#FormK"),u=document.querySelector(".messageInput textarea"),p=document.querySelector("#formBtnNameToEmail"),v=document.querySelector("#formBtnEmailToMessage"),b=document.querySelector("#formBtnSubmit");a.addEventListener("focus",(function(){E(!0)})),c.addEventListener("focus",(function(){O(!0),i.classList.add("d-Klex"),i.classList.remove("d-none")})),u.addEventListener("focus",(function(){R(!0),d.classList.add("d-Klex"),d.classList.remove("d-none")})),a.addEventListener("blur",(function(){E(!1)})),c.addEventListener("blur",(function(){O(!1),i.classList.remove("d-none"),i.classList.remove("d-none")})),u.addEventListener("blur",(function(){R(!1),d.classList.remove("d-none"),d.classList.remove("d-none")})),p.addEventListener("click",(function(){n.classList.add("movePlaceholder"),/^[a-zA-Z ]{3,15}$/.test(a.value)?(n.classList.remove("bg-danger"),f(!0),o.classList.remove("d-none"),o.classList.add("d-inline"),t.classList.remove("d-Klex"),t.classList.add("d-none"),d.classList.remove("d-Klex"),d.classList.add("d-none"),i.classList.add("d-Klex"),i.classList.remove("d-none"),n.innerHTML="<i class='fa-duotone fa-user-hair'></i> <span class=\"mx-1\">".concat(a.value,"</span>"),p.classList.remove("d-inline-block"),p.classList.add("d-none"),v.classList.add("d-inline-block"),v.classList.remove("d-none")):(n.innerHTML="Donnez un nom correcte (3 - 15 caract\xe8res)...",n.classList.add("bg-danger"))})),v.addEventListener("click",(function(){o.classList.add("movePlaceholder"),/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(c.value)?(o.classList.remove("bg-danger"),L(!0),d.classList.add("d-Klex"),d.classList.remove("d-none"),l.classList.remove("d-none"),l.classList.add("d-inline"),t.classList.remove("d-Klex"),t.classList.add("d-none"),i.classList.remove("d-Klex"),i.classList.add("d-none"),o.innerHTML="<i class='fa-duotone fa-at'></i> <span class=\"mx-1\">".concat(c.value,"</span>"),v.classList.remove("d-inline-block"),v.classList.add("d-none"),b.classList.add("d-inline-block"),b.classList.remove("d-none")):(o.innerHTML="Format de l'adresse incorrecte...",o.classList.add("bg-danger"))})),b.addEventListener("click",(function(){l.classList.add("movePlaceholder"),/^[A-Za-z]$/.test(u.value)?(r(!0),b.classList.remove("d-none"),l.innerHTML="Merci de votre attention :)",l.classList.remove("bg-danger"),setTimeout((function(){alert("OK"),m.reset(),n.classList.remove("movePlaceholder"),n.classList.add("d-inline"),n.classList.remove("d-none"),o.classList.remove("movePlaceholder"),o.classList.remove("d-inline"),o.classList.add("d-none"),l.classList.remove("movePlaceholder"),l.classList.remove("d-inline"),l.classList.add("d-none"),n.innerHTML="Qui \xeates vous ?",o.innerHTML="Saisissez votre adresse mail...",l.innerHTML="Laissez moi un petit message...",t.classList.add("d-Klex"),t.classList.remove("d-none"),i.classList.remove("d-Klex"),i.classList.add("d-none"),d.classList.remove("d-Klex"),d.classList.add("d-none"),p.classList.remove("d-none"),p.classList.add("d-inline"),M.a.sendForm("service_3l9e0lh","template_8k9cm3t",e.current,"08NpTkuFM9KM8__vV").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),s(!0),r(!1)}),5e3)):(l.innerHTML="N'avez vous rien \xe0 dire :( ?",l.classList.add("bg-danger"))})),n.addEventListener("click",(function(){n.classList.add("movePlaceholder"),t.classList.add("d-Klex"),t.classList.remove("d-none"),d.classList.remove("d-Klex"),d.classList.add("d-none"),i.classList.remove("d-Klex"),i.classList.add("d-none"),o.classList.add("d-none"),o.classList.remove("d-inline"),l.classList.add("d-none"),l.classList.remove("d-inline"),p.classList.add("d-inline-block"),p.classList.remove("d-none"),v.classList.remove("d-inline-block"),v.classList.add("d-none"),b.classList.remove("d-inline-block"),b.classList.add("d-none")})),o.addEventListener("click",(function(){o.classList.add("movePlaceholder"),v.disabled=!1,l.classList.add("d-none"),l.classList.remove("d-inline"),i.classList.add("d-Klex"),i.classList.remove("d-none"),t.classList.remove("d-Klex"),t.classList.add("d-none"),d.classList.remove("d-Klex"),d.classList.add("d-none"),v.classList.add("d-inline-block"),v.classList.remove("d-none"),b.classList.remove("d-inline-block"),b.classList.add("d-none")})),l.addEventListener("click",(function(){l.innerHTML="<i class='fa-duotone fa-message-captions'></i> <span class='mx-1'>".concat(l.textContent,"</span>"),b.disabled=!1,l.classList.add("movePlaceholder"),d.classList.add("d-Klex"),d.classList.remove("d-none"),t.classList.remove("d-Klex"),i.classList.remove("d-Klex"),t.classList.add("d-none"),i.classList.add("d-none")}))}),[]),p.a.createElement(H,null,p.a.createElement(C,{id:"FormK",ref:e},p.a.createElement("div",{className:"placeholdersContainer"},p.a.createElement("span",{className:"name text-wrap"},p.a.createElement("label",{htmlFor:"name"},p.a.createElement(S.a,{options:{loop:!1,cursor:""},onInit:function(e){e.pauseFor(2e3).changeDelay(55).typeString("Qui \xeates vous ?").start()}}))),p.a.createElement("span",{className:"email d-none text-wrap"},p.a.createElement("label",{htmlFor:"email"},m&&p.a.createElement(S.a,{options:{loop:!1,cursor:""},onInit:function(e){e.changeDelay(50).typeString("Saisissez votre e-mail...").start()}}))),p.a.createElement("span",{className:"message d-none text-wrap"},p.a.createElement("label",{htmlFor:"message"},x&&p.a.createElement(S.a,{options:{loop:!1,cursor:""},onInit:function(e){e.changeDelay(50).typeString("Laissez moi un petit message :)").start()}})))),p.a.createElement(F,{focus:y,className:"nameInput"},p.a.createElement("i",{className:"fa-duotone fa-user-hair"}),p.a.createElement("input",{id:"name",name:"nom",type:"text",className:"w-100"})),p.a.createElement(F,{focus:j,className:"emailInput d-none"},p.a.createElement("i",{className:"fa-duotone fa-at"}),p.a.createElement("input",{id:"email",name:"email",type:"email",className:"w-100"})),p.a.createElement(F,{focus:B,className:"messageInput d-none"},p.a.createElement("i",{className:"fa-duotone fa-message-captions"}),p.a.createElement("textarea",{id:"message",name:"message",rows:2,className:"w-100"}))),p.a.createElement("div",{className:"text-center mt-4"},p.a.createElement(q,{id:"formBtnNameToEmail",variant:"contained",size:"small",endIcon:p.a.createElement("i",{className:"fa-duotone fa-person-to-portal"})},"Confirmer ",p.a.createElement("small",{className:"text-muted fs-8 mx-1"},"1/3")),p.a.createElement(q,{className:"d-none",id:"formBtnEmailToMessage",variant:"contained",size:"small",endIcon:p.a.createElement("i",{className:"fa-duotone fa-person-to-portal"})},"Confirmer ",p.a.createElement("small",{className:"text-muted fs-8 mx-1"},"2/3")),p.a.createElement(P,{loading:!!c,loadingPosition:"end",variant:"contained",size:"small",id:"formBtnSubmit",className:"d-none",endIcon:p.a.createElement("i",{className:"fa-duotone fa-paper-plane"})},c?"Un instant...":"Envoyer"," ",p.a.createElement("small",{className:"text-muted fs-8 mx-1"},"3/3"))),p.a.createElement(z.a,{onClose:D,open:a},p.a.createElement(K.a,{id:"Snack",style:{position:"absolute !important",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},open:a,onClose:D},p.a.createElement(A,{onClose:D,severity:"success",sx:{width:"100%"}},"Votre message a bien \xe9t\xe9 envoy\xe9 !"))))},B=Object(L.c)(f.a.div)(d||(d=Object(m.a)(["\n  width: 100vw;\n  height: 100vh;\n  .exit {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n"])));n.default=function(){return p.a.createElement(B,{variants:v.a,initial:"initial",animate:"animate",exit:"exit"},p.a.createElement(f.a.div,{initial:{x:"-50%"},animate:{x:0,transition:{duration:.3}},exit:{x:"-50%",transition:{duration:.3,ease:"easeInOut"}},className:"exit"},p.a.createElement(b.a,{width:"85px",x:"39%",y:"60%",duration:Object(x.a)(2,6)}),p.a.createElement(b.a,{width:"45px",x:"25%",y:"70%",duration:Object(x.a)(2,6)}),p.a.createElement(b.a,{width:"105px",x:"8%",y:"30%",duration:Object(x.a)(2,6)})),p.a.createElement(f.a.div,{initial:{x:"50%"},animate:{x:0,transition:{duration:.3}},exit:{x:"50%",transition:{duration:.3}},className:"exit"},p.a.createElement(b.a,{width:"50px",x:"75%",y:"75%",duration:Object(x.a)(2,6)}),p.a.createElement(b.a,{width:"90px",x:"60%",y:"15%",duration:Object(x.a)(2,6)}),p.a.createElement(b.a,{width:"70px",x:"88%",y:"35%",duration:Object(x.a)(2,6)})),p.a.createElement("div",{className:"container pt-4"},p.a.createElement("div",{className:"row justify-content-center"},p.a.createElement("div",{className:"col-10"},p.a.createElement(y,{initial:{scaleY:0},animate:{scaleY:1},exit:{scaleY:0,transition:{duration:.3}},transition:{type:"spring",duration:6.5,delay:.3,stiffness:200,bounce:.1},className:"p-3 pb-4"},p.a.createElement("h2",{className:"fw-bold"},"Contactez-moi"),p.a.createElement("div",{className:"fs-6 mb-2"},"Si vous voulez entrer en contact avec moi, pour me parlez d\u2019une collaboration, d'une embauche, ou pour simplement me dire bonjour, remplissez le magnifique formulaire ci-dessous ou joignez moi \xe0 l'aide d'une des m\xe9thodes plus bas."),p.a.createElement(_,null)))),p.a.createElement("div",{className:"row justify-content-center my-3"},p.a.createElement("div",{className:"col-10"},p.a.createElement(f.a.div,{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-3"},j.map((function(e){return p.a.createElement(w,{key:e.id,topIcon:e.topIcon,btnIcon:e.btnIcon,btnText:e.btnText,link:e.link,delay:e.delay,contactMean:e.contactMean,contactRef:e.contactRef})})))))))}},68:function(e,n,t){"use strict";n.a={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{opcaity:0,transition:{duration:.3,delay:.3}}}},70:function(e,n,t){"use strict";var a,s=t(5),o=t(0),i=t.n(o),c=t(55),r=t(6),l=Object(r.c)(c.a.div).attrs((function(e){return e}))(a||(a=Object(s.a)(["\n  position: absolute;\n  width: ",";\n  height: ",";\n  background: radial-gradient(\n    circle at bottom,\n    #b4b4b4,\n    ","\n  );\n  left: ",";\n  top: ",";\n  border-radius: 50%;\n"])),(function(e){return e.width}),(function(e){return e.width}),(function(e){return e.theme.black}),(function(e){return e.x}),(function(e){return e.y}));n.a=function(e){var n=e.width,t=e.x,a=e.y,s=e.duration;return i.a.createElement(l,{animate:{y:[0,-12,0]},transition:{repeat:1/0,duration:s,type:"spring",stiffness:100},width:n,x:t,y:a})}},71:function(e,n,t){"use strict";n.a=function(e,n){return Math.random()*(n-e+1)+e}}}]);
//# sourceMappingURL=6.d1b86aea.chunk.js.map