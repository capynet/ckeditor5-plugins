(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[3769,1372],{3611:function(e,t,r){e.exports=r.p+"quartz.css"},4030:function(e,t,r){"use strict";r.d(t,{w:function(){return s}});var n=r(7220);r(3611);class s extends n.oi{static get baseStyles(){var e;const t=null!==(e=window.quartzBaseStylesPath)&&void 0!==e?e:"quartz.css";return n.dy`<link rel="stylesheet" href="${t}" />`}static get styles(){return[]}render(){return n.dy`<slot></slot>`}}},7618:function(e,t,r){"use strict";var n=r(7220),s=r(8111),c=r(4030),i=function(e,t,r,n){var s,c=arguments.length,i=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(c<3?s(i):c>3?s(t,r,i):s(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};let a=class extends c.w{constructor(){super(...arguments),this.currentPage=0,this.pages=0}static get styles(){return[n.iv`
        ${(0,n.$m)(":host{width:100%}.pager{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.pager,.pages{display:-webkit-box;display:-ms-flexbox;display:flex;gap:.25rem}.pages{width:100%}")}
      `]}clickHandler(e){const t=new CustomEvent("page-change",{detail:e,bubbles:!0});this.dispatchEvent(t)}render(){return n.dy`
      ${c.w.baseStyles}
      <div class="pager">
        <qz-button
          ?disabled=${0===this.currentPage}
          outline
          icon
          @click=${()=>this.clickHandler(this.currentPage-1)}
        >
          <qz-icon name="caret-left" />
        </qz-button>

        <div className="pages">
          ${Array.from({length:this.pages}).map(((e,t)=>n.dy`
              <qz-button
                ?outline=${t!==this.currentPage}
                icon
                @click=${()=>this.clickHandler(t)}
              >
                ${t+1}
              </qz-button>
            `))}
        </div>

        <qz-button
          ?disabled=${this.currentPage===this.pages-1}
          outline
          icon
          @click=${()=>this.clickHandler(this.currentPage+1)}
        >
          <qz-icon name="caret-right" />
        </qz-button>
      </div>
    `}};i([(0,s.Cb)({type:Number,attribute:"current-page"})],a.prototype,"currentPage",void 0),i([(0,s.Cb)({type:Number})],a.prototype,"pages",void 0),a=i([(0,s.Mo)("qz-pager")],a)}},function(e){e.O(0,[4736],(function(){return t=7618,e(e.s=t);var t}));e.O()}]);