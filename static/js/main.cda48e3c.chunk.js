(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],[,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),a=c(5),i=c.n(a),s=(c(10),c(3)),d=c(2),m=(c(11),c(12),c(0));function o(t){var e=t.card,c=t.handleChoice,n=t.cardFlipped,r=t.disabled;return Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:n?"flipped":"",children:[Object(m.jsx)("img",{className:"front",src:e.src,alt:"Card front"}),Object(m.jsx)("img",{className:"back",src:"https://stringland.github.io/memory-card-game/img/cover.png",onClick:function(){r||c(e)},alt:"Card back"})]})})}var u=[{src:"https://stringland.github.io/memory-card-game/img/helmet.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/potion.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/ring.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/scroll.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/shield.png",matched:!1},{src:"https://stringland.github.io/memory-card-game/img/sword.png",matched:!1}];var l=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),c=e[0],r=e[1],a=Object(n.useState)(0),i=Object(d.a)(a,2),l=i[0],h=i[1],b=Object(n.useState)(null),g=Object(d.a)(b,2),j=g[0],p=g[1],O=Object(n.useState)(null),f=Object(d.a)(O,2),x=f[0],v=f[1],y=Object(n.useState)(!1),C=Object(d.a)(y,2),N=C[0],k=C[1],S=function(){var t=[].concat(u,u).sort((function(){return Math.random()-.5})).map((function(t){return Object(s.a)(Object(s.a)({},t),{},{id:Math.random()})}));p(null),v(null),r(t),h(0)},w=function(t){j?v(t):p(t)};Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){j&&x&&(k(!0),j.src===x.src?(r((function(t){return t.map((function(t){return t.src===j.src?Object(s.a)(Object(s.a)({},t),{},{matched:!0}):t}))})),M()):setTimeout((function(){return M()}),1e3))}),[j,x]);var M=function(){p(null),v(null),h((function(t){return t+1})),k(!1)};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Card Match"}),Object(m.jsx)("h5",{children:"A memory card game"}),Object(m.jsx)("button",{onClick:S,children:"New Game"}),Object(m.jsxs)("p",{children:["Turns: ",l]}),Object(m.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(m.jsx)(o,{card:t,handleChoice:w,cardFlipped:t===j||t===x||t.matched,disabled:N},t.id)}))})]})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.cda48e3c.chunk.js.map