(this["webpackJsonpwhat-to-watch"]=this["webpackJsonpwhat-to-watch"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(3),o=n.n(s),a=(n(12),n(4)),r=n(5),h=n(7),l=n(6),j=(n(13),n(0));var d=function(e){return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsxs)("h3",{children:["Title: ",e.Title]}),Object(j.jsxs)("h4",{children:["Description: ",e.Plot]}),Object(j.jsxs)("h4",{children:["Release Date: ",e.Released]}),Object(j.jsxs)("h4",{children:["Rating: ",e.imdbRating]})]})},u=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this)).state={movies:[]},c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=1e0d0e1d&t=Spongebob&type=movie").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({movies:t}),console.log(e.state.movies.Title)}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("p",{children:"Header thing here"})}),Object(j.jsx)("div",{className:"result",children:Object(j.jsx)(d,{})}),Object(j.jsx)("div",{className:"history",children:Object(j.jsx)("p",{children:"History stuff here"})})]})}}]),n}(c.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.ae1fc95a.chunk.js.map