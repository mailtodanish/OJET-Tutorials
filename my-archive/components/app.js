define(["require", "exports", "preact/jsx-runtime", "ojs/ojvcomponent", "preact/hooks", "react-router-dom", "./content/home", "./content/profile", "./content/setting", "./footer", "./header", "ojs/ojcontext"], function (require, exports, jsx_runtime_1, ojvcomponent_1, hooks_1, react_router_dom_1, home_1, profile_1, setting_1, footer_1, header_1, Context) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    exports.App = (0, ojvcomponent_1.registerCustomElement)("app-root", ({ appName = "App Name1", userLogin = "john.hancock@oracle.com" }) => {
        (0, hooks_1.useEffect)(() => {
            Context.getPageContext().getBusyContext().applicationBootstrapComplete();
        }, []);
        const routingList = [
            {
                path: "home",
                detail: {
                    label: "Home",
                    iconClass: "oj-navigationlist-item-icon oj-ux-ico-instructor-training-plus",
                },
            },
            {
                path: "profile",
                detail: {
                    label: "Profile",
                    iconClass: "oj-navigationlist-item-icon oj-ux-ico-instructor-training-plus",
                },
            },
            {
                path: "settings",
                detail: {
                    label: "Settings",
                    iconClass: "oj-navigationlist-item-icon oj-ux-ico-instructor-training-plus",
                },
            },
        ];
        const pageChangeHandler = (value) => {
            console.error("pageChangeHandler", value);
        };
        return ((0, jsx_runtime_1.jsxs)("div", { id: "appContainer", class: "oj-web-applayout-page", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(header_1.Header, { appName: appName, userLogin: userLogin, allRoutes: routingList, page: "profile", onPageChanged: pageChangeHandler }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(home_1.Home, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "home/*", element: (0, jsx_runtime_1.jsx)(home_1.Home, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "profile/*", element: (0, jsx_runtime_1.jsx)(profile_1.Profile, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "settings/*", element: (0, jsx_runtime_1.jsx)(setting_1.Settings, {}) })] }) })] }), (0, jsx_runtime_1.jsx)(footer_1.Footer, {})] }));
    }, "App", { "properties": { "appName": { "type": "string" }, "userLogin": { "type": "string" } } }, { "appName": "App Name1", "userLogin": "john.hancock@oracle.com" });
});
//# sourceMappingURL=app.js.map