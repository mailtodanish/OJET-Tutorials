import { JetElement, JetSettableProperties, JetElementCustomEventStrict, JetSetPropertyType } from 'ojs/index';
import { GlobalProps } from 'ojs/ojvcomponent';
import 'ojs/oj-jsx-interfaces';
import { ExtendGlobalProps, ObservedGlobalProps, PropertyChanged, Slot } from 'ojs/ojvcomponent';
import { ToggleButton as PreactToggleButton } from '@oracle/oraclejet-preact/UNSAFE_ToggleButton';
import { Size } from '@oracle/oraclejet-preact/utils/UNSAFE_size';
import { ComponentProps, Component } from 'preact';
import 'css!oj-c/button/button-styles.css';
type PreactToggleButtonProps = ComponentProps<typeof PreactToggleButton>;
type Props = ObservedGlobalProps<'aria-describedby' | 'aria-label'> & {
    label: string;
    value?: boolean;
    onValueChanged?: PropertyChanged<boolean>;
    tooltip?: string;
    startIcon?: Slot;
    endIcon?: Slot;
    disabled?: boolean;
    width?: Size;
    display?: 'all' | 'icons' | 'label';
    size?: 'sm' | 'md' | 'lg';
    chroming?: PreactToggleButtonProps['variant'];
};
export declare class ToggleButton extends Component<ExtendGlobalProps<Props>> {
    static defaultProps: Partial<Props>;
    private buttonRef;
    render({ chroming: variant, disabled: isDisabled, 'aria-label': accessibleLabel, 'aria-describedby': ariaDescribedBy, width, display, value, label, tooltip, endIcon, startIcon, size, onValueChanged }: ExtendGlobalProps<Props>): import("preact").JSX.Element;
    click(): void;
    blur(): void;
    focus(): void;
}
export {};
export interface CToggleButtonElement extends JetElement<CToggleButtonElementSettableProperties>, CToggleButtonElementSettableProperties {
    addEventListener<T extends keyof CToggleButtonElementEventMap>(type: T, listener: (this: HTMLElement, ev: CToggleButtonElementEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof CToggleButtonElementSettableProperties>(property: T): CToggleButtonElement[T];
    getProperty(property: string): any;
    setProperty<T extends keyof CToggleButtonElementSettableProperties>(property: T, value: CToggleButtonElementSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, CToggleButtonElementSettableProperties>): void;
    setProperties(properties: CToggleButtonElementSettablePropertiesLenient): void;
    blur: ToggleButton['blur'];
    click: ToggleButton['click'];
    focus: ToggleButton['focus'];
}
export namespace CToggleButtonElement {
    type chromingChanged = JetElementCustomEventStrict<CToggleButtonElement['chroming']>;
    type disabledChanged = JetElementCustomEventStrict<CToggleButtonElement['disabled']>;
    type displayChanged = JetElementCustomEventStrict<CToggleButtonElement['display']>;
    type labelChanged = JetElementCustomEventStrict<CToggleButtonElement['label']>;
    type sizeChanged = JetElementCustomEventStrict<CToggleButtonElement['size']>;
    type tooltipChanged = JetElementCustomEventStrict<CToggleButtonElement['tooltip']>;
    type valueChanged = JetElementCustomEventStrict<CToggleButtonElement['value']>;
    type widthChanged = JetElementCustomEventStrict<CToggleButtonElement['width']>;
}
export interface CToggleButtonElementEventMap extends HTMLElementEventMap {
    'chromingChanged': JetElementCustomEventStrict<CToggleButtonElement['chroming']>;
    'disabledChanged': JetElementCustomEventStrict<CToggleButtonElement['disabled']>;
    'displayChanged': JetElementCustomEventStrict<CToggleButtonElement['display']>;
    'labelChanged': JetElementCustomEventStrict<CToggleButtonElement['label']>;
    'sizeChanged': JetElementCustomEventStrict<CToggleButtonElement['size']>;
    'tooltipChanged': JetElementCustomEventStrict<CToggleButtonElement['tooltip']>;
    'valueChanged': JetElementCustomEventStrict<CToggleButtonElement['value']>;
    'widthChanged': JetElementCustomEventStrict<CToggleButtonElement['width']>;
}
export interface CToggleButtonElementSettableProperties extends JetSettableProperties {
    chroming?: Props['chroming'];
    disabled?: Props['disabled'];
    display?: Props['display'];
    label: Props['label'];
    size?: Props['size'];
    tooltip?: Props['tooltip'];
    value?: Props['value'];
    width?: Props['width'];
}
export interface CToggleButtonElementSettablePropertiesLenient extends Partial<CToggleButtonElementSettableProperties> {
    [key: string]: any;
}
export interface ToggleButtonIntrinsicProps extends Partial<Readonly<CToggleButtonElementSettableProperties>>, GlobalProps, Pick<preact.JSX.HTMLAttributes, 'ref' | 'key'> {
    children?: import('preact').ComponentChildren;
    onchromingChanged?: (value: CToggleButtonElementEventMap['chromingChanged']) => void;
    ondisabledChanged?: (value: CToggleButtonElementEventMap['disabledChanged']) => void;
    ondisplayChanged?: (value: CToggleButtonElementEventMap['displayChanged']) => void;
    onlabelChanged?: (value: CToggleButtonElementEventMap['labelChanged']) => void;
    onsizeChanged?: (value: CToggleButtonElementEventMap['sizeChanged']) => void;
    ontooltipChanged?: (value: CToggleButtonElementEventMap['tooltipChanged']) => void;
    onvalueChanged?: (value: CToggleButtonElementEventMap['valueChanged']) => void;
    onwidthChanged?: (value: CToggleButtonElementEventMap['widthChanged']) => void;
}
declare global {
    namespace preact.JSX {
        interface IntrinsicElements {
            'oj-c-toggle-button': ToggleButtonIntrinsicProps;
        }
    }
}
