(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[8748,1372],{3611:function(e,t,s){e.exports=s.p+"quartz.css"},4030:function(e,t,s){"use strict";s.d(t,{w:function(){return n}});var r=s(7220);s(3611);class n extends r.oi{static get baseStyles(){var e;const t=null!==(e=window.quartzBaseStylesPath)&&void 0!==e?e:"quartz.css";return r.dy`<link rel="stylesheet" href="${t}" />`}static get styles(){return[]}render(){return r.dy`<slot></slot>`}}},9901:function(e,t,s){"use strict";var r=s(7220),n=s(8111),c=s(9407),l=s(4030),o=function(e,t,s,r){var n,c=arguments.length,l=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(c<3?n(l):c>3?n(t,s,l):n(t,s))||l);return c>3&&l&&Object.defineProperty(t,s,l),l};let i=class extends l.w{constructor(){super(...arguments),this.label=""}static get styles(){return[r.iv`
        ${(0,r.$m)("")}
      `]}refresh(){this.dispatchEvent(new CustomEvent("reset-search",{bubbles:!0}))}render(){return r.dy`
      ${l.w.baseStyles}
      <qz-button size="medium" @click=${this.refresh}>
        <qz-icon
          name="close"
          slot=${(0,c.o)(this.label?"start":void 0)}
        ></qz-icon>
        ${this.label?this.label:r.Ld}
      </qz-button>
    `}};o([(0,n.Cb)({type:String})],i.prototype,"label",void 0),i=o([(0,n.Mo)("qz-search-reset")],i)}},function(e){e.O(0,[4736],(function(){return t=9901,e(e.s=t);var t}));e.O()}]);