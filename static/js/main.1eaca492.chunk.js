(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(7),r=c.n(a),i=(c(14),c(15),c(3)),l=c(9),j=c(4),d=c(0),o=function(e,t){switch(t.type){case"ADD_EXPENSE":return Object(j.a)(Object(j.a)({},e),{},{expenses:[].concat(Object(l.a)(e.expenses),[t.payload])});case"DELETE_EXPENSE":return Object(j.a)(Object(j.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});default:return e}},u={budget:1e4,expenses:[{id:1,name:"Shopping",cost:40},{id:2,name:"Holiday",cost:400},{id:3,name:"Transportation",cost:60},{id:4,name:"Fuel",cost:70},{id:5,name:"Food",cost:120}]},b=n.a.createContext(),x=function(e){var t=Object(s.useReducer)(o,u),c=Object(i.a)(t,2),n=c[0],a=c[1];return Object(d.jsx)(b.Provider,{value:{budget:n.budget,expenses:n.expenses,dispatch:a},children:e.children})},m=function(){var e=Object(s.useContext)(b).budget;return Object(d.jsx)("div",{className:"alert alert-secondary",children:Object(d.jsxs)("span",{children:["Budget: $",e]})})},O=function(){var e=Object(s.useContext)(b),t=e.expenses,c=e.budget,n=t.reduce((function(e,t){return e+t.cost}),0),a=n>c?"alert-danger":"alert-success";return Object(d.jsx)("div",{className:"alert ".concat(a),children:Object(d.jsxs)("span",{children:["Balance: $",c-n]})})},h=function(){var e=Object(s.useContext)(b).expenses.reduce((function(e,t){return e+t.cost}),0);return Object(d.jsx)("div",{className:"alert alert-primary",children:Object(d.jsxs)("span",{children:["Expense: $",e]})})},p=c(8),v=function(e){var t=Object(s.useContext)(b).dispatch;return Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.name,Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:["$",e.cost]}),Object(d.jsx)(p.a,{size:"1.5em",onClick:function(){t({type:"DELETE_EXPENSE",payload:e.id})}})]})]})},f=function(){var e=Object(s.useContext)(b).expenses;return Object(d.jsx)("ul",{className:"list-group",children:e.map((function(e){return Object(d.jsx)(v,{id:e.id,name:e.name,cost:e.cost},e.id)}))})},N=c(19),g=function(){var e=Object(s.useContext)(b).dispatch,t=Object(s.useState)(""),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),j=l[0],o=l[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={id:Object(N.a)(),name:n,cost:parseInt(j)};e({type:"ADD_EXPENSE",payload:c})},children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{required:"required",type:"text",className:"form-control",id:"name",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(d.jsxs)("div",{className:"col-sm",children:[Object(d.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(d.jsx)("input",{required:"required",type:"text",className:"form-control",id:"cost",value:j,onChange:function(e){return o(e.target.value)}})]})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Save"})})})]})},E=function(){return Object(d.jsx)(x,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"mt-3",children:"Budget-Planner"}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(O,{})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(h,{})})]}),Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(f,{})})}),Object(d.jsx)("h3",{className:"mt-3",children:"Add Expense"}),Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(g,{})})})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(E,{}),document.getElementById("root")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.1eaca492.chunk.js.map