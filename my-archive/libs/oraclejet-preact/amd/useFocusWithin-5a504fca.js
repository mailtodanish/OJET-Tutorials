define(['exports', 'preact/hooks'], (function(e,s){"use strict";e.useFocusWithin=function({isDisabled:e,onBlurWithin:t,onFocusWithin:u}={}){const[n,r]=s.useState(!1),c=s.useRef(!1),o=s.useCallback((e=>{c.current||(u?.(e),r(!0),c.current=!0)}),[u]),i=s.useCallback((e=>{!c.current||null!=e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||(t?.(e),r(!1),c.current=!1)}),[t]);return e?{isFocused:!1,focusProps:{}}:{isFocused:n,focusProps:{onFocusIn:o,onFocusOut:i}}}}));
//# sourceMappingURL=useFocusWithin-5a504fca.js.map
