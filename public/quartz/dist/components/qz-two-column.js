(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[8510,1372],{3611:function(t,o,e){t.exports=e.p+"quartz.css"},4030:function(t,o,e){"use strict";e.d(o,{w:function(){return i}});var l=e(7220);e(3611);class i extends l.oi{static get baseStyles(){var t;const o=null!==(t=window.quartzBaseStylesPath)&&void 0!==t?t:"quartz.css";return l.dy`<link rel="stylesheet" href="${o}" />`}static get styles(){return[]}render(){return l.dy`<slot></slot>`}}},8880:function(t,o,e){"use strict";var l=e(7220),i=e(8111),c=e(4030),n=function(t,o,e,l){var i,c=arguments.length,n=c<3?o:null===l?l=Object.getOwnPropertyDescriptor(o,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,o,e,l);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(n=(c<3?i(n):c>3?i(o,e,n):i(o,e))||n);return c>3&&n&&Object.defineProperty(o,e,n),n};let r=class extends c.w{static get styles(){return[l.iv`
        ${(0,l.$m)(':host{display:block}.two-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;row-gap:1rem}@media (min-width:1024px){.two-column{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;row-gap:0}.two-column__col1{padding-right:.5rem}.two-column__col2{padding-left:.5rem}.two-column__col1,.two-column__col2,:host([ratio="6_6"]) .two-column__col1,:host([ratio="6_6"]) .two-column__col2{width:50%}:host([ratio="4_8"]) .two-column__col1{width:33.333333%}:host([ratio="4_8"]) .two-column__col2{width:66.666667%}:host([ratio="5_7"]) .two-column__col1{width:41.666667%}:host([ratio="5_7"]) .two-column__col2{width:58.333333%}:host([ratio="7_5"]) .two-column__col1{width:58.333333%}:host([ratio="7_5"]) .two-column__col2{width:41.666667%}:host([ratio="8_4"]) .two-column__col1{width:66.666667%}:host([ratio="8_4"]) .two-column__col2{width:33.333333%}}')}
      `]}render(){return l.dy`
      ${c.w.baseStyles}
      <div class="two-column">
        <div class="two-column__col1">
          <slot name="col1"></slot>
        </div>
        <div class="two-column__col2">
          <slot name="col2"></slot>
        </div>
      </div>
    `}};n([(0,i.Cb)({type:String})],r.prototype,"ratio",void 0),r=n([(0,i.Mo)("qz-two-column")],r)}},function(t){t.O(0,[4736],(function(){return o=8880,t(t.s=o);var o}));t.O()}]);