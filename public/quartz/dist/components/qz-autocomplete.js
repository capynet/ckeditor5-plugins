(Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz=Object("undefined"!=typeof self?self:this).webpackChunk_dxp_quartz||[]).push([[9615,1372],{3611:function(e,t,s){e.exports=s.p+"quartz.css"},4030:function(e,t,s){"use strict";s.d(t,{w:function(){return o}});var i=s(7220);s(3611);class o extends i.oi{static get baseStyles(){var e;const t=null!==(e=window.quartzBaseStylesPath)&&void 0!==e?e:"quartz.css";return i.dy`<link rel="stylesheet" href="${t}" />`}static get styles(){return[]}render(){return i.dy`<slot></slot>`}}},8128:function(e,t,s){"use strict";var i=s(7220),o=s(8111),n=s(9407),a=s(4030),r=function(e,t,s,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n<3?o(a):n>3?o(t,s,a):o(t,s))||a);return n>3&&a&&Object.defineProperty(t,s,a),a};let c=class extends a.w{constructor(){super(...arguments),this.autofocus=!1,this._hasSpeechSupport=!(!window.SpeechRecognition&&!window.webkitSpeechRecognition),this._isRecognizingSpeech=!1,this._isFocused=!1,this._hasValue=!1,this._hasSuggestions=!1,this._onSuggestionClick=()=>{var e;this._isFocused=!0,null===(e=this._inputEl)||void 0===e||e.then((e=>{e.focus()}))},this._handleClick=e=>{this._isFocused=e.composedPath().includes(this),this._submitEl&&e.composedPath().includes(this._submitEl)&&(this._isFocused=!1)},this._onChange=({e:e,value:t})=>{let s="";if(e){if(s=e.target.value,e.isComposing)return}else t&&(s=t);this._hasValue=!!s,""===s?this.dispatchEvent(new CustomEvent("input-reset",{bubbles:!0})):this.dispatchEvent(new CustomEvent("input-change",{bubbles:!0,composed:!0,detail:{value:s}}))},this._onSubmit=()=>{this._inputEl&&this._inputEl.then((e=>{this._isFocused=!1,this.dispatchEvent(new CustomEvent("input-submit",{bubbles:!0,composed:!0,detail:{value:e.value}}))}))},this._onKeyDown=e=>{var t;if(!e.isComposing&&("Enter"===e.key&&(e.preventDefault(),this._onSubmit()),"Escape"===e.key&&(e.preventDefault(),this._isFocused=!1,null===(t=this._inputEl)||void 0===t||t.then((e=>{e.blur()}))),"ArrowDown"===e.key)){e.preventDefault();const t=this.querySelector(":scope > qz-autocomplete-suggestion");t&&t.focus()}},this._setInputValue=e=>{this._inputEl&&this._inputEl.then((t=>{t.value=e,this._onChange({value:e})}))},this._onMicPress=()=>{var e;const t=new(window.SpeechRecognition||window.webkitSpeechRecognition);t.continuous=!0,t.lang=null!==(e=this.speechLang)&&void 0!==e?e:navigator.language,t.interimResults=!0,t.maxAlternatives=1,t.start(),this._isRecognizingSpeech=!0,t.onresult=e=>{const s=e.results[0][0].transcript,i=e.results[0].isFinal;this._setInputValue(s),i&&(t.stop(),this._isRecognizingSpeech=!1,this._onSubmit())},t.onspeechend=()=>{t.stop(),this._isRecognizingSpeech=!1},t.onerror=e=>{console.error("Error In Speech Recognition: ",e.error),this._isRecognizingSpeech=!1}}}static get styles(){return[i.iv`
        ${(0,i.$m)(".search-autocomplete{position:relative;width:100%}input[type=search].searchbar{border-radius:4px;border-style:solid;border-width:1px;color:var(--theme-primary);margin-bottom:0;outline:2px solid transparent;outline-offset:2px;overflow:hidden;padding:1rem .25rem 1rem .5rem;text-overflow:ellipsis;white-space:nowrap;width:100%}input[type=search].searchbar::-webkit-input-placeholder{color:var(--theme-primary);opacity:.2}input[type=search].searchbar::-moz-placeholder{color:var(--theme-primary);opacity:.2}input[type=search].searchbar::-ms-input-placeholder{color:var(--theme-primary);opacity:.2}input[type=search].searchbar::placeholder{color:var(--theme-primary);opacity:.2}input[type=search].searchbar:focus-visible{--tw-shadow:0 0 0 3px #c9b9fe;--tw-shadow-colored:0 0 0 3px var(--tw-shadow-color);border-color:var(--theme-primary);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}input[type=search].searchbar:disabled{opacity:.6}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.right-actions{display:-webkit-box;display:-ms-flexbox;display:flex;height:3rem;position:absolute;right:0;top:0}.right-actions qz-button.clear-button{border-style:dotted;border-width:0 1px 0 0}.suggestions{display:none}:host([is-focused][has-value][has-suggestions]) .suggestions{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-style:solid;border-width:0 1px 1px!important;display:block;left:0;position:absolute;right:0;z-index:20}")}
      `]}connectedCallback(){var e;super.connectedCallback(),this._checkHasSuggestions();new MutationObserver(this._checkHasSuggestions.bind(this)).observe(this,{childList:!0,subtree:!0}),document.addEventListener("click",this._handleClick.bind(this)),this.addEventListener("suggestion-click",this._onSuggestionClick.bind(this)),this.autofocus&&(this._isFocused=!0,null===(e=this._inputEl)||void 0===e||e.then((e=>{e.focus(),e.setSelectionRange(e.value.length,e.value.length)})))}disconnectedCallback(){document.removeEventListener("click",this._handleClick.bind(this)),this.removeEventListener("suggestion-click",this._onSuggestionClick.bind(this)),super.disconnectedCallback()}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s),s!==t&&"value"===e&&this._inputEl&&this._inputEl.then((e=>{e.value=null!=s?s:"",this._onChange({value:null!=s?s:""})}))}focus(e){var t;this._isFocused=!0,null===(t=this._inputEl)||void 0===t||t.then((t=>{t.focus(e)}))}_checkHasSuggestions(){this._hasSuggestions=!!this.querySelector("qz-autocomplete-suggestion")}render(){return i.dy`
      <div class="search-autocomplete">
        <input
          @keyup=${e=>this._onChange({e:e})}
          @keydown=${this._onKeyDown}
          class="searchbar block"
          type="search"
          placeholder="${(0,n.o)(this.placeholder)}"
          value="${(0,n.o)(this.value)}"
        />
        <div class="suggestions">
          <slot></slot>
        </div>
        <div class="right-actions">
          <qz-button
            ghost
            size="small"
            @click=${()=>this._setInputValue("")}
            class="clear-button ${this._hasValue?"":"hidden"}"
            input-icon
          >
            <qz-icon name="close" width="12" color="gray"></qz-icon>
            <span slot="a11y"> clear search </span>
          </qz-button>
          <qz-button
            ghost
            size="small"
            @click=${this._onMicPress}
            input-icon
            ?disabled="${this._isRecognizingSpeech}"
            class="${this._hasSpeechSupport?"":"hidden"}"
          >
            <qz-icon name="mic" width="16" color="gray"></qz-icon>
          </qz-button>
          <qz-button
            ghost
            size="small"
            @click=${this._onSubmit}
            input-icon
            class="autocomplete-submit-btn"
          >
            <qz-icon name="search" width="16"></qz-icon>
          </qz-button>
        </div>
      </div>
    `}};r([(0,o.Cb)({type:String})],c.prototype,"speechLang",void 0),r([(0,o.Cb)({type:String})],c.prototype,"placeholder",void 0),r([(0,o.Cb)({type:String})],c.prototype,"value",void 0),r([(0,o.Cb)({type:Boolean})],c.prototype,"autofocus",void 0),r([(0,o.GC)('input[type="search"]')],c.prototype,"_inputEl",void 0),r([(0,o.IO)(".autocomplete-submit-btn")],c.prototype,"_submitEl",void 0),r([(0,o.SB)()],c.prototype,"_hasSpeechSupport",void 0),r([(0,o.SB)()],c.prototype,"_isRecognizingSpeech",void 0),r([(0,o.Cb)({type:Boolean,reflect:!0,attribute:"is-focused"})],c.prototype,"_isFocused",void 0),r([(0,o.Cb)({type:Boolean,reflect:!0,attribute:"has-value"})],c.prototype,"_hasValue",void 0),r([(0,o.Cb)({type:Boolean,reflect:!0,attribute:"has-suggestions"})],c.prototype,"_hasSuggestions",void 0),c=r([(0,o.Mo)("qz-autocomplete")],c)}},function(e){e.O(0,[4736],(function(){return t=8128,e(e.s=t);var t}));e.O()}]);