(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5352],{45904:function(e,t,r){"use strict";r.d(t,{NY:function(){return b},Ee:function(){return _},fC:function(){return Z}});var n=r(87462),o=r(67294),l=r(32707),a=r(95355),u=r(29563);r(73935);var i=r(17255);let c=(0,o.forwardRef)((e,t)=>{let{children:r,...l}=e,a=o.Children.toArray(r),u=a.find(f);if(u){let e=u.props.children,r=a.map(t=>t!==u?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(d,(0,n.Z)({},l,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,r):null)}return(0,o.createElement)(d,(0,n.Z)({},l,{ref:t}),r)});c.displayName="Slot";let d=(0,o.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,o.isValidElement)(r)?(0,o.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],l=t[n],a=/^on[A-Z]/.test(n);a?o&&l?r[n]=(...e)=>{l(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...l}:"className"===n&&(r[n]=[o,l].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:(0,i.F)(t,r.ref)}):o.Children.count(r)>1?o.Children.only(null):null});d.displayName="SlotClone";let s=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function f(e){return(0,o.isValidElement)(e)&&e.type===s}let v=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:l,...a}=e,u=l?c:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(u,(0,n.Z)({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),m="Avatar",[p,g]=(0,l.b)(m),[h,E]=p(m),C=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,...l}=e,[a,u]=(0,o.useState)("idle");return(0,o.createElement)(h,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:u},(0,o.createElement)(v.span,(0,n.Z)({},l,{ref:t})))}),w=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:l,onLoadingStatusChange:i=()=>{},...c}=e,d=E("AvatarImage",r),s=function(e){let[t,r]=(0,o.useState)("idle");return(0,o.useEffect)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,o=e=>()=>{t&&r(e)};return r("loading"),n.onload=o("loaded"),n.onerror=o("error"),n.src=e,()=>{t=!1}},[e]),t}(l),f=(0,a.W)(e=>{i(e),d.onImageLoadingStatusChange(e)});return(0,u.b)(()=>{"idle"!==s&&f(s)},[s,f]),"loaded"===s?(0,o.createElement)(v.img,(0,n.Z)({},c,{ref:t,src:l})):null}),L=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:l,...a}=e,u=E("AvatarFallback",r),[i,c]=(0,o.useState)(void 0===l);return(0,o.useEffect)(()=>{if(void 0!==l){let e=window.setTimeout(()=>c(!0),l);return()=>window.clearTimeout(e)}},[l]),i&&"loaded"!==u.imageLoadingStatus?(0,o.createElement)(v.span,(0,n.Z)({},a,{ref:t})):null}),Z=C,_=w,b=L},48250:function(e,t,r){"use strict";r.d(t,{ck:function(){return R},fC:function(){return T}});var n=r(87462),o=r(67294),l=r(32707),a=r(40192),u=r(863),i=r(10869),c=r(39920),d=r(41931);let s="ToggleGroup",[f,v]=(0,l.b)(s,[u.Pc]),m=(0,u.Pc)(),p=o.forwardRef((e,t)=>{let{type:r,...l}=e;if("single"===r)return o.createElement(E,(0,n.Z)({},l,{ref:t}));if("multiple"===r)return o.createElement(C,(0,n.Z)({},l,{ref:t}));throw Error(`Missing prop \`type\` expected on \`${s}\``)}),[g,h]=f(s),E=o.forwardRef((e,t)=>{let{value:r,defaultValue:l,onValueChange:a=()=>{},...u}=e,[i,d]=(0,c.T)({prop:r,defaultProp:l,onChange:a});return o.createElement(g,{scope:e.__scopeToggleGroup,type:"single",value:i?[i]:[],onItemActivate:d,onItemDeactivate:o.useCallback(()=>d(""),[d])},o.createElement(Z,(0,n.Z)({},u,{ref:t})))}),C=o.forwardRef((e,t)=>{let{value:r,defaultValue:l,onValueChange:a=()=>{},...u}=e,[i=[],d]=(0,c.T)({prop:r,defaultProp:l,onChange:a}),s=o.useCallback(e=>d((t=[])=>[...t,e]),[d]),f=o.useCallback(e=>d((t=[])=>t.filter(t=>t!==e)),[d]);return o.createElement(g,{scope:e.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:s,onItemDeactivate:f},o.createElement(Z,(0,n.Z)({},u,{ref:t})))}),[w,L]=f(s),Z=o.forwardRef((e,t)=>{let{__scopeToggleGroup:r,disabled:l=!1,rovingFocus:i=!0,orientation:c,dir:s,loop:f=!0,...v}=e,p=m(r),g=(0,d.gm)(s),h={role:"group",dir:g,...v};return o.createElement(w,{scope:r,rovingFocus:i,disabled:l},i?o.createElement(u.fC,(0,n.Z)({asChild:!0},p,{orientation:c,dir:g,loop:f}),o.createElement(a.WV.div,(0,n.Z)({},h,{ref:t}))):o.createElement(a.WV.div,(0,n.Z)({},h,{ref:t})))}),_="ToggleGroupItem",b=o.forwardRef((e,t)=>{let r=h(_,e.__scopeToggleGroup),l=L(_,e.__scopeToggleGroup),a=m(e.__scopeToggleGroup),i=r.value.includes(e.value),c=l.disabled||e.disabled,d={...e,pressed:i,disabled:c},s=o.useRef(null);return l.rovingFocus?o.createElement(u.ck,(0,n.Z)({asChild:!0},a,{focusable:!c,active:i,ref:s}),o.createElement(y,(0,n.Z)({},d,{ref:t}))):o.createElement(y,(0,n.Z)({},d,{ref:t}))}),y=o.forwardRef((e,t)=>{let{__scopeToggleGroup:r,value:l,...a}=e,u=h(_,r),c={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},d="single"===u.type?c:void 0;return o.createElement(i.Z,(0,n.Z)({},d,a,{ref:t,onPressedChange:e=>{e?u.onItemActivate(l):u.onItemDeactivate(l)}}))}),T=p,R=b},10869:function(e,t,r){"use strict";r.d(t,{Z:function(){return i},f:function(){return c}});var n=r(87462),o=r(67294),l=r(76652),a=r(39920),u=r(40192);let i=(0,o.forwardRef)((e,t)=>{let{pressed:r,defaultPressed:i=!1,onPressedChange:c,...d}=e,[s=!1,f]=(0,a.T)({prop:r,onChange:c,defaultProp:i});return(0,o.createElement)(u.WV.button,(0,n.Z)({type:"button","aria-pressed":s,"data-state":s?"on":"off","data-disabled":e.disabled?"":void 0},d,{ref:t,onClick:(0,l.M)(e.onClick,()=>{e.disabled||f(!s)})}))}),c=i},14286:function(e,t,r){var n=r(15787).w_;e.exports.a=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20,7h-1.209C18.922,6.589,19,6.096,19,5.5C19,3.57,17.43,2,15.5,2c-1.622,0-2.705,1.482-3.404,3.085 C11.407,3.57,10.269,2,8.5,2C6.57,2,5,3.57,5,5.5C5,6.096,5.079,6.589,5.209,7H4C2.897,7,2,7.897,2,9v2c0,1.103,0.897,2,2,2v7 c0,1.103,0.897,2,2,2h5h2h5c1.103,0,2-0.897,2-2v-7c1.103,0,2-0.897,2-2V9C22,7.897,21.103,7,20,7z M15.5,4 C16.327,4,17,4.673,17,5.5C17,7,16.374,7,16,7h-2.478C14.033,5.424,14.775,4,15.5,4z M7,5.5C7,4.673,7.673,4,8.5,4 c0.888,0,1.714,1.525,2.198,3H8C7.626,7,7,7,7,5.5z M4,9h7v2H4V9z M6,20v-7h5v7H6z M18,20h-5v-7h5V20z M13,11V9.085 C13.005,9.057,13.011,9.028,13.017,9H20l0.001,2H13z"}}]})(e)}},3993:function(e,t,r){var n=r(15787).w_;e.exports.j=function(e){return n({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"}}]})(e)}},15952:function(e,t,r){var n=r(15787).w_;e.exports.Q=function(e){return n({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}},23665:function(e,t,r){"use strict";var n=r(67294),o=r(25852),l=r(9800),a=r(7638),u=r(81057),i=a.Z&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch);t.Z=function(e,t,r){var a=void 0===r?{}:r,c=a.delay,d=void 0===c?300:c,s=a.moveThreshold,f=a.onClick,v=a.onLongPressEnd,m=(0,o.Z)(e),p=(0,o.Z)(f),g=(0,o.Z)(v),h=(0,n.useRef)(),E=(0,n.useRef)(!1),C=(0,n.useRef)({x:0,y:0}),w=!!((null==s?void 0:s.x)&&s.x>0||(null==s?void 0:s.y)&&s.y>0);(0,u.Z)(function(){var e=(0,l.n)(t);if(null==e?void 0:e.addEventListener){var r=function(e){var t=c(e),r=t.clientX,n=t.clientY,o=Math.abs(r-C.current.x),l=Math.abs(n-C.current.y);return!!((null==s?void 0:s.x)&&o>s.x||(null==s?void 0:s.y)&&l>s.y)},n=function(e){if(w){var t=c(e),r=t.clientX,n=t.clientY;C.current.x=r,C.current.y=n}h.current=setTimeout(function(){m.current(e),E.current=!0},d)},o=function(e){h.current&&r(e)&&(clearInterval(h.current),h.current=void 0)},a=function(e,t){var r;void 0===t&&(t=!1),h.current&&clearTimeout(h.current),E.current&&(null===(r=g.current)||void 0===r||r.call(g,e)),t&&!E.current&&p.current&&p.current(e),E.current=!1},u=function(e){return a(e,!0)};return i?(e.addEventListener("touchstart",n),e.addEventListener("touchend",u),w&&e.addEventListener("touchmove",o)):(e.addEventListener("mousedown",n),e.addEventListener("mouseup",u),e.addEventListener("mouseleave",a),w&&e.addEventListener("mousemove",o)),function(){h.current&&(clearTimeout(h.current),E.current=!1),i?(e.removeEventListener("touchstart",n),e.removeEventListener("touchend",u),w&&e.removeEventListener("touchmove",o)):(e.removeEventListener("mousedown",n),e.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",a),w&&e.removeEventListener("mousemove",o))}}function c(e){return e instanceof TouchEvent?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:e instanceof MouseEvent?{clientX:e.clientX,clientY:e.clientY}:(console.warn("Unsupported event type"),{clientX:0,clientY:0})}},[],t)}}}]);