import{C as f,d as g}from"./CurrenciesListComponent-x3XLPD_F.js";import{f as D}from"./api-IJBaJA8h.js";import{_ as S,r as a,o as w,c as x,a as u,f as _,d as I,e as C}from"./index-CPt_xg2Y.js";const l=c=>c.toISOString().split("T")[0],N=["max","value"],V=10,y={__name:"SearchView",setup(c){const r=a([]),p=a(null),s=a(1),o=a(l(new Date)),m=a(l(new Date)),i=async n=>{try{p.value=new Date(n);const e=g(p.value),t=localStorage.getItem(e);if(t)r.value=JSON.parse(t);else{const d=await D(e);r.value=d,localStorage.setItem(e,JSON.stringify(d))}s.value=1}catch(e){console.error("Помилка при завантаженні даних:",e)}},v=n=>{const e=new Date(n);o.value=l(e),i(e)};return w(()=>i(o.value)),(n,e)=>(C(),x("main",null,[e[3]||(e[3]=u("h2",null,"Офіційний курс гривні щодо іноземних валют 📅",-1)),u("p",null,[e[2]||(e[2]=_(" 🔍 пошук за датою: ")),u("input",{max:m.value,type:"date",value:o.value,onInput:e[0]||(e[0]=t=>v(t.target.value))},null,40,N)]),I(f,{currencies:r.value,"current-page":s.value,"items-per-page":V,"onUpdate:currentPage":e[1]||(e[1]=t=>s.value=t)},null,8,["currencies","current-page"])]))}},k=S(y,[["__scopeId","data-v-d48ecb50"]]);export{k as default};
