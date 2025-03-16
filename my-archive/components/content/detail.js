define(["require", "exports", "preact/jsx-runtime", "react-router-dom", "ojs/ojinputtext"], function (require, exports, jsx_runtime_1, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Detail = void 0;
    function Detail() {
        const location = (0, react_router_dom_1.useLocation)();
        const queryPrameter = new URLSearchParams(location.search);
        const { name } = (0, react_router_dom_1.useParams)();
        return ((0, jsx_runtime_1.jsxs)("div", { class: "oj-web-applayout-max-width oj-web-applayout-content", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Detail" }), (0, jsx_runtime_1.jsxs)("p", { children: ["id: ", queryPrameter.get("id")] }), (0, jsx_runtime_1.jsxs)("p", { children: ["name: ", name] })] }));
    }
    exports.Detail = Detail;
    ;
});
//# sourceMappingURL=detail.js.map