(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[907],{57254:function(ce,W,l){"use strict";l.d(W,{Z:function(){return R}});var j=l(28991),M=l(67294),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},D=C,K=l(27029),Y=function(U,o){return M.createElement(K.Z,(0,j.Z)((0,j.Z)({},U),{},{ref:o,icon:D}))};Y.displayName="DownOutlined";var R=M.forwardRef(Y)},64335:function(ce,W,l){"use strict";var j=l(67294),M=(0,j.createContext)({});W.Z=M},85224:function(ce,W,l){"use strict";var j=l(84305),M=l(69224),C=l(67294),D=l(94184),K=l.n(D),Y=l(97435),R=l(56264),V=l.n(R),U=l(64335),o=["children","className","extra","style","renderContent"];function A(){return A=Object.assign||function(v){for(var d=1;d<arguments.length;d++){var P=arguments[d];for(var y in P)Object.prototype.hasOwnProperty.call(P,y)&&(v[y]=P[y])}return v},A.apply(this,arguments)}function L(v,d){var P=Object.keys(v);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(v);d&&(y=y.filter(function(S){return Object.getOwnPropertyDescriptor(v,S).enumerable})),P.push.apply(P,y)}return P}function J(v){for(var d=1;d<arguments.length;d++){var P=arguments[d]!=null?arguments[d]:{};d%2?L(Object(P),!0).forEach(function(y){ee(v,y,P[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(P)):L(Object(P)).forEach(function(y){Object.defineProperty(v,y,Object.getOwnPropertyDescriptor(P,y))})}return v}function ee(v,d,P){return d in v?Object.defineProperty(v,d,{value:P,enumerable:!0,configurable:!0,writable:!0}):v[d]=P,v}function I(v,d){if(v==null)return{};var P=ae(v,d),y,S;if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(v);for(S=0;S<F.length;S++)y=F[S],!(d.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,y)||(P[y]=v[y]))}return P}function ae(v,d){if(v==null)return{};var P={},y=Object.keys(v),S,F;for(F=0;F<y.length;F++)S=y[F],!(d.indexOf(S)>=0)&&(P[S]=v[S]);return P}var $=function(d){var P=d.children,y=d.className,S=d.extra,F=d.style,se=d.renderContent,Q=I(d,o),Ce=(0,C.useContext)(M.ZP.ConfigContext),ve=Ce.getPrefixCls,me=d.prefixCls||ve("pro"),oe="".concat(me,"-footer-bar"),E=(0,C.useContext)(U.Z),G=(0,C.useMemo)(function(){var re=E.hasSiderMenu,Oe=E.isMobile,ie=E.siderWidth;if(!!re)return ie?Oe?"100%":"calc(100% - ".concat(ie,"px)"):"100%"},[E.collapsed,E.hasSiderMenu,E.isMobile,E.siderWidth]),te=C.createElement(C.Fragment,null,C.createElement("div",{className:"".concat(oe,"-left")},S),C.createElement("div",{className:"".concat(oe,"-right")},P));return(0,C.useEffect)(function(){return!E||!(E==null?void 0:E.setHasFooterToolbar)?function(){}:(E==null||E.setHasFooterToolbar(!0),function(){var re;E==null||(re=E.setHasFooterToolbar)===null||re===void 0||re.call(E,!1)})},[]),C.createElement("div",A({className:K()(y,"".concat(oe)),style:J({width:G},F)},(0,Y.Z)(Q,["prefixCls"])),se?se(J(J(J({},d),E),{},{leftWidth:G}),te):te)};W.Z=$},81907:function(ce,W,l){"use strict";l.d(W,{ZP:function(){return $t}});var j=l(65056),M=l(70883),C=l(22122),D=l(96156),K=l(6610),Y=l(5991),R=l(10379),V=l(93144),U=l(90484),o=l(67294),A=l(94184),L=l.n(A),J=l(98423),ee=l(31739),I=l(65632),ae=l(85061),$=l(75164);function v(n){var e,t=function(i){return function(){e=null,n.apply(void 0,(0,ae.Z)(i))}},r=function(){if(e==null){for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];e=(0,$.Z)(t(s))}};return r.cancel=function(){return $.Z.cancel(e)},r}function d(){return function(e,t,r){var a=r.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(t))return a;var c=v(a.bind(this));return i=!0,Object.defineProperty(this,t,{value:c,configurable:!0,writable:!0}),i=!1,c}}}}var P=l(64019);function y(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function S(n,e,t){if(t!==void 0&&e.top>n.top-t)return t+e.top}function F(n,e,t){if(t!==void 0&&e.bottom<n.bottom+t){var r=window.innerHeight-e.bottom;return t+r}}var se=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],Q=[];function Ce(){return Q}function ve(n,e){if(!!n){var t=Q.find(function(r){return r.target===n});t?t.affixList.push(e):(t={target:n,affixList:[e],eventHandlers:{}},Q.push(t),se.forEach(function(r){t.eventHandlers[r]=(0,P.Z)(n,r,function(){t.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function me(n){var e=Q.find(function(t){var r=t.affixList.some(function(a){return a===n});return r&&(t.affixList=t.affixList.filter(function(a){return a!==n})),r});e&&e.affixList.length===0&&(Q=Q.filter(function(t){return t!==e}),se.forEach(function(t){var r=e.eventHandlers[t];r&&r.remove&&r.remove()}))}var oe=function(n,e,t,r){var a=arguments.length,i=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if((typeof Reflect=="undefined"?"undefined":(0,U.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(i=(a<3?s(i):a>3?s(e,t,i):s(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};function E(){return typeof window!="undefined"?window:null}var G;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(G||(G={}));var te=function(n){(0,R.Z)(t,n);var e=(0,V.Z)(t);function t(){var r;return(0,K.Z)(this,t),r=e.apply(this,arguments),r.state={status:G.None,lastAffix:!1,prevTarget:null},r.getOffsetTop=function(){var a=r.props.offsetBottom,i=r.props.offsetTop;return a===void 0&&i===void 0&&(i=0),i},r.getOffsetBottom=function(){return r.props.offsetBottom},r.savePlaceholderNode=function(a){r.placeholderNode=a},r.saveFixedNode=function(a){r.fixedNode=a},r.measure=function(){var a=r.state,i=a.status,s=a.lastAffix,c=r.props.onChange,f=r.getTargetFunc();if(!(i!==G.Prepare||!r.fixedNode||!r.placeholderNode||!f)){var g=r.getOffsetTop(),m=r.getOffsetBottom(),p=f();if(!!p){var u={status:G.None},h=y(p),b=y(r.placeholderNode),w=S(b,h,g),x=F(b,h,m);w!==void 0?(u.affixStyle={position:"fixed",top:w,width:b.width,height:b.height},u.placeholderStyle={width:b.width,height:b.height}):x!==void 0&&(u.affixStyle={position:"fixed",bottom:x,width:b.width,height:b.height},u.placeholderStyle={width:b.width,height:b.height}),u.lastAffix=!!u.affixStyle,c&&s!==u.lastAffix&&c(u.lastAffix),r.setState(u)}}},r.prepareMeasure=function(){if(r.setState({status:G.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},r.render=function(){var a=r.context.getPrefixCls,i=r.state,s=i.affixStyle,c=i.placeholderStyle,f=r.props,g=f.prefixCls,m=f.children,p=L()((0,D.Z)({},a("affix",g),!!s)),u=(0,J.Z)(r.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return o.createElement(ee.Z,{onResize:function(){r.updatePosition()}},o.createElement("div",(0,C.Z)({},u,{ref:r.savePlaceholderNode}),s&&o.createElement("div",{style:c,"aria-hidden":"true"}),o.createElement("div",{className:p,ref:r.saveFixedNode,style:s},o.createElement(ee.Z,{onResize:function(){r.updatePosition()}},m))))},r}return(0,Y.Z)(t,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:a||E}},{key:"componentDidMount",value:function(){var a=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){ve(i(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var i=this.state.prevTarget,s=this.getTargetFunc(),c=null;s&&(c=s()||null),i!==c&&(me(this),c&&(ve(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),me(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),i=this.state.affixStyle;if(a&&i){var s=this.getOffsetTop(),c=this.getOffsetBottom(),f=a();if(f&&this.placeholderNode){var g=y(f),m=y(this.placeholderNode),p=S(m,g,s),u=F(m,g,c);if(p!==void 0&&i.top===p||u!==void 0&&i.bottom===u)return}}this.prepareMeasure()}}]),t}(o.Component);te.contextType=I.E_,oe([d()],te.prototype,"updatePosition",null),oe([d()],te.prototype,"lazyUpdatePosition",null);var re=te,Oe=l(84305),ie=l(69224),ar=l(59903),or=l(81262),ir=l(30887),lr=l(59250),cr=l(94233),ke=l(28481),ge=l(28991),Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ye=Xe,Ee=l(27029),Ne=function(e,t){return o.createElement(Ee.Z,(0,ge.Z)((0,ge.Z)({},e),{},{ref:t,icon:Ye}))};Ne.displayName="ArrowLeftOutlined";var Ve=o.forwardRef(Ne),Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Qe=Je,Re=function(e,t){return o.createElement(Ee.Z,(0,ge.Z)((0,ge.Z)({},e),{},{ref:t,icon:Qe}))};Re.displayName="ArrowRightOutlined";var _e=o.forwardRef(Re),qe=l(50344),et=l(57254),tt=l(81555),rt=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},we=function(e){var t=e.prefixCls,r=e.separator,a=r===void 0?"/":r,i=e.children,s=e.overlay,c=e.dropdownProps,f=rt(e,["prefixCls","separator","children","overlay","dropdownProps"]),g=o.useContext(I.E_),m=g.getPrefixCls,p=m("breadcrumb",t),u=function(w){return s?o.createElement(tt.Z,(0,C.Z)({overlay:s,placement:"bottomCenter"},c),o.createElement("span",{className:"".concat(p,"-overlay-link")},w,o.createElement(et.Z,null))):w},h;return"href"in f?h=o.createElement("a",(0,C.Z)({className:"".concat(p,"-link")},f),i):h=o.createElement("span",(0,C.Z)({className:"".concat(p,"-link")},f),i),h=u(h),i?o.createElement("span",null,h,a&&o.createElement("span",{className:"".concat(p,"-separator")},a)):null};we.__ANT_BREADCRUMB_ITEM=!0;var Te=we,Se=function(e){var t=e.children,r=o.useContext(I.E_),a=r.getPrefixCls,i=a("breadcrumb");return o.createElement("span",{className:"".concat(i,"-separator")},t||"/")};Se.__ANT_BREADCRUMB_SEPARATOR=!0;var nt=Se,Be=l(99210),at=l(21687),ot=l(96159),it=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function lt(n,e){if(!n.breadcrumbName)return null;var t=Object.keys(e).join("|"),r=n.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),function(a,i){return e[i]||a});return r}function ct(n,e,t,r){var a=t.indexOf(n)===t.length-1,i=lt(n,e);return a?o.createElement("span",null,i):o.createElement("a",{href:"#/".concat(r.join("/"))},i)}var De=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach(function(r){e=e.replace(":".concat(r),t[r])}),e},st=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=(0,ae.Z)(e),i=De(t,r);return i&&a.push(i),a},ye=function(e){var t=e.prefixCls,r=e.separator,a=r===void 0?"/":r,i=e.style,s=e.className,c=e.routes,f=e.children,g=e.itemRender,m=g===void 0?ct:g,p=e.params,u=p===void 0?{}:p,h=it(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),b=o.useContext(I.E_),w=b.getPrefixCls,x=b.direction,O,z=w("breadcrumb",t);if(c&&c.length>0){var B=[];O=c.map(function(N){var Z=De(N.path,u);Z&&B.push(Z);var H;return N.children&&N.children.length&&(H=o.createElement(Be.Z,null,N.children.map(function(X){return o.createElement(Be.Z.Item,{key:X.path||X.breadcrumbName},m(X,u,c,st(B,X.path,u)))}))),o.createElement(Te,{overlay:H,separator:a,key:Z||N.breadcrumbName},m(N,u,c,B))})}else f&&(O=(0,qe.Z)(f).map(function(N,Z){return N&&((0,at.Z)(N.type&&(N.type.__ANT_BREADCRUMB_ITEM===!0||N.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,ot.Tm)(N,{separator:a,key:Z}))}));var T=L()(z,(0,D.Z)({},"".concat(z,"-rtl"),x==="rtl"),s);return o.createElement("div",(0,C.Z)({className:T,style:i},h),O)};ye.Item=Te,ye.Separator=nt;var ft=ye,ut=ft,dt=l(51890),vt=l(34952),mt=l(42051),gt=function(e,t,r){return!t||!r?null:o.createElement(mt.Z,{componentName:"PageHeader"},function(a){var i=a.back;return o.createElement("div",{className:"".concat(e,"-back")},o.createElement(vt.Z,{onClick:function(c){r==null||r(c)},className:"".concat(e,"-back-button"),"aria-label":i},t))})},ht=function(e){return o.createElement(ut,e)},pt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:t==="rtl"?o.createElement(_e,null):o.createElement(Ve,null)},yt=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=t.title,i=t.avatar,s=t.subTitle,c=t.tags,f=t.extra,g=t.onBack,m="".concat(e,"-heading"),p=a||s||c||f;if(!p)return null;var u=pt(t,r),h=gt(e,u,g),b=h||i||p;return o.createElement("div",{className:m},b&&o.createElement("div",{className:"".concat(m,"-left")},h,i&&o.createElement(dt.C,i),a&&o.createElement("span",{className:"".concat(m,"-title"),title:typeof a=="string"?a:void 0},a),s&&o.createElement("span",{className:"".concat(m,"-sub-title"),title:typeof s=="string"?s:void 0},s),c&&o.createElement("span",{className:"".concat(m,"-tags")},c)),f&&o.createElement("span",{className:"".concat(m,"-extra")},f))},bt=function(e,t){return t?o.createElement("div",{className:"".concat(e,"-footer")},t):null},Pt=function(e,t){return o.createElement("div",{className:"".concat(e,"-content")},t)},xt=function(e){var t=o.useState(!1),r=(0,ke.Z)(t,2),a=r[0],i=r[1],s=function(f){var g=f.width;i(g<768)};return o.createElement(I.C,null,function(c){var f,g=c.getPrefixCls,m=c.pageHeader,p=c.direction,u=e.prefixCls,h=e.style,b=e.footer,w=e.children,x=e.breadcrumb,O=e.breadcrumbRender,z=e.className,B=!0;"ghost"in e?B=e.ghost:m&&"ghost"in m&&(B=m.ghost);var T=g("page-header",u),N=function(){var le;return((le=x)===null||le===void 0?void 0:le.routes)?ht(x):null},Z=N(),H=x&&"props"in x,X=(O==null?void 0:O(e,Z))||Z,fe=H?x:X,pe=L()(T,z,(f={"has-breadcrumb":!!fe,"has-footer":!!b},(0,D.Z)(f,"".concat(T,"-ghost"),B),(0,D.Z)(f,"".concat(T,"-rtl"),p==="rtl"),(0,D.Z)(f,"".concat(T,"-compact"),a),f));return o.createElement(ee.Z,{onResize:s},o.createElement("div",{className:pe,style:h},fe,yt(T,e,p),w&&Pt(T,w),bt(T,b)))})},Ct=xt,sr=l(18106),Ae=l(41046),be=l(64335),fr=l(53645),Ot=function(e){var t=(0,o.useContext)(be.Z),r=e.children,a=e.contentWidth,i=e.className,s=e.style,c=(0,o.useContext)(ie.ZP.ConfigContext),f=c.getPrefixCls,g=e.prefixCls||f("pro"),m=a||t.contentWidth,p="".concat(g,"-grid-content");return o.createElement("div",{className:L()(p,i,{wide:m==="Fixed"}),style:s},o.createElement("div",{className:"".concat(g,"-grid-content-children")},r))},Et=Ot,Nt=l(85224),ur=l(12395),Rt=l(83832);function Ze(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function je(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ze(Object(t),!0).forEach(function(r){wt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ze(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function wt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Tt(n,e){return At(n)||Dt(n,e)||Bt(n,e)||St()}function St(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bt(n,e){if(!!n){if(typeof n=="string")return Me(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Me(n,e)}}function Me(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Dt(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,s,c;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(f){i=!0,c=f}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw c}}return r}}function At(n){if(Array.isArray(n))return n}var Zt=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},jt=function(e){var t=e.children,r=e.style,a=e.className,i=e.markStyle,s=e.markClassName,c=e.zIndex,f=c===void 0?9:c,g=e.gapX,m=g===void 0?212:g,p=e.gapY,u=p===void 0?222:p,h=e.width,b=h===void 0?120:h,w=e.height,x=w===void 0?64:w,O=e.rotate,z=O===void 0?-22:O,B=e.image,T=e.content,N=e.offsetLeft,Z=e.offsetTop,H=e.fontStyle,X=H===void 0?"normal":H,fe=e.fontWeight,pe=fe===void 0?"normal":fe,xe=e.fontColor,le=xe===void 0?"rgba(0,0,0,.15)":xe,Fe=e.fontSize,He=Fe===void 0?16:Fe,We=e.fontFamily,Ue=We===void 0?"sans-serif":We,Gt=e.prefixCls,kt=(0,o.useContext)(ie.ZP.ConfigContext),Xt=kt.getPrefixCls,ze=Xt("pro-layout-watermark",Gt),Yt=L()("".concat(ze,"-wrapper"),a),Vt=L()(ze,s),Jt=(0,o.useState)(""),Ke=Tt(Jt,2),Qt=Ke[0],$e=Ke[1];return(0,o.useEffect)(function(){var ue=document.createElement("canvas"),q=ue.getContext("2d"),ne=Zt(q),_t="".concat((m+b)*ne,"px"),qt="".concat((u+x)*ne,"px"),er=N||m/2,tr=Z||u/2;if(ue.setAttribute("width",_t),ue.setAttribute("height",qt),q){q.translate(er*ne,tr*ne),q.rotate(Math.PI/180*Number(z));var rr=b*ne,Ge=x*ne;if(B){var de=new Image;de.crossOrigin="anonymous",de.referrerPolicy="no-referrer",de.src=B,de.onload=function(){q.drawImage(de,0,0,rr,Ge),$e(ue.toDataURL())}}else if(T){var nr=Number(He)*ne;q.font="".concat(X," normal ").concat(pe," ").concat(nr,"px/").concat(Ge,"px ").concat(Ue),q.fillStyle=le,q.fillText(T,0,0),$e(ue.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[m,u,N,Z,z,X,pe,b,x,Ue,le,B,T,He]),o.createElement("div",{style:je({position:"relative"},r),className:Yt},t,o.createElement("div",{className:Vt,style:je({zIndex:f,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(m+b,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Qt,"')")},i)}))},Mt=jt,It=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Lt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Ie(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function k(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ie(Object(t),!0).forEach(function(r){Pe(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ie(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Pe(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Le(n,e){if(n==null)return{};var t=Ft(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,r)||(t[r]=n[r]))}return t}function Ft(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function _(){return _=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_.apply(this,arguments)}function he(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?he=function(t){return typeof t}:he=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(n)}function Ht(n){return he(n)==="object"?n:{spinning:n}}var Wt=function(e){var t=e.tabList,r=e.tabActiveKey,a=e.onTabChange,i=e.tabBarExtraContent,s=e.tabProps,c=e.prefixedClassName;return t&&t.length||i?o.createElement(Ae.Z,_({className:"".concat(c,"-tabs"),activeKey:r,onChange:function(g){a&&a(g)},tabBarExtraContent:i},s),t==null?void 0:t.map(function(f,g){return o.createElement(Ae.Z.TabPane,_({},f,{tab:f.tab,key:f.key||g}))})):null},Ut=function(e,t,r){return!e&&!t?null:o.createElement("div",{className:"".concat(r,"-detail")},o.createElement("div",{className:"".concat(r,"-main")},o.createElement("div",{className:"".concat(r,"-row")},e&&o.createElement("div",{className:"".concat(r,"-content")},e),t&&o.createElement("div",{className:"".concat(r,"-extraContent")},t))))},dr=function(e){var t=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_({},t==null?void 0:t.breadcrumb,t==null?void 0:t.breadcrumbProps,e)))},zt=function(e){var t,r=(0,o.useContext)(be.Z),a=e.title,i=e.content,s=e.pageHeaderRender,c=e.header,f=e.prefixedClassName,g=e.extraContent,m=e.style,p=e.prefixCls,u=e.breadcrumbRender,h=Le(e,It),b=(0,o.useMemo)(function(){if(!!u)return u},[u]);if(s===!1)return null;if(s)return o.createElement(o.Fragment,null," ",s(k(k({},e),r)));var w=a;!a&&a!==!1&&(w=r.title);var x=k(k(k({},r),{},{title:w},h),{},{footer:Wt(k(k({},h),{},{breadcrumbRender:u,prefixedClassName:f}))},c),O=x.breadcrumb,z=(!O||!(O==null?void 0:O.itemRender)&&!(O==null||(t=O.routes)===null||t===void 0?void 0:t.length))&&!u;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(B){return!x[B]})&&z&&!i&&!g?null:o.createElement("div",{className:"".concat(f,"-warp")},o.createElement(Ct,_({},x,{breadcrumb:u===!1?void 0:k(k({},x.breadcrumb),r.breadcrumbProps),breadcrumbRender:b,prefixCls:p}),(c==null?void 0:c.children)||Ut(i,g,f)))},Kt=function(e){var t,r=e.children,a=e.loading,i=a===void 0?!1:a,s=e.className,c=e.style,f=e.footer,g=e.affixProps,m=e.ghost,p=e.fixedHeader,u=Le(e,Lt),h=(0,o.useContext)(be.Z),b=(0,o.useContext)(ie.ZP.ConfigContext),w=b.getPrefixCls,x=e.prefixCls||w("pro"),O="".concat(x,"-page-container"),z=L()(O,s,(t={},Pe(t,"".concat(x,"-page-container-ghost"),m),Pe(t,"".concat(x,"-page-container-with-footer"),f),t)),B=(0,o.useMemo)(function(){return r?o.createElement(o.Fragment,null,o.createElement("div",{className:"".concat(O,"-children-content")},r),h.hasFooterToolbar&&o.createElement("div",{style:{height:48,marginTop:24}})):null},[r,O,h.hasFooterToolbar]),T=o.createElement(zt,_({},u,{ghost:m,prefixCls:void 0,prefixedClassName:O})),N=(0,o.useMemo)(function(){if(o.isValidElement(i))return i;if(typeof i=="boolean"&&!i)return null;var H=Ht(i);return o.createElement(Rt.Z,H)},[i]),Z=(0,o.useMemo)(function(){var H=N||B;return e.waterMarkProps||h.waterMarkProps?o.createElement(Mt,e.waterMarkProps||h.waterMarkProps,H):H},[e.waterMarkProps,h.waterMarkProps,N,B]);return o.createElement("div",{style:c,className:z},p&&T?o.createElement(re,_({offsetTop:h.hasHeader&&h.fixedHeader?h.headerHeight:0},g),T):T,Z&&o.createElement(Et,null,Z),f&&o.createElement(Nt.Z,{prefixCls:x},f))},$t=Kt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},34952:function(ce,W,l){"use strict";var j=l(22122),M=l(67294),C=l(15105),D=function(R,V){var U={};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&V.indexOf(o)<0&&(U[o]=R[o]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var A=0,o=Object.getOwnPropertySymbols(R);A<o.length;A++)V.indexOf(o[A])<0&&Object.prototype.propertyIsEnumerable.call(R,o[A])&&(U[o[A]]=R[o[A]]);return U},K={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Y=M.forwardRef(function(R,V){var U=function($){var v=$.keyCode;v===C.Z.ENTER&&$.preventDefault()},o=function($){var v=$.keyCode,d=R.onClick;v===C.Z.ENTER&&d&&d()},A=R.style,L=R.noStyle,J=R.disabled,ee=D(R,["style","noStyle","disabled"]),I={};return L||(I=(0,j.Z)({},K)),J&&(I.pointerEvents="none"),I=(0,j.Z)((0,j.Z)({},I),A),M.createElement("div",(0,j.Z)({role:"button",tabIndex:0,ref:V},ee,{onKeyDown:U,onKeyUp:o,style:I}))});W.Z=Y},97435:function(ce,W){"use strict";function l(j,M){for(var C=Object.assign({},j),D=0;D<M.length;D+=1){var K=M[D];delete C[K]}return C}W.Z=l}}]);
