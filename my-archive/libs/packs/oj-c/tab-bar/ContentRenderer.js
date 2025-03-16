define(["require", "exports", "preact/jsx-runtime", "@oracle/oraclejet-preact/UNSAFE_TabBar", "@oracle/oraclejet-preact/UNSAFE_OverflowTabBar", "./DataTabBarIcon", "@oracle/oraclejet-preact/UNSAFE_ReorderableTabBar"], function (require, exports, jsx_runtime_1, UNSAFE_TabBar_1, UNSAFE_OverflowTabBar_1, DataTabBarIcon_1, UNSAFE_ReorderableTabBar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OverflowTabBarRenderer = exports.TabBarRenderer = void 0;
    const badgeRenderer = (badgeValue, display) => {
        if (badgeValue != null) {
            let modifiedBadge = '';
            if (display === 'stacked' || display === 'icons') {
                modifiedBadge = badgeValue > 99 ? '99+' : badgeValue.toString();
            }
            else {
                modifiedBadge = badgeValue > 999 ? '999+' : badgeValue.toString();
            }
            return modifiedBadge;
        }
        else
            return undefined;
    };
    const tabBarItemRenderer = (tab, display) => {
        return ((0, jsx_runtime_1.jsx)(UNSAFE_TabBar_1.TabBarItem, { icon: tab.icon ? (0, jsx_runtime_1.jsx)(DataTabBarIcon_1.DataTabBarIcon, { icon: tab.icon }) : undefined, badge: badgeRenderer(tab.badge, display), itemKey: tab.itemKey, label: tab.label, metadata: tab.metadata, severity: tab.severity, "aria-controls": tab.tabPanelId }));
    };
    const removableTabBarItemRenderer = (tab, display) => {
        return ((0, jsx_runtime_1.jsx)(UNSAFE_TabBar_1.RemovableTabBarItem, { icon: tab.icon ? (0, jsx_runtime_1.jsx)(DataTabBarIcon_1.DataTabBarIcon, { icon: tab.icon }) : undefined, "aria-controls": tab.tabPanelId, badge: badgeRenderer(tab.badge, display), itemKey: tab.itemKey, label: tab.label, metadata: tab.metadata, severity: tab.severity }));
    };
    function TabBarRenderer(props, handleSelect, ref) {
        const { data, ...tabBarProps } = props;
        const display = tabBarProps.display;
        return tabBarProps.reorderable === 'enabled' ? ((0, jsx_runtime_1.jsx)(UNSAFE_ReorderableTabBar_1.ReorderableTabBar, { ...tabBarProps, onSelect: handleSelect, children: data.map((tab) => tab != null &&
                (tab.isRemovable
                    ? removableTabBarItemRenderer(tab, display)
                    : tabBarItemRenderer(tab, display))) })) : ((0, jsx_runtime_1.jsx)(UNSAFE_TabBar_1.TabBar, { onSelect: handleSelect, ref: ref, ...tabBarProps, children: data.map((tab) => tab.isRemovable
                ? removableTabBarItemRenderer(tab, display)
                : tabBarItemRenderer(tab, display)) }));
    }
    exports.TabBarRenderer = TabBarRenderer;
    function OverflowTabBarRenderer(props, handleSelect) {
        const { data, ...overflowTabBarProps } = props;
        return (0, jsx_runtime_1.jsx)(UNSAFE_OverflowTabBar_1.OverflowTabBar, { items: data, onSelect: handleSelect, ...overflowTabBarProps });
    }
    exports.OverflowTabBarRenderer = OverflowTabBarRenderer;
});
