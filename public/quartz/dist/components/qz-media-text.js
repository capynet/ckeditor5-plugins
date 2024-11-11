(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[6157,1372],{3611:function(e,t,i){e.exports=i.p+"quartz.css"},4030:function(e,t,i){"use strict";i.d(t,{w:function(){return n}});var a=i(7220);i(3611);class n extends a.oi{static get baseStyles(){var e;const t=null!==(e=window.quartzBaseStylesPath)&&void 0!==e?e:"quartz.css";return a.dy`<link rel="stylesheet" href="${t}" />`}static get styles(){return[]}render(){return a.dy`<slot></slot>`}}},2389:function(e,t,i){"use strict";var a=i(7220),n=i(8111),d=i(4030),s=function(e,t,i,a){var n,d=arguments.length,s=d<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(s=(d<3?n(s):d>3?n(t,i,s):n(t,i))||s);return d>3&&s&&Object.defineProperty(t,i,s),s};let r=class extends d.w{static get styles(){return[a.iv`
        ${(0,a.$m)(":host{display:block}@media (min-width:1024px){.media-text{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between}}.media-text__content{padding-top:2rem}@media (min-width:1024px){.media-text__content{padding-left:.5rem;padding-top:0;width:41.666667%}.media-text__media{padding-right:.5rem;width:50%}:host([media-align=right]) .media-text__content{padding-left:0}:host([media-align=right]) .media-text__content{padding-right:.5rem}:host([media-align=right]) .media-text__media{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}:host([media-align=right]) .media-text__media{padding-right:0}:host([media-align=right]) .media-text__media{padding-left:.5rem}}")}
      `]}render(){return a.dy`
      ${d.w.baseStyles}
      <div class="media-text">
        <div class="media-text__media">
          <slot name="media"></slot>
        </div>
        <div class="media-text__content">
          <slot></slot>
        </div>
      </div>
    `}};s([(0,n.Cb)({type:String,attribute:"media-align"})],r.prototype,"mediaAlign",void 0),r=s([(0,n.Mo)("qz-media-text")],r)}},function(e){e.O(0,[4736],(function(){return t=2389,e(e.s=t);var t}));e.O()}]);