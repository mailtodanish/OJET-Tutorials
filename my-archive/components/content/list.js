define(["require", "exports", "preact/jsx-runtime", "react-router-dom", "ojs/ojinputtext"], function (require, exports, jsx_runtime_1, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.List = void 0;
    function List() {
        const navidate = (0, react_router_dom_1.useNavigate)();
        return ((0, jsx_runtime_1.jsxs)("div", { class: "oj-web-applayout-max-width oj-web-applayout-content", children: [(0, jsx_runtime_1.jsx)("h1", { children: "List" }), (0, jsx_runtime_1.jsx)("a", { onClick: () => { navidate("/settings/detail/test/?id=100"); }, children: "GOTO Detail Page" })] }));
    }
    exports.List = List;
    ;
});
//# sourceMappingURL=list.js.map