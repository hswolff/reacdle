import{c as M,p as N,j as v,r as g,R as E,a as j}from"./vendor.7d51b338.js";const G=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}};G();var m=["about","above","abuse","actor","acute","admit","adopt","adult","after","again","agent","agree","ahead","alarm","album","alert","alike","alive","allow","alone","along","alter","among","anger","Angle","angry","apart","apple","apply","arena","argue","arise","array","aside","asset","audio","audit","avoid","award","aware","badly","baker","bases","basic","basis","beach","began","begin","begun","being","below","bench","billy","birth","black","blame","blind","block","blood","board","boost","booth","bound","brain","brand","bread","break","breed","brief","bring","broad","broke","brown","build","built","buyer","cable","calif","carry","catch","cause","chain","chair","chart","chase","cheap","check","chest","chief","child","china","chose","civil","claim","class","clean","clear","click","clock","close","coach","coast","could","count","court","cover","craft","crash","cream","crime","cross","crowd","crown","curve","cycle","daily","dance","dated","dealt","death","debut","delay","depth","doing","doubt","dozen","draft","drama","drawn","dream","dress","drill","drink","drive","drove","dying","eager","early","earth","eight","elite","empty","enemy","enjoy","enter","entry","equal","error","event","every","exact","exist","extra","faith","false","fault","fiber","field","fifth","fifty","fight","final","first","fixed","flash","fleet","floor","fluid","focus","force","forth","forty","forum","found","frame","frank","fraud","fresh","front","fruit","fully","funny","giant","given","glass","globe","going","grace","grade","grand","grant","grass","great","green","gross","group","grown","guard","guess","guest","guide","happy","harry","heart","heavy","hence","henry","horse","hotel","house","human","ideal","image","index","inner","input","issue","japan","jimmy","joint","jones","judge","known","label","large","laser","later","laugh","layer","learn","lease","least","leave","legal","level","lewis","light","limit","links","lives","local","logic","loose","lower","lucky","lunch","lying","magic","major","maker","march","maria","match","maybe","mayor","meant","media","metal","might","minor","minus","mixed","model","money","month","moral","motor","mount","mouse","mouth","movie","music","needs","never","newly","night","noise","north","noted","novel","nurse","occur","ocean","offer","often","order","other","ought","paint","panel","paper","party","peace","peter","phase","phone","photo","piece","pilot","pitch","place","plain","plane","plant","plate","point","pound","power","press","price","pride","prime","print","prior","prize","proof","proud","prove","queen","quick","quiet","quite","radio","raise","range","rapid","ratio","reach","ready","refer","right","rival","river","robin","roger","roman","rough","round","route","royal","rural","scale","scene","scope","score","sense","serve","seven","shall","shape","share","sharp","sheet","shelf","shell","shift","shirt","shock","shoot","short","shown","sight","since","sixth","sixty","sized","skill","sleep","slide","small","smart","smile","smith","smoke","solid","solve","sorry","sound","south","space","spare","speak","speed","spend","spent","split","spoke","sport","staff","stage","stake","stand","start","state","steam","steel","stick","still","stock","stone","stood","store","storm","story","strip","stuck","study","stuff","style","sugar","suite","super","sweet","table","taken","taste","taxes","teach","teeth","terry","texas","thank","theft","their","theme","there","these","thick","thing","think","third","those","three","threw","throw","tight","times","tired","title","today","topic","total","touch","tough","tower","track","trade","train","treat","trend","trial","tried","tries","truck","truly","trust","truth","twice","under","undue","union","unity","until","upper","upset","urban","usage","usual","valid","value","video","virus","visit","vital","voice","waste","watch","water","wheel","where","which","while","white","whole","whose","woman","women","world","worry","worse","worst","worth","would","wound","write","wrong","wrote","yield","young","youth"],u;(function(r){r[r.Miss=0]="Miss",r[r.Present=1]="Present",r[r.Match=2]="Match"})(u||(u={}));function R(r,s){const a=[];if(r.length!==s.length)return a;const n=s.split(""),t=r.split(""),e={};return t.forEach((o,i)=>{const l=n[i];e[l]=e[l]?e[l]+1:1,l===o?a.push(2):n.includes(o)?a.push(1):a.push(0)}),a.forEach((o,i)=>{if(o!==1)return;const l=t[i];n.forEach((d,f)=>{d===l&&(a[f]===2&&(a[i]=0),e[l]<=0&&(a[i]=0))}),e[l]--}),a}function x(){return m[Math.floor(Math.random()*m.length)]}function O(r){return m.includes(r)}const b=6,p=5,y=M(N((r,s)=>{const a=n=>{const t=R(n,s().answer),e=s().rows.concat({guess:n,result:t}),o=t.every(l=>l===u.Match),i=s().keyboardLetterState;t.forEach((l,d)=>{const f=n[d];switch(i[f]){case u.Match:break;case u.Present:if(l===u.Miss)break;default:i[f]=l;break}}),r({rows:e,keyboardLetterState:i,gameState:o?"won":e.length===b?"lost":"playing"})};return{answer:x(),rows:[],gameState:"playing",keyboardLetterState:{},addGuess:a,newGame(n=[]){r({gameState:"playing",answer:x(),rows:[],keyboardLetterState:{}}),n.forEach(a)}}},{name:"reacdle",getStorage:()=>localStorage})),c=v.exports.jsx,S=v.exports.jsxs;function P({onClick:r}){const s=y(n=>n.keyboardLetterState),a=n=>{const{textContent:t,innerHTML:e}=n.currentTarget;let o=t;t!==e&&(o="Backspace"),r(o)};return c("div",{className:"flex flex-col",children:B.map((n,t)=>c("div",{className:"my-2 flex justify-center space-x-1",children:n.map((e,o)=>{let i="rounded font-bold uppercase flex-1 py-2";const l=A[s[e]];return l?i+=" text-white px-1 "+l:e!==""&&(i+=" bg-gray-400"),e===""?i+=" pointer-events-none":i+=" px-1",c("button",{onClick:a,className:i,children:e==="delete"?C:e},e+o)})},t))})}const A={[u.Miss]:"bg-gray-600",[u.Present]:"bg-yellow-500",[u.Match]:"bg-green-500"},B=[["q","w","e","r","t","y","u","i","o","p"],["","a","s","d","f","g","h","j","k","l",""],["Enter","z","x","c","v","b","n","m","Backspace"]],C=c("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:c("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"})});function L({word:r="",result:s=[],className:a=""}){const n=p-r.length,t=r.split("").concat(Array(n).fill(""));return c("div",{className:`grid grid-cols-5 gap-4 ${a}`,children:t.map((e,o)=>c(q,{value:e,state:s[o]},o))})}function q({value:r,state:s}){const a=s==null?"border-gray-500 text-black":`${W[s]} text-white`;return c("span",{className:`border-2 p-2 uppercase text-center font-extrabold text-4xl before:inline-block before:content-['_'] ${a} `,children:r})}const W={[u.Miss]:"border-gray-500 bg-gray-500",[u.Present]:"border-yellow-500 bg-yellow-500",[u.Match]:"border-green-500 bg-green-500"};function z(){const r=y(),[s,a,n]=T(),[t,e]=g.exports.useState(!1);g.exports.useEffect(()=>{let h;return t&&(h=setTimeout(()=>e(!1),1500)),()=>clearTimeout(h)},[t]);const o=y(h=>h.addGuess),i=K(s);g.exports.useEffect(()=>{s.length===0&&(i==null?void 0:i.length)===p&&(O(i)?(e(!1),o(i)):(e(!0),a(i)))},[s]);const l=r.gameState!=="playing";let d=[...r.rows],f=0;d.length<b&&(f=d.push({guess:s})-1);const w=b-d.length;return d=d.concat(Array(w).fill("")),S("div",{className:"mx-auto w-96 relative h-screen",children:[c("header",{className:"border-b border-gray-400 py-4",children:c("h1",{className:"text-3xl font-bold text-center uppercase",children:"Reacdle"})}),c("main",{className:"grid grid-rows-6 gap-4 my-4",children:d.map((h,k)=>c(L,{word:h.guess,result:h.result,className:t&&k===f?"animate-bounce":""},k))}),c(P,{onClick:h=>{n(h)}}),l&&S("div",{role:"modal",className:"absolute bg-white border border-gray-500 rounded text-center w-11/12 h-1/2 p-6 left-0 right-0 mx-auto top-1/4 grid grid-rows-4",children:[c("p",{children:"Game Over"}),c(L,{word:r.answer,className:"items-center justify-items-center"}),c("button",{className:"border border-green-500 rounded bg-green-500 p-2 mt-4 text-gray-800 shadow",onClick:()=>{r.newGame(),a("")},children:"New Game"})]})]})}function T(){const[r,s]=g.exports.useState(""),a=t=>{s(e=>{const o=t.length===1&&e.length!==p?e+t:e;switch(t){case"Backspace":return o.slice(0,-1);case"Enter":if(o.length===p)return""}return o.length===p,o})},n=t=>{let e=t.key;a(e)};return g.exports.useEffect(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}),[]),[r,s,a]}function K(r){const s=g.exports.useRef();return g.exports.useEffect(()=>{s.current=r},[r]),s.current}E.render(c(j.StrictMode,{children:c(z,{})}),document.getElementById("root"));
