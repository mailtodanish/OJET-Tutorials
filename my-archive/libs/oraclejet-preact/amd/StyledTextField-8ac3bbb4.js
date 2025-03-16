define(['exports', 'preact/jsx-runtime', './UNSAFE_Label/themes/redwood/LabelTheme', './LabelValueLayout-89e9f1be', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './useComponentTheme-5aa41a8f', './useTestId-82cf22a4', './classNames-08d99695', './LayoutStyles.css-d1dfed48', 'preact/compat', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useFormFieldContext-8196183c', './Flex-1f27b601', './InputGroupContext-372087af', './useInputGroupContext-e6e19f4f', './useUser-6dd85af9', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/redwood/FormLayoutTheme'], (function(e,t,o,n,a,s,d,l,i,r,m,u,x,h,T,C,c,F,p,b,f){"use strict";const y=({variant:e,insideLabel:o,mainContent:n,endContent:a,rootRef:d,resize:i})=>{const{isFormLayout:r,isReadonly:m}=u.useFormContext(),{isLoading:x}=h.useFormFieldContext(),{direction:C}=F.useUser(),f="ltr"===C,y=r&&!m,R=void 0!==o,L=c.useInputGroupContext(),v=null!==L,w=L?L.last?f?"groupRight":"groupLeft":0===L.index?f?"groupLeft":"groupRight":"groupMiddle":void 0,{variantClasses:S,styles:{textFieldEndContent:I}}=s.useComponentTheme(p.TextFieldRedwoodTheme,{middleContent:e,textAreaResizeDirection:i&&"textarea"===e?C:void 0}),{classes:N,styles:{readonlyTextFieldMiddleBase:g,readonlyTextFieldMiddleNotInEnabledForm:j,readonlyTextFieldMiddleInEnabledForm:E,readonlyTextFieldMiddleInEnabledFormNotTextarea:A}}=s.useComponentTheme(b.ReadonlyTextFieldRedwoodTheme,{insideNonReadonlyForm:y?"isInsideNonReadonlyForm":"notInsideNonReadonlyForm",insideLabel:R?"hasInsideLabel":"noInsideLabel",textarea:"textarea"===e?"isTextArea":"notTextArea",loading:x?"isLoading":"notLoading",withinGroup:v?"isWithinGroup":void 0,inputGroupPosition:w,resize:i??"none"}),U=l.classNames([S,g,y&&E,y&&"textarea"!==e&&A,!y&&j]);return t.jsxs("div",{role:"presentation",class:N,ref:d,children:[t.jsxs("div",{class:U,children:[o,n]}),a&&t.jsx("span",{class:I,children:t.jsx(T.Flex,{justify:"center",align:"center",hasZeroMargins:!0,children:a})})]})},R=r.forwardRef((({outerClassNames:e,label:o,labelEdge:a,labelStartWidth:s,compactUserAssistance:d,inlineUserAssistance:l,mainContent:i,endContent:r,rootRef:m,variant:u,resize:x,...h},T)=>{const C="textarea"===u?"textArea":"textField";return t.jsxs("div",{...h,ref:T,class:e,children:[d,t.jsx(n.LabelValueLayout,{label:o,labelEdge:a,labelStartWidth:s,parentComponentVariant:C,children:t.jsx(y,{mainContent:i,endContent:r,rootRef:m,...u?{variant:u,resize:x}:{}})}),l]})})),L=r.forwardRef((({outerClassNames:e,compactUserAssistance:o,inlineUserAssistance:n,mainContent:a,endContent:s,label:d,rootRef:l,variant:i,resize:r,...m},u)=>t.jsxs("div",{...m,ref:u,class:e,children:[o,t.jsx(y,{insideLabel:d,mainContent:a,endContent:s,rootRef:l,...i?{variant:i,resize:r}:{}}),n]}))),v=r.forwardRef((({columnSpan:e=1,label:n,labelEdge:r,mainContent:m,endContent:u,variant:x,mainFieldRef:h,testId:T,...C},c)=>{const F=d.useTestId(T),{classes:b,styles:y}=s.useComponentTheme(p.TextFieldRedwoodTheme,{readonly:"isReadonly"}),{baseTheme:v}=s.useComponentTheme(o.LabelRedwoodTheme),{baseTheme:w}=s.useComponentTheme(f.FormLayoutRedwoodTheme),{formControlBase:S}=y,{baseTheme:I}=s.useComponentTheme(a.SkeletonRedwoodTheme),N=l.classNames([b,I,S,w,v,i.layoutSpanStyles.layoutSpanColumn[e]]);return void 0===n||"start"!==r&&"top"!==r?t.jsx(L,{outerClassNames:N,ref:c,label:n,mainContent:m,endContent:u,rootRef:h,variant:x,...C,...F}):t.jsx(R,{outerClassNames:N,label:n,labelEdge:r,ref:c,mainContent:m,endContent:u,rootRef:h,variant:x,...C,...F})})),w=r.forwardRef((({columnSpan:e=1,hasInsideLabel:n=!1,variant:d="default",...r},m)=>{const u=c.useInputGroupContext(),{isReadonly:x}=h.useFormFieldContext(),{baseTheme:T}=s.useComponentTheme(f.FormLayoutRedwoodTheme),{baseTheme:C}=s.useComponentTheme(o.LabelRedwoodTheme),{classes:F,styles:b}=s.useComponentTheme(p.TextFieldRedwoodTheme,{readonly:x?"isReadonly":"notReadonly",formControlInsideLabel:n?"hasInsideLabel":"noInsideLabel",withinGroup:null!==u?"isWithinGroup":void 0}),{formControlBase:y,textFieldBase:R,textFieldEmbedded:L}=b,{baseTheme:v}=s.useComponentTheme(a.SkeletonRedwoodTheme),w=l.classNames([v,y,R,"embedded"===d&&L,F,T,C,i.layoutSpanStyles.layoutSpanColumn[e]]);return t.jsx("div",{...r,class:w,ref:m})}));e.ReadonlyTextField=v,e.StyledTextField=w}));
//# sourceMappingURL=StyledTextField-8ac3bbb4.js.map
