define(['exports', './clientHints-030d25aa'], (function(e,t){"use strict";const c=t.getClientHints();const T={TAB:"Tab",ENTER:"Enter",NUMPAD_ENTER:"NumpadEnter",ESC:"Escape",SPACE:"Space",LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown",SHIFT_LEFT:"ShiftLeft",SHIFT_RIGHT:"ShiftRight",CTRL_LEFT:"ControlLeft",CTRL_RIGHT:"ControlRight",ALT_LEFT:"AltLeft",ALT_RIGHT:"AltRight",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",HOME:"Home",END:"End",BACKSPACE:"Backspace",DELETE:"Delete"};e.KEYS=T,e.isBackspaceOrDelete=function(e){return"Backspace"===e.code||"Delete"===e.code},e.isControlOrFunctionKey=e=>(e=>{switch(e.code){case T.SHIFT_LEFT:case T.SHIFT_RIGHT:case T.CTRL_LEFT:case T.CTRL_RIGHT:case T.ALT_LEFT:case T.ALT_RIGHT:return!0;default:return e.metaKey||e.ctrlKey}})(e)||(e=>/\bF([1-9]|1[0-2])\b/i.test(e.code))(e),e.isSelectAll=function(e){return("mac"===c.platform&&e.metaKey||"windows"===c.platform&&e.ctrlKey)&&"KeyA"===e.code}}));
//# sourceMappingURL=keyboardUtils-244467a7.js.map
