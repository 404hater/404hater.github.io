(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[542],{4505:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kiosk/input/[productId]",function(){return e(2805)}])},6306:function(n,t,e){"use strict";var s=e(5893);e(7294);var i=e(4893),l=e.n(i),c=e(1163),a=e(8490),u=e(5457);let o=n=>{let{language:t}=n,e=(0,c.useRouter)(),i=(0,u.Q)();return(0,s.jsx)("div",{className:l().kioskBackButton,children:(0,s.jsx)("div",{className:"backButtonWrap",children:(0,s.jsx)("div",{className:"buttonDiv",children:(0,s.jsxs)("button",{className:"backButton",onClick(){i&&i.click&&i.click.play(),setTimeout(()=>{e.back()},300)},children:[(0,s.jsx)("i",{}),(0,s.jsx)("span",{children:a.RO.qH.Rw[t]})]})})})})};t.Z=o},2805:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return _}});var s=e(5893),i=e(7294),l=e(4984),c=e(5283),a=e.n(c),u=e(1163),o=e(6060),r=e(8490),d=e(6306),k=e(786),p=e(5457),v=e(3313);let x=[1,2,3,4,5,6,7,8,9,0],h=n=>{let{language:t}=n,{kioskInputStore:e}=(0,v.o)(),[l,c]=(0,i.useState)(""),h=(0,u.useRouter)(),j=n=>{c(t=>0===t.indexOf("01")?"".concat(t.slice(1,2)).concat(n):"".concat(t).concat(n))},m=()=>{c(l.slice(0,l.length-1))},N=n=>{n.length>0?o.vO.test(n)||c(n):c("")},_=(0,p.Q)();return(0,s.jsx)("div",{className:a().kioskInput,children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)(d.Z,{language:t}),(0,s.jsxs)("div",{className:"inputAreaWrap",children:[(0,s.jsx)("div",{className:"title",children:r.RO.qH.TN[t]}),(0,s.jsx)("div",{className:"guide",children:(0,k.Z)(r.RO.qH.YF[t],"kioskInputGuideText")}),(0,s.jsxs)("div",{className:"inputWrap",children:[(0,s.jsx)("input",{type:"text",placeholder:r.RO.qH.PB[t],value:l&&l.length>0?"+82 ".concat(l):"",onChange:n=>N(n.target.value),style:{pointerEvents:"none"}}),(0,s.jsx)("div",{className:"xButton",children:(0,s.jsx)("button",{onClick(){var n;null==_||null===(n=_.click)||void 0===n||n.play(),c("")},children:(0,s.jsx)("i",{className:"buttonX ".concat(l?"":"inActive")})})})]}),(0,s.jsx)("button",{className:"confirmButton ".concat(10===l.length?"active":""),disabled:10!==l.length,onClick(){var n;null==_||null===(n=_.confirm)||void 0===n||n.play(),e.sendMessage(h.query.productId.toString(),l).then()},children:(0,s.jsx)("span",{children:r.RO.qH.iG[t]})}),(0,s.jsxs)("div",{className:"numberPadWrap",children:[(0,s.jsx)("div",{className:"numWrap",children:x.map(n=>(0,s.jsx)("button",{onClick(){var t,e;null==_||null===(t=_.typing)||void 0===t||t.pause(),_.typing.currentTime=0,null==_||null===(e=_.typing)||void 0===e||e.play(),j(n)},children:n},"kioskInputNumberPad_".concat(n)))}),(0,s.jsxs)("div",{className:"actionWrap",children:[(0,s.jsx)("button",{onClick(){var n;null==_||null===(n=_.click)||void 0===n||n.play(),m()},children:(0,s.jsx)("i",{className:"cancel"})}),(0,s.jsx)("button",{children:(0,s.jsx)("i",{className:"enter",onClick(){var n;null==_||null===(n=_.click)||void 0===n||n.play()}})})]})]})]})]})})};var j=e(5462),m=e(6670);let N=(0,m.Pi)(()=>{let n=(0,j.Z)();return(0,s.jsx)(l.Z,{isGate:!1,children:(0,s.jsx)(h,{language:n})})});var _=N},4893:function(n){n.exports={kioskBackButton:"KioskBackButton_kioskBackButton__PsUP9"}},5283:function(n){n.exports={kioskInput:"KioskInput_kioskInput__5mNNk"}}},function(n){n.O(0,[293,774,888,179],function(){return n(n.s=4505)}),_N_E=n.O()}]);