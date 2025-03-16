define("oj-c/utils/UNSAFE_keyUtils/keySetUtils",["require","exports","ojs/ojkeyset"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getFirstKey=e.isEmpty=e.keysToKeySet=e.keySetToKeys=void 0;e.keySetToKeys=e=>{if(!e)return{all:!1,keys:new Set};let t={};if(e.isAddAll()){t={all:!0,deletedKeys:new Set(e.deletedValues())}}else if(!e.isAddAll()){t={all:!1,keys:new Set(e.values())}}return t};e.keysToKeySet=e=>{let s;return e.all?(s=new t.AllKeySetImpl,s=s.delete(new Set(e.deletedKeys.values()))):e.all||(s=new t.KeySetImpl(new Set(e.keys.values()))),s};e.isEmpty=e=>!e.all&&0===e.keys.size;e.getFirstKey=(e,t)=>{if(!1===e.all&&e.keys.size>0){const[t]=e.keys;return t}return t.length>0?t[0]:null}})),define("oj-c/hooks/UNSAFE_useListData/useListData",["require","exports","ojs/ojdataproviderfactory","preact/hooks"],(function(require,e,t,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useListData=void 0;const n=Object.freeze({status:"loading",data:null}),a={isInitialFetchDeferred:!1};e.useListData=(e,t=a)=>{const l=(0,s.useRef)(null),u=(0,s.useRef)(0),d=(0,s.useRef)(!1),b=(0,s.useRef)(null),p=(0,s.useRef)(null),h=t.fetchSize&&t.fetchSize>0?t.fetchSize:25;if(!e){return[c("exact"),e=>Promise.resolve()]}const v=(0,s.useMemo)((()=>r(e)),[e]),[j,g]=(0,s.useReducer)(i,0===t.initialRowsFetched?c("atLeast"):n),x=(0,s.useCallback)((async(e,s)=>{const n={attributes:t.attributes,sortCriteria:t.sortCriteria,filterCriterion:t.filterCriterion,offset:e.offset,size:e.count},a=!0===d.current?"exact":"atLeast";if(0!==e.count)try{const t=(await v.fetchByOffset(n)).results;s&&s(t),g({status:"success",data:{offset:e.offset,data:t,totalSize:u.current,sizePrecision:a}})}catch(e){g({status:"error",error:e})}else g({status:"success",data:{offset:e.offset,data:[],totalSize:u.current,sizePrecision:a}})}),[v,t.attributes,t.filterCriterion,t.sortCriteria]),S=(0,s.useCallback)((async()=>{g({status:"loading",data:null});const e=new AbortController;p.current=e;const s=v.fetchFirst({attributes:t.attributes,sortCriteria:t.sortCriteria,filterCriterion:t.filterCriterion,size:h,signal:e.signal})[Symbol.asyncIterator]();b.current=s;try{const e=await s.next();if(s!==b.current)return;const n=e.value.fetchParameters;if(n.signal&&n.signal.aborted)return;u.current=e.value.data.length,void 0!==e.done&&(d.current=e.done);const a=t.initialRowsFetched&&t.initialRowsFetched>0?t.initialRowsFetched:h;x({offset:0,count:Math.min(u.current,a)})}catch(e){if(e instanceof DOMException&&"AbortError"===e.name)return;g({status:"error",error:e}),b.current=null}}),[v,x,t.attributes,t.filterCriterion,t.sortCriteria,t.fetchSize]),k=(0,s.useCallback)((async e=>{if(null===b.current)S();else{const t=e.offset+e.count;if(t>u.current){if(null==l.current){const s=o(b,u.current,t);l.current=s;try{const t=await s;void 0!==t.done&&(d.current=t.done);const n=t.total;(n>0||0===n&&d.current)&&(u.current=n,x({offset:e.offset,count:Math.min(u.current-e.offset,e.count)})),l.current=null}catch(e){g({status:"error",error:e}),l.current=null}}}else x(e)}}),[j,S,x]),M=(0,s.useCallback)((()=>{b.current=null,l.current=null,u.current=0,d.current=!1,0===t.initialRowsFetched?g(c("atLeast")):t.isInitialFetchDeferred?g({status:"loading",data:null}):S()}),[S,t.isInitialFetchDeferred,t.initialRowsFetched]);(0,s.useEffect)((()=>{M()}),[M]);const C=(0,s.useCallback)((e=>{if("success"===j.status&&j.data){const s=j.data;let n,a=s.data.length,r=!1;if(e.detail.add){const n=f(e.detail.add,s,t,!0);u.current=u.current+n,a+=n,r=n>0||"exact"===s.sizePrecision,0===n&&(d.current=!1)}if(e.detail.remove){const n=f(e.detail.remove,s,t,!1);u.current=Math.max(0,u.current-n),a=Math.max(0,a-n),r=r||n>0}const i=e.detail.update;i&&(r=r||m(i,s,t),n=e=>{y(i,s,e)}),r&&x({offset:s.offset,count:a},n)}}),[j,t,x]),I=(0,s.useCallback)((e=>{let t=-1;const s=e.detail?.disregardAfterKey;if(s&&"success"===j.status){const e=j.data.data.findIndex((e=>e.metadata.key===s));if(e>-1&&(t=j.data.data.length-e-1),0===t&&j.data.data.length>=h)return}t>-1&&"success"===j.status?(u.current=u.current-t,k({offset:j.data.offset,count:Math.max(j.data.data.length,h)})):("loading"===j.status&&p.current?.abort(),M())}),[j,M]);return(0,s.useEffect)((()=>(v.addEventListener("refresh",I),v.addEventListener("mutate",C),()=>{v.removeEventListener("refresh",I),v.removeEventListener("mutate",C)})),[v,M,C]),[j,k]};const r=e=>(0,t.getEnhancedDataProvider)(e,{fetchFirst:{caching:"visitedByCurrentIterator"}}),i=(e,t)=>e.status===t.status&&"loading"===t.status?e:t,o=async(e,t,s)=>await l(e,t,s),l=async(e,t,s)=>{const n=e.current;if(null===n)return{total:-1,done:void 0};const a=await n.next();return n===e.current?(t+=a.value.data.length)>=s||a.done?{total:t,done:a.done}:l(e,t,s):{total:-1,done:void 0}},c=e=>"atLeast"===e?u:d,u=Object.freeze({status:"success",data:{offset:0,data:[],totalSize:0,sizePrecision:"atLeast"}}),d=Object.freeze({status:"success",data:{offset:0,data:[],totalSize:0,sizePrecision:"exact"}}),f=(e,t,s,n)=>{let a=0;if(b(e,s)){const s=n?e.indexes?.sort(((e,t)=>e-t)):e.indexes;let r=t.totalSize-1;s?.forEach((e=>{e<=r&&(a=a+=1,n&&(r=r+=1))}))}return a},m=(e,t,s)=>{if(b(e,s)){const s=e.indexes?e.indexes:[],n=t.offset,a=n+t.data.length;for(let e=0;e<s.length;e++)if(s[e]>=n&&s[e]<a)return!0}return!1},y=(e,t,s)=>{e.keys.forEach((e=>{const n=s.find((t=>t.metadata.key==e)),a=t.data.find((t=>t.metadata.key==e));a&&n&&a.data===n.data&&(n.data=new Proxy(n.data,{}))}))},b=(e,t)=>e.indexes&&null==t.sortCriteria&&null==t.filterCriterion})),define("oj-c/list-view/useHandleRemoveCurrentKey",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useHandleRemoveCurrentKey=void 0,e.useHandleRemoveCurrentKey=function(e,s,n){const a=(0,t.useRef)();(0,t.useEffect)((()=>{const t=a.current;if(s&&n&&t&&e&&t.offset===e.offset&&t!==e){const a=e.data.map((e=>e.metadata.key));if(-1===a.indexOf(s)){const e=t?.data.map((e=>e.metadata.key));let r=e.indexOf(s);if(r>-1){const t=r===e.length-1;for(;r>=0&&r<e.length;){r=t?r-1:r+1;const s=e[r];if(a.indexOf(s)>-1){n({value:s});break}}}}}a.current=e}),[e,s,n])}})),define("oj-c/list-view/useListViewPreact",["require","exports","preact/hooks","../utils/UNSAFE_keyUtils/keySetUtils","../hooks/UNSAFE_useListData/useListData","./useHandleRemoveCurrentKey","ojs/ojlogger"],(function(require,e,t,s,n,a,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useListViewPreact=void 0;e.useListViewPreact=({"aria-label":e,"aria-labelledby":i,data:o,gridlines:l,onCurrentItemChanged:c,selectionMode:u,selected:d,scrollPolicyOptions:f,onSelectedChanged:m,onOjItemAction:y,onOjFirstSelectedItem:b,reorderable:p,onOjReorder:h},v,j)=>{const g=(0,t.useRef)(),x=(0,t.useRef)(),[S,k]=(0,n.useListData)(o,{fetchSize:f?.fetchSize}),M="error"!==S.status?S.data:null,[C,I]=(0,t.useState)(),w=(0,t.useRef)(),L=d?.keys.all?M?.data.length:d?.keys.keys?.size;let R;M&&M.data.length>0&&"singleRequired"===u&&0===L?(R={all:!1,keys:new Set([M.data[0].metadata.key])},m&&m((0,s.keysToKeySet)(R))):R=(0,s.keySetToKeys)(d),(0,t.useEffect)((()=>{"loading"===S.status?x.current=v("list data is in fetch state"):x.current&&(x.current(),x.current=void 0)}),[S.status,v]);const _=e=>{I(e.value),c&&c(e.value)},E=(0,t.useCallback)((e=>{if(d&&b&&o){const t=(0,s.keySetToKeys)(d);if(!(0,s.isEmpty)(t)){const n=(0,s.getFirstKey)(t,e),a=e.find((e=>n===e.metadata.key));if(a){const e=a.data;if(void 0===w.current||e!==w.current.data){const t={key:n,data:e};w.current={...t},b(t)}}else{const e=o.fetchByKeys({keys:new Set([n])});g.current=e,e.then((t=>{if(e===g.current){const e=t.results.get(n);if(void 0===e)r.warn(`Item with '${n}' key couldn't be found `);else{const t={key:n,data:e.data};w.current={...t},b(t)}}}))}}}}),[d,b,o,M]);(0,t.useEffect)((()=>{"singleRequired"===u&&M&&M.data.length>0&&E(M.data)}),[u,M,E]);(0,t.useEffect)((()=>{const e=e=>{if(b&&e.detail.update&&w.current){const t=e.detail.update,s=Array.from(t.keys).indexOf(w.current.key);if(s>-1&&t.data&&s<t.data.length){const e=t.data[s];if(w.current.data!==e){w.current.data=e;const t={...w.current};b(t)}}}};return o&&o.addEventListener("mutate",e),()=>{o&&o.removeEventListener("mutate",e)}}),[o,b]);const F="error"===S.status?null:S.data;(0,a.useHandleRemoveCurrentKey)(F,C,_);const A=f?.scroller?{scroller:()=>f.scroller?document.querySelector(f.scroller):null}:void 0,P=(0,t.useMemo)((()=>function(e){if("success"!==e.status)return{count:0};const t=e.data.data;let s=0;for(let e=0;e<t.length&&null!=t[e].metadata.suggestion;e++)s+=1;return{count:s}}(S)),[S]),O=(0,t.useCallback)((()=>{if(M){const e=f&&f.fetchSize?f.fetchSize:25;k({offset:0,count:M.data.length+e})}}),[f,k,M]);return{status:S.status,listViewProps:{"aria-label":e,"aria-labelledby":i,data:M?M.data:null,currentKey:C,getRowKey:e=>e.metadata.key,gridlines:l,onCurrentKeyChange:_,hasMore:!!M&&"atLeast"===M.sizePrecision,onLoadMore:O,onSelectionChange:e=>{"singleRequired"===u&&0===e.value.keys?.size||m&&!j(e.target)&&m((0,s.keysToKeySet)(e.value))},selectedKeys:R,selectionMode:"singleRequired"===u?"single":u,promotedSection:P,onItemAction:e=>{const t=e.context.data,s={context:{item:t,data:t.data}};y&&!j(e.target)&&y(s)},onReorder:"enabled"===p?.items?e=>{h&&h(e)}:null,viewportConfig:A}}}})),define("oj-c/list-view/DataFetchLiveRegion",["require","exports","preact/jsx-runtime","preact/hooks","@oracle/oraclejet-preact/UNSAFE_LiveRegion","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,t,s,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DataFetchLiveRegion=void 0;e.DataFetchLiveRegion=e=>{const[r,i]=(0,s.useState)(!1);(0,s.useEffect)((()=>{let t;return e.isFetching&&(t=setTimeout((()=>{e.isFetching&&i(!0)}),50)),()=>{t&&clearTimeout(t)}}),[e.isFetching]);const o=(0,a.useTranslationBundle)("@oracle/oraclejet-preact");return e.isFetching?(0,t.jsx)(n.LiveRegion,{timeout:50,children:o.list_msgFetchingData()}):r?(0,t.jsx)(n.LiveRegion,{timeout:0,children:o.list_msgFetchCompleted()}):(0,t.jsx)(t.Fragment,{})}})),define("oj-c/list-view/listViewItem",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,t,s,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ListItem=void 0;e.ListItem=({context:e,itemTemplate:a})=>{const{isTabbable:r}=(0,s.useTabbableMode)(),i=(0,n.useTranslationBundle)("@oracle/oraclejet-preact"),o={isTabbable:r,data:e.data.data,item:e.data};return(0,t.jsxs)(s.TabbableModeContext.Provider,{value:{isTabbable:r},children:[a&&a(o),o.item.metadata?.suggestion&&(0,t.jsx)("span",{class:"oj-helper-hidden-accessible",children:i.list_suggestion()})]})}})),define("oj-c/utils/PRIVATE_ItemsMenu/menu-item-icon",["require","exports","preact/jsx-runtime"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MenuItemIcon=void 0,e.MenuItemIcon=function(e){return"img"===e.icon.type?(0,t.jsx)("img",{src:e.icon.src}):(0,t.jsx)("span",{class:e.icon.class})}})),define("oj-c/utils/PRIVATE_ItemsMenu/menu-select-items",["require","exports","preact/jsx-runtime","./menu-item-icon","@oracle/oraclejet-preact/UNSAFE_Menu"],(function(require,e,t,s,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MenuSelectItems=void 0,e.MenuSelectItems=function(e){return(0,t.jsx)(t.Fragment,{children:e.items.map((e=>e&&(0,t.jsx)(n.SelectMenuItem,{label:e.label,isDisabled:e.disabled,endIcon:e.endIcon?(0,t.jsx)(s.MenuItemIcon,{icon:e.endIcon}):void 0,value:e.value})))})}})),define("oj-c/utils/PRIVATE_ItemsMenu/items-menu",["require","exports","preact/jsx-runtime","./menu-item-icon","./menu-select-items","@oracle/oraclejet-preact/UNSAFE_Menu"],(function(require,e,t,s,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ItemsMenu=void 0;e.ItemsMenu=({items:r=[],selection:i={},onSelectionChanged:o,onOjMenuAction:l,isSplitMenu:c=!1,onOjMenuSelection:u})=>{const d=e=>{const t=i[e];return t&&"string"==typeof t?t:void 0},f=e=>{const t=i[e];return Array.isArray(t)?t:[]};function m(e,t,s){return n=>{s?.({value:n.value}),u?.({value:n.value}),o?.(((e,t,s)=>{const n={...e};return Array.isArray(s)&&0===s.length?delete n[t]:n[t]=s,n})(t,e,n.value))}}return(0,t.jsx)(t.Fragment,{children:r.map((r=>{switch(r.type){case"divider":case"separator":return(0,t.jsx)(a.MenuSeparator,{});case"submenu":return r.items&&r.label&&!c?(0,t.jsx)(a.Submenu,{label:r.label,children:(0,t.jsx)(e.ItemsMenu,{items:r.items,selection:i,onSelectionChanged:o,onOjMenuAction:l})}):void 0;case"selectsingle":return r.items&&r.key&&!c?(0,t.jsx)(a.SelectSingleMenuGroup,{value:r.selection||d(r.key),onCommit:m(r.key,i,r.onSelection),children:(0,t.jsx)(n.MenuSelectItems,{items:r.items})}):void 0;case"selectmultiple":return r.items&&r.key&&!c?(0,t.jsx)(a.SelectMultipleMenuGroup,{value:r.selection||f(r.key),onCommit:m(r.key,i,r.onSelection),children:(0,t.jsx)(n.MenuSelectItems,{items:r.items})}):void 0;case void 0:case"item":return r.label?(0,t.jsx)(a.MenuItem,{label:r.label,isDisabled:r.disabled,variant:c?void 0:r.variant,startIcon:!c&&r.startIcon&&(0,t.jsx)(s.MenuItemIcon,{icon:r.startIcon}),endIcon:!c&&r.endIcon&&(0,t.jsx)(s.MenuItemIcon,{icon:r.endIcon}),onAction:(u=r.key,y=r.onAction,()=>{y?.(),l?.({key:u})})}):void 0;default:return}var u,y}))})}})),define("oj-c/list-view/list-view",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","ojs/ojcontext","ojs/ojvcomponent","preact/compat","preact/hooks","@oracle/oraclejet-preact/UNSAFE_EmptyList","@oracle/oraclejet-preact/UNSAFE_ListView","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle","./useListViewPreact","./DataFetchLiveRegion","./listViewItem","../utils/PRIVATE_ItemsMenu/items-menu","css!oj-c/list-view/list-view-styles.css"],(function(require,e,t,s,n,a,r,i,o,l,c,u,d,f,m){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ListView=void 0;const y=({addBusyState:e,isClickthroughDisabled:s,itemTemplate:n,noData:a,contextMenuConfig:y,onOjContextMenuAction:b,onOjContextMenuSelection:p,...h})=>{const{status:v,listViewProps:j}=(0,u.useListViewPreact)(h,e,s),g=(0,c.useTranslationBundle)("@oracle/oraclejet-preact"),x=(0,i.useCallback)((e=>{const s=e.data,n={item:s,data:s.data},a=y?.items(n);return(0,t.jsx)(m.ItemsMenu,{items:a,onOjMenuAction:({key:e})=>{b?.({menuItemKey:e,contextMenuContext:n})},onOjMenuSelection:({value:e})=>{p?.({value:e,contextMenuContext:n})}})}),[y?.items,b,p]),S=(0,i.useMemo)((()=>({itemsRenderer:x,accessibleLabel:y?.accessibleLabel})),[y?.accessibleLabel,x]);if("success"===v&&!j.hasMore&&0===j.data?.length){if(a)return(0,t.jsx)(o.EmptyList,{"aria-label":j["aria-label"],"aria-labelledby":j["aria-labelledby"],children:a(r.Children)});{const e=g.noData_message();return(0,t.jsx)(o.EmptyList,{"aria-label":j["aria-label"],"aria-labelledby":j["aria-labelledby"],children:e})}}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.ListView,{...j,...y&&{contextMenuConfig:S},children:(0,i.useCallback)((e=>(0,t.jsx)(f.ListItem,{context:e,itemTemplate:n})),[n])}),(0,t.jsx)(d.DataFetchLiveRegion,{isFetching:"loading"===v})]})};e.ListView=(0,a.registerCustomElement)("oj-c-list-view",(({selectionMode:e="none",reorderable:s={items:"disabled"},...r})=>{const o=(0,i.useRef)(),l=(0,i.useRef)(n.getContext(o.current).getBusyContext()),c=(0,i.useCallback)((e=>l.current?.addBusyState({description:`oj-c-list-view: ${e}`})),[]),u=(0,i.useCallback)((e=>null!==e&&void 0!==o.current&&b({target:e},o.current)),[]),d={selectionMode:e,reorderable:s,...r};return(0,t.jsx)(a.Root,{id:d.id,ref:o,children:(0,t.jsx)(y,{addBusyState:c,isClickthroughDisabled:u,...d})})}),"ListView",{properties:{currentItem:{type:"any",readOnly:!0,writeback:!0},data:{type:"DataProvider|null"},gridlines:{type:"object",properties:{item:{type:"string",enumValues:["hidden","visible"]},top:{type:"string",enumValues:["hidden","visible"]},bottom:{type:"string",enumValues:["hidden","visible"]}}},scrollPolicyOptions:{type:"object",properties:{fetchSize:{type:"number"},scroller:{type:"string"}}},selected:{type:"object",writeback:!0},selectionMode:{type:"string",enumValues:["none","multiple","single","singleRequired"]},contextMenuConfig:{type:"object",properties:{accessibleLabel:{type:"string"},items:{type:"function"}}},reorderable:{type:"object",properties:{items:{type:"string",enumValues:["disabled","enabled"]}}}},slots:{itemTemplate:{data:{}},noData:{data:{}}},events:{ojItemAction:{},ojFirstSelectedItem:{},ojContextMenuAction:{bubbles:!0},ojContextMenuSelection:{bubbles:!0},ojReorder:{}},extension:{_WRITEBACK_PROPS:["currentItem","selected"],_READ_ONLY_PROPS:["currentItem"],_OBSERVED_GLOBAL_PROPS:["aria-label","aria-labelledby","id"]}},{selectionMode:"none",reorderable:{items:"disabled"}},{"@oracle/oraclejet-preact":s.default});const b=function(e,t){let s=e.target;for(;null!=s&&s!==t;){if(p(s))return!0;s=s.parentNode}return!1},p=function(e){return"disabled"===e.dataset.ojClickthrough}})),define("oj-c/list-view",["require","exports","oj-c/list-view/list-view"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ListView=void 0,Object.defineProperty(e,"ListView",{enumerable:!0,get:function(){return t.ListView}})}));
//# sourceMappingURL=list-view.js.map