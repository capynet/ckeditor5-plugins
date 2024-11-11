(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[4657,1372],{3611:function(e,t,n){e.exports=n.p+"quartz.css"},4030:function(e,t,n){"use strict";n.d(t,{w:function(){return a}});var r=n(7220);n(3611);class a extends r.oi{static get baseStyles(){var e;const t=null!==(e=window.quartzBaseStylesPath)&&void 0!==e?e:"quartz.css";return r.dy`<link rel="stylesheet" href="${t}" />`}static get styles(){return[]}render(){return r.dy`<slot></slot>`}}},7098:function(e,t,n){"use strict";var r=n(7220),a=n(8111),i=n(4030),s=function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let c=class extends i.w{constructor(){super(...arguments),this.currentPage=0,this.pages=0,this.manualChangeActive=!1}static get styles(){return[r.iv`
        ${(0,r.$m)(":host{width:100%}.pager{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.pager,.pages{display:-webkit-box;display:-ms-flexbox;display:flex;gap:.25rem}.pages{width:100%}input{border-radius:4px;height:3rem;text-align:center;width:4rem}")}
      `]}clickHandler(e){const t=Math.min(Math.max(e,0),this.pages-1),n=new CustomEvent("page-change",{detail:t,bubbles:!0});this.dispatchEvent(n)}currentPageClickHandler(){this.manualChangeActive=!0,this.requestUpdate(),setTimeout((()=>{var e;null===(e=this.input)||void 0===e||e.select()}),0)}blurHandler(e){const t=parseInt(e.target.value,10);this.clickHandler(t-1),this.manualChangeActive=!1}enterHandler(e){"Enter"===e.key&&(this.clickHandler(this.currentPage),this.manualChangeActive=!1)}render(){return r.dy`
      ${i.w.baseStyles}
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
          ${this.manualChangeActive?r.dy`
                <input
                  type="number"
                  value=${this.currentPage}
                  @keydown=${this.enterHandler}
                  @blur=${this.blurHandler}
                  max=${this.pages}
                  min="1"
                />
              `:r.dy`
                <qz-button outline icon @click=${this.currentPageClickHandler}>
                  ${this.currentPage+1}
                </qz-button>
              `}
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
    `}};s([(0,a.Cb)({type:Number,attribute:"current-page"})],c.prototype,"currentPage",void 0),s([(0,a.Cb)({type:Number})],c.prototype,"pages",void 0),s([(0,a.Cb)({type:Boolean,attribute:"manual-change-active",reflect:!0})],c.prototype,"manualChangeActive",void 0),s([(0,a.IO)("input")],c.prototype,"input",void 0),c=s([(0,a.Mo)("qz-mini-pager")],c)}},function(e){e.O(0,[4736],(function(){return t=7098,e(e.s=t);var t}));e.O()}]);