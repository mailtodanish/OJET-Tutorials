define(['exports', 'preact/jsx-runtime', './classNames-08d99695', './PRIVATE_VisTabularDatatip/themes/VisTabularDatatipStyles.css', './useUser-6dd85af9'], (function(s,a,t,e,l){"use strict";s.VisTabularDatatip=function({tableData:s}){const{direction:i}=l.useUser(),r="rtl"===i,c=t.classNames([e.styles.VisTabularDatatipLabel,r?e.styles.leftAlign:e.styles.rightAlign]),n=t.classNames([e.styles.VisTabularDatatipValue,r?e.styles.rightAlign:e.styles.leftAlign]);return a.jsx("table",{class:e.styles.VisTabularDatatipTable,children:a.jsx("tbody",{children:s.map((({key:s,value:t})=>a.jsxs("tr",{children:[a.jsx("td",{class:c,children:s}),a.jsx("td",{class:n,children:t})]})))})})}}));
//# sourceMappingURL=VisTabularDatatip-5e43455b.js.map
