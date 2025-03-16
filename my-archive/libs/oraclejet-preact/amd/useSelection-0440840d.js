define(['exports', 'preact/hooks', './eventsUtils-5d567a9d', 'preact/jsx-runtime', './BaseButton-83ce1d00', './Text-e132dec0', './useTranslationBundle-6ef0dab6', './hooks/PRIVATE_useVisSelection/themes/ClearSelection.css', './Layer-3cc44164', 'preact/compat', './LayerHost-eab40731', './Floating-85851b1a'], (function(e,t,n,o,l,r,c,i,s,a,u,d){"use strict";const p=({onAction:e})=>{const t=`${c.useTranslationBundle("@oracle/oraclejet-preact").vis_clearSelection()}`;return o.jsx("div",{class:i.clearButtonStyles.base,children:o.jsx(l.BaseButton,{styling:["default"],elementDetails:{type:"span",isFocusable:!1,isLabel:!0},variant:"outlined",onAction:e,children:o.jsx(r.Text,{truncation:"ellipsis",weight:"inherit",children:t})})})},y=18;const g=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],f=(e,t,o,l,r,c)=>{let i=new Set([]);if(null!=e){i=new Set(t);const n=t.has(e);"toggle"===l?n?i.delete(e):"single"===o?i=new Set([e]):i.add(e):n||(i=new Set([e]))}n.isEqual(i,t)||c?.({ids:[...i],data:[...i].map(r)})};e.useSelection=function({selection:e=[],selectionMode:n="none",idExtracter:l,onChange:r,isDrillEnabled:c,isKeyboardSelection:i,getDataById:a}){const u=t.useRef(),{clearSelectionContent:x,tryToggleClearButton:h}=function({clearSelection:e}){const[n,l]=t.useState(!1),r=t.useRef({x:0,y:0}),c={mainAxis:2*y},i={current:r.current};return{clearSelectionContent:n?o.jsx(s.Layer,{children:o.jsx(d.Floating,{anchorRef:i,offsetValue:c,placement:"top",flipOptions:{crossAxis:!1,mainAxis:!1},shiftOptions:{crossAxis:!0,mainAxis:!0},children:o.jsx(p,{onAction:()=>{l(!1),e()}})})}):null,tryToggleClearButton:(e,t,o,c)=>"touch"===e.pointerType&&void 0===t&&"multiple"===o&&c.size>1&&(l(!n),r.current={x:e.clientX,y:e.clientY},!0)}}({clearSelection:()=>{f(void 0,new Set(e),n,"replace",a,r)}}),S=t.useCallback((t=>{const o=new Set(e);if(u.current&&c)return clearTimeout(u.current),void(u.current=void 0);const i=l(t);if(h(t,i,n,o))return;const s=t.metaKey,d=t.ctrlKey;t.defaultPrevented||null==i&&(s||d)||(c?u.current=setTimeout((()=>{f(i,o,n,s||d||"touch"===t.pointerType?"toggle":"replace",a,r),u.current=void 0}),250):f(i,o,n,s||d||"touch"===t.pointerType?"toggle":"replace",a,r))}),[e,n,r,l,c,a,h]),w=t.useCallback((t=>{const o=l(t),c=t.ctrlKey;f(o,new Set(e),n,c?"toggle":"replace",a,r)}),[e,n,r,l,a]),m=t.useCallback((t=>{const o=t.shiftKey,c=t.ctrlKey&&" "===t.key,s=-1!==g.indexOf(t.key),u=l(t);if(s||c||i&&i(t)){const t=o||c?"toggle":"replace";f(u,new Set(e),n,t,a,r)}}),[e,n,r,l,i,a]);return{selectionContent:x,selectionProps:"none"===n||null==r?{}:{onKeyUp:m,onContextMenu:w,onPointerUp:S}}}}));
//# sourceMappingURL=useSelection-0440840d.js.map
