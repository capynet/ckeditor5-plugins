(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[6786,1372],{3611:function(e,t,n){e.exports=n.p+"quartz.css"},4030:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var i=n(7220);n(3611);class r extends i.oi{static get baseStyles(){var e;const t=null!==(e=window.quartzBaseStylesPath)&&void 0!==e?e:"quartz.css";return i.dy`<link rel="stylesheet" href="${t}" />`}static get styles(){return[]}render(){return i.dy`<slot></slot>`}}},9604:function(e,t,n){"use strict";var i=n(7220),r=n(8111),s=n(4030),a=n(1227),o=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let l=class extends s.w{constructor(){super(),this.expandA11yLabel="View submenu",this._expandTemplateButton=e=>(0,a.Bv)({html:`\n        <qz-button menu role="button" aria-expanded="false" aria-haspopup="true">\n          ${e}\n        </qz-button>\n      `}),this._templateLink=(e,t)=>(0,a.Bv)({html:`\n        <qz-link button cta href="${t}">\n          ${e}\n        </qz-link>\n      `}),this._appendTemplatesAttachListeners=e=>{Array.from(e).forEach((e=>{var t,n;const i=e.querySelector("div");if(e.dataset.url){const n=this._templateLink(null!==(t=e.getAttribute("aria-label"))&&void 0!==t?t:"",e.dataset.url);i&&e.replaceChild(n,i)}else{const t=this._expandTemplateButton(null!==(n=e.getAttribute("aria-label"))&&void 0!==n?n:"");null==e.closest(".mega-menu-child")&&(e.insertBefore(t,i),t.addEventListener("click",(()=>this._toggleSubmenu(t))))}}))},this._handleFocusChange=e=>{if(e instanceof KeyboardEvent&&"Escape"===e.code)this._resetExpanded();else{let t=null;const n=this.querySelector('qz-button[aria-expanded="true"]');setTimeout((()=>{var i;t=document.activeElement,n&&n!==e.target&&!(null===(i=n.nextSibling)||void 0===i?void 0:i.contains(t))&&this._resetExpanded()}),100)}},this._resetExpanded=()=>{const e=this.querySelector('qz-button[aria-expanded="true"]');e&&e.setAttribute("aria-expanded","false")},this._toggleSubmenu=e=>{const t="false"===e.getAttribute("aria-expanded");this._resetExpanded(),t&&e.setAttribute("aria-expanded","true")},this.addEventListener("keydown",this._handleFocusChange)}static get styles(){return[i.iv`
        ${(0,i.$m)(":host{display:block}:host ::slotted([slot=menu]){-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;margin:auto}.mega-menu{display:block}.mega-menu ::slotted(*){margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem}@media (min-width:640px){.mega-menu ::slotted(*){max-width:640px}}@media (min-width:1024px){.mega-menu ::slotted(*){max-width:1024px}}@media (min-width:1280px){.mega-menu ::slotted(*){max-width:1280px}}@media (min-width:1536px){.mega-menu ::slotted(*){max-width:1536px}}.mega-menu ::slotted(*){max-width:calc(1180px + 2.5rem);width:100%}")}
      `]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleFocusChange)}disconnectedCallback(){document.removeEventListener("click",this._handleFocusChange),super.disconnectedCallback()}firstUpdated(){const e=(0,a.f4)({context:this,parent:"qz-mega-menu li",child:"div"});this._appendTemplatesAttachListeners(e)}render(){return i.dy`
      ${s.w.baseStyles}
      <div class="mega-menu">
        <slot name="menu"></slot>
      </div>
    `}};o([(0,r.Cb)({type:String,attribute:"expand-a11y-label"})],l.prototype,"expandA11yLabel",void 0),l=o([(0,r.Mo)("qz-mega-menu")],l)},1227:function(e,t,n){"use strict";n.d(t,{DO:function(){return r},Bv:function(){return s},f4:function(){return a},Mm:function(){return o},t6:function(){return l},IM:function(){return d},d2:function(){return u},yA:function(){return c},Av:function(){return m},y2:function(){return p},cK:function(){return h},Ds:function(){return f}});var i=n(7220);const r=e=>void 0!==e?e:(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,""),s=({html:e})=>{const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild},a=({context:e,parent:t,child:n})=>[].filter.call((e||document).querySelectorAll(t),(function(e){return e.querySelector(n)})),o=({el:e,styleName:t})=>{const n=window.getComputedStyle(e)[t];return"string"==typeof n?parseFloat(n):NaN},l=({el:e})=>{const t=o({el:e,styleName:"marginTop"})+o({el:e,styleName:"marginBottom"});return Math.ceil(e.offsetHeight+t)},d=e=>{const t=window.innerHeight,n=e.getRootNode().body;n&&(null==n||n.setAttribute("scroll-locked","true"),n.style.height=`${t}px`,n.style.overflow="hidden")},u=e=>{const t=e.getRootNode().body;t&&(null==t||t.removeAttribute("scroll-locked"),t.style.height="",t.style.overflow="")},c=({context:e,name:t})=>{const n=e.keys().filter((e=>e.indexOf(t)>-1));if(0!==n.length)return e(n[0])},m=(e,t,n)=>{var r,s;const a=t.endsWith(" ");return""!==t&&""!==e?null===(s=null===(r=e.split(t))||void 0===r?void 0:r.map(((e,r)=>0===r?i.dy` ${e} `:i.dy`
              <span class="${n}">${t}</span>
              ${a?i.dy`<span class="between"></span>`:""}
              <span class="rest">${e}</span>
            `)))||void 0===s?void 0:s.reduce(((e,t)=>i.dy` ${e} ${t} `),i.dy``):e},p=(e,t,n,i,r)=>{if(e){const s=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=a.x+a.width,l=s.x+s.width;i&&t.removeAttribute("style"),a.x<0?(t.style.left="0",t.style.right="auto",t.style.transform=`translateX(${-s.x+n}px)`):o>window.innerWidth&&(t.style.left="auto",t.style.right="0",t.style.transform=`translateX(${window.innerWidth-l-n}px)`);const d=a.y+a.height;"top"===r?a.top<0&&e.classList.remove("above"):d>window.innerHeight?e.classList.add("above"):a.y<0&&e.classList.remove("above")}},h=(e,t)=>{const n=n=>{e.contains(n.target)||n.target===e||t()};setTimeout((()=>{document.addEventListener("click",n)}),1)},f=(e,t)=>{let n;return function(...i){clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(this,i)}),t)}}}},function(e){e.O(0,[4736],(function(){return t=9604,e(e.s=t);var t}));e.O()}]);