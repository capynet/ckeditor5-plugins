(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[5986,1372],{3611:function(e,t,i){e.exports=i.p+"quartz.css"},4030:function(e,t,i){"use strict";i.d(t,{w:function(){return r}});var n=i(7220);i(3611);class r extends n.oi{static get baseStyles(){var e;const t=null!==(e=window.quartzBaseStylesPath)&&void 0!==e?e:"quartz.css";return n.dy`<link rel="stylesheet" href="${t}" />`}static get styles(){return[]}render(){return n.dy`<slot></slot>`}}},8601:function(e,t,i){"use strict";var n=i(7220),r=i(8111),s=i(4030),o=function(e,t,i,n){var r,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,i,o):r(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let a=class extends s.w{static get styles(){return[n.iv`
        ${(0,n.$m)('.spinner svg{height:2rem;width:2rem}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.spinner svg{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.spinner .circle{opacity:.2}:host([size=small]) .spinner svg{height:1rem;width:1rem}:host([size=medium]) .spinner svg{height:1.5rem;width:1.5rem}:host([size=large]) .spinner svg{height:3rem;width:3rem}:host([fixed]) .spinner{left:50%;position:fixed;top:50%}:host([variant=line]) .spinner-line{background-color:var(--theme-primary);border-radius:20px;height:3px;overflow:hidden;position:relative;width:100%}:host([variant=line]) .spinner-line:before{height:100%;left:-50%;position:absolute;width:25%}@-webkit-keyframes lineAnim{0%{left:-40%}50%{left:20%;width:80%}to{left:100%;width:100%}}@keyframes lineAnim{0%{left:-40%}50%{left:20%;width:80%}to{left:100%;width:100%}}:host([variant=line]) .spinner-line:before{--tw-content:"";-webkit-animation:lineAnim 2s linear infinite;animation:lineAnim 2s linear infinite;background-color:var(--theme-accent);border-radius:20px;content:var(--tw-content)}')}
      `]}render(){const{variant:e}=this;let t;switch(e){case"line":t=n.dy`
          ${s.w.baseStyles}
          <div class="spinner-line"></div>
        `;break;default:t=n.dy`
          ${s.w.baseStyles}
          <div class="spinner">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              part="spinner"
            >
              <path
                class="circle"
                clip-rule="evenodd"
                d="M23.99 40.68a16.69 16.69 0 100-33.37 16.69 16.69 0 000 33.37zm0 7.15c13.16 0 23.84-10.68 23.84-23.84S37.15.15 23.99.15.15 10.83.15 23.99s10.68 23.84 23.84 23.84z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
              <path
                d="M.15 23.99C.15 10.83 10.83.15 23.99.15V7.3A16.69 16.69 0 007.3 23.99H.15z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        `}return n.dy`
      ${s.w.baseStyles}
      <div class="spinner">${t}</div>
    `}};o([(0,r.Cb)({type:String})],a.prototype,"size",void 0),o([(0,r.Cb)({type:String})],a.prototype,"variant",void 0),a=o([(0,r.Mo)("qz-spinner")],a)}},function(e){e.O(0,[4736],(function(){return t=8601,e(e.s=t);var t}));e.O()}]);