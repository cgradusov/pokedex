(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{196:function(e,t,a){},415:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(32),o=a.n(r),s=(a(196),a(24)),c=a(11),i=a(191),l=a.n(i),u=a(27),d=a(65),f=a(35),p=a.n(f),g=a(30),m=a.n(g),b=a(184),j=a.n(b),h=a(33),x=a(182),_=a.n(x),O=a(180),k=a.n(O),y=a(38),v=Object(y.b)({name:"search",initialState:{search:"",isValid:!0},reducers:{updateSearch:function(e,t){e.search=t.payload},setValid:function(e,t){e.isValid=t.payload}}}),w=v.actions,P=w.updateSearch,S=w.setValid,F=v.reducer,N=a(2),L=Object(s.c)((function(e){return{query:e.router.location.query,isValid:e.pokeSearch.isValid}}),null)((function(e){var t,a=e.query,r=e.isValid,o=e.onClick,c=Object(s.d)(),i=null!==(t=a.search)&&void 0!==t?t:"";Object(n.useEffect)((function(){c(P(null!==i&&void 0!==i?i:""))}),[c,i]);return Object(N.jsx)(k.a.Item,{validateStatus:r?"":"error",help:r?"":"Should be combination of numbers or alphabets",children:Object(N.jsx)(_.a,{onChange:function(e){var t=e.target.value;"click"===e.type&&""===t&&o("");var a=function(e){return/^[A-Za-z]+$|^[0-9]+$/g.test(e)}(t)||""===t;a!==r&&c(S(a))},onPressEnter:function(e){return o(e.target.value)},onBlur:function(e){return c(P(e.target.value))},placeholder:"Name or number",defaultValue:i,allowClear:!0})})})),C=function(e){return e.replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))}))},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return"0".repeat(t-e.length)+e},E=function(e){var t=/\/([0-9]+)\//g.exec(e);return Number.parseInt(t[1],10)},q=a(103),V=a(25),B=V.presetPalettes.lime,I=V.presetPalettes.blue,A=V.presetPalettes.volcano,H=V.presetPalettes.magenta,W=V.presetPalettes.orange,D=V.presetPalettes.purple,z=V.presetPalettes.yellow,G=V.presetPalettes.green,R=V.presetPalettes.geekblue,U=V.presetPalettes.gold,$={bug:B[7],dragon:[I[3],A[5]],fairy:H[4],fire:W[6],ghost:D[6],ground:[z[4],z[8]],normal:V.grey[6],psychic:H[6],steel:V.grey[7],dark:V.grey[9],electric:z[5],fighting:W[7],flying:[I[2],V.grey[1]],grass:G[4],ice:R[3],poison:D[3],rock:U[8],water:I[4]},J=function(e,t){var a=$[e];if("string"===typeof a){var n=a;return{color:n,border:"1px solid ".concat(n),background:t?"".concat(n,"15"):"white"}}var r=Object(q.a)(a,2),o=r[0],s=r[1];return{color:t?"black":s,border:"1px solid ".concat(s),background:t?"linear-gradient(180deg, ".concat(o,"88 50%, ").concat(s,"88 50%)"):"white"}},M=a(23),Z=a.n(M),K=a(36),Q=a(183),X=a.n(Q),Y=function(){var e=Object(K.a)(Z.a.mark((function e(t){var a,n,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://pokeapi.co/api/v2/".concat(t),e.next=3,X.a.get(a);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(K.a)(Z.a.mark((function e(t){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Y("pokemon/".concat(t,"/")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(K.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="pokemon-species/".concat(t,"/"),e.abrupt("return",Y(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(K.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"type/",e.abrupt("return",Y("type/"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(K.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="type/".concat(t,"/"),e.abrupt("return",Y(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=Object(y.b)({name:"filter",initialState:{filters:{},types:[],pokemons:{},pokemonsLinks:[],count:0,loading:!1,error:null},reducers:{getTypesStart:function(e){e.loading=!0},getTypesSuccess:function(e,t){e.types=t.payload.map((function(e){return e.name})),e.loading=!1},getTypesFailure:function(e,t){e.loading=!1,e.error=t.payload},updateFilters:function(e,t){var a=t.payload.split("-");e.filters=a.reduce((function(e,t){return t.length>0&&(e[t]=!0),e}),{})},toggleFilter:function(e,t){var a=t.payload;"undefined"===typeof e.filters[a]?e.filters[a]=!0:delete e.filters[a]},getPokemonsByTypeStart:function(e){e.loading=!0},getPokemonsByTypeSuccess:function(e,t){t.payload.forEach((function(t){var a=t.type;return t.pokemons.forEach((function(t){var n=E(t.url);"undefined"===typeof e.pokemons[n]?e.pokemons[n]=Object(c.a)(Object(c.a)({index:n,number:T(n.toString())},t),{},{types:[a]}):e.pokemons[n].types.push(a)}))})),e.loading=!1},getPokemonsByTypeFailure:function(e,t){e.loading=!1,e.error=t.payload},compilePokemonsLinks:function(e){e.loading=!1,e.pokemonsLinks=Object.values(e.pokemons),e.pokemonsLinks.sort((function(e,t){return e.id-t.id})),e.count=e.pokemonsLinks.length}}}),oe=re.reducer,se=re.actions,ce=se.getTypesStart,ie=se.getTypesSuccess,le=se.getTypesFailure,ue=se.toggleFilter,de=se.getPokemonsByTypeStart,fe=se.getPokemonsByTypeSuccess,pe=se.getPokemonsByTypeFailure,ge=se.compilePokemonsLinks,me=se.updateFilters,be=Object(s.c)((function(e){return{filters:e.pokeFilter.filters}}),null)((function(e){var t,a=e.type,n=void 0===a?"grass":a,r=e.width,o=void 0===r?"inherit":r,i=e.clickable,l=void 0===i||i,u=null!==(t=e.filters[n])&&void 0!==t&&t,d=Object(s.d)(),f=Object(c.a)({boxSizing:"border-box",fontSize:"12px",lineHeight:"20px",fontVariant:"tabular-nums",fontFeatureSettings:"tnum",display:"inline-flex",height:"auto",whiteSpace:"nowrap",margin:"0 8px 0 0",padding:"0 7px",cursor:l?"pointer":"auto",userSelect:"none",width:o,justifyContent:"center"},J(n,u||!l));return Object(N.jsx)("span",{onClick:function(){l&&d(ue(n))},style:f,children:C(n)})})),je={xs:{span:4},sm:{span:4},md:{span:4},lg:{span:4},xl:{span:1},xxl:{span:1}},he=Object(s.c)((function(e){return{types:e.pokeFilter.types,pokemons:e.pokeFilter.pokemons,query:e.router.location.query}}),null)((function(e){var t=e.types,a=e.query,r=e.pokemons,o=Object(s.d)();return Object(n.useEffect)((function(){o(function(){var e=Object(K.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(ce()),e.next=4,ae();case 4:a=e.sent,t(ie(a.results.filter((function(e){return!["unknown","shadow"].includes(e.name)})))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(le(e.t0.toString()));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),Object(n.useEffect)((function(){var e;o(me(null!==(e=a.filters)&&void 0!==e?e:""))}),[o,a]),Object(n.useEffect)((function(){o(function(e){return function(){var t=Object(K.a)(Z.a.mark((function t(a){var n;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(de()),n=e.map(function(){var e=Object(K.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(t);case 2:return a=e.sent,e.abrupt("return",{pokemons:a.pokemon.map((function(e){return e.pokemon})).filter((function(e){return E(e.url)<=898})),type:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.t0=a,t.t1=fe,t.next=7,Promise.all(n);case 7:t.t2=t.sent,t.t3=(0,t.t1)(t.t2),(0,t.t0)(t.t3),t.next=15;break;case 12:t.prev=12,t.t4=t.catch(0),a(pe(t.t4.toString()));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[o,t]),Object(n.useEffect)((function(){o(ge())}),[o,r]),Object(N.jsx)(p.a,{justify:"space-between",gutter:[0,10],children:t.map((function(e){return Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},je),{},{children:Object(N.jsx)(be,{type:e,width:"60px"},e)}),e)}))})})),xe=a(57),_e=a.n(xe),Oe=a(438),ke=function(e){var t=e.onClick;return Object(N.jsx)(_e.a,{type:"primary",onClick:function(){return t()},style:{width:"100%"},children:Object(N.jsx)(Oe.a,{})})},ye={xs:{order:1,span:15,offset:9},sm:{order:1,span:14,offset:10},md:{order:0,span:13,offset:11},lg:{order:0,span:11,offset:1},xl:{order:0,span:24,offset:0},xxl:{order:0,span:24,offset:0}},ve={xs:{order:3,span:24,offset:0},sm:{order:3,span:20,offset:2},md:{order:0,span:22,offset:2},lg:{order:0,span:9,offset:2},xl:{order:0,span:24,offset:0},xxl:{order:0,span:24,offset:0}},we={xs:{order:2,span:24,offset:0},sm:{order:2,span:24,offset:0},md:{order:0,span:18,offset:0},lg:{order:0,span:7,offset:15},xl:{order:0,span:22,offset:0},xxl:{order:0,span:22,offset:0}},Pe={xs:{order:4,span:24,offset:0},sm:{order:4,span:24,offset:0},md:{order:0,span:6,offset:0},lg:{order:0,span:2,offset:0},xl:{order:0,span:2,offset:0},xxl:{order:0,span:2,offset:0}},Se={xs:16,sm:16,md:16,lg:16,xl:10,xxl:10},Fe=Object(s.c)((function(e){return{location:e.router.location,search:e.pokeSearch.search,searchIsValid:e.pokeSearch.isValid,filters:e.pokeFilter.filters}}),null)((function(e){var t=e.location,a=e.search,n=e.searchIsValid,r=e.filters,o=Object(s.d)(),i=t.query,l=function(e){var s=null!==e&&void 0!==e?e:a;if(n){var c=new URLSearchParams(i);""===s?c.delete("search"):c.set("search",s);var l=Object.keys(r);0===l.length?c.delete("filters"):c.set("filters",l.join("-")),o(Object(h.d)({pathname:"/1",search:"".concat(c),state:{from:t.pathname}}))}};return Object(N.jsxs)("div",{style:{margin:"10px 15px"},children:[Object(N.jsxs)(p.a,{justify:"space-between",align:"top",gutter:[0,Se],children:[Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},ye),{},{children:Object(N.jsx)("h1",{children:"Pokedex"})})),Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},ve),{},{children:Object(N.jsx)(he,{})})),Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},we),{},{style:{maxHeight:"56px",minWidth:"200px"},children:Object(N.jsx)(L,{onClick:l})})),Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},Pe),{},{children:Object(N.jsx)(ke,{onClick:l})}))]}),Object(N.jsx)(j.a,{orientation:"left",style:{margin:"12px 0 24px 0"}})]})})),Ne={loading:!0,error:null,pokemonsList:Array.from({length:18},(function(){return{id:1,name:"",specs:{flavor_text_entries:[]},types:[]}})),count:0},Le=Object(y.b)({name:"pokemons",initialState:Ne,reducers:{getPokemonsStart:function(e){e.loading=!0,e.error=null},getPokemonsSuccess:function(e,t){e.pokemonsList=t.payload.pokemonsList,e.count=t.payload.count,e.loading=!1},getPokemonsFailure:function(e,t){e.loading=!1,e.error=t.payload.err}}}),Ce=Le.actions,Te=Ce.getPokemonsStart,Ee=Ce.getPokemonsSuccess,qe=Ce.getPokemonsFailure,Ve=(Ce.changePageNumber,Le.reducer),Be=function(e){return Number.isNaN(e)||Number.isNaN(parseFloat(e))?function(t){return t.name.includes(e)}:function(t){return t.number.includes(e)}},Ie=function(e){return function(t){return e.split("-").every((function(e){return t.types.includes(e)}))}},Ae=a(122),He=a.n(Ae),We=a(185),De=a.n(We),ze=He.a.Meta,Ge=function(e){var t,a=e.loading,n=void 0!==a&&a,r=e.name,o=e.num,c=e.specs,i=e.types,l=(null!==(t=c.flavor_text_entries.filter((function(e){return"en"===e.language.name&&["sword","y","sun"].includes(e.version.name)}))[0])&&void 0!==t?t:"").flavor_text,d=i.map((function(e){return e.type.name})),f=Object(u.g)(),p=Object(s.d)();return Object(N.jsxs)(He.a,{loading:n,style:{height:"100%",margin:"15px 10px"},children:[Object(N.jsx)(ze,{style:{cursor:"pointer",userSelect:"none"},avatar:Object(N.jsx)(De.a,{src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(T(o),".png")}),title:"".concat(C(r)," #").concat(T(o)),onClick:function(){p(Object(h.d)({pathname:"/pokemon/".concat(r),state:{from:f.pathname}}))},description:Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("p",{children:l})})}),Object(N.jsx)("p",{}),Object(N.jsx)("div",{style:{position:"absolute",bottom:"10px",right:"10px"},children:d.map((function(e){return Object(N.jsx)(be,{type:e},e)}))})]})},Re=a(186),Ue=a.n(Re),$e=a(60),Je=a(71),Me=a.n(Je),Ze=a(95),Ke=a.n(Ze),Qe=a(119),Xe=a.n(Qe),Ye=a(120),et=a.n(Ye),tt=function(e){return function(t,a,n){var r=new URLSearchParams(e),o="".concat(t,"?").concat(r),s="ant-pagination",c=Object(N.jsx)("span",{className:"".concat(s,"-item-ellipsis"),children:"\u2022\u2022\u2022"});switch(a){case"jump-prev":return Object(N.jsx)($e.a,{to:"/".concat(o),className:"".concat(s,"-item-link"),children:Object(N.jsxs)("div",{className:"ant-pagination-item-container",children:[Object(N.jsx)(Xe.a,{className:"".concat(s,"-item-link-icon")}),c]})});case"jump-next":return Object(N.jsx)($e.a,{to:"/".concat(o),className:"".concat(s,"-item-link"),children:Object(N.jsxs)("div",{className:"ant-pagination-item-container",children:[Object(N.jsx)(et.a,{className:"".concat(s,"-item-link-icon")}),c]})});case"prev":return Object(N.jsx)($e.a,{to:"/".concat(o),component:_e.a,className:"".concat(s,"-item-link"),children:Object(N.jsx)(Me.a,{})});case"next":return Object(N.jsx)($e.a,{to:"/".concat(o),component:_e.a,className:"".concat(s,"-item-link"),children:Object(N.jsx)(Ke.a,{})});default:return Object(N.jsx)($e.a,{to:"/".concat(o),className:"".concat(s,"-item-link"),children:t})}}},at=Object(s.c)((function(e){return{count:e.pokeList.count,pokemonsPerPage:e.pokePagination.pokemonsPerPage,query:e.router.location.query}}),null)((function(e){var t=e.match,a=e.count,n=e.pokemonsPerPage,r=e.query,o=t.params.num,s=Number.parseInt(o,10);return Object(N.jsx)(p.a,{gutter:[0,16],justify:"center",children:Object(N.jsx)(m.a,{style:{margin:"15px 0"},children:Object(N.jsx)(Ue.a,{current:s,total:a,onChange:function(){return window.scrollTo(0,0)},defaultPageSize:n,showSizeChanger:!1,itemRender:tt(r)})})})})),nt={minHeight:"calc(100% - 70px - 41px - 41px)",display:"flex",flexDirection:"column",rowGap:"16px",marginTop:"16px"},rt={xs:{span:24},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6},xxl:{span:4}},ot=Object(s.c)((function(e){return{pokeLinks:e.pokeFilter.pokemonsLinks,pokeList:e.pokeList.pokemonsList,loading:e.pokeList.loading,pokemonsPerPage:e.pokePagination.pokemonsPerPage,query:e.router.location.query}}),null)((function(e){var t,a,r=e.pokeLinks,o=e.pokeList,i=e.loading,l=e.pokemonsPerPage,u=e.match,d=e.query,f=u.params.num,g=Number.parseInt(f,10),b=Object(s.d)(),j=(null!==(t=d.search)&&void 0!==t?t:"").toLowerCase(),h=(null!==(a=d.filters)&&void 0!==a?a:"").toLowerCase();return Object(n.useEffect)((function(){r.length>0&&b(function(e,t,a,n,r){return function(){var o=Object(K.a)(Z.a.mark((function o(s){var i,l,u,d,f,p;return Z.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,0!==e.length){o.next=3;break}throw Error("Emply pokemons links");case 3:return s(Te()),i=""!==n?e.filter(Be(n)):e,l=""!==r?i.filter(Ie(r)):i,u=l.length,d=l.slice(a,t),f=d.map(function(){var e=Object(K.a)(Z.a.mark((function e(t){var a,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(t.name);case 2:return a=e.sent,e.next=5,te(t.index);case 5:return n=e.sent,e.abrupt("return",Object(c.a)(Object(c.a)({},a),{},{specs:n}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o.next=11,Promise.all(f);case 11:p=o.sent,s(Ee({pokemonsList:p,count:u})),o.next=18;break;case 15:o.prev=15,o.t0=o.catch(0),s(qe({err:o.t0.toString()}));case 18:case"end":return o.stop()}}),o,null,[[0,15]])})));return function(e){return o.apply(this,arguments)}}()}(r,l*g,l*(g-1),j,h))}),[r,g,l,b,j,h]),Object(N.jsx)("div",{style:nt,children:0!==o.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(p.a,{gutter:[0,16],children:o.map((function(e,t){return Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},rt),{},{children:Object(N.jsx)(Ge,{num:"".concat(e.id),name:e.name,specs:e.specs,types:e.types,loading:i},e.id)}),t)}))}),Object(N.jsx)(p.a,{justify:"center",children:Object(N.jsx)(m.a,{children:Object(N.jsx)(at,{match:u,search:j})})})]}):Object(N.jsx)(p.a,{gutter:[0,16],justify:"center",children:Object(N.jsx)("h1",{children:"Not Found"})})})})),st=(a(404),a(76)),ct=a(39),it=a(176),lt=a(49),ut=Object(y.b)({name:"pagination",initialState:{pokemonsPerPage:24}}).reducer,dt=Object(y.b)({name:"pokemon",initialState:{loading:!0,error:null,data:{id:1,height:7,weight:69,types:[{type:{name:"grass"}}],stats:[{base_stat:45,stat:{name:"hp"}}],specs:{gender_rate:0}}},reducers:{getPokemonStart:function(e){e.loading=!0},getPokemonSuccess:function(e,t){e.loading=!1,e.data=t.payload},getPokemonFailure:function(e,t){e.loading=!1,e.error=t.payload}}}),ft=dt.reducer,pt=dt.actions,gt=pt.getPokemonStart,mt=pt.getPokemonSuccess,bt=pt.getPokemonFailure,jt=function(e){return Object(lt.c)({router:Object(d.b)(e),pokeList:Ve,pokePagination:ut,pokeFilter:oe,pokeSearch:F,pokePage:ft})},ht=Object(ct.b)(),xt=Object(y.a)({reducer:jt(ht),middleware:[Object(it.a)(ht)].concat(Object(st.a)(Object(y.c)()))}),_t=a(190),Ot=a.n(_t),kt=a(187),yt=a.n(kt),vt=V.presetPalettes.lime,wt=V.presetPalettes.blue,Pt=V.presetPalettes.volcano,St=V.presetPalettes.orange,Ft=V.presetPalettes.red,Nt=V.presetPalettes.cyan,Lt={hp:Ft[5],attack:St[5],defense:wt[5],"special-attack":Pt[5],"special-defense":Nt[5],speed:vt[5]},Ct={hp:["HP","HP"],attack:["Attack","AP"],defense:["Defence","DF"],"special-attack":["Special Attack","SA"],"special-defense":["Special Defence","SD"],speed:["Speed","SP"]},Tt=function(e){var t=e.param,a=e.value,n=Object(q.a)(Ct[t],2),r=n[0],o=n[1];return Object(N.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"start"},children:[Object(N.jsx)("span",{style:{width:"20px"},title:r,children:o}),Object(N.jsx)(yt.a,{steps:13,percent:a/2.25,strokeColor:Lt[t],showInfo:!1,style:{margin:"0 10px"}}),Object(N.jsx)("span",{style:{width:"20px"},children:a})]})},Et=a(125),qt=a.n(Et),Vt=a(189),Bt=a.n(Vt),It=a(188),At=a.n(It),Ht=function(e){switch(e.rate){case-1:return Object(N.jsx)(At.a,{});case 0:return Object(N.jsx)(qt.a,{});default:return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(qt.a,{}),Object(N.jsx)(Bt.a,{})]})}},Wt={normal:{double_damage_from:["fighting"],double_damage_to:[],half_damage_from:[],half_damage_to:["rock","steel"],no_damage_from:["ghost"],no_damage_to:["ghost"]},fighting:{double_damage_from:["flying","psychic","fairy"],double_damage_to:["normal","rock","steel","ice","dark"],half_damage_from:["rock","bug","dark"],half_damage_to:["flying","poison","bug","psychic","fairy"],no_damage_from:[],no_damage_to:["ghost"]},flying:{double_damage_from:["rock","electric","ice"],double_damage_to:["fighting","bug","grass"],half_damage_from:["fighting","bug","grass"],half_damage_to:["rock","steel","electric"],no_damage_from:["ground"],no_damage_to:[]},poison:{double_damage_from:["ground","psychic"],double_damage_to:["grass","fairy"],half_damage_from:["fighting","poison","bug","grass","fairy"],half_damage_to:["poison","ground","rock","ghost"],no_damage_from:[],no_damage_to:["steel"]},ground:{double_damage_from:["water","grass","ice"],double_damage_to:["poison","rock","steel","fire","electric"],half_damage_from:["poison","rock"],half_damage_to:["bug","grass"],no_damage_from:["electric"],no_damage_to:["flying"]},rock:{double_damage_from:["fighting","ground","steel","water","grass"],double_damage_to:["flying","bug","fire","ice"],half_damage_from:["normal","flying","poison","fire"],half_damage_to:["fighting","ground","steel"],no_damage_from:[],no_damage_to:[]},bug:{double_damage_from:["flying","rock","fire"],double_damage_to:["grass","psychic","dark"],half_damage_from:["fighting","ground","grass"],half_damage_to:["fighting","flying","poison","ghost","steel","fire","fairy"],no_damage_from:[],no_damage_to:[]},ghost:{double_damage_from:["ghost","dark"],double_damage_to:["ghost","psychic"],half_damage_from:["poison","bug"],half_damage_to:["dark"],no_damage_from:["normal","fighting"],no_damage_to:["normal"]},steel:{double_damage_from:["fighting","ground","fire"],double_damage_to:["rock","ice","fairy"],half_damage_from:["normal","flying","rock","bug","steel","grass","psychic","ice","dragon","fairy"],half_damage_to:["steel","fire","water","electric"],no_damage_from:["poison"],no_damage_to:[]},fire:{double_damage_from:["ground","rock","water"],double_damage_to:["bug","steel","grass","ice"],half_damage_from:["bug","steel","fire","grass","ice","fairy"],half_damage_to:["rock","fire","water","dragon"],no_damage_from:[],no_damage_to:[]},water:{double_damage_from:["grass","electric"],double_damage_to:["ground","rock","fire"],half_damage_from:["steel","fire","water","ice"],half_damage_to:["water","grass","dragon"],no_damage_from:[],no_damage_to:[]},grass:{double_damage_from:["flying","poison","bug","fire","ice"],double_damage_to:["ground","rock","water"],half_damage_from:["ground","water","grass","electric"],half_damage_to:["flying","poison","bug","steel","fire","grass","dragon"],no_damage_from:[],no_damage_to:[]},electric:{double_damage_from:["ground"],double_damage_to:["flying","water"],half_damage_from:["flying","steel","electric"],half_damage_to:["grass","electric","dragon"],no_damage_from:[],no_damage_to:["ground"]},psychic:{double_damage_from:["bug","ghost","dark"],double_damage_to:["fighting","poison"],half_damage_from:["fighting","psychic"],half_damage_to:["steel","psychic"],no_damage_from:[],no_damage_to:["dark"]},ice:{double_damage_from:["fighting","rock","steel","fire"],double_damage_to:["flying","ground","grass","dragon"],half_damage_from:["ice"],half_damage_to:["steel","fire","water","ice"],no_damage_from:[],no_damage_to:[]},dragon:{double_damage_from:["ice","dragon","fairy"],double_damage_to:["dragon"],half_damage_from:["fire","water","grass","electric"],half_damage_to:["steel"],no_damage_from:[],no_damage_to:["fairy"]},dark:{double_damage_from:["fighting","bug","fairy"],double_damage_to:["ghost","psychic"],half_damage_from:["ghost","dark"],half_damage_to:["fighting","dark","fairy"],no_damage_from:["psychic"],no_damage_to:[]},fairy:{double_damage_from:["poison","steel"],double_damage_to:["fighting","dragon","dark"],half_damage_from:["fighting","bug","dark"],half_damage_to:["poison","steel","fire"],no_damage_from:["dragon"],no_damage_to:[]}},Dt=function(e){var t=e.map((function(e){return Wt[e]})).reduce((function(e,t){return Object.keys(t).forEach((function(a){"undefined"===typeof e[a]&&(e[a]=[]),e[a]=[].concat(Object(st.a)(e[a]),Object(st.a)(t[a]))})),e}),{}),a=t.double_damage_from,n=t.double_damage_to,r=t.no_damage_from,o=t.half_damage_from,s=a.filter((function(t){return!e.includes(t)&&!n.includes(t)&&!r.includes(t)&&!o.includes(t)}));return Object(st.a)(new Set(s))},zt=(a(415),{minHeight:"calc(100% - 70px)",display:"flex",flexDirection:"column",alignItems:"center",gap:"50px"}),Gt={border:"1px solid #f0f0f0",width:"85%",padding:"30px",marginBottom:"50px",maxWidth:"1100px"},Rt={xs:{span:16,offset:2,order:0},sm:{span:16,offset:7},md:{span:15,offset:9,order:0},lg:{span:14,offset:10,order:0},xl:{span:24,offset:0,push:1},xxl:{}},Ut={xs:{span:22,offset:0,order:1,pull:2},sm:{span:20,offset:4},md:{span:16,offset:8,order:0},lg:{span:10,offset:1,order:0},xl:{span:12,offset:2},xxl:{}},$t={xs:{span:24,offset:0,order:3},sm:{span:19,offset:5},md:{span:12,offset:0,order:3},lg:{span:10,offset:0,order:2,push:2},xl:{},xxl:{}},Jt={xs:{span:10,offset:1,order:4},sm:{span:10,offset:4},md:{span:12,offset:0,order:5},lg:{span:5,offset:1,order:6,push:2},xl:{span:3,offset:5,push:3},xxl:{}},Mt={xs:{span:10,offset:3,order:4},sm:{span:10},md:{span:10,offset:2,order:5},lg:{span:5,offset:0,order:6,push:1},xl:{push:3},xxl:{}},Zt={xs:{span:24,offset:0,order:2},sm:{span:20,offset:2},md:{span:10,offset:2,order:4},lg:{span:12,offset:0,order:5},xl:{span:12,pull:1},xxl:{}},Kt={xs:10,sm:10},Qt=Object(s.c)((function(e){return{loading:e.pokePage.loading,error:e.pokePage.error,data:e.pokePage.data}}),null)((function(e){var t=e.match,a=e.history,r=e.loading,o=e.data,i=e.error,l=o.id,u=o.height,d=o.weight,f=o.types,g=o.stats,b=o.specs,j=t.params.name,h=Object(s.d)();Object(n.useEffect)((function(){h(function(e){return function(){var t=Object(K.a)(Z.a.mark((function t(a){var n,r;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(gt()),t.next=4,ee(e);case 4:return n=t.sent,t.next=7,te(e);case 7:r=t.sent,a(mt(Object(c.a)(Object(c.a)({},n),{},{specs:r}))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a(bt(t.t0.toString()));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(j))}),[h,j]);var x="undefined"!==typeof a.location.state,_=l.toString(),O=f.map((function(e){return e.type.name})),k=Dt(O).sort(),y=b.gender_rate;return Object(N.jsxs)("div",{style:zt,children:[Object(N.jsx)(_e.a,{onClick:function(){x&&a.goBack()},disabled:!x,className:"back-button",children:Object(N.jsx)(Me.a,{})}),Object(N.jsx)("div",{style:Gt,children:null===i?Object(N.jsx)(Ot.a,{loading:r,active:!0,children:Object(N.jsxs)(p.a,{justify:"center",align:"stretch",gutter:[0,Kt],children:[Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},Rt),{},{children:Object(N.jsx)("h1",{children:"".concat(C(j)," #").concat(T(_))})})),Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},Ut),{},{children:Object(N.jsx)("img",{className:"avatar",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(T(_),".png"),alt:""})})),Object(N.jsx)(m.a,Object(c.a)(Object(c.a)({},$t),{},{className:"stats",children:g.map((function(e){return Object(N.jsx)(Tt,{param:e.stat.name,value:e.base_stat},e.stat.name)}))})),Object(N.jsxs)(m.a,Object(c.a)(Object(c.a)({},Jt),{},{children:[Object(N.jsx)("h3",{children:"Types:"}),Object(N.jsx)(p.a,{gutter:[0,5],children:O.map((function(e){return Object(N.jsx)(m.a,{children:Object(N.jsx)(be,{type:e,clickable:!1},e)})}))})]})),Object(N.jsxs)(m.a,Object(c.a)(Object(c.a)({},Mt),{},{children:[Object(N.jsx)("h3",{children:"Weakness:"}),Object(N.jsx)(p.a,{gutter:[0,5],children:k.map((function(e){return Object(N.jsx)(m.a,{children:Object(N.jsx)(be,{type:e,clickable:!1},e)})}))})]})),Object(N.jsxs)(m.a,Object(c.a)(Object(c.a)({},Zt),{},{style:{maxWidth:"350px"},children:[Object(N.jsxs)("div",{className:"specs",children:[Object(N.jsx)("span",{children:"Height:".concat(u/10,"m")}),Object(N.jsx)("span",{children:"Weight:".concat(d,"kg")}),Object(N.jsxs)("span",{children:["Gender:",Object(N.jsx)(Ht,{rate:y})]})]}),Object(N.jsx)("p",{}),Object(N.jsx)("div",{className:"description",children:"For some time after its birth, it grows by gaining nourishment from the seed on its back."})]}))]})}):Object(N.jsx)(p.a,{gutter:[0,16],justify:"center",children:Object(N.jsx)("h1",{children:"Not Found"})})})]})})),Xt=l.a.Footer,Yt=function(){return Object(N.jsxs)(d.a,{history:ht,children:[Object(N.jsxs)(u.d,{children:[Object(N.jsx)(u.b,{exact:!0,path:"/",children:Object(N.jsx)(u.a,{to:"/1"})}),Object(N.jsx)(u.b,{exact:!0,path:"/:num",component:function(e){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Fe,Object(c.a)({},e)),Object(N.jsx)(ot,Object(c.a)({},e))]})}}),Object(N.jsx)(u.b,{path:"/pokemon/:name",component:Qt})]}),Object(N.jsxs)(Xt,{style:{textAlign:"center"},children:["Pokedex App \xa92021 Created by"," ",Object(N.jsx)("a",{href:"https://github.com/cgradusov",children:"Constantine Gradusov"})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(N.jsx)(s.a,{store:xt,children:Object(N.jsx)(Yt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[430,1,2]]]);
//# sourceMappingURL=main.066accf0.chunk.js.map