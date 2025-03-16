define(['exports', 'preact/hooks', './keys-cc1cb01d', './useUser-6dd85af9', './textSelectionUtils-06c7855d'], (function(e,t,r,n,l){"use strict";const o=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]),i=e=>"click"===e.type?"shiftClick":"keyup"===e.type&&" "===e.key?"shiftSpace":"keydown"===e.type&&o.has(e.key)?"shiftArrowKeys":void 0,s=(e,t,n,l,o,s,c,y,u,a)=>{const k=t(e.target);if(null==k)return;if(e.shiftKey&&void 0!==y&&a&&((e,t,n,l)=>"multiple"===n&&(l||r.containsKey(t,e)))(y,n,l,"click"===e.type)){const t=r.containsKey(n,k),l=i(e);if(t&&"shiftSpace"===l){const t=r.removeKey(n,k,s);u?.({value:t,target:e.target})}else a({value:{start:y,end:k},eventType:l});return void(c&&(c.current=k))}let p=n;r.containsKey(n,k)?"Enter"!==e.key&&("toggle"===o||e.ctrlKey||e.metaKey||" "===e.key?p=r.removeKey(n,k,s):"multiple"===l&&(n.all||n.keys.size>1)&&(p={all:!1,keys:new Set([k])})):p="single"===l||"Enter"===e.key||"replace"===o&&!e.ctrlKey&&!e.metaKey?{all:!1,keys:new Set([k])}:r.addKey(n,k),n!=p&&u&&(u({value:p,target:e.target}),"click"===e.type&&e.stopPropagation())};e.useSelection=function(e,o,c,y,u,a,k,p,f,d,K,v,w){const g=t.useRef(),h=t.useRef(!1),m=t.useCallback((e=>{h.current="touch"===e.pointerType,e.shiftKey&&"multiple"===c&&e.preventDefault()}),[h]),A=t.useCallback((t=>{l.getIsSelectionPending()||(s(t,e,o,c,h.current?"toggle":u,y,g,f,k,w),t.shiftKey||(g.current=void 0))}),[e,o,c,u,y,g,f,k,w]),S=t.useCallback((t=>{(" "===t.key||"Enter"===t.key&&a)&&s(t,e,o,c,u,y,g,p,k,t.shiftKey&&" "===t.key?w:void 0)}),[e,o,c,u,y,p,k,w,a]),{direction:D}=n.useUser(),b=t.useCallback((e=>{if(" "===e.key)return void e.preventDefault();const t=g.current||f,n="rtl"===D,l={ArrowUp:d?.(t,!0),ArrowDown:d?.(t,!1),ArrowLeft:K?.(t,!n),ArrowRight:K?.(t,n)},s=d&&K;if(Object.keys(l).includes(e.key))if(e.shiftKey&&v&&"multiple"===c){e.preventDefault();let t=o;!g.current&&r.isKeyDefined(f)&&(t={all:!1,keys:new Set([f])});const n=l[e.key],c=n?.();null!=c&&(v(c),s?w&&null!=f&&w({value:{start:f,end:c},eventType:i(e)}):(r.containsKey(t,c)?null!=g.current&&g.current!==c&&(t=r.removeKey(t,g.current,y)):t=r.addKey(t,c),o!=t&&k&&k({value:t,target:e.target})),g.current=c)}else g.current=void 0}),[o,y,k,f,d,K,v,D,w,c]);return{selectionProps:"none"===c||null==k?{}:{onPointerDown:m,onClick:A,onKeyDown:b,onKeyUp:S}}}}));
//# sourceMappingURL=useSelection-f1d96ce9.js.map
