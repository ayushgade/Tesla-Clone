(this.webpackJsonptesla=this.webpackJsonptesla||[]).push([[0],{32:function(e,n,t){},33:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r,i,c,s,o,a,l,j=t(0),d=t.n(j),x=t(10),b=t.n(x),h=(t(32),t(33),t(3)),O=t(26),g=t(4),p=t(24),f=t.n(p),u=t(25),m=t.n(u),v=t(14),y=Object(v.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),w=function(e){return e.car.cars},T=y.reducer,k=t(13),B=t(1);var S,M,E,I,C,D,L,A=function(){var e=Object(j.useState)(!1),n=Object(O.a)(e,2),t=n[0],r=n[1],i=Object(k.b)(w);return console.log(i),Object(B.jsxs)(R,{children:[Object(B.jsx)("a",{children:Object(B.jsx)("img",{src:"/images/logo.svg"})}),Object(B.jsxs)(z,{children:[Object(B.jsx)("p",{children:Object(B.jsx)("a",{href:"#",children:"MODEL S"})}),Object(B.jsx)("p",{children:Object(B.jsx)("a",{href:"#",children:"MODEL 3"})}),Object(B.jsx)("p",{children:Object(B.jsx)("a",{href:"#",children:"MODEL X"})}),Object(B.jsx)("p",{children:Object(B.jsx)("a",{href:"#",children:"MODEL Y"})}),Object(B.jsx)("p",{children:Object(B.jsx)("a",{href:"#",children:"SOLAR ROOF"})}),Object(B.jsx)("p",{children:Object(B.jsx)("a",{href:"#",children:"SOLAR PANEL"})})]}),Object(B.jsxs)(N,{children:[Object(B.jsx)("a",{href:"#",children:"Shop"}),Object(B.jsx)("a",{href:"#",children:"Tesla Account"}),Object(B.jsx)(X,{onClick:function(){return r(!0)}})]}),Object(B.jsxs)(P,{show:t,children:[Object(B.jsx)(J,{children:Object(B.jsx)(Y,{onClick:function(){return r(!1)}})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Exiting Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Used Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"CyberTruck"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Roadster"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Semi"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"power wall"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Test drive"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Charging"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"find us"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"support"})})]})]})},R=g.a.div(r||(r=Object(h.a)(["\n    min-height: 60px;\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n"]))),z=g.a.div(i||(i=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n\n    p{\n        font-weight: 600;\n        padding: 0 10px;\n    }\n    @media (max-width: 768px) {\n        display: none;\n    }\n"]))),N=g.a.div(c||(c=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    a{\n    font-weight: 600;\n    margin-right: 20px;\n    text-transform: uppercase;\n    }   \n"]))),X=Object(g.a)(f.a)(s||(s=Object(h.a)(["\n    cursor: pointer;\n"]))),P=g.a.div(o||(o=Object(h.a)(["\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 300px;\n    background: #fff;\n    z-index: 16;\n    list-style: none;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    text-align: start;\n    transform: ",";\n    transition: transform 0.5s ;\n    a {\n        font-weight: 600;\n        text-transform: uppercase;\n        font-size: 15px;\n    }\n\n    li{\n        padding: 25px 0;\n        border-bottom: 2px solid rgba(0, 0, 0, .2);\n    }\n"])),(function(e){return e.show?"translateX(0)":"translateX(100%)"})),Y=Object(g.a)(m.a)(a||(a=Object(h.a)(["\n"]))),J=g.a.div(l||(l=Object(h.a)(["\n        display: flex;\n        justify-content: flex-end;\n        cursor: pointer;\n"]))),F=t(12),U=t.n(F);var q,G=function(e){var n=e.title,t=e.description,r=e.backgroundImg,i=e.leftBtnText,c=e.rightBtnText;return Object(B.jsxs)(H,{bgImage:r,children:[Object(B.jsx)(U.a,{bottom:!0,children:Object(B.jsxs)(K,{children:[Object(B.jsx)("h1",{children:n}),Object(B.jsx)("p",{children:t})]})}),Object(B.jsxs)($,{children:[Object(B.jsxs)(Q,{children:[Object(B.jsx)(U.a,{left:!0,children:Object(B.jsx)(V,{children:i})}),c&&Object(B.jsx)(U.a,{right:!0,children:Object(B.jsx)(W,{children:c})})]}),Object(B.jsx)(U.a,{top:!0,children:Object(B.jsx)(Z,{src:"/images/down-arrow.svg"})})]})]})},H=g.a.div(S||(S=Object(h.a)(["\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; //vertical\n    align-items: center; //horizontal\n    background-image: ",";\n\n"])),(function(e){return'url("/images/'.concat(e.bgImage,'")')})),K=g.a.div(M||(M=Object(h.a)(["\n    padding-top: 15vh;\n    text-align: center;\n    transition: all 250ms:\n"]))),Q=g.a.div(E||(E=Object(h.a)(["\n    display: flex;\n    margin-bottom: 30px;\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n    \n"]))),V=g.a.div(I||(I=Object(h.a)(["\n    background-color: rgba(23, 26, 32, 0.8);\n    height: 40px;\n    width: 256px;\n    color: white;\n    display: flex;\n    justify-content: center;\n    border-radius: 100px;\n    align-items: center;\n    text-transform: uppercase;\n    font-size: 12px;\n    margin: 10px;\n    cursor: pointer;\n"]))),W=Object(g.a)(V)(C||(C=Object(h.a)(["\n    background-color: rgba(255, 255, 255, 0.5);\n    color: rgb(23, 26, 32);\n"]))),Z=g.a.img(D||(D=Object(h.a)(["\n    height: 40px;\n    animation: animateDown infinite 1.5s;\n"]))),$=g.a.div(L||(L=Object(h.a)([""])));var _=function(){return Object(B.jsxs)(ee,{children:[Object(B.jsx)(G,{title:"Model S",description:"Order online for Touchless Delivery",backgroundImg:"model-s.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(G,{title:"Model Y",description:"Order online for Touchless Delivery",backgroundImg:"model-y.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(G,{title:"Model X",description:"Order online for Touchless Delivery",backgroundImg:"model-x.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(G,{title:"Model 3",description:"Order online for Touchless Delivery",backgroundImg:"model-3.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(G,{title:"Lowest Cost Solar Panels in America",description:"Money-back guarantee",backgroundImg:"solar-panel.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(G,{title:"Solar for New Roofs",description:"Solar Roof Costs Less Than a New Roof Plus Solar Panels",backgroundImg:"solar-roof.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(G,{title:"Accessories",backgroundImg:"accessories.jpg",leftBtnText:"Shop Now"})]})},ee=g.a.div(q||(q=Object(h.a)(["\n    height: 100vh;\n"])));var ne=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(A,{}),Object(B.jsx)(_,{})]})},te=Object(v.a)({reducer:{car:T}});b.a.render(Object(B.jsx)(d.a.StrictMode,{children:Object(B.jsx)(k.a,{store:te,children:Object(B.jsx)(ne,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6d1fdebf.chunk.js.map