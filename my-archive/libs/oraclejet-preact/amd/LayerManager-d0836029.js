define(['exports', 'preact/jsx-runtime', 'preact/compat', './LayerHost-eab40731'], (function(e,t,r,a){"use strict";e.LayerManager=function({children:e}){const[s,n]=r.useState(),o=r.useCallback((e=>{null!==e&&n(e)}),[]);return t.jsx(a.LayerContext.Consumer,{children:r=>{let n={};s&&(n={getRootLayerHost:()=>s,getLayerHost:()=>s});const c=r.getLayerHost?r:n;return t.jsxs(a.LayerContext.Provider,{value:c,children:[e,!r.getLayerHost&&t.jsx(a.LayerHost,{ref:o})]})}})}}));
//# sourceMappingURL=LayerManager-d0836029.js.map
