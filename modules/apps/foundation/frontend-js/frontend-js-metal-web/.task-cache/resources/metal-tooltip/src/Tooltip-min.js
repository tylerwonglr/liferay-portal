define("frontend-js-metal-web@1.0.6/metal-tooltip/src/Tooltip-min", ["exports","./TooltipBase","metal-jquery-adapter/src/JQueryAdapter","./Tooltip.soy"], function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TooltipBase=t.Tooltip=void 0;var p=n(e),s=n(o),a=function(t){function e(){return (r(this,e), i(this,t.apply(this,arguments)))}return (l(e,t), e.prototype.syncVisible=function(e){this.element.style.opacity=e?1:"",t.prototype.syncVisible.call(this,e)}, e)}(p["default"]);a.prototype.registerMetalComponent&&a.prototype.registerMetalComponent(a,"Tooltip"),a.Align=p["default"].Align,a.ELEMENT_CLASSES="tooltip",t["default"]=a,t.Tooltip=a,t.TooltipBase=p["default"],s["default"].register("tooltip",a)});