import{b as a,k as c}from"./index-cbbd8e58.js";const r=20,l={"Eugene Motovilov":"i/e.png","Aleksandr Novoselskiy":"i/a.png","Daria D":"i/d.png","Vsevolod Vietluzhskykh":"i/v.png"},p=[{icon:"🏆",title:"Champion",description:"For the 1st place by closed storypoints for the last 30 days"},{icon:"⚡️",title:"High Performer",description:`Storypoints > ${r} for the last 30 days`},{icon:"🌟",title:"Star Player",description:"Change > 20% from 30 to 30 days"},{title:"Team performance",description:"Completed storypoints closed by engineers divided by planned storypoints. Danger < 80%, warning < 90%, normal < 100%, success > 100%"}],y=(e,t)=>{const o=t.sort(a("last30SP"))[0].name===t[e].name,s=t[e].last30SP>r,n=t[e].result>20;return c({"🏆":o,"⚡️":s,"🌟":n})},m=e=>e.reduce(d("last30SP"),0),d=e=>(t,o)=>t+o[e],h=e=>m(e)/(r*e.length)*100,g=({result:e,name:t,last30SP:o,prev30SP:s},n,i)=>[{type:"avatar",name:t},{type:"name",name:t,archivments:y(n,i)},o,s,{type:"percent",value:e}],v=["","Name",{sorted:!0,name:"Last"},"Previous","Change"],u=e=>({th:v,rows:e.sort(a("last30SP")).map(g),persent:h(e),avatars:l,legend:p,id:"dev-team"});export{u as default,u as mapper};
