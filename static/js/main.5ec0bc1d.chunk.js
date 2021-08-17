(this["webpackJsonpstar-wars-film-app"]=this["webpackJsonpstar-wars-film-app"]||[]).push([[0],{28:function(e,t,i){},29:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),l=i(20),s=i.n(l),r=(i(28),i(7)),a=(i(29),i(52)),d=i(50),o=i(51),j=i(22),u=i(54),v=i(1),b=function(e){var t=e.filmDetails,i=JSON.parse(localStorage.getItem("favorites")),n=Object(c.useState)(i||{}),l=Object(r.a)(n,2),s=l[0],a=l[1];Object(c.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(s))}),[s]);var b=null===t||void 0===t?void 0:t.properties;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.a.Body,{children:[Object(v.jsx)(u.a.Title,{style:{paddingBottom:"0.1em"},children:Object(v.jsx)("h4",{children:"Film Details"})}),Object(v.jsxs)(d.a,{style:{margin:"0.5em"},children:[Object(v.jsx)(o.a,{xs:6,style:{marginTop:"0.6em"},children:Object(v.jsx)("div",{className:"title",children:null===b||void 0===b?void 0:b.title},null===t||void 0===t?void 0:t.uid)}),Object(v.jsx)(o.a,{xs:6,children:Object(v.jsx)("div",{className:"fav ".concat(s[null===t||void 0===t?void 0:t._id]?"is-fav":""),id:null===t||void 0===t?void 0:t._id,onClick:function(){return function(e){var t=Object(j.a)({},s);t[e]?delete t[e]:t[e]=!0,a(t)}(null===t||void 0===t?void 0:t._id)},children:Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-heart",viewBox:"0 0 16 16",children:Object(v.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})})},null===t||void 0===t?void 0:t._id)})]}),Object(v.jsx)(d.a,{className:"ditailsAbstract",children:Object(v.jsxs)(o.a,{sm:12,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Release Date :"})," ",null===b||void 0===b?void 0:b.release_date]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Director :"})," ",null===b||void 0===b?void 0:b.director]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Producer :"})," ",null===b||void 0===b?void 0:b.producer]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Description :"})," ",null===b||void 0===b?void 0:b.opening_crawl]})]})})]})})})},h=i(53),O=function(e){var t=e.films,i=e.handleClick,c=e.activeItemId,n=t.map((function(e){var t;return Object(v.jsx)(h.a.Item,{children:Object(v.jsx)("div",{className:"listItem ".concat(c===(null===e||void 0===e?void 0:e._id)?"active-item":""),id:null===e||void 0===e?void 0:e._id,onClick:i,children:null===e||void 0===e||null===(t=e.properties)||void 0===t?void 0:t.title})},null===e||void 0===e?void 0:e.uid)}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.a.Body,{children:[Object(v.jsx)(u.a.Title,{children:Object(v.jsx)("h4",{children:"Film List"})}),Object(v.jsx)(h.a,{style:{marginTop:"1rem"},children:n})]})})})},m=i(21),x=i.n(m),f=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),i=t[0],n=t[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){x.a.get("".concat("https://www.swapi.tech/api/films")).then((function(e){var t=e.data.result;n(t)})).catch((function(e){return console.error("Error: ".concat(e))}))};return{films:i,fetchFilms:l}},p=function(){var e=f().films,t=Object(c.useState)(null),i=Object(r.a)(t,2),n=i[0],l=i[1],s=Object(c.useState)(null),j=Object(r.a)(s,2),u=j[0],h=j[1];Object(c.useEffect)((function(){var t,i=null===(t=e[0])||void 0===t?void 0:t._id,c=m(e,i);l(c),h(i)}),[e]);var m=function(e,t){var i=e.filter((function(e){return e._id===t}));return i.length>0?i[0]:null};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"pt-3 text-center font-details pb-3",children:"Star Wars Films"}),Object(v.jsx)(a.a,{children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(o.a,{sm:4,children:Object(v.jsx)(O,{films:e,activeItemId:u,handleClick:function(t){return function(e,t){var i=e.target.id,c=m(t,i);l(c),h(i)}(t,e)}})}),Object(v.jsx)(o.a,{sm:8,children:Object(v.jsx)(b,{filmDetails:n})})]})})]})};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(p,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.5ec0bc1d.chunk.js.map