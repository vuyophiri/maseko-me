(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308,798],{1156:function(e,i,n){Promise.resolve().then(n.t.bind(n,2972,23)),Promise.resolve().then(n.bind(n,9295)),Promise.resolve().then(n.bind(n,1288)),Promise.resolve().then(n.bind(n,1214)),Promise.resolve().then(n.bind(n,9818)),Promise.resolve().then(n.bind(n,1844)),Promise.resolve().then(n.bind(n,1522)),Promise.resolve().then(n.bind(n,6066)),Promise.resolve().then(n.bind(n,4766)),Promise.resolve().then(n.bind(n,5312)),Promise.resolve().then(n.bind(n,5472)),Promise.resolve().then(n.bind(n,124)),Promise.resolve().then(n.bind(n,2477)),Promise.resolve().then(n.bind(n,2092)),Promise.resolve().then(n.bind(n,3283)),Promise.resolve().then(n.bind(n,6709)),Promise.resolve().then(n.bind(n,4330)),Promise.resolve().then(n.bind(n,6356)),Promise.resolve().then(n.bind(n,8829)),Promise.resolve().then(n.bind(n,8047)),Promise.resolve().then(n.bind(n,287)),Promise.resolve().then(n.bind(n,7547)),Promise.resolve().then(n.bind(n,7457)),Promise.resolve().then(n.bind(n,1e3)),Promise.resolve().then(n.bind(n,6749)),Promise.resolve().then(n.bind(n,3404)),Promise.resolve().then(n.bind(n,1009)),Promise.resolve().then(n.bind(n,2258)),Promise.resolve().then(n.bind(n,1162)),Promise.resolve().then(n.bind(n,911)),Promise.resolve().then(n.bind(n,5094)),Promise.resolve().then(n.bind(n,9316)),Promise.resolve().then(n.bind(n,7550)),Promise.resolve().then(n.bind(n,1177)),Promise.resolve().then(n.bind(n,7868)),Promise.resolve().then(n.bind(n,3580)),Promise.resolve().then(n.bind(n,404)),Promise.resolve().then(n.bind(n,5022)),Promise.resolve().then(n.bind(n,9678)),Promise.resolve().then(n.bind(n,5234)),Promise.resolve().then(n.bind(n,9978)),Promise.resolve().then(n.bind(n,3500)),Promise.resolve().then(n.bind(n,7451)),Promise.resolve().then(n.bind(n,8932)),Promise.resolve().then(n.bind(n,5156)),Promise.resolve().then(n.bind(n,6204)),Promise.resolve().then(n.bind(n,435)),Promise.resolve().then(n.bind(n,8663)),Promise.resolve().then(n.bind(n,4630)),Promise.resolve().then(n.bind(n,7330)),Promise.resolve().then(n.bind(n,5731)),Promise.resolve().then(n.bind(n,8780)),Promise.resolve().then(n.bind(n,1467)),Promise.resolve().then(n.bind(n,9511)),Promise.resolve().then(n.bind(n,5995)),Promise.resolve().then(n.bind(n,3088)),Promise.resolve().then(n.bind(n,18)),Promise.resolve().then(n.bind(n,6983)),Promise.resolve().then(n.bind(n,8651)),Promise.resolve().then(n.bind(n,6948)),Promise.resolve().then(n.bind(n,2060)),Promise.resolve().then(n.bind(n,6694)),Promise.resolve().then(n.bind(n,2644)),Promise.resolve().then(n.bind(n,9909)),Promise.resolve().then(n.bind(n,197)),Promise.resolve().then(n.bind(n,6995)),Promise.resolve().then(n.bind(n,3714)),Promise.resolve().then(n.bind(n,6537)),Promise.resolve().then(n.bind(n,2796)),Promise.resolve().then(n.bind(n,2468)),Promise.resolve().then(n.bind(n,9889))},1522:function(e,i,n){"use strict";n.d(i,{default:function(){return t}});var o=n(2265),r=n(9376);function t(){let e=(0,r.useRouter)();return(0,o.useEffect)(()=>{let e=window.location.hash;if(e){let i=e.replace("#",""),n=document.getElementById(i);n&&n.scrollIntoView({behavior:"smooth"})}},[e]),null}},9889:function(e,i,n){"use strict";n.d(i,{CodeBlock:function(){return c}});var o=n(7437),r=n(2265);n(5336);var t=n(5404),s=n.n(t),l=n(4007),d=n(1747),h=n.n(d);n(159),n(4473),n(6650),n(7257),n(3180);var a=n(6760),m=n.n(a);let c=e=>{let{highlight:i,codeHeight:n,fillHeight:t,previewPadding:d="l",codeInstances:a=[],codePreview:c,copyButton:v=!0,styleButton:b=!1,reloadButton:P=!1,fullscreenButton:u=!1,compact:f=!1,className:p,style:g,onInstanceChange:x,...y}=e,k=(0,r.useRef)(null),C=(0,r.useRef)(null),[j,_]=(0,r.useState)(0),[w,z]=(0,r.useState)(!1),{code:B,language:N,label:E}=a[j]||{code:"",language:"",label:"Select code"};(0,r.useEffect)(()=>{k.current&&a.length>0&&h().highlightAll()},[B,a.length]),(0,r.useEffect)(()=>(w?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[w]);let[I,R]=(0,r.useState)("clipboard"),X=()=>{a.length>0&&B&&navigator.clipboard.writeText("string"==typeof B?B:B.content).then(()=>{R("check"),setTimeout(()=>{R("clipboard")},5e3)}).catch(e=>{console.error("Failed to copy code: ",e)})},[S,H]=(0,r.useState)(0),T=e=>{let i=a.findIndex(i=>i.label===e);-1!==i&&_(i)};return(0,o.jsxs)(l.kC,{position:w?"fixed":"relative",zIndex:0,background:"surface",radius:"l",overflow:"hidden",border:"neutral-medium",direction:"column",vertical:"center",fillWidth:!0,minHeight:3,className:m()(p,{[s().fullscreen]:w}),style:g,...y,children:[(a.length>1||v&&!f)&&(0,o.jsxs)(l.kC,{borderBottom:"neutral-medium",zIndex:2,fillWidth:!0,horizontal:"space-between",gap:"16",children:[a.length>1?(0,o.jsx)(l.Tt,{paddingX:"4",children:a.map((e,i)=>(0,o.jsx)(l.X2,{paddingY:"4",paddingRight:"2",children:(0,o.jsx)(l.zx,{className:"mr-2",weight:"default",size:"s",variant:j===i?"secondary":"tertiary",label:e.label,onClick:()=>{_(i),null==x||x(i),T(e.label)}})},i))}):(0,o.jsx)(l.X2,{paddingY:"12",paddingX:"16",textVariant:"label-default-s",onBackground:"neutral-strong",children:a[0].label}),!f&&(0,o.jsxs)(l.kC,{padding:"4",gap:"2",children:[P&&(0,o.jsx)(l.hU,{size:"m",tooltip:"Reload",tooltipPosition:"left",variant:"tertiary",onClick:()=>{H(e=>e+1)},icon:"refresh"}),u&&(0,o.jsx)(l.hU,{size:"m",tooltip:w?"Exit fullscreen":"Fullscreen",tooltipPosition:"left",variant:"tertiary",icon:w?"minimize":"maximize",onClick:()=>{z(e=>!e)}}),b&&(0,o.jsx)(l._w,{iconButtonProps:{size:"m",variant:"tertiary"}}),v&&(0,o.jsx)(l.hU,{size:"m",tooltip:"Copy",tooltipPosition:"left",variant:"tertiary",onClick:X,icon:I})]})]}),c&&(0,o.jsx)(l.kC,{position:"relative",padding:d,fillHeight:!0,horizontal:"center",overflowY:"auto",children:Array.isArray(c)?c.map((e,i)=>(0,o.jsx)(r.Fragment,{children:e},i)):c},S),a.length>0&&B&&(0,o.jsxs)(l.kC,{borderTop:!f&&c?"neutral-medium":void 0,fillWidth:!0,fillHeight:t,position:"relative",children:[(0,o.jsx)(l.kC,{overflowX:"auto",fillWidth:!0,children:(0,o.jsx)("pre",{style:{maxHeight:"".concat(n,"rem")},"data-line":i,ref:C,className:m()(s().pre,"language-".concat(N)),tabIndex:-1,children:(0,o.jsx)("code",{ref:k,className:m()(s().code,"language-".concat(N)),children:"string"==typeof B?B:B.content})})}),f&&v&&(0,o.jsx)(l.kC,{paddingX:"8",paddingY:"4",className:s().compactCopy,zIndex:1,children:(0,o.jsx)(l.hU,{tooltip:"Copy",tooltipPosition:"left","aria-label":"Copy code",onClick:X,icon:I,size:"m",variant:"tertiary"})})]})]})};c.displayName="CodeBlock"},5336:function(){},5404:function(e){e.exports={pre:"CodeBlock_pre__GI0hv",code:"CodeBlock_code__q_Rhr",fullscreen:"CodeBlock_fullscreen__5MqGv"}}},function(e){e.O(0,[271,546,665,240,516,464,835,7,854,971,117,744],function(){return e(e.s=1156)}),_N_E=e.O()}]);