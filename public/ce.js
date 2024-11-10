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
          color: red
        }
        
         .label:hover + .tooltip{
          opacity: 1;
        }
        .tooltip{
         position: absolute;
    left: 0;
    top: 100%;
    background: yellowgreen;
    opacity: 0
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