(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[61],{57838:function(fe,H,p){"use strict";p.d(H,{Z:function(){return I}});var d=p(28481),U=p(67294);function I(){var x=U.useReducer(function(v){return v+1},0),u=(0,d.Z)(x,2),s=u[1];return s}},12435:function(fe,H,p){"use strict";p.d(H,{Z:function(){return Z}});var d=p(85061),U=p(6610),I=p(74204),x=p(70183),u=[],s="ant-scrolling-effect",v=new RegExp("".concat(s),"g"),g=0,V=new Map,Z=function j(ue){var y=this;(0,U.Z)(this,j),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var R;return(R=y.options)===null||R===void 0?void 0:R.container},this.reLock=function(R){var T=u.find(function(m){var P=m.target;return P===y.lockTarget});T&&y.unLock(),y.options=R,T&&(T.options=R,y.lock())},this.lock=function(){var R;if(!u.some(function(E){var w=E.target;return w===y.lockTarget})){if(u.some(function(E){var w,B=E.options;return(B==null?void 0:B.container)===((w=y.options)===null||w===void 0?void 0:w.container)})){u=[].concat((0,d.Z)(u),[{target:y.lockTarget,options:y.options}]);return}var T=0,m=((R=y.options)===null||R===void 0?void 0:R.container)||document.body;(m===document.body&&window.innerWidth-document.documentElement.clientWidth>0||m.scrollHeight>m.clientHeight)&&(T=(0,I.Z)());var P=m.className;if(u.filter(function(E){var w,B=E.options;return(B==null?void 0:B.container)===((w=y.options)===null||w===void 0?void 0:w.container)}).length===0&&V.set(m,(0,x.Z)({width:T!==0?"calc(100% - ".concat(T,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:m})),!v.test(P)){var q="".concat(P," ").concat(s);m.className=q.trim()}u=[].concat((0,d.Z)(u),[{target:y.lockTarget,options:y.options}])}},this.unLock=function(){var R,T=u.find(function(q){var E=q.target;return E===y.lockTarget});if(u=u.filter(function(q){var E=q.target;return E!==y.lockTarget}),!(!T||u.some(function(q){var E,w=q.options;return(w==null?void 0:w.container)===((E=T.options)===null||E===void 0?void 0:E.container)}))){var m=((R=y.options)===null||R===void 0?void 0:R.container)||document.body,P=m.className;!v.test(P)||((0,x.Z)(V.get(m),{element:m}),V.delete(m),m.className=m.className.replace(v,"").trim())}},this.lockTarget=g++,this.options=ue}},96633:function(fe,H,p){"use strict";p.d(H,{Z:function(){return ke}});var d=p(6610),U=p(5991),I=p(10379),x=p(93144),u=p(90484),s=p(67294),v=p(75164),g=p(59015),V=p(98924),Z=p(74204),j=p(70183);function ue(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var y={},R=function(ee){if(!(!ue()&&!ee)){var W="ant-scrolling-effect",M=new RegExp("".concat(W),"g"),_=document.body.className;if(ee){if(!M.test(_))return;(0,j.Z)(y),y={},document.body.className=_.replace(M,"").trim();return}var o=(0,Z.Z)();if(o&&(y=(0,j.Z)({position:"relative",width:"calc(100% - ".concat(o,"px)")}),!M.test(_))){var b="".concat(_," ").concat(W);document.body.className=b.trim()}}},T=p(12435),m=0,P=(0,V.Z)();function q(){return 0}var E={},w=function(W){if(!P)return null;if(W){if(typeof W=="string")return document.querySelectorAll(W)[0];if(typeof W=="function")return W();if((0,u.Z)(W)==="object"&&W instanceof window.HTMLElement)return W}return document.body},B=function(ee){(0,I.Z)(M,ee);var W=(0,x.Z)(M);function M(_){var o;return(0,d.Z)(this,M),o=W.call(this,_),o.container=void 0,o.componentRef=s.createRef(),o.rafId=void 0,o.scrollLocker=void 0,o.renderComponent=void 0,o.updateScrollLocker=function(b){var C=b||{},G=C.visible,J=o.props,X=J.getContainer,re=J.visible;re&&re!==G&&P&&w(X)!==o.scrollLocker.getContainer()&&o.scrollLocker.reLock({container:w(X)})},o.updateOpenCount=function(b){var C=b||{},G=C.visible,J=C.getContainer,X=o.props,re=X.visible,se=X.getContainer;re!==G&&P&&w(se)===document.body&&(re&&!G?m+=1:b&&(m-=1));var be=typeof se=="function"&&typeof J=="function";(be?se.toString()!==J.toString():se!==J)&&o.removeCurrentContainer()},o.attachToParent=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(b||o.container&&!o.container.parentNode){var C=w(o.props.getContainer);return C?(C.appendChild(o.container),!0):!1}return!0},o.getContainer=function(){return P?(o.container||(o.container=document.createElement("div"),o.attachToParent(!0)),o.setWrapperClassName(),o.container):null},o.setWrapperClassName=function(){var b=o.props.wrapperClassName;o.container&&b&&b!==o.container.className&&(o.container.className=b)},o.removeCurrentContainer=function(){var b,C;(b=o.container)===null||b===void 0||(C=b.parentNode)===null||C===void 0||C.removeChild(o.container)},o.switchScrollingEffect=function(){m===1&&!Object.keys(E).length?(R(),E=(0,j.Z)({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):m||((0,j.Z)(E),E={},R(!0))},o.scrollLocker=new T.Z({container:w(_.getContainer)}),o}return(0,U.Z)(M,[{key:"componentDidMount",value:function(){var o=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,v.Z)(function(){o.forceUpdate()}))}},{key:"componentDidUpdate",value:function(o){this.updateOpenCount(o),this.updateScrollLocker(o),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var o=this.props,b=o.visible,C=o.getContainer;P&&w(C)===document.body&&(m=b&&m?m-1:m),this.removeCurrentContainer(),v.Z.cancel(this.rafId)}},{key:"render",value:function(){var o=this.props,b=o.children,C=o.forceRender,G=o.visible,J=null,X={getOpenCount:function(){return m},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(C||G||this.componentRef.current)&&(J=s.createElement(g.Z,{getContainer:this.getContainer,ref:this.componentRef},b(X))),J}}]),M}(s.Component),ke=B},74204:function(fe,H,p){"use strict";p.d(H,{Z:function(){return U},o:function(){return x}});var d;function U(u){if(typeof document=="undefined")return 0;if(u||d===void 0){var s=document.createElement("div");s.style.width="100%",s.style.height="200px";var v=document.createElement("div"),g=v.style;g.position="absolute",g.top="0",g.left="0",g.pointerEvents="none",g.visibility="hidden",g.width="200px",g.height="150px",g.overflow="hidden",v.appendChild(s),document.body.appendChild(v);var V=s.offsetWidth;v.style.overflow="scroll";var Z=s.offsetWidth;V===Z&&(Z=v.clientWidth),document.body.removeChild(v),d=V-Z}return d}function I(u){var s=u.match(/^(.*)px$/),v=Number(s==null?void 0:s[1]);return Number.isNaN(v)?U():v}function x(u){if(typeof document=="undefined"||!u||!(u instanceof Element))return{width:0,height:0};var s=getComputedStyle(u,"::-webkit-scrollbar"),v=s.width,g=s.height;return{width:I(v),height:I(g)}}},70183:function(fe,H){"use strict";function p(d){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!d)return{};var I=U.element,x=I===void 0?document.body:I,u={},s=Object.keys(d);return s.forEach(function(v){u[v]=x.style[v]}),s.forEach(function(v){x.style[v]=d[v]}),u}H.Z=p},40821:function(fe,H,p){"use strict";p.d(H,{ZP:function(){return Ke},JG:function(){return Me}});var d=p(67294);function U(e,r,n,i){return new(n||(n=Promise))(function(t,f){function c(k){try{O(i.next(k))}catch(a){f(a)}}function h(k){try{O(i.throw(k))}catch(a){f(a)}}function O(k){var a;k.done?t(k.value):(a=k.value,a instanceof n?a:new n(function(L){L(a)})).then(c,h)}O((i=i.apply(e,r||[])).next())})}function I(e,r){var n,i,t,f,c={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return f={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function h(O){return function(k){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,i&&(t=2&a[0]?i.return:a[0]?i.throw||((t=i.return)&&t.call(i),0):i.next)&&!(t=t.call(i,a[1])).done)return t;switch(i=0,t&&(a=[2&a[0],t.value]),a[0]){case 0:case 1:t=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,i=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(t=c.trys,!((t=t.length>0&&t[t.length-1])||a[0]!==6&&a[0]!==2)){c=0;continue}if(a[0]===3&&(!t||a[1]>t[0]&&a[1]<t[3])){c.label=a[1];break}if(a[0]===6&&c.label<t[1]){c.label=t[1],t=a;break}if(t&&c.label<t[2]){c.label=t[2],c.ops.push(a);break}t[2]&&c.ops.pop(),c.trys.pop();continue}a=r.call(e,c)}catch(L){a=[6,L],i=0}finally{n=t=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([O,k])}}}var x,u=function(){},s=u(),v=Object,g=function(e){return e===s},V=function(e){return typeof e=="function"},Z=function(e,r){return v.assign({},e,r)},j=typeof window!="undefined",ue=typeof document!="undefined",y=new WeakMap,R=0,T=function(e){var r,n,i=typeof e,t=e&&e.constructor,f=t==Date;if(v(e)!==e||f||t==RegExp)r=f?e.toJSON():i=="symbol"?e.toString():i=="string"?JSON.stringify(e):""+e;else{if(r=y.get(e))return r;if(r=++R+"~",y.set(e,r),t==Array){for(r="@",n=0;n<e.length;n++)r+=T(e[n])+",";y.set(e,r)}if(t==v){r="#";for(var c=v.keys(e).sort();!g(n=c.pop());)g(e[n])||(r+=n+":"+T(e[n])+",");y.set(e,r)}}return r},m=!0,P=j?window.addEventListener.bind(window):u,q=ue?document.addEventListener.bind(document):u,E=j&&removeEventListener||u,w=ue?document.removeEventListener.bind(document):u,B={isOnline:function(){return m},isVisible:function(){var e=ue&&document.visibilityState;return!!g(e)||e!=="hidden"}},ke={initFocus:function(e){return q("visibilitychange",e),P("focus",e),function(){w("visibilitychange",e),E("focus",e)}},initReconnect:function(e){var r=function(){m=!0,e()},n=function(){m=!1};return P("online",r),P("offline",n),function(){E("online",r),E("offline",n)}}},ee=!j||"Deno"in window,W=j&&window.requestAnimationFrame||function(e){return setTimeout(e,1)},M=ee?d.useEffect:d.useLayoutEffect,_=typeof navigator!="undefined"&&navigator.connection,o=!ee&&_&&(["slow-2g","2g"].includes(_.effectiveType)||_.saveData),b=function(e){if(V(e))try{e=e()}catch(n){e=""}var r=[].concat(e);return[e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?T(e):"",r,e?"$err$"+e:"",e?"$req$"+e:""]},C=new WeakMap,G=function(e,r,n,i,t,f){for(var c=C.get(e),h=c[0],O=c[1],k=c[4],a=c[5],L=h[r],ne=O[r]||[],$=0;$<ne.length;++$)ne[$](n,i,t);return f&&(delete k[r],delete a[r],L&&L[0])?L[0](2).then(function(){return e.get(r)}):e.get(r)},J=0,X=function(){return++J},re=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return U(void 0,void 0,void 0,function(){var n,i,t,f,c,h,O,k,a,L,ne,$,de,ve;return I(this,function(ie){switch(ie.label){case 0:if(n=e[0],i=e[1],t=e[3]!==!1,f=e[2],c=b(i),h=c[0],O=c[2],!h)return[2];if(k=C.get(n),a=k[2],L=k[3],e.length<3)return[2,G(n,h,n.get(h),n.get(O),s,t)];if(de=a[h]=X(),L[h]=0,V(f))try{f=f(n.get(h))}catch(oe){$=oe}return f&&V(f.then)?[4,f.catch(function(oe){$=oe})]:[3,2];case 1:if(ne=ie.sent(),de!==a[h]){if($)throw $;return[2,ne]}return[3,3];case 2:ne=f,ie.label=3;case 3:return $||n.set(h,ne),n.set(O,$),L[h]=X(),[4,G(n,h,ne,$,s,t)];case 4:if(ve=ie.sent(),$)throw $;return[2,ve]}})})},se=function(e,r){for(var n in e)e[n][0]&&e[n][0](r)},be=function(e,r){if(!C.has(e)){var n=Z(ke,r),i={},t=re.bind(s,e),f=u;if(C.set(e,[i,{},{},{},{},{},t]),!ee){var c=n.initFocus(se.bind(s,i,0)),h=n.initReconnect(se.bind(s,i,1));f=function(){c&&c(),h&&h(),C.delete(e)}}return[e,t,f]}return[e,C.get(e)[6]]},Ze=be(new Map),We=Ze[0],Me=Ze[1],_e=Z({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:function(e,r,n,i,t){if(B.isVisible()){var f=n.errorRetryCount,c=t.retryCount,h=~~((Math.random()+.5)*(1<<(c<8?c:8)))*n.errorRetryInterval;!g(f)&&c>f||setTimeout(i,h,t)}},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:o?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:o?5e3:3e3,compare:function(e,r){return T(e)==T(r)},isPaused:function(){return!1},cache:We,mutate:Me,fallback:{}},B),$e=function(e,r){var n=Z(e,r);if(r){var i=e.use,t=e.fallback,f=r.use,c=r.fallback;i&&f&&(n.use=i.concat(f)),t&&c&&(n.fallback=Z(t,c))}return n},Re=(0,d.createContext)({}),Be=function(e){return V(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},Ae=function(){return Z(_e,(0,d.useContext)(Re))},Ie=function(e,r,n){var i=r[e]||(r[e]=[]);return i.push(n),function(){var t=i.indexOf(n);t>=0&&(i[t]=i[i.length-1],i.pop())}},Oe={dedupe:!0},je=v.defineProperty(function(e){var r=e.value,n=$e((0,d.useContext)(Re),r),i=r&&r.provider,t=(0,d.useState)(function(){return i?be(i(n.cache||We),r):s})[0];return t&&(n.cache=t[0],n.mutate=t[1]),M(function(){return t?t[2]:s},[]),(0,d.createElement)(Re.Provider,Z(e,{value:n}))},"default",{value:_e}),Ge=function(e){return b(e)[0]},Ke=(x=function(e,r,n){var i=n.cache,t=n.compare,f=n.fallbackData,c=n.suspense,h=n.revalidateOnMount,O=n.refreshInterval,k=n.refreshWhenHidden,a=n.refreshWhenOffline,L=C.get(i),ne=L[0],$=L[1],de=L[2],ve=L[3],ie=L[4],oe=L[5],Ce=b(e),l=Ce[0],ze=Ce[1],Se=Ce[2],Te=Ce[3],Ee=(0,d.useRef)(!1),he=(0,d.useRef)(!1),Le=(0,d.useRef)(l),xe=(0,d.useRef)(n),D=function(){return xe.current},Ue=i.get(l),Fe=g(f)?n.fallback[l]:f,ae=g(Ue)?Fe:Ue,pe=i.get(Se),Ve=function(){return g(h)?!D().isPaused()&&(c?!g(ae):g(ae)||n.revalidateIfStale):h},Ne=!(!l||!r)&&(!!i.get(Te)||!Ee.current&&Ve()),Pe=function(A,N){var K=(0,d.useState)({})[1],te=(0,d.useRef)(A),ce=(0,d.useRef)({data:!1,error:!1,isValidating:!1}),z=(0,d.useCallback)(function(S){var Y=!1,F=te.current;for(var ge in S){var Q=ge;F[Q]!==S[Q]&&(F[Q]=S[Q],ce.current[Q]&&(Y=!0))}Y&&!N.current&&K({})},[]);return M(function(){te.current=A}),[te,ce.current,z]}({data:ae,error:pe,isValidating:Ne},he),me=Pe[0],De=Pe[1],we=Pe[2],le=(0,d.useCallback)(function(A){return U(void 0,void 0,void 0,function(){var N,K,te,ce,z,S,Y,F,ge,Q;return I(this,function(ye){switch(ye.label){case 0:if(!l||!r||he.current||D().isPaused())return[2,!1];te=!0,ce=A||{},z=g(ie[l])||!ce.dedupe,S=function(){return!he.current&&l===Le.current&&Ee.current},Y=function(){oe[l]===K&&(delete ie[l],delete oe[l])},F={isValidating:!1},ge=function(){i.set(Te,!1),S()&&we(F)},i.set(Te,!0),we({isValidating:!0}),ye.label=1;case 1:return ye.trys.push([1,3,,4]),z&&(G(i,l,me.current.data,me.current.error,!0),n.loadingTimeout&&!i.get(l)&&setTimeout(function(){te&&S()&&D().onLoadingSlow(l,n)},n.loadingTimeout),oe[l]=X(),ie[l]=r.apply(void 0,ze)),K=oe[l],[4,ie[l]];case 2:return N=ye.sent(),z&&setTimeout(Y,n.dedupingInterval),oe[l]!==K?(z&&S()&&D().onDiscarded(l),[2,!1]):(i.set(Se,s),F.error=s,!g(de[l])&&(K<=de[l]||K<=ve[l]||ve[l]===0)?(ge(),z&&S()&&D().onDiscarded(l),[2,!1]):(t(me.current.data,N)||(F.data=N),t(i.get(l),N)||i.set(l,N),z&&S()&&D().onSuccess(N,l,n),[3,4]));case 3:return Q=ye.sent(),Y(),D().isPaused()||(i.set(Se,Q),F.error=Q,z&&S()&&(D().onError(Q,l,n),n.shouldRetryOnError&&D().onErrorRetry(Q,l,n,le,{retryCount:(ce.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return te=!1,ge(),S()&&z&&G(i,l,F.data,F.error,!1),[2,!0]}})})},[l]),He=(0,d.useCallback)(re.bind(s,i,function(){return Le.current}),[]);if(M(function(){xe.current=n}),M(function(){if(l){var A=Ee.current,N=le.bind(s,Oe),K=function(){return D().isVisible()&&D().isOnline()},te=0,ce=Ie(l,$,function(S,Y,F){we(Z({error:Y,isValidating:F},t(me.current.data,S)?s:{data:S}))}),z=Ie(l,ne,function(S){if(S==0){var Y=Date.now();D().revalidateOnFocus&&Y>te&&K()&&(te=Y+D().focusThrottleInterval,N())}else if(S==1)D().revalidateOnReconnect&&K()&&N();else if(S==2)return le()});return he.current=!1,Le.current=l,Ee.current=!0,A&&we({data:ae,error:pe,isValidating:Ne}),Ve()&&(g(ae)||ee?N():W(N)),function(){he.current=!0,ce(),z()}}},[l,le]),M(function(){var A;function N(){O&&A!==-1&&(A=setTimeout(K,O))}function K(){me.current.error||!k&&!D().isVisible()||!a&&!D().isOnline()?N():le(Oe).then(N)}return N(),function(){A&&(clearTimeout(A),A=-1)}},[O,k,a,le]),(0,d.useDebugValue)(ae),c&&g(ae))throw g(pe)?le(Oe):pe;return{mutate:He,get data(){return De.data=!0,ae},get error(){return De.error=!0,pe},get isValidating(){return De.isValidating=!0,Ne}}},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=Ae(),i=Be(e),t=i[0],f=i[1],c=i[2],h=$e(n,c),O=x,k=h.use;if(k)for(var a=k.length;a-- >0;)O=k[a](O);return O(t,f||h.fetcher,h)})}}]);