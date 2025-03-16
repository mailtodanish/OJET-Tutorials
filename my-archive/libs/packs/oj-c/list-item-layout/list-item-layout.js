define(["require", "exports", "preact/jsx-runtime", '@oracle/oraclejet-preact/translationBundle', "@oracle/oraclejet-preact/UNSAFE_ListItemLayout", "@oracle/oraclejet-preact/UNSAFE_Inset", "ojs/ojvcomponent", "css!oj-c/list-item-layout/list-item-layout-styles.css"], function (require, exports, jsx_runtime_1, translationBundle_1, UNSAFE_ListItemLayout_1, UNSAFE_Inset_1, ojvcomponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListItemLayout = void 0;
    exports.ListItemLayout = (0, ojvcomponent_1.registerCustomElement)('oj-c-list-item-layout', ({ children, ...otherProps }) => {
        const primary = children;
        const actionSlot = otherProps.action ? ((0, jsx_runtime_1.jsx)("div", { "data-oj-clickthrough": "disabled", children: otherProps.action })) : undefined;
        const navSlot = otherProps.navigation ? ((0, jsx_runtime_1.jsx)("div", { "data-oj-clickthrough": "disabled", children: otherProps.navigation })) : undefined;
        const layout = otherProps.inset === 'none' ? ((0, jsx_runtime_1.jsx)(UNSAFE_ListItemLayout_1.ListItemLayout, { primary: primary, overline: otherProps.overline, selector: otherProps.selector, leading: otherProps.leading, secondary: otherProps.secondary, tertiary: otherProps.tertiary, metadata: otherProps.metadata, trailing: otherProps.trailing, action: actionSlot, quaternary: otherProps.quaternary, navigation: navSlot })) : ((0, jsx_runtime_1.jsx)(UNSAFE_Inset_1.Inset, { variant: "listview", children: (0, jsx_runtime_1.jsx)(UNSAFE_ListItemLayout_1.ListItemLayout, { primary: primary, overline: otherProps.overline, selector: otherProps.selector, leading: otherProps.leading, secondary: otherProps.secondary, tertiary: otherProps.tertiary, metadata: otherProps.metadata, trailing: otherProps.trailing, action: actionSlot, quaternary: otherProps.quaternary, navigation: navSlot }) }));
        return (0, jsx_runtime_1.jsx)(ojvcomponent_1.Root, { children: layout });
    }, "ListItemLayout", { "slots": { "": {}, "overline": {}, "selector": {}, "leading": {}, "secondary": {}, "tertiary": {}, "metadata": {}, "trailing": {}, "action": {}, "quaternary": {}, "navigation": {} }, "properties": { "inset": { "type": "string", "enumValues": ["none", "listInset"] } }, "extension": { "_OBSERVED_GLOBAL_PROPS": ["aria-label"] } }, undefined, {
        '@oracle/oraclejet-preact': translationBundle_1.default
    });
});
