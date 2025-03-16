define(['exports', 'preact/jsx-runtime', 'preact/hooks', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', './useTranslationBundle-6ef0dab6', './classNames-08d99695', './Help-c0ec701e', './Popup-249d77c3', './useFocusWithin-5a504fca', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './useComponentTheme-5aa41a8f', './UNSAFE_Label/themes/redwood/LabelTheme'], (function(e,s,o,n,t,u,c,a,r,l,i,d,p){"use strict";function b(){const e=o.useRef(null),{focusProps:s,isFocused:n}=l.useFocusWithin();return{isFocused:n,popupProps:{onTransitionEnd:o.useCallback((o=>{o?(s.onFocusIn&&e.current?.addEventListener("focusin",s.onFocusIn,!1),s.onFocusOut&&e.current?.addEventListener("focusout",s.onFocusOut,!1)):(s.onFocusIn&&e.current?.removeEventListener("focusin",s.onFocusIn,!1),s.onFocusOut&&e.current?.removeEventListener("focusout",s.onFocusOut,!1))}),[s.onFocusIn,s.onFocusOut,e]),ref:e}}}e.CompactHelpSource=function({children:e,id:n,labelEdge:l,source:h}){const[F,f]=o.useState(!1),m=u.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_learnMore(),{isTabbable:x,tabbableModeProps:T}=t.useTabbableMode(),E=o.useRef(null),v=e??m,{baseTheme:L}=d.useComponentTheme(p.LabelRedwoodTheme),I=c.classNames([L,i.helpIconBase,"start"===l&&i.helpIconLabelEdgeStart]),{isFocused:S,popupProps:j}=b(),A=!0===F||!0===S;return s.jsxs(s.Fragment,{children:[s.jsx("a",{target:"_blank",...h&&{href:h},"aria-label":v,class:I,id:n,ref:E,role:"link",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onFocus:()=>f(!0),onBlur:()=>f(!1),...x?{tabIndex:0}:T,children:s.jsx(a.SvgHelp,{})}),s.jsx(r.Popup,{...j,placement:"end-top-corner",isOpen:A,anchorRef:E,flipOptions:{mainAxis:!0,crossAxis:!1},maxWidth:"296px",children:s.jsx("div",{class:i.helpContentStyles,children:v})})]})},e.usePopupFocusWithin=b}));
//# sourceMappingURL=CompactHelpSource-7de24d56.js.map
