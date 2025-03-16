var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "preact/jsx-runtime", '@oracle/oraclejet-preact/translationBundle', "ojs/ojvcomponent-binding", "ojs/ojvcomponent", "@oracle/oraclejet-preact/UNSAFE_ToggleButton", "@oracle/oraclejet-preact/UNSAFE_IconToggleButton", "@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode", "@oracle/oraclejet-preact/hooks/UNSAFE_useTooltip", "@oracle/oraclejet-preact/utils/UNSAFE_mergeProps", "preact", "preact/hooks", "preact/compat", "css!oj-c/button/button-styles.css"], function (require, exports, jsx_runtime_1, translationBundle_1, ojvcomponent_binding_1, ojvcomponent_1, UNSAFE_ToggleButton_1, UNSAFE_IconToggleButton_1, UNSAFE_useTabbableMode_1, UNSAFE_useTooltip_1, UNSAFE_mergeProps_1, preact_1, hooks_1, compat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToggleButton = void 0;
    let ToggleButton = class ToggleButton extends preact_1.Component {
        constructor() {
            super(...arguments);
            this.buttonRef = (0, preact_1.createRef)();
        }
        render({ chroming: variant, disabled: isDisabled, 'aria-label': accessibleLabel, 'aria-describedby': ariaDescribedBy, width, display, value, label, tooltip, endIcon, startIcon, size, onValueChanged }) {
            const widthProps = width ? { style: { width } } : {};
            const ariaProps = { 'aria-describedby': ariaDescribedBy, 'aria-label': accessibleLabel };
            if (display != 'icons' ||
                (startIcon && endIcon && display == 'icons') ||
                (!startIcon && !endIcon && display == 'icons')) {
                return ((0, jsx_runtime_1.jsx)(ojvcomponent_1.Root, { ...widthProps, "aria-describedby": ariaProps['aria-describedby'], children: (0, jsx_runtime_1.jsx)(FunctionalToggleButton, { ref: this.buttonRef, isSelected: value, tooltip: tooltip, onToggle: () => {
                            onValueChanged?.(!value);
                        }, variant: variant, isDisabled: isDisabled, width: width ? '100%' : undefined, startIcon: startIcon, endIcon: endIcon, size: size, label: display == 'icons' ? (!startIcon && !endIcon ? label : '') : label, display: display != 'icons' ? display : 'all', ...ariaProps }) }));
            }
            else {
                return ((0, jsx_runtime_1.jsx)(ojvcomponent_1.Root, { ...widthProps, "aria-describedby": ariaDescribedBy, children: (0, jsx_runtime_1.jsx)(FunctionalIconToggleButton, { isSelected: value, onToggle: () => {
                            onValueChanged?.(!value);
                        }, width: width ? '100%' : undefined, ref: this.buttonRef, variant: variant, isDisabled: isDisabled, tooltip: tooltip && tooltip !== '' ? tooltip : label, "aria-label": accessibleLabel && accessibleLabel !== '' ? accessibleLabel : label, "aria-describedby": ariaDescribedBy, size: size, children: startIcon ?? endIcon }) }));
            }
        }
        click() {
            this.buttonRef.current?.click();
        }
        blur() {
            this.buttonRef.current?.blur();
        }
        focus() {
            this.buttonRef.current?.focus();
        }
    };
    exports.ToggleButton = ToggleButton;
    ToggleButton.defaultProps = {
        chroming: 'outlined',
        disabled: false,
        size: 'md',
        display: 'all',
        endIcon: null,
        startIcon: null,
        tooltip: '',
        value: false
    };
    ToggleButton._metadata = { "properties": { "label": { "type": "string" }, "value": { "type": "boolean", "writeback": true }, "tooltip": { "type": "string" }, "disabled": { "type": "boolean" }, "width": { "type": "number|string" }, "display": { "type": "string", "enumValues": ["all", "label", "icons"] }, "size": { "type": "string", "enumValues": ["sm", "md", "lg"] }, "chroming": { "type": "string", "enumValues": ["borderless", "outlined"], "binding": { "consume": { "name": "containerChroming" } } } }, "slots": { "startIcon": {}, "endIcon": {} }, "extension": { "_WRITEBACK_PROPS": ["value"], "_READ_ONLY_PROPS": [], "_OBSERVED_GLOBAL_PROPS": ["aria-describedby", "aria-label"] }, "methods": { "click": {}, "blur": {}, "focus": {} } };
    ToggleButton._translationBundleMap = {
        '@oracle/oraclejet-preact': translationBundle_1.default
    };
    ToggleButton._consumedContexts = [UNSAFE_useTabbableMode_1.TabbableModeContext];
    exports.ToggleButton = ToggleButton = __decorate([
        (0, ojvcomponent_1.customElement)('oj-c-toggle-button')
    ], ToggleButton);
    const FunctionalToggleButton = (0, compat_1.forwardRef)((props, ref) => {
        const buttonRef = (0, hooks_1.useRef)();
        (0, hooks_1.useImperativeHandle)(ref, () => ({
            focus: () => buttonRef.current?.focus(),
            blur: () => buttonRef.current?.blur(),
            click: () => buttonRef.current?.click()
        }), []);
        const { tooltipContent, tooltipProps } = (0, UNSAFE_useTooltip_1.useTooltip)({
            text: props.tooltip,
            isDisabled: props.isDisabled
        });
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(UNSAFE_ToggleButton_1.ToggleButton, { ref: buttonRef, ...(0, UNSAFE_mergeProps_1.mergeProps)(props, tooltipProps) }), tooltipContent] }));
    });
    const FunctionalIconToggleButton = (0, compat_1.forwardRef)((props, ref) => {
        const iconToggleButtonRef = (0, hooks_1.useRef)();
        (0, hooks_1.useImperativeHandle)(ref, () => ({
            focus: () => iconToggleButtonRef.current?.focus(),
            blur: () => iconToggleButtonRef.current?.blur(),
            click: () => iconToggleButtonRef.current?.click()
        }), []);
        return ((0, jsx_runtime_1.jsx)(UNSAFE_IconToggleButton_1.IconToggleButton, { ref: iconToggleButtonRef, ...props }));
    });
});
