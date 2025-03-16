var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "preact/jsx-runtime", '@oracle/oraclejet-preact/translationBundle', "ojs/ojvcomponent-binding", "ojs/ojvcomponent", "@oracle/oraclejet-preact/UNSAFE_MenuButton", "@oracle/oraclejet-preact/UNSAFE_IconMenuButton", "@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode", "@oracle/oraclejet-preact/hooks/UNSAFE_useTooltip", "@oracle/oraclejet-preact/utils/UNSAFE_mergeProps", "@oracle/oraclejet-preact/hooks/UNSAFE_useToggle", "oj-c/utils/PRIVATE_ItemsMenu/items-menu", "preact", "preact/hooks", "preact/compat", "css!oj-c/menu-button/menu-button-styles.css"], function (require, exports, jsx_runtime_1, translationBundle_1, ojvcomponent_binding_1, ojvcomponent_1, UNSAFE_MenuButton_1, UNSAFE_IconMenuButton_1, UNSAFE_useTabbableMode_1, UNSAFE_useTooltip_1, UNSAFE_mergeProps_1, UNSAFE_useToggle_1, items_menu_1, preact_1, hooks_1, compat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenuButton = void 0;
    let MenuButton = class MenuButton extends preact_1.Component {
        constructor() {
            super(...arguments);
            this.buttonRef = (0, preact_1.createRef)();
            this.OverFlowIcon = () => {
                return (0, jsx_runtime_1.jsx)("span", { class: "oj-ux-ico-overflow-h" });
            };
        }
        render({ chroming, label, tooltip, disabled, suffix, size, items, display, startIcon, endIcon, selection, onSelectionChanged, onOjMenuAction, 'aria-label': accessibleLabel, 'aria-describedby': ariaDescribedBy, width }) {
            const { bool: isOpen, toggle: toggleOpen } = (0, UNSAFE_useToggle_1.useToggle)();
            const widthProps = width ? { style: { width: width } } : {};
            return ((0, jsx_runtime_1.jsx)(ojvcomponent_1.Root, { ...widthProps, children: display !== 'icons' || (startIcon && endIcon) ? ((0, jsx_runtime_1.jsx)(FunctionalMenuButton, { isMenuOpen: isOpen, onToggleMenu: toggleOpen, label: display === 'icons' ? (!startIcon ? label : '') : label, suffix: display === 'icons' ? (!startIcon ? suffix : '') : suffix, ref: this.buttonRef, variant: chroming, size: size, tooltip: tooltip, width: '100%', "aria-label": accessibleLabel, "aria-describedby": ariaDescribedBy, icon: display !== 'label' ? startIcon : null, isDisabled: disabled, children: (0, jsx_runtime_1.jsx)(items_menu_1.ItemsMenu, { items: items, selection: selection, onSelectionChanged: onSelectionChanged, onOjMenuAction: onOjMenuAction }) })) : ((0, jsx_runtime_1.jsx)(FunctionalIconMenuButton, { isMenuOpen: isOpen, width: '100%', onToggleMenu: toggleOpen, ref: this.buttonRef, variant: chroming, isDisabled: disabled, tooltip: tooltip, accessibleLabel: accessibleLabel && accessibleLabel !== '' ? accessibleLabel : label, "aria-describedby": ariaDescribedBy, size: size, isIconOnly: (!startIcon && endIcon) || (!startIcon && !endIcon) ? display === 'icons' : false, icon: startIcon ?? (endIcon ? endIcon : (0, jsx_runtime_1.jsx)(this.OverFlowIcon, {})), children: (0, jsx_runtime_1.jsx)(items_menu_1.ItemsMenu, { items: items, selection: selection, onSelectionChanged: onSelectionChanged, onOjMenuAction: onOjMenuAction }) })) }));
        }
        blur() {
            this.buttonRef.current?.blur();
        }
        focus() {
            this.buttonRef.current?.focus();
        }
    };
    exports.MenuButton = MenuButton;
    MenuButton.defaultProps = {
        label: '',
        chroming: 'outlined',
        disabled: false,
        size: 'md',
        display: 'all',
        items: []
    };
    MenuButton._metadata = { "properties": { "label": { "type": "string" }, "suffix": { "type": "string" }, "tooltip": { "type": "string" }, "items": { "type": "Array<object>" }, "selection": { "type": "object", "writeback": true }, "display": { "type": "string", "enumValues": ["all", "label", "icons"] }, "disabled": { "type": "boolean" }, "size": { "type": "string", "enumValues": ["xs", "sm", "md", "lg"] }, "width": { "type": "number|string" }, "chroming": { "type": "string", "enumValues": ["solid", "ghost", "borderless", "outlined"], "binding": { "consume": { "name": "containerChroming" } } } }, "slots": { "startIcon": {}, "endIcon": {} }, "events": { "ojMenuAction": { "bubbles": true } }, "extension": { "_WRITEBACK_PROPS": ["selection"], "_READ_ONLY_PROPS": [], "_OBSERVED_GLOBAL_PROPS": ["aria-describedby", "aria-label"] }, "methods": { "blur": {}, "focus": {} } };
    MenuButton._translationBundleMap = {
        '@oracle/oraclejet-preact': translationBundle_1.default
    };
    MenuButton._consumedContexts = [UNSAFE_useTabbableMode_1.TabbableModeContext];
    exports.MenuButton = MenuButton = __decorate([
        (0, ojvcomponent_1.customElement)('oj-c-menu-button')
    ], MenuButton);
    const FunctionalMenuButton = (0, compat_1.forwardRef)((props, ref) => {
        const buttonRef = (0, hooks_1.useRef)();
        (0, hooks_1.useImperativeHandle)(ref, () => ({
            focus: () => buttonRef.current?.focus(),
            blur: () => buttonRef.current?.blur()
        }), []);
        const { tooltipContent, tooltipProps } = (0, UNSAFE_useTooltip_1.useTooltip)({
            text: props.tooltip,
            isDisabled: props.isDisabled
        });
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(UNSAFE_MenuButton_1.MenuButton, { ref: buttonRef, ...(0, UNSAFE_mergeProps_1.mergeProps)(props, tooltipProps) }), tooltipContent] }));
    });
    const FunctionalIconMenuButton = (0, compat_1.forwardRef)((props, ref) => {
        const iconButtonRef = (0, hooks_1.useRef)();
        (0, hooks_1.useImperativeHandle)(ref, () => ({
            focus: () => iconButtonRef.current?.focus(),
            blur: () => iconButtonRef.current?.blur()
        }), []);
        return (0, jsx_runtime_1.jsx)(UNSAFE_IconMenuButton_1.IconMenuButton, { ref: iconButtonRef, ...props });
    });
});
