define(["require", "exports", "preact/jsx-runtime", "react-router-dom", "./detail", "./list", "ojs/ojinputtext"], function (require, exports, jsx_runtime_1, react_router_dom_1, detail_1, list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = void 0;
    function Settings() {
        return ((0, jsx_runtime_1.jsxs)("div", { class: "oj-web-applayout-max-width oj-web-applayout-content", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Setting" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "list" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "list", element: (0, jsx_runtime_1.jsx)(list_1.List, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "detail/:name", element: (0, jsx_runtime_1.jsx)(detail_1.Detail, {}) })] })] }));
    }
    exports.Settings = Settings;
});
//# sourceMappingURL=setting.js.map