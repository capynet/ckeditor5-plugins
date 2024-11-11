(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[8206,1372],{3611:function(t,e,i){t.exports=i.p+"quartz.css"},4030:function(t,e,i){"use strict";i.d(e,{w:function(){return o}});var a=i(7220);i(3611);class o extends a.oi{static get baseStyles(){var t;const e=null!==(t=window.quartzBaseStylesPath)&&void 0!==t?t:"quartz.css";return a.dy`<link rel="stylesheet" href="${e}" />`}static get styles(){return[]}render(){return a.dy`<slot></slot>`}}},6578:function(t,e,i){"use strict";var a=i(7220),o=i(8111),d=i(4030),n=function(t,e,i,a){var o,d=arguments.length,n=d<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(d<3?o(n):d>3?o(e,i,n):o(e,i))||n);return d>3&&n&&Object.defineProperty(e,i,n),n};const s=t=>"video"===t?a.dy`<div class="media__video"><slot name="media"></slot></div>`:a.dy`<slot></slot>`;let l=class extends d.w{constructor(){super(...arguments),this.hasCaption=!1,this._expandImage=()=>{this._expandPanelEl.style.display="flex"},this._closeImage=()=>{this._expandPanelEl.style.display="none";this._expandPanelImgEl&&(this._expandPanelImgEl.style.width="60%",this._expandPanelImgEl.style.height="60%")},this._zoomImage=t=>{const e=Number(this._expandedImgEl.style.width.replace("%","")),i=t?`${e+20}%`:e-20+"%";t||!t&&e-20>0?(this._expandedImgEl.style.width=i,this._expandedImgEl.style.height=i,this._zoomOutEl.disabled=!1):this._zoomOutEl.disabled=!0}}static get styles(){return[a.iv`
        ${(0,a.$m)(":host{display:block}.media__media{display:grid}::slotted([slot=text]),:not([name])::slotted(*){grid-column-start:1;grid-row-start:1}::slotted([slot=text]){margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem}@media (min-width:640px){::slotted([slot=text]){max-width:640px}}@media (min-width:1024px){::slotted([slot=text]){max-width:1024px}}@media (min-width:1280px){::slotted([slot=text]){max-width:1280px}}@media (min-width:1536px){::slotted([slot=text]){max-width:1536px}}::slotted([slot=text]){-ms-flex-item-align:center;align-self:center;font-size:1.25rem;justify-self:center;line-height:1.75rem;max-width:calc(1180px + 2.5rem);padding-bottom:1rem;padding-top:1rem;text-align:center;width:100%;z-index:10}:not([name])::slotted(*){width:100%}:host(:not([has-caption])) .media__caption{display:none}.media__caption{display:block;font-size:.875rem;line-height:1.25rem;padding-top:1rem}.media__inner{-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}.media__video{position:relative}:host([full]) .media__caption{margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem;width:100%}@media (min-width:640px){:host([full]) .media__caption{max-width:640px}}@media (min-width:1024px){:host([full]) .media__caption{max-width:1024px}}@media (min-width:1280px){:host([full]) .media__caption{max-width:1280px}}@media (min-width:1536px){:host([full]) .media__caption{max-width:1536px}}:host([full]) .media__caption{max-width:1180px;padding:1rem 0}:host([expandable]) .media{position:relative}:host([expandable]) .expand__toggle{position:absolute;right:0;z-index:10}:host([expandable]) .media__expand{display:none;height:100%;position:fixed;right:0;top:0;width:100%;z-index:50}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}:host([expandable]) .media__expand{-webkit-box-orient:vertical;-webkit-box-direction:normal;--tw-bg-opacity:0.8;-webkit-animation:fade-in .2s ease-out 0s 1 normal forwards running;animation:fade-in .2s ease-out 0s 1 normal forwards running;background-color:rgb(0 0 0/var(--tw-bg-opacity));-ms-flex-direction:column;flex-direction:column}:host([expandable]) .media__expand .hotbar{-webkit-box-pack:end;-ms-flex-pack:end;--tw-bg-opacity:0.4;background-color:rgb(0 0 0/var(--tw-bg-opacity));display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:flex-end;padding:.5rem .5rem 1.5rem}:host([expandable]) .media__expand .hotbar qz-button{margin-left:.5rem;margin-right:.5rem}:host([expandable]) .expanded__image{margin:auto;max-width:none;-webkit-transition:width .2s ease,height .2s ease;transition:width .2s ease,height .2s ease}:host(.media-remote) .media__video{aspect-ratio:16/9}")}
      `]}render(){const{full:t,variant:e,expandable:i}=this;let o,n=a.dy``;switch(i&&(n=a.dy`
        <div class="expand__toggle">
          <qz-button size="small" @click=${this._expandImage}>
            Expand
            <qz-icon slot="start" height="12" width="12" name="plus"></qz-icon>
          </qz-button>
        </div>
        <div class="media__expand">
          <div class="hotbar">
            <qz-button
              class="zoom-out"
              icon
              size="small"
              @click=${()=>this._zoomImage(!1)}
            >
              <qz-icon height="20" width="20" name="zoom-out"></qz-icon>
            </qz-button>
            <qz-button
              class="zoom-in"
              icon
              size="small"
              @click=${()=>this._zoomImage(!0)}
            >
              <qz-icon height="20" width="20" name="zoom-in"></qz-icon>
            </qz-button>
            <qz-button icon size="small" @click=${this._closeImage}>
              <qz-icon name="close" width="16" height="16"></qz-icon>
            </qz-button>
          </div>
          <div class="expanded__image" style="width: 60%; height: 60%;">
            <slot name="expanded-image"></slot>
          </div>
        </div>
      `),t){case!0:o=a.dy`
          <div class="media__media">
            ${s(e)}
            <slot name="text"></slot>
          </div>
          <div class="media__caption">
            <slot name="caption"></slot>
          </div>
        `;break;default:o=a.dy`
          <div class="media__container">
            <div class="media__media">
              ${s(e)}
              <slot name="text"></slot>
            </div>
            <div class="media__caption">
              <slot name="caption"></slot>
            </div>
          </div>
        `}return a.dy`
      ${d.w.baseStyles}
      <div class="media">${n} ${o}</div>
    `}};n([(0,o.Cb)({type:Boolean})],l.prototype,"full",void 0),n([(0,o.Cb)({type:Boolean,attribute:"has-caption"})],l.prototype,"hasCaption",void 0),n([(0,o.Cb)({type:String})],l.prototype,"variant",void 0),n([(0,o.Cb)({type:Boolean})],l.prototype,"expandable",void 0),n([(0,o.IO)(".media__expand")],l.prototype,"_expandPanelEl",void 0),n([(0,o.IO)(".media__expand img")],l.prototype,"_expandPanelImgEl",void 0),n([(0,o.IO)(".zoom-out")],l.prototype,"_zoomOutEl",void 0),n([(0,o.IO)(".expanded__image")],l.prototype,"_expandedImgEl",void 0),l=n([(0,o.Mo)("qz-media")],l)}},function(t){t.O(0,[4736],(function(){return e=6578,t(t.s=e);var e}));t.O()}]);