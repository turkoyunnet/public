(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9443],{49177:function(e,t,o){"use strict";t.Z=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=function e(t){var o,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(n=e(t[o]))&&(r&&(r+=" "),r+=n);else for(o in t)t[o]&&(r&&(r+=" "),r+=o)}return r}(e))&&(n&&(n+=" "),n+=t);return n}},48021:function(e,t,o){e.exports=o(79623)},8345:function(e,t,o){"use strict";function n(e,t,n,r){{let l=o(47949).normalizeLocalePath,u=o(6455).detectDomainLocale,a=t||l(e,n).detectedLocale,f=u(r,void 0,a);if(f){let t="http".concat(f.http?"":"s","://"),o=a===f.defaultLocale?"":"/".concat(a);return"".concat(t).concat(f.domain).concat("").concat(o).concat(e)}return!1}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},79623:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=o(23353),r=o(45569),l=o(63637),u=r._(o(11470)),a=o(1942),f=o(18602),c=o(50004),i=o(90693),s=o(87296),d=o(37793),p=o(71303),y=o(59146),b=o(8345),h=o(14456),v=new Set;function g(e,t,o,n,r){if(r||(0,f.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let m=u.default.forwardRef(function(e,t){let o,r;let{href:c,as:v,children:m,prefetch:j,passHref:M,replace:P,shallow:C,scroll:O,locale:k,onClick:L,onMouseEnter:E,onTouchStart:x,legacyBehavior:w=!1}=e,R=l._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=m,w&&("string"==typeof o||"number"==typeof o)&&(o=u.default.createElement("a",null,o));let I=!1!==j,S=u.default.useContext(d.RouterContext),T=u.default.useContext(p.AppRouterContext),A=null!=S?S:T,D=!S,{href:U,as:z}=u.default.useMemo(()=>{if(!S){let e=_(c);return{href:e,as:v?_(v):e}}let[e,t]=(0,a.resolveHref)(S,c,!0);return{href:e,as:v?(0,a.resolveHref)(S,v):t||e}},[S,c,v]),K=u.default.useRef(U),N=u.default.useRef(z);w&&(r=u.default.Children.only(o));let H=w?r&&"object"==typeof r&&r.ref:t,[B,q,Z]=(0,y.useIntersection)({rootMargin:"200px"}),F=u.default.useCallback(e=>{(N.current!==z||K.current!==U)&&(Z(),N.current=z,K.current=U),B(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[z,H,U,Z,B]);u.default.useEffect(()=>{A&&q&&I&&g(A,U,z,{locale:k},D)},[z,U,q,k,I,null==S?void 0:S.locale,A,D]);let G={ref:F,onClick(e){w||"function"!=typeof L||L(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,o,n,r,l,a,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,f.isLocalURL)(o)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:l,locale:c,scroll:a}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?u.default.startTransition(y):y()}(e,A,U,z,P,C,O,k,D,I)},onMouseEnter(e){w||"function"!=typeof E||E(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(I||!D)&&g(A,U,z,{locale:k,priority:!0,bypassPrefetchedCheck:!0},D)},onTouchStart(e){w||"function"!=typeof x||x(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(I||!D)&&g(A,U,z,{locale:k,priority:!0,bypassPrefetchedCheck:!0},D)}};if((0,i.isAbsoluteUrl)(z))G.href=z;else if(!w||M||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,b.getDomainLocale)(z,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);G.href=t||(0,h.addBasePath)((0,s.addLocale)(z,e,null==S?void 0:S.defaultLocale))}return w?u.default.cloneElement(r,G):u.default.createElement("a",n._({},R,G),o)}),j=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},47949:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return n}});let n=(e,t)=>o(43968).normalizeLocalePath(e,t);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},59146:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let n=o(11470),r=o(12910),l="function"==typeof IntersectionObserver,u=new Map,a=[];function f(e){let{rootRef:t,rootMargin:o,disabled:f}=e,c=f||!l,[i,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},a.push(o),u.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!i){let e=(0,r.requestIdleCallback)(()=>s(!0));return()=>(0,r.cancelIdleCallback)(e)}},[c,o,t,i,d.current]);let y=(0,n.useCallback)(()=>{s(!1)},[]);return[p,i,y]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);