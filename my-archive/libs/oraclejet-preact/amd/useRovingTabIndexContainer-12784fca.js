define(['exports', 'preact/hooks', './useUser-6dd85af9', './clientHints-030d25aa'], (function(e,t,r,n){"use strict";const o=(e,t=!1)=>{if(t){const t=e.closest("data-oj-roving-tabindex-item");t&&(e=t)}return e.getAttribute("data-oj-roving-tabindex-item")||void 0},i=(e,t)=>{const r=e.findIndex((e=>o(e)===t));return-1===r?0:r},s=(e,t,r,n)=>{const o=i(e,r);let s=-1;return(!n&&"ArrowRight"===t||n&&"ArrowLeft"===t)&&(s=o===e.length-1?0:o+1),(!n&&"ArrowLeft"===t||n&&"ArrowRight"===t)&&(s=0===o?e.length-1:o-1),e[s]};e.useRovingTabIndexContainer=e=>{const a=t.useRef(null),{direction:c}=r.useUser(),u="rtl"===c,[d,f]=t.useState(void 0),[g,l]=t.useState(!1),b=n.getClientHints(),h=()=>a.current?Array.from(a.current.querySelectorAll("[data-oj-roving-tabindex-item]")):[],w={ref:a,onBlur:()=>l(!1),onFocus:e=>{if(e.target!==e.currentTarget)e.target&&f(o(e.target));else{const e=h();if(0===e.length)return;e[i(e,d)].focus()}},onKeyDown:e=>{if("ArrowRight"===e.code||"ArrowLeft"===e.code){const t=h();if(0===t.length)return;s(t,e.code,d,u).focus()}else e.shiftKey&&"Tab"===e.code&&l(!0)},..."safari"===b.browser&&{onMouseDown:e=>{const t=o(e.target,!0);t&&f(t)}},tabIndex:g||e?-1:0};return{focusedId:d,rovingTabIndexContainerProps:w}}}));
//# sourceMappingURL=useRovingTabIndexContainer-12784fca.js.map
