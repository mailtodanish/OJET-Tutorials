import type { ComponentMessageItem } from '@oracle/oraclejet-preact/UNSAFE_ComponentMessage';
import type { Optional, ValidState } from './types';
import type { ValueUpdateDetail } from '@oracle/oraclejet-preact/utils/UNSAFE_valueUpdateDetail';
import type { Converter } from './types';
import type Validator = require('ojs/ojvalidator');
import type AsyncValidator = require('ojs/ojvalidator-async');
type UseEditableValueProps<V, DV> = {
    addBusyState?: (desc?: string) => () => void;
    ariaDescribedBy?: string;
    converter?: Converter<V, DV>;
    defaultDisplayValue: DV;
    deferredValidators?: Validator<V>[];
    disabled?: boolean;
    displayOptions?: {
        messages?: 'display' | 'none';
    };
    messagesCustom?: ComponentMessageItem[];
    onMessagesCustomChanged?: (messagesCustom?: ComponentMessageItem[]) => void;
    onRawValueChanged?: (rawValue: DV) => void;
    onTransientValueChanged?: (transientValue: V) => void;
    onValidChanged?: (valid: ValidState) => void;
    onValueChanged?: (value: V) => void;
    readonly?: boolean;
    validators?: (AsyncValidator<V> | Validator<V>)[];
    value?: V;
};
export declare function useEditableValue<V = string, DV = V>({ addBusyState, ariaDescribedBy, converter, defaultDisplayValue, deferredValidators, disabled, displayOptions, messagesCustom, onMessagesCustomChanged, onRawValueChanged, onValidChanged, onValueChanged, readonly, validators, value }: UseEditableValueProps<V, DV>): {
    value: Optional<V>;
    displayValue: DV | undefined;
    methods: {
        reset: () => void;
        showMessages: () => void;
        validate: () => Promise<'valid' | 'invalid'>;
    };
    textFieldProps: {
        'aria-describedby': string | undefined;
        messages: ComponentMessageItem[] | undefined;
        onCommit: ({ value }: ValueUpdateDetail<DV>) => Promise<void>;
        onInput: ({ value }: ValueUpdateDetail<DV>) => void;
        value: DV | undefined;
    };
};
export {};
