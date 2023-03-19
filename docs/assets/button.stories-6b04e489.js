import{r as _}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";var u={},y={get exports(){return u},set exports(t){u=t}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=_,g=Symbol.for("react.element"),x=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,P=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,a){var o,r={},n=null,i=null;a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(i=e.ref);for(o in e)b.call(e,o)&&!E.hasOwnProperty(o)&&(r[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)r[o]===void 0&&(r[o]=e[o]);return{$$typeof:g,type:t,key:n,ref:i,props:r,_owner:P.current}}l.Fragment=x;l.jsx=f;l.jsxs=f;(function(t){t.exports=l})(y);const w=u.jsx;const d=({view:t="common",size:e="m",rounded:a=!1,noXPadding:o=!1,children:r,...n})=>w("button",{className:`button button_${t} button_${e} ${a&&"button_rounded"} ${o&&"button_noXPadding"}`,...n,children:r});try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{view:{defaultValue:{value:"common"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"common"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},noXPadding:{defaultValue:{value:"false"},description:"",name:"noXPadding",required:!1,type:{name:"boolean"}}}}}catch{}const B={title:"Example/Button",component:d,tags:["docsPage"],argTypes:{children:{control:{type:"text"}},view:{control:{type:"select"}},size:{control:{type:"select"}},rounded:{control:{type:"boolean"}},noXPadding:{control:{type:"boolean"}}}},s={args:{children:"Button",view:"primary",size:"m",rounded:!1,noXPadding:!1}};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    view: 'primary',
    size: 'm',
    rounded: false,
    noXPadding: false
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const R=["Playground"];export{s as Playground,R as __namedExportsOrder,B as default};
//# sourceMappingURL=button.stories-6b04e489.js.map
