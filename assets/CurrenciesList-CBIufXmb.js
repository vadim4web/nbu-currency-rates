import{_ as m,e as i,c as u,a as r,t as o,b,k as l,F as $,l as f,d as h,i as k,u as N,f as g}from"./index-B4VvJLx3.js";const v=e=>e.toISOString().split("T")[0].replace(/-/g,""),P=e=>{const n=new Date(e.exchangedate.split(".").reverse().join("-"));return`${v(n)}_${e.cc}`},_={key:0,class:"PaginatorElement"},x=["disabled"],E=["disabled"],S={__name:"PaginatorElement",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0}},emits:["update:currentPage"],setup(e){return(n,c)=>e.totalPages>1?(i(),u("div",_,[r("button",{disabled:e.currentPage===1,onClick:c[0]||(c[0]=d=>n.$emit("update:currentPage",e.currentPage-1))}," ⇤ Попередня ",8,x),r("span",null,"Сторінка "+o(e.currentPage)+" з "+o(e.totalPages),1),r("button",{disabled:e.currentPage===e.totalPages,onClick:c[1]||(c[1]=d=>n.$emit("update:currentPage",e.currentPage+1))}," Наступна ⇥ ",8,E)])):b("",!0)}},I=m(S,[["__scopeId","data-v-ee2797da"]]),O={class:"currencies-list"},q={key:0,class:"currency-items"},L=["data-attr-path","data-currency"],V={class:"currency-info"},A=["data-date"],B=["title"],F=["title"],R=["onClick"],T={key:1},D="currency_original",G={__name:"CurrenciesList",props:{currencies:{type:Array,required:!0},currentPage:{type:Number,required:!0},itemsPerPage:{type:Number,default:10}},emits:["update:currentPage"],setup(e){const n=l(()=>{const s=(e.currentPage-1)*e.itemsPerPage;return e.currencies.slice(s,s+e.itemsPerPage)}),c=l(()=>Math.ceil(e.currencies.length/e.itemsPerPage)),d=k(),y=s=>{localStorage.setItem(D,JSON.stringify(s));const a=P(s);d.push(`/edit/${a}`)};return(s,a)=>(i(),u("section",O,[n.value.length?(i(),u("ol",q,[(i(!0),u($,null,f(n.value,(t,p)=>(i(),u("li",{key:p,"data-attr-path":N(P)(t),"data-currency":JSON.stringify(t)},[r("span",V,[r("strong",{class:"currency-code","data-date":t.exchangedate},o(t.cc),9,A),a[1]||(a[1]=g(" | ")),r("span",{class:"currency-name",title:t.txt},o(t.txt),9,B),a[2]||(a[2]=g(" | ")),r("span",{class:"currency-rate",title:t.rate},o(t.rate.toFixed(4)),9,F)]),r("button",{class:"btn edit",title:"Змінити",onClick:J=>y(t)}," 📝 ",8,R)],8,L))),128))])):(i(),u("p",T,"Завантаження даних...")),h(I,{"current-page":e.currentPage,"total-pages":c.value,"onUpdate:currentPage":a[0]||(a[0]=t=>s.$emit("update:currentPage",t))},null,8,["current-page","total-pages"])]))}},w=m(G,[["__scopeId","data-v-f25d8f74"]]);export{w as C,v as d};
