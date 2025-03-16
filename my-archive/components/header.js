define(["require", "exports", "preact/jsx-runtime", "ojs/ojarraydataprovider", "luxon", "ojs/ojresponsiveutils", "preact/hooks", "react-router-dom", "ojs/ojbutton", "ojs/ojmenu", "ojs/ojnavigationlist", "ojs/ojoption", "ojs/ojtoolbar"], function (require, exports, jsx_runtime_1, ArrayDataProvider, luxon_1, ResponsiveUtils, hooks_1, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Header = void 0;
    function Header({ appName, userLogin, allRoutes, page, onPageChanged }) {
        const [currentDate, setcurrentDate] = (0, hooks_1.useState)("");
        console.error(luxon_1.DateTime);
        let c = luxon_1.DateTime.now().setZone('America/New_York').toISO() || "";
        setcurrentDate(c);
        const mediaQueryRef = (0, hooks_1.useRef)(window.matchMedia(ResponsiveUtils.getFrameworkQuery("sm-only")));
        const [isSmallWidth, setIsSmallWidth] = (0, hooks_1.useState)(mediaQueryRef.current.matches);
        const routesADP = new ArrayDataProvider(allRoutes, { keyAttributes: "path" });
        (0, hooks_1.useEffect)(() => {
            mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);
            return () => mediaQueryRef.current.removeEventListener("change", handleMediaQueryChange);
        }, [mediaQueryRef]);
        function handleMediaQueryChange(e) {
            setIsSmallWidth(e.matches);
        }
        function getDisplayType() {
            return isSmallWidth ? "icons" : "all";
        }
        const renderNavList = (item) => {
            return ((0, jsx_runtime_1.jsx)("li", { id: item.data.path, children: (0, jsx_runtime_1.jsxs)("a", { href: "#", children: [(0, jsx_runtime_1.jsx)("span", { class: item.data.detail.iconClass }), getDisplayType() === "all" ? item.data.detail.label : ""] }) }));
        };
        function getEndIconClass() {
            return isSmallWidth ? "oj-icon demo-appheader-avatar" : "oj-component-icon oj-button-menu-dropdown-icon";
        }
        const navigate = (0, react_router_dom_1.useNavigate)();
        const pageChangeHandler = (event) => {
            if (event.detail.updatedFrom === "internal")
                navigate(event.detail.value);
            onPageChanged(event.detail.value);
        };
        return ((0, jsx_runtime_1.jsx)("header", { role: "banner", class: "oj-web-applayout-header", children: (0, jsx_runtime_1.jsxs)("div", { class: "oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center", children: [(0, jsx_runtime_1.jsxs)("div", { class: "oj-flex-bar-middle oj-sm-align-items-baseline", children: [(0, jsx_runtime_1.jsx)("span", { role: "img", class: "oj-icon demo-oracle-icon", title: "Oracle Logo", alt: "Oracle Logo" }), (0, jsx_runtime_1.jsx)("h1", { class: "oj-sm-only-hide oj-web-applayout-header-title", title: "Application Name", children: currentDate })] }), (0, jsx_runtime_1.jsxs)("div", { class: "oj-flex-bar-end", children: [(0, jsx_runtime_1.jsx)("oj-navigation-list", { edge: "top", data: routesADP, selection: page, onselectionChanged: pageChangeHandler, children: (0, jsx_runtime_1.jsx)("template", { slot: "itemTemplate", render: renderNavList }) }), (0, jsx_runtime_1.jsx)("oj-toolbar", { children: (0, jsx_runtime_1.jsxs)("oj-menu-button", { id: "userMenu", display: getDisplayType(), chroming: "borderless", children: [(0, jsx_runtime_1.jsx)("span", { children: userLogin }), (0, jsx_runtime_1.jsx)("span", { slot: "endIcon", class: getEndIconClass() }), (0, jsx_runtime_1.jsxs)("oj-menu", { id: "menu1", slot: "menu", children: [(0, jsx_runtime_1.jsx)("oj-option", { id: "pref", value: "pref", children: "Preferences" }), (0, jsx_runtime_1.jsx)("oj-option", { id: "help", value: "help", children: "Help" }), (0, jsx_runtime_1.jsx)("oj-option", { id: "about", value: "about", children: "About" }), (0, jsx_runtime_1.jsx)("oj-option", { id: "out", value: "out", children: "Sign Out" })] })] }) })] })] }) }));
    }
    exports.Header = Header;
});
//# sourceMappingURL=header.js.map