(this["webpackJsonpsnake-game-react"]=this["webpackJsonpsnake-game-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),u=(n(13),n(7)),i=n(1);var l=[460,460],f=function(e){return e.map((function(e,t){return Math.floor(Math.random()*(l[t]/20))}))},s={38:[0,-1],39:[1,0],40:[0,1],37:[-1,0]},m=function(e,t){var n=e.keyCode;return n>=37&&n<=40&&t(s[n])},d=function(e,t){e(null),t(!0)},h=(n(3),function(){return r.a.createElement("div",{className:"end-game"},"!!! GAME OVER !!!",r.a.createElement("h2",null,String.fromCodePoint(Number(128542))))}),v=function(e){return r.a.createElement("div",{className:"score-div"},r.a.createElement("h3",null,"Your Score: ".concat(e.gameScore)))},b=function(e){return r.a.createElement("div",{className:"canvas"},r.a.createElement("canvas",{ref:e.canvasRef,width:"460px",height:"460px"}))},E=[Math.round(15*Math.random()),Math.round(15*Math.random())],O=0,g=function(){var e=Object(a.useRef)(),t=Object(a.useState)([[7,3],[8,3],[9,3]]),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(E),s=Object(i.a)(l,2),g=s[0],S=s[1],j=Object(a.useState)([-1,0]),w=Object(i.a)(j,2),M=w[0],p=w[1],k=Object(a.useState)(!1),y=Object(i.a)(k,2),R=y[0],N=y[1],x=Object(a.useState)(null),I=Object(i.a)(x,2),C=I[0],J=I[1];!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return P()}),C);var G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;switch(!0){case 20*e[0]>=460:case e[0]<0:case 20*e[1]>=460:case e[1]<0:case t.some((function(t){return t.every((function(t,n){return t===e[n]}))})):return!0;default:return!1}},P=function(){var e=JSON.parse(JSON.stringify(c)),t=[e[0][0]+M[0],e[0][1]+M[1]];e=[t].concat(Object(u.a)(e)),G(t)&&d(J,N),function(e){if(e[0].every((function(e,t){return e===g[t]}))){var t=f(g);for(O+=1;G(t,e);)t=f(g);return S(t),!0}return!1}(e)||e.pop(),o(e)};return Object(a.useEffect)((function(){var t=e.current.getContext("2d");t.setTransform(20,0,0,20,0,0),t.clearRect(0,0,window.innerWidth,window.innerHeight),c.forEach((function(e,n){var a=Object(i.a)(e,2),r=a[0],c=a[1];0===n?(t.fillStyle="red",t.fillRect(r,c,1,1)):1===n||2===n?(t.fillStyle="white",t.fillRect(r,c,1,1)):(t.fillStyle="black",t.fillRect(r,c,1,1))})),t.beginPath(),t.arc(g[0],g[1],.5,0,2*Math.PI),t.fillStyle="black",t.fill()}),[c,g,R]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Snake Game"),r.a.createElement("div",{className:"main",role:"button",tabIndex:"0",onKeyDown:function(e){return m(e,p)}},r.a.createElement(b,{canvasRef:e}),r.a.createElement(v,{gameScore:O}),R&&r.a.createElement(h,null),r.a.createElement("button",{className:"start-button",onClick:function(){o([[7,3],[8,3],[9,3]]),S([Math.round(15*Math.random()),Math.round(15*Math.random())]),p([0,1]),J(100),N(!1),O=0}},"Start Game")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.72f97579.chunk.js.map