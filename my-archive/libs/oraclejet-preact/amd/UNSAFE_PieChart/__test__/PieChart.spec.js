define(['preact/jsx-runtime', '@testing-library/preact', 'chai', '../../PieChart-ab4c95f7', '../themes/PieChartStyles.css', 'css!./../../PieChartStyles.styles.css', '../../TrackResizeContainer-905caab2', 'preact/hooks', '../../useSize-535990b2', '../../useResizeObserver-c63865cc', '../../size-4e81acac', '../../utils-61ef4ad6', '../../Common/themes/themeContract.css', '../../colorUtils-7c069766', '../../_curry1-df649359', '../../pathUtils-ec75f879', '../../layoutUtils-09c68ca9', '../../scale-3ae48ed5', '../../labelUtils-79523a0e', '../../textUtils-47cf29da', '../../accUtils-1557920a', '../../clientHints-030d25aa', '../../utils-2e2a48d1', '../../dimensionUtils-61978138', '../../getLocale-ae79e654', '../../classNames-08d99695', '../../usePieChartNav-025dbe40', '../../layoutUtils-3c2d340e', '../../eventsUtils-5d567a9d', '../../useVisHover-28319fef', '../../mergeProps-bcfa6a92', '../../useDatatip-d00735e9', '../../Layer-3cc44164', 'preact/compat', '../../LayerHost-eab40731', 'preact', '../../Common/themes/redwood/theme', '../../UNSAFE_Layer/themes/LayerStyles.css', 'css!./../../LayerStyles.styles.css', '../../useThemeInterpolations-41cbd433', '../../useColorScheme-711c1e4b', '../../useScale-e6b83382', '../../theme-a8f3d819', '../../Theme-d945adae', '../../mergeInterpolations-9ede4cf7', '../../mergeDeepWithKey-aaab9019', '../../_curry3-83878f86', '../../_curry2-86c52b86', '../../_isObject-42bafc94', '../../Floating-85851b1a', '../../useFloating-bbd3396b', '../../useUser-6dd85af9', '../../positionUtils-3193ab54', '../../refUtils-d354a169', '../../useOutsideClick-4519a64e', '../../arrayUtils-6ee96a35', '../../useComponentTheme-5aa41a8f', '../../logger-0f873e29', '../../UNSAFE_Floating/themes/redwood/FloatingTheme', '../../UNSAFE_Floating/themes/FloatingStyles.css', 'css!./../../FloatingStyles.styles.css', '../../UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', '../../UNSAFE_Floating/themes/redwood/FloatingVariants.css', '../../vanilla-extract-recipes-createRuntimeFn.esm-d881c69a', '../../vanilla-extract-dynamic.esm-eceadd82', '../../UNSAFE_Floating/themes/FloatingContract.css', '../../hooks/PRIVATE_useDatatip/themes/useDatatip.css', 'css!./../../useDatatip.styles.css', '../../useId-c9578d26', '../../datatipUtils-1b8ab042', '../../clientUtils-95c1280f', '../../util-5bb1f200', '../../VisTabularDatatip-5e43455b', '../../PRIVATE_VisTabularDatatip/themes/VisTabularDatatipStyles.css', 'css!./../../VisTabularDatatipStyles.styles.css', '../../colorUtils-31010e27', '../../useTestId-82cf22a4', '../../useVisTouchResponse-36416652', '../../stringUtils-0ae982c2'], (function(e,t,a,s,i,l,c,o,r,n,d,u,h,m,b,p,y,g,U,F,f,S,T,C,_,x,A,v,D,E,N,P,V,w,L,R,I,k,z,B,j,H,O,K,W,q,G,J,M,Q,X,Y,Z,$,ee,te,ae,se,ie,le,ce,oe,re,ne,de,ue,he,me,be,pe,ye,ge,Ue,Fe,fe,Se,Te,Ce,_e,xe){"use strict";const Ae=[{id:1,value:5},{id:2,value:4},{id:3,value:4}];describe("Test PieChart component",(()=>{it("render",(async function(){const i=t.render(e.jsx(s.PieChart,{data:Ae,width:"400px",height:"400px","aria-label":"pie chart label"})),l=await i.getAllByLabelText("pie chart label");a.expect(l).not.null;const c=i.getByRole("application");a.expect(c).not.null}))}))}));
//# sourceMappingURL=PieChart.spec.js.map
