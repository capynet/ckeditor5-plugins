(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[3148,1372],{3611:function(t,e,i){t.exports=i.p+"quartz.css"},4030:function(t,e,i){"use strict";i.d(e,{w:function(){return o}});var r=i(7220);i(3611);class o extends r.oi{static get baseStyles(){var t;const e=null!==(t=window.quartzBaseStylesPath)&&void 0!==t?t:"quartz.css";return r.dy`<link rel="stylesheet" href="${e}" />`}static get styles(){return[]}render(){return r.dy`<slot></slot>`}}},4247:function(t,e,i){"use strict";var r=i(7220),o=i(8111),s=i(4030),l=function(t,e,i,r){var o,s=arguments.length,l=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(s<3?o(l):s>3?o(e,i,l):o(e,i))||l);return s>3&&l&&Object.defineProperty(e,i,l),l};let a=class extends s.w{constructor(){super(...arguments),this.displayed=0,this.total=0,this.loadMoreText="Load More",this.middleText="of",this.unitText="items"}static get styles(){return[r.iv`
        ${(0,r.$m)(".load-more{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center}.load-more-text{font-size:.875rem;line-height:1.25rem;margin-top:2rem;text-align:center}.load-more-bar,.load-more-text{margin-bottom:1rem}.load-more-bar{--tw-bg-opacity:1;background-color:rgb(175 175 170/var(--tw-bg-opacity));border-radius:4px;height:.25rem;max-width:300px;width:80%}@media (min-width:640px){.load-more-bar{width:50%}}.load-more-value{background-color:var(--theme-accent);border-radius:4px;height:.25rem}")}
      `]}get percentage(){return this.total>0&&this.displayed<this.total?`${Math.round(this.displayed/this.total*100)}%`:"100%"}get isDisabled(){return!this.displayed||!this.total||this.displayed>=this.total}clickHandler(t){if(this.isDisabled)return void t.stopImmediatePropagation();const e=new Event("load",{bubbles:!0});this.dispatchEvent(e)}render(){var t,e;return r.dy`
      ${s.w.baseStyles}
      <div class="load-more">
        <p class="load-more-text">
          <strong>
            ${null!==(t=this.displayed)&&void 0!==t?t:"0"} ${this.middleText} ${null!==(e=this.total)&&void 0!==e?e:"0"}
          </strong>
          ${this.unitText}
        </p>
        <div class="load-more-bar">
          <div class="load-more-value" style="width: ${this.percentage}"></div>
        </div>
        <qz-button
          outline
          ?disabled=${this.isDisabled}
          @click=${this.clickHandler}
        >
          ${this.loadMoreText}
        </qz-button>
      </div>
    `}};l([(0,o.Cb)({type:Number,reflect:!0})],a.prototype,"displayed",void 0),l([(0,o.Cb)({type:Number,reflect:!0})],a.prototype,"total",void 0),l([(0,o.Cb)({type:String,reflect:!0,attribute:"load-more-text"})],a.prototype,"loadMoreText",void 0),l([(0,o.Cb)({type:String,reflect:!0,attribute:"middle-text"})],a.prototype,"middleText",void 0),l([(0,o.Cb)({type:String,reflect:!0,attribute:"unit-text"})],a.prototype,"unitText",void 0),a=l([(0,o.Mo)("qz-load-more")],a)}},function(t){t.O(0,[4736],(function(){return e=4247,t(t.s=e);var e}));t.O()}]);