'use strict';

(function () {
  class Tooltip extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const shadow = this.attachShadow({mode: 'open'});
      const label = this.dataset.title;
      const tooltip = this.dataset.tooltip;

      const style = document.createElement("style");
      style.textContent = `
      .wrapper{
      position: relative;
      }
        .label{
            text-decoration: underline;
    font-size: 14px;
    color: #1d1d1d;
        cursor: pointer;
        }
        
         .label:hover + .tooltip{
          opacity: 1;
        }
        .tooltip{
    position: absolute;
    left: 0;
    background: #f2f2f2;
    opacity: 0;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 12px;
    bottom: calc(100% + 5px);
    box-shadow: -1px 1px 3px 0px grey;
        transition: opacity 200ms;
        }
    `;

      const wrapper = document.createElement('div');
      const tooltipEl = document.createElement('span');
      const labelEl = document.createElement('span');

      tooltipEl.innerHTML = `${tooltip}`;
      labelEl.innerHTML = `${label}`;

      wrapper.classList.add('wrapper');
      tooltipEl.classList.add('tooltip');
      labelEl.classList.add('label');

      shadow.appendChild(style);
      shadow.appendChild(wrapper);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(tooltipEl);
    }

  }

  // let the browser know about the custom element
  customElements.define('x-tooltip', Tooltip);
})();