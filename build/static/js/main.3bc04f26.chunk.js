(this.webpackJsonpel=this.webpackJsonpel||[]).push([[0],{75:function(e,t,a){e.exports=a(85)},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),o=a.n(l),c=a(12),i=a(65),s=a(143),m=a(51),u=a.n(m),d=a(60),p=a(61),f=a(4),g=a(131),b=a(132),E=a(86),y=a(67),x=a(133),v=a(134),h=a(135),k=a(139),N=a(145),j=a(136),C=a(137),S=a(138),O=a(122),w=a(123),B="desc",z="asc",P=30,F="black",I="yellow",R="#f7f70269",T="red",W=Object(p.a)({root:{marginTop:15,background:F,color:I,border:"1px dashed ".concat(I)},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14,marginRight:10},pos:{marginBottom:12}}),A=Object(f.a)((function(){return{root:{color:R}}}))(y.a);var D=function(e){var t=e.data,a=W();return n.a.createElement(n.a.Fragment,null,t?n.a.createElement(O.a,{className:a.root},n.a.createElement(w.a,{style:{padding:"10px 15px 5px 15px"}},n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(A,{className:a.title,color:"textSecondary",gutterBottom:!0},"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c:"),n.a.createElement(y.a,{className:a.title,gutterBottom:!0},n.a.createElement("b",null," ",t.firstName," ",t.lastName))),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(A,{className:a.title,color:"textSecondary",gutterBottom:!0},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),n.a.createElement(y.a,{className:a.title,gutterBottom:!0},t.description)),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(A,{className:a.title,color:"textSecondary",gutterBottom:!0},"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f:"),n.a.createElement(y.a,{className:a.title,gutterBottom:!0},n.a.createElement("b",null," ",t.address.city))),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(A,{className:a.title,color:"textSecondary",gutterBottom:!0},"\u0413\u043e\u0440\u043e\u0434:"),n.a.createElement(y.a,{className:a.title,gutterBottom:!0},n.a.createElement("b",null,t.address.state))),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(A,{className:a.title,color:"textSecondary",gutterBottom:!0},"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442:"),n.a.createElement(y.a,{className:a.title,gutterBottom:!0},n.a.createElement("b",null,t.address.streetAddress))),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(A,{className:a.title,color:"textSecondary",gutterBottom:!0},"\u0418\u043d\u0434\u0435\u043a\u0441:"),n.a.createElement(y.a,{className:a.title,gutterBottom:!0},n.a.createElement("b",null," ",t.address.zip))))):n.a.createElement("div",{style:{backgroundColor:F,color:I,marginTop:30}},"* \u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435."))},M=a(124),H=Object(p.a)((function(e){return{root:{display:"flex",backgroundColor:F,flexDirection:"column",alignItems:"center",justifyContent:"center","& > * + *":{marginLeft:e.spacing(2)},padding:"50px 0",color:I}}}));function J(){var e=H();return n.a.createElement("div",{className:e.root},n.a.createElement(M.a,{style:{color:I,marginBottom:20},id:"standard-basic"}),n.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b..."))}var L=a(7),U=a(64),q=a(87),G=a(148),K=a(125),Q=a(126),V=a(127),X=a(147),Y=a(130);var Z=function(e){var t=e.rows,a=e.addNewObj,r=n.a.useState(!1),l=Object(c.a)(r,2),o=l[0],i=l[1],s=n.a.useState({id:"",firstName:"",lastName:"",email:"",phone:"",description:"\u0412\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0423 \u043d\u0435\u0433\u043e \u043d\u0435\u0442 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f.",address:{city:"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0412\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",state:"\u0413\u043e\u0440\u043e\u0434 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0412\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",streetAddress:"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0412\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",zip:"\u0418\u043d\u0434\u0435\u043a\u0441 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0412\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}}),m=Object(c.a)(s,2),u=m[0],d=m[1],p=function(){i(!1)};return n.a.createElement("div",null,n.a.createElement(q.a,{style:{background:F,color:I,borderColor:I},variant:"outlined",onClick:function(){i(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),n.a.createElement(G.a,{open:o,onClose:p,"aria-labelledby":"form-dialog-title"},n.a.createElement(K.a,{id:"form-dialog-title"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),n.a.createElement(Q.a,null,n.a.createElement(V.a,null,"\u0427\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f:"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(u),d({id:"",firstName:"",lastName:"",email:"",phone:""})}},t.map((function(e){return n.a.createElement(X.a,{key:e,variant:"outlined",margin:"dense",id:e,label:e,fullWidth:!0,value:u[e],onChange:function(t){return d(Object(U.a)({},u,Object(L.a)({},e,t.target.value)))}})})),n.a.createElement(Y.a,null,n.a.createElement(q.a,{onClick:p,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),n.a.createElement(q.a,{disabled:function(e){var t=!1;for(var a in e)""===e[a]&&(t=!0);return t}(u),type:"submit",onClick:p,color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))))},$=Object(f.a)({root:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:I},"&.Mui-focused fieldset":{borderColor:I},"& .MuiInputBase-input":{color:I,padding:10}}}})(X.a);function _(e){var t=e.value,a=e.onChange,r=e.label,l=e.fullWidth,o=e.margin;return n.a.createElement($,{margin:o,placeholder:r,fullWidth:l,value:t,variant:"outlined",onChange:function(e){return a(e.target.value)}})}_.defaultProps={margin:"dense"};var ee=_;var te=function(e){var t=e.children;return n.a.createElement(y.a,{style:{color:T,textAlign:"center",margin:"50px 0"}},t)},ae=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return Promise.race([fetch(e,t),new Promise((function(e,t){return setTimeout((function(){return t(new Error("timeout"))}),1e3*a)}))])},re=Object(p.a)({table:{minWidth:650}}),ne=["id","firstName","lastName","email","phone"],le=function(e,t){for(var a=e.length,r=t,n=[];a>t&&r<=50;)n.push(r),r+=t,a-=t;return n};function oe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var ce=Object(f.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:I},body:{fontSize:14,backgroundColor:e.palette.common.black,color:I}}}))(g.a);var ie=function(e){var t=this,a=e.source,r=re(),l=n.a.useState(""),o=Object(c.a)(l,2),i=o[0],s=o[1],m=n.a.useState(""),p=Object(c.a)(m,2),f=p[0],g=p[1],O=n.a.useState(""),w=Object(c.a)(O,2),R=w[0],T=w[1],W=n.a.useState([]),A=Object(c.a)(W,2),M=A[0],H=A[1],L=n.a.useState(!1),U=Object(c.a)(L,2),q=U[0],G=U[1],K=n.a.useState(!1),Q=Object(c.a)(K,2),V=Q[0],X=Q[1],Y=n.a.useState(10),$=Object(c.a)(Y,2),_=$[0],ie=$[1],se=n.a.useState(0),me=Object(c.a)(se,2),ue=me[0],de=me[1],pe=n.a.useState({key:"",rule:B}),fe=Object(c.a)(pe,2),ge=fe[0],be=fe[1],Ee=function(){g(""),T("")},ye=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G(!0),e.next=4,ae(t,{},P);case 4:if(!(a=e.sent).ok){e.next=13;break}return e.t0=H,e.next=9,a.json();case 9:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 13:return e.abrupt("return",s("\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0437\u0436\u0435"));case 14:e.next=23;break;case 16:if(e.prev=16,e.t2=e.catch(0),"timeout"!==e.t2.message){e.next=20;break}return e.abrupt("return",s("\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0437\u0436\u0435"));case 20:if("Failed to fetch"!==e.t2.message){e.next=22;break}return e.abrupt("return",s("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0430\u0448\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443"));case 22:return e.abrupt("return",s("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0437\u0436\u0435"));case 23:return e.prev=23,G(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[0,16,23,26]])})));return function(t){return e.apply(this,arguments)}}();return n.a.useEffect((function(){ye(a)}),[a]),n.a.createElement("div",{style:{padding:20,maxWidth:1440,margin:"0 auto"}},n.a.createElement(b.a,{style:{backgroundColor:F,color:I},component:E.a},n.a.createElement("div",{style:{display:"flex",paddingBottom:10,maxHeight:50,alignItems:"center",justifyContent:"space-between"}},n.a.createElement(y.a,{variant:"h5"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),n.a.createElement(Z,{rows:ne,addNewObj:function(e,t){var a=e.slice();return a.unshift(t),H(a)}.bind(this,M)})),q?n.a.createElement(J,{style:{marginTop:100}}):n.a.createElement(n.a.Fragment,null,i?n.a.createElement(te,{style:{margin:"0 auto"}},i):n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{className:r.taisRequiredble,"aria-label":"simple table"},n.a.createElement(v.a,null,n.a.createElement(h.a,null,ne.map((function(e,a){return n.a.createElement(ce,{key:e},n.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:0===a?"flex-start":"flex-end"}},f===e?n.a.createElement(n.a.Fragment,null,n.a.createElement(ee,{value:R,onChange:T,label:e}),n.a.createElement(j.a,{onClick:Ee,style:{fontSize:16,cursor:"pointer",marginLeft:10}})):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{onClick:be.bind(t,{key:e,rule:(r=ge.rule,r===B?z:B)}),style:{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",marginRight:15}},n.a.createElement(C.a,{style:{marginRight:5,display:e===ge.key?"block":"none",transform:ge.rule===B?"rotate(0deg)":"rotate(180deg)"}}),e),n.a.createElement(S.a,{onClick:function(){return g(e)},style:{fontSize:16,cursor:"pointer"}}))));var r})))),n.a.createElement(k.a,null,function(e,t,a){return e.filter((function(e,r){return r<t*(a+1)&&r>=t*a}))}(function(e,t,a){return(a&&""!==a.key?function(e,t){return e.filter((function(e){return-1!==e[t.key].toString().toUpperCase().indexOf(t.value.toUpperCase())}))}(e,a).map((function(e,t){return[e,t]})):e.map((function(e,t){return[e,t]}))).sort((function(e,a){return t.rule===B?oe(e[0],a[0],t.key):-oe(e[0],a[0],t.key)})).map((function(e){return e[0]}))}(M,ge,{key:f,value:R}),_,ue).map((function(e){return n.a.createElement(h.a,{onClick:X.bind(t,e),style:{cursor:"pointer"},key:e.id+e.email},n.a.createElement(ce,{component:"th",scope:"row"},e.id),n.a.createElement(ce,{align:"right"},e.firstName),n.a.createElement(ce,{align:"right"},e.lastName),n.a.createElement(ce,{align:"right"},e.email),n.a.createElement(ce,{align:"right"},e.phone))})))),n.a.createElement(N.a,{style:{color:I},rowsPerPageOptions:le(M,10),component:"div",count:M.length,rowsPerPage:_,page:ue,onChangePage:function(e,t){return de(t)},onChangeRowsPerPage:function(e){return ie(e.target.value)}}),n.a.createElement(D,{data:V})))))},se=a(140),me=a(141),ue=a(142);var de=function(e){var t=e.setSource,a="http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",r="http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";return n.a.createElement(n.a.Fragment,null,n.a.createElement(se.a,null),n.a.createElement(me.a,{style:{textAlign:"center"}},n.a.createElement("h1",{style:{fontSize:50,marginBottom:40}},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0438\u0441 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0439 \u0442\u0430\u0431\u043b\u0438\u0446"),n.a.createElement("h2",{style:{fontSize:20,marginBottom:70}},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, ",n.a.createElement("span",null,"\u0434\u0430\u043d\u043d\u044b\u0435")," \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),n.a.createElement(ue.a,{style:{boxShadow:"1px 1px 1px -1px rgb(51, 76, 175), 1px 1px 4px 1px rgb(51, 76, 175), 6px 3px 15px 1px rgb(51, 76, 175)"},size:"large",color:"primary","aria-label":"large outlined primary button group"},n.a.createElement(q.a,{onClick:t.bind(this,a),variant:"outlined"},"Small Data"),n.a.createElement(q.a,{onClick:t.bind(this,r),variant:"outlined"},"Big Data"))))},pe=(a(84),Object(i.a)({typography:{fontFamily:'"Montserrat", sans-serif',fontSize:14}}));var fe=function(){var e=n.a.useState(""),t=Object(c.a)(e,2),a=t[0],r=t[1];return n.a.createElement(s.a,{theme:pe},n.a.createElement("div",{style:{paddingTop:20,minHeight:"100vh",margin:"0 auto",color:"yellow",backgroundColor:"black"}},a?n.a.createElement(ie,{source:a}):n.a.createElement(de,{setSource:r})))};o.a.render(n.a.createElement(fe,null),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.3bc04f26.chunk.js.map