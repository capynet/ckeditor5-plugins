(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[5797,1372],{3611:function(e,t,i){e.exports=i.p+"quartz.css"},4030:function(e,t,i){"use strict";i.d(t,{w:function(){return r}});var n=i(7220);i(3611);class r extends n.oi{static get baseStyles(){var e;const t=null!==(e=window.quartzBaseStylesPath)&&void 0!==e?e:"quartz.css";return n.dy`<link rel="stylesheet" href="${t}" />`}static get styles(){return[]}render(){return n.dy`<slot></slot>`}}},8370:function(e,t,i){"use strict";var n=i(7220),r=i(8111),c=i(4030),o=function(e,t,i,n){var r,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(t,i,o):r(t,i))||o);return c>3&&o&&Object.defineProperty(t,i,o),o};let a=class extends c.w{static get styles(){return[n.iv`
        ${(0,n.$m)(".facet-wrapper{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;display:-webkit-box;display:-ms-flexbox;display:flex;row-gap:.5rem}.children{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem;margin-top:.5rem;padding-left:1rem;width:100%}.children,label{display:-webkit-box;display:-ms-flexbox;display:flex;gap:.5rem}label{-webkit-box-align:center;-ms-flex-align:center;align-items:center;white-space:nowrap}input{margin-bottom:.25rem}")}
      `]}checkHandler(e){const t=new CustomEvent("facet-change",{detail:{key:this.facetKey,active:e.target.checked},bubbles:!0});this.dispatchEvent(t)}updated(e){var t;super.updated(e);const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("input");i&&(this.active?i.checked=!0:i.checked=!1)}render(){const e=this.children.length>0;return n.dy`
      ${c.w.baseStyles}
      <div class="facet-wrapper">
        <input
          type="checkbox"
          id=${this.facetKey}
          name=${this.facetKey}
          value=${this.facetKey}
          ?checked=${this.active}
          @change=${this.checkHandler}
        />
        <label for=${this.facetKey}>
          ${this.label} ${this.showCount?n.dy`${this.count}`:n.Ld}
        </label>
      </div>
      ${e?n.dy` <div class="children">
            <slot></slot>
          </div>`:""}
    `}};o([(0,r.Cb)({type:String,attribute:"facet-key"})],a.prototype,"facetKey",void 0),o([(0,r.Cb)({type:String})],a.prototype,"active",void 0),o([(0,r.Cb)({type:Number})],a.prototype,"count",void 0),o([(0,r.Cb)({type:String,attribute:"show-count"})],a.prototype,"showCount",void 0),o([(0,r.Cb)({type:String})],a.prototype,"label",void 0),a=o([(0,r.Mo)("qz-checkbox-facet")],a)}},function(e){e.O(0,[4736],(function(){return t=8370,e(e.s=t);var t}));e.O()}]);