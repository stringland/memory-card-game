(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],[,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(5),i=c.n(r),s=(c(10),c(3)),d=c(2),m=(c(11),c(12),c(0));function o(t){var e=t.card,c=t.handleChoice,n=t.cardFlipped,a=t.disabled;return Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:n?"flipped":"",children:[Object(m.jsx)("img",{className:"front",src:e.src,alt:"Card front"}),Object(m.jsx)("img",{className:"back",src:"https://stringland.github.io/memory-card-game/img/cover.png",onClick:function(){a||c(e)},alt:"Card back"})]})})}var u=[{src:"https://stringland.github.io/memory-card-game/img/helmet.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/potion.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/ring.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/scroll.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/shield.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/sword.png",matched:!1}];var l=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(0),i=Object(d.a)(r,2),l=i[0],h=i[1],b=Object(n.useState)(0),j=Object(d.a)(b,2),g=j[0],p=j[1],O=Object(n.useState)(null),f=Object(d.a)(O,2),x=f[0],y=f[1],v=Object(n.useState)(null),C=Object(d.a)(v,2),k=C[0],N=C[1],S=Object(n.useState)(!1),w=Object(d.a)(S,2),M=w[0],E=w[1],A=function(){var t=[].concat(u,u).sort((function(){return Math.random()-.5})).map((function(t){return Object(s.a)(Object(s.a)({},t),{},{id:Math.random()})}));y(null),N(null),a(t),h(0),p(0)},F=function(t){x?N(t):y(t)};Object(n.useEffect)((function(){A()}),[]),Object(n.useEffect)((function(){x&&k&&(E(!0),x.src===k.src?(a((function(t){return t.map((function(t){return t.src===x.src?Object(s.a)(Object(s.a)({},t),{},{matched:!0}):t}))})),p((function(t){return t+1})),G()):setTimeout((function(){return G()}),1e3))}),[x,k,g]);var G=function(){y(null),N(null),h((function(t){return t+1})),E(!1)};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Card Match"}),Object(m.jsx)("h5",{children:"A memory card game"}),Object(m.jsx)("button",{onClick:A,children:"New Game"}),Object(m.jsxs)("p",{children:["Turns: ",l]}),Object(m.jsx)("p",{style:{display:6===g?"block":"none"},children:"Congrats! You find all the matches. Click New Game button to restart the game."}),Object(m.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(m.jsx)(o,{card:t,handleChoice:F,cardFlipped:t===x||t===k||t.matched,disabled:M},t.id)}))})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.bd97d314.chunk.js.map